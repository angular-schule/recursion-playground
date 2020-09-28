import { Component, OnInit } from '@angular/core';
import { MagischerService } from './magischer.service';
import { GithubService } from './github.service';

import { Subject, of, EMPTY } from 'rxjs';
import { mergeMap, concatMap, tap, expand, reduce, scan, map, delay, mergeAll,  } from 'rxjs/operators';
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

  constructor(private ms: MagischerService) {}

  ngOnInit(): void {

  }
}
