import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  standalone: true
})
export class InputComponent {

  @Input() inputType: "text" | "number" = "text"
  @Input() inputPlaceholder: string = ""
  @Input() inputValue: string = ""
  @Input() inputLabel: string = ""
  @Input() inputId: string = ""
}
