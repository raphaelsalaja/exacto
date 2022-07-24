(() => {
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // node_modules/@create-figma-plugin/utilities/lib/events.js
  function on(name, handler) {
    const id = `${currentId}`;
    currentId += 1;
    eventHandlers[id] = { handler, name };
    return function() {
      delete eventHandlers[id];
    };
  }
  function once(name, handler) {
    let done = false;
    return on(name, function(...args) {
      if (done === true) {
        return;
      }
      done = true;
      handler(...args);
    });
  }
  function invokeEventHandler(name, args) {
    for (const id in eventHandlers) {
      if (eventHandlers[id].name === name) {
        eventHandlers[id].handler.apply(null, args);
      }
    }
  }
  var eventHandlers, currentId;
  var init_events = __esm({
    "node_modules/@create-figma-plugin/utilities/lib/events.js"() {
      eventHandlers = {};
      currentId = 0;
      if (typeof window === "undefined") {
        figma.ui.onmessage = function([name, ...args]) {
          invokeEventHandler(name, args);
        };
      } else {
        window.onmessage = function(event) {
          const [name, ...args] = event.data.pluginMessage;
          invokeEventHandler(name, args);
        };
      }
    }
  });

  // node_modules/@create-figma-plugin/utilities/lib/settings.js
  async function saveSettingsAsync(settings, settingsKey = DEFAULT_SETTINGS_KEY) {
    await figma.clientStorage.setAsync(settingsKey, settings);
  }
  var DEFAULT_SETTINGS_KEY;
  var init_settings = __esm({
    "node_modules/@create-figma-plugin/utilities/lib/settings.js"() {
      DEFAULT_SETTINGS_KEY = "settings";
    }
  });

  // node_modules/@create-figma-plugin/utilities/lib/ui.js
  function showUI(options, data) {
    if (typeof __html__ === "undefined") {
      throw new Error("No UI defined");
    }
    const html = `<div id="create-figma-plugin"></div><script>document.body.classList.add('theme-${figma.editorType}');const __FIGMA_COMMAND__='${typeof figma.command === "undefined" ? "" : figma.command}';const __SHOW_UI_DATA__=${JSON.stringify(typeof data === "undefined" ? {} : data)};${__html__}<\/script>`;
    figma.showUI(html, __spreadProps(__spreadValues({}, options), {
      themeColors: typeof options.themeColors === "undefined" ? true : options.themeColors
    }));
  }
  var init_ui = __esm({
    "node_modules/@create-figma-plugin/utilities/lib/ui.js"() {
    }
  });

  // node_modules/@create-figma-plugin/utilities/lib/index.js
  var init_lib = __esm({
    "node_modules/@create-figma-plugin/utilities/lib/index.js"() {
      init_events();
      init_settings();
      init_ui();
    }
  });

  // src/data/brands.ts
  var brands;
  var init_brands = __esm({
    "src/data/brands.ts"() {
      "use strict";
      brands = [
        {
          name: "Behance",
          variations: [
            {
              name: "Thumbnail",
              dimensions: {
                width: 808,
                height: 632
              }
            },
            {
              name: "Post",
              dimensions: {
                width: 1400,
                height: 2800
              }
            }
          ]
        },
        {
          name: "Chrome Webstore",
          variations: [
            {
              name: "Post",
              dimensions: {
                width: 808,
                height: 632
              }
            }
          ]
        },
        {
          name: "Dribbble",
          variations: [
            {
              name: "Post",
              dimensions: {
                width: 808,
                height: 632
              }
            }
          ]
        },
        {
          name: "Discord",
          variations: [
            {
              name: "Post",
              dimensions: {
                width: 808,
                height: 632
              }
            }
          ]
        },
        {
          name: "Facebook",
          variations: [
            {
              name: "Post",
              dimensions: {
                width: 808,
                height: 632
              }
            }
          ]
        },
        {
          name: "Github",
          variations: [
            {
              name: "Post",
              dimensions: {
                width: 808,
                height: 632
              }
            }
          ]
        },
        {
          name: "Instagram",
          variations: [
            {
              name: "Post",
              dimensions: {
                width: 808,
                height: 632
              }
            }
          ]
        },
        {
          name: "LinkedIn",
          variations: [
            {
              name: "Post",
              dimensions: {
                width: 808,
                height: 632
              }
            }
          ]
        },
        {
          name: "Pinterest",
          variations: [
            {
              name: "Post",
              dimensions: {
                width: 808,
                height: 632
              }
            }
          ]
        },
        {
          name: "Product Hunt",
          variations: [
            {
              name: "Post",
              dimensions: {
                width: 808,
                height: 632
              }
            }
          ]
        },
        {
          name: "Snapchat",
          variations: [
            {
              name: "Post",
              dimensions: {
                width: 808,
                height: 632
              }
            }
          ]
        },
        {
          name: "Twitter",
          variations: [
            {
              name: "Post",
              dimensions: {
                width: 808,
                height: 632
              }
            }
          ]
        },
        {
          name: "Tik Tok",
          variations: [
            {
              name: "Post",
              dimensions: {
                width: 808,
                height: 632
              }
            }
          ]
        },
        {
          name: "Youtube",
          variations: [
            {
              name: "Post",
              dimensions: {
                width: 808,
                height: 632
              }
            }
          ]
        }
      ];
    }
  });

  // src/main.ts
  var main_exports = {};
  __export(main_exports, {
    default: () => main_default
  });
  async function main_default() {
    once("CLOSE_UI", function() {
      figma.closePlugin();
    });
    once("SUBMIT", async function(settings) {
      await saveSettingsAsync(settings);
      console.clear();
      const checkedBrands = Object.keys(settings).filter((key) => settings[key] === true);
      figma.loadFontAsync({ family: "Inter", style: "Regular" }).then(() => {
        for (const brand of brands) {
          if (checkedBrands.includes(brand.name)) {
            console.log(`${brand.name} is enabled`);
            const main_container = figma.createFrame();
            main_container.name = brand.name;
            main_container.layoutMode = "VERTICAL";
            main_container.itemSpacing = 64;
            main_container.paddingLeft = 0;
            main_container.paddingRight = 0;
            main_container.fills = [];
            main_container.counterAxisSizingMode = "AUTO";
            const heading_frame = figma.createFrame();
            heading_frame.name = "Heading";
            heading_frame.layoutMode = "VERTICAL";
            heading_frame.itemSpacing = 32;
            heading_frame.paddingLeft = 0;
            heading_frame.paddingRight = 0;
            heading_frame.fills = [];
            heading_frame.counterAxisSizingMode = "AUTO";
            const heading = figma.createText();
            heading.name = brand.name;
            heading.characters = brand.name;
            heading.fontSize = 64;
            const sections_frame = figma.createFrame();
            sections_frame.name = "Sections";
            sections_frame.layoutMode = "HORIZONTAL";
            sections_frame.itemSpacing = 128;
            sections_frame.paddingLeft = 0;
            sections_frame.paddingRight = 0;
            sections_frame.fills = [];
            sections_frame.counterAxisSizingMode = "AUTO";
            for (const variation of brand.variations) {
              const section = figma.createFrame();
              section.name = "Section";
              section.layoutMode = "VERTICAL";
              section.itemSpacing = 64;
              section.paddingLeft = 0;
              section.paddingRight = 0;
              section.fills = [];
              section.counterAxisSizingMode = "AUTO";
              const section_heading = figma.createText();
              section_heading.name = variation.name;
              section_heading.characters = variation.name;
              section_heading.fontSize = 64;
              const frame = figma.createFrame();
              frame.name = variation.name;
              frame.resize(variation.dimensions.width, variation.dimensions.height);
              heading_frame.appendChild(heading);
              section.appendChild(section_heading);
              section.appendChild(frame);
              sections_frame.appendChild(section);
              main_container.appendChild(heading_frame);
              main_container.appendChild(sections_frame);
            }
          }
        }
      }).finally(() => {
        figma.closePlugin();
      });
    });
    showUI({ width: 240, title: "Social Media Framework Companion", height: 400 });
  }
  var init_main = __esm({
    "src/main.ts"() {
      "use strict";
      init_lib();
      init_brands();
    }
  });

  // <stdin>
  var modules = { "src/main.ts--default": (init_main(), __toCommonJS(main_exports))["default"] };
  var commandId = true ? "src/main.ts--default" : figma.command;
  modules[commandId]();
})();
