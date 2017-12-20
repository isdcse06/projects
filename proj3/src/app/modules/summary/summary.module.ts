import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { SummaryComponent } from './summary.component';

import { DataService } from '../../common/services/data.service';
import { CommonService } from '../../common/services/common.service';
@NgModule({
  declarations: [
    SummaryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
      DataService,
      CommonService
  ],
  exports:[
      SummaryComponent
  ]
})
export class SummaryModule { }
