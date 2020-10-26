import { TestBed } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { SpotifyState } from './state';

describe('Spotify Angular Test', () => {
  let store: Store;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([SpotifyState])],
    }).compileComponents();
    store = TestBed.get(Store);
  });
});
