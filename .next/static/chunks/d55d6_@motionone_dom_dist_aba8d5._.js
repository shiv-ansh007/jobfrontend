(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/d55d6_@motionone_dom_dist_aba8d5._.js", {

"[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/index.es.js [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({});
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
}}),
"[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/index.es.js [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/index.es.js [app-client] (ecmascript) <locals>");
}}),
"[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/gestures/scroll/offsets/presets.es.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "ScrollOffset": (()=>ScrollOffset)
});
const ScrollOffset = {
    Enter: [
        [
            0,
            1
        ],
        [
            1,
            1
        ]
    ],
    Exit: [
        [
            0,
            0
        ],
        [
            1,
            0
        ]
    ],
    Any: [
        [
            1,
            0
        ],
        [
            0,
            1
        ]
    ],
    All: [
        [
            0,
            0
        ],
        [
            1,
            1
        ]
    ]
};
;
}}),
"[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/utils/resolve-elements.es.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "resolveElements": (()=>resolveElements)
});
function resolveElements(elements, selectorCache) {
    var _a;
    if (typeof elements === "string") {
        if (selectorCache) {
            (_a = selectorCache[elements]) !== null && _a !== void 0 ? _a : selectorCache[elements] = document.querySelectorAll(elements);
            elements = selectorCache[elements];
        } else {
            elements = document.querySelectorAll(elements);
        }
    } else if (elements instanceof Element) {
        elements = [
            elements
        ];
    }
    /**
     * Return an empty array
     */ return Array.from(elements || []);
}
;
}}),
"[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/animate/utils/options.es.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getOptions": (()=>getOptions)
});
const getOptions = (options, key)=>/**
 * TODO: Make test for this
 * Always return a new object otherwise delay is overwritten by results of stagger
 * and this results in no stagger
 */ options[key] ? Object.assign(Object.assign({}, options), options[key]) : Object.assign({}, options);
;
}}),
"[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/utils/stagger.es.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getFromIndex": (()=>getFromIndex),
    "resolveOption": (()=>resolveOption),
    "stagger": (()=>stagger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$is$2d$number$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/utils/dist/is-number.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$animation$2f$dist$2f$utils$2f$easing$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/animation/dist/utils/easing.es.js [app-client] (ecmascript)");
;
;
function stagger(duration = 0.1, { start = 0, from = 0, easing } = {}) {
    return (i, total)=>{
        const fromIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$is$2d$number$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumber"])(from) ? from : getFromIndex(from, total);
        const distance = Math.abs(fromIndex - i);
        let delay = duration * distance;
        if (easing) {
            const maxDelay = total * duration;
            const easingFunction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$animation$2f$dist$2f$utils$2f$easing$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEasingFunction"])(easing);
            delay = easingFunction(delay / maxDelay) * maxDelay;
        }
        return start + delay;
    };
}
function getFromIndex(from, total) {
    if (from === "first") {
        return 0;
    } else {
        const lastIndex = total - 1;
        return from === "last" ? lastIndex : lastIndex / 2;
    }
}
function resolveOption(option, i, total) {
    return typeof option === "function" ? option(i, total) : option;
}
;
}}),
"[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/animate/data.es.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getAnimationData": (()=>getAnimationData),
    "getMotionValue": (()=>getMotionValue)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$types$2f$dist$2f$MotionValue$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/types/dist/MotionValue.es.js [app-client] (ecmascript)");
;
const data = new WeakMap();
function getAnimationData(element) {
    if (!data.has(element)) {
        data.set(element, {
            transforms: [],
            values: new Map()
        });
    }
    return data.get(element);
}
function getMotionValue(motionValues, name) {
    if (!motionValues.has(name)) {
        motionValues.set(name, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$types$2f$dist$2f$MotionValue$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MotionValue"]());
    }
    return motionValues.get(name);
}
;
}}),
"[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/animate/utils/feature-detection.es.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "supports": (()=>supports)
});
const testAnimation = (keyframes)=>document.createElement("div").animate(keyframes, {
        duration: 0.001
    });
const featureTests = {
    cssRegisterProperty: ()=>typeof CSS !== "undefined" && Object.hasOwnProperty.call(CSS, "registerProperty"),
    waapi: ()=>Object.hasOwnProperty.call(Element.prototype, "animate"),
    partialKeyframes: ()=>{
        try {
            testAnimation({
                opacity: [
                    1
                ]
            });
        } catch (e) {
            return false;
        }
        return true;
    },
    finished: ()=>Boolean(testAnimation({
            opacity: [
                0,
                1
            ]
        }).finished)
};
const results = {};
const supports = {};
for(const key in featureTests){
    supports[key] = ()=>{
        if (results[key] === undefined) results[key] = featureTests[key]();
        return results[key];
    };
}
;
}}),
"[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/animate/utils/transforms.es.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "addTransformToElement": (()=>addTransformToElement),
    "asTransformCssVar": (()=>asTransformCssVar),
    "axes": (()=>axes),
    "buildTransformTemplate": (()=>buildTransformTemplate),
    "compareTransformOrder": (()=>compareTransformOrder),
    "isTransform": (()=>isTransform),
    "transformAlias": (()=>transformAlias),
    "transformDefinitions": (()=>transformDefinitions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$noop$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/utils/dist/noop.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$data$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/animate/data.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$array$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/utils/dist/array.es.js [app-client] (ecmascript)");
;
;
/**
 * A list of all transformable axes. We'll use this list to generated a version
 * of each axes for each transform.
 */ const axes = [
    "",
    "X",
    "Y",
    "Z"
];
/**
 * An ordered array of each transformable value. By default, transform values
 * will be sorted to this order.
 */ const order = [
    "translate",
    "scale",
    "rotate",
    "skew"
];
const transformAlias = {
    x: "translateX",
    y: "translateY",
    z: "translateZ"
};
const rotation = {
    syntax: "<angle>",
    initialValue: "0deg",
    toDefaultUnit: (v)=>v + "deg"
};
const baseTransformProperties = {
    translate: {
        syntax: "<length-percentage>",
        initialValue: "0px",
        toDefaultUnit: (v)=>v + "px"
    },
    rotate: rotation,
    scale: {
        syntax: "<number>",
        initialValue: 1,
        toDefaultUnit: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$noop$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noopReturn"]
    },
    skew: rotation
};
const transformDefinitions = new Map();
const asTransformCssVar = (name)=>`--motion-${name}`;
/**
 * Generate a list of every possible transform key
 */ const transforms = [
    "x",
    "y",
    "z"
];
order.forEach((name)=>{
    axes.forEach((axis)=>{
        transforms.push(name + axis);
        transformDefinitions.set(asTransformCssVar(name + axis), baseTransformProperties[name]);
    });
});
/**
 * A function to use with Array.sort to sort transform keys by their default order.
 */ const compareTransformOrder = (a, b)=>transforms.indexOf(a) - transforms.indexOf(b);
/**
 * Provide a quick way to check if a string is the name of a transform
 */ const transformLookup = new Set(transforms);
const isTransform = (name)=>transformLookup.has(name);
const addTransformToElement = (element, name)=>{
    // Map x to translateX etc
    if (transformAlias[name]) name = transformAlias[name];
    const { transforms } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$data$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAnimationData"])(element);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$array$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addUniqueItem"])(transforms, name);
    /**
     * TODO: An optimisation here could be to cache the transform in element data
     * and only update if this has changed.
     */ element.style.transform = buildTransformTemplate(transforms);
};
const buildTransformTemplate = (transforms)=>transforms.sort(compareTransformOrder).reduce(transformListToString, "").trim();
const transformListToString = (template, name)=>`${template} ${name}(var(${asTransformCssVar(name)}))`;
;
}}),
"[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/animate/utils/get-style-name.es.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getStyleName": (()=>getStyleName)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$transforms$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/animate/utils/transforms.es.js [app-client] (ecmascript)");
;
function getStyleName(key) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$transforms$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformAlias"][key]) key = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$transforms$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformAlias"][key];
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$transforms$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTransform"])(key) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$transforms$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asTransformCssVar"])(key) : key;
}
;
}}),
"[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/animate/utils/stop-animation.es.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "stopAnimation": (()=>stopAnimation)
});
function stopAnimation(animation, needsCommit = true) {
    if (!animation || animation.playState === "finished") return;
    // Suppress error thrown by WAAPI
    try {
        if (animation.stop) {
            animation.stop();
        } else {
            needsCommit && animation.commitStyles();
            animation.cancel();
        }
    } catch (e) {}
}
;
}}),
"[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/animate/utils/css-var.es.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "isCssVar": (()=>isCssVar),
    "registerCssVariable": (()=>registerCssVariable),
    "registeredProperties": (()=>registeredProperties)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$transforms$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/animate/utils/transforms.es.js [app-client] (ecmascript)");
