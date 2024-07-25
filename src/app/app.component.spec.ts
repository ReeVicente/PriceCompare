import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {InputComponent} from "./components/input/input.component";
import {BrowserModule} from "@angular/platform-browser";
import {CardComponent} from "./components/card/card.component";
import {SelectComponent} from "./components/select/select.component";
import {FilterCardComponent} from "./components/filter-card/filter-card.component";
import {ModalComponent} from "./components/modal/modal.component";
import {ButtonComponent} from "./components/button/button.component";
import {FilterModalComponent} from "./components/filter-modal/filter-modal.component";

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [AppComponent],
    imports: [
      BrowserModule,
      CardComponent,
      SelectComponent,
      FilterCardComponent,
      InputComponent,
      ModalComponent,
      ButtonComponent,
      FilterModalComponent,
    ],
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
