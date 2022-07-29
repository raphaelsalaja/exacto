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

  // node_modules/@create-figma-plugin/utilities/lib/monetization/document-use-count.js
  function getDocumentUseCount(key = DEFAULT_KEY) {
    const value = figma.root.getPluginData(key);
    if (value === "") {
      return 0;
    }
    const pluginData = JSON.parse(value);
    return pluginData.useCount;
  }
  function incrementDocumentUseCount(key = DEFAULT_KEY) {
    const useCount = getDocumentUseCount(key);
    const pluginData = {
      useCount: useCount + 1
    };
    figma.root.setPluginData(key, JSON.stringify(pluginData));
    return pluginData.useCount;
  }
  var DEFAULT_KEY;
  var init_document_use_count = __esm({
    "node_modules/@create-figma-plugin/utilities/lib/monetization/document-use-count.js"() {
      DEFAULT_KEY = "documentUseCount";
    }
  });

  // node_modules/@create-figma-plugin/utilities/lib/node/get-nodes/get-selected-nodes-or-all-nodes.js
  function getSelectedNodesOrAllNodes() {
    const selectedNodes = figma.currentPage.selection;
    if (selectedNodes.length > 0) {
      return selectedNodes.slice();
    }
    return figma.currentPage.children.slice();
  }
  var init_get_selected_nodes_or_all_nodes = __esm({
    "node_modules/@create-figma-plugin/utilities/lib/node/get-nodes/get-selected-nodes-or-all-nodes.js"() {
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

  // node_modules/@create-figma-plugin/utilities/lib/string/format-message.js
  function formatSuccessMessage(message) {
    return `${CHECK} ${SPACE} ${message}`;
  }
  var CHECK, SPACE;
  var init_format_message = __esm({
    "node_modules/@create-figma-plugin/utilities/lib/string/format-message.js"() {
      CHECK = "\u2714";
      SPACE = "\xA0";
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
      init_document_use_count();
      init_get_selected_nodes_or_all_nodes();
      init_settings();
      init_format_message();
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
          ],
          fill: [
            {
              type: "SOLID",
              color: { r: 0.09019608050584793, g: 0.4117647111415863, b: 1 }
            }
          ]
        },
        {
          name: "ChromeWebstore",
          variations: [
            {
              name: "Icon",
              dimensions: {
                width: 128,
                height: 128
              }
            },
            {
              name: "Promo Tile Small",
              dimensions: {
                width: 440,
                height: 280
              }
            },
            {
              name: "Promo Tile Medium",
              dimensions: {
                width: 920,
                height: 680
              }
            },
            {
              name: "Promo Tile Large",
              dimensions: {
                width: 1400,
                height: 560
              }
            },
            {
              name: "Screenshot Small",
              dimensions: {
                width: 640,
                height: 400
              }
            },
            {
              name: "Screenshot Large",
              dimensions: {
                width: 1280,
                height: 800
              }
            }
          ],
          fill: [
            {
              type: "SOLID",
              visible: true,
              opacity: 1,
              blendMode: "NORMAL",
              color: {
                r: 0.9372549057006836,
                g: 0.24705882370471954,
                b: 0.21176470816135406
              }
            }
          ]
        },
        {
          name: "Dribbble",
          variations: [
            {
              name: "Shot",
              dimensions: {
                width: 1600,
                height: 1080
              }
            },
            {
              name: "Clip",
              dimensions: {
                width: 1600,
                height: 1200
              }
            }
          ],
          fill: [
            {
              type: "SOLID",
              visible: true,
              opacity: 1,
              blendMode: "NORMAL",
              color: {
                r: 0.9176470637321472,
                g: 0.2980392277240753,
                b: 0.5372549295425415
              }
            }
          ]
        },
        {
          name: "Discord",
          variations: [
            {
              name: "Profile Photo",
              dimensions: {
                width: 1600,
                height: 1200
              }
            },
            {
              name: "Emoji Small",
              dimensions: {
                width: 1600,
                height: 1200
              }
            },
            {
              name: "Emoji Large",
              dimensions: {
                width: 1600,
                height: 1200
              }
            },
            {
              name: "Server Logo",
              dimensions: {
                width: 512,
                height: 512
              }
            },
            {
              name: "Server Banner",
              dimensions: {
                width: 960,
                height: 540
              }
            },
            {
              name: "Server Invite Splash",
              dimensions: {
                width: 1920,
                height: 1080
              }
            }
          ],
          fill: [
            {
              type: "SOLID",
              visible: true,
              opacity: 1,
              blendMode: "NORMAL",
              color: {
                r: 0.3450980484485626,
                g: 0.3960784375667572,
                b: 0.9490196108818054
              }
            }
          ]
        },
        {
          name: "Facebook",
          variations: [
            {
              name: "Profile Photo",
              dimensions: {
                width: 820,
                height: 312
              }
            },
            {
              name: "Image Ad",
              dimensions: {
                width: 1080,
                height: 1350
              }
            },
            {
              name: "Video Ad",
              dimensions: {
                width: 1200,
                height: 628
              }
            },
            {
              name: "Cover Image",
              dimensions: {
                width: 820,
                height: 312
              }
            },
            {
              name: "Event Cover Image",
              dimensions: {
                width: 1920,
                height: 1080
              }
            }
          ],
          fill: [
            {
              type: "SOLID",
              visible: true,
              opacity: 1,
              blendMode: "NORMAL",
              color: {
                r: 0.0941176488995552,
                g: 0.46666666865348816,
                b: 0.9490196108818054
              }
            }
          ]
        },
        {
          name: "Figma",
          variations: [
            {
              name: "Icon",
              dimensions: {
                width: 128,
                height: 128
              }
            },
            {
              name: "Cover Art",
              dimensions: {
                width: 1920,
                height: 960
              }
            }
          ],
          fill: [
            {
              type: "SOLID",
              visible: true,
              opacity: 1,
              blendMode: "NORMAL",
              color: { r: 0.6352941393852234, g: 0.3490196168422699, b: 1 }
            }
          ]
        },
        {
          name: "Github",
          variations: [
            {
              name: "Social Preview",
              dimensions: {
                width: 1280,
                height: 640
              }
            }
          ],
          fill: [
            {
              type: "SOLID",
              visible: true,
              opacity: 1,
              blendMode: "NORMAL",
              color: {
                r: 0.09019608050584793,
                g: 0.08235294371843338,
                b: 0.08235294371843338
              }
            }
          ]
        },
        {
          name: "Gumroad",
          variations: [
            {
              name: "Thumbnail",
              dimensions: {
                width: 600,
                height: 600
              }
            },
            {
              name: "Cover",
              dimensions: {
                width: 1280,
                height: 720
              }
            }
          ],
          fill: [
            {
              type: "SOLID",
              visible: true,
              opacity: 1,
              blendMode: "NORMAL",
              color: {
                r: 0.09019608050584793,
                g: 0.08235294371843338,
                b: 0.08235294371843338
              }
            }
          ]
        },
        {
          name: "Instagram",
          variations: [
            {
              name: "Post Portrait",
              dimensions: {
                width: 1080,
                height: 1350
              }
            },
            {
              name: "Post Wide",
              dimensions: {
                width: 1920,
                height: 1080
              }
            },
            {
              name: "Post Square",
              dimensions: {
                width: 1080,
                height: 1080
              }
            },
            {
              name: "Story",
              dimensions: {
                width: 1080,
                height: 1920
              }
            }
          ],
          fill: [
            {
              type: "GRADIENT_LINEAR",
              visible: true,
              opacity: 1,
              blendMode: "NORMAL",
              gradientStops: [
                {
                  color: {
                    r: 0.19999998807907104,
                    g: 0.30992352962493896,
                    b: 1,
                    a: 1
                  },
                  position: 0.03430844843387604
                },
                {
                  color: {
                    r: 0.7860270738601685,
                    g: 0.2215278148651123,
                    b: 0.9666666388511658,
                    a: 1
                  },
                  position: 0.2708333432674408
                },
                {
                  color: {
                    r: 1,
                    g: 0.12083333730697632,
                    b: 0.47738441824913025,
                    a: 1
                  },
                  position: 0.5104166865348816
                },
                {
                  color: {
                    r: 1,
                    g: 0.5200387239456177,
                    b: 0.20416665077209473,
                    a: 1
                  },
                  position: 0.7447916865348816
                },
                {
                  color: { r: 1, g: 0.741025447845459, b: 0.15833336114883423, a: 1 },
                  position: 1
                }
              ],
              gradientTransform: [
                [-0.5012341737747192, 0.48092252016067505, 0.519077479839325],
                [-0.42700350284576416, -0.4422043263912201, 0.9422042965888977]
              ]
            }
          ]
        },
        {
          name: "LinkedIn",
          variations: [
            {
              name: "Banner",
              dimensions: {
                width: 1128,
                height: 191
              }
            },
            {
              name: "Square",
              dimensions: {
                width: 1080,
                height: 1080
              }
            },
            {
              name: "Portrait",
              dimensions: {
                width: 1920,
                height: 1080
              }
            }
          ],
          fill: [
            {
              type: "SOLID",
              visible: true,
              opacity: 1,
              blendMode: "NORMAL",
              color: {
                r: 0.03921568766236305,
                g: 0.4000000059604645,
                b: 0.7607843279838562
              }
            }
          ]
        },
        {
          name: "Pinterest",
          variations: [
            {
              name: "Sqaure Post",
              dimensions: {
                width: 1e3,
                height: 1e3
              }
            },
            {
              name: "Standard Post",
              dimensions: {
                width: 1e3,
                height: 1500
              }
            },
            {
              name: "Long Post",
              dimensions: {
                width: 1e3,
                height: 2100
              }
            }
          ],
          fill: [
            {
              type: "SOLID",
              visible: true,
              opacity: 1,
              blendMode: "NORMAL",
              color: {
                r: 0.7960784435272217,
                g: 0.12156862765550613,
                b: 0.15294118225574493
              }
            }
          ]
        },
        {
          name: "ProductHunt",
          variations: [
            {
              name: "Thumbnail",
              dimensions: {
                width: 240,
                height: 240
              }
            },
            {
              name: "Gallery",
              dimensions: {
                width: 1270,
                height: 760
              }
            }
          ],
          fill: [
            {
              type: "SOLID",
              color: {
                r: 0.8274509906768799,
                g: 0.30588236451148987,
                b: 0.1568627506494522
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
                width: 1080,
                height: 1920
              }
            }
          ],
          fill: [{ type: "SOLID", color: { r: 1, g: 0.9882352948188782, b: 0 } }]
        },
        {
          name: "Twitter",
          variations: [
            {
              name: "Cover",
              dimensions: {
                width: 1500,
                height: 500
              }
            },
            {
              name: "Post",
              dimensions: {
                width: 1024,
                height: 512
              }
            }
          ],
          fill: [
            {
              type: "SOLID",
              color: {
                r: 0.11372549086809158,
                g: 0.6078431606292725,
                b: 0.9411764740943909
              }
            }
          ]
        },
        {
          name: "Twitch",
          variations: [
            {
              name: "Emotes",
              dimensions: {
                width: 32,
                height: 32
              }
            },
            {
              name: "Badges",
              dimensions: {
                width: 72,
                height: 72
              }
            },
            {
              name: "Panels",
              dimensions: {
                width: 320,
                height: 100
              }
            },
            {
              name: "Profile Photo",
              dimensions: {
                width: 256,
                height: 256
              }
            },
            {
              name: "Overlay",
              dimensions: {
                width: 1920,
                height: 1080
              }
            },
            {
              name: "Thumbnail",
              dimensions: {
                width: 1280,
                height: 720
              }
            },
            {
              name: "Profile Banner",
              dimensions: {
                width: 1200,
                height: 480
              }
            },
            {
              name: "Profile Banner",
              dimensions: {
                width: 1920,
                height: 480
              }
            }
          ],
          fill: [
            {
              type: "SOLID",
              visible: true,
              opacity: 1,
              blendMode: "NORMAL",
              color: {
                r: 0.3529411852359772,
                g: 0.24313725531101227,
                b: 0.5215686559677124
              }
            }
          ]
        },
        {
          name: "TikTok",
          variations: [
            {
              name: "Post",
              dimensions: {
                width: 1080,
                height: 1920
              }
            }
          ],
          fill: [
            {
              type: "GRADIENT_LINEAR",
              visible: true,
              opacity: 1,
              blendMode: "NORMAL",
              gradientStops: [
                {
                  color: {
                    r: 0.4117647111415863,
                    g: 0.7882353067398071,
                    b: 0.8156862854957581,
                    a: 1
                  },
                  position: 0
                },
                {
                  color: {
                    r: 0.9333333373069763,
                    g: 0.11372549086809158,
                    b: 0.32156863808631897,
                    a: 1
                  },
                  position: 1
                }
              ],
              gradientTransform: [
                [1, 2921014541357181e-24, -14605072706785904e-25],
                [16653345369377348e-32, 0.13425791263580322, 0.4328710436820984]
              ]
            }
          ]
        },
        {
          name: "Youtube",
          variations: [
            {
              name: "Profile Photo",
              dimensions: {
                width: 800,
                height: 800
              }
            },
            {
              name: "Thumbnail",
              dimensions: {
                width: 1280,
                height: 720
              }
            },
            {
              name: "Banner",
              dimensions: {
                width: 2560,
                height: 1440
              }
            }
          ],
          fill: [
            {
              type: "SOLID",
              visible: true,
              opacity: 1,
              blendMode: "NORMAL",
              color: { r: 1, g: 0, b: 0 }
            }
          ]
        }
      ];
    }
  });

  // src/components/misc/youtube.ts
  function youtube(child) {
    const font = async () => {
      figma.loadFontAsync({ family: "Inter", style: "Bold" });
    };
    font().then(() => {
      const main = figma.createFrame();
      main.resize(2560, 1440);
      main.primaryAxisSizingMode = "AUTO";
      main.name = "Youtube | Banner | 2560x1440";
      main.relativeTransform = [
        [1, 0, -1280],
        [0, 1, -720.4005126953]
      ];
      main.x = 0;
      main.y = 0;
      main.exportSettings = [{ format: "PNG", suffix: "", contentsOnly: true, constraint: { type: "SCALE", value: 1 } }];
      main.fills = [];
      main.guides = [
        { axis: "X", offset: 2053 },
        { axis: "X", offset: 354 },
        { axis: "X", offset: 508 },
        { axis: "X", offset: 2208 },
        { axis: "Y", offset: 509 },
        { axis: "Y", offset: 932 }
      ];
      const tvSafeArea = figma.createRectangle();
      main.appendChild(tvSafeArea);
      tvSafeArea.resize(2560, 1440);
      tvSafeArea.name = "TV SAFE AREA";
      tvSafeArea.fills = [{ type: "SOLID", visible: true, opacity: 1, blendMode: "NORMAL", color: { r: 0.8916666507720947, g: 0.8916666507720947, b: 0.8916666507720947 } }];
      const tvSafeArea_text = figma.createText();
      main.appendChild(tvSafeArea_text);
      tvSafeArea_text.resize(89, 38);
      tvSafeArea_text.name = "TV SAFE AREA";
      tvSafeArea_text.fills = [{ type: "SOLID", visible: true, opacity: 1, blendMode: "NORMAL", color: { r: 1, g: 0, b: 0 } }];
      tvSafeArea_text.relativeTransform = [
        [1, 0, 27],
        [0, 1, 40]
      ];
      tvSafeArea_text.x = 27;
      tvSafeArea_text.y = 40;
      tvSafeArea_text.fontName = { family: "Inter", style: "Bold" };
      tvSafeArea_text.fontSize = 16;
      tvSafeArea_text.characters = "TV \nSAFE AREA";
      tvSafeArea_text.textAutoResize = "WIDTH_AND_HEIGHT";
      const desktopSafeArea = figma.createRectangle();
      main.appendChild(desktopSafeArea);
      desktopSafeArea.resize(2560, 423);
      desktopSafeArea.name = "DESKTOP SAFE AREA";
      desktopSafeArea.fills = [{ type: "SOLID", visible: true, opacity: 1, blendMode: "NORMAL", color: { r: 0.7733072638511658, g: 0.7733072638511658, b: 0.7733072638511658 } }];
      desktopSafeArea.relativeTransform = [
        [1, 0, 0],
        [0, 1, 509]
      ];
      desktopSafeArea.y = 509;
      const desktopSafeArea_text = figma.createText();
      main.appendChild(desktopSafeArea_text);
      desktopSafeArea_text.resize(89, 38);
      desktopSafeArea_text.name = "DESKTOP SAFE AREA";
      desktopSafeArea_text.fills = [{ type: "SOLID", visible: true, opacity: 1, blendMode: "NORMAL", color: { r: 1, g: 0, b: 0 } }];
      desktopSafeArea_text.relativeTransform = [
        [1, 0, 27],
        [0, 1, 540]
      ];
      desktopSafeArea_text.x = 27;
      desktopSafeArea_text.y = 540;
      desktopSafeArea_text.fontName = { family: "Inter", style: "Bold" };
      desktopSafeArea_text.fontSize = 16;
      desktopSafeArea_text.characters = "DESKTOP \nSAFE AREA";
      desktopSafeArea_text.textAutoResize = "WIDTH_AND_HEIGHT";
      const tabletSafeArea = figma.createRectangle();
      main.appendChild(tabletSafeArea);
      tabletSafeArea.resize(1855, 423);
      tabletSafeArea.name = "TABLET SAFE AREA";
      tabletSafeArea.fills = [{ type: "SOLID", visible: true, opacity: 1, blendMode: "NORMAL", color: { r: 0.5833333134651184, g: 0.5833333134651184, b: 0.5833333134651184 } }];
      tabletSafeArea.relativeTransform = [
        [1, 0, 353],
        [0, 1, 509]
      ];
      tabletSafeArea.x = 353;
      tabletSafeArea.y = 509;
      const tabletSafeArea_text = figma.createText();
      main.appendChild(tabletSafeArea_text);
      tabletSafeArea_text.resize(89, 38);
      tabletSafeArea_text.name = "TABLET SAFE AREA";
      tabletSafeArea_text.fills = [{ type: "SOLID", visible: true, opacity: 1, blendMode: "NORMAL", color: { r: 1, g: 0, b: 0 } }];
      tabletSafeArea_text.relativeTransform = [
        [1, 0, 378],
        [0, 1, 543]
      ];
      tabletSafeArea_text.x = 378;
      tabletSafeArea_text.y = 543;
      tabletSafeArea_text.fontName = { family: "Inter", style: "Bold" };
      tabletSafeArea_text.characters = "TABLET\nSAFE AREA";
      tabletSafeArea_text.fontSize = 16;
      tabletSafeArea_text.textAutoResize = "WIDTH_AND_HEIGHT";
      const mobileSafeArea = figma.createRectangle();
      main.appendChild(mobileSafeArea);
      mobileSafeArea.resize(1545, 423);
      mobileSafeArea.name = "MOBILE SAFE AREA";
      mobileSafeArea.fills = [{ type: "SOLID", visible: true, opacity: 1, blendMode: "NORMAL", color: { r: 0.4416666626930237, g: 0.4416666626930237, b: 0.4416666626930237 } }];
      mobileSafeArea.relativeTransform = [
        [1, 0, 508],
        [0, 1, 509]
      ];
      mobileSafeArea.x = 508;
      mobileSafeArea.y = 509;
      const mobileSafeArea_text = figma.createText();
      main.appendChild(mobileSafeArea_text);
      mobileSafeArea_text.resize(89, 38);
      mobileSafeArea_text.name = "MOBILE SAFE AREA";
      mobileSafeArea_text.fills = [{ type: "SOLID", visible: true, opacity: 1, blendMode: "NORMAL", color: { r: 1, g: 0, b: 0 } }];
      mobileSafeArea_text.relativeTransform = [
        [1, 0, 540],
        [0, 1, 543]
      ];
      mobileSafeArea_text.x = 540;
      mobileSafeArea_text.y = 543;
      mobileSafeArea_text.fontName = { family: "Inter", style: "Bold" };
      mobileSafeArea_text.characters = "MOBILE\nSAFE AREA";
      mobileSafeArea_text.fontSize = 16;
      mobileSafeArea_text.textAutoResize = "WIDTH_AND_HEIGHT";
      const group = figma.group([tvSafeArea, tvSafeArea_text, desktopSafeArea, desktopSafeArea_text, tabletSafeArea, tabletSafeArea_text, mobileSafeArea, mobileSafeArea_text], main);
      group.name = "Guide";
      group.visible = true;
      group.locked = false;
      group.opacity = 1;
      group.blendMode = "PASS_THROUGH";
      group.isMask = false;
      group.effects = [];
      group.layoutAlign = "INHERIT";
      group.constrainProportions = false;
      group.layoutGrow = 0;
      group.exportSettings = [];
      group.reactions = [];
      group.expanded = true;
      main.locked = true;
      child.appendChild(main);
    });
  }
  var init_youtube = __esm({
    "src/components/misc/youtube.ts"() {
      "use strict";
    }
  });

  // src/components/misc/figma.ts
  function _figma(child) {
    const font = async () => {
      figma.loadFontAsync({ family: "Inter", style: "Bold" });
    };
    font().then(() => {
      const main = figma.createFrame();
      main.resize(1920, 960);
      main.primaryAxisSizingMode = "AUTO";
      main.name = "Figma | Cover Art | 1920x960";
      main.relativeTransform = [
        [1, 0, 0],
        [0, 1, 244]
      ];
      main.y = 244;
      main.fills = [{ type: "SOLID", visible: true, opacity: 1, blendMode: "NORMAL", color: { r: 0.8916666507720947, g: 0.8916666507720947, b: 0.8916666507720947 } }];
      main.backgrounds = [{ type: "SOLID", visible: true, opacity: 1, blendMode: "NORMAL", color: { r: 0.8916666507720947, g: 0.8916666507720947, b: 0.8916666507720947 } }];
      const safeArea = figma.createRectangle();
      main.appendChild(safeArea);
      safeArea.resize(1600, 960);
      safeArea.name = "SAFE AREA";
      safeArea.fills = [{ type: "SOLID", visible: true, opacity: 1, blendMode: "NORMAL", color: { r: 0.7733072638511658, g: 0.7733072638511658, b: 0.7733072638511658 } }];
      safeArea.relativeTransform = [
        [1, 0, 160],
        [0, 1, 0]
      ];
      safeArea.x = 160;
      const safeArea_text = figma.createText();
      main.appendChild(safeArea_text);
      safeArea_text.resize(92, 38);
      safeArea_text.name = "COVER ART SAFE AREA";
      safeArea_text.fills = [{ type: "SOLID", visible: true, opacity: 1, blendMode: "NORMAL", color: { r: 0.6352941393852234, g: 0.3490196168422699, b: 1 } }];
      safeArea_text.relativeTransform = [
        [1, 0, 184],
        [0, 1, 16]
      ];
      safeArea_text.x = 184;
      safeArea_text.y = 16;
      safeArea_text.fontName = { family: "Inter", style: "Bold" };
      safeArea_text.characters = "COVER ART\nSAFE AREA";
      safeArea_text.fontSize = 16;
      safeArea_text.textAutoResize = "WIDTH_AND_HEIGHT";
      const group = figma.group([safeArea, safeArea_text], main);
      group.name = "Guide";
      group.visible = true;
      group.locked = false;
      group.opacity = 1;
      group.blendMode = "PASS_THROUGH";
      group.isMask = false;
      group.effects = [];
      group.layoutAlign = "INHERIT";
      group.constrainProportions = false;
      group.layoutGrow = 0;
      group.exportSettings = [];
      group.reactions = [];
      group.expanded = true;
      child.appendChild(main);
    });
  }
  var init_figma = __esm({
    "src/components/misc/figma.ts"() {
      "use strict";
    }
  });

  // src/components/misc/gumroad.ts
  function gumroad(child) {
    const font = async () => {
      figma.loadFontAsync({ family: "Inter", style: "Bold" });
    };
    font().then(() => {
      var general_placeholder_1_b4dc = figma.createPaintStyle();
      general_placeholder_1_b4dc.name = "General/Placeholder/1";
      general_placeholder_1_b4dc.paints = [{ type: "SOLID", visible: true, opacity: 1, blendMode: "NORMAL", color: { r: 0.8916666507720947, g: 0.8916666507720947, b: 0.8916666507720947 } }];
      var brands_gumroad_c1d4 = figma.createPaintStyle();
      brands_gumroad_c1d4.name = "Brands/Gumroad";
      brands_gumroad_c1d4.paints = [{ type: "SOLID", visible: true, opacity: 1, blendMode: "NORMAL", color: { r: 0, g: 0, b: 0 } }];
      var general_placeholder_1_b4dc = figma.createPaintStyle();
      general_placeholder_1_b4dc.name = "General/Placeholder/1";
      general_placeholder_1_b4dc.paints = [{ type: "SOLID", visible: true, opacity: 1, blendMode: "NORMAL", color: { r: 0.8916666507720947, g: 0.8916666507720947, b: 0.8916666507720947 } }];
      var frame_361_1201 = figma.createFrame();
      frame_361_1201.resize(600, 600);
      frame_361_1201.fillStyleId = general_placeholder_1_b4dc.id;
      frame_361_1201.backgroundStyleId = general_placeholder_1_b4dc.id;
      frame_361_1201.name = "Gumroad | Thumbnail | 600x600";
      frame_361_1201.relativeTransform = [
        [1, 0, 0],
        [0, 1, 180]
      ];
      frame_361_1201.y = 180;
      frame_361_1201.exportSettings = [{ format: "PNG", suffix: "", contentsOnly: true, constraint: { type: "SCALE", value: 1 } }];
      frame_361_1201.paddingLeft = 10;
      frame_361_1201.paddingRight = 10;
      frame_361_1201.paddingTop = 10;
      frame_361_1201.paddingBottom = 10;
      frame_361_1201.primaryAxisSizingMode = "FIXED";
      frame_361_1201.clipsContent = false;
      frame_361_1201.expanded = false;
      frame_361_1201.itemSpacing = 10;
      var text_363_1706 = figma.createText();
      frame_361_1201.appendChild(text_363_1706);
      text_363_1706.fillStyleId = brands_gumroad_c1d4.id;
      text_363_1706.resize(575, 76);
      text_363_1706.name = "Your image should be square And at least 600 x 600px";
      text_363_1706.relativeTransform = [
        [1, 0, 24],
        [0, 1, 24]
      ];
      text_363_1706.x = 24;
      text_363_1706.y = 24;
      text_363_1706.fontName = { family: "Inter", style: "Bold" };
      text_363_1706.characters = "Your image should be square\nAnd at least 600 x 600px";
      text_363_1706.fontSize = 32;
      text_363_1706.textCase = "UPPER";
      text_363_1706.textAutoResize = "HEIGHT";
      child.appendChild(frame_361_1201);
    });
  }
  var init_gumroad = __esm({
    "src/components/misc/gumroad.ts"() {
      "use strict";
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
      incrementDocumentUseCount();
      await saveSettingsAsync(settings);
      const font = async () => {
        await figma.loadFontAsync({ family: "Inter", style: "Bold" });
      };
      const checkedBrands = Object.keys(settings).filter((key) => settings[key] === true);
      font().then(() => {
        const component_container = figma.createFrame();
        component_container.name = "Social Media Framework";
        component_container.layoutMode = "HORIZONTAL";
        component_container.itemSpacing = 128;
        component_container.paddingLeft = 0;
        component_container.paddingRight = 0;
        component_container.fills = [];
        component_container.effects = [
          {
            type: "DROP_SHADOW",
            color: { r: 0, g: 0, b: 0, a: 0.1876000016927719 },
            offset: { x: 0, y: 32 },
            radius: 64,
            spread: 0,
            visible: true,
            blendMode: "NORMAL",
            showShadowBehindNode: true
          },
          { type: "DROP_SHADOW", color: { r: 0, g: 0, b: 0, a: 0.25 }, offset: { x: 0, y: 4 }, radius: 4, spread: 0, visible: true, blendMode: "NORMAL", showShadowBehindNode: false }
        ];
        component_container.counterAxisSizingMode = "AUTO";
        for (const brand of brands) {
          if (checkedBrands.includes(brand.name)) {
            const main_container = figma.createFrame();
            main_container.name = brand.name;
            main_container.layoutMode = "VERTICAL";
            main_container.itemSpacing = 64;
            main_container.paddingLeft = 128;
            main_container.paddingRight = 128;
            main_container.paddingTop = 128;
            main_container.paddingBottom = 128;
            main_container.counterAxisSizingMode = "AUTO";
            main_container.cornerRadius = 0;
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
            heading.fontName = { family: "Inter", style: "Bold" };
            heading.fills = brand.fill;
            heading.characters = brand.name;
            heading.fontSize = 128;
            if (brand.name === "ChromeWebstore") {
              heading.characters = "Chrome Webstore";
            }
            if (brand.name === "ProductHunt") {
              heading.characters = "Product Hunt";
            }
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
              section_heading.fontName = { family: "Inter", style: "Bold" };
              section_heading.characters = variation.name;
              section_heading.fontSize = 64;
              section_heading.fills = brand.fill;
              const divider = figma.createFrame();
              divider.name = "Divider";
              divider.layoutMode = "VERTICAL";
              divider.counterAxisSizingMode = "AUTO";
              divider.resize(variation.dimensions.width, 8);
              divider.fills = brand.fill;
              let frame = figma.createFrame();
              frame.name = `${brand.name} | ${variation.name} | ${variation.dimensions.width}x${variation.dimensions.height}`;
              frame.resize(variation.dimensions.width, variation.dimensions.height);
              frame.fills = [{ type: "SOLID", visible: true, opacity: 1, blendMode: "NORMAL", color: { r: 0.8916666507720947, g: 0.8916666507720947, b: 0.8916666507720947 } }];
              heading_frame.appendChild(heading);
              section.appendChild(section_heading);
              section.appendChild(divider);
              if (brand.name == "Youtube" && variation.name == "Banner") {
                frame.remove();
                youtube(section);
              } else if (brand.name == "Figma" && variation.name == "Cover Art") {
                frame.remove();
                _figma(section);
              } else if (brand.name == "Gumroad" && variation.name == "Thumbnail") {
                frame.remove();
                gumroad(section);
              } else {
                section.appendChild(frame);
                frame.exportSettings = [{ format: "PNG", suffix: "", contentsOnly: true, constraint: { type: "SCALE", value: 1 } }];
              }
              sections_frame.appendChild(section);
              main_container.appendChild(heading_frame);
              main_container.appendChild(sections_frame);
            }
            component_container.appendChild(main_container);
          }
        }
        const pages = [];
        for (const page2 of figma.root.children) {
          if (page2.type === "PAGE") {
            pages.push(page2.name);
          }
        }
        if (!pages.includes("\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501")) {
          const div = figma.createPage();
          div.name = "\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501";
          const head = figma.createPage();
          head.name = "Social Media Frameworks";
        }
        const page = figma.createPage();
        figma.currentPage = page;
        page.appendChild(component_container);
        page.name = "    \u21B3 " + checkedBrands.join(", ");
        page.backgrounds = [{ type: "SOLID", visible: true, opacity: 1, blendMode: "NORMAL", color: { r: 0.8, g: 0.8, b: 0.8 } }];
      }).then(() => {
        const nodes = getSelectedNodesOrAllNodes();
        figma.viewport.scrollAndZoomIntoView(nodes);
      }).finally(() => {
        const messages = ["Enjoy \u{1F389}", "Your Frameworks are ready \u{1F389}", "Check my page for the full template \u{1F60E}", "Share it on Twitter \u{1F426}"];
        figma.closePlugin(formatSuccessMessage(messages[Math.floor(Math.random() * messages.length)]));
      });
    });
    showUI({ width: 240, height: 400 });
  }
  var init_main = __esm({
    "src/main.ts"() {
      "use strict";
      init_lib();
      init_brands();
      init_youtube();
      init_figma();
      init_gumroad();
    }
  });

  // <stdin>
  var modules = { "src/main.ts--default": (init_main(), __toCommonJS(main_exports))["default"] };
  var commandId = true ? "src/main.ts--default" : figma.command;
  modules[commandId]();
})();
