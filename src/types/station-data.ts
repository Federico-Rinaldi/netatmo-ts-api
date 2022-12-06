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
 * Types for Netatmo json Station Data request object
 * @see https://dev.netatmo.com/apidocumentation/weather#getstationsdata
 */
 export type StationDataRequest = Error & {

    device_id:string;

    get_favorites:boolean;

    access_token:string;

 }

 /**
 * Types for Netatmo json Station Data response object
 * @see https://dev.netatmo.com/apidocumentation/weather#getstationsdata
 */
export type StationDataResponse = Error & {


    body:{

        devices:[
            {
                _id:string;
                date_setup:Date;
                last_setup:Date;
                type:string;
                last_status_store:Date;
                module_name:string;
                firmware:number;
                last_upgrade:Date;
                wifi_status:number;
                reachable:boolean;
                co2_calibrating:boolean;
                station_name:string;
                data_type:string[];
                place:{
                    timezone:string;
                    country:string;
                    altitude:number;
                    location:string[];
                };
                read_only:boolean;
                home_id:string;
                home_name:string;
                dashboard_data:{
                    time_utc:Date;
                    Temperature:number;
                    CO2:number;
                    Humidity:number;
                    Noise:number;
                    Pressure:number;
                    AbsolutePressure:number;
                    min_temp:number;
                    max_temp:number;
                    date_min_temp:Date;
                    date_max_temp:Date;
                    temp_trend:string;
                    pressure_trend:string;
                };
                modules:[
                    {
                        oneOf:[
                            {
                                _id:string;
                                type:string;
                                module_name:string;
                                data_type:string[];
                                last_setup:Date;
                                reachable:boolean;
                                dashboard_data:{
                                    time_utc:Date;
                                    Temperature:number;
                                    CO2:number;
                                    Humidity:number;
                                    Pressure:number;
                                    AbsolutePressure:number;
                                    min_temp:number;
                                    max_temp:number;
                                    date_min_temp:Date;
                                    date_max_temp:Date;
                                    temp_trend:string;                                    
                                };
                                firmware:number;
                                last_message:Date;
                                last_seen:Date;
                                rf_status:number;
                                battery_vp:number;
                                battery_percent:number;
                            }
                        ];
                    }
                ];
            }
        ];
        user: {
            mail:string;
            administrative:{
                reg_locale:string;
                lang:string;
                country:string;
                unit:number;
                windunit:number;
                pressureunit:number;
                feel_like_algo:number;
            }
        }
    };
    status:string;
    time_exec:string;
    time_server:string;

}
