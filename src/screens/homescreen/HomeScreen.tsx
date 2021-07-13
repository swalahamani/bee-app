/******************************************
 *  Author : Muhammad Swalah A A
 *  Created On : Sat Jul 10 2021
 *  File : HomeScreen.tsx
 *******************************************/
import React, {Component} from "react";
import {SafeAreaView, Text} from "react-native";

import {StackNavigationProp} from "@react-navigation/stack";

import {AppRouteBottomTabParamList} from "@config/constants/NavConstants";

import PortStyles from "./PortStyles";

type HomeScreenNavigationProp = StackNavigationProp<
	AppRouteBottomTabParamList,
	"HomeScreen"
>;

type Props = {
	navigation: HomeScreenNavigationProp;
};

type State = {};

class HomeScreen extends Component<Props, State> {
	constructor(props: Props) {
		super(props);

		this.state = {};
	}

	/**
	 * Function which returns the appropriate style file depending on different
	 * screen orientation.
	 *
	 * NOTE: Currently it is directly returning the Styles.s as the application only
	 * supports portrait orientation. In future, while adding support for landscape orientation,
	 * will change the implementation for returning the landscape style-sheet file
	 * by listening to the orientation change.
	 * @returns
	 */
	getStyles = () => {
		return PortStyles;
	};

	render() {
		return (
			<SafeAreaView
				style={{
					flex: 1,
					justifyContent: "flex-start",
					alignItems: "flex-start",
				}}
			>
				<Text>Home Screen Label</Text>
			</SafeAreaView>
		);
	}
}

export default HomeScreen;
