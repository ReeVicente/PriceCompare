import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CardComponent]
    });
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create and set properties', () => {
    component.title = 'Test title';
    component.position = 1;
    component.uploadSpeed = 10;
    component.downloadSpeed = 20;
    component.price = 20;
    fixture.detectChanges();
    const compiled = fixture.nativeElement;

    expect(component).toBeTruthy();
    expect(compiled.querySelector('.card-title').textContent).toContain('Test title');
    expect(compiled.querySelector('.card-index').textContent).toContain('1');
    expect(compiled.querySelector('.card-speed-upload').textContent).toContain('10 Mbit/s');
    expect(compiled.querySelector('.card-speed-download').textContent).toContain('20 Mbit/s');
    expect(compiled.querySelector('.card-price').textContent).toContain('€20,00');
  });


});
