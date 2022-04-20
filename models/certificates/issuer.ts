/*
*** Copyright 2021 - GNU 3.0 Free license
*** @author: Javad Bayzavi ('https://github.com/javadbayzavi')
*** Package: Talenti - Models
*/

import { baseModel } from '../../app/core/models/baseModel';

export class issuer extends baseModel
{
    private title: string;
    //TODO: setter and getters for members must be declared

    public constructor(uid,ttl) {
        super(uid);
        this.title = ttl;
    }

    public setTitle(value:string) {
        this.title = value;
    }
    public getTitle():string
    {
        return this.title;
    }
}