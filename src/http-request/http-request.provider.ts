import { HttpService } from '@nestjs/axios';
import { Inject } from '@nestjs/common';
import { AxiosRequestConfig, Method } from 'axios';
import { HttpRequestHeadersBuilder } from './http-request-headers.builder';
import { HttpRequestOptions } from './http-request.types';

export abstract class HttpRequestProvider {
  @Inject() private readonly http: HttpService;

  protected constructor(private readonly baseUrl: string) {}

  protected get = <T>(path: string, options: HttpRequestOptions = {}) => {
    return this.handleRequest<T>(this.getRequestObject(path, 'GET', options));
  };

  protected post = <T>(path: string, options: HttpRequestOptions = {}) => {
    return this.handleRequest<T>(this.getRequestObject(path, 'POST', options));
  };

  protected put = <T>(path: string, options: HttpRequestOptions = {}) => {
    return this.handleRequest<T>(this.getRequestObject(path, 'PUT', options));
  };

  protected delete = <T>(path: string, options: HttpRequestOptions = {}) => {
    return this.handleRequest<T>(this.getRequestObject(path, 'DELETE', options));
  };

  private handleRequest = <T>(requestObject: AxiosRequestConfig) => {
    return new Promise<T>((resolve) => {
      this.http.request(requestObject).subscribe((response) => resolve(response.data));
    });
  };

  private getRequestObject = (path: string, method: Method, { headers, body, params }: HttpRequestOptions): AxiosRequestConfig => {
    return { url: this.getRequestUrl(path), headers: headers || this.defaultHeaders, data: body, params, method };
  };

  private getRequestUrl = (path: string) => `${this.baseUrl}${path}`;

  private get defaultHeaders() {
    return HttpRequestHeadersBuilder.initial().build();
  }
}
