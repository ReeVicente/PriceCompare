import { Injectable } from '@angular/core';
import {TarifModel} from "../models/tarif.model";
import {BehaviorSubject, first, map, of} from "rxjs";
import {IFilter} from "../models/filter.model";

@Injectable({
  providedIn: 'root'
})
export class TarifService {

  private _currentFiltersSubject$ = new BehaviorSubject<IFilter>({});
  private _currentPriceOrderSubject$ = new BehaviorSubject<'' | 'asc' | 'desc'>('');

  private tarifs$ = of<TarifModel[]>([
    new TarifModel({
      id: 1,
      name: 'Tarif 1',
      price: 10,
      benefits: [{name: 'Benefit 1', id: 1}, {name: 'Benefit 2', id: 2}],
      uploadSpeed: 10,
      downloadSpeed: 10
    }),
    new TarifModel({
      id: 2,
      name: 'Tarif 2',
      price: 20,
      benefits: [{name: 'Benefit 1', id: 1}, {name: 'Benefit 2', id: 2}],
      uploadSpeed: 20,
      downloadSpeed: 20
    }),
    new TarifModel({
      id: 3,
      name: 'Tarif 3',
      price: 210,
      benefits: [{name: 'Benefit 1', id: 1}, {name: 'Benefit 2', id: 2}],
      uploadSpeed: 100,
      downloadSpeed: 150
    }),
    new TarifModel({
      id: 4,
      name: 'Tarif 4',
      price: 30,
      benefits: [{name: 'Benefit 1', id: 1}, {name: 'Benefit 2', id: 2}, {name: 'Benefit 3', id: 3}],
      uploadSpeed: 250,
      downloadSpeed: 250
    }),
  ]);

  private _tarifListSubject$ = new BehaviorSubject<TarifModel[]>([]);

  public tarifList$ = this._tarifListSubject$.asObservable();

  public currentFilters$ = this._currentFiltersSubject$.asObservable();
  public currentPriceOrder$ = this._currentPriceOrderSubject$.asObservable();

  constructor() {
    this.getTarifs();
  }

  public applyFilter(filters: IFilter) {
    this.getTarifs({
      filters,
      priceOrder: this._currentPriceOrderSubject$.getValue() ?? undefined
    });
  }

  public applyPriceOrder(val: string) {
    // let target = e.target as HTMLSelectElement;
    let order = val as '' | 'asc' | 'desc';
    this.getTarifs({
      filters: this._currentFiltersSubject$.getValue(),
      priceOrder: order ?? undefined
    });
  }

  public clearFilters() {
    this.getTarifs({
      filters: {},
      priceOrder: this._currentPriceOrderSubject$.getValue() ?? undefined
    });
  }

  private getTarifs(params?: {
    filters: IFilter,
    priceOrder: '' | 'asc' | 'desc'
  }) {
    let tarifsParsed$ = this.tarifs$.pipe(first())
    this._tarifListSubject$.next([])
    if (params?.filters) {

      tarifsParsed$ = tarifsParsed$.pipe(
        map(tarifs => tarifs.filter(tarif => {
          let matches = true;

          if (params?.filters.benefitId) {
            matches = matches && tarif.benefits.some(benefit => benefit.id === Number(params?.filters.benefitId));
          }

          if (params?.filters.uploadSpeed) {
            matches = matches && tarif.uploadSpeed >= params?.filters.uploadSpeed;
          }
          if (params?.filters?.downloadSpeed) {
            matches = matches && tarif.downloadSpeed >= params?.filters.downloadSpeed;
          }
          return matches;
        }))
      )

      this._currentFiltersSubject$.next(params.filters);
    }

    if (params?.priceOrder) {
      tarifsParsed$ = tarifsParsed$.pipe(
        map(tarifs => tarifs.sort((a, b) => {
          if (params.priceOrder === 'asc') {
            return a.price - b.price;
          } else {
            return b.price - a.price;
          }
        }))
      )

      this._currentPriceOrderSubject$.next(params.priceOrder)
    }

    tarifsParsed$.pipe(first()).subscribe(tarifs => {
      this._tarifListSubject$.next(tarifs);
    });
  }
}
