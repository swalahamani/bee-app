/******************************************
 *  Author : Muhammad Swalah A A
 *  Created On : Sat Jul 10 2021
 *  File : AppNavigator.tsx
 *******************************************/
import React from "react";

import IonIcons from "react-native-vector-icons/Ionicons";

import {
	NavigationHelpers,
	ParamListBase,
	TabNavigationState,
} from "@react-navigation/native";
import {
	BottomTabBarOptions,
	BottomTabBarProps,
	createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import {BottomTabNavigationEventMap} from "@react-navigation/bottom-tabs/lib/typescript/src/types";

import {BottomNavigation, BottomNavigationTab} from "@ui-kitten/components";

import {AppRouteBottomTabParamList} from "@config/constants/NavConstants";

import {heightPercentageToDP as hp} from "react-native-responsive-screen";
import {Colors} from "@styles";

import HomeScreen from "@screens/homescreen";
import CreatePostScreen from "@screens/createpostscreen";
import ProfileScreen from "@screens/profilescreen";

const BottomTab = createBottomTabNavigator<AppRouteBottomTabParamList>();

const BottomTabBar = ({
	navigation,
	state,
}: {
	navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
	state: TabNavigationState<ParamListBase>;
}) => {
	const {routeNames, index: selectedIndex} = state;

	const renderBottomTabs = () => {
		const bottomTabs: JSX.Element[] = [];

		routeNames.forEach((routeName, routeIndex) => {
			let icon = "home";
			let iconSize = hp("3.5%");
			let iconColor = Colors.RONCHI;

			if (routeIndex === selectedIndex) {
				iconSize = hp("2.5%");
				iconColor = Colors.BLACK;
			}

			switch (routeName) {
				case "HomeScreen":
					icon = "home";
					break;

				case "CreatePostScreen":
					icon = "ios-add-circle";
					break;

				case "ProfileScreen":
					icon = "ios-person-circle";
					break;

				default:
					icon = "home";
			}

			bottomTabs.push(
				<BottomNavigationTab
					icon={() => {
						return <IonIcons name={icon} size={iconSize} color={iconColor} />;
					}}
				/>,
			);
		});

		return bottomTabs;
	};

	return (
		<BottomNavigation
			indicatorStyle={{
				backgroundColor: Colors.RONCHI,
			}}
			selectedIndex={selectedIndex}
			onSelect={(index) => {
				return navigation.navigate(state.routeNames[index]);
			}}
		>
			{renderBottomTabs()}
		</BottomNavigation>
	);
};

function AppNavigator() {
	return (
		<BottomTab.Navigator
			initialRouteName="HomeScreen"
			tabBar={(props: BottomTabBarProps<BottomTabBarOptions>) => {
				return (
					<BottomTabBar state={props.state} navigation={props.navigation} />
				);
			}}
		>
			<BottomTab.Screen name="HomeScreen" component={HomeScreen} />

			<BottomTab.Screen name="CreatePostScreen" component={CreatePostScreen} />

			<BottomTab.Screen name="ProfileScreen" component={ProfileScreen} />
		</BottomTab.Navigator>
	);
}

export default AppNavigator;
