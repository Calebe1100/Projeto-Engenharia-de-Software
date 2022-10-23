import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/api/login/auth.service';
import { UserLogin } from 'src/services/api/login/interface/UserLogin';
import { LoginService } from 'src/services/api/login/login.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
  loginForm: FormGroup;
  openRegisterForm = false;
  userLogin: UserLogin = { email: '', password: '' };

  constructor(
    private readonly authSevice: AuthService,
    private readonly loginService: LoginService,
    private readonly router: Router
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  async onSubmit() {
    if (this.loginForm.valid) {
      this.userLogin = {
        email: this.loginForm.value['email'],
        password: this.loginForm.value['password'],
      };
      this.loginService.login(this.userLogin).subscribe((resp) => {
        if (resp.ok) {
          this.router.navigate(['/disciplines-register']);
        } else {
        }
      });
    }
  }
}
