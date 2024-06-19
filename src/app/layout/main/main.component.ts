import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  myNumber: number = 0;
  isDisabled: boolean = false;
  firstName: string = 'Jean';
  displayContent = true;

  addOne() {
    this.myNumber++;
    this.disableButtonSwitch();
    this.switchContent();
  }

  init() {
    this.myNumber = 0;
    this.disableButtonSwitch();
    this.switchContent();
  }

  disableButtonSwitch() {
    this.myNumber >= 10 ? (this.isDisabled = true) : (this.isDisabled = false);
    console.log(this.isDisabled);
  }

  switchContent() {
    this.displayContent = this.myNumber < 5;
  }
}