;
const isCssVar = (name)=>name.startsWith("--");
const registeredProperties = new Set();
function registerCssVariable(name) {
    if (registeredProperties.has(name)) return;
    registeredProperties.add(name);
    try {
        const { syntax, initialValue } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$transforms$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformDefinitions"].has(name) ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$transforms$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformDefinitions"].get(name) : {};
        CSS.registerProperty({
            name,
            inherits: false,
            syntax,
            initialValue
        });
    } catch (e) {}
}
;
}}),
"[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/animate/style.es.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "style": (()=>style)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$get$2d$style$2d$name$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/animate/utils/get-style-name.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$css$2d$var$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/animate/utils/css-var.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$transforms$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/animate/utils/transforms.es.js [app-client] (ecmascript)");
;
;
;
const style = {
    get: (element, name)=>{
        name = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$get$2d$style$2d$name$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStyleName"])(name);
        let value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$css$2d$var$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isCssVar"])(name) ? element.style.getPropertyValue(name) : getComputedStyle(element)[name];
        if (!value && value !== 0) {
            const definition = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$transforms$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformDefinitions"].get(name);
            if (definition) value = definition.initialValue;
        }
        return value;
    },
    set: (element, name, value)=>{
        name = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$get$2d$style$2d$name$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStyleName"])(name);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$css$2d$var$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isCssVar"])(name)) {
            element.style.setProperty(name, value);
        } else {
            element.style[name] = value;
        }
    }
};
;
}}),
"[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/animate/utils/keyframes.es.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "hydrateKeyframes": (()=>hydrateKeyframes),
    "keyframesList": (()=>keyframesList)
});
function hydrateKeyframes(keyframes, readInitialValue) {
    for(let i = 0; i < keyframes.length; i++){
        if (keyframes[i] === null) {
            keyframes[i] = i ? keyframes[i - 1] : readInitialValue();
        }
    }
    return keyframes;
}
const keyframesList = (keyframes)=>Array.isArray(keyframes) ? keyframes : [
        keyframes
    ];
;
}}),
"[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/animate/utils/easing.es.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "convertEasing": (()=>convertEasing),
    "cubicBezierAsString": (()=>cubicBezierAsString)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$is$2d$cubic$2d$bezier$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/utils/dist/is-cubic-bezier.es.js [app-client] (ecmascript)");
;
const convertEasing = (easing)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$is$2d$cubic$2d$bezier$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isCubicBezier"])(easing) ? cubicBezierAsString(easing) : easing;
const cubicBezierAsString = ([a, b, c, d])=>`cubic-bezier(${a}, ${b}, ${c}, ${d})`;
;
}}),
"[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/animate/animate-style.es.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "animateStyle": (()=>animateStyle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$defaults$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/utils/dist/defaults.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$data$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/animate/data.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$feature$2d$detection$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/animate/utils/feature-detection.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$transforms$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/animate/utils/transforms.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$get$2d$style$2d$name$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/animate/utils/get-style-name.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$stop$2d$animation$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/animate/utils/stop-animation.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$is$2d$easing$2d$generator$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/utils/dist/is-easing-generator.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$style$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/animate/style.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$keyframes$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/animate/utils/keyframes.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$css$2d$var$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/animate/utils/css-var.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$is$2d$number$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/utils/dist/is-number.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$animation$2f$dist$2f$Animation$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/animation/dist/Animation.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$time$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/utils/dist/time.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$is$2d$easing$2d$list$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/utils/dist/is-easing-list.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$easing$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/animate/utils/easing.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$noop$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/utils/dist/noop.es.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
function getDevToolsRecord() {
    return window.__MOTION_DEV_TOOLS_RECORD;
}
function animateStyle(element, key, keyframesDefinition, options = {}) {
    const record = getDevToolsRecord();
    const isRecording = options.record !== false && record;
    let animation;
    let { duration = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$defaults$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaults"].duration, delay = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$defaults$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaults"].delay, endDelay = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$defaults$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaults"].endDelay, repeat = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$defaults$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaults"].repeat, easing = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$defaults$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaults"].easing, direction, offset, allowWebkitAcceleration = false } = options;
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$data$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAnimationData"])(element);
    let canAnimateNatively = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$feature$2d$detection$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supports"].waapi();
    const valueIsTransform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$transforms$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTransform"])(key);
    /**
     * If this is an individual transform, we need to map its
     * key to a CSS variable and update the element's transform style
     */ valueIsTransform && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$transforms$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addTransformToElement"])(element, key);
    const name = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$get$2d$style$2d$name$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStyleName"])(key);
    const motionValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$data$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMotionValue"])(data.values, name);
    /**
     * Get definition of value, this will be used to convert numerical
     * keyframes into the default value type.
     */ const definition = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$transforms$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformDefinitions"].get(name);
    /**
     * Stop the current animation, if any. Because this will trigger
     * commitStyles (DOM writes) and we might later trigger DOM reads,
     * this is fired now and we return a factory function to create
     * the actual animation that can get called in batch,
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$stop$2d$animation$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stopAnimation"])(motionValue.animation, !((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$is$2d$easing$2d$generator$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEasingGenerator"])(easing) && motionValue.generator) && options.record !== false);
    /**
     * Batchable factory function containing all DOM reads.
     */ return ()=>{
        const readInitialValue = ()=>{
            var _a, _b;
            return (_b = (_a = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$style$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["style"].get(element, name)) !== null && _a !== void 0 ? _a : definition === null || definition === void 0 ? void 0 : definition.initialValue) !== null && _b !== void 0 ? _b : 0;
        };
        /**
         * Replace null values with the previous keyframe value, or read
         * it from the DOM if it's the first keyframe.
         */ let keyframes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$keyframes$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hydrateKeyframes"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$keyframes$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframesList"])(keyframesDefinition), readInitialValue);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$is$2d$easing$2d$generator$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEasingGenerator"])(easing)) {
            const custom = easing.createAnimation(keyframes, readInitialValue, valueIsTransform, name, motionValue);
            easing = custom.easing;
            if (custom.keyframes !== undefined) keyframes = custom.keyframes;
            if (custom.duration !== undefined) duration = custom.duration;
        }
        /**
         * If this is a CSS variable we need to register it with the browser
         * before it can be animated natively. We also set it with setProperty
         * rather than directly onto the element.style object.
         */ if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$css$2d$var$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isCssVar"])(name)) {
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$feature$2d$detection$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supports"].cssRegisterProperty()) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$css$2d$var$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerCssVariable"])(name);
            } else {
                canAnimateNatively = false;
            }
        }
        /**
         * If we can animate this value with WAAPI, do so. Currently this only
         * feature detects CSS.registerProperty but could check WAAPI too.
         */ if (canAnimateNatively) {
            /**
             * Convert numbers to default value types. Currently this only supports
             * transforms but it could also support other value types.
             */ if (definition) {
                keyframes = keyframes.map((value)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$is$2d$number$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumber"])(value) ? definition.toDefaultUnit(value) : value);
            }
            /**
             * If this browser doesn't support partial/implicit keyframes we need to
             * explicitly provide one.
             */ if (keyframes.length === 1 && (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$feature$2d$detection$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supports"].partialKeyframes() || isRecording)) {
                keyframes.unshift(readInitialValue());
            }
            const animationOptions = {
                delay: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$time$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["time"].ms(delay),
                duration: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$time$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["time"].ms(duration),
                endDelay: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$time$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["time"].ms(endDelay),
                easing: !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$is$2d$easing$2d$list$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEasingList"])(easing) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$easing$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convertEasing"])(easing) : undefined,
                direction,
                iterations: repeat + 1,
                fill: "both"
            };
            animation = element.animate({
                [name]: keyframes,
                offset,
                easing: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$is$2d$easing$2d$list$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEasingList"])(easing) ? easing.map(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$easing$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convertEasing"]) : undefined
            }, animationOptions);
            /**
             * Polyfill finished Promise in browsers that don't support it
             */ if (!animation.finished) {
                animation.finished = new Promise((resolve, reject)=>{
                    animation.onfinish = resolve;
                    animation.oncancel = reject;
                });
            }
            const target = keyframes[keyframes.length - 1];
            animation.finished.then(()=>{
                // Apply styles to target
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$style$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["style"].set(element, name, target);
                // Ensure fill modes don't persist
                animation.cancel();
            }).catch(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$noop$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"]);
            /**
             * This forces Webkit to run animations on the main thread by exploiting
             * this condition:
             * https://trac.webkit.org/browser/webkit/trunk/Source/WebCore/platform/graphics/ca/GraphicsLayerCA.cpp?rev=281238#L1099
             *
             * This fixes Webkit's timing bugs, like accelerated animations falling
             * out of sync with main thread animations and massive delays in starting
             * accelerated animations in WKWebView.
             */ if (!allowWebkitAcceleration) animation.playbackRate = 1.000001;
        /**
             * If we can't animate the value natively then we can fallback to the numbers-only
             * polyfill for transforms.
             */ } else if (valueIsTransform) {
            /**
             * If any keyframe is a string (because we measured it from the DOM), we need to convert
             * it into a number before passing to the Animation polyfill.
             */ keyframes = keyframes.map((value)=>typeof value === "string" ? parseFloat(value) : value);
            /**
             * If we only have a single keyframe, we need to create an initial keyframe by reading
             * the current value from the DOM.
             */ if (keyframes.length === 1) {
                keyframes.unshift(parseFloat(readInitialValue()));
            }
            const render = (latest)=>{
                if (definition) latest = definition.toDefaultUnit(latest);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$style$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["style"].set(element, name, latest);
            };
            animation = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$animation$2f$dist$2f$Animation$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Animation"](render, keyframes, Object.assign(Object.assign({}, options), {
                duration,
                easing
            }));
        } else {
            const target = keyframes[keyframes.length - 1];
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$style$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["style"].set(element, name, definition && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$is$2d$number$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumber"])(target) ? definition.toDefaultUnit(target) : target);
        }
        if (isRecording) {
            record(element, key, keyframes, {
                duration,
                delay: delay,
                easing,
                repeat,
                offset
            }, "motion-one");
        }
        motionValue.setAnimation(animation);
        return animation;
    };
}
;
}}),
"[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/animate/utils/controls.es.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "controls": (()=>controls),
    "withControls": (()=>withControls)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$defaults$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/utils/dist/defaults.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$time$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/utils/dist/time.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$noop$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/utils/dist/noop.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$stop$2d$animation$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/animate/utils/stop-animation.es.js [app-client] (ecmascript)");
