import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { History } from '../../models/history';
import { HistoryApiStoreService } from '../../services/history-api/history-api-store.service';

@Component({
  selector: 'app-historyCreate',
  templateUrl: './historyCreate.component.html',
  styleUrls: ['./historyCreate.component.css'],
})
export class HistoryCreateComponent implements OnInit {
  historyList: any;
  pageForm: FormGroup;
  constructor(
    private historyService: HistoryApiStoreService,
    private fb: FormBuilder,
    private route: Router
  ) {
    this.pageForm = this.fb.group({
      id: [''],
      worker: [''],
      machine: [''],
      dateTime: [''],
    });
  }
  dataSource = [];
  ngOnInit(): void {}
  postHistory() {
    console.log(this.pageForm.value);
    const history = this.pageForm.value as History;
    this.historyService
      .saveHistory(history)
      .subscribe((data) => this.route.navigateByUrl('/'));
    this.route.navigateByUrl('/');
  }
}
