/******************************************
 *  Author : Muhammad Swalah A A
 *  Created On : Tue Jul 13 2021
 *  File : Reducers.ts
 *******************************************/
import {apiResponseStatuses} from "@config/NetworkTypes";

import {
	PostState,
	PostStateActionTypes,
	RESET_POST_STATE,
	UPDATE_POST_STATE_LOADING_STATUS,
	UPDATE_POST_STATE_MESSAGE,
	UPDATE_POST_STATE_POSTS,
	UPDATE_POST_STATE_RESPONSE_STATUS,
} from "./Types";

const initialState: PostState = {
	isLoading: true,

	responseStatus: apiResponseStatuses.IDLE,

	message: null,

	isMessageVisible: false,

	posts: {
		postIds: [],

		posts: {},
	},
};

export default function postReducer(
	state = initialState,
	action: PostStateActionTypes,
) {
	switch (action.type) {
		case RESET_POST_STATE:
			return {
				...state,

				isLoading: true,

				responseStatus: apiResponseStatuses.IDLE,

				message: null,

				isMessageVisible: false,

				posts: {
					postIds: [],

					posts: {},
				},
			};

		case UPDATE_POST_STATE_LOADING_STATUS:
			return {
				...state,

				isLoading: action.isLoading,
			};

		case UPDATE_POST_STATE_RESPONSE_STATUS:
			return {
				...state,

				responseStatus: action.responseStatus,
			};

		case UPDATE_POST_STATE_MESSAGE:
			return {
				...state,

				message: action.message,

				isMessageVisible: action.isMessageVisible,
			};

		case UPDATE_POST_STATE_POSTS:
			return {
				...state,

				posts: action.posts,
			};

		default:
			return state;
	}
}
