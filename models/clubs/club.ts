import { baseModel } from './app/core/models/baseModel';

export class club extends baseModel {
  private id: number;
  private title: string;
  private logo: string;

  constructor(id, title, logo) {
    this.id = id;
    this.title = title;
    this.logo = logo;
  }

  public getTitle(): string
  {
    return this.title;
  }
  public setTitle(value :string):void
  {
    this.title = value;
  }
  public getLogo(): string
  {
    return this.logo;
  }
  public setLogo(value :string):void
  {
    this.logo = value;
  }
}