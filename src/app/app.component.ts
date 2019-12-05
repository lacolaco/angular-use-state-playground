import { Component, ChangeDetectionStrategy } from "@angular/core";
import { useState } from "../lib/use-state";

@Component({
  selector: "app-root",
  template: `
    <h1>Welcome to {{ title.value }}!</h1>
    <button (click)="changeTitle()">Change Title</button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  readonly title = useState(this, "Angular");

  changeTitle() {
    this.title.setValue("changed");
  }
}
