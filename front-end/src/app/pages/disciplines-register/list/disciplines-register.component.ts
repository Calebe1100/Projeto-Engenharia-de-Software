import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogDisciplinesComponent } from '../../dialog/dialog-disciplines/dialog-disciplines.component';

@Component({
  selector: 'app-disciplines-register',
  templateUrl: './disciplines-register.component.html',
  styleUrls: ['./disciplines-register.component.scss']
})
export class DisciplinesRegisterComponent implements OnInit {

  searchInputControl: FormControl = new FormControl();
  discipline: boolean = false;
  //private disciplineDialog: MatDialogRef<DialogDisciplinesComponent, any>;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
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

  searchInput(value: string): void {
    if (value.length !== 0) {
      /* const or = [];
      const fields = ['name'];
      fields.forEach((filter) =>
          or.push({
              [filter]: { $regex: value, $options: 'i' },
          })
      );

      const aggregate = this._setQuery.setQueryFilter(
          { deletedAt: null, $or: or },
          ['name'],
          ['name']
      );
      this._areasService.getAreasByAggregate(aggregate).subscribe(
          (response: GetAreasResponse) => {
              this.areas = response.data;
          },
          (response: HttpErrorResponse) => {
              this._alertService.add({
                  message: 'Área inexistente',
                  type: 'warning',
                  title: 'Atenção',
              });
          }
      ); */
    } else {
      //this._areasService.getAreasByPagination().subscribe();
    }
  }
}
