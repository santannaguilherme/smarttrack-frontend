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
    private router: Router
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
      id: [this.measurements[0].id],
      temperature: [this.measurements[0].temperature],
      battery: [this.measurements[0].battery],
      machine: [this.measurements[0].machine],
      date: [this.measurements[0].dateTime],
    });
    console.log(this.measurements)
  }
  postMeasurements() {
    console.log(this.pageForm.value);
    const measurements = this.pageForm.value as Measurements;
    this.measurementsService
      .editMeasurements(measurements)
      .subscribe(() => this.router.navigateByUrl('/'));
    this.router.navigateByUrl('/');
  }
}
