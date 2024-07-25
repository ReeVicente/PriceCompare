import {Component, EventEmitter, Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() modalTitle: string = ''
  @Input() isOpen: boolean = false
  @Output() onClose = new EventEmitter<void>();

  closeModal() {
    this.onClose.emit();
  }


}
