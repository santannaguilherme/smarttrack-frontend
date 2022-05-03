import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { Store } from 'src/app/core/models/store';
import { History } from '../../models/history';
import { HistoryApiService } from './history-api.service';

@Injectable({
  providedIn: 'root',
})
export class HistoryApiStoreService extends Store<History[]> {
  constructor(private api: HistoryApiService) {
    super([]);
  }

  historyQuery() {
    return this.api.getHistory();
  }

  listHistory() {
    this.setState([]);
    console.log('here');
    this.historyQuery().subscribe((data) => {
      for (let item of data) {
        let list = this.state;
        list.push(item);
        this.setState(list);
      }
    });
  }
  saveHistory(history: History) {
    return this.api.saveHistory(history);
  }

  getHistoryById(id: number) {
    this.api.getHistoryById(id).subscribe((data) => {
      this.setState(data);
    });
  }
}
