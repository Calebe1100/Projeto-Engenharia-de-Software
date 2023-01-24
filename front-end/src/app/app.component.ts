import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToolbarService } from 'src/services/shared/toolbarService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'cefet_road_map';
  showToolbar = true;

  constructor(public readonly toolbarService: ToolbarService) {}
}
