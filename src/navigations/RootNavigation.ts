/******************************************
 *  Author : Muhammad Swalah A A
 *  Created On : Sat Jul 10 2021
 *  File : RootNavigation.ts
 *******************************************/
import React from "react";

import {NavigationContainerRef} from "@react-navigation/native";

export const navigationRef = React.createRef<NavigationContainerRef>();

export function navigate(name: any, params: any) {
	navigationRef.current?.navigate(name, params);
}
