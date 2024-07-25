import {Component, Input} from '@angular/core';
import {ButtonComponent} from "../button/button.component";
import {CurrencyPipe, NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {
  CurrencySeparatorFormatterPipe
} from "../../pipes/currency-separator-formatter/currency-separator-formatter.pipe";
import {MbitFormatterPipe} from "../../pipes/mbit-formatter/mbit-formatter.pipe";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: true,
  imports: [ButtonComponent, NgOptimizedImage, NgIf, NgForOf, CurrencyPipe, CurrencySeparatorFormatterPipe, MbitFormatterPipe]
})
export class CardComponent {
  @Input() benefits?: string[];

  @Input({required: true}) title!: string;

  @Input({required: true}) position!: number;

  @Input({required: true})
  price!: number;

  @Input({required: true})
  uploadSpeed!: number;

  @Input({required: true})
  downloadSpeed!: number;
}
