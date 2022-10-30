import { Component, OnInit } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
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
  //private disciplineDialog: MatDialogRef<DialogDisciplinesComponent, any>;
  listDiscipline: SystemDiscipline[] = [];
  filterListDiscipline: SystemDiscipline[] = [];
  tablestyle = 'bootstrap';

  constructor(
    public dialog: MatDialog,
    private readonly systemDisciplinesService: SystemDisciplinesService
  ) {}

  ngOnInit(): void {
    this.systemDisciplinesService.listSystemDisciplines().subscribe((resp) => {
      this.formattedRows(resp.list);
      this.listDiscipline = resp.list as SystemDiscipline[];
      this.filterListDiscipline = this.listDiscipline;
    });
  }
  formattedRows(listDiscipline: SystemDiscipline[]) {
    listDiscipline.map((discipline) => {});
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
}
