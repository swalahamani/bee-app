/******************************************
 *  Author : Muhammad Swalah A A
 *  Created On : Tue Jul 13 2021
 *  File : GenUtil.ts
 *******************************************/

/**
 * Function that waits for the specified amount of delay (in milliseconds).
 *
 * @param delay
 * @returns
 */
async function waitFor(delay: number) {
	return new Promise((resolve) => {
		return setTimeout(resolve, delay);
	});
}

export default {
	waitFor,
};
