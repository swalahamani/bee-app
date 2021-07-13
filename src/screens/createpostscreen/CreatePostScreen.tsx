/******************************************
 *  Author : Muhammad Swalah A A
 *  Created On : Sun Jul 11 2021
 *  File : CreatePostScreen.tsx
 *******************************************/
import React, {Component} from "react";
import {} from "react-native";

import {AnyAction, bindActionCreators, Dispatch} from "redux";
import {connect, ConnectedProps} from "react-redux";
import {RootState} from "@store/RootReducer";
import ActionCreators from "@store/ActionCreators";

import {LocalizationContext} from "@config/Translations";

import {StackNavigationProp} from "@react-navigation/stack";

import {Layout} from "@ui-kitten/components";

import PostEditor from "@components/posteditor";

import {AppRouteBottomTabParamList} from "@config/constants/NavConstants";

import PortStyles from "./PortStyles";

const mapStateToProps = (state: RootState) => {
	return {
		postState: state.postReducer,
	};
};

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
	return bindActionCreators(ActionCreators, dispatch);
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

type HomeScreenNavigationProp = StackNavigationProp<
	AppRouteBottomTabParamList,
	"CreatePostScreen"
>;

type Props = PropsFromRedux & {
	navigation: HomeScreenNavigationProp;
};

type State = {
	postDraft: string;
};

class CreatePostScreen extends Component<Props, State> {
	constructor(props: Props) {
		super(props);

		this.state = {
			postDraft: "",
		};
	}

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
	getStyles = () => {
		return PortStyles;
	};

	onChangeText = (text: string) => {
		this.setState({
			postDraft: text,
		});
	};

	onPost = async () => {
		const {postDraft} = this.state;
		const {navigation, createPost} = this.props;

		this.setState({postDraft: ""}, async () => {
			navigation.navigate("HomeScreen");
			await createPost(postDraft);
		});
	};

	render() {
		const {postDraft} = this.state;

		return (
			<Layout style={this.getStyles().container} level="1">
				<PostEditor
					value={postDraft}
					onChangeText={this.onChangeText}
					onPressPost={this.onPost}
				/>
			</Layout>
		);
	}
}

CreatePostScreen.contextType = LocalizationContext;

export default connector(CreatePostScreen);
