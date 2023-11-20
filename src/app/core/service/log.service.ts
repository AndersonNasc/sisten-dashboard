import { Injectable, Injector } from '@angular/core';
import { HttpBaseService } from './http-base.service';
import { Observable } from 'rxjs';
import { Dashboard } from 'src/app/shared/models/dashboard';

@Injectable({
  providedIn: 'root',
})
export class LogService extends HttpBaseService {
  private endpoint = 'evento';

  constructor(protected override readonly injector: Injector) {
    super(injector);
  }

  getLogs(): Observable<any> {
    return this.httpGet(`${this.endpoint}?skip=1&limit=20`);
  }
}
