import { Component, OnInit } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';
import { DisciplineService } from 'src/services/api/disciplines/discipline.service';
import {
  Discipline,
  DisciplineStatus,
} from 'src/services/api/disciplines/interface/Discipline';
import { AuthService } from 'src/services/api/login/auth.service';
import { SystemDiscipline } from 'src/services/api/system-disciplines/interface/SystemDiscipline';
import { SystemDisciplinesService } from 'src/services/api/system-disciplines/system-discipline.service';
import { DialogDisciplinesComponent } from '../../dialog/dialog-disciplines/dialog-disciplines.component';

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

  ColumnMode = ColumnMode;
  SelectionType = SelectionType;

  dateTime = '';

  constructor(
    public dialog: MatDialog,
    private readonly systemDisciplinesService: SystemDisciplinesService,
    private readonly disciplineService: DisciplineService,
    public readonly authService: AuthService
  ) {
    this.selected.push(this.filterListDiscipline[2]);

    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDay();
    this.dateTime = `${day}/${month}/${year}`;
  }

  selected: SystemDiscipline[] = [];

  ngOnInit(): void {
    this.systemDisciplinesService.listSystemDisciplines().subscribe((resp) => {
      this.listDiscipline = resp.list.map((discipline: SystemDiscipline) => {
        return { ...discipline, status: 'Não iniciado' };
      }) as SystemDiscipline[];
      this.filterListDiscipline = this.listDiscipline;
    });
  }
  get displayDisciplinesList(): boolean {
    return true;
  }

  get currentYear(): number {
    return new Date().getFullYear();
  }

  openDialog() {
    this.dialog.open(DialogDisciplinesComponent);
  }

  async updateResults() {
    this.listDiscipline = this.searchByValue();
  }

  searchByValue() {
    return this.filterListDiscipline.filter((item) => {
      if (this.searchInputControl.value.trim() === '') {
        this.filterListDiscipline = this.listDiscipline;
        return true;
      } else {
        return (
          item.name
            .toLowerCase()
            .includes(
              this.searchInputControl.value.trim().toLocaleLowerCase()
            ) ||
          item.name
            .toLowerCase()
            .includes(this.searchInputControl.value.trim().toLocaleLowerCase())
        );
      }
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
      .postUserDisciplines(
        this.formattedListToRequest(DisciplineStatus.completed)
      )
      .subscribe(() => window.location.reload);
  }

  emitStudying() {
    this.disciplineService
      .postUserDisciplines(
        this.formattedListToRequest(DisciplineStatus.studying)
      )
      .subscribe(() => window.location.reload);
  }

  formattedListToRequest(status: DisciplineStatus): Discipline[] {
    return this.listDisciplineSelected.map((discipline) => {
      return {
        idCourse: 1,
        finishDate: this.dateTime,
        userId: 1,
        idDiscipline: discipline.id,
        status: status,
      } as Discipline;
    });
  }
}
