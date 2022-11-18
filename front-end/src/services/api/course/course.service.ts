import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiServiceTemplate } from '../api.service.template';

@Injectable({
  providedIn: 'root',
})
export class CourseService extends ApiServiceTemplate {
  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  listAll() {
    const endPoint = `${CourseService.prefixApiLocal}/courses`;
    return this.list(endPoint);
  }
}
