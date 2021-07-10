/* eslint-disable import/prefer-default-export */
/******************************************
 *  Author : Muhammad Swalah A A
 *  Created On : Sat Jul 10 2021
 *  File : TranslationConstants.ts
 *******************************************/

/**
 * Fallback option for localization translator engine.
 * This will be used when no direct match is found while attempting to
 * translate the to the locale language.
 *
 * Here we're setting the fallback option as English with code "en"
 */
export const fallback: {languageTag: string; isRTL: boolean} = Object.freeze({
	languageTag: "en",
	isRTL: false,
});
