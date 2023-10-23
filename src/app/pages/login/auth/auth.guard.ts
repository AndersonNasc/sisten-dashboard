import { Injectable } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
//Service
import { AuthenticationService } from 'src/app/core/service/authentication.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {

    const url = state.url;

    return this.authenticationService.userIsLogged().pipe(
      tap((isLogged) => {
        if (!isLogged) {
          this.router.navigateByUrl('/auth/login');
          return false;
        } else {
          return true;
        }
      })
    );
  }
}
