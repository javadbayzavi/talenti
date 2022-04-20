/*
*** Copyright 2021 - GNU 3.0 Free license
*** @author: Javad Bayzavi ('https://github.com/javadbayzavi')
*** Package: Talenti - Services
*/

import {service} from '../../app/core/serivces/service';
import {player} from '../../models/players/player';

export class playerService extends service
{
    constructor(endPoint: URL)
    {
        super(endPoint);
    }

    public Delete(T_Model: player): boolean {
        //TODO: implementation for player Delete 
        return true;
    }

    public Insert(T_Model: player): boolean {
        //TODO: implementation for player Insert 
        return true;
    }

    public Fetch(T_Model: player): player[] {
        //TODO: implementation for player Fetch 
        return;
    }

    public Update(T_Model: player): boolean {
        //TODO: implementation for player Update 
        return true;
    }
}