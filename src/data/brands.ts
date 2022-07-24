export const brands = [
	{
		name: 'Behance',
		variations: [
			{
				name: 'Thumbnail',
				dimensions: {
					width: 808,
					height: 632,
				},
			},
			{
				name: 'Post',
				dimensions: {
					width: 1400,
					height: 2800,
				},
			},
		],
	},
	{
		name: 'Chrome Webstore',
		variations: [
			{
				name: 'Post',
				dimensions: {
					width: 808,
					height: 632,
				},
			},
		],
	},
	{
		name: 'Dribbble',
		variations: [
			{
				name: 'Post',
				dimensions: {
					width: 808,
					height: 632,
				},
			},
		],
	},
	{
		name: 'Discord',
		variations: [
			{
				name: 'Post',
				dimensions: {
					width: 808,
					height: 632,
				},
			},
		],
	},
	{
		name: 'Facebook',
		variations: [
			{
				name: 'Post',
				dimensions: {
					width: 808,
					height: 632,
				},
			},
		],
	},
	{
		name: 'Github',
		variations: [
			{
				name: 'Post',
				dimensions: {
					width: 808,
					height: 632,
				},
			},
		],
	},
	{
		name: 'Instagram',
		variations: [
			{
				name: 'Post',
				dimensions: {
					width: 808,
					height: 632,
				},
			},
		],
	},
	{
		name: 'LinkedIn',
		variations: [
			{
				name: 'Post',
				dimensions: {
					width: 808,
					height: 632,
				},
			},
		],
	},
	{
		name: 'Pinterest',
		variations: [
			{
				name: 'Post',
				dimensions: {
					width: 808,
					height: 632,
				},
			},
		],
	},
	{
		name: 'Product Hunt',
		variations: [
			{
				name: 'Post',
				dimensions: {
					width: 808,
					height: 632,
				},
			},
		],
	},
	{
		name: 'Snapchat',
		variations: [
			{
				name: 'Post',
				dimensions: {
					width: 808,
					height: 632,
				},
			},
		],
	},
	{
		name: 'Twitter',
		variations: [
			{
				name: 'Post',
				dimensions: {
					width: 808,
					height: 632,
				},
			},
		],
	},
	{
		name: 'Tik Tok',
		variations: [
			{
				name: 'Post',
				dimensions: {
					width: 808,
					height: 632,
				},
			},
		],
	},
	{
		name: 'Youtube',
		variations: [
			{
				name: 'Post',
				dimensions: {
					width: 808,
					height: 632,
				},
			},
		],
	},
]

export const getBrand = (name: string) => {
	return brands.find((brand: any) => brand.name === name)
}

export const getBrandNames = () => {
	return brands.map((brand) => brand.name)
}

export const getBrandvariations = (brand: string) => {
	const brandObj = getBrand(brand) || ({} as any)
	return brandObj.variations.map((type: {name: any}) => type.name)
}

export const getBrandTypeDimensions = (brand: any, type: any) => {
	const brandObj = getBrand(brand) || ({} as any)
	console.log(brandObj)
	const typeObj = brandObj.variations.find((t: any) => t.name === type)
	console.log(typeObj)
	return typeObj.dimensions
}
