import { Injectable, Injector } from '@angular/core';
import { HttpBaseService } from './http-base.service';
import { Observable } from 'rxjs';
import { Dashboard } from 'src/app/shared/models/dashboard';

@Injectable({
  providedIn: 'root',
})
export class DasboardService extends HttpBaseService {
  private endpoint = 'v1/painel';

  constructor(protected override readonly injector: Injector) {
    super(injector);
  }

  getList(): Observable<any> {
    return this.httpGet(this.endpoint);
  }

  getListId(id: number): Observable<any> {
    return this.httpGet(`${this.endpoint}/${id}`);
  }
  setMessage(ip: string, mensagem: string, porta: string): Observable<any> {
    var model = {
      "ip":ip,
      "porta":porta,
      "mensagem":mensagem
      }
    return this.httpPost(`${this.endpoint}/enviar-mensagem?ip=${ip}&porta=${porta}&mensagem=${mensagem}`, null);
  }

  // updateListId(payload: Dashboard): Observable<any> {
  //   return this.httpPut(`${this.endpoint}/${payload.id}`, payload);
  // }

  // deleteListId(id: number): Observable<any> {
  //   return this.httpDelete(`${this.endpoint}/${id}`);
  // }

  create(payload: Dashboard): Observable<any> {
    return this.httpPost(`${this.endpoint}`, payload);
  }
}
