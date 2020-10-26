import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { BehaviorSubject, Observable } from 'rxjs';
import { Authorize, Service } from './app/state/spotify';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  @Select(Service.token) access_token$: Observable<string>;

  loaded: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  isLoading: boolean = false;

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(new Authorize()).subscribe(() => {
      this.loaded.next(this.loaded.getValue() + 1);
    });

    this.loaded.subscribe((count: number) => (this.isLoading = count < 2));
  }
}
