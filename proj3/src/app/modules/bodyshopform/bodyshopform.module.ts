import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap';
import { BodyshopFormComponent } from './bodyshopform.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { DataService } from '../../common/services/data.service';
import { CommonService } from '../../common/services/common.service';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { DatepickerModule } from 'ngx-bootstrap/datepicker';
import { NguiAutoCompleteModule } from '@ngui/auto-complete';
import { NgxMyDatePickerModule } from 'ngx-mydatepicker';

import {ToasterModule, ToasterService} from 'angular2-toaster';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    BodyshopFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AccordionModule.forRoot(),
    ModalModule.forRoot(),
    DatepickerModule.forRoot(),
    NguiAutoCompleteModule,
    BrowserAnimationsModule,
    NgxMyDatePickerModule,
    ToasterModule
  ],
  providers: [
    DataService,
    CommonService
  ],
  exports: [
    BodyshopFormComponent
  ]
})
export class BodyshopFormModule { }
