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

import * as core from './src';
import { AuthRequest, AuthResponse } from './src';
import { MeasureRequest, MeasureResponse } from './src/types/measure';
import { PublicDataRequest, PublicDataResponse } from './src/types/public-data';
import { StationDataRequest, StationDataResponse } from './src/types/station-data';

/**
 * Netatmo API Client 
 * @author Federico Rinaldi
 * 
 */
export class NetatmoLib {

    constructor(){}
    
    /**
     * Authenticate your request
     * @param  {AuthRequest} request AuthRequest type input parameter
     * @returns Promise AuthResponse type output
     */
    authenticate = (request:AuthRequest):Promise<AuthResponse> =>{
       const instance:core.Authenticate = core.Authenticate.getInstance();
       return instance.authenticate(request);
    }
    /**
     * Refresh your access token after expiring
     * @param  {AuthRequest} request AuthRequest type input parameter
     * @returns Promise AuthResponse type output
     */
    refresh = (request:AuthRequest):Promise<AuthResponse> => {
        const instance:core.Authenticate = core.Authenticate.getInstance();
        return instance.refresh(request);
    }
    /**
     * Returns data from a user Weather Stations (measures and device specific data).
     * @param  {StationDataRequest} request StationDataRequest request object
     * @returns Promise StationDataResponse object
     */
    getStationData = (request:StationDataRequest):Promise<StationDataResponse> => {
        const instance:core.WeatherApi =  core.WeatherApi.getInstance();
        return instance.getStationData(request);
    }
    /**
     * Retrieves publicly shared weather data from Outdoor Modules within a predefined area.
     * @param  {PublicDataRequest} request PublicDataRequest object
     * @returns Promise PublicDataResponse object
     */
    getPublicData = (request:PublicDataRequest):Promise<PublicDataResponse> => {
        const instance:core.WeatherApi = core.WeatherApi.getInstance();
        return instance.getPublicData(request);
    }
    /**
     * Retrieve data from a device or module
     * @param  {MeasureRequest} request MeasureRequest object
     * @returns Promise MeasureResponse object
     */
    getMeasure = (request:MeasureRequest):Promise<MeasureResponse> => {
        const instance:core.WeatherApi = core.WeatherApi.getInstance();
        return instance.getMeasure(request);
    }

}

// const example = new NetatmoLib();
// const dati_di_prova:AuthRequest = {} as AuthRequest;
// //dati_di_prova.grant_type = 'password';
// dati_di_prova.grant_type = 'refresh_token';
// dati_di_prova.client_id = '61830a491cba7514ac2c0281';
// dati_di_prova.client_secret = 'CIRlxvdRskvv4Q6HnbU0pO06SsmCk';
// dati_di_prova.username = 'federico.rinaldi83@gmail.com';
// dati_di_prova.password = 'Consulente_f_83';
// dati_di_prova.scope = Scopes.read_station;
// dati_di_prova.refresh_token = '617dd77ab6f10b3fa77abf1d|dcc464190365cea93825c3fa2f9c656e';
// // example.authenticate(dati_di_prova).then(resp=>{
// //     console.log('Response Auth : ',resp);
// // });

// example.refresh(dati_di_prova).then(resp=>{
//     console.log('Response Refresh : ',resp);
// });

 