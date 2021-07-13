/******************************************
 *  Author : Muhammad Swalah A A
 *  Created On : Tue Jul 13 2021
 *  File : NetworkUtil.ts
 *******************************************/
import {APIResponse} from "config/NetworkTypes";

/**
 * This function helps the api service functions to return
 * a standard result-object.
 *
 * @param error
 * @param httpStatusCode
 * @param message
 * @param data
 * @returns
 */
function buildResult(
	error: any,
	httpStatusCode: any,
	message: any,
	data: any,
): APIResponse {
	return {
		error: error || null,
		httpStatuCode: httpStatusCode || null,
		message: message || null,
		data: data || null,
	};
}

export default {buildResult};
