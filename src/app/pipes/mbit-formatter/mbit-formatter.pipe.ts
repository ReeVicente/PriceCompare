import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mbitFormatter',
  standalone: true
})
export class MbitFormatterPipe implements PipeTransform {

  transform(value: number): string {
    if (value === null || value === undefined) {
      return '';
    }

    // Convert number to string and replace dot with comma
    let formattedValue = value.toString().replace('.', ',');

    // Append Mbit/s
    return `${formattedValue} Mbit/s`;
  }

}
