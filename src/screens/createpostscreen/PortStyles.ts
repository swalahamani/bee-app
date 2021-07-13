/******************************************
 *  Author : Muhammad Swalah A A
 *  Created On : Tue Jul 14 2021
 *  File : PortStyles.ts
 *******************************************/
import {StyleSheet} from "react-native";

import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import {Spacing} from "@styles";

const {SCREEN_PADDING, BOTTOM_SCROLL_PADDING} = Spacing;

export default StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "flex-start",
		alignItems: "flex-start",

		padding: SCREEN_PADDING,
	},

	loadingContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",

		width: wp("100%"),
	},

	retryButton: {
		marginTop: hp("3%"),
	},

	scrollContentContainer: {
		width: wp("100%"),
		paddingHorizontal: SCREEN_PADDING,
		paddingBottom: BOTTOM_SCROLL_PADDING,
	},
});
