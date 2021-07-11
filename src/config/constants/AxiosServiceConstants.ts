/* eslint-disable import/prefer-default-export */
/******************************************
 *  Author : Muhammad Swalah A A
 *  Created On : Sun Jul 11 2021
 *  File : AxiosServiceConstants.ts
 *******************************************/
import {AxiosRequestConfig} from "axios";

/**
 * This base url of the api server's endpoint needs to be configured here.
 *
 * NOTE: This has to be manged by a build flavour configuration files
 * such as environment fils via libraries like react-native-cofig later.
 */
export const API_SERVER_BASE_URL = "";

/**
 * All basic axios request-configurations needs to be set here.
 * This will used inside the services/api/index.ts file while
 * creating axios service instance to handle api calls.
 */
export const apiServerConfig: AxiosRequestConfig = Object.freeze({
	baseURL: "",
});
