/**
 * @format
 */

import {AppRegistry} from "react-native";
import AppRoot from "./src";
import {name as appName} from "./app";

AppRegistry.registerComponent(appName, () => {
	return AppRoot;
});
