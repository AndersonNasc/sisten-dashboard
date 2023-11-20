import { Injectable, Injector } from '@angular/core';
import { HttpBaseService } from './http-base.service';
import { Observable } from 'rxjs';
import { Dashboard } from 'src/app/shared/models/dashboard';

@Injectable({
  providedIn: 'root',
})
export class ParametrizationService extends HttpBaseService {
  private endpoint = 'parametros';

  constructor(protected override readonly injector: Injector) {
    super(injector);
  }

  getValue(): Observable<any> {
    return this.httpGet(`${this.endpoint}`);
  }

  upValue(model:any,id:string): Observable<any> {
    return this.httpPut(`${this.endpoint}/${id}`, model);
  }
}
