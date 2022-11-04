import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { ApiServiceTemplate } from '../api.service.template';
import { UserLogin } from './interface/UserLogin';
import { UserRequest } from './interface/UserRequest';
import { LoginService } from './login.service';
import { RegisterUserService } from './register-user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public userAuthentication: Observable<boolean> = of(false);

  constructor(
    private readonly router: Router,
    private readonly loginService: LoginService,
    private readonly registerUserService: RegisterUserService,
    private readonly snackbarService: MatSnackBar
  ) {}

  async login(user: UserLogin) {
    return this.loginService.login(user).subscribe(
      (resp) => {
        window.localStorage.setItem('tokenJwt', resp.body as string);
        this.userAuthentication = of(true);
        this.router.navigate(['/disciplines-register']);
      },
      (error: HttpErrorResponse) => {
        this.snackbarService.open(
          ApiServiceTemplate.getErrorMessageFromResponse(error),
          'Close',
          { duration: 5000 }
        );
      }
    );
  }

  async register(user: UserRequest) {
    return this.registerUserService.storeUser(user).subscribe(
      () => {
        this.router.navigate(['/disciplines-register']);
      },
      (error: HttpErrorResponse) => {
        this.snackbarService.open(
          ApiServiceTemplate.getErrorMessageFromResponse(error),
          'Close',
          { duration: 5000 }
        );
      }
    );
  }
}
