import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { users } from './user-data';
import { PagedAPIResponse, User } from './types';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private itemsPerPage = 10;

  constructor(private http: HttpClient) {}

  fetchData(page: number = 0): Observable<PagedAPIResponse<User>> {
    const startIndex = page * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    const nextPage = endIndex < users.length ? page + 1 : undefined;
    const data = users.slice(startIndex, endIndex);

    return of({ page, nextPage, data }).pipe(delay(1000));
  }

  getGithubReposForUser(user: string, page: number = 1): Observable<{ page: number, data: any[] }> {
    return this.http.get<any[]>(`https://api.github.com/users/${user}/repos?page=${page}`).pipe(
      map(data => ({ page, data }))
    );
  }
}
