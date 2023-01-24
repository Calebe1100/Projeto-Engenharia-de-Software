import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToolbarService {
  public visible: Observable<boolean> = of(true);

  constructor() {}

  show() {
    this.visible = of(true);
  }

  hide() {
    this.visible = of(false);
  }
}
