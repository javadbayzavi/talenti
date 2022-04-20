/*
*** Copyright 2021 - GNU 3.0 Free license
*** @author: Javad Bayzavi ('https://github.com/javadbayzavi')
*** Package: Talenti - Models
*/

import { baseModel } from '../../app/core/models/baseModel';

export class player extends baseModel
{
    private name: string;
    private family: string;
    private birthdate: Date;
    private leftfoot: boolean;
    private rightfoot: boolean;
    private currentheight: number;
    private currentwieght: number;
    public constructor(uid,nam,famil,bdate,left,right,weight,height) {
        super(uid);
        this.name = nam;
        this.family = famil;
        this.birthdate = bdate;
        this.leftfoot = left;
        this.rightfoot = right;
        this.currentheight = height;
        this.currentwieght = weight;
    }

    public setName(value:string) {
        this.name = value;
    }
    public getName():string
    {
        return this.name
    }
    public setFamily(value:string) {
        this.family = value;
    }
    public getFamily():string
    {
        return this.family;
    }
}