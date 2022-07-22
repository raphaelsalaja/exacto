export const support = () => {
  const supportFrame = figma.createFrame();
  supportFrame.name = "Hello There 👋";
  supportFrame.appendChild(support);
  supportFrame.layoutMode = "VERTICAL";
  supportFrame.primaryAxisSizingMode = "AUTO";
  supportFrame.clipsContent = false;
  supportFrame.fills = [
    {
      type: "SOLID",
      color: { r: 0.1098039216, g: 0.1098039216, b: 0.1176470588 },
    },
  ];
};
