/******************************************
 *  Author : Muhammad Swalah A A
 *  Created On : Sat Jul 10 2021
 *  File : HomeScreen.tsx
 *******************************************/
import React, {FC} from "react";
import {SafeAreaView, Text} from "react-native";

type Props = {};

const defaultProps: Partial<Props> = {};

const HomeScreen: FC<Props> = () => {
	return (
		<SafeAreaView
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Text>Home Screen</Text>
		</SafeAreaView>
	);
};

HomeScreen.displayName = "HomeScreen";
HomeScreen.defaultProps = defaultProps;

export default HomeScreen;
