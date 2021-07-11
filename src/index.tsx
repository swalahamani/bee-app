/* eslint-disable react/jsx-props-no-spreading */
/******************************************
 *  Author : Muhammad Swalah A A
 *  Created On : Sat Jul 10 2021
 *  File : index.tsx
 *******************************************/
import React from "react";

import I18n from "i18n-js";
import * as eva from "@eva-design/eva";
import {ApplicationProvider} from "@ui-kitten/components";

import {bestAvailableLanguage, LocalizationContext} from "@config/Translations";
import RootNavigator from "@navigations/index";

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
			<ApplicationProvider {...eva} theme={eva.light}>
				<RootNavigator />
			</ApplicationProvider>
		</LocalizationContext.Provider>
	);
}

export default AppRoot;
