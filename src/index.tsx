/******************************************
 *  Author : Muhammad Swalah A A
 *  Created On : Sat Jul 10 2021
 *  File : index.tsx
 *******************************************/
import React from "react";
import {View, Text} from "react-native";

import I18n from "i18n-js";

import {bestAvailableLanguage, LocalizationContext} from "@config/Translations";

function AppRoot() {
	/**
	 * This state is used to track the localization configurations.
	 */
	const [locale, setLocale] = React.useState(bestAvailableLanguage);

	/**
	 * Configuring the localization context which will be available
	 * throughout the application via context.
	 */
	const localizationContext = React.useMemo(() => {
		return {
			locale,
			setLocale,
			translate: (
				scope: I18n.Scope,
				options?: I18n.TranslateOptions | undefined,
			) => {
				return I18n.translate(scope, {
					locale: locale.languageTag,
					...options,
				});
			},
		};
	}, [locale]);

	return (
		<LocalizationContext.Provider value={localizationContext}>
			<View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
				<Text>{localizationContext.translate("app-name")}</Text>
			</View>
		</LocalizationContext.Provider>
	);
}

export default AppRoot;
