import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { AuthorizeSpotify, Search, ArtistResults } from './actions';
import {
  SearchResponse,
  ArtistResponse,
  AlbumsResponse,
} from '../service/interfaces';
import { Spotify } from '../service/spotify';
import { patch, updateItem } from '@ngxs/store/operators';
import { tap } from 'rxjs/operators';

export class StateModel {
  public access_token: string;
  public results: ArtistResponse[];
}

const defaults = {
  access_token: '',
  results: [],
};

@State<StateModel>({
  name: 'spotifyAngularTest',
  defaults,
})
@Injectable()
export class SpotifyState {
  constructor(private Spotify: Spotify) {}

  @Selector()
  public static token(state: StateModel) {
    return state.access_token;
  }

  @Selector()
  public static results(state: StateModel) {
    return state.results;
  }

  @Action(AuthorizeSpotify)
  authorizeSpotify({ getState, setState }: StateContext<StateModel>) {
    const state = getState();

    return this.Spotify.getToken().pipe(
      tap((response: { access_token: string }) => {
        setState({
          ...state,
          access_token: response.access_token,
        });
      })
    );
  }

  @Action(Search)
  search(
    { getState, setState }: StateContext<StateModel>,
    { payload }: Search
  ) {
    const state = getState();
    const { q, type, offset } = payload;

    this.Spotify.search(q, type, offset).subscribe(
      (response: SearchResponse) => {
        setState({
          ...state,
          results: response.artists.items,
        });
      }
    );
  }

  @Action(ArtistResults)
  AlbumsByArtistId(
    { getState, setState }: StateContext<StateModel>,
    { payload }: ArtistResults
  ) {
    const state = getState();
    const { id, offset } = payload;

    this.Spotify.AlbumsByArtistId(id, offset).subscribe(
      (response: AlbumsResponse) => {
        patch({
          ...state,
          results: updateItem<ArtistResponse>(
            (artist: ArtistResponse) => artist.id === id,
            patch({ albums: response.items })
          ),
        });
      }
    );
  }
}
