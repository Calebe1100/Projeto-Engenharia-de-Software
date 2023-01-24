import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogViewDisciplineComponent } from './dialog-view-discipline.component';

describe('DialogViewDisciplineComponent', () => {
  let component: DialogViewDisciplineComponent;
  let fixture: ComponentFixture<DialogViewDisciplineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogViewDisciplineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogViewDisciplineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
