import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisciplinesRegisterComponent } from './disciplines-register.component';

describe('DisciplinesRegisterComponent', () => {
  let component: DisciplinesRegisterComponent;
  let fixture: ComponentFixture<DisciplinesRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisciplinesRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisciplinesRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
