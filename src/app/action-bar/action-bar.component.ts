import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.scss'],
})
export class ActionBarComponent {
  @Input() counter = 0;
  @Input() step: number = 10;
  @Output() couterChange = new EventEmitter(); // output component
  @Input() inputDisplay = true;

  decrease() {
    if (this.counter - this.step >= 0) {
      this.counter = this.counter - this.step;
      this.couterChange.emit(this.counter);
    }
  }

  increment() {
    if (this.counter + this.step <= 100) {
      this.counter = this.counter + this.step;
      this.couterChange.emit(this.counter);
    }
  }
}
