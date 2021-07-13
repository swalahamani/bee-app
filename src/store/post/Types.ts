/******************************************
 *  Author : Muhammad Swalah A A
 *  Created On : Tue Jul 13 2021
 *  File : Types.ts
 *******************************************/
import {
	apiResponseStatuses,
	APIResponseMessageType,
} from "@config/NetworkTypes";
import {PostsType} from "@config/StoreTypes";

export interface PostState {
	isLoading: boolean;

	responseStatus: apiResponseStatuses;

	message: APIResponseMessageType;

	isMessageVisible: boolean;

	posts: PostsType;
}

export const RESET_POST_STATE = "RESET_POST_STATE";
export const UPDATE_POST_STATE_LOADING_STATUS =
	"UPDATE_POST_STATE_LOADING_STATUS";
export const UPDATE_POST_STATE_RESPONSE_STATUS =
	"UPDATE_POST_STATE_RESPONSE_STATUS";
export const UPDATE_POST_STATE_MESSAGE = "UPDATE_POST_STATE_MESSAGE";
export const UPDATE_POST_STATE_POSTS = "UPDATE_POST_STATE_POSTS";

interface ResetPostState {
	type: typeof RESET_POST_STATE;
}

interface UpdatePostStateLoadingStatus {
	type: typeof UPDATE_POST_STATE_LOADING_STATUS;
	isLoading: boolean;
}

interface UpdatePostStateResponseStatus {
	type: typeof UPDATE_POST_STATE_RESPONSE_STATUS;
	responseStatus: apiResponseStatuses;
}

interface UpdatePostStateMessage {
	type: typeof UPDATE_POST_STATE_MESSAGE;
	message: APIResponseMessageType;
	isMessageVisible: boolean;
}

interface UpdatePostStatePosts {
	type: typeof UPDATE_POST_STATE_POSTS;
	posts: PostsType;
}

export type PostStateActionTypes =
	| ResetPostState
	| UpdatePostStateLoadingStatus
	| UpdatePostStateResponseStatus
	| UpdatePostStateMessage
	| UpdatePostStatePosts;
