/******************************************
 *  Author : Muhammad Swalah A A
 *  Created On : Tue Jul 14 2021
 *  File : Reducers.ts
 *******************************************/
import {AuthState, AuthStateActionTypes, RESET_AUTH_STATE} from "./Types";

const initialState: AuthState = {
	token: null,
};

export default function postReducer(
	state = initialState,
	action: AuthStateActionTypes,
) {
	switch (action.type) {
		case RESET_AUTH_STATE:
			return {
				...state,

				token: null,
			};

		default:
			return state;
	}
}
