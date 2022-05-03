import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { History } from '../../models/history';

@Injectable({
  providedIn: 'root',
})
export class HistoryApiService {
  url = 'http://localhost:3000/History';
  constructor(private http: HttpClient) {}

  getHistory() {
    return this.http.get<History[]>(this.url);
  }
  getHistoryById(id: number) {
    let params = new HttpParams();
    params = params.append('id', id);
    return this.http.get<History[]>(this.url, {params});
  }
  saveHistory(history: History): Observable<History> {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
    });
    let options = { headers: httpHeaders };
    return this.http.post<History>(this.url, history, options);
  }
}
