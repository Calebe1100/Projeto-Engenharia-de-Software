import { Component, OnInit } from '@angular/core';
import {
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { DisciplineService } from 'src/services/api/disciplines/discipline.service';
import { SystemDiscipline } from 'src/services/api/system-disciplines/interface/SystemDiscipline';
import { SystemDisciplinesService } from 'src/services/api/system-disciplines/system-discipline.service';

@Component({
  selector: 'app-dialog-disciplines',
  templateUrl: './dialog-disciplines.component.html',
  styleUrls: ['./dialog-disciplines.component.scss'],
})
export class DialogDisciplinesComponent implements OnInit {
  listDiscipline?: SystemDiscipline[];
  model = { option: 'Pendente' };

  popupForm: UntypedFormGroup;

  selectStatus = '';

  radioItems = ['Concluída', 'Cursando', 'Pendente'];

  userDisciplines = [];

  constructor(
    private readonly systemDisciplinesService: SystemDisciplinesService,
    private readonly disciplinesService: DisciplineService
  ) {
    this.popupForm = new UntypedFormGroup({
      discipline: new UntypedFormControl('', [Validators.required]),
      status: new UntypedFormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.systemDisciplinesService.listSystemDisciplines().subscribe((resp) => {
      this.listDiscipline = resp.list;
    });
  }

  onRadioChange(radiobutton: string) {
    this.selectStatus = radiobutton;
    this.popupForm.controls['status'].setValue(radiobutton);
  }

  onSubmit() {
    if (this.popupForm.valid) {
      this.disciplinesService.postUserDisciplines;
    }
  }
}
