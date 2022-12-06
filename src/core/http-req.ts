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

/**
 * HTTP Client for Authentication Netatmo API
 * @author Federico Rinaldi
 */
import { AuthResponse } from '../types/auth-type';
import { Error } from '../types/error-type';
import { axiosInstance } from './axios-intercept';
import { HTTP_REQUEST_CONTENT_TYPE } from '../general/variables';

export class HttpClientApi {

    /**
     * HttpClientApi Class constructor
     * 
     * @param  {string} grantType OAuth grant type
     * @param  {string} clientID Your app client_id
     * @param  {string} clientSecret Your app client_secret
     * @param  {string} username User address email
     * @param  {string} password User password
     * @param  {string} scope Scopes space separated
     * @param  {string} refresh_token the refresh token retrieved while requesting an access_token
     */
    constructor(
        private grantType:string,
        private clientID:string,
        private clientSecret:string,
        private username:string,
        private password:string,
        private scope:string,
        private refresh_token:string
        ){

    }
     /**
      * Authorize Netatmo API endpoint
      * @returns Promise<AuthResponse> an object that contains access_token, refresh_token and expires time
      */
     auth = async ():Promise<AuthResponse> => {
        try{
           const data = await axiosInstance.post<AuthResponse>('oauth2/token',
                {
                    grant_type:this.grantType,
                    client_id:this.clientID,
                    client_secret:this.clientSecret,
                    username:this.username,
                    password:this.password,
                    scope:this.scope
                },
                {
                    headers: { 'content-type': 'application/x-www-form-urlencoded' }
                }
            );
            return data.data;
        }catch(error:unknown){
            console.log('ERRORE : ',error);
            const err:Error = error as Error;
            return {...err} as AuthResponse;
        }
    }
    /**
     * Refresh token to authorize Netatmo API endpoint
     * @returns Promise<AuthReponse> an object that contains new access_token, new refresh_token and new expires time
     */
    refresh = async ():Promise<AuthResponse> => {
        try{
            const data = await axiosInstance.post<AuthResponse>('oauth2/token',
            {
                grant_type:this.grantType,
                client_id:this.clientID,
                client_secret:this.clientSecret,
                refresh_token:this.refresh_token

            },{
                headers: { HTTP_REQUEST_CONTENT_TYPE }
            });
            return data.data;
        }catch(error:unknown){
            const err:Error = error as Error;
            return {...err} as AuthResponse;
        }
    }

}
