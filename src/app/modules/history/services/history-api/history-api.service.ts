import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { History } from '../../models/history';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HistoryApiService {
  url = environment.api + '/History';
  constructor(private http: HttpClient) {}

  getHistory() {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
    });
    let options = { headers: httpHeaders };
    return this.http.get<History[]>(this.url,options);
  }
  getHistoryById(id: number) {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
    });
    let options = { headers: httpHeaders };
    let params = new HttpParams();
    params = params.append('id', id);
    return this.http.get<History>(this.url + '/'+id);
  }
  saveHistory(history: History): Observable<History> {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
    });
    let options = { headers: httpHeaders };
    return this.http.post<History>(this.url, history, options);
  }
  editHistory(history: History): Observable<History> {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
    });
    let options = { headers: httpHeaders };
    return this.http.put<History>(this.url + '/'+history.id, history, options);
  }
  deleteHistory(id: number): Observable<History> {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
    });
    let options = { headers: httpHeaders };
    return this.http.delete<History>(this.url + '/'+id, options);
  }
}
