/*
*** Copyright 2021 - GNU 3.0 Free license
*** @author: Javad Bayzavi ('https://github.com/javadbayzavi')
*** Package: Talenti - Services
*/

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