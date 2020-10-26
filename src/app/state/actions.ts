import { SearchRequest, AlbumsRequest } from '../service/interfaces';

export enum ActionEnum {
  Authorize = 'Authorize',
  Search = 'Search Spotify',
  SelectArtist = 'Select Artist',
  SelectAlbum = 'Select Album',
  PreviewTrack = 'Preview Track',
  GoBack = 'Go Back',
  GoBackToArtists = 'Go Back To Artists',
}

export class AuthorizeSpotify {
  static readonly type = `${'[App]'} ${ActionEnum.Authorize}`;

  constructor() {}
}

export class Search {
  static readonly type = `${'[Header Section]'} ${ActionEnum.Search}`;

  constructor(public payload: SearchRequest) {}
}

export class ArtistResults {
  static readonly type = `${'[Home Page]'} ${ActionEnum.SelectArtist}`;

  constructor(public payload: AlbumsRequest) {}
}

export class SelectArtistFromHistory {
  static readonly type = `${'[Home Page]'} ${ActionEnum.SelectArtist}`;

  constructor(public payload: AlbumsRequest) {}
}
