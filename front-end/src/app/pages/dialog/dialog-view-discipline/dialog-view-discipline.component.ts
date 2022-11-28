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
      id: 'start',
      label: 'Cálculo 1',
    },
    {
      id: '1',
      label: 'Cálculo 2',
      rank: 'first',
    },
    {
      id: '2',
      label: 'Cálculo 3',
      rank: 'first',
    },
    {
      id: '3',
      label: 'Cálculo 4',
    },
    {
      id: '4',
      label: 'Controle Digital',
    },
    {
      id: '5',
      label: 'Lab Controle Digital',
    },
    {
      id: '6',
      label: 'IA',
    },
  ];

  sampleLinks = [
    {
      source: 'start',
      target: '1',
    },
    {
      source: 'start',
      target: '2',
    },
    {
      source: '1',
      target: '3',
    },
    {
      source: '2',
      target: '4',
    },
    {
      source: '2',
      target: '6',
    },
    {
      source: '3',
      target: '5',
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
