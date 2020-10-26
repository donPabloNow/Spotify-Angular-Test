export interface ArtistAlbumResponse {
  id: string;
  name: string;
  release_date: string;
  release_date_precision: string;
  type: string;
  album_group: string;
  album_type: string;
  artists: ArtistInfoResponse[];
  external_urls: {
    spotify: string;
  };
  href: string;
  uri: string;
  images: ImageResponse[];
  total_tracks: number;
}
export interface ArtistInfoResponse {
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

export interface AlbumsRequest extends BaseSpotifyRequest {
  id?: string;
}

export interface AlbumsResponse {
  href: string;
  items: ArtistAlbumResponse[];
}

export interface ArtistResponse {
  id: string;
  name: string;
  type: string;
  external_urls: {
    spotify: string;
  };
  genres: string[];
  images: ImageResponse[];
  popularity: number;

  albums: ArtistAlbumResponse[];
}

export interface SearchRequest extends BaseSpotifyRequest {
  q: string;
  type: string;
}

export interface SearchResponse extends PagedResponse {
  artists: {
    href: string;
    items: ArtistResponse[];
  };
}

export interface BaseSpotifyRequest {
  market?: string;
  limit?: number;
  offset?: number;
}

export class ImageResponse {
  height: number;
  url: string;
  width: number;
}

export interface PagedResponse {
  limit: number;
  next?: string;
  previous?: string;
  offset: number;
  total: number;
}
