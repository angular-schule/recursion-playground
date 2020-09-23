import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { repos } from './fake-repo-data';
import { Repo } from './types';

@Injectable({
  providedIn: 'root',
})
export class FakeDataService {
  private itemsPerPage = 10;

  getData(page: number): Observable<{ data: Repo[], page: number }> {
    const startIndex = (page - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    const data = repos.slice(startIndex, endIndex);

    return of({ data, page }).pipe(delay(500));
  }
}
