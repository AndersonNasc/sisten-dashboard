import { Injectable, Injector } from '@angular/core';
import { HttpBaseService } from './http-base.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MenuService extends HttpBaseService{

  private endpoint = 'menu'

  constructor(protected override readonly injector: Injector) { 
    super(injector);
  }
  getMenu(): Observable<any>{
    return this.httpGet(this.endpoint)
  }
}