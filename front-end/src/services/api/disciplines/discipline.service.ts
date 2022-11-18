import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiServiceTemplate } from '../api.service.template';
import { Discipline } from './interface/Discipline';
import { DisciplineRequest } from './interface/DisciplineRequest';
import { UpdateDisciplineRequest } from './interface/UpdateDisciplineRequest';

@Injectable({
  providedIn: 'root',
})
export class DisciplineService extends ApiServiceTemplate {
  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  updateDisciplinesStatus(body: UpdateDisciplineRequest[]) {
    const endPoint = `${DisciplineService.prefixApiLocal}/user-disciplines-course`;
    return this.update(endPoint, body);
  }

  listUserDiscipline(param: string) {
    const endPoint = `${DisciplineService.prefixApiLocal}/disciplines`;
    return this.list(endPoint, { idUser: param });
  }

  postUserDisciplines(body: Discipline[]) {
    const endPoint = `${DisciplineService.prefixApiLocal}/disciplines`;
    return this.post(endPoint, body);
  }
}
