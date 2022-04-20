/*
*** Copyright 2021 - GNU 3.0 Free license
*** @author: Javad Bayzavi ('https://github.com/javadbayzavi')
*** Package: Talenti - Core
*/

export class baseModel
{
    private Id:number;
    public constructor(uid:number)
    {
        this.Id = uid;
    }

    public setId(value:number)
    {
        this.Id = value;
    }
    public getId():number
    {
        return this.Id;
    }
}