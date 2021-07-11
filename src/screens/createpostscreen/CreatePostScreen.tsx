/******************************************
 *  Author : Muhammad Swalah A A
 *  Created On : Sun Jul 11 2021
 *  File : CreatePostScreen.tsx
 *******************************************/
import React, {FC} from "react";
import {SafeAreaView, Text} from "react-native";

type Props = {};

const defaultProps: Partial<Props> = {};

const CreatePostScreen: FC<Props> = () => {
	return (
		<SafeAreaView
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Text>Create Post Screen</Text>
		</SafeAreaView>
	);
};

CreatePostScreen.displayName = "CreatePostScreen";
CreatePostScreen.defaultProps = defaultProps;

export default CreatePostScreen;
