/******************************************
 *  Author : Muhammad Swalah A A
 *  Created On : Tue Jul 13 2021
 *  File : StoreTypes.ts
 *******************************************/
import {NumericArray} from "@config/CommonTypes";

interface iPostItem {
	author: string;
	dateAndTime: string;
	content: string;
}

type PostsType = {
	postIds: NumericArray;

	posts: {
		[key in string]: iPostItem;
	};
};

export type {iPostItem, PostsType};
