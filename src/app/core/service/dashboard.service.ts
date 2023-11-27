import { Injectable, Injector } from '@angular/core';
import { HttpBaseService } from './http-base.service';
import { Observable } from 'rxjs';
import { Dashboard } from 'src/app/shared/models/dashboard';

@Injectable({
  providedIn: 'root',
})
export class DasboardService extends HttpBaseService {
  private endpoint = 'painel';

  constructor(protected override readonly injector: Injector) {
    super(injector);
  }

  getList(): Observable<any> {
    return this.httpGet(this.endpoint);
  }

  getListId(id: string): Observable<any> {
    return this.httpGet(`${this.endpoint}/${id}`);
  }

  setMessage(ip: string, mensagem: string, porta: string, painelId:string): Observable<any> {
    var model = {
      "painel_id":painelId,
      "mensagem":mensagem
      }
    return this.httpPost(`${this.endpoint}/enviar-mensagem`, model);
  }

  updateListId(payload: Dashboard): Observable<any> {
    return this.httpPut(`${this.endpoint}/${payload._id}`, payload);
  }

  deleteListId(id: string): Observable<any> {
    return this.httpDelete(`${this.endpoint}?id_painel=${id}`);
  }

  create(payload: Dashboard): Observable<any> {
    return this.httpPost(`${this.endpoint}`, payload);
  }
}
