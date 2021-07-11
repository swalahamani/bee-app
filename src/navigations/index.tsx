/******************************************
 *  Author : Muhammad Swalah A A
 *  Created On : Sat Jul 10 2021
 *  File : index.tsx
 *******************************************/
import "react-native-gesture-handler";

import React from "react";
import {} from "react-native";

import {NavigationContainer} from "@react-navigation/native";

import {navigationRef} from "./RootNavigation";
import AppNavigator from "./AppNavigator";

function RootNavigator() {
	const renderNavRoutes = (): React.ReactNode => {
		return <AppNavigator />;
	};

	return (
		<NavigationContainer ref={navigationRef}>
			{renderNavRoutes()}
		</NavigationContainer>
	);
}

export default RootNavigator;
