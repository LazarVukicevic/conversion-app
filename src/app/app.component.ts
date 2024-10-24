import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FeetToInchesComponent } from "./feet-to-inches/feet-to-inches.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FeetToInchesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'coversionsApp';
}
