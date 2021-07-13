/******************************************
 *  Author : Muhammad Swalah A A
 *  Created On : Sun Jul 11 2021
 *  File : AxiosInterceptors.ts
 *******************************************/
import {AxiosRequestConfig} from "axios";

import store from "@store/index";

class AxiosInterceptors {
	/**
	 * Request Interceptor for adding Authorization: Bearer token by taking token from authSate in redux store.
	 * @param {AxiosRequestConfig} config
	 */
	requestAuthorizationInterceptor = (config: AxiosRequestConfig) => {
		// retrieving authState.token from redux store.
		const authState = store.getState().authReducer;
		const accessToken = authState.token;

		// setting authorization header with Bearer token
		return {
			...config,
			headers: {
				...config.headers,
				Authorization: `Bearer ${accessToken}`,
			},
		};
	};

	/**
	 * All request-interceptors should be registered here.
	 *
	 * eg: {
	 *     requestAuthorizationInterceptor: this.requestAuthorizationInterceptor
	 * }
	 */
	requestInterceptors = {
		requestAuthorizationInterceptor: this.requestAuthorizationInterceptor,
	};

	/**
	 * All response-interceptors should be registered here.
	 *
	 * eg: {
	 *     requestAuthorizationInterceptor: this.requestAuthorizationInterceptor
	 * }
	 */
	responseInterceptors = {};
}

export default AxiosInterceptors;
