/* eslint-disable import/prefer-default-export */
/******************************************
 *  Author : Muhammad Swalah A A
 *  Created On : Tue Jul 13 2021
 *  File : Actions.ts
 *******************************************/
import {
	APIResponseMessageType,
	apiResponseStatuses,
} from "@config/NetworkTypes";
import {
	PostStateActionTypes,
	RESET_POST_STATE,
	UPDATE_POST_STATE_LOADING_STATUS,
	UPDATE_POST_STATE_RESPONSE_STATUS,
	UPDATE_POST_STATE_MESSAGE,
} from "./Types";

export function resetPostState(): PostStateActionTypes {
	return {
		type: RESET_POST_STATE,
	};
}

export function updatePostStateLoadingStatus(
	isLoading: boolean,
): PostStateActionTypes {
	return {
		type: UPDATE_POST_STATE_LOADING_STATUS,
		isLoading,
	};
}

export function updatePostStateResponseStatus(
	responseStatus: apiResponseStatuses,
): PostStateActionTypes {
	return {
		type: UPDATE_POST_STATE_RESPONSE_STATUS,
		responseStatus,
	};
}

export function updatePostStateMessage(
	message: APIResponseMessageType,
	isMessageVisible: boolean,
): PostStateActionTypes {
	return {
		type: UPDATE_POST_STATE_MESSAGE,
		message,
		isMessageVisible,
	};
}
