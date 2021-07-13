/******************************************
 *  Author : Muhammad Swalah A A
 *  Created On : Tue Jul 13 2021
 *  File : Post.tsx
 *******************************************/
import React, {FC} from "react";
import {View} from "react-native";

import {Card, Text} from "@ui-kitten/components";
import IonIcon from "react-native-vector-icons/Ionicons";

import {} from "@config/CommonTypes";

import Styles from "./Styles";

type Props = {
	author: string;
	dateAndTime: string;
	content: string;
};

const defaultProps: Partial<Props> = {};

const Post: FC<Props> = ({author, dateAndTime, content}: Props) => {
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
	const getStyles = () => {
		return Styles;
	};

	const renderHeader = () => {
		return (
			<View style={getStyles().headerContainer}>
				<View style={getStyles().headerElementContainer}>
					<IonIcon name="at" />
					<Text>{author}</Text>
				</View>

				<View style={getStyles().headerElementContainer}>
					<IonIcon name="ios-time-outline" />
					<Text>{dateAndTime}</Text>
				</View>
			</View>
		);
	};

	return (
		<Card
			style={getStyles().container}
			header={renderHeader}
			appearance="outline"
		>
			<Text>{content}</Text>
		</Card>
	);
};

Post.defaultProps = defaultProps;
Post.displayName = "Post";

export default Post;
