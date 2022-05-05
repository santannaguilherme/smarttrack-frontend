import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { HistoryComponent } from './components/history-component/history.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { HistoryCreateComponent } from './components/history-create-component/historyCreate.component';
import { HistoryEditComponent } from './components/history-edit-component/historyEdit.component';


@NgModule({
  declarations: [
    HistoryComponent,
    HistoryCreateComponent,
    HistoryEditComponent
  ],

  exports: [
    HistoryComponent,
    HistoryCreateComponent, 
    HistoryEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    MatFormFieldModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatTableModule,
    MatIconModule
  ],
  providers: [],
})
export class HistoryModule { }