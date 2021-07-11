/******************************************
 *  Author : Muhammad Swalah A A
 *  Created On : Sun Jul 11 2021
 *  File : CommonTypes.tsx
 *******************************************/
type NullableNumber = number | null;
type NullableString = string | null;
type NullableBoolean = boolean | null;
type NumericArray = Array<number>;
type StringArray = Array<string>;
type NullableNumericArray = NumericArray | null;
type NullableStringArray = StringArray | null;

export type {
	NullableNumber,
	NullableString,
	NullableBoolean,
	NumericArray,
	StringArray,
	NullableNumericArray,
	NullableStringArray,
};
