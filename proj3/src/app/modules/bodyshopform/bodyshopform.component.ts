import { Component, OnInit, AfterViewInit, Input, Output,ViewChild,ElementRef,Renderer, TemplateRef, ViewEncapsulation } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { INgxMyDpOptions, IMyMarkedDate, NgxMyDatePickerDirective } from 'ngx-mydatepicker';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
declare var $: any;
@Component({
    selector: 'app-bodyshopform',
    templateUrl: './bodyshopform.component.html',
    styleUrls:['./bodyshopform.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class BodyshopFormComponent implements OnInit {
    @ViewChild('modalContent') modalContent: TemplateRef<any>;
    //panelTitle : string = "PURCHASE ORDER REQUISITION";
    private showDatePicker: boolean = false;

    private myDatePickerOptions: INgxMyDpOptions = {
        dateFormat: 'dd/mm/yyyy',
        firstDayOfWeek: 'mo',
        sunHighlight: true,
        markCurrentDay: true,
        alignSelectorRight: false,
        openSelectorTopOfInput: false,
        showSelectorArrow: true,
        monthSelector: true,
        yearSelector: true,
        satHighlight: false,
        highlightDates: [],
        disableDates:[],
        disableHeaderButtons: true,
        showWeekNumbers: false,
        markDates: [],
        markWeekends: <IMyMarkedDate>{},
        selectorHeight: '232px',
        selectorWidth: '252px',
        closeSelectorOnDateSelect: true
    };
    

    ngAfterViewInit(){


        if($(window).width()>=768){

        }else{

           $('.bodyShopform .panel-group .panel-body').mCustomScrollbar({
                axis:"x",
                  theme:"minimal-dark",
                  autoHideScrollbar: true,
                  scrollbarPosition: "outside"
              });

        }


    }
    public modalRef: BsModalRef;
    constructor(private modalService: BsModalService) {}
    handleEvent(): void {
        this.modalRef = this.modalService.show(this.modalContent, {class: 'modal-md'});
      }
    onResize(event) {

         if($(window).width()>=768){
            $('.bodyShopform .panel-group .panel-body').mCustomScrollbar("destroy");
        }else{
          $('.bodyShopform .panel-group .panel-body').mCustomScrollbar({
                axis:"x",
                  theme:"minimal-dark",
                  autoHideScrollbar: true,
                  scrollbarPosition: "outside"
              });
        }
  }
     ngOnInit() {

    }
      
     
}
