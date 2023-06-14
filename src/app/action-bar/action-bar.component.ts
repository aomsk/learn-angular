import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.scss'],
})
export class ActionBarComponent {
  counter = 0;
  @Input() step: number = 1;

  decrease() {
    if (this.counter - this.step >= 0) {
      this.counter = this.counter - this.step;
    }
  }

  increment() {
    if (this.counter + this.step <= 100) {
      this.counter = this.counter + this.step;
    }
  }
}
