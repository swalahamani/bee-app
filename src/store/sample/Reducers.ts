/******************************************
 *  Author : Muhammad Swalah A A
 *  Created On : Sun Jul 11 2021
 *  File : Reducers.ts
 *******************************************/
import {SampleState, SampleStateActionTypes} from "./Types";

const initialState: SampleState = {};

export default function sampleReducer(
	state = initialState,
	action: SampleStateActionTypes,
) {
	switch (action.type) {
		default:
			return state;
	}
}
