import {Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ModalComponent} from "../modal/modal.component";
import {ButtonComponent} from "../button/button.component";
import {FilterCardComponent} from "../filter-card/filter-card.component";
import {TarifService} from "../../services/tarif.service";

@Component({
  selector: 'app-filter-modal',
  standalone: true,
  imports: [CommonModule, ModalComponent, ButtonComponent, FilterCardComponent],
  templateUrl: './filter-modal.component.html',
  styleUrls: ['./filter-modal.component.scss'],
})
export class FilterModalComponent {
  protected isOpenModal: boolean = false
  tarifService = inject(TarifService);

  openModal() {
    this.isOpenModal = true;
  }

  closeModal() {
    this.isOpenModal = false;
  }

}
