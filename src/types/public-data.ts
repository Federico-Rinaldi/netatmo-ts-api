/* Copyright 2022 NetatmoLib contributors
 *
 * This file is a part of NetatmoLib.
 *
 * This program is free software; you can redistribute it and/or modify it under the terms of the
 * GNU General Public License as published by the Free Software Foundation; either version 3 of the
 * License, or (at your option) any later version.
 *
 * NetatmoLib is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even
 * the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General
 * Public License for more details.
 *
 * You should have received a copy of the GNU General Public License along with NetatmoLib; if not,
 * see <http://www.gnu.org/licenses>. */

import { Error } from "./error-type";

 /**
 * Types for Netatmo json Public Data request object
 * @see https://dev.netatmo.com/apidocumentation/weather#getpublicdata
 */
export type PublicDataRequest =  Error & {

    lat_ne:number;
    lon_ne:number;
    lat_sw:number;
    lon_sw:number;
    required_data:[];
    filter:boolean;
    access_token:string;
}

 /**
 * Types for Netatmo json Public Data response object
 * @see https://dev.netatmo.com/apidocumentation/weather#getpublicdata
 */
export type PublicDataResponse = Error & {

    body:[
        {
            _id:string;
            place:{
                timezone:string;
                country:string;
                altitude:number;
                location:string[];
            },
            mark:string;
            measures:{
                mac_address_NAModule1:{
                    res:{
                        time_stamp:string[];
                    },
                    type:string[];
                },
                mac_address_NAMain:{
                    res:{
                        time_stamp:[];
                    },
                    type:string;
                },
                mac_address_NAModule3:{
                    rain_60min:number;
                    rain_24h:number;
                    rain_live:number;
                    rain_timeutc:number;
                },
                mac_address_NAModule2:{
                    wind_strengh:number;
                    wind_angle:number;
                    gust_strenght:number;
                    gust_angle:number;
                    wind_timeutc:number;
                }
            },
            modules:string[];
            module_types:[
                {
                    mac_adress:string;
                }
            ];
        }
    ];
    status:string;
    time_exec:string;
    time_server:string;

}