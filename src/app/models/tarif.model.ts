export interface Benefit {
  name: string;
  id: number;
}

export interface Tarif {
  id: number;
  name: string;
  price: number;
  benefits: Benefit[];
  uploadSpeed: number;
  downloadSpeed: number;
}

export class TarifModel implements Tarif{
  private readonly _id: number;
  private readonly _name: string;
  private readonly _price: number;
  private readonly _benefits: Benefit[];
  private readonly _uploadSpeed: number;
  private readonly _downloadSpeed: number;

  constructor(
    data: {
      id: number,
      name: string,
      price: number,
      benefits: Benefit[],
      uploadSpeed: number,
      downloadSpeed: number
    }
  ) {
    this._id = data.id;
    this._name = data.name;
    this._price = data.price;
    this._benefits = [...data.benefits];
    this._uploadSpeed = data.uploadSpeed;
    this._downloadSpeed = data.downloadSpeed;
  }

  public get id(): number {
    return this._id;
  }

  public get name(): string {
    return this._name;
  }

  public get price(): number {
    return this._price;
  }

  public get benefits(): Benefit[] {
    return this._benefits;
  }

  public get benefitsNames(): string[] {
    return this._benefits.map(benefit => benefit.name);
  }

  public get uploadSpeed(): number {
    return this._uploadSpeed;
  }

  public get downloadSpeed(): number {
    return this._downloadSpeed;
  }
}
