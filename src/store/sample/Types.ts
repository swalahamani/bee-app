/******************************************
 *  Author : Muhammad Swalah A A
 *  Created On : Sun Jul 11 2021
 *  File : Types.ts
 *******************************************/
export interface SampleState {}

export const SET_SAMPLE_STATE = "SET_SAMPLE_STATE";

interface SetSampleState {
	type: typeof SET_SAMPLE_STATE;
}

export type SampleStateActionTypes = SetSampleState;
