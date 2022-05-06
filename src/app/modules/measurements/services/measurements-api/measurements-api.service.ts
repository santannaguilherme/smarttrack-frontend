import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Measurements } from '../../models/measurements';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MeasurementsApiService {
  url = environment.api + '/Measurement';
  constructor(private http: HttpClient) { }

  getMeasurements() {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
      'Access-Control-Allow-Origin': '*',
    });
    let options = { headers: httpHeaders };
    return this.http.get<Measurements[]>(this.url, options);
  }
  getMeasurementsById(id: number) {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
      'Access-Control-Allow-Origin': '*',
    });
    let options = { headers: httpHeaders };
    let params = new HttpParams();
    params = params.append('id', id);
    return this.http.get<Measurements>(this.url + '/' + id);
  }
  saveMeasurements(measurements: Measurements): Observable<Measurements> {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
      'Access-Control-Allow-Origin': '*',
    });
    let options = { headers: httpHeaders };
    return this.http.post<Measurements>(this.url, measurements, options);
  }
  editMeasurements(measurements: Measurements): Observable<Measurements> {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
      'Access-Control-Allow-Origin': '*',
    });
    let options = { headers: httpHeaders };
    return this.http.put<Measurements>(this.url + '/' + measurements.id, measurements, options);
  }
  deleteMeasurements(id: number): Observable<Measurements> {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
      'Access-Control-Allow-Origin': '*',
    });
    let options = { headers: httpHeaders };
    return this.http.delete<Measurements>(this.url + '/' + id, options);
  }
}
