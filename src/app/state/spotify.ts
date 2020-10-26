import {Injectable} from '@angular/core';
import {Action, Selector, State, StateContext} from '@ngxs/store';
import {SearchResponse, ArtistResponse, AlbumsResponse, AlbumsRequest, SearchRequest} from "../state/interfaces";
import {Gateway} from "../state/service";
import {patch, updateItem} from "@ngxs/store/operators";
import {tap} from "rxjs/operators";

export class StateModel {
  public access_token: string;
  public results: ArtistResponse[];
}

const defaults = {
  access_token: '',
  results: []
};

@State<StateModel>({
  name: 'spotifyAngularTest',
  defaults
})

@Injectable()
export class Spotify {
  constructor(private Gateway: Gateway) {
  }

  @Selector()
  public static token(state: StateModel) {
    return state.access_token;
  }

  @Selector()
  public static results(state: StateModel) {
    return state.results;
  }

  @Action(Authorize)
  Authorize({getState, setState}: StateContext<StateModel>) {
    const state = getState();

    return this.Gateway.getToken()
      .pipe(
        tap((response: { access_token: string }) => {
          setState({
            ...state,
            access_token: response.access_token
          });
        })
      );
  }

  @Action(Search)
  Search({getState, setState}: StateContext<StateModel>, {payload}: Search) {
    const state = getState();
    const {q, type, offset} = payload;

    this.Gateway.Search(q, type, offset)
      .subscribe((response: SearchResponse) => {
        setState({
          ...state,
          results: response.artists.items
        });
      });
  }

  @Action(ArtistResults)
  getArtistAlbumsByArtistId({getState, setState}: StateContext<StateModel>, {payload}: ArtistResults) {
    const state = getState();
    const {id, offset} = payload;

    this.Gateway.getArtistAlbumsByArtistId(id, offset)
      .subscribe((response: AlbumsResponse) => {
        patch({
          ...state,
          results: updateItem<ArtistResponse>(
            (artist: ArtistResponse) => artist.id === id,
            patch({albums: response.items})
          )
        })
      });
  }
}
export enum Actions {
  Authorize = 'Authorize',
  Search = 'Search Spotify',
  Artist = 'Select Artist',
  SelectAlbum = 'Select Album',
  PreviewTrack = 'Preview Track',
  GoBack = 'Go Back',
  GoBackToArtists = 'Go Back To Artists'
}

export class Search {
  static readonly type = `${'[Header Section]'} ${Actions.Search}`;

  constructor(public payload: SearchRequest) {
  }
}

export class Authorize {
  static readonly type = `${'[App]'} ${Actions.Authorize}`;

  constructor() {
  }
}


export class ArtistHistory {
  static readonly type = `${'[Home Page]'} ${Actions.Artist}`;

  constructor(public payload: AlbumsRequest) {
  }
}

export class ArtistResults {
  static readonly type = `${'[Home Page]'} ${Actions.Artist}`;

  constructor(public payload: AlbumsRequest) {
  }
}