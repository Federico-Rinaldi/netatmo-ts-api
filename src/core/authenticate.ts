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


import * as core from './http-req';

import { AuthRequest, AuthResponse } from "../types/auth-type";
/**
 * Authenticate Service for Netatmo API
 * @author Federico Rinaldi
 */
 export class Authenticate {

    private static authInstance:Authenticate;

    private constructor(){}
    
    /**
     * Singleton Instance for authentication service
     * @return Authenticate instance
     */
    static getInstance = () => {
        if(this.authInstance){
            return this.authInstance;
        }
        this.authInstance = new Authenticate();
        return this.authInstance;
    }
    /**
     * Authenticate function
     * @param  {AuthRequest} request an object that describe input api parameters
     * @returns Promise AuthResponse an object that describe the response of api
     */
    authenticate = (request:AuthRequest):Promise<AuthResponse> => {
        const call = new core.HttpClientApi(
           request.grant_type,
           request.client_id,
           request.client_secret,
           request.username,
           request.password,
           request.scope,
           request.refresh_token !== undefined ? request.refresh_token : ''
           );
        return call.auth();
    }

    /**
     * Refresh expired token
     * @param  {AuthRequest} request an object that describe input api parameters
     * @returns Promise AuthResponse an object that describe the response of api
     */
    refresh = (request:AuthRequest):Promise<AuthResponse> => {
        const call = new core.HttpClientApi(
           request.grant_type,
           request.client_id,
           request.client_secret,
           request.username,
           request.password,
           request.scope,
           request.refresh_token !== undefined ? request.refresh_token : ''
        );
        return call.refresh();
    }
 }