/*
*** Copyright 2021 - GNU 3.0 Free license
*** @author: Javad Bayzavi ('https://github.com/javadbayzavi')
*** Package: Talenti - Models
*/

import { baseModel } from '../../app/core/models/baseModel';

export class club extends baseModel {
  private id: number;
  private title: string;
  private logo: string;

  constructor(id, title, logo) {
    super(id);
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
