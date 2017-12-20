import { Injectable, EventEmitter,ElementRef } from '@angular/core';
import { DataService } from './data.service';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Subscription } from 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { NgxMyDatePickerDirective } from 'ngx-mydatepicker';
declare var SP: any;

@Injectable()
export class CommonService {
    public personalPhotoUrl = "/_layouts/15/userphoto.aspx?accountname=";
    public delveUrl = "https://ind.delve.office.com/?p=";
    public siteUrl: string = new SP.ClientContext().get_url();
    public loginUser: any;
    public configValue: any;
    public breadCrumbTitle:string;
    public panelTitle:string;
    public isAdmin:boolean = false;
    public isAdminTbm: boolean = false;
    public ngxdp: NgxMyDatePickerDirective = null;
    public ngxdps: NgxMyDatePickerDirective = null;
    public ngxdpx1: NgxMyDatePickerDirective = null;
    public ngxdpx2: NgxMyDatePickerDirective = null;
    public ngxdpx3: NgxMyDatePickerDirective = null;
    public ngxdpx4: NgxMyDatePickerDirective = null;
    public ngxdpx5: NgxMyDatePickerDirective = null;
    public ngxdpx6: NgxMyDatePickerDirective = null;
    public ngxdpx7: NgxMyDatePickerDirective = null;
    public autoCompleteInput: ElementRef = null;
    constructor(private dataService: DataService,
        private http: Http) {
            this.ngxdp = null;
            this.ngxdps = null;
            this.ngxdpx1 = null;
            this.ngxdpx2 = null;
            this.ngxdpx3 = null;
            this.ngxdpx4 = null;
            this.ngxdpx5 = null;
            this.ngxdpx6 = null;
            this.ngxdpx7 = null;
            this.autoCompleteInput = null;
            
    }

    getConfig() {
        return new Promise((resolve, reject) => {
            if (this.configValue != null && this.configValue != undefined) {
                resolve();
            }
            else {
                this.dataService.httpGet(this.siteUrl + "/_api/web/Lists/GetByTitle('Config')/items").subscribe((response: any) => {
                        let config = {};

                        for (let i = 0; i < response.value.length; i++) {
                            config[response.value[i].Key] = response.value[i].Value;
                        }

                        this.configValue = config;
                        resolve();
                    }, error => {
                        reject();
                    })

            }
        });
    }

    getLoginUser() {
        return new Promise((resolve, reject) => {
            if (this.loginUser != null && this.loginUser != undefined) {
                resolve();
            }
            else {
                this.dataService.httpGet(this.siteUrl + "/_api/Web/CurrentUser?$select=Id,Title,Email,IsSiteAdmin")
                    .subscribe((loginResponse: any) => {
                        this.dataService.httpGet(this.siteUrl +  "/_api/web/GetUserById(" + loginResponse.Id + ")/Groups")
                            .subscribe((groupResponse: any) => {
                                this.dataService.httpGet(this.siteUrl + "/_api/web/Lists/GetByTitle('UsersMap')/items?$filter=Email eq '"+ loginResponse.Email + "'")
                                    .subscribe((detailResponse: any) => {
                                        loginResponse.groups = groupResponse.value;
                                        loginResponse.detail = detailResponse.value[0];
                                        this.loginUser = loginResponse;
                                        resolve();
                                        },
                                        error => {
                                            console.log(error);
                                            reject();
                                        });
                            },
                            error => {
                                console.log(error);
                                reject();
                            });
                    },
                    error => {
                        console.log(error);
                        reject();
                    });
            }
        })
    }

    gotoPersonProfile(email: string) {
        if (email != null && email != undefined && email.trim() != "") {
            window.open(this.delveUrl + email,
                "_blank");
        }
    }


}