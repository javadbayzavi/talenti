/*
*** Copyright 2021 - GNU 3.0 Free license
*** @author: Javad Bayzavi ('https://github.com/javadbayzavi')
*** Package: Talenti - Models
*/

import { baseModel } from '../../app/core/models/baseModel';

export class metric extends baseModel
{
    private name: string;
    private tips: string;
    private direction: number;
    private upperBond: string;
    private lowerBond: string;
    //TODO: setter and getters for members must be declared

    public constructor(uid,nam,tip,direct,upper,lower) {
        super(uid);
        this.name = nam;
        this.tips = tip;
        this.direction = direct;
        this.lowerBond = lower;
        this.upperBond = upper;
    }

    public setName(value:string) {
        this.name = value;
    }
    public getName():string
    {
        return this.name;
    }
}