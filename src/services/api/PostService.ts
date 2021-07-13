/******************************************
 *  Author : Muhammad Swalah A A
 *  Created On : Tue Jul 13 2021
 *  File : PostService.ts
 *******************************************/
import {AxiosInstance} from "axios";

import NetworkUtil from "@utils/NetworkUtil";
import {apiEndpoints} from "@config/constants/AxiosServiceConstants";
import {APIResponse} from "@config/NetworkTypes";

class PostService {
	appAPIServer: AxiosInstance;

	constructor(appAPIServer: AxiosInstance) {
		this.appAPIServer = appAPIServer;
	}

	/**
	 * API Service method for fetching all the posts.
	 *
	 * @returns
	 */
	async fetchAllPosts(): Promise<APIResponse | null> {
		let result = null;

		await this.appAPIServer
			.get(apiEndpoints.posts.fetchAllPosts)
			.then(
				// onFullFilled
				(value) => {
					result = NetworkUtil.buildResult(
						null,
						value.status,
						null,
						value.data,
					);
				},

				// onRejected
				(reason) => {
					result = NetworkUtil.buildResult(
						reason?.message,
						reason?.status,
						reason?.message,
						null,
					);
				},
			)
			.catch((error) => {
				throw error;
			});

		return result;
	}
}

export default PostService;
