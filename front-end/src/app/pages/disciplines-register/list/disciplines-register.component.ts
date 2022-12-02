import { Component, OnInit } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';
import { fork } from 'child_process';
import * as moment from 'moment';
import { forkJoin } from 'rxjs';
import { DisciplineService } from 'src/services/api/disciplines/discipline.service';
import {
  Discipline,
  DisciplineStatus,
} from 'src/services/api/disciplines/interface/Discipline';
import { ListDisciplineResponse } from 'src/services/api/disciplines/interface/ListDisciplineResponse';
import { UpdateDisciplineRequest } from 'src/services/api/disciplines/interface/UpdateDisciplineRequest';
import { AuthService } from 'src/services/api/login/auth.service';
import { SystemDiscipline } from 'src/services/api/system-disciplines/interface/SystemDiscipline';
import { SystemDisciplinesService } from 'src/services/api/system-disciplines/system-discipline.service';
import { CookieService } from 'src/services/shared/cookieService';
import { DialogDisciplinesComponent } from '../../dialog/dialog-disciplines/dialog-disciplines.component';
import { DialogViewDisciplineComponent } from '../../dialog/dialog-view-discipline/dialog-view-discipline.component';
import { DialogWelcomeComponent } from '../../dialog/dialog-welcome/dialog-welcome.component';

@Component({
  selector: 'app-disciplines-register',
  templateUrl: './disciplines-register.component.html',
  styleUrls: ['./disciplines-register.component.scss'],
})
export class DisciplinesRegisterComponent implements OnInit {
  searchInputControl: UntypedFormControl = new UntypedFormControl();
  discipline: boolean = false;
  listDiscipline: SystemDiscipline[] = [];
  filterListDiscipline: SystemDiscipline[] = [];

  listDisciplineSelected: SystemDiscipline[] = [];

  tablestyle = 'bootstrap';

  listUserDiscipline: Discipline[] = [];

  ColumnMode = ColumnMode;
  SelectionType = SelectionType;

  dateTime = '';

  userAuthenticated = false;

  constructor(
    public dialog: MatDialog,
    private readonly systemDisciplinesService: SystemDisciplinesService,
    private readonly disciplineService: DisciplineService,
    public readonly authService: AuthService,
    private readonly cookieService: CookieService
  ) {
    this.selected.push(this.filterListDiscipline[2]);

    this.dateTime = moment().format('MM/DD/YYYY HH:mm');

    this.authService.userAuthentication.subscribe(
      (resp) => (this.userAuthenticated = resp)
    );
  }

  selected: SystemDiscipline[] = [];

  ngOnInit(): void {
    const idUser = this.cookieService.getCookie('id');

    idUser
      ? this.disciplineService
        .listUserDiscipline(idUser.toString())!
        .subscribe((resp) => {
          this.listDiscipline = (resp.list as ListDisciplineResponse[]).map(
            (item) => {
              return {
                description: item.discipline.description,
                id: item.discipline.id,
                idCourse: item.discipline.idCourse,
                idCourseDiscipline: item.id,
                name: item.discipline.name,
                status: this.getStatus(item.status),
                typeDiscipline: item.discipline.typeDiscipline,
                workload: item.discipline.workload,
              } as unknown as SystemDiscipline;
            }
          );

          this.setStatus();

          this.filterListDiscipline = this.listDiscipline;
          this.authService.initAuthentication
            ? this.dialog.open(DialogWelcomeComponent)
            : null;
        })
      : this.systemDisciplinesService
        .listSystemDisciplines()
        .subscribe((resp) => {
          this.listDiscipline = (resp.list as SystemDiscipline[]).map(
            (item) => {
              return {
                description: item.description,
                id: item.id,
                idCourse: item.idCourse,
                idCourseDiscipline: item.id,
                name: item.name,
                status: this.getStatus(item.status),
                typeDiscipline: item.typeDiscipline,
                workload: item.workload,
              } as unknown as SystemDiscipline;
            }
          );

          this.setStatus();
          this.filterListDiscipline = this.listDiscipline;
        });
  }

  getStatus(status: number): string {
    if (status === DisciplineStatus.completed) {
      return 'Concluído';
    } else if (status === DisciplineStatus.notStarted) {
      return 'Pendente';
    } else if (status === DisciplineStatus.studying) {
      return 'Cursando';
    }
    return 'Pendente';
  }

  setStatus() {
    this.listDiscipline = this.listDiscipline.map(
      (discipline: SystemDiscipline) => {
        return {
          ...discipline,
          descriptionDiscipline:
            discipline.typeDiscipline === 1 ? 'Obrigatória' : 'Optativa',
        };
      }
    ) as unknown as SystemDiscipline[];
  }
  get displayDisciplinesList(): boolean {
    return true;
  }

  get currentYear(): number {
    return new Date().getFullYear();
  }

  openDialog() {
    let dialogRef = this.dialog.open(DialogDisciplinesComponent);
    dialogRef.componentInstance.listDiscipline = this.listDiscipline;
  }

  async updateResults() {
    if (this.searchInputControl.value.trim() === '') {
      this.filterListDiscipline = this.listDiscipline;
    }
    this.filterListDiscipline = this.searchByValue();
  }

  searchByValue() {
    return this.filterListDiscipline.filter((item) => {
      return (
        item.name
          .toLowerCase()
          .includes(this.searchInputControl.value.trim().toLocaleLowerCase()) ||
        item.name
          .toLowerCase()
          .includes(this.searchInputControl.value.trim().toLocaleLowerCase())
      );
    });
  }

  onSelect(disciplineSelected: SystemDiscipline) {
    if (
      this.listDisciplineSelected.some(
        (discipline) => discipline.id == disciplineSelected.id
      )
    ) {
      this.listDisciplineSelected = this.listDisciplineSelected.filter(
        (discipline) => discipline.id !== disciplineSelected.id
      );
    } else {
      this.listDisciplineSelected.push(disciplineSelected);
    }
  }

  isRowSelected(id: string) {
    return false;
  }

  emitCompleted() {
    this.disciplineService
      .updateDisciplinesStatus(
        this.formattedListToRequest(DisciplineStatus.completed)
      )
      .subscribe(() => window.location.reload());
  }

  emitStudying() {
    this.disciplineService
      .updateDisciplinesStatus(
        this.formattedListToRequest(DisciplineStatus.studying)
      )
      .subscribe(() => window.location.reload());
  }

  formattedListToRequest(status: DisciplineStatus): UpdateDisciplineRequest[] {
    return this.listDisciplineSelected.map((discipline) => {
      return {
        status: status,
        id: discipline.idCourseDiscipline,
      } as UpdateDisciplineRequest;
    });
  }

  onRowClicked(event: any) {
    if (event.type == 'click') {
      let dialogRef = this.dialog.open(DialogViewDisciplineComponent);
      dialogRef.componentInstance.disciplineSelected =
        event.row as SystemDiscipline;
    }
  }
}
