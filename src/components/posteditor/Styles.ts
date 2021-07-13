/******************************************
 *  Author : Muhammad Swalah A A
 *  Created On : Tue Jul 14 2021
 *  File : Styles.ts
 *******************************************/
import {StyleSheet} from "react-native";

import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import {Spacing, Colors} from "@styles";

const {SCREEN_PADDING} = Spacing;

const ICON_SIZE = wp("8%");
const PROGRESS_WIDTH = wp("1%");
const PROGRESS_BACKGROUND_COLOR = Colors.GREY;

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
		justifyContent: "center",
		alignItems: "center",

		width: "100%",
	},

	headerElementContainer: {
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center",
	},

	headerTitleIcon: {
		fontSize: wp("7%"),
		color: Colors.RONCHI,
	},

	headerTitleTxt: {
		fontWeight: "bold",
		marginLeft: "3%",
	},

	contentInputContainer: {
		borderColor: Colors.RONCHI,

		width: "100%",
	},

	contentInput: {
		textAlign: "left",
		textAlignVertical: "top",
		minHeight: hp("25%"),
		width: "100%",
		marginLeft: 0,
	},

	footerContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},

	textCountProgressTxt: {
		fontSize: wp("2.5%"),
		fontWeight: "bold",
	},
});

export {ICON_SIZE, PROGRESS_WIDTH, PROGRESS_BACKGROUND_COLOR};
