import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDisciplinesComponent } from './dialog-disciplines.component';

describe('DialogDisciplinesComponent', () => {
  let component: DialogDisciplinesComponent;
  let fixture: ComponentFixture<DialogDisciplinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogDisciplinesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDisciplinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
