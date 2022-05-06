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

  listHistory(): Promise<History[]> {
    return this.api.getHistory().toPromise();
  }

  saveHistory(history: History) {
    return this.api.saveHistory(history);
  }
  editHistory(history: History) {
    return this.api.editHistory(history);
  }

  getHistoryById(id: number): Promise<History> {
    return this.api.getHistoryById(id).toPromise();
  }
  deleteHistoryById(id: number) {
    return this.api.deleteHistory(id).subscribe();
  }
}