;
;
const createAnimation = (factory)=>factory();
const withControls = (animationFactory, options, duration = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$defaults$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaults"].duration)=>{
    return new Proxy({
        animations: animationFactory.map(createAnimation).filter(Boolean),
        duration,
        options
    }, controls);
};
/**
 * TODO:
 * Currently this returns the first animation, ideally it would return
 * the first active animation.
 */ const getActiveAnimation = (state)=>state.animations[0];
const controls = {
    get: (target, key)=>{
        const activeAnimation = getActiveAnimation(target);
        switch(key){
            case "duration":
                return target.duration;
            case "currentTime":
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$time$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["time"].s((activeAnimation === null || activeAnimation === void 0 ? void 0 : activeAnimation[key]) || 0);
            case "playbackRate":
            case "playState":
                return activeAnimation === null || activeAnimation === void 0 ? void 0 : activeAnimation[key];
            case "finished":
                if (!target.finished) {
                    target.finished = Promise.all(target.animations.map(selectFinished)).catch(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$noop$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"]);
                }
                return target.finished;
            case "stop":
                return ()=>{
                    target.animations.forEach((animation)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$stop$2d$animation$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stopAnimation"])(animation));
                };
            case "forEachNative":
                /**
                 * This is for internal use only, fire a callback for each
                 * underlying animation.
                 */ return (callback)=>{
                    target.animations.forEach((animation)=>callback(animation, target));
                };
            default:
                return typeof (activeAnimation === null || activeAnimation === void 0 ? void 0 : activeAnimation[key]) === "undefined" ? undefined : ()=>target.animations.forEach((animation)=>animation[key]());
        }
    },
    set: (target, key, value)=>{
        switch(key){
            case "currentTime":
                value = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$time$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["time"].ms(value);
            case "currentTime":
            case "playbackRate":
                for(let i = 0; i < target.animations.length; i++){
                    target.animations[i][key] = value;
                }
                return true;
        }
        return false;
    }
};
const selectFinished = (animation)=>animation.finished;
;
}}),
"[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/animate/index.es.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "animate": (()=>animate)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$utils$2f$resolve$2d$elements$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/utils/resolve-elements.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$options$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/animate/utils/options.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$utils$2f$stagger$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/utils/stagger.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$animate$2d$style$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/animate/animate-style.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$controls$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/animate/utils/controls.es.js [app-client] (ecmascript)");
;
;
;
;
;
function animate(elements, keyframes, options = {}) {
    elements = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$utils$2f$resolve$2d$elements$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveElements"])(elements);
    const numElements = elements.length;
    /**
     * Create and start new animations
     */ const animationFactories = [];
    for(let i = 0; i < numElements; i++){
        const element = elements[i];
        for(const key in keyframes){
            const valueOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$options$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOptions"])(options, key);
            valueOptions.delay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$utils$2f$stagger$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveOption"])(valueOptions.delay, i, numElements);
            const animation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$animate$2d$style$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animateStyle"])(element, key, keyframes[key], valueOptions);
            animationFactories.push(animation);
        }
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$controls$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withControls"])(animationFactories, options, /**
     * TODO:
     * If easing is set to spring or glide, duration will be dynamically
     * generated. Ideally we would dynamically generate this from
     * animation.effect.getComputedTiming().duration but this isn't
     * supported in iOS13 or our number polyfill. Perhaps it's possible
     * to Proxy animations returned from animateStyle that has duration
     * as a getter.
     */ options.duration);
}
;
}}),
"[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/gestures/in-view.es.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "inView": (()=>inView)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$utils$2f$resolve$2d$elements$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/utils/resolve-elements.es.js [app-client] (ecmascript)");
;
const thresholds = {
    any: 0,
    all: 1
};
function inView(elementOrSelector, onStart, { root, margin: rootMargin, amount = "any" } = {}) {
    /**
     * If this browser doesn't support IntersectionObserver, return a dummy stop function.
     * Default triggering of onStart is tricky - it could be used for starting/stopping
     * videos, lazy loading content etc. We could provide an option to enable a fallback, or
     * provide a fallback callback option.
     */ if (typeof IntersectionObserver === "undefined") {
        return ()=>{};
    }
    const elements = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$utils$2f$resolve$2d$elements$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveElements"])(elementOrSelector);
    const activeIntersections = new WeakMap();
    const onIntersectionChange = (entries)=>{
        entries.forEach((entry)=>{
            const onEnd = activeIntersections.get(entry.target);
            /**
             * If there's no change to the intersection, we don't need to
             * do anything here.
             */ if (entry.isIntersecting === Boolean(onEnd)) return;
            if (entry.isIntersecting) {
                const newOnEnd = onStart(entry);
                if (typeof newOnEnd === "function") {
                    activeIntersections.set(entry.target, newOnEnd);
                } else {
                    observer.unobserve(entry.target);
                }
            } else if (onEnd) {
                onEnd(entry);
                activeIntersections.delete(entry.target);
            }
        });
    };
    const observer = new IntersectionObserver(onIntersectionChange, {
        root,
        rootMargin,
        threshold: typeof amount === "number" ? amount : thresholds[amount]
    });
    elements.forEach((element)=>observer.observe(element));
    return ()=>observer.disconnect();
}
;
}}),
"[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/state/utils/events.es.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "dispatchPointerEvent": (()=>dispatchPointerEvent),
    "dispatchViewEvent": (()=>dispatchViewEvent),
    "motionEvent": (()=>motionEvent)
});
const motionEvent = (name, target)=>new CustomEvent(name, {
        detail: {
            target
        }
    });
function dispatchPointerEvent(element, name, event) {
    element.dispatchEvent(new CustomEvent(name, {
        detail: {
            originalEvent: event
        }
    }));
}
function dispatchViewEvent(element, name, entry) {
    element.dispatchEvent(new CustomEvent(name, {
        detail: {
            originalEntry: entry
        }
    }));
}
;
}}),
"[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/state/gestures/in-view.es.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "inView": (()=>inView)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$gestures$2f$in$2d$view$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/gestures/in-view.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$state$2f$utils$2f$events$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/state/utils/events.es.js [app-client] (ecmascript)");
;
;
;
const inView = {
    isActive: (options)=>Boolean(options.inView),
    subscribe: (element, { enable, disable }, { inViewOptions = {} })=>{
        const { once } = inViewOptions, viewOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__rest"])(inViewOptions, [
            "once"
        ]);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$gestures$2f$in$2d$view$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inView"])(element, (enterEntry)=>{
            enable();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$state$2f$utils$2f$events$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dispatchViewEvent"])(element, "viewenter", enterEntry);
            if (!once) {
                return (leaveEntry)=>{
                    disable();
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$state$2f$utils$2f$events$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dispatchViewEvent"])(element, "viewleave", leaveEntry);
                };
            }
        }, viewOptions);
    }
};
;
}}),
"[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/state/gestures/hover.es.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "hover": (()=>hover)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$state$2f$utils$2f$events$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/state/utils/events.es.js [app-client] (ecmascript)");
;
const mouseEvent = (element, name, action)=>(event)=>{
        if (event.pointerType && event.pointerType !== "mouse") return;
        action();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$state$2f$utils$2f$events$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dispatchPointerEvent"])(element, name, event);
    };
const hover = {
    isActive: (options)=>Boolean(options.hover),
    subscribe: (element, { enable, disable })=>{
        const onEnter = mouseEvent(element, "hoverstart", enable);
        const onLeave = mouseEvent(element, "hoverend", disable);
        element.addEventListener("pointerenter", onEnter);
        element.addEventListener("pointerleave", onLeave);
        return ()=>{
            element.removeEventListener("pointerenter", onEnter);
            element.removeEventListener("pointerleave", onLeave);
        };
    }
};
;
}}),
"[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/state/gestures/press.es.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "press": (()=>press)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$state$2f$utils$2f$events$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/state/utils/events.es.js [app-client] (ecmascript)");
;
const press = {
    isActive: (options)=>Boolean(options.press),
    subscribe: (element, { enable, disable })=>{
        const onPointerUp = (event)=>{
            disable();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$state$2f$utils$2f$events$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dispatchPointerEvent"])(element, "pressend", event);
            window.removeEventListener("pointerup", onPointerUp);
        };
        const onPointerDown = (event)=>{
            enable();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$state$2f$utils$2f$events$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dispatchPointerEvent"])(element, "pressstart", event);
            window.addEventListener("pointerup", onPointerUp);
        };
        element.addEventListener("pointerdown", onPointerDown);
        return ()=>{
            element.removeEventListener("pointerdown", onPointerDown);
            window.removeEventListener("pointerup", onPointerUp);
        };
    }
};
;
}}),
"[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/state/utils/schedule.es.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "scheduleAnimation": (()=>scheduleAnimation),
    "unscheduleAnimation": (()=>unscheduleAnimation)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$array$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/utils/dist/array.es.js [app-client] (ecmascript)");
