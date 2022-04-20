/*
*** Copyright 2021 - GNU 3.0 Free license
*** @author: Javad Bayzavi ('https://github.com/javadbayzavi')
*** Package: Talenti - Models
*/

import { baseModel } from '../../app/core/models/baseModel';
import {issuer} from '../../models/certificates/issuer';

export class certificate extends baseModel
{
    private title: string;
    private isser: issuer;
    //TODO: setter and getters for members must be declared

    public constructor(uid,ttl,iss) {
        super(uid);
        this.title = ttl;
        this.isser = iss;
    }

    public setTitle(value:string) {
        this.title = value;
    }
    public getTitle():string
    {
        return this.title;
    }
}