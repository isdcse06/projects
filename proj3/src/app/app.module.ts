import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { routing } from './app.routes'

import { AccountsModule } from './modules/accounts/accounts.module';
import { SummaryModule } from './modules/summary/summary.module';
import { BodyshopFormModule } from './modules/bodyshopform/bodyshopform.module';
import { NgxMyDatePickerModule } from 'ngx-mydatepicker';
import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxMyDatePickerModule,
    HttpModule,
    AccountsModule,
    SummaryModule,
    BodyshopFormModule,
    routing
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
