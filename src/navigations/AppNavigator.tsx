/******************************************
 *  Author : Muhammad Swalah A A
 *  Created On : Sat Jul 10 2021
 *  File : AppNavigator.tsx
 *******************************************/
import React from "react";

import {createStackNavigator, TransitionPresets} from "@react-navigation/stack";

import {AppRouteStackParamList} from "@config/constants/NavConstants";

import HomeScreen from "@screens/homescreen";

const Stack = createStackNavigator<AppRouteStackParamList>();

function AppNavigator() {
	return (
		<Stack.Navigator
			initialRouteName="HomeScreen"
			screenOptions={{
				headerShown: true,
				...TransitionPresets.SlideFromRightIOS,
			}}
		>
			<Stack.Screen name="HomeScreen" component={HomeScreen} />
		</Stack.Navigator>
	);
}

export default AppNavigator;
