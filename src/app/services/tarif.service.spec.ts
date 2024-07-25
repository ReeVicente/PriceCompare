import { TestBed } from '@angular/core/testing';

import { TarifService } from './tarif.service';

describe('TarifService', () => {
  let service: TarifService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TarifService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("should return a list of tarifs", () => {
    service.tarifList$.subscribe(tarifs => {
      expect(tarifs.length).toBeGreaterThan(0);
    });
  })

  it("should order tarifs price in asc order", () => {
    service.applyPriceOrder('asc');

    service.tarifList$.subscribe(tarifs => {
      const prices = tarifs.map(tarif => tarif.price);
      const sortedPrices = [...prices].sort((a, b) => a - b);
      const check = prices.every((price, index) => price === sortedPrices[index]);
      expect(check).toBe(true)
    }).unsubscribe();
  });

  it("should order tarifs price in desc order", () => {
    service.applyPriceOrder('desc');
    service.tarifList$.subscribe(tarifs => {
      const prices = tarifs.map(tarif => tarif.price);
      const sortedPrices = [...prices].sort((a, b) => b-a);
      const check = prices.every((price, index) => price === sortedPrices[index]);
      expect(check).toBe(true)
    }).unsubscribe();
  });

  it ("should filter tarifs by downloadSpeed", () => {
    service.applyFilter({
      downloadSpeed: 16,
      uploadSpeed: undefined,
    })

    service.tarifList$.subscribe(tarifs => {
      const check = tarifs.every(tarif => tarif.downloadSpeed >= 16);
      expect(check).toBe(true);
    }).unsubscribe();

    service.applyFilter({
      downloadSpeed: 50,
      uploadSpeed: undefined,
    })

    service.tarifList$.subscribe(tarifs => {
      const check = tarifs.every(tarif => tarif.downloadSpeed >= 50);
      expect(check).toBe(true);
    }).unsubscribe();
  });

  it("should filter tarifs by uploadSpeed", () => {
    service.applyFilter({
      uploadSpeed: 16,
    })

    service.tarifList$.subscribe(tarifs => {
      const check = tarifs.every(tarif => tarif.uploadSpeed >= 16);
      expect(check).toBe(true);
    }).unsubscribe();

    service.applyFilter({
      uploadSpeed: 50,
    })

    service.tarifList$.subscribe(tarifs => {
      const check = tarifs.every(tarif => tarif.uploadSpeed >= 50);
      expect(check).toBe(true);
    }).unsubscribe();
  })

  it("should filter tarifs by benefit", () => {
    service.applyFilter({
      benefitId: "1"
    })

    service.tarifList$.subscribe(tarifs => {
      const check = tarifs.every(tarif => tarif.benefits.some(benefit => benefit.id === 1));
      expect(check).toBe(true);
    }).unsubscribe();

    service.applyFilter({
      benefitId: "2"
    })

    service.tarifList$.subscribe(tarifs => {
      const check = tarifs.every(tarif => tarif.benefits.some(benefit => benefit.id === 2));
      expect(check).toBe(true);
    }).unsubscribe();
  });

});
