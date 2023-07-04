import {Component} from "@angular/core";

import {BazComponent} from "@kreuzerk/monoleasa-baz";

@Component({
  standalone: true,
  selector: 'monoleasa-bar',
  imports: [
    BazComponent
  ],
  template: `
    <h1>{{ title }}</h1>
    <monoleasa-baz/>
  `
})
export class BarComponent {
  title = 'Bar rocks';
}
