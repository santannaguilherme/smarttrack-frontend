import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HistoryComponent } from './modules/history/components/history-component/history.component';
import { HistoryCreateComponent } from './modules/history/components/history-create-component/historyCreate.component';
import { HistoryEditComponent } from './modules/history/components/history-edit-component/historyEdit.component';
import { MaintenanceComponent } from './modules/maintanance/components/maintenance-component/maintenance.component';
import { MaintenanceCreateComponent } from './modules/maintanance/components/maintenance-create-component/maintenanceCreate.component';
import { MaintenanceEditComponent } from './modules/maintanance/components/maintenance-edit-component/maintenanceEdit.component';
import { MeasurementsComponent } from './modules/measurements/components/measurement-component/measurements.component';
import { MeasurementsCreateComponent } from './modules/measurements/components/measurement-create-component/measurementsCreate.component';
import { MeasurementsEditComponent } from './modules/measurements/components/measurement-edit-component/measurementsEdit.component';

const routes: Routes = [
  {
    path: 'history',
    component: HistoryComponent,
  },

  { path: 'add-measurement', component: MeasurementsCreateComponent },
  { path: 'edit-measurement', component: MeasurementsEditComponent },
  {
    path: 'measurements',
    component: MeasurementsComponent,
  },

  { path: 'add-history', component: HistoryCreateComponent },
  { path: 'edit-history', component: HistoryEditComponent },
  {
    path: 'maintenance',
    component: MaintenanceComponent,
  },

  { path: 'add-maintenance', component: MaintenanceCreateComponent },
  { path: 'edit-maintenance', component: MaintenanceEditComponent },
  {
    path: '',
    component: HistoryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
