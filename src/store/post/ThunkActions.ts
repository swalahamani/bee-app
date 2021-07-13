/* eslint-disable import/prefer-default-export */
/******************************************
 *  Author : Muhammad Swalah A A
 *  Created On : Tue Jul 13 2021
 *  File : ThunkActions.ts
 *******************************************/
import I18n from "i18n-js";
import moment from "moment-timezone";

import {AppThunk} from "@store/index";
import {postService} from "@services/api";

import {
	APIResponse,
	apiResponseStatuses,
	httpStatusCodes,
} from "@config/NetworkTypes";
import NetworkUtil from "@utils/NetworkUtil";
import GenUtil from "@utils/GenUtil";
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

/**
 * Fetches posts by postService.fetchAllPosts and update PostState.posts.
 *
 * @returns
 */
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

export const createPost = (post: string): AppThunk => {
	return async (dispatch, getState) => {
		console.log("ThunkActions.createPost");
		/**
		 * Setting the loading satus as true.
		 * Things like loading indicators and other related things in the
		 * corresponding screen will be rendered based on this.
		 */
		dispatch(postActions.updatePostStateLoadingStatus(true));

		dispatch(
			postActions.updatePostStateMessage(
				I18n.translate("CreatePost_message_posting"),
			),
		);

		/**
		 * FIXME:
		 * Simulating successfull creation of post with delay of 4000ms as the POST api is not actually
		 * available.
		 */
		await GenUtil.waitFor(4000);
		const response =
			/*await postService.createPost(post)*/ NetworkUtil.buildResult(
				null,
				httpStatusCodes.SUCCESS_CREATED,
				null,
				{
					postId: Math.round(Math.random() * 100),
					post: {
						author: "RockinguSeR",
						dateAndTime: moment().format("DD MMM YYYY hh:mm A"),
						content: post,
					},
				},
			);

		console.log(
			"🚀 ~ file: ThunkActions.ts ~ line 143 ~ return ~ response",
			response,
		);
		const {httpStatuCode, message, data} = response as APIResponse;

		const {postIds: currentPostIds, posts: currentPosts} =
			getState().postReducer.posts;

		switch (httpStatuCode) {
			case httpStatusCodes.SUCCESS_CREATED:
				dispatch(
					postActions.updatePostStatePosts({
						postIds: [data.postId, ...currentPostIds],
						posts: {
							...currentPosts,
							[data.postId]: data.post,
						},
					}),
				);

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
					postActions.updatePostStateResponseStatus(apiResponseStatuses.ERROR),
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
	};
};
