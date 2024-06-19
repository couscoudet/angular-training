import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css'],
})
export class HooksComponent implements OnChanges {
  @Input() myNumber!: number;

  ngOnChanges(changes: SimpleChanges): void {
    const displayNumber = changes['myNumber'].currentValue * 3 * 12 * 9;
    console.table(['bonjour ' + displayNumber]);
  }
}
