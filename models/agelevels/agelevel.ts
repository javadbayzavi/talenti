/*
*** Copyright 2021 - GNU 3.0 Free license
*** @author: Javad Bayzavi ('https://github.com/javadbayzavi')
*** Package: Talenti - Models
*/

import { baseModel } from '../../app/core/models/baseModel';

export class agelevel extends baseModel
{
    private level: string;
    public constructor(uid,lvl) {
        super(uid);
        this.level = lvl;
    }

    public setLevel(value:string) {
        this.level = value;
    }
    public getLevel():string
    {
        return this.level
    }
}