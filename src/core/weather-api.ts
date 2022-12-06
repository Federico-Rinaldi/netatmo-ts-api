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

import { MeasureRequest, MeasureResponse } from "../types/measure";
import { PublicDataRequest, PublicDataResponse } from "../types/public-data";
import { StationDataRequest, StationDataResponse } from "../types/station-data";
import * as core from './http-req-api';

/**
 * WeatherAPI Service for Netatmo API
 * @author Federico Rinaldi
 */
 export class WeatherApi {

    private static weatherInstance:WeatherApi;

    private constructor(){ }

    /**
     * Singleton Instance for weather service
     * @return WeatherApi instance
     */
    static getInstance = () => {
        if(this.weatherInstance){
            return this.weatherInstance;
        }
        this.weatherInstance = new WeatherApi();
        return this.weatherInstance;
    }

    
    /**
     * Get Weather Station Information
     * Returns data from a user Weather Stations (measures and device specific data).
     * @param  {StationDataRequest} inputReq StationDataRequest request parameter object
     * @returns Promise StationDataResponse response object with weather station info
     */
    getStationData = (inputReq:StationDataRequest):Promise<StationDataResponse> => {
        const call = new core.HttpRequestApi();
        return call.getStationData(inputReq);
    }
    /**
     * Get Weather Public Data 
     * Retrieves publicly shared weather data from Outdoor Modules within a predefined area.
     * @param  {PublicDataRequest} inputReq PublicDataRequest request parameter object
     * @returns Promise PublicDataResponse response object with public weather data
     */
    getPublicData = (inputReq:PublicDataRequest):Promise<PublicDataResponse> => {
        const call = new core.HttpRequestApi();
        return call.getPublicData(inputReq);
    }
    /**
     * Get Measure
     * Retrieve data from a device or module
     * @param  {MeasureRequest} inputReq
     * @returns Promise
     */
    getMeasure = (inputReq:MeasureRequest):Promise<MeasureResponse> => {
        const call = new core.HttpRequestApi();
        return call.getMeasure(inputReq);
    }

 }