import {Component, Input} from '@angular/core';
import {ButtonComponent} from "../button/button.component";
import {NgForOf, NgIf, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: true,
  imports: [ButtonComponent, NgOptimizedImage, NgIf, NgForOf]
})
export class CardComponent {

  private _price = 0;
  private _uploadSpeed = 0;
  private _downloadSpeed = 0;

  @Input() benefits?: string[];

  @Input({required: true}) title!: string;

  @Input({required: true}) position!: number;

  @Input({required: true}) set price(value: number) {
    this._price = value;
  }

  @Input({required: true}) set uploadSpeed(value: number) {
    this._uploadSpeed = value;
  }

  @Input({required: true}) set downloadSpeed(value: number) {
    this._downloadSpeed = value;
  }

  get uploadSpeed(): string {
    return `${this._uploadSpeed.toString().replace(".", ",")} Mbit/s`;
  }

  get downloadSpeed(): string {
    return `${this._downloadSpeed.toString().replace(".", ",")} Mbit/s`;
  }

  get price(): string {
    return `${this._price.toFixed(2).replace(".", ",")} €`;
  }

}
