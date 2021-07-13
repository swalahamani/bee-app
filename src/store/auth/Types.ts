/******************************************
 *  Author : Muhammad Swalah A A
 *  Created On : Tue Jul 14 2021
 *  File : Types.ts
 *******************************************/
import {NullableString} from "@config/CommonTypes";

export interface AuthState {
	token: NullableString;
}

export const RESET_AUTH_STATE = "RESET_AUTH_STATE";

interface ResetAuthState {
	type: typeof RESET_AUTH_STATE;
}

export type AuthStateActionTypes = ResetAuthState;
