import { Injectable, Injector } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
//Service
import { HttpBaseService } from './http-base.service';
//Model
import { Login } from 'src/app/shared/models/login';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService extends HttpBaseService {
  
  private subjectUsuario: BehaviorSubject<any> = new BehaviorSubject(null);
  private subjectLogin: BehaviorSubject<any> = new BehaviorSubject(false);

  constructor(
    protected override readonly injector: Injector,
  ) {
    super(injector);
  }

  login(login: Login): Observable<any> {
    return this.httpPost('authentication', login).pipe(
      map((response) => {
        sessionStorage.setItem('token', response.token);
        this.subjectUsuario.next(response.user);
        this.subjectLogin.next(true);
        return response.user;
      })
    );
  }

  logout() {
    sessionStorage.removeItem('token');
    this.subjectUsuario.next(null);
    this.subjectLogin.next(false);
  }

  userIsLogged(): Observable<any> {
    const token = sessionStorage.getItem('token');

    if (token) {
      this.subjectLogin.next(true);
    }
    return this.subjectLogin.asObservable();
  }

  getUser() {
    this.subjectUsuario.asObservable();
  }
}
