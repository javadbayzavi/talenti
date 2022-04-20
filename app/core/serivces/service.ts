/*
*** Copyright 2021 - GNU 3.0 Free license
*** @author: Javad Bayzavi ('https://github.com/javadbayzavi')
*** Package: Talenti - Core
*/

import { URL } from "url";

export abstract class service
{
    private serviceEndPoint: URL;
    public abstract Insert(T_Model: any): boolean;
    public abstract Update(T_Model: any): boolean;
    public abstract Delete(T_Model: any): boolean;
    public abstract Fetch(T_Model: any): any;

    constructor(endPoint: URL)
    {
        this.setEndPoint(endPoint);
    }

    public getEndPoint():URL
    {
        return this.serviceEndPoint;
    }
    public setEndPoint(value: URL)
    {
        this.serviceEndPoint = value;
    }
}