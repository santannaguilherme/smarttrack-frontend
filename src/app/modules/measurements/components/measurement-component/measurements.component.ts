import { HttpParams } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Measurements } from '../../models/measurements';
import { MeasurementsApiStoreService } from '../../services/measurements-api/measurements-api-store.service';

@Component({
  selector: 'app-measurements',
  templateUrl: './measurements.component.html',
  styleUrls: ['./measurements.component.css'],
})
export class MeasurementsComponent implements OnInit {
  measurementsList: any;
  measurements: any;
  constructor(
    private measurementsService: MeasurementsApiStoreService,
    private route: Router
  ) { }
  dataSource = [];
  async ngOnInit(): Promise<void> {
    this.measurementsList = []
    this.measurementsList = await this.measurementsService.listMeasurements()
  }
  
  displayedColumns = ['id', 'machine','temperature', 'battery', 'date', 'edit','delete'];

  newMeasurements() {
    this.route.navigateByUrl('/add-measurement');
  }
  editMeasurements(id: number) {
    this.route.navigate(['/edit-measurement'], { queryParams: { id: id } });

  }
  deleteMeasurements(id:number){
    this.measurementsService.deleteMeasurementsById(id);
    this.ngOnInit()
  }
  ngOnDestroy(){
    this.measurementsList = []
    console.log('destuiru')
  }
}
