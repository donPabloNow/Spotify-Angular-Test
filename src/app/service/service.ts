import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export enum HttpMethodEnum {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export class ObjectHelper {
  static nameof<T>(property: keyof T) {
    return property;
  }
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
