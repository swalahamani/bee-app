/******************************************
 *  Author : Muhammad Swalah A A
 *  Created On : Tue Jul 14 2021
 *  File : PostEditor.tsx
 *******************************************/
import React, {FC, useContext} from "react";
import {View} from "react-native";

import {Card, Text, Input, Button} from "@ui-kitten/components";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import {AnimatedCircularProgress} from "react-native-circular-progress";

import {LocalizationContext} from "@config/Translations";
import {} from "@config/CommonTypes";

import {Colors} from "styles";
import Styles, {
	ICON_SIZE,
	PROGRESS_WIDTH,
	PROGRESS_BACKGROUND_COLOR,
} from "./Styles";

type Props = {
	value: string;
	maximumAllowedLength?: number;
	onChangeText: ((text: string) => void) | undefined;
	onPressPost: (() => void) | undefined;
};

const defaultProps: Partial<Props> = {
	maximumAllowedLength: 50,
};

const PostEditor: FC<Props> = ({
	value,
	maximumAllowedLength,
	onChangeText,
	onPressPost,
}: Props) => {
	const {translate} = useContext(LocalizationContext) as any;

	const localOnChangeText = (text: string) => {
		if (text.length <= (maximumAllowedLength as number) && onChangeText) {
			onChangeText(text);
		}
	};

	const localOnPressPost = async () => {
		if (onPressPost) {
			await onPressPost();
		}
	};

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
					<MaterialIcon style={getStyles().headerTitleIcon} name="post-add" />
					<Text style={getStyles().headerTitleTxt}>
						{translate("PostEditor_create_post")}
					</Text>
				</View>
			</View>
		);
	};

	const renderFooter = () => {
		const valueLength = value.length;
		const totalAllowedLength = maximumAllowedLength as number;
		const remainingCharactersLength = totalAllowedLength - valueLength;
		const percentage = (valueLength / totalAllowedLength) * 100;
		const fill = 100 - percentage;

		let tintColor = Colors.MOUNTAIN_MEADOW;
		if (fill >= 75) {
			tintColor = Colors.MOUNTAIN_MEADOW;
		} else if (fill >= 35) {
			tintColor = Colors.RONCHI;
		} else {
			tintColor = Colors.CRIMSON;
		}

		let disabled = true;
		if (valueLength > 0) {
			disabled = false;
		}

		return (
			<View style={getStyles().footerContainer}>
				<AnimatedCircularProgress
					size={ICON_SIZE}
					width={PROGRESS_WIDTH}
					tintColor={tintColor}
					backgroundColor={PROGRESS_BACKGROUND_COLOR}
					fill={fill}
					fillLineCap="round"
					duration={0}
				>
					{() => {
						return (
							<Text
								style={[getStyles().textCountProgressTxt, {color: tintColor}]}
							>
								{Math.round(remainingCharactersLength)}
							</Text>
						);
					}}
				</AnimatedCircularProgress>

				<Button size="small" disabled={disabled} onPress={localOnPressPost}>
					{translate("PostEditor_post_btn_label")}
				</Button>
			</View>
		);
	};

	return (
		<Card
			style={getStyles().container}
			header={renderHeader}
			footer={renderFooter}
			appearance="outline"
		>
			<Input
				style={getStyles().contentInputContainer}
				textStyle={getStyles().contentInput}
				multiline
				value={value}
				onChangeText={localOnChangeText}
			/>
		</Card>
	);
};

PostEditor.defaultProps = defaultProps;
PostEditor.displayName = "PostEditor";

export default PostEditor;
