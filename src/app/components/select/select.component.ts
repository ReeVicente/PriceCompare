import {Component, forwardRef, Input} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  imports: [
    NgIf,
    ReactiveFormsModule,
    NgForOf
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => SelectComponent),
    },
  ],
  standalone: true
})
export class SelectComponent implements ControlValueAccessor {
  @Input() selectOptions: { value: string, label: string }[] = []
  @Input() selectLabel?: string

  selectedValue = ''
  touched = false;

  disabled = false;

  onChange = (val: string) => {};

  onTouched = () => {};

  onSelect (e: Event) {
    this.markAsTouched();
    let target = e.target as HTMLSelectElement;
    if(this.disabled) return;
    this.onChange(target.value);
  }

  writeValue(selected: string): void {
      this.selectedValue = selected
  }
  registerOnChange(onChange: any): void {
    this.onChange = onChange;
  }
  registerOnTouched(onTouched: any): void {
    this.onTouched = onTouched;
  }
  setDisabledState?(isDisabled: boolean): void {
      this.disabled = isDisabled;
  }

  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }
}
