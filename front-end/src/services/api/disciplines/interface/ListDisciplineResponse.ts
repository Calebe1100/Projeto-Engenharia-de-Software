import { SystemDiscipline } from '../../system-disciplines/interface/SystemDiscipline';
import { DisciplineStatus } from './Discipline';

export interface ListDisciplineResponse {
  id: string;
  userId: number;
  idDiscipline: string;
  idCourse: number;
  initDate: string;
  finishDate: string;
  workload: number;
  status: DisciplineStatus;
  discipline: SystemDiscipline;
}
