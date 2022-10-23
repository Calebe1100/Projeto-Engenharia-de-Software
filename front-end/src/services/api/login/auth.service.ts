import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from './interface/UserLogin';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userAuthetication: boolean = false;

  constructor(
    private readonly router: Router,
    private readonly loginService: LoginService
  ) {}

  async Login(user: UserLogin) {
    return this.loginService.login(user).subscribe((resp) => {
      if (resp.ok) {
        this.userAuthetication = true;
        this.router.navigate(['/disciplines-register']);
      } else {
        this.userAuthetication = false;
      }
    });
  }
}
