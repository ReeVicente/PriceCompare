import {Component, Input, Output} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  imports: [
    NgIf,
    ReactiveFormsModule,
    NgForOf
  ],
  standalone: true
})
export class SelectComponent {
  @Input() selectOptions: { value: string, label: string }[] = []
  @Input() selectLabel?: string
}
