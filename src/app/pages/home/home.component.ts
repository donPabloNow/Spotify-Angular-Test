import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { SpotifyState } from '../../state/state';
import { ArtistResponse } from '../../service/interfaces';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  @Select(SpotifyState.results) artists$: Observable<ArtistResponse[]>;

  constructor() {}

  ngOnInit(): void {}
}
