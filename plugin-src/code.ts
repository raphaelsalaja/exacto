import { getBrandNames, getBrandTypes, getBrandTypeDimensions } from "./brands.js";

interface ParameterValues {
  [key: string]: any;
}
// The 'input' event listens for text change in the Quick Actions box after a plugin is 'Tabbed' into.
figma.parameters.on("input", ({ query, key, result, parameters }: ParameterInputEvent) => {
  switch (key) {
    case "brand":
      result.setSuggestions(getBrandNames());
      break;
    case "type":
      result.setSuggestions(getBrandTypes(parameters.brand));
      break;
    case "placement":
      result.setSuggestions(["New Page", "Current Page"]);
      break;
    default:
      return;
  }
});

// When the user presses Enter after inputting all parameters, the 'run' event is fired.
figma.on("run", ({ command, parameters }: RunEvent) => {
  console.clear();
  const brand = parameters.brand;
  const type = parameters.type;
  const dimensions = getBrandTypeDimensions(brand, type);
  const placement = parameters.placement;
  const page = placement === "New Page" ? figma.createPage() : figma.currentPage;

  const frame = figma.createFrame();
  frame.x = 0;
  frame.y = 0;
  frame.name = `${brand} ${type}`;

  frame.resize(dimensions.width, dimensions.height);

  page.appendChild(frame);
  figma.currentPage = page;
  // name the page after the brand
  page.name = ` ↳ ${brand}`;
  figma.closePlugin();
});
