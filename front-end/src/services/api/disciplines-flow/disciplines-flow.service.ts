import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiServiceTemplate } from '../api.service.template';
import { DisciplineService } from '../disciplines/discipline.service';
import { CreateDisciplineRequest } from '../disciplines/interface/CreateDisciplineRequest';
import { UpdateDisciplineRequest } from '../disciplines/interface/UpdateDisciplineRequest';

@Injectable({
  providedIn: 'root',
})
export class DisciplinesFlowService extends ApiServiceTemplate {
  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  listDisciplinesFlow(param: string) {
    const endPoint = `${DisciplinesFlowService.prefixApiLocal}/disciplines-flow`;
    return this.list(endPoint, { idDiscipliner: param });
  }
}
