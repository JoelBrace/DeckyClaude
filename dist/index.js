var jsxRuntime = {exports: {}};

var reactJsxRuntime_production = {};

/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactJsxRuntime_production;

function requireReactJsxRuntime_production () {
	if (hasRequiredReactJsxRuntime_production) return reactJsxRuntime_production;
	hasRequiredReactJsxRuntime_production = 1;
	var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"),
	  REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
	function jsxProd(type, config, maybeKey) {
	  var key = null;
	  void 0 !== maybeKey && (key = "" + maybeKey);
	  void 0 !== config.key && (key = "" + config.key);
	  if ("key" in config) {
	    maybeKey = {};
	    for (var propName in config)
	      "key" !== propName && (maybeKey[propName] = config[propName]);
	  } else maybeKey = config;
	  config = maybeKey.ref;
	  return {
	    $$typeof: REACT_ELEMENT_TYPE,
	    type: type,
	    key: key,
	    ref: void 0 !== config ? config : null,
	    props: maybeKey
	  };
	}
	reactJsxRuntime_production.Fragment = REACT_FRAGMENT_TYPE;
	reactJsxRuntime_production.jsx = jsxProd;
	reactJsxRuntime_production.jsxs = jsxProd;
	return reactJsxRuntime_production;
}

{
  jsxRuntime.exports = requireReactJsxRuntime_production();
}

var jsxRuntimeExports = jsxRuntime.exports;

// Decky Loader will pass this api in, it's versioned to allow for backwards compatibility.
// @ts-ignore

// Prevents it from being duplicated in output.
const manifest = {"name":"Claude Assistant Plugin"};
const API_VERSION = 2;
const internalAPIConnection = window.__DECKY_SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_deckyLoaderAPIInit;
// Initialize
if (!internalAPIConnection) {
    throw new Error('[@decky/api]: Failed to connect to the loader as as the loader API was not initialized. This is likely a bug in Decky Loader.');
}
// Version 1 throws on version mismatch so we have to account for that here.
let api;
try {
    api = internalAPIConnection.connect(API_VERSION, manifest.name);
}
catch {
    api = internalAPIConnection.connect(1, manifest.name);
    console.warn(`[@decky/api] Requested API version ${API_VERSION} but the running loader only supports version 1. Some features may not work.`);
}
if (api._version != API_VERSION) {
    console.warn(`[@decky/api] Requested API version ${API_VERSION} but the running loader only supports version ${api._version}. Some features may not work.`);
}
const definePlugin = (fn) => {
    return (...args) => {
        // TODO: Maybe wrap this
        return fn(...args);
    };
};

var DefaultContext = {
  color: undefined,
  size: undefined,
  className: undefined,
  style: undefined,
  attr: undefined
};
var IconContext = SP_REACT.createContext && /*#__PURE__*/SP_REACT.createContext(DefaultContext);

