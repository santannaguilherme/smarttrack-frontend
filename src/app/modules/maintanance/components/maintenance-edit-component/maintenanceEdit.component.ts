import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Maintenance } from '../../models/maintenance';
import { MaintenanceApiStoreService } from '../../services/maintenance-api/maintenance-api-store.service';

@Component({
  selector: 'app-maintenanceEdit',
  templateUrl: './maintenanceEdit.component.html',
  styleUrls: ['./maintenanceEdit.component.css'],
})
export class MaintenanceEditComponent implements OnInit {
  maintenanceList: any;
  pageForm!: FormGroup;
  id: any;
  maintenance!: any;

  constructor(
    private maintenanceService: MaintenanceApiStoreService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.pageForm = this.fb.group({
      id: [''],
      worker: [''],
      machine: [''],
      dateTime: [''],
      location: [''],
    });
  }
  dataSource = [];
  async ngOnInit(): Promise<void> {
    this.route.queryParams.subscribe(params => {
      console.log(params)
      this.id = params;
    })
    this.maintenance = await this.maintenanceService.getMaintenanceById(this.id.id)
    this.pageForm = this.fb.group({
      id: [this.maintenance[0].id],
      worker: [this.maintenance[0].worker],
      machine: [this.maintenance[0].machine],
      dateTime: [this.maintenance[0].dateTime],
      location: [this.maintenance[0].location],
    });
    console.log(this.maintenance)
  }
  postMaintenanceEdit() {
    console.log(this.pageForm.value);
    const maintenance = this.pageForm.value as Maintenance;
    this.maintenanceService
      .editMaintenance(maintenance)
      .subscribe(() => this.router.navigateByUrl('/maintenance'));
    this.router.navigateByUrl('/maintenance');
  }
}
