import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // 1 ------------------------------------------------------------------------------------
  // title = 'learn-angular';
  // ninjaName = 'Naruto';
  // ninjaConsole() {
  //   console.log('ninjaConsole:', this.ninjaName);
  // }
  // cahngeNinjaName(name: string) {
  //   this.ninjaName = name;
  // }
  // 2 ------------------------------------------------------------------------------------
  // value = 0;
  // calBuffet(value: string) {
  //   const price = Number(value);
  //   this.value = (price * 3) / 4;
  // }
  // 3 -------------------------------------------------------------------------------------
  // testClick() {
  //   console.log('test event binding');
  // }
  // testNumberChange(value: number) {
  //   console.log('test number cahnge from app-action-bar:', value);
  // }
  // 4 -------------------------------------------------------------------------------------
  appMinLabel: string = 'myAppMinLabel';
  appMaxLabel: string = 'myAppMaxLabel';

  doAppMinChange(value: number) {
    console.log(`test minChange event : ${value}`);
  }

  doAppMaxChange(value: number) {
    console.log(`test maxChange event : ${value}`);
  }
}
