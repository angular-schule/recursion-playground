import { Component, OnInit } from '@angular/core';
import { MagischerService } from './magischer.service';
import { GithubService } from './github.service';

import { Subject, of, EMPTY } from 'rxjs';
import { concatMap, tap, expand, reduce } from 'rxjs/operators';
import { Magier } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  nextPage$ = new Subject<number>(); // triggered by buttons in the UI

  output: Magier[] = [];
  currentPage = 0;

  // load one single page, with a subject triggered by buttons
  singlePagesWithSubject$ = this.nextPage$.pipe(
    concatMap(page => this.ds.getData(page))
  );

  // recursively load all pages, with a subject and side effects
  recursionWithSubject$ = this.nextPage$.pipe(
    concatMap(page => this.ds.getData(page)),
    tap(({ data, page }) => {
      if (data.length) {
        this.nextPage$.next(page + 1);
      }
    })
  );

  // simple example with expand
  simpleExpand$ = this.nextPage$.pipe(
    expand(e => {
      console.log('expand input:', e);
      return (e < 10) ? of(e + 1) : EMPTY;
    })
  );

  // fetch all pages of mock data with expand (starting with page 0)
  dataFetchedWithExpand$ = this.ds.getData(1).pipe(
    expand(({ data, page }) => {
      if (data.length) {
        console.log(`There is another page ${ page + 1 }, loading it...`);
        return this.ds.getData(page +  1);
      } else {
        console.log('There is no next page. Stop.');
        return EMPTY;
      }
    }),
    reduce((acc, res) => [...acc, ...res.data], [])
  );

  // real data: fetch all GitHub repos for a user
  repos$ = this.ds2.getData(1).pipe(
    expand(({ data, page }) =>  data.length ? this.ds2.getData(page + 1) : EMPTY),
    reduce((acc, res) => [...acc, ...res.data], []),
  );

  // real data: fetch all GitHub repos for a user + service returns EMPTY
  repos2$ = of({ page: 0, data: [] }).pipe(
    expand(({ page }) => this.ds2.getData2(page + 1)),
    reduce((acc, res) => [...acc, ...res.data], []),
  );

  constructor(private ds: MagischerService, private ds2: GithubService) {}

  ngOnInit(): void {

    // this.singlePagesWithSubject$.subscribe(result => console.table(result.data));
    // this.recursionWithSubject$.subscribe(result => console.table(result.data));
    // this.simpleExpand$.subscribe(console.table);
    // this.dataFetchedWithExpand$.subscribe(console.table);
    // this.repos$.subscribe(console.table);
    // this.repos2$.subscribe(console.table);

    this.singlePagesWithSubject$.subscribe(({ data, page }) => {
      this.output = data;
      this.currentPage = page;
    });
  }
}
