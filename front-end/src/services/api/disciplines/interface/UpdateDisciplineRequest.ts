import { DisciplineStatus } from './Discipline';

export interface UpdateDisciplineRequest {
  id: string;
  status: DisciplineStatus;
}
