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
 * Types for Netatmo json Measure request object
 * @see https://dev.netatmo.com/apidocumentation/weather#getmeasure
 * @author Federico Rinaldi
 */
 export type MeasureRequest = Error & {

    device_id:string;

    module_id:string;

    scale:string;

    type:string[];

    date_begin:Date;

    date_end:Date;

    limit:number;

    optimize:boolean;

    real_time:boolean;

    access_token:string;


 }

 /**
 * Types for Netatmo json Measure response object
 * @see https://dev.netatmo.com/apidocumentation/weather#getmeasure
 * @author Federico Rinaldi
 */
 export type MeasureResponse = Error & {

    body: {
        items:{
            beg_time:Date;
            step_time:number;
            value:number[];
        }
    };
    status:string;
    time_exec:string;
    time_server:string;

 }