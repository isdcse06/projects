import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
//import { ModalModule } from 'ngx-bootstrap';
import {ModalModule} from "ng2-modal";
import { DataTableModule } from 'angular2-datatable';
import { NgxPaginationModule } from 'ngx-pagination';
import { TestingComponent } from './testing/testing.component';
import { ReportComponent } from './report/report.component';
import { InitiatedReportComponent } from './report/initiated.component';
import { TestingReportComponent } from './report/testing.component';
import { DialogComponent } from './testing/dialog.component';
import { PublishedReportComponent } from './report/published.component';
import { ProcessingReportComponent } from './report/processing.component';
import { EndUserDashboardComponent } from './landing/enduserDashboard.component';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';
import { TabsModule } from "ngx-tabs";
import {BreadcrumbModule} from 'angular-crumbs';
import { ClickOutsideDirective } from './testing/clickOutside.directive';
@NgModule({
  declarations: [
    AppComponent,
    TestingComponent,
    ReportComponent,
    InitiatedReportComponent,
    TestingReportComponent,
    DialogComponent,
    PublishedReportComponent,
    ProcessingReportComponent,
    LandingComponent,
    EndUserDashboardComponent,
    LoginComponent,
    ClickOutsideDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    DataTableModule,
    TabsModule,
    //ModalModule.forRoot(),
    ModalModule,
    NgxPaginationModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    BreadcrumbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
