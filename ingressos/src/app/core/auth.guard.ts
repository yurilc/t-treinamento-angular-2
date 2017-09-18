import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Route, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
    constructor(private authService: AuthService,
                private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot)
        : Observable<boolean> | Promise<boolean> | boolean {
        const loggedIn = this.authService.isLoggedIn();
        if(!loggedIn) {
            this.router.navigate(['/']);
        }
        return loggedIn;
    }

    canActivateChild(route: ActivatedRouteSnapshot,
                     state: RouterStateSnapshot)
        : Observable<boolean> | Promise<boolean> | boolean {
        return this.canActivate(route, state);
    }

    canLoad(route: Route)
        : Observable<boolean> | Promise<boolean> | boolean {
        const loggedIn = this.authService.isLoggedIn();
        if(!loggedIn) {
            this.router.navigate(['/']);
        }
        return loggedIn;
    }
}
