import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Maintenance } from '../../models/maintenance';
import { MaintenanceApiStoreService } from '../../services/maintenance-api/maintenance-api-store.service';

@Component({
  selector: 'app-maintenanceCreate',
  templateUrl: './maintenanceCreate.component.html',
  styleUrls: ['./maintenanceCreate.component.css'],
})
export class MaintenanceCreateComponent implements OnInit {
  maintenanceList: any;
  pageForm: FormGroup;
  constructor(
    private maintenanceService: MaintenanceApiStoreService,
    private fb: FormBuilder,
    private route: Router
  ) {
    this.pageForm = this.fb.group({
      worker: [''],
      machine: [''],
      dateTime: [''],
      location: [''],
    });
  }
  dataSource = [];
  ngOnInit(): void {}
  postHistory() {
    console.log(this.pageForm.value);
    const maintenance = this.pageForm.value as Maintenance;
    this.maintenanceService
      .saveMaintenance(maintenance)
      .subscribe((data) => this.route.navigateByUrl('/maintenance'));
    this.route.navigateByUrl('/maintenance');
  }
}
