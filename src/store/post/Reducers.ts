/******************************************
 *  Author : Muhammad Swalah A A
 *  Created On : Tue Jul 13 2021
 *  File : Reducers.ts
 *******************************************/
import {apiResponseStatuses} from "@config/NetworkTypes";

import {PostState, PostStateActionTypes, RESET_POST_STATE} from "./Types";

const initialState: PostState = {
	isLoading: false,

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

				isLoading: false,

				responseStatus: apiResponseStatuses.IDLE,

				message: null,

				isMessageVisible: false,

				posts: {
					postIds: [],

					posts: {},
				},
			};

		default:
			return state;
	}
}
