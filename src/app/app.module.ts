import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {CardComponent} from "./components/card/card.component";
import { SelectComponent } from './components/select/select.component';
import { FilterCardComponent } from './components/filter-card/filter-card.component';
import { InputComponent } from './components/input/input.component';
import {ModalComponent} from "./components/modal/modal.component";
import {ButtonComponent} from "./components/button/button.component";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CardComponent,
    SelectComponent,
    FilterCardComponent,
    InputComponent,
    ModalComponent,
    ButtonComponent,
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
