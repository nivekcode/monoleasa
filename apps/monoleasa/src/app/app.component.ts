import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import {FooComponent} from "@kreuzerk";
import {BarComponent} from "@kreuzerk/bar";

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, FooComponent, BarComponent],
  selector: 'monoleasa-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'monoleasa';
}
