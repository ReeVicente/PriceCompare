import { Component } from '@angular/core';
import {InputComponent} from "../input/input.component";
import {ButtonComponent} from "../button/button.component";
import {SelectComponent} from "../select/select.component";
import {ModalComponent} from "../modal/modal.component";

@Component({
  selector: 'app-filter-card',
  templateUrl: './filter-card.component.html',
  styleUrls: ['./filter-card.component.scss'],
  standalone: true,
  imports: [InputComponent, ButtonComponent, SelectComponent, ModalComponent]
})
export class FilterCardComponent {

}
