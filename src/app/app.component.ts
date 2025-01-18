import { Component } from '@angular/core';
import { ContainerComponent } from "./shared/container/container.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // imports: [ContainerComponent]
})
export class AppComponent {
  title = 'rogan';
}
