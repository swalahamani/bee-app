/******************************************
 *  Author : Muhammad Swalah A A
 *  Created On : Sat Jul 10 2021
 *  File : HomeScreen.tsx
 *******************************************/
import React, {FC} from "react";
import {View, Text} from "react-native";

type Props = {};

const defaultProps: Partial<Props> = {};

const HomeScreen: FC<Props> = () => {
	return (
		<View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
			<Text>Bee Application</Text>
		</View>
	);
};

HomeScreen.displayName = "HomeScreen";
HomeScreen.defaultProps = defaultProps;

export default HomeScreen;
