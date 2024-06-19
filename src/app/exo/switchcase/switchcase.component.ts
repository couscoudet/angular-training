import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-switchcase',
  templateUrl: './switchcase.component.html',
  styleUrls: ['./switchcase.component.css'],
})
export class SwitchcaseComponent {
  @Input()
  gender: string = '';
}
