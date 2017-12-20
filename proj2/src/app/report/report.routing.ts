import { Routes } from '@angular/router';
import {InitiatedReportComponent} from './initiated.component';
import {ProcessingReportComponent} from './processing.component';
import {TestingReportComponent} from './testing.component';
import {PublishedReportComponent} from './published.component';
export const ReportRoute : Routes = [
    {path: '', component: InitiatedReportComponent},
    {path: 'initiated', component: InitiatedReportComponent, data: { breadcrumb: 'Initiated'}},
    {path: 'processing', component: ProcessingReportComponent, data: { breadcrumb: 'Processing'}},
    {path: 'testing', component: TestingReportComponent, data: { breadcrumb: 'Processing'}},
    {path: 'published', component: PublishedReportComponent, data: { breadcrumb: 'Published'}},
]