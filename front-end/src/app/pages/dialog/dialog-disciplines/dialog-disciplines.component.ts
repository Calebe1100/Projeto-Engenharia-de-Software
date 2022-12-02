import { Component, OnInit } from '@angular/core';
import {
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { DisciplineService } from 'src/services/api/disciplines/discipline.service';
import { CreateDisciplineRequest } from 'src/services/api/disciplines/interface/CreateDisciplineRequest';
import { DisciplineStatus } from 'src/services/api/disciplines/interface/Discipline';
import { SystemDiscipline } from 'src/services/api/system-disciplines/interface/SystemDiscipline';
import { SystemDisciplinesService } from 'src/services/api/system-disciplines/system-discipline.service';
import { CookieService } from 'src/services/shared/cookieService';

@Component({
  selector: 'app-dialog-disciplines',
  templateUrl: './dialog-disciplines.component.html',
  styleUrls: ['./dialog-disciplines.component.scss'],
})
export class DialogDisciplinesComponent implements OnInit {
  listDiscipline?: SystemDiscipline[];
  listAllDiscipline?: SystemDiscipline[];
  model = { option: 'Pendente' };

  idUser = '';

  popupForm: UntypedFormGroup;

  selectStatus = '';

  radioItems = ['Concluída', 'Cursando', 'Pendente'];

  userDisciplines = [];

  constructor(
    private readonly systemDisciplinesService: SystemDisciplinesService,
    private readonly disciplinesService: DisciplineService,
    private readonly cookieService: CookieService
  ) {
    this.idUser = this.cookieService.getCookie('id');
    this.popupForm = new UntypedFormGroup({
      discipline: new UntypedFormControl('', [Validators.required]),
      status: new UntypedFormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.systemDisciplinesService.listSystemDisciplines().subscribe((resp) => {
      this.listAllDiscipline = resp.list;
      this.listDiscipline = (resp.list as SystemDiscipline[]).filter(
        (discipline) => discipline.idCourse !== resp.list[0].idCourse
      );
    });

    this.popupForm.controls['status'].setValue(this.radioItems[2]);
  }

  onRadioChange(radiobutton: string) {
    this.selectStatus = radiobutton;
    this.popupForm.controls['status'].setValue(radiobutton);
  }

  onSubmit() {
    if (this.popupForm.valid) {
      const disciplineRequest = {
        idUser: this.idUser,
        idDiscipline: this.popupForm.value.discipline?.id,
        idCourse: this.popupForm.value.discipline?.idCourse,
        description: this.popupForm.value.discipline?.name,
        status: this.getStatusId(this.popupForm.value.status),
        typeDiscipline: this.popupForm.value.discipline?.typeDiscipline,
      } as CreateDisciplineRequest;

      this.disciplinesService
        .postUserDiscipline(disciplineRequest)
        .subscribe(() => window.location.reload());
    }
  }
  getStatusId(status: string): DisciplineStatus {
    if (status === 'Concluído') {
      return DisciplineStatus.completed;
    } else if (status === 'Pendente') {
      return DisciplineStatus.notStarted;
    } else if (status === 'Cursando') {
      return DisciplineStatus.studying;
    }
    return DisciplineStatus.notStarted;
  }
}
