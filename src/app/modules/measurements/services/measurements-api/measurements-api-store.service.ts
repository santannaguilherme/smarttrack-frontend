import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { Store } from 'src/app/core/models/store';
import { Measurements } from '../../models/measurements';
import { MeasurementsApiService } from './measurements-api.service';

@Injectable({
  providedIn: 'root',
})
export class MeasurementsApiStoreService extends Store<Measurements[]> {
  constructor(private api: MeasurementsApiService) {
    super([]);
  }

  listMeasurements(): Promise<Measurements[]> {
    return this.api.getMeasurements().toPromise();
  }

  saveMeasurements(measurements: Measurements) {
    return this.api.saveMeasurements(measurements);
  }
  editMeasurements(measurements: Measurements) {
    return this.api.editMeasurements(measurements);
  }

  getMeasurementsById(id: number): Promise<Measurements> {
    return this.api.getMeasurementsById(id).toPromise();
  }
  deleteMeasurementsById(id: number) {
    return this.api.deleteMeasurements(id).subscribe();
  }
}
