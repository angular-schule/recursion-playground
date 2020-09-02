import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Subject, of, EMPTY } from 'rxjs';
import { concatMap, tap, expand, reduce } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  nextPage$: Subject<number>;

  constructor(private ds: DataService) {}

  ngOnInit(): void {
    this.nextPage$ = new Subject<number>();

    // load one single page, with a subject triggered by buttons
    const singlePagesWithSubject$ = this.nextPage$.pipe(
      concatMap(page => this.ds.fetchData(page))
    );
    // singlePagesWithSubject$.subscribe(e => console.log(e));


    /* recursively load all pages, with a subject and side effects */
    const recursionWithSubject$ = this.nextPage$.pipe(
      concatMap(page => this.ds.fetchData(page)),
      tap((res) => {
        if (res.nextPage !== undefined) {
          this.nextPage$.next(res.nextPage);
        }
      })
    );
    // recursionWithSubject$.subscribe(e => console.log(e));


    //////////////////

    /* simple example with expand */
    const simpleExpand$ = of(1,2).pipe(
      expand(e => {
        console.log('expand input:', e);
        if (e === 1) {
          return of(5);
        } else {
          return EMPTY;
        }
      })
    );
    // simpleExpand$.subscribe(console.log);


    /* fetch all pages of mock data with expand */
    const dataFetchedWithExpand$ = this.ds.fetchData(0).pipe(
      expand(res => {
        if (res.nextPage !== undefined) {
          console.log('There is another page, load it.');
          return this.ds.fetchData(res.nextPage);
        } else {
          console.log('There is no next page. Stop.');
          return EMPTY;
        }
      }),
      reduce((acc, res) => [...acc, ...res.data], [])
    );
    // dataFetchedWithExpand$.subscribe(e => console.log(e));


    /* fetch all GitHub repos for a user */
    const user = 'mgechev';
    const repos$ = this.ds.getGithubReposForUser(user, 1).pipe(
      expand(res => {
        if (res.data.length) {
          const nextPage = res.page + 1;
          console.log(`Loading another page (${nextPage})…`);
          return this.ds.getGithubReposForUser(user, nextPage);
        } else {
          console.log('✅ Empty page reached, stopping here.');
          return EMPTY;
        }
      }),
      reduce((acc, res) => [...acc, ...res.data], []),
    );
    // repos$.subscribe(console.log);

  }

}
