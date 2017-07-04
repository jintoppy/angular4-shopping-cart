import { Injectable }     from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot }    from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate{
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        console.log(route);
        console.log(state);
        console.log('within canActivate');
        return true;
    }
}