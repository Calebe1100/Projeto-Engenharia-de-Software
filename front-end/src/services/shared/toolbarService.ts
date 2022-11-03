import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ToolbarService {
  public visible: boolean = true;

  constructor() {}

  show() {
    this.visible = true;
  }

  hide() {
    this.visible = false;
  }
}
