/******************************************
 *  Author : Muhammad Swalah A A
 *  Created On : Sun Jul 11 2021
 *  File : AxiosInterceptors.ts
 *******************************************/
class AxiosInterceptors {
	/**
	 * All request-interceptors should be registered here.
	 *
	 * eg: {
	 *     requestAuthorizationInterceptor: this.requestAuthorizationInterceptor
	 * }
	 */
	requestInterceptors = {};

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
