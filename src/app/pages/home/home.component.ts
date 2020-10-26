import {Component, OnInit} from '@angular/core';
import {Select} from "@ngxs/store";
import {Observable} from "rxjs";
import {Spotify} from "../../state/spotify";
import {ArtistResponse} from "../../state/interfaces";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  @Select(Spotify.results) artists$: Observable<ArtistResponse[]>;

  constructor() {
  }

  ngOnInit(): void {
  }
}
