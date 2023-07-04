import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import {FooComponent} from "@kreuzerk/monoleasa-foo";
import {BarComponent} from "@kreuzerk/monoleasa-bar";

import { NxWelcomeComponent } from './nx-welcome.component';

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
