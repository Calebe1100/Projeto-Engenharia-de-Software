import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/api/login/auth.service';
import { CookieService } from 'src/services/shared/cookieService';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  constructor(
    public readonly authService: AuthService,
    private readonly cookieService: CookieService
  ) {}

  ngOnInit(): void {}

  setLogout() {
    this.authService.setHiddenAuthentication();
    this.cookieService.clearAll();
    window.localStorage.clear();
    window.location.href = 'https://www.youtube.com/watch?v=PwrVePMx6t0';
  }
}
