import { TypeDiscipline } from '../../system-disciplines/interface/SystemDiscipline';
import { DisciplineStatus } from './Discipline';

export interface CreateDisciplineRequest {
  description: string;
  idDiscipline: string;
  idCourse: string;
  idUser: string;
  status: DisciplineStatus;
}
