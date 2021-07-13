/* eslint-disable import/prefer-default-export */
/******************************************
 *  Author : Muhammad Swalah A A
 *  Created On : Tue Jul 13 2021
 *  File : ThunkActions.ts
 *******************************************/
import I18n from "i18n-js";

import {AppThunk} from "@store/index";
import {postService} from "@services/api";

import {
	APIResponse,
	apiResponseStatuses,
	httpStatusCodes,
} from "config/NetworkTypes";
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

export const fetchPosts = (): AppThunk => {
	return async (dispatch) => {
		try {
			/**
			 * Setting the loading satus as true.
			 * Things like loading indicators and other related things in the
			 * corresponding screen will be rendered based on this.
			 */
			dispatch(postActions.updatePostStateLoadingStatus(true));

			dispatch(
				postActions.updatePostStateMessage(
					I18n.translate("FetchAllPosts_message_fetching"),
				),
			);

			const response = await postService.fetchAllPosts();
			const {httpStatuCode, message, data} = response as APIResponse;
			let posts = null;

			switch (httpStatuCode) {
				case httpStatusCodes.SUCCESS_OK:
					posts = data.posts;

					dispatch(postActions.updatePostStatePosts(posts));

					dispatch(
						postActions.updatePostStateResponseStatus(
							apiResponseStatuses.SUCCESS,
						),
					);

					dispatch(postActions.updatePostStateMessage(null));

					dispatch(postActions.updatePostStateLoadingStatus(false));

					break;

				default: {
					dispatch(
						postActions.updatePostStateResponseStatus(
							apiResponseStatuses.ERROR,
						),
					);

					dispatch(
						postActions.updatePostStateMessage(
							message && message.length > 0
								? message
								: I18n.translate("SomethingWentWrong"),
							true,
						),
					);

					dispatch(postActions.updatePostStateLoadingStatus(false));
				}
			}
		} catch (error) {
			dispatch(
				postActions.updatePostStateResponseStatus(apiResponseStatuses.ERROR),
			);

			dispatch(
				postActions.updatePostStateMessage(
					I18n.translate("SomethingWentWrong"),
					true,
				),
			);

			dispatch(postActions.updatePostStateLoadingStatus(false));
		}
	};
};
