import { Component, OnInit } from '@angular/core';
import { NgxFlowChatOptions, NgxFlowChatData } from 'ngx-flowchart'
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
      label: 'start'
    }, {
        id: '1',
        label: 'Query ThreatConnect',
        rank: 'first'
    }, {
        id: '2',
        label: 'Query XForce',
        rank: 'first'
    }, {
        id: '3',
        label: 'Format Results'
    }, {
        id: '4',
        label: 'Search Splunk'
    }, {
        id: '5',
        label: 'Block LDAP'
    }, {
        id: '6',
        label: 'Email Results'
    }];

  sampleLinks = [{
      source: 'start',
      target: '1'
  }, {
      source: 'start',
      target: '2'
  }, {
      source: '1',
      target: '3'
  }, {
      source: '2',
      target: '4'
  }, {
      source: '2',
      target: '6'
  }, {
      source: '3',
      target: '5'
  }];

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
