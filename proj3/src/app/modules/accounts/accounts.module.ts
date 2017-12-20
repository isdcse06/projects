import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { PaginationModule } from 'ngx-bootstrap';
import { Ng2TableModule, } from 'ngx-datatable';

import { AccountsComponent } from './accounts.component';

import { DataService } from '../../common/services/data.service';
import { CommonService } from '../../common/services/common.service';
@NgModule({
  declarations: [
    AccountsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PaginationModule.forRoot(),
    Ng2TableModule
  ],
  providers: [
      DataService,
      CommonService
  ],
  exports:[
      AccountsComponent
  ]
})
export class AccountsModule { }
