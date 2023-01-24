import { Course } from '../../course/interface/Course';
import { DisciplineStatus } from '../../disciplines/interface/Discipline';

export interface SystemDiscipline {
  description: string;
  id: string;
  idCourse: number;
  course: Course;
  nameCourse: string;
  name: string;
  workload: number;
  status: DisciplineStatus;
  typeDiscipline: TypeDiscipline;
  idCourseDiscipline: string;
}

export enum TypeDiscipline {
  Obrigatoria = 1,
  Optativa = 2,
}
