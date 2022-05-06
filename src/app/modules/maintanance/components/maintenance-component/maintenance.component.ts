import { HttpParams } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MaintenanceApiStoreService } from '../../services/maintenance-api/maintenance-api-store.service';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.css'],
})
export class MaintenanceComponent implements OnInit {
  maintenanceList: any;
  maintenance: any;
  constructor(
    private maintenanceService: MaintenanceApiStoreService,
    private route: Router
  ) { }
  dataSource = [];
  async ngOnInit(): Promise<void> {
    this.maintenanceList = []
    this.maintenanceList = await this.maintenanceService.listMaintenance()
  }
  
  displayedColumns = ['id', 'worker', 'machine','location', 'date', 'edit','delete'];

  newMaintenance() {
    this.route.navigateByUrl('/add-maintenance');
  }
  editMaintenance(id: number) {
    this.route.navigate(['/edit-maintenance'], { queryParams: { id: id } });

  }
  deleteMaintenance(id:number){
    this.maintenanceService.deleteMaintenanceById(id);
    this.ngOnInit()
  }
  ngOnDestroy(){
    this.maintenanceList = []
    console.log('destuiru')
  }
}
