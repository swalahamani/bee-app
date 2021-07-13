/******************************************
 *  Author : Muhammad Swalah A A
 *  Created On : Sun Jul 11 2021
 *  File : RootReducer.ts
 *******************************************/
import {combineReducers} from "redux";

import postReducer from "@store/post/Reducers";

const rootReducer = combineReducers({
	postReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
