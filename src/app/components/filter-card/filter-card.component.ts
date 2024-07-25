import {Component, EventEmitter, Output, inject, OnInit} from '@angular/core';
import {InputComponent} from "../input/input.component";
import {ButtonComponent} from "../button/button.component";
import {SelectComponent} from "../select/select.component";
import {ModalComponent} from "../modal/modal.component";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {IFilter} from "../../models/filter.model";
import {TarifService} from "../../services/tarif.service";

@Component({
  selector: 'app-filter-card',
  templateUrl: './filter-card.component.html',
  styleUrls: ['./filter-card.component.scss'],
  standalone: true,
  imports: [InputComponent, ButtonComponent, SelectComponent, ModalComponent, ReactiveFormsModule]
})
export class FilterCardComponent implements OnInit{

  @Output() onFilter = new EventEmitter<IFilter>();

  tarifService = inject(TarifService);

  filterForm = new FormGroup({
    uploadSpeed: new FormControl<string>(''),
    downloadSpeed: new FormControl(''),
    benefitId: new FormControl(''),
  });

  ngOnInit(): void {
    this.tarifService.currentFilters$.subscribe(filter => {
      if (Number(this.filterForm.get('uploadSpeed')?.value) !== filter.uploadSpeed) {
        this.filterForm.patchValue({
          uploadSpeed: filter.uploadSpeed?.toString() ?? ''
        })
      }

      if (Number(this.filterForm.get('downloadSpeed')?.value) !== filter.downloadSpeed) {
        this.filterForm.patchValue({
          downloadSpeed: filter.downloadSpeed?.toString() ?? ''
        })
      }

      if (this.filterForm.get('benefitId')?.value !== filter.benefitId) {

        this.filterForm.patchValue({
          benefitId: filter.benefitId ?? ''
        })
      }
    })
  }

  onSubmit() {
    this.onFilter.emit(this.filterForm.value as IFilter)
  }
}
