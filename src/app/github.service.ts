import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable, of } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

import { Repo } from './types';

@Injectable({
  providedIn: 'root',
})
export class GithubService {

  private itemsPerPage = 10;
  private  user = 'angular-schule';

  constructor(private http: HttpClient) { }

  getData(page: number = 1): Observable<{ data: Repo[], page: number }> {
    return this.http.get<Repo[]>(`https://api.github.com/users/${this.user}/repos?page=${page}`
                               + `&per_page=${this.itemsPerPage}?&direction=desc&sort=created`,
    {
      headers: {
        Authorization: 'token fe91248f8a1e7be14' + '55147962bde2225e73e7137'
      }
    }).pipe(
      map(data => ({
        data: data.map(({ id, name, description }) => ({ id, name, description })),
        page
      }))
    );
  }

  getData2(page: number = 1): Observable<{ data: Repo[], page: number }> {
    return this.getData(page)
      .pipe(
        mergeMap(result => result.data.length ? of(result) : EMPTY)
      );
  }
}
