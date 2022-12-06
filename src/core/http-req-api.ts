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

import { StationDataRequest, StationDataResponse } from "../types/station-data";
import { axiosInstance } from "./axios-intercept";
import { HTTP_REQUEST_CONTENT_TYPE } from '../general/variables';
import { Error } from "../types/error-type";
import { PublicDataRequest, PublicDataResponse } from "../types/public-data";
import { MeasureRequest, MeasureResponse } from "../types/measure";

/**
 * HTTP Client for Wheather Netatmo API
 * @author Federico Rinaldi
 */
 export class HttpRequestApi {

    constructor(){

    }


    getStationData = async (inputReq:StationDataRequest):Promise<StationDataResponse> => {
        try{
            const data = await axiosInstance.post<StationDataResponse>('api/getstationsdata',
                {
                    ...inputReq
                },
                {
                    headers: { HTTP_REQUEST_CONTENT_TYPE }
                }
            );
            return data.data;
        }catch(error:unknown){
            const err:Error = error as Error;
            return {...err} as StationDataResponse;
        }
    }


    getPublicData = async (inputReq:PublicDataRequest):Promise<PublicDataResponse> => {
        try{
            const data = await axiosInstance.post<PublicDataResponse>('api/getpublicdata',
                {
                    ...inputReq
                },
                {
                    headers: { HTTP_REQUEST_CONTENT_TYPE }
                }
            );
            return data.data;
        }catch(error:unknown){
            const err:Error = error as Error;
            return {...err} as PublicDataResponse;
        }
    }


    getMeasure = async (inputReq:MeasureRequest):Promise<MeasureResponse> => {
        try{
            const data = await axiosInstance.post<MeasureResponse>('api/getmeasure',
                {
                    ...inputReq
                },
                {
                    headers: { HTTP_REQUEST_CONTENT_TYPE }
                }
            );
            return data.data;
        }catch(error:unknown){
            const err:Error = error as Error;
            return {...err} as MeasureResponse;
        }
    }

 }