import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HistoryComponent } from './modules/history/components/history-component/history.component';
import { HistoryCreateComponent } from './modules/history/components/history-create-component/historyCreate.component';
import { HistoryEditComponent } from './modules/history/components/history-edit-component/historyEdit.component';
import { MaintenanceComponent } from './modules/maintanance/components/maintenance-component/maintenance.component';
import { MaintenanceCreateComponent } from './modules/maintanance/components/maintenance-create-component/maintenanceCreate.component';
import { MaintenanceEditComponent } from './modules/maintanance/components/maintenance-edit-component/maintenanceEdit.component';

const routes: Routes = [
  {
    path: 'history',
    component: HistoryComponent,
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
