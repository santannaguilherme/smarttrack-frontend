import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Maintenance } from '../../models/maintenance';

@Injectable({
  providedIn: 'root',
})
export class MaintenanceApiService {
  url = environment.api + '/Maintenance';
  constructor(private http: HttpClient) {}

  getMaintenance() {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
      'Access-Control-Allow-Origin': '*',
    });
    let options = { headers: httpHeaders };
    return this.http.get<Maintenance[]>(this.url,options);
  }
  getMaintenanceById(id: number) {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
      'Access-Control-Allow-Origin': '*',
    });
    let options = { headers: httpHeaders };
    let params = new HttpParams();
    params = params.append('id', id);
    return this.http.get<Maintenance>(this.url, {params});
  }
  saveMaintenance(maintenance: Maintenance): Observable<Maintenance> {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
      'Access-Control-Allow-Origin': '*',
    });
    let options = { headers: httpHeaders };
    return this.http.post<Maintenance>(this.url, maintenance, options);
  }
  editMaintenance(maintenance: Maintenance): Observable<Maintenance> {
    console.log(maintenance.id)
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
      'Access-Control-Allow-Origin': '*',
    });
    let options = { headers: httpHeaders };
    return this.http.put<Maintenance>(this.url + '/'+maintenance.id, maintenance, options);
  }
  deleteMaintenance(id: number): Observable<Maintenance> {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
      'Access-Control-Allow-Origin': '*',
    });
    let options = { headers: httpHeaders };
    return this.http.delete<Maintenance>(this.url + '/'+id, options);
  }
}
