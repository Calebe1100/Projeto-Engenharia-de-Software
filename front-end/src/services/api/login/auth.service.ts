import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { CookieService } from 'src/services/shared/cookieService';
import { ApiServiceTemplate } from '../api.service.template';
import { UserLogin } from './interface/UserLogin';
import { UserLoginResponse } from './interface/UserLoginResponse';
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
    private readonly snackbarService: MatSnackBar,
    private readonly cookieService: CookieService
  ) {
    window.localStorage.getItem('tokenJwt')
      ? (this.userAuthentication = of(true))
      : (this.userAuthentication = of(false));
  }

  async login(user: UserLogin) {
    return this.loginService.login(user).subscribe(
      (resp) => {
        this.setUserCredentials(resp.body as UserLoginResponse);

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
  setUserCredentials(userModel: UserLoginResponse) {
    window.localStorage.setItem('tokenJwt', userModel.token as string);

    this.cookieService.setCookie('id', userModel.user.id, 4000, 'user/');
    this.cookieService.setCookie('email', userModel.user.email, 4000, 'user/');
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
