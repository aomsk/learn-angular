import { Component } from '@angular/core';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.scss'],
})
export class ActionBarComponent {
  counter = 0;

  decrease() {
    if (this.counter - 1 > 0) {
      this.counter--;
    }
  }

  increment() {
    if (this.counter + 1 < 100) {
      this.counter++;
    }
  }
}