;
let scheduled = undefined;
function processScheduledAnimations() {
    if (!scheduled) return;
    const generators = scheduled.sort(compareByDepth).map(fireAnimateUpdates);
    generators.forEach(fireNext);
    generators.forEach(fireNext);
    scheduled = undefined;
}
function scheduleAnimation(state) {
    if (!scheduled) {
        scheduled = [
            state
        ];
        requestAnimationFrame(processScheduledAnimations);
    } else {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$array$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addUniqueItem"])(scheduled, state);
    }
}
function unscheduleAnimation(state) {
    scheduled && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$array$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeItem"])(scheduled, state);
}
const compareByDepth = (a, b)=>a.getDepth() - b.getDepth();
const fireAnimateUpdates = (state)=>state.animateUpdates();
const fireNext = (iterator)=>iterator.next();
;
}}),
"[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/state/utils/is-variant.es.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "isVariant": (()=>isVariant)
});
function isVariant(definition) {
    return typeof definition === "object";
}
;
}}),
"[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/state/utils/resolve-variant.es.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "resolveVariant": (()=>resolveVariant)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$state$2f$utils$2f$is$2d$variant$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/state/utils/is-variant.es.js [app-client] (ecmascript)");
;
function resolveVariant(definition, variants) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$state$2f$utils$2f$is$2d$variant$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isVariant"])(definition)) {
        return definition;
    } else if (definition && variants) {
        return variants[definition];
    }
}
;
}}),
"[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/state/utils/has-changed.es.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "hasChanged": (()=>hasChanged),
    "shallowCompare": (()=>shallowCompare)
});
function hasChanged(a, b) {
    if (typeof a !== typeof b) return true;
    if (Array.isArray(a) && Array.isArray(b)) return !shallowCompare(a, b);
    return a !== b;
}
function shallowCompare(next, prev) {
    const prevLength = prev.length;
    if (prevLength !== next.length) return false;
    for(let i = 0; i < prevLength; i++){
        if (prev[i] !== next[i]) return false;
    }
    return true;
}
;
}}),
"[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/state/index.es.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "createMotionState": (()=>createMotionState),
    "mountedStates": (()=>mountedStates)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hey$2d$listen$2f$dist$2f$hey$2d$listen$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/hey-listen/dist/hey-listen.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$state$2f$gestures$2f$in$2d$view$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/state/gestures/in-view.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$state$2f$gestures$2f$hover$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/state/gestures/hover.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$state$2f$gestures$2f$press$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/state/gestures/press.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$state$2f$utils$2f$schedule$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/state/utils/schedule.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$state$2f$utils$2f$resolve$2d$variant$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/state/utils/resolve-variant.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$options$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/animate/utils/options.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$state$2f$utils$2f$has$2d$changed$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/state/utils/has-changed.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$style$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/animate/style.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$animate$2d$style$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/animate/animate-style.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$state$2f$utils$2f$events$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/state/utils/events.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$noop$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/utils/dist/noop.es.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
const gestures = {
    inView: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$state$2f$gestures$2f$in$2d$view$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inView"],
    hover: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$state$2f$gestures$2f$hover$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hover"],
    press: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$state$2f$gestures$2f$press$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["press"]
};
/**
 * A list of state types, in priority order. If a value is defined in
 * a righter-most type, it will override any definition in a lefter-most.
 */ const stateTypes = [
    "initial",
    "animate",
    ...Object.keys(gestures),
    "exit"
];
/**
 * A global store of all generated motion states. This can be used to lookup
 * a motion state for a given Element.
 */ const mountedStates = new WeakMap();
