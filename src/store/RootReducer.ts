/******************************************
 *  Author : Muhammad Swalah A A
 *  Created On : Sun Jul 11 2021
 *  File : RootReducer.ts
 *******************************************/
import {combineReducers} from "redux";

import sampleReducer from "@store/sample/Reducers";

const rootReducer = combineReducers({
	sampleReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
