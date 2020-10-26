import {
  SearchRequest,
  SearchResponse,
  AlbumsResponse,
  AlbumsRequest,
} from './interfaces';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

export enum HttpMethodEnum {
  DELETE = 'DELETE',
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
}

export class ObjectHelper {
  static nameof<T>(property: keyof T) {
    return property;
  };
}

@Injectable()
export class Service {
  constructor(private httpClient: HttpClient) {}

  public get<TRequest, TResponse>(
    url: string,
    params: TRequest,
    headers?: HttpHeaders
  ): Observable<TResponse> {
    const isValidRequest = this.isValidRequest(params, url, HttpMethodEnum.GET);

    if (!isValidRequest) {
      this.throwRequestError(HttpMethodEnum.GET, url, params);
    }

    const httpParams = this.mapHttpParams(params);
    const options = {
      params: httpParams,
      headers: headers || null,
    };

    return this.httpClient.get<TResponse>(url, options);
  }

  public post<TRequest, TResponse>(
    url: string,
    data: TRequest,
    params?: HttpParams,
    headers?: HttpHeaders
  ): Observable<TResponse> {
    const isValidRequest = this.isValidRequest(data, url, HttpMethodEnum.POST);

    if (!isValidRequest) {
      this.throwRequestError(HttpMethodEnum.POST, url, data);
    }

    const options = {
      params: params || null,
      headers: headers || null,
    };

    return this.httpClient.post<TResponse>(url, data, options);
  }

  private isValidRequest<TRequest>(
    object: TRequest,
    url: string,
    method: HttpMethodEnum
  ) {
    try {
      Object.keys(object).forEach((property) => ObjectHelper.nameof(property));

      return true;
    } catch (error) {
      this.throwRequestError(method, url, object);
    }
  }

  private throwRequestError<TRequest>(
    method: string,
    url: string,
    object: TRequest
  ) {
    throw new Error(
      `The request object was incorrect for request "[${method}] ${url}":\r\n${JSON.stringify(
        object
      )}`
    );
  }

  private mapHttpParams(params: any): HttpParams {
    return Object.keys(params).reduce((httpParams: HttpParams, key: string) => {
      httpParams = httpParams.append(key, params[key]);

      return httpParams;
    }, new HttpParams());
  }
}

@Injectable()
export class Gateway {
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

  Search(
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

  getArtistAlbumsByArtistId(
    id: string,
    offset: number
  ): Observable<AlbumsResponse> {
    const url = `${this._baseUrl}/artists/${id}/albums`;
    const options: AlbumsRequest = {
      limit: environment.spotify_page_size,
      offset: offset,
    };

    return this.Service.get<AlbumsRequest, AlbumsResponse>(
      url,
      options
    );
  }
}
