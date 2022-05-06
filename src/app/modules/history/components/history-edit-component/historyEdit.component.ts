import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { History } from '../../models/history';
import { HistoryApiStoreService } from '../../services/history-api/history-api-store.service';

@Component({
  selector: 'app-historyEdit',
  templateUrl: './historyEdit.component.html',
  styleUrls: ['./historyEdit.component.css'],
})
export class HistoryEditComponent implements OnInit {
  historyList: any;
  pageForm!: FormGroup;
  id: any;
  history!: any;

  constructor(
    private historyService: HistoryApiStoreService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private datePipe: DatePipe
  ) {
    this.pageForm = this.fb.group({
      id: [''],
      worker: [''],
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
    this.history = await this.historyService.getHistoryById(this.id.id)
    this.pageForm = this.fb.group({
      id: [this.history.id],
      worker: [this.history.worker],
      machine: [this.history.machine],
      dateTime: [this.datePipe.transform(this.history.dateTime,"yyyy-MM-dd")],
    });
    console.log(this.history)
  }
  postHistory() {
    console.log(this.pageForm.value);
    const history = this.pageForm.value as History;
    this.historyService
      .editHistory(history)
      .subscribe(() => this.router.navigateByUrl('/'));
    this.router.navigateByUrl('/');
  }
}
