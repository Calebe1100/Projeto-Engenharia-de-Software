import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'cefet_road_map';

  get currentYear(): number {
    return new Date().getFullYear();
  }
}
