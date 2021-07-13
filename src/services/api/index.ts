/* eslint-disable import/prefer-default-export */
/******************************************
 *  Author : Muhammad Swalah A A
 *  Created On : Sun Jul 11 2021
 *  File : index.ts
 *******************************************/
import axios from "axios";

import {APIServiceConstants} from "@config/constants";

import AxiosInterceptors from "./AxiosInterceptors";

import PostService from "./PostService";

/**
 * Creating axios instance for handling api service requests with
 * apiServerConfig.
 *
 * For upating any configuration or reviwing the current configuration
 * go to APIServiceConstants.apiServerConfig.
 */
const appAPIServer = axios.create(APIServiceConstants.apiServerConfig);

/**
 * Instanciating axios interceptors.
 * All the request and response interceptors will be linked with
 * axios-instance appAPIServer later below.
 */
const axiosInterceptors = new AxiosInterceptors();

/**
 * Extracting and mapping each requestInterceptor defined inside
 * AxiosInterceptors.requestInterceptors with the axios-instance
 * appAPIServer.
 */
Object.values(axiosInterceptors.requestInterceptors).forEach(
	(requestInterceptor: any) => {
		appAPIServer.interceptors.request.use(requestInterceptor);
	},
);

/**
 * Extracting and mapping each responseInterceptor defined inside
 * AxiosInterceptors.responseInterceptors with the axios-instance
 * appAPIServer.
 */
Object.values(axiosInterceptors.responseInterceptors).forEach(
	(responseInterceptor: any) => {
		appAPIServer.interceptors.response.use(
			responseInterceptor.onFullFilled,
			responseInterceptor.onRejected,
		);
	},
);

/**
 * Instanciating individual api services with appAPIServer.
 */
const postService = new PostService(appAPIServer);

export {appAPIServer, postService};
