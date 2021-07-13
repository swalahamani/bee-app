/* eslint-disable import/prefer-default-export */
/******************************************
 *  Author : Muhammad Swalah A A
 *  Created On : Sun Jul 11 2021
 *  File : AxiosServiceConstants.ts
 *******************************************/
import {AxiosRequestConfig} from "axios";

export const API_SERVER_BASE_URL_DEV = "https://my-json-server.typicode.com/";

/**
 * This base url of the api server's endpoint needs to be configured here.
 *
 * NOTE: This has to be manged by a build flavour configuration files
 * such as environment fils via libraries like react-native-cofig later.
 */
export const API_SERVER_BASE_URL = API_SERVER_BASE_URL_DEV;

/**
 * All basic axios request-configurations needs to be set here.
 * This will used inside the services/api/index.ts file while
 * creating axios service instance to handle api calls.
 */
export const apiServerConfig: AxiosRequestConfig = Object.freeze({
	baseURL: API_SERVER_BASE_URL,
});

/**
 * All the application service api endpoints should be defined here and never
 * directly define and use apiEndpoints as the baseURL is configured based on
 * the build flavour.
 *
 * While defining endpoints here, kindly note that the part after the base url
 * should be added here and shouldn't include the host/baseURL part.
 *
 * Kindly refer the below examples for more details:
 *
 * If the endpoint is "https://dev.exampleapiserver.tld/api/v1/login" , then it
 * should be split as below:
 * API_SERVER_BASE_URL =  "https://dev.exampleapiserver.tld/api/v1"
 * apiEndpoints = {
 *     authentication: {
 *         login: "/login"
 *     }
 * }
 *
 */
export const apiEndpoints = Object.freeze({
	posts: {
		fetchAllPosts: "/swalahamani/json-place-holder-service/bee-app/",
		craetePost: "/swalahamani/json-place-holder-service/bee-app/",
	},
});
