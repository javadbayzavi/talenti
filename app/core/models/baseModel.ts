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