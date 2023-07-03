import {Component} from "@angular/core";

import {BazComponent} from "@kreuzerk/baz";

@Component({
  standalone: true,
  selector: 'bar',
  imports: [
    BazComponent
  ],
  template: `
    <h1>Bar rocks</h1>
    <baz/>
  `
})
export class BarComponent {}
