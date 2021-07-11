/******************************************
 *  Author : Muhammad Swalah A A
 *  Created On : Sun Jul 11 2021
 *  File : ProfileScreen.tsx
 *******************************************/
import React, {FC} from "react";
import {SafeAreaView, Text} from "react-native";

type Props = {};

const defaultProps: Partial<Props> = {};

const ProfileScreen: FC<Props> = () => {
	return (
		<SafeAreaView
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Text>Profile Screen</Text>
		</SafeAreaView>
	);
};

ProfileScreen.displayName = "ProfileScreen";
ProfileScreen.defaultProps = defaultProps;

export default ProfileScreen;
