import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CommonService } from './common.service';

@Injectable()
export class LoginUserAuthGuard implements CanActivate {

    constructor(private router: Router,
        private commonService: CommonService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
        return this.commonService.getLoginUser()
            .then(() => {
                return true;
            })
            .catch(error => {
                this.router.navigate(['/error']);
                return false;
            })

    }
}