function createMotionState(options = {}, parent) {
    /**
     * The element represented by the motion state. This is an empty reference
     * when we create the state to support SSR and allow for later mounting
     * in view libraries.
     *
     * @ts-ignore
     */ let element;
    /**
     * Calculate a depth that we can use to order motion states by tree depth.
     */ let depth = parent ? parent.getDepth() + 1 : 0;
    /**
     * Track which states are currently active.
     */ const activeStates = {
        initial: true,
        animate: true
    };
    /**
     * A map of functions that, when called, will remove event listeners for
     * a given gesture.
     */ const gestureSubscriptions = {};
    /**
     * Initialise a context to share through motion states. This
     * will be populated by variant names (if any).
     */ const context = {};
    for (const name of stateTypes){
        context[name] = typeof options[name] === "string" ? options[name] : parent === null || parent === void 0 ? void 0 : parent.getContext()[name];
    }
    /**
     * If initial is set to false we use the animate prop as the initial
     * animation state.
     */ const initialVariantSource = options.initial === false ? "animate" : "initial";
    /**
     * Destructure an initial target out from the resolved initial variant.
     */ let _a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$state$2f$utils$2f$resolve$2d$variant$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveVariant"])(options[initialVariantSource] || context[initialVariantSource], options.variants) || {}, target = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__rest"])(_a, [
        "transition"
    ]);
    /**
     * The base target is a cached map of values that we'll use to animate
     * back to if a value is removed from all active state types. This
     * is usually the initial value as read from the DOM, for instance if
     * it hasn't been defined in initial.
     */ const baseTarget = Object.assign({}, target);
    /**
     * A generator that will be processed by the global animation scheduler.
     * This yeilds when it switches from reading the DOM to writing to it
     * to prevent layout thrashing.
     */ function* animateUpdates() {
        var _a, _b;
        const prevTarget = target;
        target = {};
        const animationOptions = {};
        for (const name of stateTypes){
            if (!activeStates[name]) continue;
            const variant = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$state$2f$utils$2f$resolve$2d$variant$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveVariant"])(options[name]);
            if (!variant) continue;
            for(const key in variant){
                if (key === "transition") continue;
                target[key] = variant[key];
                animationOptions[key] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$options$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOptions"])((_b = (_a = variant.transition) !== null && _a !== void 0 ? _a : options.transition) !== null && _b !== void 0 ? _b : {}, key);
            }
        }
        const allTargetKeys = new Set([
            ...Object.keys(target),
            ...Object.keys(prevTarget)
        ]);
        const animationFactories = [];
        allTargetKeys.forEach((key)=>{
            var _a;
            if (target[key] === undefined) {
                target[key] = baseTarget[key];
            }
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$state$2f$utils$2f$has$2d$changed$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasChanged"])(prevTarget[key], target[key])) {
                (_a = baseTarget[key]) !== null && _a !== void 0 ? _a : baseTarget[key] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$style$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["style"].get(element, key);
                animationFactories.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$animate$2d$style$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animateStyle"])(element, key, target[key], animationOptions[key]));
            }
        });
        // Wait for all animation states to read from the DOM
        yield;
        const animations = animationFactories.map((factory)=>factory()).filter(Boolean);
        if (!animations.length) return;
        const animationTarget = target;
        element.dispatchEvent((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$state$2f$utils$2f$events$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motionEvent"])("motionstart", animationTarget));
        Promise.all(animations.map((animation)=>animation.finished)).then(()=>{
            element.dispatchEvent((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$state$2f$utils$2f$events$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motionEvent"])("motioncomplete", animationTarget));
        }).catch(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$noop$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"]);
    }
    const setGesture = (name, isActive)=>()=>{
            activeStates[name] = isActive;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$state$2f$utils$2f$schedule$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scheduleAnimation"])(state);
        };
    const updateGestureSubscriptions = ()=>{
        for(const name in gestures){
            const isGestureActive = gestures[name].isActive(options);
            const remove = gestureSubscriptions[name];
            if (isGestureActive && !remove) {
                gestureSubscriptions[name] = gestures[name].subscribe(element, {
                    enable: setGesture(name, true),
                    disable: setGesture(name, false)
                }, options);
            } else if (!isGestureActive && remove) {
                remove();
                delete gestureSubscriptions[name];
            }
        }
    };
    const state = {
        update: (newOptions)=>{
            if (!element) return;
            options = newOptions;
            updateGestureSubscriptions();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$state$2f$utils$2f$schedule$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scheduleAnimation"])(state);
        },
        setActive: (name, isActive)=>{
            if (!element) return;
            activeStates[name] = isActive;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$state$2f$utils$2f$schedule$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scheduleAnimation"])(state);
        },
        animateUpdates,
        getDepth: ()=>depth,
        getTarget: ()=>target,
        getOptions: ()=>options,
        getContext: ()=>context,
        mount: (newElement)=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hey$2d$listen$2f$dist$2f$hey$2d$listen$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invariant"])(Boolean(newElement), "Animation state must be mounted with valid Element");
            element = newElement;
            mountedStates.set(element, state);
            updateGestureSubscriptions();
            return ()=>{
                mountedStates.delete(element);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$state$2f$utils$2f$schedule$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unscheduleAnimation"])(state);
                for(const key in gestureSubscriptions){
                    gestureSubscriptions[key]();
                }
            };
        },
        isMounted: ()=>Boolean(element)
    };
    return state;
}
;
}}),
"[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/animate/utils/style-object.es.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "createStyles": (()=>createStyles)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$transforms$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/animate/utils/transforms.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$is$2d$number$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/utils/dist/is-number.es.js [app-client] (ecmascript)");
;
;
function createStyles(keyframes) {
    const initialKeyframes = {};
    const transformKeys = [];
    for(let key in keyframes){
        const value = keyframes[key];
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$transforms$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTransform"])(key)) {
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$transforms$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformAlias"][key]) key = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$transforms$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformAlias"][key];
            transformKeys.push(key);
            key = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$transforms$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asTransformCssVar"])(key);
        }
        let initialKeyframe = Array.isArray(value) ? value[0] : value;
        /**
         * If this is a number and we have a default value type, convert the number
         * to this type.
         */ const definition = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$transforms$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformDefinitions"].get(key);
        if (definition) {
            initialKeyframe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$is$2d$number$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumber"])(value) ? definition.toDefaultUnit(value) : value;
        }
        initialKeyframes[key] = initialKeyframe;
    }
    if (transformKeys.length) {
        initialKeyframes.transform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$transforms$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildTransformTemplate"])(transformKeys);
    }
    return initialKeyframes;
}
;
}}),
"[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/animate/utils/style-string.es.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "createStyleString": (()=>createStyleString)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$style$2d$object$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/animate/utils/style-object.es.js [app-client] (ecmascript)");
;
const camelLetterToPipeLetter = (letter)=>`-${letter.toLowerCase()}`;
const camelToPipeCase = (str)=>str.replace(/[A-Z]/g, camelLetterToPipeLetter);
function createStyleString(target = {}) {
    const styles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$style$2d$object$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createStyles"])(target);
    let style = "";
    for(const key in styles){
        style += key.startsWith("--") ? key : camelToPipeCase(key);
        style += `: ${styles[key]}; `;
    }
    return style;
}
;
}}),
"[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/easing/create-generator-easing.es.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "createGeneratorEasing": (()=>createGeneratorEasing)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$generators$2f$dist$2f$utils$2f$pregenerate$2d$keyframes$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/generators/dist/utils/pregenerate-keyframes.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$generators$2f$dist$2f$utils$2f$velocity$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/generators/dist/utils/velocity.es.js [app-client] (ecmascript)");
;
function createGeneratorEasing(createGenerator) {
    const keyframesCache = new WeakMap();
    return (options = {})=>{
        const generatorCache = new Map();
        const getGenerator = (from = 0, to = 100, velocity = 0, isScale = false)=>{
            const key = `${from}-${to}-${velocity}-${isScale}`;
            if (!generatorCache.has(key)) {
                generatorCache.set(key, createGenerator(Object.assign({
                    from,
                    to,
                    velocity,
                    restSpeed: isScale ? 0.05 : 2,
                    restDistance: isScale ? 0.01 : 0.5
                }, options)));
            }
            return generatorCache.get(key);
        };
        const getKeyframes = (generator)=>{
            if (!keyframesCache.has(generator)) {
                keyframesCache.set(generator, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$generators$2f$dist$2f$utils$2f$pregenerate$2d$keyframes$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pregenerateKeyframes"])(generator));
            }
            return keyframesCache.get(generator);
        };
        return {
            createAnimation: (keyframes, getOrigin, canUseGenerator, name, motionValue)=>{
                var _a, _b;
                let settings;
                const numKeyframes = keyframes.length;
                let shouldUseGenerator = canUseGenerator && numKeyframes <= 2 && keyframes.every(isNumberOrNull);
                if (shouldUseGenerator) {
                    const target = keyframes[numKeyframes - 1];
                    const unresolvedOrigin = numKeyframes === 1 ? null : keyframes[0];
                    let velocity = 0;
                    let origin = 0;
                    const prevGenerator = motionValue === null || motionValue === void 0 ? void 0 : motionValue.generator;
                    if (prevGenerator) {
                        /**
                         * If we have a generator for this value we can use it to resolve
                         * the animations's current value and velocity.
                         */ const { animation, generatorStartTime } = motionValue;
                        const startTime = (animation === null || animation === void 0 ? void 0 : animation.startTime) || generatorStartTime || 0;
                        const currentTime = (animation === null || animation === void 0 ? void 0 : animation.currentTime) || performance.now() - startTime;
                        const prevGeneratorCurrent = prevGenerator(currentTime).current;
                        origin = (_a = unresolvedOrigin) !== null && _a !== void 0 ? _a : prevGeneratorCurrent;
                        if (numKeyframes === 1 || numKeyframes === 2 && keyframes[0] === null) {
                            velocity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$generators$2f$dist$2f$utils$2f$velocity$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcGeneratorVelocity"])((t)=>prevGenerator(t).current, currentTime, prevGeneratorCurrent);
                        }
                    } else {
                        origin = (_b = unresolvedOrigin) !== null && _b !== void 0 ? _b : parseFloat(getOrigin());
                    }
                    const generator = getGenerator(origin, target, velocity, name === null || name === void 0 ? void 0 : name.includes("scale"));
                    const keyframesMetadata = getKeyframes(generator);
                    settings = Object.assign(Object.assign({}, keyframesMetadata), {
                        easing: "linear"
                    });
                    // TODO Add test for this
                    if (motionValue) {
                        motionValue.generator = generator;
                        motionValue.generatorStartTime = performance.now();
                    }
                } else {
                    const keyframesMetadata = getKeyframes(getGenerator(0, 100));
                    settings = {
                        easing: "ease",
                        duration: keyframesMetadata.overshootDuration
                    };
                }
                return settings;
            }
        };
    };
}
const isNumberOrNull = (value)=>typeof value !== "string";
;
}}),
"[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/easing/glide/index.es.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "glide": (()=>glide)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$easing$2f$create$2d$generator$2d$easing$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/easing/create-generator-easing.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$generators$2f$dist$2f$glide$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/generators/dist/glide/index.es.js [app-client] (ecmascript)");
;
;
const glide = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$easing$2f$create$2d$generator$2d$easing$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createGeneratorEasing"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$generators$2f$dist$2f$glide$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["glide"]);
;
}}),
"[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/gestures/resize/handle-element.es.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "resizeElement": (()=>resizeElement)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$utils$2f$resolve$2d$elements$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/utils/resolve-elements.es.js [app-client] (ecmascript)");
;
const resizeHandlers = new WeakMap();
let observer;
function getElementSize(target, borderBoxSize) {
    if (borderBoxSize) {
        const { inlineSize, blockSize } = borderBoxSize[0];
        return {
            width: inlineSize,
            height: blockSize
        };
    } else if (target instanceof SVGElement && "getBBox" in target) {
        return target.getBBox();
    } else {
        return {
            width: target.offsetWidth,
            height: target.offsetHeight
        };
    }
}
function notifyTarget({ target, contentRect, borderBoxSize }) {
    var _a;
    (_a = resizeHandlers.get(target)) === null || _a === void 0 ? void 0 : _a.forEach((handler)=>{
        handler({
            target,
            contentSize: contentRect,
            get size () {
                return getElementSize(target, borderBoxSize);
            }
        });
    });
}
function notifyAll(entries) {
    entries.forEach(notifyTarget);
}
function createResizeObserver() {
    if (typeof ResizeObserver === "undefined") return;
    observer = new ResizeObserver(notifyAll);
}
function resizeElement(target, handler) {
    if (!observer) createResizeObserver();
    const elements = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$utils$2f$resolve$2d$elements$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveElements"])(target);
    elements.forEach((element)=>{
        let elementHandlers = resizeHandlers.get(element);
        if (!elementHandlers) {
            elementHandlers = new Set();
            resizeHandlers.set(element, elementHandlers);
        }
        elementHandlers.add(handler);
        observer === null || observer === void 0 ? void 0 : observer.observe(element);
    });
    return ()=>{
        elements.forEach((element)=>{
            const elementHandlers = resizeHandlers.get(element);
            elementHandlers === null || elementHandlers === void 0 ? void 0 : elementHandlers.delete(handler);
            if (!(elementHandlers === null || elementHandlers === void 0 ? void 0 : elementHandlers.size)) {
                observer === null || observer === void 0 ? void 0 : observer.unobserve(element);
            }
        });
    };
}
;
}}),
"[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/gestures/resize/handle-window.es.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "resizeWindow": (()=>resizeWindow)
});
const windowCallbacks = new Set();
let windowResizeHandler;
function createWindowResizeHandler() {
    windowResizeHandler = ()=>{
        const size = {
            width: window.innerWidth,
            height: window.innerHeight
        };
        const info = {
            target: window,
            size,
            contentSize: size
        };
        windowCallbacks.forEach((callback)=>callback(info));
    };
    window.addEventListener("resize", windowResizeHandler);
}
function resizeWindow(callback) {
    windowCallbacks.add(callback);
    if (!windowResizeHandler) createWindowResizeHandler();
    return ()=>{
        windowCallbacks.delete(callback);
        if (!windowCallbacks.size && windowResizeHandler) {
            windowResizeHandler = undefined;
        }
    };
}
;
}}),
"[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/gestures/resize/index.es.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "resize": (()=>resize)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$gestures$2f$resize$2f$handle$2d$element$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/gestures/resize/handle-element.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$gestures$2f$resize$2f$handle$2d$window$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/gestures/resize/handle-window.es.js [app-client] (ecmascript)");
;
;
function resize(a, b) {
    return typeof a === "function" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$gestures$2f$resize$2f$handle$2d$window$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resizeWindow"])(a) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$gestures$2f$resize$2f$handle$2d$element$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resizeElement"])(a, b);
}
;
}}),
"[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/gestures/scroll/info.es.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "createScrollInfo": (()=>createScrollInfo),
    "updateScrollInfo": (()=>updateScrollInfo)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$progress$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/utils/dist/progress.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$velocity$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/utils/dist/velocity.es.js [app-client] (ecmascript)");
