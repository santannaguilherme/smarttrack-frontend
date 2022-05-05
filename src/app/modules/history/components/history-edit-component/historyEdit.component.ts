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
    private router: Router
  ) {
    this.pageForm = this.fb.group({
      id: [''],
      worker: [''],
      machine: [''],
      date: [''],
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
      id: [this.history[0].id],
      worker: [this.history[0].worker],
      machine: [this.history[0].machine],
      date: [this.history[0].dateTime],
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
