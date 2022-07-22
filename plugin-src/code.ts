import { formatSuccessMessage, getDocumentUseCount, incrementDocumentUseCount } from "../node_modules/@create-figma-plugin/utilities/lib/index.js";
import { getBrandNames, getBrandTypeDimensions, getBrandTypes } from "./data/brands.js";
import { support } from "./components/support";

interface ParameterValues {
  [key: string]: any;
}

figma.parameters.on("input", ({ key, result, parameters }: ParameterInputEvent) => {
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

figma.on("run", ({ parameters }: RunEvent) => {
  parameters = parameters as ParameterValues;
  incrementDocumentUseCount();
  console.clear();

  const page = parameters.placement === "New Page" ? figma.createPage() : figma.currentPage;

  page.appendChild(createFrameworkFrame(parameters.brand, parameters.type));
  figma.currentPage = page;
  page.name = ` ↳ ${parameters.brand} ${parameters.type}`;

  console.log(getDocumentUseCount());

  if (getDocumentUseCount() > 1) {
    figma.showUI(__html__, { themeColors: true, height: 300 });

    figma.ui.onmessage = (msg) => {
      if (msg.type === "create-rectangles") {
        const nodes = [];

        for (let i = 0; i < msg.count; i++) {
          const rect = figma.createRectangle();
          rect.x = i * 150;
          rect.fills = [{ type: "SOLID", color: { r: 1, g: 0.5, b: 0 } }];
          figma.currentPage.appendChild(rect);
          nodes.push(rect);
        }

        figma.currentPage.selection = nodes;
        figma.viewport.scrollAndZoomIntoView(nodes);
      }

      figma.closePlugin();
    };
  }
});

function createFrameworkFrame(brand: string, type: string, dimensions = getBrandTypeDimensions(brand, type)) {
  const frame = figma.createFrame();
  frame.resize(dimensions.width, dimensions.height);
  frame.name = `${brand} ${type}`;
  return frame;
}
