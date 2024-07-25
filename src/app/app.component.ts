import {Component, inject} from '@angular/core';
import {TarifService} from "./services/tarif.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tarifService = inject(TarifService);
  tarifs$ = this.tarifService.tarifList$;

  applyPriceOrder(e: Event) {
    let target = e.target as HTMLSelectElement;
    this.tarifService.applyPriceOrder(target.value);
  }
}
