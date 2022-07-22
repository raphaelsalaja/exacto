export const brands = [
  {
    name: "Behance",
    types: [
      {
        name: "Thumbnail",
        dimensions: {
          width: 808,
          height: 632,
        },
      },
      {
        name: "Post",
        dimensions: {
          width: 1400,
          height: 2800,
        },
      },
    ],
  },
  {
    name: "Chrome Webstore",
    types: [
      {
        name: "Post",
        dimensions: {
          width: 808,
          height: 632,
        },
      },
    ],
  },
  {
    name: "Dribbble",
    types: [
      {
        name: "Post",
        dimensions: {
          width: 808,
          height: 632,
        },
      },
    ],
  },
  {
    name: "Discord",
    types: [
      {
        name: "Post",
        dimensions: {
          width: 808,
          height: 632,
        },
      },
    ],
  },
  {
    name: "Facebook",
    types: [
      {
        name: "Post",
        dimensions: {
          width: 808,
          height: 632,
        },
      },
    ],
  },
  {
    name: "Github",
    types: [
      {
        name: "Post",
        dimensions: {
          width: 808,
          height: 632,
        },
      },
    ],
  },
  {
    name: "Instagram",
    types: [
      {
        name: "Post",
        dimensions: {
          width: 808,
          height: 632,
        },
      },
    ],
  },
  {
    name: "LinkedIn",
    types: [
      {
        name: "Post",
        dimensions: {
          width: 808,
          height: 632,
        },
      },
    ],
  },
  {
    name: "Pinterest",
    types: [
      {
        name: "Post",
        dimensions: {
          width: 808,
          height: 632,
        },
      },
    ],
  },
  {
    name: "Product Hunt",
    types: [
      {
        name: "Post",
        dimensions: {
          width: 808,
          height: 632,
        },
      },
    ],
  },
  {
    name: "Snapchat",
    types: [
      {
        name: "Post",
        dimensions: {
          width: 808,
          height: 632,
        },
      },
    ],
  },
  {
    name: "Twitter",
    types: [
      {
        name: "Post",
        dimensions: {
          width: 808,
          height: 632,
        },
      },
    ],
  },
  {
    name: "Tik Tok",
    types: [
      {
        name: "Post",
        dimensions: {
          width: 808,
          height: 632,
        },
      },
    ],
  },
  {
    name: "Youtube",
    types: [
      {
        name: "Post",
        dimensions: {
          width: 808,
          height: 632,
        },
      },
    ],
  },
];

export const getBrand = (name: string) => {
  return brands.find((brand: any) => brand.name === name);
};

export const getBrandNames = () => {
  return brands.map((brand) => brand.name);
};

export const getBrandTypes = (brand: string) => {
  const brandObj = getBrand(brand) || ({} as any);
  return brandObj.types.map((type: { name: any }) => type.name);
};

export const getBrandTypeDimensions = (brand: any, type: any) => {
  const brandObj = getBrand(brand) || ({} as any);
  console.log(brandObj);
  const typeObj = brandObj.types.find((t: any) => t.name === type);
  console.log(typeObj);
  return typeObj.dimensions;
};
