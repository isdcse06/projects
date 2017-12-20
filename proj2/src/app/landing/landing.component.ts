import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Http} from "@angular/http";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LandingComponent implements OnInit {

  
  public data;
  public filterQuery = "";
  public rowsOnPage = 10;
  public sortBy = "email";
  public sortOrder = "asc";

  constructor(private http: Http) {
  }

  ngOnInit(): void {
      this.http.get("./data.json")
          .subscribe((data)=> {
              setTimeout(()=> {
                  this.data = data.json();
              }, 1000);
          });
  }

  public toInt(num: string) {
      return +num;
  }

  public sortByWordLength = (a: any) => {
      return a.city.length;
  }

}
