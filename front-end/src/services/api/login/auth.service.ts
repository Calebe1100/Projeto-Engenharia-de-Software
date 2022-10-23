import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from './interface/UserLogin';
import { UserRequest } from './interface/UserRequest';
import { LoginService } from './login.service';
import { RegisterUserService } from './register-user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userAuthetication: boolean = false;

  constructor(
    private readonly router: Router,
    private readonly loginService: LoginService,
    private readonly registerUserService: RegisterUserService
  ) {}

  async login(user: UserLogin) {
    return this.loginService.login(user).subscribe((resp) => {
      if (resp.ok) {
        this.userAuthetication = true;
        this.router.navigate(['/disciplines-register']);
      } else {
        this.userAuthetication = false;
      }
    });
  }

  async register(user: UserRequest) {
    return this.registerUserService.storeUser(user).subscribe((resp) => {
      if (resp.ok) {
        this.router.navigate(['/disciplines-register']);
      }
      return false;
    });
  }
}
