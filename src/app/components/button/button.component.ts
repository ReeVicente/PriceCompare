import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  imports: [
    NgClass
  ],
  standalone: true
})
export class ButtonComponent {
  @Output() onClick = new EventEmitter();
  @Input() type: 'button' | 'submit' = 'button';
  @Input() btnStyle: 'primary' | 'outline' = 'primary';
  @Input() disabled: boolean = false;

  protected onClickHandler() {
    this.onClick.emit();
  }
}
