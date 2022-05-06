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
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MeasurementsComponent } from './components/measurement-component/measurements.component';
import { MeasurementsCreateComponent } from './components/measurement-create-component/measurementsCreate.component';
import { MeasurementsEditComponent } from './components/measurement-edit-component/measurementsEdit.component';


@NgModule({
  declarations: [
    MeasurementsComponent,
    MeasurementsCreateComponent,
    MeasurementsEditComponent
  ],

  exports: [
    MeasurementsComponent,
    MeasurementsCreateComponent, 
    MeasurementsEditComponent
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
export class MeasurementsModule { }