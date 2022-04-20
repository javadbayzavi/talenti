import {service} from '../../app/core/serivces/service';
import {club} from '../../models/clubs/club';

export class clubService extends service
{
    constructor(endPoint: URL)
    {
        super(endPoint);
    }
    public Delete(T_Model: club): boolean {
        //TODO: implementation for club Delete 
         return true;
    }

    public Insert(T_Model: club): boolean {
        //TODO: implementation for club Insert 
        return true;
    }

    public Fetch(T_Model: club): club[] {
        //TODO: implementation for club Fetch 
        return;
    }

    public Update(T_Model: club): boolean {
        //TODO: implementation for club Update 
        return true;
    }
}