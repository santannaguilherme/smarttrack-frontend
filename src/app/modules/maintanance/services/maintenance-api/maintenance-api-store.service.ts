import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { Store } from 'src/app/core/models/store';
import { Maintenance } from '../../models/maintenance';
import { MaintenanceApiService } from './maintenance-api.service';

@Injectable({
  providedIn: 'root',
})
export class MaintenanceApiStoreService extends Store<Maintenance[]> {
  constructor(private api: MaintenanceApiService) {
    super([]);
  }

  listMaintenance(): Promise<Maintenance[]> {
    return this.api.getMaintenance().toPromise();
  }

  saveMaintenance(maintenance: Maintenance) {
    return this.api.saveMaintenance(maintenance);
  }
  editMaintenance(maintenance: Maintenance) {
    return this.api.editMaintenance(maintenance);
  }

  getMaintenanceById(id: number): Promise<Maintenance> {
    return this.api.getMaintenanceById(id).toPromise();
  }
  deleteMaintenanceById(id: number) {
    return this.api.deleteMaintenance(id).subscribe();
  }
}
