import { Component, OnInit } from '@angular/core';
import { NgxFlowChatOptions, NgxFlowChatData } from 'ngx-flowchart';
import { DisciplinesFlowService } from 'src/services/api/disciplines-flow/disciplines-flow.service';
import { SystemDiscipline } from 'src/services/api/system-disciplines/interface/SystemDiscipline';

@Component({
  selector: 'app-dialog-view-discipline',
  templateUrl: './dialog-view-discipline.component.html',
  styleUrls: ['./dialog-view-discipline.component.scss'],
})
export class DialogViewDisciplineComponent implements OnInit {
  disciplineSelected?: SystemDiscipline;
  listDisciplineFlow?: SystemDiscipline[];

  sampleNodes = [
    {
      id: '1',
      label: 'Cálculo 1',
    },
    {
      id: '2',
      label: 'Cálculo 2',
      rank: 'first',
    },
    {
      id: '3',
      label: 'Cálculo 3',
      rank: 'first',
    },
    {
      id: '4',
      label: 'Cálculo 4',
    },
  ];

  sampleLinks = [
    {
      source: '1',
      target: '2',
    },
    {
      source: '2',
      target: '3',
    },
    {
      source: '3',
      target: '4',
    },
  ];

  clickN(event: any) {
    console.log(event);
  }
  constructor(
    private readonly disciplinesFlowService: DisciplinesFlowService
  ) {}
  ngOnInit(): void {
    this.disciplinesFlowService
      .listDisciplinesFlow(this.disciplineSelected?.id ?? '')
      .subscribe((resp) => (this.listDisciplineFlow = resp));
  }
}
