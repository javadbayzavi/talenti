export class player
{
    private name: string;
    private family: string;
    private birthdate: Date;
    private leftfoot: boolean;
    private rightfoot: boolean;
    private currentheight: number;
    private currentwieght: number;
    public constructor(nam,famil,bdate,left,right,weight,height) {
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