var _excluded = ["attr", "size", "title"];
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } } return target; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function Tree2Element(tree) {
  return tree && tree.map((node, i) => /*#__PURE__*/SP_REACT.createElement(node.tag, _objectSpread({
    key: i
  }, node.attr), Tree2Element(node.child)));
}
function GenIcon(data) {
  return props => /*#__PURE__*/SP_REACT.createElement(IconBase, _extends({
    attr: _objectSpread({}, data.attr)
  }, props), Tree2Element(data.child));
}
function IconBase(props) {
  var elem = conf => {
    var {
        attr,
        size,
        title
      } = props,
      svgProps = _objectWithoutProperties(props, _excluded);
    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className) className = conf.className;
    if (props.className) className = (className ? className + " " : "") + props.className;
    return /*#__PURE__*/SP_REACT.createElement("svg", _extends({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className: className,
      style: _objectSpread(_objectSpread({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && /*#__PURE__*/SP_REACT.createElement("title", null, title), props.children);
  };
  return IconContext !== undefined ? /*#__PURE__*/SP_REACT.createElement(IconContext.Consumer, null, conf => elem(conf)) : elem(DefaultContext);
}

// THIS FILE IS AUTO GENERATED
function FaRobot (props) {
  return GenIcon({"attr":{"viewBox":"0 0 640 512"},"child":[{"tag":"path","attr":{"d":"M32,224H64V416H32A31.96166,31.96166,0,0,1,0,384V256A31.96166,31.96166,0,0,1,32,224Zm512-48V448a64.06328,64.06328,0,0,1-64,64H160a64.06328,64.06328,0,0,1-64-64V176a79.974,79.974,0,0,1,80-80H288V32a32,32,0,0,1,64,0V96H464A79.974,79.974,0,0,1,544,176ZM264,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,264,256Zm-8,128H192v32h64Zm96,0H288v32h64ZM456,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,456,256Zm-8,128H384v32h64ZM640,256V384a31.96166,31.96166,0,0,1-32,32H576V224h32A31.96166,31.96166,0,0,1,640,256Z"},"child":[]}]})(props);
}

const CLAUDE_API_URL = "http://192.168.1.252:2000/claude";
const Content = ({}) => {
    const [prompt, setPrompt] = SP_REACT.useState("");
    const [includeScreenshot, setIncludeScreenshot] = SP_REACT.useState(false);
    const [isGenerating, setIsGenerating] = SP_REACT.useState(false);
    const [response, setResponse] = SP_REACT.useState("");
    const takeScreenshot = async () => {
        try {
            // Use Steam Deck's screenshot API
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            if (!ctx)
                return null;
            // Get the current viewport
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            // Use html2canvas-like functionality or Steam Deck specific APIs
            // For now, we'll use a simple approach with getUserMedia
            const stream = await navigator.mediaDevices.getDisplayMedia({
                video: true
            });
            const video = document.createElement('video');
            video.srcObject = stream;
            video.play();
            return new Promise((resolve) => {
                video.addEventListener('loadedmetadata', () => {
                    canvas.width = video.videoWidth;
                    canvas.height = video.videoHeight;
                    ctx.drawImage(video, 0, 0);
                    stream.getTracks().forEach(track => track.stop());
                    canvas.toBlob((blob) => {
                        resolve(blob);
                    }, 'image/png');
                });
            });
        }
        catch (error) {
            console.error('Failed to take screenshot:', error);
            return null;
        }
    };
    const sendRequest = async () => {
        if (!prompt.trim())
            return;
        setIsGenerating(true);
        setResponse("");
        try {
            const formData = new FormData();
            formData.append('prompt', prompt);
            if (includeScreenshot) {
                const screenshotBlob = await takeScreenshot();
                if (screenshotBlob) {
                    formData.append('image', screenshotBlob, 'screenshot.png');
                }
            }
            const response = await fetch(CLAUDE_API_URL, {
                method: 'POST',
                body: formData,
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setResponse(data.response || 'No response received');
        }
        catch (error) {
            console.error('Error calling Claude API:', error);
            setResponse(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
        }
        finally {
            setIsGenerating(false);
        }
    };
    return (jsxRuntimeExports.jsx("div", { style: { marginTop: "50px", color: "white" }, children: jsxRuntimeExports.jsxs(DFL.PanelSection, { title: "Claude Assistant", children: [jsxRuntimeExports.jsx(DFL.PanelSectionRow, { children: jsxRuntimeExports.jsx(DFL.ToggleField, { label: "Include Screenshot", checked: includeScreenshot, onChange: setIncludeScreenshot, description: "Capture and send a screenshot with your prompt" }) }), jsxRuntimeExports.jsx(DFL.PanelSectionRow, { children: jsxRuntimeExports.jsx(DFL.Focusable, { style: { display: "flex", width: "100%" }, children: jsxRuntimeExports.jsx(DFL.TextField, { label: "Prompt", value: prompt, onChange: (e) => setPrompt(e.target.value), style: { width: "100%" } }) }) }), jsxRuntimeExports.jsx(DFL.PanelSectionRow, { children: jsxRuntimeExports.jsx(DFL.ButtonItem, { layout: "below", onClick: sendRequest, disabled: isGenerating || !prompt.trim(), children: isGenerating ? "Generating..." : "Send Request" }) }), response && (jsxRuntimeExports.jsx(DFL.PanelSectionRow, { children: jsxRuntimeExports.jsxs("div", { style: {
                            backgroundColor: "#1a1a1a",
                            padding: "10px",
                            borderRadius: "4px",
                            maxHeight: "300px",
                            overflow: "auto",
                            whiteSpace: "pre-wrap",
                            wordBreak: "break-word"
                        }, children: [jsxRuntimeExports.jsx("strong", { children: "Response:" }), jsxRuntimeExports.jsx("br", {}), response] }) }))] }) }));
};
var index = definePlugin(() => {
    return {
        name: "Claude Assistant Plugin",
        titleView: jsxRuntimeExports.jsx("div", { className: DFL.staticClasses.Title, children: "Claude Assistant Plugin" }),
        content: jsxRuntimeExports.jsx(Content, {}),
        icon: jsxRuntimeExports.jsx(FaRobot, {}),
        onDismount() {
            // Cleanup when plugin unloads
        },
    };
});

export { index as default };
//# sourceMappingURL=index.js.map
