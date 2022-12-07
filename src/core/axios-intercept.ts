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

import axios, { AxiosError } from 'axios';
import { NETATMO_API_URL } from '../general/variables';
import { Error } from '../types/error-type';

/**
 * Axios Instance with static baseUrl configure
 * @author Federico Rinaldi
 */
export const axiosInstance = axios.create({
    baseURL : NETATMO_API_URL,
});

/**
 * Handler for all http request
 * @param request 
 * @returns Request Object
 * @author Federico Rinaldi
 */
const requestHandler = (request:any) => {
    return request
}

/**
 * Handler for all error occurred in http request
 * @param error AxiosError Object
 * @returns AxiosError Object
 * @author Federico Rinaldi
 */
const errorHandler = (error:AxiosError) => {
    const errorResp:Error = {} as Error;
    errorResp.code =  error.code !== undefined ? error.code : '';
    errorResp.message = error.message;
    return Promise.reject({ ...errorResp })
  }

  /**
   * Handler for success http request
   * @param response 
   * @returns Response Object
   * @author Federico Rinaldi
   */
const successHandler = (response:any) => {
    return response
  }

  /**
   * Axios interceptor for http request
   * @author Federico Rinaldi
   */
axiosInstance.interceptors.request.use(
    request => requestHandler(request)
);

/**
 * Axios interceptor for http response
 * @author Federico Rinaldi
 */
axiosInstance.interceptors.response.use(
    response => successHandler(response),
    error => errorHandler(error)
  )



