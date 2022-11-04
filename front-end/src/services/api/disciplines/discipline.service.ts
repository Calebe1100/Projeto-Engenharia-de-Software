import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiServiceTemplate } from '../api.service.template';
import { Discipline } from './interface/Discipline';

@Injectable({
  providedIn: 'root',
})
export class DisciplineService extends ApiServiceTemplate {
  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  postUserDisciplines(body: Discipline[]) {
    const endPoint = `${DisciplineService.prefixApiLocal}/disciplines`;
    return this.post(endPoint, body);
  }
}
