import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
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
  loginForm: FormGroup;
  openRegisterForm = false;
  periods = PERIODS;

  constructor(
    private readonly authService: AuthService,
    private snackBar: MatSnackBar
  ) {
    this.loginForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      birthData: new FormControl('', [Validators.required]),
      registrationNumber: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      passwordConfirm: new FormControl('', [Validators.required]),
      period: new FormControl(''),
    });
  }

  async onSubmit() {
    const modelUserToRequest = {
      name: this.loginForm.value['name'],
      email: this.loginForm.value['email'],
      numberRegistration: this.loginForm.value['registration'],
      birthDate: this.loginForm.value['birthDate'],
      password: this.loginForm.value['password'],
      period: this.loginForm.value['period'],
    } as UserRequest;

    if (this.loginForm.valid) {
      if (!(await this.authService.register(modelUserToRequest))) {
        this.snackBar.open('Erro ao cadastrar', 'Done', { duration: 5000 });
      }
    } else {
      this.snackBar.open('Dados Inválidos', 'Done');
    }
  }
}
