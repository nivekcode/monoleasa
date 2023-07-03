import {Component} from "@angular/core";

import {BazComponent} from "@kreuzerk/baz";

@Component({
  standalone: true,
  selector: 'foo',
  template: `
    <h1>Foo rocks</h1>
    <baz/>
  `,
  imports: [
    BazComponent
  ],
})
export class FooComponent {}
