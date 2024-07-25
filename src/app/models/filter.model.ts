import {Benefit} from "./tarif.model";

type SpeedValuesInMbitsType = 0 | 16 |50 | 100 | 250

export interface IFilter {
  downloadSpeed?: SpeedValuesInMbitsType;
  uploadSpeed?: SpeedValuesInMbitsType;
  benefitId?: string;
}

export class FilterModel implements IFilter{
  private _downloadSpeed?: SpeedValuesInMbitsType;
  private _uploadSpeed?: SpeedValuesInMbitsType;
  private _benefit?: Benefit;

  get downloadSpeed(): SpeedValuesInMbitsType | undefined {
    return this._downloadSpeed;
  }

  get uploadSpeed(): SpeedValuesInMbitsType | undefined {
    return this._uploadSpeed;
  }

  get benefit(): Benefit | undefined {
    return this._benefit;
  }

  set downloadSpeed(value: SpeedValuesInMbitsType | undefined) {
    this._downloadSpeed = value;
  }

  set uploadSpeed(value: SpeedValuesInMbitsType | undefined) {
    this._uploadSpeed = value;
  }

  set benefit(value: Benefit | undefined) {
    this._benefit = value;
  }

}
