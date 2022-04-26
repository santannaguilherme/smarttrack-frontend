import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { History } from '../../models/history';
import { HistoryApiStoreService } from '../../services/history-api/history-api-store.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent implements OnInit {
  historyList:any = []
  constructor(private  historyService:HistoryApiStoreService) {
  }
  ngOnInit(): void {
    this.historyService.listHistory();
    setTimeout(() => this.historyList = this.historyService.state,2000)
  }

  displayedColumns: string[] = ['id', 'worker', 'machine', 'date'];
  dataSource = this.historyList;
}