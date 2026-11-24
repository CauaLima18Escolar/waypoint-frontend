import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OpenMeteoService } from './services/open-meteo-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('WaypointFrontend');
  private openMeteoService = inject(OpenMeteoService);

  constructor() {
    this.openMeteoService.getForecast(-5.9, -35.2).subscribe({
      next(response) {
        console.log(response);
      },
      error(err) {
        console.error(err);
      }
    });
  }
}
