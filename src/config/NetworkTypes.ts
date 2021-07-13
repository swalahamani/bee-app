/* eslint-disable import/prefer-default-export */
/******************************************
 *  Author : Muhammad Swalah A A
 *  Created On : Tue Jul 13 2021
 *  File : NetworkTypes.ts
 *******************************************/
import {NullableString} from "@config/CommonTypes";

type APIResponseMessageType = NullableString;
type APIResponse = {
	error: any;
	httpStatuCode: httpStatusCodes | null;
};

/**
 * The standard api response which will be used throuout the application
 * depending upon the response of api service call (via axios).
 */
enum apiResponseStatuses {
	/**
	 * this will be the initial status of any apiResponseStatuses type
	 * variable or property.
	 */
	IDLE = "IDLE",

	/**
	 * this will be the value of any apiResponseStatuses type variable
	 * or property when an API request gets succeed.
	 */
	SUCCESS = "SUCCESS",

	/**
	 * this will be the value of any apiResponseStatuses type variable
	 * or property when an API request gets failed.
	 */
	ERROR = "ERROR",
}

/**
 * All the http status codes returned by the api server needs to be defiend here.
 * This is used for determining the type/status of the api response after the call.
 *
 * Refer: https://www.restapitutorial.com/httpstatuscodes.html
 */
enum httpStatusCodes {
	// 2xx SUCCESS
	SUCCESS_OK = 200,
	SUCCESS_CREATED = 201,
	SUCCESS_NO_CONTENT = 204,

	// 4xx CLIENT_ERROR
	CLIENT_ERROR_BAD_REQUEST = 400,
	CLIENT_ERROR_UNAUTHORIZED = 401,
	CLIENT_ERROR_FORBIDDEN = 403,
	CLIENT_ERROR_NOT_FOUND = 404,

	// 5xx SERVER_ERROR
	SERVER_ERROR_INTERNAL_SERVER_ERROR = 500,
	SERVER_ERROR_SERVICE_UNAVAILABLE = 503,
}

export type {APIResponseMessageType, APIResponse};

export {apiResponseStatuses, httpStatusCodes};
