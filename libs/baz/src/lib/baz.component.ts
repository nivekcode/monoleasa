import {Component} from "@angular/core";

@Component({
  standalone: true,
  selector: 'monoleasa-baz',
  template: `<h1>{{ title }}</h1>`
})
export class BazComponent {
  title = 'Baz rocks';
}