;
/**
 * A time in milliseconds, beyond which we consider the scroll velocity to be 0.
 */ const maxElapsed = 50;
const createAxisInfo = ()=>({
        current: 0,
        offset: [],
        progress: 0,
        scrollLength: 0,
        targetOffset: 0,
        targetLength: 0,
        containerLength: 0,
        velocity: 0
    });
const createScrollInfo = ()=>({
        time: 0,
        x: createAxisInfo(),
        y: createAxisInfo()
    });
const keys = {
    x: {
        length: "Width",
        position: "Left"
    },
    y: {
        length: "Height",
        position: "Top"
    }
};
function updateAxisInfo(element, axisName, info, time) {
    const axis = info[axisName];
    const { length, position } = keys[axisName];
    const prev = axis.current;
    const prevTime = info.time;
    axis.current = element["scroll" + position];
    axis.scrollLength = element["scroll" + length] - element["client" + length];
    axis.offset.length = 0;
    axis.offset[0] = 0;
    axis.offset[1] = axis.scrollLength;
    axis.progress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$progress$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["progress"])(0, axis.scrollLength, axis.current);
    const elapsed = time - prevTime;
    axis.velocity = elapsed > maxElapsed ? 0 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$velocity$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["velocityPerSecond"])(axis.current - prev, elapsed);
}
function updateScrollInfo(element, info, time) {
    updateAxisInfo(element, "x", info, time);
    updateAxisInfo(element, "y", info, time);
    info.time = time;
}
;
}}),
"[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/gestures/scroll/offsets/inset.es.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "calcInset": (()=>calcInset)
});
function calcInset(element, container) {
    let inset = {
        x: 0,
        y: 0
    };
    let current = element;
    while(current && current !== container){
        if (current instanceof HTMLElement) {
            inset.x += current.offsetLeft;
            inset.y += current.offsetTop;
            current = current.offsetParent;
        } else if (current instanceof SVGGraphicsElement && "getBBox" in current) {
            const { top, left } = current.getBBox();
            inset.x += left;
            inset.y += top;
            /**
             * Assign the next parent element as the <svg /> tag.
             */ while(current && current.tagName !== "svg"){
                current = current.parentNode;
            }
        }
    }
    return inset;
}
;
}}),
"[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/gestures/scroll/offsets/edge.es.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "namedEdges": (()=>namedEdges),
    "resolveEdge": (()=>resolveEdge)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$is$2d$string$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/utils/dist/is-string.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$is$2d$number$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/utils/dist/is-number.es.js [app-client] (ecmascript)");
