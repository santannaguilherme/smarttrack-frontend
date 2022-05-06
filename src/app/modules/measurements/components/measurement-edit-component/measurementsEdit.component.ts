import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Measurements } from '../../models/measurements';
import { MeasurementsApiStoreService } from '../../services/measurements-api/measurements-api-store.service';

@Component({
  selector: 'app-measurementsEdit',
  templateUrl: './measurementsEdit.component.html',
  styleUrls: ['./measurementsEdit.component.css'],
})
export class MeasurementsEditComponent implements OnInit {
  measurementsList: any;
  pageForm!: FormGroup;
  id: any;
  measurements!: any;

  constructor(
    private measurementsService: MeasurementsApiStoreService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private datePipe: DatePipe
  ) {
    this.pageForm = this.fb.group({
      id: [''],
      temperature: [''],
      battery: [''],
      machine: [''],
      dateTime: [''],
    });
  }
  dataSource = [];
  async ngOnInit(): Promise<void> {
    this.route.queryParams.subscribe(params => {
      console.log(params)
      this.id = params;
    })
    this.measurements = await this.measurementsService.getMeasurementsById(this.id.id)
    this.pageForm = this.fb.group({
      id: [this.measurements.id],
      temperature: [this.measurements.temperature],
      battery: [this.measurements.battery],
      machine: [this.measurements.machine],
      dateTime: [this.datePipe.transform(this.measurements.dateTime,"yyyy-MM-dd")],
    });
    console.log(this.measurements)
  }
  postMeasurements() {
    console.log(this.pageForm.value);
    const measurements = this.pageForm.value as Measurements;
    this.measurementsService
      .editMeasurements(measurements)
      .subscribe(() => this.router.navigateByUrl('/measurements'));
    this.router.navigateByUrl('/measurements');
  }
}
