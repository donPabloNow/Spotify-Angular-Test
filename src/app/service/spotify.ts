import { Service } from './service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  AlbumsRequest,
  AlbumsResponse,
  SearchResponse,
  SearchRequest,
} from './interfaces';
import { environment } from '../../environments/environment';
import { HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable()
export class Spotify {
  private _baseUrl: string = 'https://api.spotify.com/v1';

  constructor(private Service: Service) {}

  getToken(): Observable<{ access_token: string }> {
    const url = 'https://accounts.spotify.com/api/token';

    const params = new URLSearchParams();

    params.set('grant_type', 'client_credentials');

    const body = params.toString();
    const baseEncodedClient = btoa(
      `${environment.spotify_client_id}:${environment.spotify_client_secret}`
    );
    const headers = new HttpHeaders({
      Authorization: `Basic ${baseEncodedClient}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    });

    return this.Service.post<string, { access_token: string }>(
      url,
      body,
      null,
      headers
    );
  }

  search(
    query: string,
    types: string,
    offset: number
  ): Observable<SearchResponse> {
    const url = `${this._baseUrl}/search`;
    const options: SearchRequest = {
      q: query,
      type: types,
      limit: environment.spotify_page_size,
      offset: offset || 0,
    };

    return this.Service.get<SearchRequest, SearchResponse>(url, options);
  }

  AlbumsByArtistId(id: string, offset: number): Observable<AlbumsResponse> {
    const url = `${this._baseUrl}/artists/${id}/albums`;
    const options: AlbumsRequest = {
      limit: environment.spotify_page_size,
      offset: offset,
    };

    return this.Service.get<AlbumsRequest, AlbumsResponse>(url, options);
  }
}
