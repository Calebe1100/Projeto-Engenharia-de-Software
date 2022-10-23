import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiServiceTemplate } from '../api.service.template';
import { UserRequest } from './interface/UserRequest';

@Injectable({
  providedIn: 'root',
})
export class RegisterUserService extends ApiServiceTemplate {
  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  storeUser(params: UserRequest) {
    const endPoint = `${ApiServiceTemplate.prefixApiLocal}/users`;
    return this.post(endPoint, params);
  }
}