;
const namedEdges = {
    start: 0,
    center: 0.5,
    end: 1
};
function resolveEdge(edge, length, inset = 0) {
    let delta = 0;
    /**
     * If we have this edge defined as a preset, replace the definition
     * with the numerical value.
     */ if (namedEdges[edge] !== undefined) {
        edge = namedEdges[edge];
    }
    /**
     * Handle unit values
     */ if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$is$2d$string$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isString"])(edge)) {
        const asNumber = parseFloat(edge);
        if (edge.endsWith("px")) {
            delta = asNumber;
        } else if (edge.endsWith("%")) {
            edge = asNumber / 100;
        } else if (edge.endsWith("vw")) {
            delta = asNumber / 100 * document.documentElement.clientWidth;
        } else if (edge.endsWith("vh")) {
            delta = asNumber / 100 * document.documentElement.clientHeight;
        } else {
            edge = asNumber;
        }
    }
    /**
     * If the edge is defined as a number, handle as a progress value.
     */ if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$is$2d$number$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumber"])(edge)) {
        delta = length * edge;
    }
    return inset + delta;
}
;
}}),
"[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/gestures/scroll/offsets/offset.es.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "resolveOffset": (()=>resolveOffset)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$is$2d$number$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/utils/dist/is-number.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$is$2d$string$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/utils/dist/is-string.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$gestures$2f$scroll$2f$offsets$2f$edge$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/gestures/scroll/offsets/edge.es.js [app-client] (ecmascript)");
;
;
const defaultOffset = [
    0,
    0
];
function resolveOffset(offset, containerLength, targetLength, targetInset) {
    let offsetDefinition = Array.isArray(offset) ? offset : defaultOffset;
    let targetPoint = 0;
    let containerPoint = 0;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$is$2d$number$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumber"])(offset)) {
        /**
         * If we're provided offset: [0, 0.5, 1] then each number x should become
         * [x, x], so we default to the behaviour of mapping 0 => 0 of both target
         * and container etc.
         */ offsetDefinition = [
            offset,
            offset
        ];
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$is$2d$string$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isString"])(offset)) {
        offset = offset.trim();
        if (offset.includes(" ")) {
            offsetDefinition = offset.split(" ");
        } else {
            /**
             * If we're provided a definition like "100px" then we want to apply
             * that only to the top of the target point, leaving the container at 0.
             * Whereas a named offset like "end" should be applied to both.
             */ offsetDefinition = [
                offset,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$gestures$2f$scroll$2f$offsets$2f$edge$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["namedEdges"][offset] ? offset : `0`
            ];
        }
    }
    targetPoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$gestures$2f$scroll$2f$offsets$2f$edge$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveEdge"])(offsetDefinition[0], targetLength, targetInset);
    containerPoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$gestures$2f$scroll$2f$offsets$2f$edge$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveEdge"])(offsetDefinition[1], containerLength);
    return targetPoint - containerPoint;
}
;
}}),
"[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/gestures/scroll/offsets/index.es.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "resolveOffsets": (()=>resolveOffsets)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$gestures$2f$scroll$2f$offsets$2f$presets$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/gestures/scroll/offsets/presets.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$gestures$2f$scroll$2f$offsets$2f$inset$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/gestures/scroll/offsets/inset.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$gestures$2f$scroll$2f$offsets$2f$offset$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/gestures/scroll/offsets/offset.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$interpolate$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/utils/dist/interpolate.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$offset$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/utils/dist/offset.es.js [app-client] (ecmascript)");
;
;
;
;
const point = {
    x: 0,
    y: 0
};
function resolveOffsets(container, info, options) {
    let { offset: offsetDefinition = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$gestures$2f$scroll$2f$offsets$2f$presets$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollOffset"].All } = options;
    const { target = container, axis = "y" } = options;
    const lengthLabel = axis === "y" ? "height" : "width";
    const inset = target !== container ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$gestures$2f$scroll$2f$offsets$2f$inset$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcInset"])(target, container) : point;
    /**
     * Measure the target and container. If they're the same thing then we
     * use the container's scrollWidth/Height as the target, from there
     * all other calculations can remain the same.
     */ const targetSize = target === container ? {
        width: container.scrollWidth,
        height: container.scrollHeight
    } : {
        width: target.clientWidth,
        height: target.clientHeight
    };
    const containerSize = {
        width: container.clientWidth,
        height: container.clientHeight
    };
    /**
     * Reset the length of the resolved offset array rather than creating a new one.
     * TODO: More reusable data structures for targetSize/containerSize would also be good.
     */ info[axis].offset.length = 0;
    /**
     * Populate the offset array by resolving the user's offset definition into
     * a list of pixel scroll offets.
     */ let hasChanged = !info[axis].interpolate;
    const numOffsets = offsetDefinition.length;
    for(let i = 0; i < numOffsets; i++){
        const offset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$gestures$2f$scroll$2f$offsets$2f$offset$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveOffset"])(offsetDefinition[i], containerSize[lengthLabel], targetSize[lengthLabel], inset[axis]);
        if (!hasChanged && offset !== info[axis].interpolatorOffsets[i]) {
            hasChanged = true;
        }
        info[axis].offset[i] = offset;
    }
    /**
     * If the pixel scroll offsets have changed, create a new interpolator function
     * to map scroll value into a progress.
     */ if (hasChanged) {
        info[axis].interpolate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$interpolate$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["interpolate"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$offset$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultOffset"])(numOffsets), info[axis].offset);
        info[axis].interpolatorOffsets = [
            ...info[axis].offset
        ];
    }
    info[axis].progress = info[axis].interpolate(info[axis].current);
}
;
}}),
"[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/gestures/scroll/on-scroll-handler.es.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "createOnScrollHandler": (()=>createOnScrollHandler)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$gestures$2f$scroll$2f$info$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/gestures/scroll/info.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$gestures$2f$scroll$2f$offsets$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/gestures/scroll/offsets/index.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$noop$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/utils/dist/noop.es.js [app-client] (ecmascript)");
;
;
;
function measure(container, target = container, info) {
    /**
     * Find inset of target within scrollable container
     */ info.x.targetOffset = 0;
    info.y.targetOffset = 0;
    if (target !== container) {
        let node = target;
        while(node && node != container){
            info.x.targetOffset += node.offsetLeft;
            info.y.targetOffset += node.offsetTop;
            node = node.offsetParent;
        }
    }
    info.x.targetLength = target === container ? target.scrollWidth : target.clientWidth;
    info.y.targetLength = target === container ? target.scrollHeight : target.clientHeight;
    info.x.containerLength = container.clientWidth;
    info.y.containerLength = container.clientHeight;
}
function createOnScrollHandler(element, onScroll, info, options = {}) {
    const axis = options.axis || "y";
    return {
        measure: ()=>measure(element, options.target, info),
        update: (time)=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$gestures$2f$scroll$2f$info$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateScrollInfo"])(element, info, time);
            if (options.offset || options.target) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$gestures$2f$scroll$2f$offsets$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveOffsets"])(element, info, options);
            }
        },
        notify: typeof onScroll === "function" ? ()=>onScroll(info) : scrubAnimation(onScroll, info[axis])
    };
}
function scrubAnimation(controls, axisInfo) {
    controls.pause();
    controls.forEachNative((animation, { easing })=>{
        var _a, _b;
        if (animation.updateDuration) {
            if (!easing) animation.easing = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$noop$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noopReturn"];
            animation.updateDuration(1);
        } else {
            const timingOptions = {
                duration: 1000
            };
            if (!easing) timingOptions.easing = "linear";
            (_b = (_a = animation.effect) === null || _a === void 0 ? void 0 : _a.updateTiming) === null || _b === void 0 ? void 0 : _b.call(_a, timingOptions);
        }
    });
    return ()=>{
        controls.currentTime = axisInfo.progress;
    };
}
;
}}),
"[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/gestures/scroll/index.es.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "scroll": (()=>scroll)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$gestures$2f$scroll$2f$info$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/gestures/scroll/info.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$gestures$2f$scroll$2f$on$2d$scroll$2d$handler$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/gestures/scroll/on-scroll-handler.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$gestures$2f$resize$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/gestures/resize/index.es.js [app-client] (ecmascript)");
;
;
;
;
const scrollListeners = new WeakMap();
const resizeListeners = new WeakMap();
const onScrollHandlers = new WeakMap();
const getEventTarget = (element)=>element === document.documentElement ? window : element;
function scroll(onScroll, _a = {}) {
    var { container = document.documentElement } = _a, options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__rest"])(_a, [
        "container"
    ]);
    let containerHandlers = onScrollHandlers.get(container);
    /**
     * Get the onScroll handlers for this container.
     * If one isn't found, create a new one.
     */ if (!containerHandlers) {
        containerHandlers = new Set();
        onScrollHandlers.set(container, containerHandlers);
    }
    /**
     * Create a new onScroll handler for the provided callback.
     */ const info = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$gestures$2f$scroll$2f$info$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createScrollInfo"])();
    const containerHandler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$gestures$2f$scroll$2f$on$2d$scroll$2d$handler$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createOnScrollHandler"])(container, onScroll, info, options);
    containerHandlers.add(containerHandler);
    /**
     * Check if there's a scroll event listener for this container.
     * If not, create one.
     */ if (!scrollListeners.has(container)) {
        const listener = ()=>{
            const time = performance.now();
            for (const handler of containerHandlers)handler.measure();
            for (const handler of containerHandlers)handler.update(time);
            for (const handler of containerHandlers)handler.notify();
        };
        scrollListeners.set(container, listener);
        const target = getEventTarget(container);
        window.addEventListener("resize", listener, {
            passive: true
        });
        if (container !== document.documentElement) {
            resizeListeners.set(container, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$gestures$2f$resize$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resize"])(container, listener));
        }
        target.addEventListener("scroll", listener, {
            passive: true
        });
    }
    const listener = scrollListeners.get(container);
    const onLoadProcesss = requestAnimationFrame(listener);
    return ()=>{
        var _a;
        if (typeof onScroll !== "function") onScroll.stop();
        cancelAnimationFrame(onLoadProcesss);
        /**
         * Check if we even have any handlers for this container.
         */ const containerHandlers = onScrollHandlers.get(container);
        if (!containerHandlers) return;
        containerHandlers.delete(containerHandler);
        if (containerHandlers.size) return;
        /**
         * If no more handlers, remove the scroll listener too.
         */ const listener = scrollListeners.get(container);
        scrollListeners.delete(container);
        if (listener) {
            getEventTarget(container).removeEventListener("scroll", listener);
            (_a = resizeListeners.get(container)) === null || _a === void 0 ? void 0 : _a();
            window.removeEventListener("resize", listener);
        }
    };
}
;
}}),
"[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/easing/spring/index.es.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "spring": (()=>spring)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$easing$2f$create$2d$generator$2d$easing$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/easing/create-generator-easing.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$generators$2f$dist$2f$spring$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/generators/dist/spring/index.es.js [app-client] (ecmascript)");
;
;
const spring = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$easing$2f$create$2d$generator$2d$easing$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createGeneratorEasing"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$generators$2f$dist$2f$spring$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spring"]);
;
}}),
"[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/timeline/utils/calc-time.es.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "calcNextTime": (()=>calcNextTime)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$is$2d$number$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/utils/dist/is-number.es.js [app-client] (ecmascript)");
;
function calcNextTime(current, next, prev, labels) {
    var _a;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$is$2d$number$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumber"])(next)) {
        return next;
    } else if (next.startsWith("-") || next.startsWith("+")) {
        return Math.max(0, current + parseFloat(next));
    } else if (next === "<") {
        return prev;
    } else {
        return (_a = labels.get(next)) !== null && _a !== void 0 ? _a : current;
    }
}
;
}}),
"[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/timeline/utils/edit.es.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "addKeyframes": (()=>addKeyframes),
    "eraseKeyframes": (()=>eraseKeyframes)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$array$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/utils/dist/array.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$mix$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/utils/dist/mix.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$easing$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/utils/dist/easing.es.js [app-client] (ecmascript)");
;
function eraseKeyframes(sequence, startTime, endTime) {
    for(let i = 0; i < sequence.length; i++){
        const keyframe = sequence[i];
        if (keyframe.at > startTime && keyframe.at < endTime) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$array$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeItem"])(sequence, keyframe);
            // If we remove this item we have to push the pointer back one
            i--;
        }
    }
}
function addKeyframes(sequence, keyframes, easing, offset, startTime, endTime) {
    /**
     * Erase every existing value between currentTime and targetTime,
     * this will essentially splice this timeline into any currently
     * defined ones.
     */ eraseKeyframes(sequence, startTime, endTime);
    for(let i = 0; i < keyframes.length; i++){
        sequence.push({
            value: keyframes[i],
            at: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$mix$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mix"])(startTime, endTime, offset[i]),
            easing: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$easing$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEasingForSegment"])(easing, i)
        });
    }
}
;
}}),
"[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/timeline/utils/sort.es.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "compareByTime": (()=>compareByTime)
});
function compareByTime(a, b) {
    if (a.at === b.at) {
        return a.value === null ? 1 : -1;
    } else {
        return a.at - b.at;
    }
}
;
}}),
"[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/timeline/index.es.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "createAnimationsFromTimeline": (()=>createAnimationsFromTimeline),
    "timeline": (()=>timeline)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hey$2d$listen$2f$dist$2f$hey$2d$listen$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/hey-listen/dist/hey-listen.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$animate$2d$style$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/animate/animate-style.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$controls$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/animate/utils/controls.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$is$2d$string$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/utils/dist/is-string.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$timeline$2f$utils$2f$calc$2d$time$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/timeline/utils/calc-time.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$utils$2f$resolve$2d$elements$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/utils/resolve-elements.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$keyframes$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/animate/utils/keyframes.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$options$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/animate/utils/options.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$defaults$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/utils/dist/defaults.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$is$2d$easing$2d$generator$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/utils/dist/is-easing-generator.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$transforms$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/animate/utils/transforms.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$utils$2f$stagger$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/utils/stagger.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$offset$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/utils/dist/offset.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$timeline$2f$utils$2f$edit$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/timeline/utils/edit.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$timeline$2f$utils$2f$sort$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/timeline/utils/sort.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$progress$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/utils/dist/progress.es.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
