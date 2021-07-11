/******************************************
 *  Author : Muhammad Swalah A A
 *  Created On : Sun Jul 11 2021
 *  File : index.ts
 *******************************************/
import {createStore, applyMiddleware, Action} from "redux";
import {createLogger} from "redux-logger";
import thunkMiddleware, {ThunkAction} from "redux-thunk";

import rootReducer, {RootState} from "./RootReducer";

const isLoggingEnabled: boolean = false;
const loggerMiddleware = createLogger({
	predicate: () => {
		return isLoggingEnabled;
	},
});

const store = createStore(
	rootReducer,
	applyMiddleware(thunkMiddleware, loggerMiddleware),
);

export default store;

export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
