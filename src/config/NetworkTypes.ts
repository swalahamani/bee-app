/* eslint-disable import/prefer-default-export */
/******************************************
 *  Author : Muhammad Swalah A A
 *  Created On : Tue Jul 13 2021
 *  File : NetworkTypes.ts
 *******************************************/
import {NullableString} from "@config/CommonTypes";

type APIResponseMessageType = NullableString;

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

export type {APIResponseMessageType};

export {apiResponseStatuses};
