import { TestBed } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { Service } from './service';

describe('Spotify Angular Test', () => {
  let store: Store;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([Service])],
    }).compileComponents();
    store = TestBed.get(Store);
  });
});
