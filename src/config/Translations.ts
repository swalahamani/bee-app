/* eslint-disable global-require */
/******************************************
 *  Author : Muhammad Swalah A A
 *  Created On : Sat Jul 10 2021
 *  File : Translations.ts
 *******************************************/
import React from "react";

import * as RNLocalize from "react-native-localize";
import I18n from "i18n-js";

import {fallback} from "@config/constants/TranslationConstants";

/**
 * All the available translations needs to be added here along with
 * their respective language code and translation JSON file.
 */
const Translations = Object.freeze({
	languages: ["en"],
	en: () => {
		// eslint-disable-next-line import/extensions
		return require("@assets/translations/en.json");
	},
});

/**
 * When the best match not found, system will fallback to the set fallback option.
 * See TranslationConstants to alter the 'fallback' option.
 */
const bestAvailableLanguage =
	RNLocalize.findBestAvailableLanguage(Translations.languages) || fallback;

const LocalizationContext = React.createContext({});

I18n.fallbacks = true;

/**
 * All the available translations needs to be added here along with
 * their respective language code after adding them to Translations object.
 */
I18n.translations = {
	en: Translations.en(),
};

export {Translations, LocalizationContext, bestAvailableLanguage};
