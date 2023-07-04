import {Component} from "@angular/core";

import {BazComponent} from "@kreuzerk/monoleasa-baz";

@Component({
  standalone: true,
  selector: 'monoleasa-foo',
  template: `
    <h1>{{ title }}</h1>
    <monoleasa-baz/>
  `,
  imports: [
    BazComponent
  ],
})
export class FooComponent {
  title = 'Foo rocks';
}
