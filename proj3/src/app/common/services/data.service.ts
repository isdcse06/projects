import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
declare var SP: any;

@Injectable()
export class DataService {
    private siteUrl = new SP.ClientContext().get_url();
    constructor(public http: Http) { }
   
    httpGet(url: string) {

        let headers = new Headers(
            {
                // "content-type": "application/json;odata=verbose",
                // "accept": "application/json;odata=verbose"
                "Access-Control-Allow-Origin": "*"
            }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers });
        return this.http.get(url, options)
            .map((res: Response) => res.json())
            .do((data: any) => { })
            .catch((error: any)=> this.handleError(error));
    }

    httpPost(url: any, listdata: any, isUpdate:boolean) {
        let headers = new Headers(
            {
                "content-type": "application/json;odata=verbose",
                "accept": "application/json;odata=verbose",
                "IF-MATCH": "*"
            });
        let requestOptions = new RequestOptions({ headers: headers });

        return new Observable<Response>((subscriber: any) => {
            this.http.post(this.siteUrl + "/_api/contextinfo", requestOptions)
                .map(response => response.json())
                .subscribe((response: any) => {
                    requestOptions.headers.set("X-RequestDigest", response.FormDigestValue);
                    if(isUpdate){
                        requestOptions.headers.set("X-HTTP-Method", "MERGE");
                    } 
                    return this.http.post(url, listdata, requestOptions)
                        .map(response => response.json())
                        .subscribe(response => {
                            subscriber.next(response);
                            subscriber.complete();
                        }, error => {
                            subscriber.error((error: any)=> this.handleError(error));
                        })
                }, error => {
                    subscriber.error((error: any)=> this.handleError(error));                    
                })
        })
    }

    private handleError(error: any) {

        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}