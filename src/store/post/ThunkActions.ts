/* eslint-disable import/prefer-default-export */
/******************************************
 *  Author : Muhammad Swalah A A
 *  Created On : Tue Jul 13 2021
 *  File : ThunkActions.ts
 *******************************************/

import {AppThunk} from "@store/index";

import * as postActions from "./Actions";

/**
 * Resets PostState to it's initial state.
 * @returns
 */
export const resetPostState = (): AppThunk => {
	return async (dispatch) => {
		dispatch(postActions.resetPostState());
	};
};

/**
 * Clears and hides the message of PostState.
 *
 * This sets PostState.message -> null and PostState.isMessageVisible -> false.
 * @returns
 */
export const clearAndHidePostStateMessage = (): AppThunk => {
	return async (dispatch) => {
		dispatch(postActions.updatePostStateMessage(null, false));
	};
};
