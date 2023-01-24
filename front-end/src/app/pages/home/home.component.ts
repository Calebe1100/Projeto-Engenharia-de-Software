import { Component, OnInit } from '@angular/core';
import { ToolbarService } from 'src/services/shared/toolbarService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(public toolbarService: ToolbarService) {}

  ngOnInit(): void {
    this.toolbarService.show();
  }
}
