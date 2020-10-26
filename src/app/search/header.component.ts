import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { fromEvent } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  tap,
} from 'rxjs/operators';
import { Store } from '@ngxs/store';
import { Search } from '../../app-state/spotify/spotify.actions';
import { SearchRequest } from '../service/spotify/interfaces/search/search-spotify.request';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements AfterViewInit {
  public query: string;

  @ViewChild('appSearch') appSearch: ElementRef;

  constructor(private store: Store) {}

  ngAfterViewInit() {
    fromEvent(this.appSearch.nativeElement, 'keyup')
      .pipe(
        filter(Boolean),
        debounceTime(200),
        distinctUntilChanged(),
        tap((text: string) => {
          const query = this.query;
          const request: SearchRequest = { q: query, type: 'artist' };
          if (!query) {
            return;
          }
          this.store.dispatch(new Search(request));
        })
      )
      .subscribe();
  }
}
