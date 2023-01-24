import { Component, OnInit } from '@angular/core';
import {
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { COURSES } from 'src/app/shared/enum/COURSES';
import { PERIODS } from 'src/app/shared/enum/PERIODS';
import { GetEnum } from 'src/app/shared/utils/GetEnum';
import { CourseService } from 'src/services/api/course/course.service';
import { Course } from 'src/services/api/course/interface/Course';
import { AuthService } from 'src/services/api/login/auth.service';
import { UserRequest } from 'src/services/api/login/interface/UserRequest';
import { RegisterUserService } from 'src/services/api/login/register-user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  loginForm: UntypedFormGroup;
  openRegisterForm = false;
  periods = PERIODS;
  courses: Course[] = [];

  constructor(
    private readonly authService: AuthService,
    private snackBar: MatSnackBar,
    private readonly courseService: CourseService
  ) {
    this.loginForm = new UntypedFormGroup({
      name: new UntypedFormControl('', [Validators.required]),
      email: new UntypedFormControl('', [
        Validators.required,
        Validators.email,
      ]),
      birthDate: new UntypedFormControl(''),
      registrationNumber: new UntypedFormControl('', [Validators.required]),
      password: new UntypedFormControl('', [Validators.required]),
      passwordConfirm: new UntypedFormControl('', [Validators.required]),
      period: new UntypedFormControl(''),
      course: new UntypedFormControl('', [Validators.required]),
    });
  }
  ngOnInit(): void {
    this.courseService
      .listAll()
      .subscribe((resp) => (this.courses = resp.list as Course[]));
  }

  async onSubmit() {
    const modelUserToRequest = {
      name: this.loginForm.value['name'],
      email: this.loginForm.value['email'],
      registration: this.convertPeriodToNumber(
        this.loginForm.value['registrationNumber']
      ),
      birthDate: this.loginForm.value['birthDate'],
      password: this.loginForm.value['password'],
      period: (this.loginForm.value['period'] as string).slice(0, 1),
      idCourse: this.loginForm.value['course'],
    } as UserRequest;

    if (this.loginForm.valid) {
      if (!(await this.authService.register(modelUserToRequest))) {
        this.snackBar.open('Erro ao cadastrar', 'Done', { duration: 5000 });
      }
    } else {
      this.snackBar.open('Dados Inválidos', 'Done', { duration: 5000 });
    }
  }
  convertPeriodToNumber(period: string): string {
    return period.slice(0, 1);
  }
}
