/******************************************
 *  Author : Muhammad Swalah A A
 *  Created On : Tue Jul 13 2021
 *  File : Styles.ts
 *******************************************/
import {StyleSheet} from "react-native";

import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import {Spacing, Colors} from "@styles";

const {SCREEN_PADDING} = Spacing;

export default StyleSheet.create({
	container: {
		width: "100%",

		padding: hp("2%"),
		marginTop: SCREEN_PADDING,

		borderRadius: hp("1%"),

		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.32,
		shadowRadius: 5.46,

		elevation: 9,

		backgroundColor: Colors.WHITE,
	},

	headerContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",

		width: "100%",
	},

	headerElementContainer: {
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center",
	},
});
