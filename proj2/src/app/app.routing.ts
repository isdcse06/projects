import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { TestingComponent } from './testing/testing.component';
import { ReportComponent } from './report/report.component';
import { LandingComponent } from './landing/landing.component';
import { EndUserDashboardComponent } from './landing/enduserDashboard.component';
import { LoginComponent } from './login/login.component';
import { ReportRoute } from './report/report.routing';

const routes: Routes = [
  {
    path: 'report', component: ReportComponent,
    children: ReportRoute, data: { breadcrumb: 'Report' }
  },
  { path: 'login', component: LoginComponent, data: { isLogin: true } },
  { path: 'dashboard', component: LandingComponent, data: { breadcrumb: 'Dashboard' } },
  { path: 'dashboard1', component: EndUserDashboardComponent, data: { breadcrumb: 'Dashboard' } },
  { path: 'testing', component: TestingComponent, data: { breadcrumb: 'Testing' } },
  { path: '', redirectTo: 'login', pathMatch: 'full', data: { breadcrumb: 'Dashboard' } }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
