import { Component, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'processing-report',
  templateUrl: './processing.component.html',
  styleUrls: ['./processing.component.css']
})
export class ProcessingReportComponent implements OnInit {
  @ViewChild("addUser") addUser:any;
  users : any = [];
  constructor() { }
  addTo(name: string){
    this.users.push(name);
    this.addUser.nativeElement.value = "";
}
removeTo(removeUser: any){
   // const index: number = this.data.indexOf(msg);
    this.users.splice(removeUser,1);
}
  ngOnInit() {
  }

}