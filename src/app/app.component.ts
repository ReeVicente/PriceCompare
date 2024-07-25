import {Component, inject} from '@angular/core';
import {TarifService} from "./services/tarif.service";
import {IFilter} from "./models/filter.model";
import {delay, filter, first} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'verivox';
  tarifService = inject(TarifService);
  tarifs$ = this.tarifService.tarifList$;

  applyPriceOrder(e: Event) {
    let target = e.target as HTMLSelectElement;
    this.tarifService.applyPriceOrder(target.value);
  }
}
