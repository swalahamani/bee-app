/******************************************
 *  Author : Muhammad Swalah A A
 *  Created On : Sat Jul 10 2021
 *  File : HomeScreen.tsx
 *******************************************/
import React, {Component} from "react";
import {View, Alert, FlatList, RefreshControl} from "react-native";

import {AnyAction, bindActionCreators, Dispatch} from "redux";
import {connect, ConnectedProps} from "react-redux";
import {RootState} from "@store/RootReducer";
import ActionCreators from "@store/ActionCreators";

import {LocalizationContext} from "@config/Translations";

import {StackNavigationProp} from "@react-navigation/stack";

import {Layout, Text, Spinner, Button} from "@ui-kitten/components";

import Post from "@components/post";

import {AppRouteBottomTabParamList} from "@config/constants/NavConstants";

import {apiResponseStatuses} from "config/NetworkTypes";
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
	"HomeScreen"
>;

type Props = PropsFromRedux & {
	navigation: HomeScreenNavigationProp;
};

type State = {};

class HomeScreen extends Component<Props, State> {
	constructor(props: Props) {
		super(props);

		this.state = {};
	}

	async componentDidMount() {
		await this.fetchAllPosts();
	}

	/**
	 * Invoking fetchPosts thunk action of postState.
	 */
	fetchAllPosts = async () => {
		const {resetPostState, fetchPosts, postState} = this.props;
		const {responseStatus} = postState;

		if (responseStatus !== apiResponseStatuses.IDLE) {
			await resetPostState();
		}

		await fetchPosts();
	};

	/**
	 * Handler which executes while tapping on the Retry button.
	 */
	onPressRetry = async () => {
		await this.fetchAllPosts();
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
	getStyles = () => {
		return PortStyles;
	};

	/**
	 * Displays an alert with the postState.message if postState.isMessageVisible is true.
	 */
	handlePostStateMessageAlert = () => {
		const {translate} = this.context;

		const {postState, clearAndHidePostStateMessage} = this.props;
		const {isMessageVisible, message} = postState;

		if (isMessageVisible) {
			Alert.alert(
				translate("Info"),
				message || "",
				[
					{
						text: translate("Ok"),
						onPress: async () => {
							await clearAndHidePostStateMessage();
						},
					},
				],
				{
					cancelable: false,
				},
			);
		}
	};

	/**
	 * Returns RefreshControl component for post items' rendering FlatList for
	 * pull-to-refresh.
	 */
	getPostsRefreshControl = () => {
		return (
			<RefreshControl
				/**
				 * Already implemented loading animation (see the implementation of this.renderBody function).
				 * That is why the property refreshing is set to always false.
				 */
				refreshing={false}
				onRefresh={this.onPressRetry}
			/>
		);
	};

	/**
	 * Returns Post component with data feeded from postState based on the
	 * postItemId.
	 *
	 * @param param0
	 * @returns
	 */
	renderPostItem = ({item: postItemId}: {item: number}) => {
		const {postState} = this.props;
		const {posts} = postState.posts;
		const {author, dateAndTime, content} = posts[postItemId];

		return <Post author={author} dateAndTime={dateAndTime} content={content} />;
	};

	/**
	 * Key extractor for post item rendering FlatList.
	 * @param postItemId
	 * @returns
	 */
	postItemKeyExtractor = (postItemId: number) => {
		return postItemId.toString();
	};

	/**
	 * Rendering body part of the screen based on the postState loading state and
	 * responseStatus.
	 *
	 * @returns
	 */
	renderBody = () => {
		const {translate} = this.context;

		const {postState} = this.props;
		const {isLoading, responseStatus, message, posts} = postState;

		// render loading message with spinner loader
		if (isLoading) {
			return (
				<View style={this.getStyles().loadingContainer}>
					<Spinner size="tiny" />
					<Text>{message || translate("FetchAllPosts_message_fetching")}</Text>
				</View>
			);
		}

		// fetching data with API is success, thus render posts.
		if (!isLoading && responseStatus === apiResponseStatuses.SUCCESS) {
			return (
				<FlatList
					contentContainerStyle={this.getStyles().scrollContentContainer}
					refreshControl={this.getPostsRefreshControl()}
					data={posts.postIds}
					renderItem={this.renderPostItem}
					keyExtractor={this.postItemKeyExtractor}
				/>
			);
		}

		// loading has finished, but api service call ended up in some sort of error.
		if (!isLoading && responseStatus === apiResponseStatuses.ERROR) {
			return (
				<View style={this.getStyles().loadingContainer}>
					<Text>{message || translate("FetchAllPosts_message_fetching")}</Text>

					<Button
						style={this.getStyles().retryButton}
						size="medium"
						status="warning"
						onPress={this.onPressRetry}
					>
						{translate("Retry")}
					</Button>
				</View>
			);
		}

		return (
			<View style={this.getStyles().loadingContainer}>
				<Text>{translate("SomethingWentWrong")}</Text>
			</View>
		);
	};

	render() {
		this.handlePostStateMessageAlert();

		return (
			<Layout style={this.getStyles().container} level="1">
				{this.renderBody()}
			</Layout>
		);
	}
}

HomeScreen.contextType = LocalizationContext;

export default connector(HomeScreen);
