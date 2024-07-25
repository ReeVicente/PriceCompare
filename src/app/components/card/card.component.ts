import {Component, Input} from '@angular/core';
import {ButtonComponent} from "../button/button.component";
import {CurrencyPipe, NgForOf, NgIf, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: true,
  imports: [ButtonComponent, NgOptimizedImage, NgIf, NgForOf, CurrencyPipe]
})
export class CardComponent {
  private _uploadSpeed = 0;
  private _downloadSpeed = 0;

  @Input() benefits?: string[];

  @Input({required: true}) title!: string;

  @Input({required: true}) position!: number;

  @Input({required: true})
  public price!: number;

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
}
