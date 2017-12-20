import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { AccountsComponent } from './modules/accounts/accounts.component';
import { SummaryComponent } from './modules/summary/summary.component';
import { BodyshopFormComponent } from './modules/bodyshopform/bodyshopform.component';

import { LoginUserAuthGuard } from './common/services/loginuserauthguard.service';
import { ConfigValueAuthGuard } from './common/services/configvalueauthguard.service';

const appRoutes: Routes = [
    { path: '', redirectTo: 'accounts', pathMatch: 'full' },
    { path: 'accounts', component: AccountsComponent},
    { path: 'summary', component: SummaryComponent},
    { path: 'form', component: BodyshopFormComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });

