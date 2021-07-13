/******************************************
 *  Author : Muhammad Swalah A A
 *  Created On : Tue Jul 13 2021
 *  File : PortStyles.ts
 *******************************************/
import {StyleSheet} from "react-native";

import {widthPercentageToDP as wp} from "react-native-responsive-screen";
import {Spacing} from "@styles";

const {SCREEN_PADDING, BOTTOM_SCROLL_PADDING} = Spacing;

export default StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "flex-start",
		alignItems: "flex-start",
	},

	scrollContentContainer: {
		width: wp("100%"),
		paddingHorizontal: SCREEN_PADDING,
		paddingBottom: BOTTOM_SCROLL_PADDING,
	},
});
