import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable, of } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

import { Repo } from './types';

@Injectable({
  providedIn: 'root',
})
export class RealDataService {
  private itemsPerPage = 10;

  constructor(private http: HttpClient) {}

  getData(user: string, page: number = 1): Observable<{ data: Repo[], page: number }>  {
    return this.http.get<Repo[]>(`https://api.github.com`
    + `/users/${user}/repos`
    + `?page=${page}`
    + `&per_page=${this.itemsPerPage}`, {
      headers: {
        Authorization: 'token fe91248f8a1e7be14' + '55147962bde2225e73e7137'
      }
    }).pipe(
        map(data => ({
          data: data.map(({ id, html_url, name, description }) => ({  id, html_url, name, description })),
          page
        }))
    );
  }

  getData2(user: string, page: number = 1): Observable<{ data: Repo[], page: number }>  {

    return this.getData(user, page)
      .pipe(
        mergeMap(result => result.data.length ? of(result) : EMPTY)
      );
  }
}