function timeline(definition, options = {}) {
    var _a;
    const animationDefinitions = createAnimationsFromTimeline(definition, options);
    /**
     * Create and start animations
     */ const animationFactories = animationDefinitions.map((definition)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$animate$2d$style$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animateStyle"])(...definition)).filter(Boolean);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$controls$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withControls"])(animationFactories, options, // Get the duration from the first animation definition
    (_a = animationDefinitions[0]) === null || _a === void 0 ? void 0 : _a[3].duration);
}
function createAnimationsFromTimeline(definition, _a = {}) {
    var { defaultOptions = {} } = _a, timelineOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__rest"])(_a, [
        "defaultOptions"
    ]);
    const animationDefinitions = [];
    const elementSequences = new Map();
    const elementCache = {};
    const timeLabels = new Map();
    let prevTime = 0;
    let currentTime = 0;
    let totalDuration = 0;
    /**
     * Build the timeline by mapping over the definition array and converting
     * the definitions into keyframes and offsets with absolute time values.
     * These will later get converted into relative offsets in a second pass.
     */ for(let i = 0; i < definition.length; i++){
        const segment = definition[i];
        /**
         * If this is a timeline label, mark it and skip the rest of this iteration.
         */ if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$is$2d$string$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isString"])(segment)) {
            timeLabels.set(segment, currentTime);
            continue;
        } else if (!Array.isArray(segment)) {
            timeLabels.set(segment.name, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$timeline$2f$utils$2f$calc$2d$time$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcNextTime"])(currentTime, segment.at, prevTime, timeLabels));
            continue;
        }
        const [elementDefinition, keyframes, options = {}] = segment;
        /**
         * If a relative or absolute time value has been specified we need to resolve
         * it in relation to the currentTime.
         */ if (options.at !== undefined) {
            currentTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$timeline$2f$utils$2f$calc$2d$time$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcNextTime"])(currentTime, options.at, prevTime, timeLabels);
        }
        /**
         * Keep track of the maximum duration in this definition. This will be
         * applied to currentTime once the definition has been parsed.
         */ let maxDuration = 0;
        /**
         * Find all the elements specified in the definition and parse value
         * keyframes from their timeline definitions.
         */ const elements = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$utils$2f$resolve$2d$elements$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveElements"])(elementDefinition, elementCache);
        const numElements = elements.length;
        for(let elementIndex = 0; elementIndex < numElements; elementIndex++){
            const element = elements[elementIndex];
            const elementSequence = getElementSequence(element, elementSequences);
            for(const key in keyframes){
                const valueSequence = getValueSequence(key, elementSequence);
                let valueKeyframes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$keyframes$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframesList"])(keyframes[key]);
                const valueOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$options$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOptions"])(options, key);
                let { duration = defaultOptions.duration || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$defaults$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaults"].duration, easing = defaultOptions.easing || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$defaults$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaults"].easing } = valueOptions;
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$is$2d$easing$2d$generator$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEasingGenerator"])(easing)) {
                    const valueIsTransform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$transforms$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTransform"])(key);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hey$2d$listen$2f$dist$2f$hey$2d$listen$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invariant"])(valueKeyframes.length === 2 || !valueIsTransform, "spring must be provided 2 keyframes within timeline");
                    const custom = easing.createAnimation(valueKeyframes, // TODO We currently only support explicit keyframes
                    // so this doesn't currently read from the DOM
                    ()=>"0", valueIsTransform);
                    easing = custom.easing;
                    if (custom.keyframes !== undefined) valueKeyframes = custom.keyframes;
                    if (custom.duration !== undefined) duration = custom.duration;
                }
                const delay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$utils$2f$stagger$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveOption"])(options.delay, elementIndex, numElements) || 0;
                const startTime = currentTime + delay;
                const targetTime = startTime + duration;
                /**
                 *
                 */ let { offset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$offset$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultOffset"])(valueKeyframes.length) } = valueOptions;
                /**
                 * If there's only one offset of 0, fill in a second with length 1
                 *
                 * TODO: Ensure there's a test that covers this removal
                 */ if (offset.length === 1 && offset[0] === 0) {
                    offset[1] = 1;
                }
                /**
                 * Fill out if offset if fewer offsets than keyframes
                 */ const remainder = length - valueKeyframes.length;
                remainder > 0 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$offset$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fillOffset"])(offset, remainder);
                /**
                 * If only one value has been set, ie [1], push a null to the start of
                 * the keyframe array. This will let us mark a keyframe at this point
                 * that will later be hydrated with the previous value.
                 */ valueKeyframes.length === 1 && valueKeyframes.unshift(null);
                /**
                 * Add keyframes, mapping offsets to absolute time.
                 */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$timeline$2f$utils$2f$edit$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addKeyframes"])(valueSequence, valueKeyframes, easing, offset, startTime, targetTime);
                maxDuration = Math.max(delay + duration, maxDuration);
                totalDuration = Math.max(targetTime, totalDuration);
            }
        }
        prevTime = currentTime;
        currentTime += maxDuration;
    }
    /**
     * For every element and value combination create a new animation.
     */ elementSequences.forEach((valueSequences, element)=>{
        for(const key in valueSequences){
            const valueSequence = valueSequences[key];
            /**
             * Arrange all the keyframes in ascending time order.
             */ valueSequence.sort(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$timeline$2f$utils$2f$sort$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["compareByTime"]);
            const keyframes = [];
            const valueOffset = [];
            const valueEasing = [];
            /**
             * For each keyframe, translate absolute times into
             * relative offsets based on the total duration of the timeline.
             */ for(let i = 0; i < valueSequence.length; i++){
                const { at, value, easing } = valueSequence[i];
                keyframes.push(value);
                valueOffset.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$progress$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["progress"])(0, totalDuration, at));
                valueEasing.push(easing || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$defaults$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaults"].easing);
            }
            /**
             * If the first keyframe doesn't land on offset: 0
             * provide one by duplicating the initial keyframe. This ensures
             * it snaps to the first keyframe when the animation starts.
             */ if (valueOffset[0] !== 0) {
                valueOffset.unshift(0);
                keyframes.unshift(keyframes[0]);
                valueEasing.unshift("linear");
            }
            /**
             * If the last keyframe doesn't land on offset: 1
             * provide one with a null wildcard value. This will ensure it
             * stays static until the end of the animation.
             */ if (valueOffset[valueOffset.length - 1] !== 1) {
                valueOffset.push(1);
                keyframes.push(null);
            }
            animationDefinitions.push([
                element,
                key,
                keyframes,
                Object.assign(Object.assign(Object.assign({}, defaultOptions), {
                    duration: totalDuration,
                    easing: valueEasing,
                    offset: valueOffset
                }), timelineOptions)
            ]);
        }
    });
    return animationDefinitions;
}
function getElementSequence(element, sequences) {
    !sequences.has(element) && sequences.set(element, {});
    return sequences.get(element);
}
function getValueSequence(name, sequences) {
    if (!sequences[name]) sequences[name] = [];
    return sequences[name];
}
;
}}),
"[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/index.es.js [app-client] (ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "ScrollOffset": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$gestures$2f$scroll$2f$offsets$2f$presets$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollOffset"]),
    "animate": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animate"]),
    "animateStyle": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$animate$2d$style$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animateStyle"]),
    "createMotionState": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$state$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createMotionState"]),
    "createStyleString": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$style$2d$string$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createStyleString"]),
    "createStyles": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$style$2d$object$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createStyles"]),
    "getAnimationData": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$data$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAnimationData"]),
    "getStyleName": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$get$2d$style$2d$name$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStyleName"]),
    "glide": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$easing$2f$glide$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["glide"]),
    "inView": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$gestures$2f$in$2d$view$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inView"]),
    "mountedStates": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$state$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mountedStates"]),
    "resize": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$gestures$2f$resize$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resize"]),
    "scroll": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$gestures$2f$scroll$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scroll"]),
    "spring": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$easing$2f$spring$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spring"]),
    "stagger": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$utils$2f$stagger$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stagger"]),
    "style": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$style$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["style"]),
    "timeline": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$timeline$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timeline"]),
    "withControls": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$controls$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withControls"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$gestures$2f$scroll$2f$offsets$2f$presets$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/gestures/scroll/offsets/presets.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/animate/index.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$animate$2d$style$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/animate/animate-style.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$state$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/state/index.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$style$2d$string$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/animate/utils/style-string.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$style$2d$object$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/animate/utils/style-object.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$data$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/animate/data.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$get$2d$style$2d$name$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/animate/utils/get-style-name.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$easing$2f$glide$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/easing/glide/index.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$gestures$2f$in$2d$view$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/gestures/in-view.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$gestures$2f$resize$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/gestures/resize/index.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$gestures$2f$scroll$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/gestures/scroll/index.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$easing$2f$spring$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/easing/spring/index.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$utils$2f$stagger$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/utils/stagger.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$style$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/animate/style.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$timeline$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/timeline/index.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$controls$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/animate/utils/controls.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/index.es.js [app-client] (ecmascript) <locals>");
}}),
"[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/index.es.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "ScrollOffset": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["ScrollOffset"]),
    "animate": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["animate"]),
    "animateStyle": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["animateStyle"]),
    "createMotionState": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["createMotionState"]),
    "createStyleString": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["createStyleString"]),
    "createStyles": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["createStyles"]),
    "getAnimationData": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["getAnimationData"]),
    "getStyleName": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["getStyleName"]),
    "glide": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["glide"]),
    "inView": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["inView"]),
    "mountedStates": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["mountedStates"]),
    "resize": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["resize"]),
    "scroll": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["scroll"]),
    "spring": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["spring"]),
    "stagger": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["stagger"]),
    "style": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["style"]),
    "timeline": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["timeline"]),
    "withControls": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["withControls"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/index.es.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$material$2d$tailwind$2f$react$2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__ = __turbopack_import__("[project]/node_modules/@material-tailwind/react/node_modules/@motionone/dom/dist/index.es.js [app-client] (ecmascript) <exports>");
}}),
}]);

//# sourceMappingURL=d55d6_%40motionone_dom_dist_aba8d5._.js.map