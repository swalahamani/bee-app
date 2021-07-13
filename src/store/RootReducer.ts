/******************************************
 *  Author : Muhammad Swalah A A
 *  Created On : Sun Jul 11 2021
 *  File : RootReducer.ts
 *******************************************/
import {combineReducers} from "redux";

import authReducer from "@store/auth/Reducers";
import postReducer from "@store/post/Reducers";

const rootReducer = combineReducers({
	authReducer,
	postReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
