import { Course } from '../../course/interface/Course';
import { SystemDiscipline } from '../../system-disciplines/interface/SystemDiscipline';
import { DisciplineStatus } from './Discipline';

export interface ListDisciplineResponse {
  id: string;
  userId: number;
  idDiscipline: string;
  idCourse: number;
  course: Course;
  initDate: string;
  finishDate: string;
  workload: number;
  status: DisciplineStatus;
  discipline: SystemDiscipline;
}
