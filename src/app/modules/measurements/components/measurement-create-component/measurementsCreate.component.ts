import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Measurements } from '../../models/measurements';
import { MeasurementsApiStoreService } from '../../services/measurements-api/measurements-api-store.service';

@Component({
  selector: 'app-measurementsCreate',
  templateUrl: './measurementsCreate.component.html',
  styleUrls: ['./measurementsCreate.component.css'],
})
export class MeasurementsCreateComponent implements OnInit {
  measurementsList: any;
  pageForm: FormGroup;
  constructor(
    private measurementsService: MeasurementsApiStoreService,
    private fb: FormBuilder,
    private route: Router
  ) {
    this.pageForm = this.fb.group({
      temperature: [''],
      battery: [''],
      machine: [''],
      dateTime: [''],
    });
  }
  dataSource = [];
  ngOnInit(): void {}
  postMeasurements() {
    console.log(this.pageForm.value);
    const measurements = this.pageForm.value as Measurements;
    this.measurementsService
      .saveMeasurements(measurements)
      .subscribe((data) => this.route.navigateByUrl('/'));
    this.route.navigateByUrl('/measurements');
  }
}
