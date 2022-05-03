import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HistoryComponent } from './modules/history/components/history-component/history.component';
import { HistoryCreateComponent } from './modules/history/components/history-create-component/historyCreate.component';

const routes: Routes = [
  {
    path: 'history',
    component: HistoryComponent,
  },

  { path: 'add-history', component: HistoryCreateComponent },
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
