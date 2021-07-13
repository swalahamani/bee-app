/******************************************
 *  Author : Muhammad Swalah A A
 *  Created On : Sat Jul 10 2021
 *  File : HomeScreen.tsx
 *******************************************/
import React, {Component} from "react";
import {ScrollView} from "react-native";

import {StackNavigationProp} from "@react-navigation/stack";

import {Layout} from "@ui-kitten/components";

import Post from "@components/post";

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

	renderPosts = () => {
		const posts = [];

		const postCount = 5;

		for (let index = 0; index < postCount; index += 1) {
			posts.push(
				<Post
					key={`something-unique-${index}`}
					author="Swalah Amani"
					content="Function "
					dateAndTime="13 Jul 2021 07:54 PM"
				/>,
			);
		}

		return posts;
	};

	render() {
		return (
			<Layout style={this.getStyles().container} level="1">
				<ScrollView
					contentContainerStyle={this.getStyles().scrollContentContainer}
				>
					{this.renderPosts()}
				</ScrollView>
			</Layout>
		);
	}
}

export default HomeScreen;
