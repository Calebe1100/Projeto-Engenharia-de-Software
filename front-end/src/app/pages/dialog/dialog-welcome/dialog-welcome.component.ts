import { Component, OnInit } from '@angular/core';
import { CookieService } from 'src/services/shared/cookieService';

@Component({
  selector: 'app-dialog-welcome',
  templateUrl: './dialog-welcome.component.html',
  styleUrls: ['./dialog-welcome.component.scss'],
})
export class DialogWelcomeComponent implements OnInit {
  nameClient?: string;
  constructor(private readonly cookieService: CookieService) {}

  ngOnInit(): void {
    this.nameClient = this.cookieService.getCookie('name');
  }
}
