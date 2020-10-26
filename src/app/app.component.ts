import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthorizeSpotify } from './state/actions';
import { SpotifyState } from './state/state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  @Select(SpotifyState.token) access_token$: Observable<string>;

  isLoading: boolean = false;
  loaded: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(new AuthorizeSpotify()).subscribe(() => {
      this.loaded.next(this.loaded.getValue() + 1);
    });

    this.loaded.subscribe((count: number) => (this.isLoading = count < 2));
  }
}
