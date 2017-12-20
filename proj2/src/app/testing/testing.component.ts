import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
//import { BsModalService } from 'ngx-bootstrap/modal';
//import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import * as Chartist from 'chartist';
declare var $: any;
@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {
  //@ViewChild('modalContent') modalContent: TemplateRef<any>;
  //showReport:boolean = false;
  //showIssue:boolean = false;
  //showDialog = false;
  constructor() { }

  ngOnInit() { }
  //public modalRef: BsModalRef;
  //   modelPop(): void {
  //     this.modalRef = this.modalService.show(this.modalContent, { class: 'modal-md' });
  // }
  showreport() {
    var hidden = $('.reports');
      hidden.animate({ "left": "0" }, "slow").addClass('visible');
  }

  hideReport(){
    var hidden = $('.reports');
    if (hidden.hasClass('visible')) {
      hidden.animate({ "left": "-150%" }, "slow").removeClass('visible');
    }
  }
  
  showIssue() {
    var hidden = $('.issue');
      hidden.animate({ "right": "0" }, "slow").addClass('visible');  
  }
  hideIssue(){
    var hidden = $('.issue');
    if (hidden.hasClass('visible')) {
      hidden.animate({ "right": "-150%" }, "slow").removeClass('visible');
    } 
  }
}
