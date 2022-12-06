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
 * Types for Netatmo json request object
 * @see https://dev.netatmo.com/apidocumentation/oauth#client-credential
 */
export type AuthRequest = Error & {

    client_id:string;

    client_secret:string;

    grant_type:string;

    username:string;

    password:string;

    refresh_token?:string;

    scope:string

}

/**
 * Types for Netatmo json response object
 * @see https://dev.netatmo.com/apidocumentation/oauth#client-credential
 */
export type AuthResponse = Error & {

    scope:string;

    access_token:string;

    refresh_token:string;

    expires_in:string;

    expire_in:string;


}