import { Component } from '@angular/core';
import {
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { COURSES } from 'src/app/shared/enum/COURSES';
import { PERIODS } from 'src/app/shared/enum/PERIODS';
import { AuthService } from 'src/services/api/login/auth.service';
import { UserRequest } from 'src/services/api/login/interface/UserRequest';
import { RegisterUserService } from 'src/services/api/login/register-user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  loginForm: UntypedFormGroup;
  openRegisterForm = false;
  periods = PERIODS;
  courses = COURSES;

  constructor(
    private readonly authService: AuthService,
    private snackBar: MatSnackBar
  ) {
    this.loginForm = new UntypedFormGroup({
      name: new UntypedFormControl('', [Validators.required]),
      email: new UntypedFormControl('', [
        Validators.required,
        Validators.email,
      ]),
      birthDate: new UntypedFormControl('', [Validators.required]),
      registrationNumber: new UntypedFormControl('', [Validators.required]),
      password: new UntypedFormControl('', [Validators.required]),
      passwordConfirm: new UntypedFormControl('', [Validators.required]),
      period: new UntypedFormControl(''),
      course: new UntypedFormControl(''),
    });
  }

  async onSubmit() {
    const modelUserToRequest = {
      name: this.loginForm.value['name'],
      email: this.loginForm.value['email'],
      registrationNumber: this.convertPeriodToNumber(
        this.loginForm.value['registrationNumber']
      ),
      birthDate: this.loginForm.value['birthDate'],
      password: this.loginForm.value['password'],
      period: this.loginForm.value['period'],
      course: this.loginForm.value['course'],
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
