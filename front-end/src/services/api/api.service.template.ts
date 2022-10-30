import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
  HttpResponse,
} from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { ErrorApiTemplate } from './ErrorApiTemplate';

type Params = HttpParams;

export class ApiServiceTemplate {
  static readonly prefixApiLocal = 'http://localhost:3000';
  constructor(protected readonly httpClient: HttpClient) {}

  protected list<T>(endpointUrl: string, params?: Params): Observable<any> {
    return this.httpClient
      .get<T[]>(endpointUrl, {
        observe: 'response',
        params: params,
      })
      .pipe(
        map((resp: HttpResponse<T[]>) => {
          return {
            list: resp.body || [],
          };
        })
      );
  }

  protected get<T>(endpointUrl: string, params?: Params): Observable<T> {
    return this.httpClient
      .get<T>(endpointUrl, {
        observe: 'response',
        params: params,
      })
      .pipe(
        map((resp: HttpResponse<T>) => {
          return (resp.body || []) as T;
        })
      );
  }

  protected post(
    endpointUrl: string,
    body: unknown
  ): Observable<HttpResponse<unknown>> {
    return this.httpClient.post(endpointUrl, body, {
      observe: 'response',
    });
  }

  protected delete(endpointUrl: string): Observable<HttpResponse<unknown>> {
    return this.httpClient.delete(endpointUrl, {
      observe: 'response',
    });
  }

  protected update(
    endpointUrl: string,
    body: unknown
  ): Observable<HttpResponse<unknown>> {
    return this.httpClient.put(endpointUrl, body, {
      observe: 'response',
    });
  }

  public static getErrorMessageFromResponse(
    errorReturn: HttpErrorResponse
  ): string {
    const errorApi = errorReturn.error as ErrorApiTemplate;
    if (errorApi.error) {
      return errorApi.message;
    }
    return 'unknown_error';
  }
}
