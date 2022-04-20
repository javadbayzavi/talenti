import {service} from '../app/core/serivces/service';

export class clubService extends service
{
    public Delete(T_Model: any): boolean {
         return true;
    }

    public Insert(T_Model: any): boolean {
        return true;
    }

    public Fetch(T_Model: any) {
        return "";
    }

    public Update(T_Model: any): boolean {
        return true;
    }
}