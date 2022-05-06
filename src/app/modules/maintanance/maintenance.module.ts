import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MaintenanceComponent } from './components/maintenance-component/maintenance.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MaintenanceCreateComponent } from './components/maintenance-create-component/maintenanceCreate.component';
import { MaintenanceEditComponent } from './components/maintenance-edit-component/maintenanceEdit.component';


@NgModule({
  declarations: [
    MaintenanceComponent,
    MaintenanceCreateComponent,
    MaintenanceEditComponent
  ],

  exports: [
    MaintenanceComponent,
    MaintenanceComponent, 
    MaintenanceComponent
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
  providers: [DatePipe],
})
export class MaintenanceModule { }