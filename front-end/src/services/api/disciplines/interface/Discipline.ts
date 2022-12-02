export interface Discipline {
  id: string;
  userId: number;
  idDiscipline: string;
  idCourse: number;
  nameCourse:string;
  initDate: string;
  finishDate: string;
  workload: number;
  status: DisciplineStatus;
}

export enum DisciplineStatus {
  completed = 1,
  studying = 2,
  notStarted = 3,
}
