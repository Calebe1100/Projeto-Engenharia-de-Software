import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/api/login/auth.service';
import { UserLogin } from 'src/services/api/login/interface/UserLogin';
import { LoginService } from 'src/services/api/login/login.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent {
  loginForm: FormGroup;
  openRegisterForm = false;

  constructor(
    private readonly authSevice: AuthService,
    private readonly loginService: LoginService,
    private readonly router: Router,
    private snackBar: MatSnackBar
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }
  async onSubmit() {
    if (this.loginForm.valid) {
      const userLogin = {
        email: this.loginForm.value['email'],
        password: this.loginForm.value['password'],
      };
      await this.authSevice
        .login(userLogin)
        .catch((error) => this.snackBar.open(error, 'Done'));
    }
  }
}
