import { Component, OnInit } from '@angular/core';
import { SystemDiscipline } from 'src/services/api/system-disciplines/interface/SystemDiscipline';
import { SystemDisciplinesService } from 'src/services/api/system-disciplines/system-discipline.service';

@Component({
  selector: 'app-dialog-disciplines',
  templateUrl: './dialog-disciplines.component.html',
  styleUrls: ['./dialog-disciplines.component.scss'],
})
export class DialogDisciplinesComponent implements OnInit {
  listDiscipline?: SystemDiscipline[];
  model = { option: 'Não iniciada' };

  selectStatus = '';

  radioItems = ['Concluída', 'Cursando', 'Não iniciada'];

  constructor(
    private readonly systemDisciplinesService: SystemDisciplinesService
  ) {}

  ngOnInit(): void {
    this.systemDisciplinesService.listSystemDisciplines().subscribe((resp) => {
      this.listDiscipline = resp.list;
    });
  }

  onRadioChange(radiobutton: string) {
    this.selectStatus = radiobutton;
  }
}
