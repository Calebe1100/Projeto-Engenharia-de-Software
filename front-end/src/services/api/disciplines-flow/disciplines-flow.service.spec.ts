import { TestBed } from '@angular/core/testing';

import { DisciplinesFlowService } from './disciplines-flow.service';

describe('DisciplinesFlowService', () => {
  let service: DisciplinesFlowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisciplinesFlowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
