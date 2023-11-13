import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpBaseService {
  
  private readonly httpClient!: HttpClient;
   // private apiBase = 'http://localhost:3000/';
   private apiBase = 'http://184.72.118.104:8000/';

  constructor(protected readonly injector: Injector) {
    if (injector == null || injector == undefined) {
      throw new Error('Injector não pode ser nulo');
    }

    this.httpClient = injector.get(HttpClient);
  }

  protected httpGet(endpoint: string): Observable<any> {
    return this.httpClient.get(`${this.apiBase}${endpoint}`);
  }
  protected httpPost(endpoint: string, data: any): Observable<any> {
    return this.httpClient.post(`${this.apiBase}${endpoint}`, data);
  }
  protected httpPut(endpoint: string, data: any): Observable<any> {
    return this.httpClient.put(`${this.apiBase}${endpoint}`, data);
  }
  protected httpDelete(endpoint: string): Observable<any> {
    return this.httpClient.delete(`${this.apiBase}${endpoint}`);
  }
}
