import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PERIODS} from 'src/app/shared/enum/PERIODS';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  loginForm: FormGroup;
  openRegisterForm = false;
  periods = PERIODS;

  constructor() {
    this.loginForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      birthData: new FormControl('', [Validators.required]),
      registrationNumber: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      passwordConfirm: new FormControl('', [Validators.required]),
      period: new FormControl('')
    });
  }

  onSubmit() {
    if(this.loginForm.valid) {
      console.log(this.loginForm)
    }
  }

}
