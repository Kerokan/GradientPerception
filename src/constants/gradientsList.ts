export interface Gradient {
	name: string;
	colors: string[];
	colorsNames: string[];
}

export const gradientsList: Gradient[] = [
	{
		name: 'Blue-Green',
		colors: ['#0080FF', '#00FF80'],
		colorsNames: ['Blue', 'Green'],
	},
	{
		name: 'Red-Orange',
		colors: ['#FF0000', '#FF8000'],
		colorsNames: ['Red', 'Orange'],
	},
	{
		name: 'Purple-Pink',
		colors: ['#8000FF', '#FF00FF'],
		colorsNames: ['Purple', 'Pink'],
	},
	{
		name: 'Purple-Grey',
		colors: ['#8000FF', '#808080'],
		colorsNames: ['Purple', 'Grey'],
	},
];
