import { HttpParams } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { History } from '../../models/history';
import { HistoryApiStoreService } from '../../services/history-api/history-api-store.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent implements OnInit {
  historyList: any;
  history: any;
  constructor(
    private historyService: HistoryApiStoreService,
    private route: Router
  ) {}
  dataSource = [];
  ngOnInit(): void {
    this.historyService.listHistory();
    setTimeout(() => (this.historyList = this.historyService.state), 2000);
  }
  displayedColumns = ['id', 'worker', 'machine', 'date', 'edit'];

  newHistory() {
    this.route.navigateByUrl('/add-history');
  }
  editHistory(id:number){
    this.historyService.getHistoryById(id)
    this.history = this.historyService.state
    


    
    console.log(this.history)

  }
}
