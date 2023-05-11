var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { createSequenceHooksCollection, createGuardsCollection, createPipelineCollection } from "hookar";
import { createLogger } from "consolite";
function noop() {
}
function run(fn) {
  return fn();
}
function blank_object() {
  return /* @__PURE__ */ Object.create(null);
}
function run_all(fns) {
  fns.forEach(run);
}
function is_function(thing) {
  return typeof thing === "function";
}
function safe_not_equal(a, b) {
  return a != a ? b == b : a !== b || (a && typeof a === "object" || typeof a === "function");
}
function subscribe(store, ...callbacks) {
  if (store == null) {
    return noop;
  }
  const unsub = store.subscribe(...callbacks);
  return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}
function get_store_value(store) {
  let value;
  subscribe(store, (_) => value = _)();
  return value;
}
function compute_rest_props(props, keys) {
  const rest = {};
  keys = new Set(keys);
  for (const k in props)
    if (!keys.has(k) && k[0] !== "$")
      rest[k] = props[k];
  return rest;
}
let current_component;
function set_current_component(component) {
  current_component = component;
}
function get_current_component() {
  if (!current_component)
    throw new Error("Function called outside component initialization");
  return current_component;
}
function onDestroy(fn) {
  get_current_component().$$.on_destroy.push(fn);
}
function setContext(key, context2) {
  get_current_component().$$.context.set(key, context2);
  return context2;
}
function getContext(key) {
  return get_current_component().$$.context.get(key);
}
const _boolean_attributes = [
  "allowfullscreen",
  "allowpaymentrequest",
  "async",
  "autofocus",
  "autoplay",
  "checked",
  "controls",
  "default",
  "defer",
  "disabled",
  "formnovalidate",
  "hidden",
  "inert",
  "ismap",
  "loop",
  "multiple",
  "muted",
  "nomodule",
  "novalidate",
  "open",
  "playsinline",
  "readonly",
  "required",
  "reversed",
  "selected"
];
const boolean_attributes = /* @__PURE__ */ new Set([..._boolean_attributes]);
const invalid_attribute_name_character = /[\s'">/=\u{FDD0}-\u{FDEF}\u{FFFE}\u{FFFF}\u{1FFFE}\u{1FFFF}\u{2FFFE}\u{2FFFF}\u{3FFFE}\u{3FFFF}\u{4FFFE}\u{4FFFF}\u{5FFFE}\u{5FFFF}\u{6FFFE}\u{6FFFF}\u{7FFFE}\u{7FFFF}\u{8FFFE}\u{8FFFF}\u{9FFFE}\u{9FFFF}\u{AFFFE}\u{AFFFF}\u{BFFFE}\u{BFFFF}\u{CFFFE}\u{CFFFF}\u{DFFFE}\u{DFFFF}\u{EFFFE}\u{EFFFF}\u{FFFFE}\u{FFFFF}\u{10FFFE}\u{10FFFF}]/u;
function spread(args, attrs_to_add) {
  const attributes = Object.assign({}, ...args);
  if (attrs_to_add) {
    const classes_to_add = attrs_to_add.classes;
    const styles_to_add = attrs_to_add.styles;
    if (classes_to_add) {
      if (attributes.class == null) {
        attributes.class = classes_to_add;
      } else {
        attributes.class += " " + classes_to_add;
      }
    }
    if (styles_to_add) {
      if (attributes.style == null) {
        attributes.style = style_object_to_string(styles_to_add);
      } else {
        attributes.style = style_object_to_string(merge_ssr_styles(attributes.style, styles_to_add));
      }
    }
  }
  let str = "";
  Object.keys(attributes).forEach((name) => {
    if (invalid_attribute_name_character.test(name))
      return;
    const value = attributes[name];
    if (value === true)
      str += " " + name;
    else if (boolean_attributes.has(name.toLowerCase())) {
      if (value)
        str += " " + name;
    } else if (value != null) {
      str += ` ${name}="${value}"`;
    }
  });
  return str;
}
function merge_ssr_styles(style_attribute, style_directive) {
  const style_object = {};
  for (const individual_style of style_attribute.split(";")) {
    const colon_index = individual_style.indexOf(":");
    const name = individual_style.slice(0, colon_index).trim();
    const value = individual_style.slice(colon_index + 1).trim();
    if (!name)
      continue;
    style_object[name] = value;
  }
  for (const name in style_directive) {
    const value = style_directive[name];
    if (value) {
      style_object[name] = value;
    } else {
      delete style_object[name];
    }
  }
  return style_object;
}
const ATTR_REGEX = /[&"]/g;
const CONTENT_REGEX = /[&<]/g;
function escape(value, is_attr = false) {
  const str = String(value);
  const pattern = is_attr ? ATTR_REGEX : CONTENT_REGEX;
  pattern.lastIndex = 0;
  let escaped = "";
  let last = 0;
  while (pattern.test(str)) {
    const i = pattern.lastIndex - 1;
    const ch = str[i];
    escaped += str.substring(last, i) + (ch === "&" ? "&amp;" : ch === '"' ? "&quot;" : "&lt;");
    last = i + 1;
  }
  return escaped + str.substring(last);
}
function escape_attribute_value(value) {
  const should_escape = typeof value === "string" || value && typeof value === "object";
  return should_escape ? escape(value, true) : value;
}
function escape_object(obj) {
  const result = {};
  for (const key in obj) {
    result[key] = escape_attribute_value(obj[key]);
  }
  return result;
}
function each(items, fn) {
  let str = "";
  for (let i = 0; i < items.length; i += 1) {
    str += fn(items[i], i);
  }
  return str;
}
const missing_component = {
  $$render: () => ""
};
function validate_component(component, name) {
  if (!component || !component.$$render) {
    if (name === "svelte:component")
      name += " this={...}";
    throw new Error(`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules. Otherwise you may need to fix a <${name}>.`);
  }
  return component;
}
let on_destroy;
function create_ssr_component(fn) {
  function $$render(result, props, bindings, slots, context2) {
    const parent_component = current_component;
    const $$ = {
      on_destroy,
      context: new Map(context2 || (parent_component ? parent_component.$$.context : [])),
      on_mount: [],
      before_update: [],
      after_update: [],
      callbacks: blank_object()
    };
    set_current_component({ $$ });
    const html = fn(result, props, bindings, slots);
    set_current_component(parent_component);
    return html;
  }
  return {
    render: (props = {}, { $$slots = {}, context: context2 = /* @__PURE__ */ new Map() } = {}) => {
      on_destroy = [];
      const result = { title: "", head: "", css: /* @__PURE__ */ new Set() };
      const html = $$render(result, props, {}, $$slots, context2);
      run_all(on_destroy);
      return {
        html,
        css: {
          code: Array.from(result.css).map((css2) => css2.code).join("\n"),
          map: null
        },
        head: result.title + result.head
      };
    },
    $$render
  };
}
function add_attribute(name, value, boolean) {
  if (value == null || boolean && !value)
    return "";
  const assignment = boolean && value === true ? "" : `="${escape(value, true)}"`;
  return ` ${name}${assignment}`;
}
function style_object_to_string(style_object) {
  return Object.keys(style_object).filter((key) => style_object[key]).map((key) => `${key}: ${escape_attribute_value(style_object[key])};`).join(" ");
}
const routes = {
  "meta": {},
  "id": "_default",
  "_regex": {},
  "_paramKeys": {},
  "file": {
    "path": "src/routes/_module.svelte",
    "dir": "src/routes",
    "base": "_module.svelte",
    "ext": ".svelte",
    "name": "_module"
  },
  "asyncModule": () => Promise.resolve().then(() => _module$1),
  "rootName": "default",
  "routifyDir": import.meta.url,
  "children": [
    {
      "meta": {},
      "id": "_default_contact",
      "_regex": {},
      "_paramKeys": {},
      "name": "contact",
      "module": false,
      "file": {
        "path": "src/routes/contact",
        "dir": "src/routes",
        "base": "contact",
        "ext": "",
        "name": "contact"
      },
      "children": [
        {
          "meta": {},
          "id": "_default_contact_index_svelte",
          "_regex": {},
          "_paramKeys": {},
          "name": "index",
          "file": {
            "path": "src/routes/contact/index.svelte",
            "dir": "src/routes/contact",
            "base": "index.svelte",
            "ext": ".svelte",
            "name": "index"
          },
          "asyncModule": () => Promise.resolve().then(() => index$5),
          "children": []
        }
      ]
    },
    {
      "meta": {},
      "id": "_default_download",
      "_regex": {},
      "_paramKeys": {},
      "name": "download",
      "module": false,
      "file": {
        "path": "src/routes/download",
        "dir": "src/routes",
        "base": "download",
        "ext": "",
        "name": "download"
      },
      "children": [
        {
          "meta": {},
          "id": "_default_download_index_svelte",
          "_regex": {},
          "_paramKeys": {},
          "name": "index",
          "file": {
            "path": "src/routes/download/index.svelte",
            "dir": "src/routes/download",
            "base": "index.svelte",
            "ext": ".svelte",
            "name": "index"
          },
          "asyncModule": () => Promise.resolve().then(() => index$4),
          "children": []
        }
      ]
    },
    {
      "meta": {},
      "id": "_default_index_svelte",
      "_regex": {},
      "_paramKeys": {},
      "name": "index",
      "file": {
        "path": "src/routes/index.svelte",
        "dir": "src/routes",
        "base": "index.svelte",
        "ext": ".svelte",
        "name": "index"
      },
      "asyncModule": () => Promise.resolve().then(() => index$3),
      "children": []
    },
    {
      "meta": {},
      "id": "_default_wiki",
      "_regex": {},
      "_paramKeys": {},
      "name": "wiki",
      "file": {
        "path": "src/routes/wiki/_module.svelte",
        "dir": "src/routes/wiki",
        "base": "_module.svelte",
        "ext": ".svelte",
        "name": "_module"
      },
      "asyncModule": () => Promise.resolve().then(() => _module),
      "children": [
        {
          "meta": {},
          "id": "_default_wiki_index_md",
          "_regex": {},
          "_paramKeys": {},
          "name": "index",
          "file": {
            "path": "src/routes/wiki/index.md",
            "dir": "src/routes/wiki",
            "base": "index.md",
            "ext": ".md",
            "name": "index"
          },
          "asyncModule": () => Promise.resolve().then(() => index$2),
          "children": []
        },
        {
          "meta": {},
          "id": "_default_wiki_release_notes",
          "_regex": {},
          "_paramKeys": {},
          "name": "release-notes",
          "module": false,
          "file": {
            "path": "src/routes/wiki/release-notes",
            "dir": "src/routes/wiki",
            "base": "release-notes",
            "ext": "",
            "name": "release-notes"
          },
          "children": [
            {
              "meta": {},
              "id": "_default_wiki_release_notes_index_md",
              "_regex": {},
              "_paramKeys": {},
              "name": "index",
              "file": {
                "path": "src/routes/wiki/release-notes/index.md",
                "dir": "src/routes/wiki/release-notes",
                "base": "index.md",
                "ext": ".md",
                "name": "index"
              },
              "asyncModule": () => Promise.resolve().then(() => index$1),
              "children": []
            },
            {
              "meta": {},
              "id": "_default_wiki_release_notes_latest_md",
              "_regex": {},
              "_paramKeys": {},
              "name": "latest",
              "file": {
                "path": "src/routes/wiki/release-notes/latest.md",
                "dir": "src/routes/wiki/release-notes",
                "base": "latest.md",
                "ext": ".md",
                "name": "latest"
              },
              "asyncModule": () => Promise.resolve().then(() => pardus215),
              "children": []
            },
            {
              "meta": {},
              "id": "_default_wiki_release_notes_pardus215_md",
              "_regex": {},
              "_paramKeys": {},
              "name": "pardus215",
              "file": {
                "path": "src/routes/wiki/release-notes/pardus215.md",
                "dir": "src/routes/wiki/release-notes",
                "base": "pardus215.md",
                "ext": ".md",
                "name": "pardus215"
              },
              "asyncModule": () => Promise.resolve().then(() => pardus215),
              "children": []
            }
          ]
        },
        {
          "meta": {},
          "id": "_default_wiki_system",
          "_regex": {},
          "_paramKeys": {},
          "name": "system",
          "module": false,
          "file": {
            "path": "src/routes/wiki/system",
            "dir": "src/routes/wiki",
            "base": "system",
            "ext": "",
            "name": "system"
          },
          "children": [
            {
              "meta": {},
              "id": "_default_wiki_system_01_installation_md",
              "_regex": {},
              "_paramKeys": {},
              "name": "01-installation",
              "file": {
                "path": "src/routes/wiki/system/01-installation.md",
                "dir": "src/routes/wiki/system",
                "base": "01-installation.md",
                "ext": ".md",
                "name": "01-installation"
              },
              "asyncModule": () => Promise.resolve().then(() => _01Installation),
              "children": []
            },
            {
              "meta": {},
              "id": "_default_wiki_system_02_after_install_md",
              "_regex": {},
              "_paramKeys": {},
              "name": "02-after-install",
              "file": {
                "path": "src/routes/wiki/system/02-after-install.md",
                "dir": "src/routes/wiki/system",
                "base": "02-after-install.md",
                "ext": ".md",
                "name": "02-after-install"
              },
              "asyncModule": () => Promise.resolve().then(() => _02AfterInstall),
              "children": []
            },
            {
              "meta": {},
              "id": "_default_wiki_system_03_yusuf_duzgun_md",
              "_regex": {},
              "_paramKeys": {},
              "name": "03-yusuf-duzgun",
              "file": {
                "path": "src/routes/wiki/system/03-yusuf-duzgun.md",
                "dir": "src/routes/wiki/system",
                "base": "03-yusuf-duzgun.md",
                "ext": ".md",
                "name": "03-yusuf-duzgun"
              },
              "asyncModule": () => Promise.resolve().then(() => _03YusufDuzgun),
              "children": []
            },
            {
              "meta": {},
              "id": "_default_wiki_system_index_md",
              "_regex": {},
              "_paramKeys": {},
              "name": "index",
              "file": {
                "path": "src/routes/wiki/system/index.md",
                "dir": "src/routes/wiki/system",
                "base": "index.md",
                "ext": ".md",
                "name": "index"
              },
              "asyncModule": () => Promise.resolve().then(() => index),
              "children": []
            }
          ]
        }
      ]
    },
    {
      "meta": {
        "dynamic": true,
        "dynamicSpread": true
      },
      "_regex": {},
      "_paramKeys": {},
      "name": "[...404]",
      "file": {
        "path": ".routify/components/[...404].svelte",
        "dir": ".routify/components",
        "base": "[...404].svelte",
        "ext": ".svelte",
        "name": "[...404]"
      },
      "asyncModule": () => Promise.resolve().then(() => ____404_),
      "children": []
    }
  ]
};
const subscriber_queue = [];
function readable(value, start) {
  return {
    subscribe: writable(value, start).subscribe
  };
}
function writable(value, start = noop) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run2, invalidate = noop) {
    const subscriber = [run2, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || noop;
    }
    run2(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0 && stop) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe2 };
}
function derived(stores, fn, initial_value) {
  const single = !Array.isArray(stores);
  const stores_array = single ? [stores] : stores;
  const auto = fn.length < 2;
  return readable(initial_value, (set) => {
    let started = false;
    const values = [];
    let pending = 0;
    let cleanup = noop;
    const sync = () => {
      if (pending) {
        return;
      }
      cleanup();
      const result = fn(single ? values[0] : values, set);
      if (auto) {
        set(result);
      } else {
        cleanup = is_function(result) ? result : noop;
      }
    };
    const unsubscribers = stores_array.map((store, i) => subscribe(store, (value) => {
      values[i] = value;
      pending &= ~(1 << i);
      if (started) {
        sync();
      }
    }, () => {
      pending |= 1 << i;
    }));
    started = true;
    sync();
    return function stop() {
      run_all(unsubscribers);
      cleanup();
      started = false;
    };
  });
}
const uriDecodeStringOrArray = (strOrArr) => strOrArr instanceof Array ? strOrArr.map(decodeURI) : decodeURI(strOrArr);
const URIDecodeObject = (obj) => Object.entries(obj).reduce(
  (_return, [key, value]) => ({
    ..._return,
    [key]: uriDecodeStringOrArray(value)
  }),
  {}
);
class LoadCache {
  constructor() {
    this.map = /* @__PURE__ */ new Map();
  }
  async fetch(id, options) {
    if (!this.map.has(id))
      this.map.set(id, options.hydrate());
    this._handlePromise(id, options);
    return this.map.get(id);
  }
  async _handlePromise(id, options) {
    var _a;
    const value = await this.map.get(id);
    const clear = (_a = options.clear) == null ? void 0 : _a.call(options, value);
    if (typeof clear === "number")
      setTimeout(() => this.map.delete(id), clear);
    else if (clear)
      this.map.delete(id);
  }
}
class RouteFragment {
  constructor(route, node, urlFragment = "", params = {}) {
    __publicField(this, "_params", {});
    this.route = route;
    this.node = node;
    this.load = void 0;
    this.urlFragment = urlFragment;
    this.params = params;
    this.renderContext = writable();
    Object.defineProperty(this, "route", { enumerable: false });
  }
  get index() {
    return this.route.fragments.indexOf(this);
  }
  get params() {
    return URIDecodeObject(this._params);
  }
  set params(params) {
    this._params = params;
  }
}
const URL_STATES = ["pushState", "replaceState", "popState"];
const loadCache = new LoadCache();
class Route {
  constructor(router2, url, mode, state = {}) {
    __publicField(this, "allFragments", []);
    __publicField(this, "load", {
      status: 200,
      error: null,
      maxage: null,
      props: {},
      redirect: null
    });
    const [, hash] = url.match(/#(.+)/) || [];
    this.router = router2;
    this.url = url;
    this.mode = mode;
    this.state = state;
    this.hash = hash;
    this.state.createdAt = new Date();
    if (!router2.rootNode) {
      this.router.log.error("Can't navigate without a rootNode");
      const err = new Error("Can't navigate without a rootNode");
      Object.assign(err, { routify: { router: router2 } });
      throw err;
    }
    if (!URL_STATES.includes(mode))
      throw new Error("url.mode must be pushState, replaceState or popState");
    this.allFragments = this._createFragments();
  }
  get fragments() {
    return this.router.transformFragments.run(this.allFragments);
  }
  get params() {
    const match = this.url.match(/\?.+/);
    const query = match && match[0] || "";
    return Object.assign(
      {},
      ...this.allFragments.map((fragment) => fragment.params),
      this.router.queryHandler.parse(query, this)
    );
  }
  get leaf() {
    return [...this.allFragments].pop();
  }
  get isPendingOrPrefetch() {
    return this === this.router.pendingRoute.get() || this.state.prefetch;
  }
  async loadRoute() {
    const pipeline = [
      this.runBeforeUrlChangeHooks,
      this.loadComponents,
      this.runPreloads
    ];
    for (const pretask of pipeline) {
      const passedPreTask = await pretask.bind(this)();
      if (!this.isPendingOrPrefetch || !passedPreTask)
        return false;
    }
    return true;
  }
  async loadComponents() {
    const nodes = this.fragments.map((fragment) => fragment.node);
    const multiNodes = nodes.map((node) => node.children.find((node2) => node2.name === "_decorator")).filter(Boolean);
    await Promise.all([...nodes, ...multiNodes].map((node) => node.loadModule()));
    return true;
  }
  async runPreloads() {
    var _a;
    const prevRoute = this.router.activeRoute.get();
    for (const [index2, fragment] of this.fragments.entries()) {
      if (!this.isPendingOrPrefetch)
        return false;
      const prevFragmentInSpot = prevRoute == null ? void 0 : prevRoute.fragments[index2];
      const isSameBranch = fragment.node === (prevFragmentInSpot == null ? void 0 : prevFragmentInSpot.node);
      const ctx = {
        route: this,
        prevRoute,
        isNew: !isSameBranch,
        fetch
      };
      if ((_a = fragment.node.module) == null ? void 0 : _a.load) {
        const cacheId = JSON.stringify([this.params, fragment.node.id]);
        const load2 = await loadCache.fetch(cacheId, {
          hydrate: () => fragment.node.module.load(ctx),
          clear: (res) => (res == null ? void 0 : res.expire) || !this.state.prefetch
        });
        fragment.load = {
          ...isSameBranch && prevFragmentInSpot.load,
          ...load2
        };
        Object.assign(this.load, fragment.load);
        if (this.load.redirect)
          return this.router.url.replace(this.load.redirect, {
            redirectedBy: this
          });
      }
    }
    return this;
  }
  async runBeforeUrlChangeHooks() {
    return await this.router.beforeUrlChange.run({ route: this });
  }
  get meta() {
    return this.allFragments.reduce(
      (acc, curr) => ({ ...acc, ...curr.node.meta }),
      {}
    );
  }
  createFragment(node, urlFragment = "", params = {}) {
    return new RouteFragment(this, node, urlFragment, params);
  }
  _createFragments() {
    const url = this.url.replace(/[#?].+/, "");
    const rootNode = this.router.rootNode;
    const nodeChain = this.router.rootNode.getChainTo(url, {
      rootNode,
      allowDynamic: true,
      includeIndex: true
    });
    const fragments = nodeChain.map(
      (nc) => this.createFragment(nc.node, nc.fragment, nc.params)
    );
    return fragments;
  }
}
createLogger("[rf3]");
const createBrowserAdapter = (opts) => {
  const delimiter = (opts == null ? void 0 : opts.delimiter) || ";";
  return {
    toRouter: (url, router2) => {
      const formatRE = router2.name ? `${router2.name}=(.+?)` : `(.+?)`;
      const RE = new RegExp(`(^|${delimiter})${formatRE}(${delimiter}|$)`);
      const matches = url.match(RE);
      return matches ? matches[2] : "/";
    },
    toBrowser: (routers) => routers.map((r) => (r.name ? `${r.name}=` : "") + r.url.external()).join(delimiter)
  };
};
class AppInstance {
  constructor() {
    __publicField(this, "instances", []);
    __publicField(this, "browserAdapter", createBrowserAdapter());
    __publicField(this, "urlFromBrowser", (router2) => {
      return this.browserAdapter.toRouter(urlFromAddress(), router2);
    });
    globalThis["__routify"] = this;
  }
  get routers() {
    return [].concat(...this.instances.map((instance) => instance.routers));
  }
  register(instance) {
    this.instances.push(instance);
    return this;
  }
}
const appInstance = new AppInstance();
const shouldIgnoreClick = (event) => event.ctrlKey || event.metaKey || event.altKey || event.shiftKey || event.button || event.key && event.key !== "Enter" || event.defaultPrevented;
const getUrlFromEvent = (event) => {
  const el = event.target.closest("a");
  const href = el && el.href;
  if (!href || el.target || el.host !== location.host)
    return;
  const url = new URL(href);
  const relativeUrl = url.pathname + url.search + url.hash;
  event.preventDefault();
  return relativeUrl;
};
const fromEntries = (iterable) => {
  return [...iterable].reduce((obj, [key, val]) => {
    obj[key] = val;
    return obj;
  }, {});
};
const urlFromAddress = () => (({ pathname, search, hash }) => pathname + search + hash)(window.location);
const getGlobalContext = () => {
  console.log("Using helpers outside router context is not supported. Use at own risk.");
  const router2 = appInstance.routers[0];
  const route = router2.activeRoute.get() || router2.pendingRoute.get();
  return {
    elem: null,
    anchorLocation: null,
    options: null,
    childFragments: writable(route.allFragments),
    node: router2.rootNode,
    fragment: route.allFragments[0],
    isActive: writable(false),
    isVisible: writable(false),
    inline: null,
    router: router2,
    route,
    parentContext: null,
    onDestroy: null,
    decorators: [],
    single: writable(true),
    scrollBoundary: null
  };
};
const contexts = {
  get router() {
    return (getContext("routify-fragment-context") || getGlobalContext()).router;
  },
  get fragment() {
    return getContext("routify-fragment-context") || getGlobalContext();
  }
};
const getContextMaybe = (name) => {
  try {
    return getContext(name);
  } catch (err) {
  }
};
const getable = (value, start) => {
  const store = writable(value, start);
  return Object.assign(store, { get: () => get_store_value(store) });
};
const identicalRoutes = (...routes2) => routes2.map((route) => JSON.stringify([route == null ? void 0 : route.allFragments, route == null ? void 0 : route.url])).reduce((prev, curr) => prev === curr && curr);
const isAnonFn = (input) => typeof input === "function" && !input.prototype;
const resolveIfAnonFn = (subject, params) => isAnonFn(subject) ? subject(...params) : subject;
const pushToOrReplace = (arr, input) => {
  const _isAnonFn = isAnonFn(input);
  input = _isAnonFn || Array.isArray(input) ? input : [input];
  const res = _isAnonFn ? input([...arr]) : [...arr, ...input];
  if (!Array.isArray(res))
    throw new Error("anonymous callback did not return array");
  return res;
};
const waitFor = (store, cb) => new Promise((resolve, reject) => {
  try {
    const unsub = store.subscribe((val) => {
      if (cb(val)) {
        resolve(val);
        setTimeout(() => unsub);
      }
    });
  } catch (err) {
    reject(err);
  }
});
class BaseReflector {
  constructor(router2) {
    this.router = router2;
    this.log = this.router.log;
  }
  install() {
  }
  uninstall() {
  }
  reflect() {
  }
}
class RNode {
  constructor(name, module2, instance) {
    __publicField(this, "parent");
    __publicField(this, "meta", {});
    __publicField(this, "id");
    __publicField(this, "_regex", {});
    __publicField(this, "_paramKeys", {});
    this.instance = instance;
    this.name = name;
    instance.nodeIndex.push(this);
    this.module = module2;
    Object.defineProperty(this, "instance", { enumerable: false });
    Object.defineProperty(this, "parent", { enumerable: false });
  }
  appendChild(child) {
    if (child.instance)
      child.parent = this;
  }
  createChild(name, module2) {
    const node = this.instance.createNode(name, module2);
    this.appendChild(node);
    return node;
  }
  get descendants() {
    return this.instance.nodeIndex.filter(
      (node) => node.ancestors.find((n) => n === this)
    );
  }
  remove() {
    const { nodeIndex } = this.instance;
    const index2 = nodeIndex.findIndex((node) => node === this);
    nodeIndex.splice(index2, 1);
  }
  get ancestors() {
    let node = this;
    const ancestors = [];
    while (node = node.parent)
      ancestors.push(node);
    return ancestors;
  }
  get root() {
    let node = this;
    while (node.parent)
      node = node.parent;
    return node;
  }
  get isRoot() {
    return this === this.root;
  }
  get children() {
    return this.instance.nodeIndex.filter((node) => node.parent === this);
  }
  get level() {
    var _a;
    return (((_a = this.parent) == null ? void 0 : _a.level) || 0) + 1;
  }
  get regex() {
    const { name } = this;
    if (!this._regex[name])
      this._regex[name] = this.instance.utils.getRegexFromName(this.name);
    return this._regex[name];
  }
  set regex(value) {
    this._regex[this.name] = new RegExp(value);
  }
  get paramKeys() {
    const { name } = this;
    if (!this._paramKeys[name])
      this._paramKeys[name] = this.instance.utils.getFieldsFromName(this.name);
    return this._paramKeys[name];
  }
  getParams(urlFragment) {
    if (urlFragment.match(/^\.+$/))
      return {};
    const values = this.instance.utils.getValuesFromPath(this.regex, urlFragment);
    return this.instance.utils.mapFieldsWithValues(this.paramKeys, values);
  }
  traverse(path, allowDynamic = false, includeIndex = false, silent = false) {
    var _a;
    const isNamed = !path.startsWith("/") && !path.startsWith(".");
    return isNamed ? this.root.instance.nodeIndex.find((node) => node.meta.name === path) : (_a = this.getChainTo(path, { allowDynamic, includeIndex, silent })) == null ? void 0 : _a.pop().node;
  }
  getChainTo(path, options) {
    options = {
      ...{ allowDynamic: true, includeIndex: true },
      ...options
    };
    const originNode = path.startsWith("/") ? options.rootNode || this.root : this;
    const stepsToLeaf = path.split("/").filter((snip) => snip !== ".").filter(Boolean);
    let currentNodeStep = {
      node: originNode,
      stepsToLeaf,
      params: {},
      fragment: ""
    };
    const nodeSteps = [currentNodeStep];
    let inStaticDeadEnd = false;
    let inDynamicDeadEnd = false;
    while (currentNodeStep.stepsToLeaf.length) {
      const [nextStep, ...restSteps] = currentNodeStep.stepsToLeaf;
      const nextNode = nextStep === ".." ? currentNodeStep.node.parent : !inStaticDeadEnd && currentNodeStep.node.children.find(
        (node) => node.name === nextStep
      ) || options.allowDynamic && !inDynamicDeadEnd && currentNodeStep.node.children.filter(({ meta }) => meta.dynamic && !meta.dynamicSpread).find((node) => node.regex.test(nextStep)) || options.allowDynamic && currentNodeStep.node.children.find(
        (node) => node.meta.dynamicSpread
      );
      if (nextNode) {
        const nodeStep = {
          node: nextNode,
          params: nextNode.meta.dynamicSpread ? [nextStep] : nextNode.meta.dynamic ? nextNode.getParams(nextStep) : {},
          stepsToLeaf: restSteps,
          fragment: nextStep
        };
        currentNodeStep = nodeStep;
        nodeSteps.push(nodeStep);
      } else if (!options.allowDynamic && options.silent)
        return null;
      else if (!options.allowDynamic && !options.silent)
        throw new Error(
          `${nodeSteps.map((ns) => ns.node.name || "root").join("/")} could not travel to ${nextStep}`
        );
      else if (currentNodeStep.node.meta.dynamicSpread) {
        currentNodeStep.params.push(nextStep);
        currentNodeStep.fragment += `/${nextStep}`;
        currentNodeStep.stepsToLeaf.shift();
        inDynamicDeadEnd = false;
        inStaticDeadEnd = false;
      } else {
        nodeSteps.pop();
        currentNodeStep = [...nodeSteps].pop();
        inDynamicDeadEnd = inStaticDeadEnd;
        inStaticDeadEnd = true;
        if (!currentNodeStep && options.silent)
          return null;
        else if (!currentNodeStep && !options.silent)
          throw new Error(`Could not find path "${path}" from ${this.name}`);
      }
    }
    try {
      const indexNode = options.includeIndex && currentNodeStep.node.traverse("./index");
      if (indexNode)
        nodeSteps.push({
          node: indexNode,
          stepsToLeaf: [],
          params: {},
          fragment: ""
        });
    } catch (err) {
    }
    nodeSteps.forEach((ns) => {
      ns.params = Array.isArray(ns.params) ? { [ns.node.name.replace(/\[\.\.\.(.+)\]/, "$1")]: ns.params } : ns.params;
    });
    return nodeSteps;
  }
  toJSON() {
    return {
      ...this,
      children: [...this.children]
    };
  }
  get path() {
    return "/" + [this, ...this.ancestors].reverse().map((node) => node.name).filter(Boolean).join("/");
  }
}
const CTX = "routify-fragment-context";
const Node = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var _a;
  let { node } = $$props;
  let { passthrough } = $$props;
  const context2 = { ...getContext(CTX), node };
  setContext(CTX, context2);
  let Component = (_a = node.module) == null ? void 0 : _a.default;
  if (!Component && node.asyncModule)
    node.asyncModule().then((r) => Component = r.default);
  if ($$props.node === void 0 && $$bindings.node && node !== void 0)
    $$bindings.node(node);
  if ($$props.passthrough === void 0 && $$bindings.passthrough && passthrough !== void 0)
    $$bindings.passthrough(passthrough);
  return `${Component ? `${validate_component(Component || missing_component, "svelte:component").$$render($$result, Object.assign({}, passthrough, { context: context2 }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}` : `${slots.default ? slots.default({}) : ``}`}`;
});
class RNodeRuntime extends RNode {
  constructor(name, module2, instance, asyncModule) {
    super(name, module2, instance);
    __publicField(this, "asyncModule");
    __publicField(this, "importTree", (snapshotRoot) => {
      const queue = [[this, snapshotRoot]];
      while (queue.length) {
        const [node, snapshot] = queue.pop();
        const { children, ...nodeSnapshot } = snapshot;
        Object.assign(node, nodeSnapshot);
        for (const childSnapshot of children) {
          const childNode = node.createChild(
            snapshot.name || snapshot.rootName || ""
          );
          queue.push([childNode, childSnapshot]);
        }
      }
      return this;
    });
    this.module = module2;
    this.asyncModule = asyncModule;
  }
  get children() {
    return this.instance.nodeIndex.filter((node) => node.parent === this).sort((prev, curr) => (prev.meta.order || 0) - (curr.meta.order || 0));
  }
  get pages() {
    return this.pagesWithIndex.filter((node) => node.name !== "index");
  }
  get pagesWithIndex() {
    return this.children.filter((node) => !node.meta.fallback).filter((node) => !node.name.startsWith("_")).filter((node) => !node.name.includes("[")).filter((node) => {
      var _a;
      return !(((_a = node.meta) == null ? void 0 : _a.order) === false);
    });
  }
  get hasComponent() {
    return !!(this.module || this.asyncModule);
  }
  async getRawComponent() {
    const module2 = await this.loadModule();
    return module2 == null ? void 0 : module2.default;
  }
  async loadModule() {
    if (!this.module && this.asyncModule) {
      this.module = await this.asyncModule();
    }
    return this.module;
  }
  get component() {
    const node = this;
    return function(options) {
      options.props = {
        ...options.props,
        passthrough: options.props,
        node
      };
      return new Node({ ...options });
    };
  }
  get _fallback() {
    var _a;
    return this.children.find((node) => node.meta.fallback) || ((_a = this.parent) == null ? void 0 : _a._fallback);
  }
}
const defaultRe = /\[(.+?)\]/gm;
class UrlParamUtils {
  constructor(RE = defaultRe) {
    __publicField(this, "getFieldsFromName", (name) => [...name.matchAll(this.RE)].map((v) => v[1]));
    __publicField(this, "getRegexFromName", (name) => new RegExp("^" + name.replace(this.RE, "(.+)") + "$"));
    __publicField(this, "getValuesFromPath", (re, path) => (path.match(re) || []).slice(1));
    __publicField(this, "mapFieldsWithValues", (fields, values) => this.haveEqualLength(fields, values) && fields.reduce((map, field, index2) => {
      map[field] = values[index2];
      return map;
    }, {}));
    __publicField(this, "haveEqualLength", (fields, values) => {
      if (fields.length !== values.length)
        throw new Error(
          `fields and values should be of same length
fields: ${JSON.stringify(fields)}
values: ${JSON.stringify(values)}`
        );
      return true;
    });
    this.RE = RE;
  }
}
class Routify {
  constructor() {
    __publicField(this, "NodeConstructor");
    __publicField(this, "NodeType");
    __publicField(this, "nodeIndex", []);
    __publicField(this, "rootNodes", {});
    __publicField(this, "utils", new UrlParamUtils());
  }
  createNode(name, module2) {
    return new this.NodeConstructor(name, module2, this);
  }
}
class RoutifyRuntime extends Routify {
  constructor(options) {
    super();
    __publicField(this, "NodeConstructor", RNodeRuntime);
    __publicField(this, "mode", "runtime");
    __publicField(this, "routers", []);
    __publicField(this, "rootNodes", {});
    this.options = options;
    if (options.routes) {
      this.rootNodes[options.routes.rootName || "unnamed"] = this.createNode(
        options.routes.rootName
      ).importTree(options.routes);
    }
    this.global = appInstance.register(this);
    Object.defineProperty(this, "routers", { enumerable: false });
    this.log = this.global.log;
  }
}
class AddressReflector extends BaseReflector {
  constructor(router2) {
    super(router2);
    __publicField(this, "reflect", () => {
      const { mode } = get_store_value(this.router.activeRoute);
      if (mode === "popState")
        return false;
      const { routers, browserAdapter } = this.router.instance.global;
      const addressRouters = routers.filter(
        (router2) => router2.urlReflector instanceof this.constructor
      );
      const url = browserAdapter.toBrowser(addressRouters);
      history[`${mode}Native`]({}, "", url);
    });
    const { instance, urlRewrites } = router2;
    const { urlFromBrowser, browserAdapter } = instance.global;
    if (!history["onPushstate"]) {
      polyfillHistory();
    }
    const createStateEventHandler = (method) => {
      return function(data, title, url) {
        var _a, _b;
        const routerName = (_b = (_a = data == null ? void 0 : data.routify) == null ? void 0 : _a.router) != null ? _b : false;
        if (routerName === false)
          url = browserAdapter.toRouter(url, router2);
        else if (routerName !== router2.name)
          return false;
        for (const rewrite of urlRewrites)
          url = rewrite.toInternal(url, { router: router2 });
        router2.url[method](url);
      };
    };
    this.absorb = () => router2.url.replace(urlFromBrowser(router2));
    this._pushstateHandler = createStateEventHandler("push");
    this._replacestateHandler = createStateEventHandler("replace");
    this._popstateHandler = () => router2.url.pop(urlFromBrowser(router2));
  }
  install() {
    this.hooks = [
      history["onPushstate"](this._pushstateHandler),
      history["onReplacestate"](this._replacestateHandler),
      history["onPopstate"](this._popstateHandler)
    ];
    if (!get_store_value(this.router.activeRoute))
      this.absorb();
    else
      this.reflect();
  }
  uninstall() {
    this.hooks.forEach((unreg) => unreg());
    setTimeout(() => this.reflect());
  }
}
function polyfillHistory() {
  const hooks = {
    onPushstate: createSequenceHooksCollection(),
    onReplacestate: createSequenceHooksCollection(),
    onPopstate: createSequenceHooksCollection()
  };
  Object.assign(history, hooks);
  const { pushState, replaceState } = history;
  history["pushStateNative"] = pushState;
  history["replaceStateNative"] = replaceState;
  history.pushState = hooks.onPushstate.run;
  history.replaceState = hooks.onReplacestate.run;
  window.addEventListener("popstate", hooks.onPopstate.run);
  return true;
}
class InternalReflector extends BaseReflector {
  install() {
    this.router.url.replace("/");
  }
}
const parseModuleName = (str) => {
  const matches = str.match(/^(.+?)(\+)?$/);
  const [, name, prepend] = matches;
  return { name, prepend };
};
const handlers = {
  boolean(route, bool, fragment) {
    const index2 = fragment.index;
    return handlers.number(route, index2, fragment);
  },
  number(route, num, fragment) {
    const index2 = fragment.index;
    const start = index2 - num;
    route.allFragments.splice(start, num);
  },
  string(route, str, fragment) {
    const selfIndex = fragment.index;
    const precedingFragments = route.allFragments.slice(0, selfIndex + 1);
    let nextFragment;
    const { name, prepend } = parseModuleName(str);
    while (precedingFragments.length) {
      nextFragment = precedingFragments.pop();
      const matchingSiblingNode = nextFragment.node.children.find(
        (node) => node.meta.moduleName === name
      );
      if (matchingSiblingNode) {
        if (!prepend)
          route.allFragments.splice(0, fragment.index);
        route.allFragments.unshift(route.createFragment(matchingSiblingNode));
        precedingFragments.splice(0);
      }
    }
  }
};
const handleFragment = (route) => (fragment) => {
  const { reset: reset2 } = fragment.node.meta;
  if (reset2)
    handlers[typeof reset2](route, reset2, fragment);
};
const reset = () => {
  return {
    beforeUrlChange: ({ route }) => {
      const fragments = [...route.allFragments];
      fragments.forEach(handleFragment(route));
      return true;
    }
  };
};
const next = (store, wanted, strict) => new Promise((resolve) => {
  let unsub;
  unsub = store.subscribe((value) => {
    if (!unsub)
      return;
    if (typeof wanted === "undefined" || value === wanted || value == wanted && !strict || typeof wanted === "function" && wanted(value)) {
      resolve(value);
    }
  });
});
const normalizeRouterOptions = (options, config) => {
  config = config || {
    name: "",
    beforeRouterInit: [],
    afterRouterInit: [],
    urlRewrite: [],
    beforeUrlChange: [],
    afterUrlChange: [],
    transformFragments: [],
    onDestroy: []
  };
  const { plugins, ...optionsOnly } = options;
  const optionsGroups = [...plugins || [], optionsOnly];
  optionsGroups.forEach((pluginOptions) => {
    var _a;
    (_a = pluginOptions.plugins) == null ? void 0 : _a.forEach((plugin) => normalizeRouterOptions(plugin, config));
    delete pluginOptions.plugins;
    Object.entries(pluginOptions).forEach(([field, value]) => {
      if (Array.isArray(config[field]))
        config[field].push(...[value].flat().filter(Boolean));
      else
        config[field] = value || config[field];
    });
  });
  return config;
};
const stripNullFields = (obj) => Object.fromEntries(Object.entries(obj).filter(([_, v]) => v != null));
const defaultPlugins = [reset()];
class Router {
  constructor(input) {
    __publicField(this, "pendingRoute", getable(null));
    __publicField(this, "activeRoute", getable(null));
    __publicField(this, "_urlReflector", null);
    __publicField(this, "urlRewrites", []);
    __publicField(this, "beforeRouterInit", createSequenceHooksCollection());
    __publicField(this, "afterRouterInit", createSequenceHooksCollection());
    __publicField(this, "beforeUrlChange", createGuardsCollection());
    __publicField(this, "afterUrlChange", createSequenceHooksCollection());
    __publicField(this, "transformFragments", createPipelineCollection());
    __publicField(this, "onDestroy", createSequenceHooksCollection());
    __publicField(this, "parentElem", null);
    __publicField(this, "queryHandler", {
      parse: (search, route) => fromEntries(new URLSearchParams(search)),
      stringify: (params, route) => {
        const query = new URLSearchParams(params).toString();
        return query ? `?${query}` : "";
      }
    });
    __publicField(this, "clickHandler", {});
    __publicField(this, "url", {
      internal: () => this.url.getPending() || this.url.getActive(),
      external: () => this.getExternalUrl(),
      getActive: () => {
        var _a;
        return (_a = get_store_value(this.activeRoute)) == null ? void 0 : _a.url;
      },
      getPending: () => {
        var _a;
        return (_a = get_store_value(this.pendingRoute)) == null ? void 0 : _a.url;
      },
      toString: () => this.url.internal(),
      set: this._setUrl.bind(this),
      push: (url, state = {}) => this._setUrl(url, "pushState", false, state),
      replace: (url, state = {}) => this._setUrl(url, "replaceState", false, state),
      pop: (url, state = {}) => this._setUrl(url, "popState", false, state)
    });
    __publicField(this, "ready", async () => !this.pendingRoute.get() && this.activeRoute.get() || next(this.activeRoute, (x) => !!x));
    __publicField(this, "history", []);
    __publicField(this, "setParentElem", (elem) => {
      this.parentElem = elem;
    });
    __publicField(this, "getExternalUrl", (url) => {
      const result = this.urlRewrites.reduce(
        (_url, rewrite) => rewrite.toExternal(_url, { router: this }),
        url || this.url.internal()
      );
      return result;
    });
    __publicField(this, "getInternalUrl", (url) => this.urlRewrites.reduce(
      (_url, rewrite) => rewrite.toInternal(_url, { router: this }),
      url
    ));
    const { subscribe: subscribe2, set } = writable(this);
    this.subscribe = subscribe2;
    this.triggerStore = () => set(this);
    const oldRouter = appInstance.routers.find((r) => r.name == (input.name || ""));
    if (oldRouter)
      return oldRouter;
    else {
      input.plugins = [...input.plugins || [], ...defaultPlugins].filter(Boolean);
      this.init(input);
      this.params = derived(this.activeRoute, ($activeRoute) => $activeRoute.params);
      this.afterUrlChange(() => setTimeout(() => this._urlReflector.reflect()));
      this.activeRoute.get = () => get_store_value(this.activeRoute);
      this.pendingRoute.get = () => get_store_value(this.pendingRoute);
    }
  }
  init(input) {
    const firstInit = !this.options;
    input = stripNullFields(input);
    this.options = normalizeRouterOptions({ ...this.options, ...input });
    let {
      instance,
      rootNode,
      name,
      routes: routes2,
      urlRewrite,
      urlReflector,
      url,
      passthrough,
      beforeUrlChange,
      afterUrlChange,
      transformFragments,
      onDestroy: onDestroy2,
      beforeRouterInit,
      afterRouterInit,
      queryHandler,
      clickHandler
    } = this.options;
    if (queryHandler)
      this.queryHandler = queryHandler;
    if (clickHandler)
      this.clickHandler = clickHandler;
    beforeUrlChange.forEach(this.beforeUrlChange);
    transformFragments.forEach(this.transformFragments);
    afterUrlChange.forEach(this.afterUrlChange);
    onDestroy2.forEach(this.onDestroy);
    beforeRouterInit.forEach(this.beforeRouterInit);
    afterRouterInit.forEach(this.afterRouterInit);
    this.beforeRouterInit.run({ router: this, firstInit });
    const parentCmpCtx = getContextMaybe("routify-fragment-context");
    this.instance = instance || this.instance || (parentCmpCtx == null ? void 0 : parentCmpCtx.route.router.instance) || appInstance.instances[0] || new RoutifyRuntime({});
    this.name = name;
    this.urlRewrites = urlRewrite;
    if (passthrough && !(passthrough instanceof Router))
      passthrough = (parentCmpCtx == null ? void 0 : parentCmpCtx.route.router) || passthrough;
    this.passthrough = passthrough || this.passthrough;
    appInstance.instances.forEach((inst) => {
      const index2 = inst.routers.indexOf(this);
      if (index2 !== -1)
        inst.routers.splice(index2, 1);
    });
    this.instance.routers.push(this);
    if (routes2 && !this.rootNode)
      this.importRoutes(routes2);
    this.parentCmpCtx = parentCmpCtx;
    this.rootNode = rootNode || this.rootNode || this.instance.rootNodes.default;
    if (this.url.getActive()) {
      this._setUrl(this.url.getActive(), "pushState", true);
    }
    const shouldInstallUrlReflector = !this.urlReflector || urlReflector && !(this.urlReflector instanceof urlReflector);
    if (shouldInstallUrlReflector) {
      urlReflector = urlReflector || (typeof window != "undefined" ? AddressReflector : InternalReflector);
      this.setUrlReflector(urlReflector);
    }
    if (url)
      this.url.replace(url);
    this.triggerStore();
    this.afterRouterInit.run({ router: this, firstInit });
  }
  importRoutes(routes2) {
    this.rootNode = this.instance.createNode().importTree(routes2);
    this.instance.rootNodes[routes2.rootName || "unnamed"] = this.rootNode;
  }
  async _setUrl(url, mode, isInternal, state = {}) {
    if (!isInternal)
      url = this.getInternalUrl(url);
    url = url || "/";
    url = url.replace(/(.+)\/+([#?]|$)/, "$1$2");
    if (!url.startsWith("/"))
      url = url.replace(new URL(url).origin, "");
    const currentRoute = this.pendingRoute.get() || this.activeRoute.get();
    const route = new Route(this, url, mode, state);
    const loadRoutePromise = route.loadRoute();
    if (state.prefetch)
      return;
    if (identicalRoutes(currentRoute, route)) {
      return false;
    } else {
      this.pendingRoute.set(route);
      const didLoadRoute = await loadRoutePromise;
      if (this.pendingRoute.get() === route)
        this.pendingRoute.set(null);
      if (didLoadRoute)
        this.setActiveRoute(route);
      await new Promise((resolve) => setTimeout(resolve));
      return true;
    }
  }
  setActiveRoute(route) {
    const $activeRoute = this.activeRoute.get();
    if ($activeRoute)
      this.history.push($activeRoute);
    this.activeRoute.set(route);
    this.afterUrlChange.run({
      route,
      history: [...this.history].reverse()
    });
  }
  destroy() {
    this.instance.routers = this.instance.routers.filter((router2) => router2 !== this);
    this.onDestroy.run({ router: this });
  }
  get urlReflector() {
    return this._urlReflector;
  }
  setUrlReflector(UrlReflector) {
    var _a;
    (_a = this._urlReflector) == null ? void 0 : _a.uninstall();
    this._urlReflector = new UrlReflector(this);
    this._urlReflector.install();
    this.triggerStore();
  }
}
const createRouter = (options) => new Router(options);
const DecoratorWrapper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { decorators = null } = $$props;
  let { isRoot = true } = $$props;
  let { context: context2 } = $$props;
  decorators = decorators || context2.decorators;
  let [decorator, ...restOfDecorators] = [...decorators];
  while (decorator && !(decorator == null ? void 0 : decorator.shouldRender({ context: context2, isRoot, decorators })))
    [decorator, ...restOfDecorators] = [...restOfDecorators];
  if (isRoot)
    onDestroy(() => context2.onDestroy.run());
  if ($$props.decorators === void 0 && $$bindings.decorators && decorators !== void 0)
    $$bindings.decorators(decorators);
  if ($$props.isRoot === void 0 && $$bindings.isRoot && isRoot !== void 0)
    $$bindings.isRoot(isRoot);
  if ($$props.context === void 0 && $$bindings.context && context2 !== void 0)
    $$bindings.context(context2);
  return `


${decorator ? `${validate_component(decorator.component || missing_component, "svelte:component").$$render($$result, { context: context2, isRoot }, {}, {
    default: () => {
      return `${validate_component(DecoratorWrapper, "svelte:self").$$render(
        $$result,
        {
          decorators: restOfDecorators,
          context: context2,
          isRoot: false
        },
        {},
        {
          default: () => {
            return `${slots.default ? slots.default({}) : ``}`;
          }
        }
      )}`;
    }
  })}` : `${slots.default ? slots.default({}) : ``}`}`;
});
const Noop = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { context: context2 = null } = $$props;
  let { Parent = null } = $$props;
  if ($$props.context === void 0 && $$bindings.context && context2 !== void 0)
    $$bindings.context(context2);
  if ($$props.Parent === void 0 && $$bindings.Parent && Parent !== void 0)
    $$bindings.Parent(Parent);
  return `${slots.default ? slots.default({}) : ``}`;
});
const AnchorDecorator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["location", "onMount"]);
  let { location: location2 } = $$props;
  let { onMount = (x) => x } = $$props;
  let elem;
  if ($$props.location === void 0 && $$bindings.location && location2 !== void 0)
    $$bindings.location(location2);
  if ($$props.onMount === void 0 && $$bindings.onMount && onMount !== void 0)
    $$bindings.onMount(onMount);
  return `${location2 === "wrapper" ? `<div${spread([escape_object($$restProps)], {})}${add_attribute("this", elem, 0)}>${slots.default ? slots.default({}) : ``}</div>` : `${location2 === "header" ? `<div${spread([escape_object($$restProps)], {})}${add_attribute("this", elem, 0)}></div>
    ${slots.default ? slots.default({}) : ``}` : `${`<div${spread(
    [
      { "data-routify-anchor-locator": true },
      { class: "anchor" },
      escape_object($$restProps)
    ],
    {}
  )}${add_attribute("this", elem, 0)}></div>`}
    ${slots.default ? slots.default({}) : ``}
    `}`}`;
});
const RenderFragment = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var _a;
  let params;
  let load2;
  let route;
  let compProps;
  let routifyContext;
  let $isVisible, $$unsubscribe_isVisible;
  let $childFragments, $$unsubscribe_childFragments;
  let { context: context2 } = $$props;
  let { props } = $$props;
  const { isVisible, childFragments } = context2;
  $$unsubscribe_isVisible = subscribe(isVisible, (value) => $isVisible = value);
  $$unsubscribe_childFragments = subscribe(childFragments, (value) => $childFragments = value);
  let NodeComponent = ((_a = context2.node.module) == null ? void 0 : _a.default) || context2.node.asyncModule || Noop;
  setContext("routify-fragment-context", context2);
  const updateRenderContext = (elem, newMeta) => {
    var _a2;
    elem["__routify_meta"] = {
      ...elem["__routify_meta"],
      renderContext: {
        ...(_a2 = elem["__routify_meta"]) == null ? void 0 : _a2.renderContext,
        ...newMeta
      }
    };
    return elem;
  };
  const initialize = (parent, anchor) => {
    context2.elem.set({ anchor, parent });
    parent = updateRenderContext(parent, { parent: context2 });
    if (anchor)
      anchor = updateRenderContext(anchor, { anchor: context2 });
  };
  if ($$props.context === void 0 && $$bindings.context && context2 !== void 0)
    $$bindings.context(context2);
  if ($$props.props === void 0 && $$bindings.props && props !== void 0)
    $$bindings.props(props);
  {
    if (isAnonFn(NodeComponent) && $isVisible)
      context2.node.loadModule().then((r) => NodeComponent = r.default);
  }
  ({ params, load: load2, route } = context2.fragment);
  compProps = { ...params, ...load2 == null ? void 0 : load2.props, ...props };
  routifyContext = { ...context2, load: load2, route };
  $$unsubscribe_isVisible();
  $$unsubscribe_childFragments();
  return `${$isVisible && !isAnonFn(NodeComponent) ? `
    ${validate_component(AnchorDecorator, "AnchorDecorator").$$render(
    $$result,
    {
      location: context2.anchorLocation,
      onMount: initialize,
      context: context2
    },
    {},
    {
      default: () => {
        return `
        ${validate_component(DecoratorWrapper, "DecoratorWrapper").$$render($$result, { context: context2 }, {}, {
          default: () => {
            return `
            ${validate_component(NodeComponent || missing_component, "svelte:component").$$render($$result, Object.assign({}, compProps, { context: routifyContext }), {}, {
              default: ({ props: props2, inline, multi, decorator, anchor, options, scrollBoundary }) => {
                return `${$childFragments.length || inline && !(inline == null ? void 0 : inline.single) || multi && !(multi == null ? void 0 : multi.single) ? `
                    
                    ${validate_component(ComposeFragments, "Compose").$$render(
                  $$result,
                  {
                    options: {
                      inline: inline || multi,
                      decorator,
                      props: props2,
                      options,
                      scrollBoundary,
                      anchor: anchor || context2.anchorLocation
                    },
                    context: context2
                  },
                  {},
                  {}
                )}
                ` : ``}`;
              }
            })}`;
          }
        })}`;
      }
    }
  )}` : ``}`;
});
const nodeIsPage = (node) => {
  var _a;
  return !node.meta.fallback && !node.name.startsWith("_") && ((_a = node.meta) == null ? void 0 : _a.order) !== false;
};
const getChildren = (refNode, parentContext) => {
  const parentNode = (parentContext == null ? void 0 : parentContext.node) || refNode.parent;
  const matches = parentNode ? parentNode.children.filter((node) => node === refNode || nodeIsPage(node)) : [refNode];
  return matches.length ? matches : [refNode];
};
const coerceStringToNode = (nodeOrString, refNode) => typeof nodeOrString === "string" ? refNode.traverse(nodeOrString) : nodeOrString;
const coercePagesToNodes = (pagesInput, refNode, parentContext) => {
  const pageInputs = Array.isArray(pagesInput) ? pagesInput : getChildren(refNode, parentContext);
  return pageInputs.map((page) => coerceStringToNode(page, refNode));
};
const convertToObj = (inlineInput) => inlineInput instanceof Object ? !Array.isArray(inlineInput) ? inlineInput : { pages: inlineInput } : {};
const normalizeInline = (inlineInput, refNode, parentContext) => {
  const inline = convertToObj(inlineInput);
  inline.single = inline.single || !inlineInput;
  inline.pages = coercePagesToNodes(inline.pages, refNode, parentContext);
  inline.renderInactive = inline.renderInactive || "browser";
  return inline;
};
const decoratorDefaults = { recursive: true, shouldRender: () => true };
const normalizeDecorator = (decorator) => {
  if ("component" in decorator)
    return { ...decoratorDefaults, ...decorator };
  else
    return { ...decoratorDefaults, component: decorator };
};
const ComposeFragments = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var _a;
  let $childFragments, $$unsubscribe_childFragments;
  let $isActive, $$unsubscribe_isActive;
  const isRoot = void 0;
  let { context: context2 = null } = $$props;
  let { options } = $$props;
  const environment = typeof window !== "undefined" ? "browser" : "ssr";
  let activeContext;
  const { childFragments, isActive, route } = context2;
  $$unsubscribe_childFragments = subscribe(childFragments, (value) => $childFragments = value);
  $$unsubscribe_isActive = subscribe(isActive, (value) => $isActive = value);
  const { inline: multiInput, decorator, props, anchor: anchorLocation, options: _options, scrollBoundary = (elem) => elem.parentElement } = options;
  const getChildIndex = (node) => node.children.find((node2) => node2.name === "index");
  const recursiveDecorators = context2.decorators.filter((deco) => deco.recursive);
  const newDecorators = pushToOrReplace(recursiveDecorators, decorator).filter(Boolean).map(normalizeDecorator);
  const folderDecorator = (_a = context2 == null ? void 0 : context2.node) == null ? void 0 : _a.children.find((node) => node.name === "_decorator");
  const addFolderDecorator = (decorators, folderDecorator2) => {
    var _a2, _b, _c;
    const options2 = folderDecorator2.module.options || {};
    decorators.push({
      component: folderDecorator2.module.default,
      recursive: (_b = (_a2 = options2.recursive) != null ? _a2 : folderDecorator2.meta.recursive) != null ? _b : true,
      shouldRender: (_c = options2.shouldRender) != null ? _c : () => true
    });
  };
  let wait = false;
  if (folderDecorator) {
    if (folderDecorator.module)
      addFolderDecorator(newDecorators, folderDecorator);
    else {
      wait = true;
      folderDecorator.loadModule().then(() => {
        addFolderDecorator(newDecorators, folderDecorator);
        wait = false;
      });
    }
  }
  const buildChildContexts = () => {
    var _a2;
    const inline = normalizeInline(multiInput, (_a2 = $childFragments[0]) == null ? void 0 : _a2.node, context2);
    return inline.pages.map((node) => {
      var _a3, _b;
      return {
        anchorLocation: anchorLocation || "parent",
        childFragments: writable(getChildIndex(node) ? [new RouteFragment(route, getChildIndex(node))] : []),
        node,
        fragment: new RouteFragment(route, node, null, {}),
        isActive: writable(false),
        isVisible: writable(false),
        elem: writable(null),
        router: ((_b = (_a3 = $childFragments[0]) == null ? void 0 : _a3.route) == null ? void 0 : _b.router) || context2.router,
        route: null,
        parentContext: context2,
        onDestroy: createSequenceHooksCollection(),
        decorators: newDecorators,
        options: _options || {},
        scrollBoundary,
        inline,
        single: writable(inline.single)
      };
    });
  };
  let childContexts = buildChildContexts();
  const handlePageChange = (fragments) => {
    const [fragment, ...childFragments2] = [...fragments];
    activeContext = childContexts.find((s) => s.node === (fragment == null ? void 0 : fragment.node));
    if (!activeContext) {
      childContexts = buildChildContexts();
      return handlePageChange(fragments);
    }
    activeContext.fragment = fragment;
    activeContext.childFragments.set(childFragments2);
    activeContext.route = fragments[0].route;
    childContexts = childContexts;
  };
  const setVisibility = (childContexts2) => {
    childContexts2.forEach((context3) => {
      const notExcludedCtx = (context4) => {
        var _a2, _b;
        return !((_b = (_a2 = context4 == null ? void 0 : context4.node) == null ? void 0 : _a2.meta.inline) == null ? void 0 : _b.exclude);
      };
      const isPartOfPage = () => {
        var _a2;
        return !get_store_value(activeContext == null ? void 0 : activeContext.single) && !get_store_value(context3.single) && [context3, activeContext].every(notExcludedCtx) && ["always", environment].includes((_a2 = context3.inline) == null ? void 0 : _a2.renderInactive);
      };
      const isActive2 = context3 === activeContext;
      const wasActive = get_store_value(context3.isActive);
      if (wasActive != isActive2)
        context3.isActive.set(isActive2);
      const isVisible = isActive2 || isPartOfPage();
      const wasVisible = get_store_value(context3.isVisible);
      if (wasVisible != isVisible)
        context3.isVisible.set(isVisible);
    });
  };
  if ($$props.isRoot === void 0 && $$bindings.isRoot && isRoot !== void 0)
    $$bindings.isRoot(isRoot);
  if ($$props.context === void 0 && $$bindings.context && context2 !== void 0)
    $$bindings.context(context2);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  {
    if (!$isActive)
      childContexts.forEach((cc) => cc.isActive.set(false));
  }
  $childFragments.length && handlePageChange($childFragments);
  {
    setVisibility(childContexts);
  }
  $$unsubscribe_childFragments();
  $$unsubscribe_isActive();
  return `${!wait ? `${each(childContexts, (context3) => {
    return `${validate_component(RenderFragment, "RenderFragment").$$render($$result, { context: context3, props }, {}, {})}`;
  })}` : ``}`;
});
const persistentScopedScrollIntoView = (_elem, _boundary, options, timeout) => {
  let elem = resolveIfAnonFn(_elem, [_boundary]);
  const boundary = resolveIfAnonFn(_boundary, [elem]);
  options = options || {};
  options.behavior = "auto";
  scopedScrollIntoView(elem, boundary);
  const observer = new MutationObserver((mo) => {
    if (mo.length > 1 || mo[0].addedNodes.length || mo[0].removedNodes.length) {
      scopedScrollIntoView(elem, boundary);
    }
  });
  observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    characterData: true
  });
  const stopScroll = () => observer.disconnect();
  if (timeout) {
    return new Promise(
      (resolve) => setTimeout(() => {
        stopScroll();
        resolve();
      }, timeout)
    );
  } else {
    return stopScroll;
  }
};
const getMulti = (elem) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m;
  if (!elem)
    return false;
  if ((_a = elem["__routify_meta"]) == null ? void 0 : _a.router)
    return false;
  if ((_d = (_c = (_b = elem["__routify_meta"]) == null ? void 0 : _b.renderContext) == null ? void 0 : _c.anchor) == null ? void 0 : _d.single)
    return !get_store_value((_g = (_f = (_e = elem["__routify_meta"]) == null ? void 0 : _e.renderContext) == null ? void 0 : _f.anchor) == null ? void 0 : _g.single);
  if ((_j = (_i = (_h = elem["__routify_meta"]) == null ? void 0 : _h.renderContext) == null ? void 0 : _i.parent) == null ? void 0 : _j.single)
    return !get_store_value((_m = (_l = (_k = elem["__routify_meta"]) == null ? void 0 : _k.renderContext) == null ? void 0 : _l.parent) == null ? void 0 : _m.single);
  else
    return getMulti(elem.parentElement);
};
const scopedScrollIntoView = async (_elem, _boundary) => {
  let elem = await resolveIfAnonFn(_elem, [_boundary]);
  const boundary = await resolveIfAnonFn(_boundary, [elem]);
  let parent = elem.parentElement;
  while ((parent == null ? void 0 : parent.scrollTo) && parent.dataset["routifyScroll"] !== "lock" && parent !== (boundary == null ? void 0 : boundary.parentElement)) {
    const scrollToPos = getMulti(elem) || elem["routify-hash-nav"];
    if (!scrollToPos) {
      parent.scrollTo(0, 0);
    } else {
      const targetRect = elem.getBoundingClientRect();
      const parentRect = parent.getBoundingClientRect();
      const scrollTop = parent.parentElement ? parent.scrollTop : 0;
      const scrollLeft = parent.parentElement ? parent.scrollLeft : 0;
      const top = scrollTop + targetRect.top - parentRect.top;
      const left = scrollLeft + targetRect.left - parentRect.left;
      parent.scrollTo({ top, left });
    }
    if (!scrollToPos)
      elem = parent;
    parent = parent.parentElement;
  }
};
const scrollToContext = async (context2) => {
  const { anchor, parent } = await waitFor(context2.elem, Boolean);
  const scrollTarget = anchor || parent;
  let scrollBoundary = await context2.scrollBoundary;
  scopedScrollIntoView(scrollTarget, scrollBoundary);
};
const hashScroll = (route) => {
  setTimeout(
    async () => {
      var _a;
      const hashElem = (_a = globalThis.document) == null ? void 0 : _a.getElementById(route == null ? void 0 : route.hash);
      if (hashElem) {
        hashElem["routify-hash-nav"] = "true";
        await persistentScopedScrollIntoView(hashElem, null, {}, 500);
        delete hashElem["routify-hash-nav"];
      }
    },
    0
  );
};
const ScrollDecorator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let route;
  let isActive;
  let { context: context2 } = $$props;
  const isRoot = void 0;
  if ($$props.context === void 0 && $$bindings.context && context2 !== void 0)
    $$bindings.context(context2);
  if ($$props.isRoot === void 0 && $$bindings.isRoot && isRoot !== void 0)
    $$bindings.isRoot(isRoot);
  ({ route, isActive } = context2);
  {
    if (route == null ? void 0 : route.hash)
      hashScroll(route);
    else if (get_store_value(isActive) && !(route == null ? void 0 : route.state.dontScroll))
      scrollToContext(context2);
  }
  return `${slots.default ? slots.default({}) : ``}`;
});
const Router_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let activeRoute;
  let $activeRoute, $$unsubscribe_activeRoute = noop, $$subscribe_activeRoute = () => ($$unsubscribe_activeRoute(), $$unsubscribe_activeRoute = subscribe(activeRoute, ($$value) => $activeRoute = $$value), activeRoute);
  let { router: router2 = null } = $$props;
  let { routes: routes2 = null } = $$props;
  let { decorator = null } = $$props;
  let { urlReflector = null } = $$props;
  let { instance = null } = $$props;
  let { urlRewrite = null } = $$props;
  let { url = null } = $$props;
  let { name = null } = $$props;
  let { rootNode = null } = $$props;
  let { passthrough = null } = $$props;
  let { beforeRouterInit = null } = $$props;
  let { afterRouterInit = null } = $$props;
  let { beforeUrlChange = null } = $$props;
  let { afterUrlChange = null } = $$props;
  let { transformFragments = null } = $$props;
  let { onDestroy: onDestroy$1 = null } = $$props;
  let { plugins = null } = $$props;
  let { queryHandler = null } = $$props;
  let { anchor = "wrapper" } = $$props;
  let { clickHandler = {} } = $$props;
  const context2 = {
    childFragments: writable([]),
    decorators: [normalizeDecorator(ScrollDecorator)]
  };
  const options = {
    instance,
    rootNode,
    name,
    routes: routes2,
    urlRewrite,
    urlReflector,
    passthrough,
    beforeRouterInit,
    afterRouterInit,
    beforeUrlChange,
    afterUrlChange,
    transformFragments,
    onDestroy: onDestroy$1,
    plugins,
    queryHandler,
    clickHandler
  };
  if (!router2)
    router2 = new Router(options);
  const initialize = (elem) => {
    var _a;
    elem = anchor === "parent" || anchor === "wrapper" ? elem : elem.parentElement;
    router2.setParentElem(elem);
    elem["__routify_meta"] = { ...elem["__routify_meta"], router: router2 };
    let clickScopeElem = resolveIfAnonFn(((_a = router2.clickHandler) == null ? void 0 : _a.elem) || elem, [elem]);
    if (!router2.passthrough) {
      clickScopeElem.addEventListener("click", handleClick);
      clickScopeElem.addEventListener("keydown", handleClick);
      clickScopeElem.addEventListener("mouseover", handleHover);
    }
  };
  const handleHover = (event) => {
    var _a, _b, _c, _d;
    const eventUrl = getUrlFromEvent(event);
    const url2 = (_c = (_b = (_a = router2.clickHandler).callback) == null ? void 0 : _b.call(_a, event, eventUrl)) != null ? _c : eventUrl;
    const shouldPrefetch = typeof url2 === "string" && ((_d = event.target.closest("[data-routify-prefetch-data]")) == null ? void 0 : _d.dataset.routifyPrefetchData) === "hover";
    if (shouldPrefetch)
      router2.url.push(url2, { prefetch: true });
  };
  const handleClick = (event) => {
    var _a, _b, _c;
    if (shouldIgnoreClick(event))
      return;
    const eventUrl = getUrlFromEvent(event);
    const url2 = (_c = (_b = (_a = router2.clickHandler).callback) == null ? void 0 : _b.call(_a, event, eventUrl)) != null ? _c : eventUrl;
    if (typeof url2 === "string")
      router2.url.push(url2);
  };
  if (typeof window !== "undefined")
    onDestroy(() => router2.destroy());
  if ($$props.router === void 0 && $$bindings.router && router2 !== void 0)
    $$bindings.router(router2);
  if ($$props.routes === void 0 && $$bindings.routes && routes2 !== void 0)
    $$bindings.routes(routes2);
  if ($$props.decorator === void 0 && $$bindings.decorator && decorator !== void 0)
    $$bindings.decorator(decorator);
  if ($$props.urlReflector === void 0 && $$bindings.urlReflector && urlReflector !== void 0)
    $$bindings.urlReflector(urlReflector);
  if ($$props.instance === void 0 && $$bindings.instance && instance !== void 0)
    $$bindings.instance(instance);
  if ($$props.urlRewrite === void 0 && $$bindings.urlRewrite && urlRewrite !== void 0)
    $$bindings.urlRewrite(urlRewrite);
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.rootNode === void 0 && $$bindings.rootNode && rootNode !== void 0)
    $$bindings.rootNode(rootNode);
  if ($$props.passthrough === void 0 && $$bindings.passthrough && passthrough !== void 0)
    $$bindings.passthrough(passthrough);
  if ($$props.beforeRouterInit === void 0 && $$bindings.beforeRouterInit && beforeRouterInit !== void 0)
    $$bindings.beforeRouterInit(beforeRouterInit);
  if ($$props.afterRouterInit === void 0 && $$bindings.afterRouterInit && afterRouterInit !== void 0)
    $$bindings.afterRouterInit(afterRouterInit);
  if ($$props.beforeUrlChange === void 0 && $$bindings.beforeUrlChange && beforeUrlChange !== void 0)
    $$bindings.beforeUrlChange(beforeUrlChange);
  if ($$props.afterUrlChange === void 0 && $$bindings.afterUrlChange && afterUrlChange !== void 0)
    $$bindings.afterUrlChange(afterUrlChange);
  if ($$props.transformFragments === void 0 && $$bindings.transformFragments && transformFragments !== void 0)
    $$bindings.transformFragments(transformFragments);
  if ($$props.onDestroy === void 0 && $$bindings.onDestroy && onDestroy$1 !== void 0)
    $$bindings.onDestroy(onDestroy$1);
  if ($$props.plugins === void 0 && $$bindings.plugins && plugins !== void 0)
    $$bindings.plugins(plugins);
  if ($$props.queryHandler === void 0 && $$bindings.queryHandler && queryHandler !== void 0)
    $$bindings.queryHandler(queryHandler);
  if ($$props.anchor === void 0 && $$bindings.anchor && anchor !== void 0)
    $$bindings.anchor(anchor);
  if ($$props.clickHandler === void 0 && $$bindings.clickHandler && clickHandler !== void 0)
    $$bindings.clickHandler(clickHandler);
  {
    if (url && url !== router2.url.internal())
      router2.url.replace(url);
  }
  $$subscribe_activeRoute(activeRoute = router2.activeRoute);
  {
    context2.childFragments.set(($activeRoute == null ? void 0 : $activeRoute.fragments) || []);
  }
  $$unsubscribe_activeRoute();
  return `${validate_component(AnchorDecorator, "AnchorDecorator").$$render(
    $$result,
    {
      onMount: initialize,
      style: "display: contents",
      location: anchor
    },
    {},
    {
      default: () => {
        return `${$activeRoute ? `${validate_component(ComposeFragments, "Component").$$render($$result, { context: context2, options: { decorator } }, {}, {})}` : ``}`;
      }
    }
  )}`;
});
const pseudoStore = (callback) => ({
  subscribe: (run2) => {
    run2(callback());
    return () => {
    };
  }
});
const context = pseudoStore(() => contexts.fragment);
const router = createRouter({ routes });
const App = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Router_1, "Router").$$render($$result, { router }, {}, {})}`;
});
const module = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: App
}, Symbol.toStringTag, { value: "Module" }));
const polyfillFetch = async () => {
  const fetch2 = await import("node-fetch");
  globalThis.fetch = fetch2.default;
  globalThis.Headers = fetch2.Headers;
  globalThis.Request = fetch2.Request;
  globalThis.Response = fetch2.Response;
};
const urlSegmentToRouterAndUrl = (urlSegment, index2) => {
  if (!index2)
    return ["", urlSegment];
  const matches = urlSegment.match(/([\w-]+?)=(.+)/);
  return [matches[1], matches[2]];
};
const getUrlSegments = (compositeUrl) => compositeUrl.split(";").map(urlSegmentToRouterAndUrl);
const getPrimaryUrl = (urlPairs) => urlPairs.find(([name]) => name === "")[1];
const renderModule = async (module2, compositeUrl) => {
  var _a;
  await polyfillFetch();
  const render2 = ((_a = module2.default) == null ? void 0 : _a.render) || module2["render"];
  const urlPairs = getUrlSegments(compositeUrl);
  const load2 = module2.load ? await module2.load(getPrimaryUrl(urlPairs)) : {};
  await preloadUrlFromUrlPairs(urlPairs);
  return { ...await render2(), load: load2 };
};
const preloadUrlFromUrlPairs = async (urlPairs) => {
  const routers = urlPairs.map(([name, url]) => {
    const router2 = appInstance.routers.find((router3) => router3.name === name) || createRouter({ name, url });
    const currentRoute = router2.pendingRoute.get() || router2.activeRoute.get();
    if ((currentRoute == null ? void 0 : currentRoute.url) !== url)
      router2.url.replace(url);
    return router2;
  });
  await Promise.all(routers.map((router2) => router2.ready()));
};
const render = (url) => renderModule(module, url);
const Logo = "/assets/logo.d76ca68a.svg";
const Pardus1 = "/assets/pardus1.1cb5ded1.png";
const Pardus2 = "/assets/pardus2.6c8c1005.png";
const PardusImageWriter = "/assets/pardus-image-writer.fa81721d.svg";
const PardusJavaInstaller = "/assets/pardus-java-installer.57433be6.svg";
const PardusMyComputer = "/assets/pardus-mycomputer.7b60b8df.svg";
const PardusPackageInstaller = "/assets/pardus-package-installer.3d1d8cc2.svg";
const PardusPowerManager = "/assets/pardus-power-manager.86075bc0.svg";
const PardusSoftware = "/assets/pardus-software.ccdcbe11.svg";
const DownloadCD = "/assets/download-cd.74246266.svg";
const DownloadCD2 = "/assets/download-cd2.9ca47626.svg";
const DownloadKey = "/assets/download-key.b5eeb9b1.svg";
const MailGif = "/assets/mail.c6b264a2.gif";
const HeaderData = [
  {
    url: "/wiki",
    label: "Wiki"
  },
  {
    url: "/download",
    label: "Download"
  },
  {
    url: "/contact",
    label: "Contact"
  }
];
let datas$1 = {
  title: "Pardus is a Debian based stable operating system. <br />It combines stability, modern and end-user needs.",
  description: "There are two main versions of Pardus; Pardus Gnome and Pardus Xfce. Pardus comes pre-installed with basic packages and Pardus applications. Also you can install many applications with Pardus Software Center.",
  appsHeader: "Applications Developed by Pardus Core Team",
  downloadLabel: "Get Started",
  apps: [
    {
      icon: PardusMyComputer,
      title: "My Computer",
      description: "Displays disk information and provides access to folders, files, and devices.",
      url: "https://apps.pardus.org.tr/app/pardus-mycomputer"
    },
    {
      icon: PardusImageWriter,
      title: "Image Writer",
      description: "A simple disk image USB burner based on Gtk+ and Python.",
      url: "https://apps.pardus.org.tr/app/pardus-mycomputer"
    },
    {
      icon: PardusPowerManager,
      title: "Power Manager",
      description: "Power management tool for Pardus.",
      url: "https://apps.pardus.org.tr/app/pardus-mycomputer"
    },
    {
      icon: PardusPackageInstaller,
      title: "Package Installer",
      description: "A simple tool for viewing and installing local deb files.",
      url: "https://apps.pardus.org.tr/app/pardus-mycomputer"
    },
    {
      icon: PardusJavaInstaller,
      title: "Java Installer",
      description: "Easily install and manage Java versions.",
      url: "https://apps.pardus.org.tr/app/pardus-java-installer"
    },
    {
      icon: PardusSoftware,
      title: "Software Center",
      description: "Install, remove, and update applications from our store.",
      url: "https://apps.pardus.org.tr"
    }
  ]
};
const ContactPageData = [
  {
    title: "We can use E-Mail \u{1F601}",
    description: "You can contact us with the email addresses below regarding anything you would like to know.",
    datas: [
      {
        url: "mailto:dev@pardus.org.tr",
        label: "dev@pardus.org.tr"
      },
      {
        url: "mailto:gelistirici@pardus.org.tr",
        label: "gelistirici@pardus.org.tr"
      },
      {
        url: "mailto:aliriza.keskin@pardus.org.tr",
        label: "aliriza.keskin@pardus.org.tr"
      }
    ]
  },
  {
    title: "We are on Github",
    description: "You can find our projects on Github. You may explore them, and support us by contributing to their coding and translation.",
    datas: [
      {
        url: "https://github.com/orgs/pardus/repositories",
        label: "https://github.com/orgs/pardus/repositories"
      }
    ]
  }
];
let datas = [
  {
    label: "Downloadable ISO Files",
    downloadLabel: "Download",
    iso: [
      {
        label: "Pardus 21.4 Xfce",
        url: "https://indir.pardus.org.tr/ISO/Pardus21/Pardus-21.4-XFCE-amd64.iso",
        icon: DownloadCD
      },
      {
        label: "Pardus 21.4 Gnome",
        url: "https://indir.pardus.org.tr/ISO/Pardus21/Pardus-21.4-GNOME-amd64.iso",
        icon: DownloadCD
      }
    ],
    keys: [
      {
        label: "md5sums",
        url: "https://indir.pardus.org.tr/ISO/Pardus21/MD5SUMS",
        icon: DownloadKey
      },
      {
        label: "sha256sums",
        url: "https://indir.pardus.org.tr/ISO/Pardus21/SHA256SUMS",
        icon: DownloadKey
      },
      {
        label: "sha512sums",
        url: "https://indir.pardus.org.tr/ISO/Pardus21/SHA512SUMS",
        icon: DownloadKey
      }
    ]
  },
  {
    label: "Downloadable Backports ISO Files",
    downloadLabel: "Download",
    iso: [
      {
        label: "Pardus 21.4 Xfce Backports",
        url: "https://indir.pardus.org.tr/ISO/Pardus21backports/Pardus-21.4-XFCE-backports-amd64.iso",
        icon: DownloadCD2
      },
      {
        label: "Pardus 21.4 Gnome Backports",
        url: "https://indir.pardus.org.tr/ISO/Pardus21backports/Pardus-21.4-GNOME-backports-amd64.iso",
        icon: DownloadCD2
      }
    ],
    keys: [
      {
        label: "backsport m5sums",
        url: "https://indir.pardus.org.tr/ISO/Pardus21backports/MD5SUMS",
        icon: DownloadKey
      }
    ]
  }
];
const header_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: "header.svelte-p8t7b5{background-color:var(--pardus-dark)}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$5);
  return `<header class="svelte-p8t7b5"><main class="flex items-center justify-between max-w-5xl mx-auto py-2"><a href="/" class="flex items-center ml-3"><img${add_attribute("src", Logo, 0)} alt="" class="h-10 w-10">
            <span class="pardus-title text-4xl ml-2 mt-1 text-white">Pardus
            </span></a>
        <div class="gap-5 hidden md:flex">${each(HeaderData, (data) => {
    return `<a${add_attribute("href", data.url, 0)} class="text-white">${escape(data.label)}</a>`;
  })}</div>

        <div class="relative md:hidden" data-te-dropdown-ref><button class="items-center whitespace-nowrap rounded bg-primary p-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] motion-reduce:transition-none mr-2" type="button" id="dropdownMenuButton1" data-te-dropdown-toggle-ref aria-expanded="false" data-te-ripple-init data-te-ripple-color="light"><svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg></button>
            <ul class="${[
    "absolute z-[1000] float-left m-0 right-2 min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block",
    "hidden"
  ].join(" ").trim()}" aria-labelledby="dropdownMenuButton1" data-te-dropdown-menu-ref>${each(HeaderData, (data) => {
    return `<li class="py-2 px-3 border-b"><a${add_attribute("href", data.url, 0)} class="text-lg">${escape(data.label)}</a>
                    </li>`;
  })}</ul></div></main>
</header>`;
});
const navigation_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".expanded.svelte-ipgu0k{transition:max-height 0.5s ease-in-out;max-height:500px}.collapsed.svelte-ipgu0k{transition:max-height 0.5s ease-in-out;max-height:0}",
  map: null
};
const Navigation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $context, $$unsubscribe_context;
  $$unsubscribe_context = subscribe(context, (value) => $context = value);
  let urls = $context.node.children;
  console.log(urls);
  $$result.css.add(css$4);
  $$unsubscribe_context();
  return `<main class="md:w-1/4 p-3 w-full md:h-full flex flex-col md:border-4 md:mt-2 md:rounded-xl"><button class="h-10 flex md:hidden justify-center items-center w-full gap-2 rounded-lg mb-5 border"><span>Open Navigation Menu </span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg></button>

    <div><ul class="${[
    "list-disc overflow-hidden md:overflow-visible svelte-ipgu0k",
    " collapsed"
  ].join(" ").trim()}">${each(urls, (category, index2) => {
    return `${category.name != "index" ? `<li><a class="capitalize"${add_attribute("href", category.path, 0)}>${escape(index2 == 0 ? "Wiki" : category.name)}</a>
                        ${category.children.length > 0 ? `<ul class="list-disc">${each(category.children, (page) => {
      return `${page.name != "index" ? `<li><a class="capitalize"${add_attribute("href", page.path, 0)}>${escape(page.name)}</a>
                                        </li>` : ``}`;
    })}
                            </ul>` : ``}
                    </li>` : ``}`;
  })}</ul></div>
</main>`;
});
const footer_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".gitsvg.svelte-1lhmdrf{width:4.5rem}svg.svelte-1lhmdrf{@apply h-20;}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<footer class="w-full flex flex-col items-center"><span class="mt-20">Pardus \xA9 Copyleft 2023</span>
    <div class="flex flex-wrap items-center justify-center md:gap-3 gap-x-2 "><svg class="gitsvg svelte-1lhmdrf" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" width="218.371pt" height="91.209999pt" viewBox="0 0 218.371 91.209999" version="1.1" id="svg27" sodipodi:docname="git.svg" inkscape:version="1.0.2 (e86c870879, 2021-01-15)"><metadata id="metadata31"><rdf:RDF><cc:Work rdf:about=""><dc:format>image/svg+xml</dc:format><dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"></dc:type></cc:Work></rdf:RDF></metadata><sodipodi:namedview pagecolor="#ffffff" bordercolor="#666666" borderopacity="1" objecttolerance="10" gridtolerance="10" guidetolerance="10" inkscape:pageopacity="0" inkscape:pageshadow="2" inkscape:window-width="1920" inkscape:window-height="1128" id="namedview29" showgrid="false" inkscape:zoom="2.3287671" inkscape:cx="110.88801" inkscape:cy="71.579757" inkscape:window-x="0" inkscape:window-y="0" inkscape:window-maximized="1" inkscape:current-layer="svg27"></sodipodi:namedview><defs id="defs11"><clipPath id="a"><path d="m 159,0.79 h 25 V 69 h -25 z m 0,0" id="path2"></path></clipPath><clipPath id="b"><path d="m 183,9 h 35.371 V 69 H 183 Z m 0,0" id="path5"></path></clipPath><clipPath id="c"><path d="M 0,0.79 H 92 V 92 H 0 Z m 0,0" id="path8"></path></clipPath></defs><g id="g40" transform="translate(0,-0.79)"><path style="fill:#362701;fill-opacity:1;fill-rule:nonzero;stroke:none" d="m 130.871,31.836 c -4.785,0 -8.351,2.352 -8.351,8.008 0,4.261 2.347,7.222 8.093,7.222 4.871,0 8.18,-2.867 8.18,-7.398 0,-5.133 -2.961,-7.832 -7.922,-7.832 z m -9.57,39.95 c -1.133,1.39 -2.262,2.87 -2.262,4.612 0,3.48 4.434,4.524 10.527,4.524 5.051,0 11.926,-0.352 11.926,-5.043 0,-2.793 -3.308,-2.965 -7.488,-3.227 z m 25.761,-39.688 c 1.563,2.004 3.22,4.789 3.22,8.793 0,9.656 -7.571,15.316 -18.536,15.316 -2.789,0 -5.312,-0.348 -6.879,-0.785 l -2.87,4.613 8.526,0.52 c 15.059,0.96 23.934,1.398 23.934,12.968 0,10.008 -8.789,15.665 -23.934,15.665 -15.75,0 -21.757,-4.004 -21.757,-10.88 0,-3.917 1.742,-6 4.789,-8.878 -2.875,-1.211 -3.828,-3.387 -3.828,-5.739 0,-1.914 0.953,-3.656 2.523,-5.312 1.566,-1.652 3.305,-3.305 5.395,-5.219 -4.262,-2.09 -7.485,-6.617 -7.485,-13.058 0,-10.008 6.613,-16.88 19.93,-16.88 3.742,0 6.004,0.344 8.008,0.872 h 16.972 v 7.394 l -8.007,0.61" id="path13"></path><g clip-path="url(#a)" id="g17"><path style="fill:#362701;fill-opacity:1;fill-rule:nonzero;stroke:none" d="m 170.379,16.281 c -4.961,0 -7.832,-2.87 -7.832,-7.836 0,-4.957 2.871,-7.656 7.832,-7.656 5.05,0 7.922,2.7 7.922,7.656 0,4.965 -2.871,7.836 -7.922,7.836 z M 159.152,68.586 V 61.71 l 4.438,-0.606 c 1.219,-0.175 1.394,-0.437 1.394,-1.746 V 33.773 c 0,-0.953 -0.261,-1.566 -1.132,-1.824 l -4.7,-1.656 0.957,-7.047 h 18.016 V 59.36 c 0,1.399 0.086,1.57 1.395,1.746 l 4.437,0.606 v 6.875 h -24.805" id="path15"></path></g><g clip-path="url(#b)" id="g21"><path style="fill:#362701;fill-opacity:1;fill-rule:nonzero;stroke:none" d="m 218.371,65.21 c -3.742,1.825 -9.223,3.481 -14.187,3.481 -10.356,0 -14.27,-4.175 -14.27,-14.015 V 31.879 c 0,-0.524 0,-0.871 -0.7,-0.871 h -6.093 v -7.746 c 7.664,-0.871 10.707,-4.703 11.664,-14.188 h 8.27 v 12.36 c 0,0.609 0,0.87 0.695,0.87 h 12.27 v 8.704 h -12.965 v 20.797 c 0,5.136 1.218,7.136 5.918,7.136 2.437,0 4.96,-0.609 7.047,-1.39 l 2.351,7.66" id="path19"></path></g><g clip-path="url(#c)" id="g25"><path style="fill:#f03c2e;fill-opacity:1;fill-rule:nonzero;stroke:none" d="M 89.422,42.371 49.629,2.582 a 5.868,5.868 0 0 0 -8.3,0 l -8.263,8.262 10.48,10.484 a 6.965,6.965 0 0 1 7.173,1.668 6.98,6.98 0 0 1 1.656,7.215 l 10.102,10.105 a 6.963,6.963 0 0 1 7.214,1.657 6.976,6.976 0 0 1 0,9.875 6.98,6.98 0 0 1 -9.879,0 6.987,6.987 0 0 1 -1.519,-7.594 l -9.422,-9.422 v 24.793 a 6.979,6.979 0 0 1 1.848,1.32 6.988,6.988 0 0 1 0,9.88 c -2.73,2.726 -7.153,2.726 -9.875,0 a 6.98,6.98 0 0 1 0,-9.88 6.893,6.893 0 0 1 2.285,-1.523 V 34.398 A 6.893,6.893 0 0 1 40.844,32.875 6.988,6.988 0 0 1 39.336,25.238 L 29.004,14.902 1.719,42.187 a 5.868,5.868 0 0 0 0,8.301 l 39.793,39.793 a 5.868,5.868 0 0 0 8.3,0 l 39.61,-39.605 a 5.873,5.873 0 0 0 0,-8.305" id="path23"></path></g></g></svg>
        <svg class="w-28 svelte-1lhmdrf" width="116.57742mm" height="30.563242mm" viewBox="0 0 116.57742 30.563242" version="1.1" id="svg216" inkscape:version="1.2.2 (b0a8486541, 2022-12-01)" sodipodi:docname="asd.svg" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"><sodipodi:namedview id="namedview218" pagecolor="#ffffff" bordercolor="#000000" borderopacity="0.25" inkscape:showpageshadow="2" inkscape:pageopacity="0.0" inkscape:pagecheckerboard="0" inkscape:deskcolor="#d1d1d1" inkscape:document-units="mm" showgrid="false" inkscape:zoom="0.74742565" inkscape:cx="197.34404" inkscape:cy="206.04056" inkscape:window-width="1920" inkscape:window-height="1011" inkscape:window-x="0" inkscape:window-y="32" inkscape:window-maximized="1" inkscape:current-layer="layer1"></sodipodi:namedview><defs id="defs213"><linearGradient id="vlpb" x1="26.65" x2="135.7" y1="20.6" y2="114.4" gradientTransform="matrix(0.5625,0,0,0.568,-9.4,-5.305)" gradientUnits="userSpaceOnUse"><stop style="stop-color:#5a9fd4" offset="0" id="stop11"></stop><stop style="stop-color:#306998" offset="1" id="stop13"></stop></linearGradient><linearGradient id="vlpc" x1="151" x2="112" y1="192.39999" y2="137.3" gradientTransform="matrix(0.5625,0,0,0.568,-9.4,-5.305)" gradientUnits="userSpaceOnUse"><stop style="stop-color:#ffd43b" offset="0" id="stop6"></stop><stop style="stop-color:#ffe873" offset="1" id="stop8"></stop></linearGradient></defs><g inkscape:label="Layer 1" inkscape:groupmode="layer" id="layer1" transform="translate(-52.958272,-93.759962)"><g id="g55" transform="matrix(0.26458333,0,0,0.26458333,51.478615,92.89742)"><path d="m 184.6,61.93 c 0,-14.56 -4.152,-22.04 -12.46,-22.45 -3.304,-0.156 -6.531,0.3704 -9.669,1.589 -2.505,0.8967 -4.191,1.784 -5.078,2.68 v 34.76 c 5.312,3.334 10.03,4.883 14.14,4.64 8.704,-0.5751 13.06,-7.642 13.06,-21.22 z m 10.24,0.6043 c 0,7.398 -1.735,13.54 -5.224,18.42 -3.889,5.527 -9.279,8.373 -16.17,8.529 -5.195,0.1657 -10.55,-1.462 -16.05,-4.874 v 31.59 l -8.909,-3.178 v -70.12 c 1.462,-1.793 3.343,-3.334 5.624,-4.64 5.302,-3.09 11.75,-4.679 19.33,-4.757 l 0.1267,0.1267 c 6.93,-0.08773 12.27,2.758 16.02,8.529 3.499,5.293 5.254,12.08 5.254,20.37 z" style="fill:#646464" id="path23"></path><path d="m 249.3,83.27 c 0,9.923 -0.9942,16.79 -2.983,20.62 -1.998,3.821 -5.8,6.872 -11.41,9.143 -4.552,1.793 -9.474,2.768 -14.76,2.934 l -1.472,-5.614 c 5.371,-0.731 9.153,-1.462 11.35,-2.193 4.318,-1.462 7.281,-3.704 8.909,-6.706 1.306,-2.447 1.949,-7.115 1.949,-14.03 v -2.32 c -6.092,2.768 -12.48,4.143 -19.15,4.143 -4.386,0 -8.256,-1.374 -11.59,-4.143 -3.743,-3.012 -5.614,-6.833 -5.614,-11.46 v -37.08 l 8.909,-3.051 v 37.32 c 0,3.987 1.287,7.057 3.86,9.211 2.573,2.154 5.907,3.187 9.991,3.109 4.084,-0.08773 8.46,-1.667 13.11,-4.757 v -43.54 h 8.909 v 48.41 z" style="fill:#646464" id="path25"></path><path d="m 284.1,89 c -1.062,0.08772 -2.037,0.1267 -2.934,0.1267 -5.039,0 -8.967,-1.199 -11.77,-3.606 -2.797,-2.408 -4.201,-5.731 -4.201,-9.971 v -35.09 h -6.102 v -5.605 h 6.102 v -14.88 l 8.899,-3.168 v 18.05 h 10.01 v 5.605 h -10.01 v 34.85 c 0,3.343 0.8967,5.712 2.69,7.096 1.54,1.14 3.987,1.793 7.32,1.959 v 4.64 z" style="fill:#646464" id="path27"></path><path d="m 338,88.27 h -8.909 V 53.88 c 0,-3.499 -0.8188,-6.511 -2.447,-9.026 -1.881,-2.846 -4.493,-4.269 -7.846,-4.269 -4.084,0 -9.192,2.154 -15.32,6.462 v 41.22 h -8.909 V 6.067 L 303.478,3.26 V 40.7 c 5.692,-4.143 11.91,-6.219 18.67,-6.219 4.718,0 8.538,1.589 11.46,4.757 2.934,3.168 4.396,7.115 4.396,11.83 v 37.19 z" style="fill:#646464" id="path29"></path><path d="m 385.4,60.53 c 0,-5.595 -1.062,-10.21 -3.178,-13.87 -2.515,-4.454 -6.423,-6.803 -11.71,-7.047 -9.767,0.5653 -14.64,7.564 -14.64,20.98 0,6.15 1.014,11.29 3.061,15.41 2.612,5.254 6.531,7.846 11.76,7.759 9.806,-0.07798 14.71,-7.817 14.71,-23.23 z m 9.757,0.05848 c 0,7.963 -2.037,14.59 -6.102,19.88 -4.474,5.926 -10.65,8.899 -18.54,8.899 -7.817,0 -13.91,-2.973 -18.31,-8.899 -3.987,-5.293 -5.975,-11.92 -5.975,-19.88 0,-7.486 2.154,-13.78 6.462,-18.91 4.552,-5.439 10.54,-8.168 17.93,-8.168 7.398,0 13.42,2.729 18.06,8.168 4.308,5.127 6.462,11.42 6.462,18.91 z" style="fill:#646464" id="path31"></path><path d="m 446.2,88.27 h -8.909 V 51.93 c 0,-3.987 -1.199,-7.096 -3.597,-9.338 -2.398,-2.232 -5.595,-3.314 -9.581,-3.226 -4.23,0.07798 -8.256,1.462 -12.08,4.143 v 44.76 h -8.909 v -45.86 c 5.127,-3.733 9.845,-6.17 14.15,-7.31 4.065,-1.062 7.651,-1.589 10.74,-1.589 2.115,0 4.104,0.2047 5.975,0.6141 3.499,0.809 6.345,2.31 8.538,4.513 2.447,2.437 3.665,5.361 3.665,8.782 v 40.85 z" style="fill:#646464" id="path33"></path><path d="M 60.51,6.398 C 55.926,6.4193 51.549,6.8102 47.7,7.492 36.35,9.497 34.29,13.692 34.29,21.432 v 10.22 H 61.1 v 3.406 H 34.29 24.23 c -7.792,0 -14.62,4.684 -16.75,13.59 -2.462,10.21 -2.571,16.59 0,27.25 1.906,7.938 6.458,13.59 14.25,13.59 h 9.219 v -12.25 c 0,-8.85 7.657,-16.66 16.75,-16.66 h 26.78 c 7.455,0 13.41,-6.138 13.41,-13.62 v -25.53 c 0,-7.266 -6.13,-12.72 -13.41,-13.94 C 69.873,6.7213 65.094,6.373 60.509,6.394 Z m -14.5,8.219 c 2.77,0 5.031,2.299 5.031,5.125 -2e-6,2.816 -2.262,5.094 -5.031,5.094 -2.779,-10e-7 -5.031,-2.277 -5.031,-5.094 -10e-7,-2.826 2.252,-5.125 5.031,-5.125 z" style="fill:url(#vlpb)" id="path35"></path><path d="m 91.23,35.05 v 11.91 c 0,9.231 -7.826,17 -16.75,17 H 47.7 c -7.336,0 -13.41,6.278 -13.41,13.62 v 25.53 c 0,7.266 6.319,11.54 13.41,13.62 8.487,2.496 16.63,2.947 26.78,0 6.75,-1.954 13.41,-5.888 13.41,-13.62 V 92.89 H 61.11 v -3.406 h 26.78 13.41 c 7.792,0 10.7,-5.435 13.41,-13.59 2.799,-8.399 2.68,-16.48 0,-27.25 -1.926,-7.757 -5.604,-13.59 -13.41,-13.59 H 91.24 Z M 76.17,99.71 c 2.779,3e-6 5.031,2.277 5.031,5.094 -2e-6,2.826 -2.252,5.125 -5.031,5.125 -2.77,0 -5.031,-2.299 -5.031,-5.125 2e-6,-2.816 2.262,-5.094 5.031,-5.094 z" style="fill:url(#vlpc)" id="path37"></path></g></g></svg>

        <svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" height="33.354984" width="139.09288" viewBox="-13.28 -21.779 139.09056 33.354984" version="1.1" id="svg6" sodipodi:docname="opensource.svg" inkscape:version="1.0.2 (e86c870879, 2021-01-15)" class="svelte-1lhmdrf"><metadata id="metadata12"><rdf:RDF><cc:Work rdf:about=""><dc:format>image/svg+xml</dc:format><dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"></dc:type></cc:Work></rdf:RDF></metadata><defs id="defs10"></defs><sodipodi:namedview pagecolor="#ffffff" bordercolor="#666666" borderopacity="1" objecttolerance="10" gridtolerance="10" guidetolerance="10" inkscape:pageopacity="0" inkscape:pageshadow="2" inkscape:window-width="1920" inkscape:window-height="1128" id="namedview8" showgrid="false" inkscape:zoom="8.0138769" inkscape:cx="74.935789" inkscape:cy="24.771405" inkscape:window-x="0" inkscape:window-y="0" inkscape:window-maximized="1" inkscape:current-layer="svg6" inkscape:document-rotation="0"></sodipodi:namedview><g id="g13"><path d="m 3.925,-21.263 c -9.22,0 -16.69,7.473 -16.69,16.6919999 0,7.155 4.504,13.2560001 10.83,15.6300001 L 1.908,0.8019999 A 5.74,5.74 0 0 1 3.924,-10.308 5.74,5.74 0 0 1 5.9390005,0.8029999 L 9.7860005,11.06 C 16.112,8.687 20.616,2.5849999 20.616,-4.5700001 20.616,-13.788 13.143,-21.26 3.924,-21.26 Z" fill="#40aa54" stroke="#20552a" stroke-width="1.032" stroke-linejoin="round" id="path2"></path><path d="m 30.419875,-4.2125076 c 0,1.284 -1.048001,2.357 -2.358,2.357 -1.336,0 -2.358,-1.0739999 -2.358,-2.357 v -3.406 c 0,-1.2830004 1.048,-2.3580004 2.358,-2.3580004 1.31,0 2.358,1.076 2.358,2.3580004 v 3.402 z m 2.358,0 v -3.406 c 0,-2.6460004 -1.860001,-4.4540004 -4.716001,-4.4540004 -2.856,0 -4.716,1.78 -4.716,4.4500004 v 3.405 c 0,2.672 1.86,4.45400002 4.716,4.45400002 2.856,0 4.716001,-1.78000002 4.716001,-4.45000002 z m 8.381999,-0.264 c 0,1.2840001 -1.02,2.358 -2.356999,2.358 -1.3,0 -2.358,-1.0739999 -2.358,-2.358 v -2.88 c 0,-1.2840004 1.048,-2.3600004 2.358,-2.3600004 1.335999,0 2.357999,1.075 2.357999,2.3600004 v 2.88 z m 2.36,0 v -2.88 c 0,-2.6460004 -1.887,-4.4540004 -4.533,-4.4540004 -1.546,0 -2.28,0.865 -2.619999,0.865 -0.105,0 -0.184,-0.105 -0.184,-0.29 v -0.315 c 0,-0.183 -0.08,-0.263 -0.262,-0.263 h -1.561 c -0.183,0 -0.262,0.08 -0.262,0.263 V 5.6094927 c 0,0.183 0.08,0.262 0.262,0.262 h 1.834 c 0.183,0 0.262,-0.08 0.262,-0.263 v -6.21000028 c 0,-0.184 0.08,-0.288 0.2,-0.288 0.235,0 1.02,0.865 2.54,0.865 2.437,0 4.323,-1.88500002 4.323,-4.45400002 z m 7.754,-2.88 h -4.19 c -0.235999,0 -0.262,-0.105 -0.262,-0.394 0,-1.1520004 1.100001,-2.2270004 2.36,-2.2270004 1.23,0 2.357,1.048 2.357,2.1740004 -10e-4,0.315 -0.027,0.447 -0.263,0.447 z m 2.62,1.57 v -1.834 c 0,-2.3840004 -2.095,-4.4540004 -4.715,-4.4540004 -2.62,0 -4.715,2.07 -4.715,4.4540004 v 3.406 c 0,2.672 1.86,4.45400002 4.716,4.45400002 1.39,0 2.49,-0.367 3.275,-1.1 0.785,-0.73300002 1.1,-1.41499992 1.1,-1.59999992 0,-0.078 -0.053,-0.13 -0.158,-0.183 l -1.65,-0.84 c -0.052,-0.026 -0.105,-0.052 -0.157,-0.052 -0.157,0 -0.393,0.42 -0.97,1.1 -0.288,0.34 -0.812,0.5759999 -1.44,0.5759999 -1.336,0 -2.358,-1.0739999 -2.358,-2.357 v -1.044 c 0,-0.183 0.078,-0.262 0.262,-0.262 h 6.55 a 0.22,0.22 0 0 0 0.262,-0.26 z m 10.297005,5.76300002 h -1.833 a 0.22,0.22 0 0 1 -0.262,-0.262 V -7.3585076 c 0,-1.2850004 -1.022004,-2.3600004 -2.358005,-2.3600004 -1.3,0 -2.358,1.074 -2.358,2.3600004 v 7.07300002 a 0.22,0.22 0 0 1 -0.262,0.262 h -1.834 c -0.184,0 -0.262,-0.078 -0.262,-0.262 V -11.550508 c 0,-0.184 0.08,-0.263 0.262,-0.263 h 1.572 c 0.183,0 0.262,0.08 0.262,0.263 v 0.314 c 0,0.183 0.078,0.288 0.183,0.288 0.34,0 1.074,-0.865 2.62,-0.865 2.646005,0 4.532005,1.81 4.532005,4.4540004 v 7.07300002 a 0.22,0.22 0 0 1 -0.26,0.264 z m 6.812,-8.72400042 c 0,1.0740004 0.812,1.5720004 2.62,1.9650004 3.013001,0.655 4.69,1.048 4.69,3.2500001 0,2.2269999 -1.625,3.77199992 -4.166,3.77199992 h -0.812 c -2.436999,0 -4.034999,-1.46700002 -4.034999,-2.28000002 0,-0.078 0.053,-0.1299999 0.183999,-0.183 l 1.022001,-0.497 c 0.052,-0.026 0.104,-0.026 0.13,-0.026 0.08,0 0.129999,0.052 0.2,0.13 0.68,0.76 1.205,1.467 2.488,1.467 h 0.812 c 1.466999,0 2.4,-0.838 2.4,-1.9129999 0,-0.97 -0.812,-1.5460001 -2.568,-1.9120001 -3.04,-0.63 -4.69,-0.944 -4.69,-3.2500004 0,-2.15 1.598,-3.64 4.035,-3.64 h 0.812 c 2.384,0 4.008,1.44 4.008,2.227 0,0.08 -0.078,0.13 -0.183001,0.183 l -0.996,0.497 c -0.052,0.026 -0.078,0.026 -0.105,0.026 -0.08,0 -0.13,-0.052 -0.2,-0.132 -0.733,-0.785 -1.335,-1.413 -2.514,-1.413 h -0.812 c -1.516,-0.004 -2.328,0.653 -2.328,1.725 z m 15.77,4.6900005 c 0,1.5199999 -1.232,2.8039999 -2.803,2.8039999 -1.571,0 -2.777,-1.284 -2.777,-2.8039999 v -3.5360001 c 0,-1.5460004 1.18,-2.7770004 2.777,-2.7770004 1.57,0 2.803,1.284 2.803,2.7770004 z m 1.78,0 v -3.5360001 c 0,-2.5420004 -1.807,-4.2700004 -4.584,-4.2700004 -2.777,0 -4.533,1.677 -4.533,4.2700004 v 3.5360001 c 0,2.5939999 1.755,4.29699992 4.533,4.29699992 2.778,0 4.586,-1.73000002 4.586,-4.29799992 z m 10.219996,4.03399992 h -0.97 c -0.183,0 -0.262,-0.078 -0.262,-0.262 V -1.4105076 c 0,-0.183 -0.104,-0.288 -0.209999,-0.288 -0.235,0 -0.497,0.42 -0.97,0.89000002 -0.525001,0.497 -1.299996,0.785 -2.174996,0.785 -2.384,0 -4.27,-1.75500002 -4.27,-4.29700002 v -7.0300004 c 0,-0.183 0.08,-0.262 0.263,-0.262 h 1.23 a 0.22,0.22 0 0 1 0.262,0.262 v 7.0200004 c 0,1.52 1.232,2.803 2.778,2.803 1.623996,0 2.829996,-1.258 2.829996,-2.803 v -7.0200004 a 0.22,0.22 0 0 1 0.262,-0.262 h 1.232 a 0.22,0.22 0 0 1 0.262,0.262 v 11.05600042 a 0.22,0.22 0 0 1 -0.26,0.264 z M 106.97288,-9.743508 c -0.21,0 -0.55,-0.078 -0.996,-0.078 -1.597,0 -2.777,1.204 -2.777,2.7500004 v 6.78500002 a 0.22,0.22 0 0 1 -0.262,0.262 h -1.258 a 0.22,0.22 0 0 1 -0.262,-0.262 V -11.350508 a 0.22,0.22 0 0 1 0.261,-0.262 h 0.97 a 0.22,0.22 0 0 1 0.262,0.262 v 1.3 c 0,0.184 0.105,0.288 0.2,0.288 0.288,0 0.707,-0.655 1.65,-1.415 a 2.26,2.26 0 0 1 1.205,-0.445 h 0.97 a 0.22,0.22 0 0 1 0.262,0.262 v 1.337 c -0.004,0.214 -0.054,0.264 -0.237,0.264 z m 8.775,7.6750004 c 0,0.838 -1.598,2.30500002 -4.06,2.30500002 -2.777,0 -4.533,-1.70200002 -4.533,-4.29699992 v -3.5360001 c 0,-2.5940004 1.756,-4.2700004 4.533,-4.2700004 2.437,0 4.087,1.39 4.087,2.254 0,0.078 -0.08,0.157 -0.184,0.2 l -1.1,0.55 c -0.052,0.026 -0.08,0.026 -0.105,0.026 -0.078,0 -0.13,-0.026 -0.21,-0.104 -0.786,-0.734 -1.3,-1.442 -2.49,-1.442 -1.598,0 -2.777,1.232 -2.777,2.7770004 v 3.5360001 c 0,1.5199999 1.205,2.8039999 2.777,2.8039999 0.63,0 1.258,-0.262 1.73,-0.708 0.55,-0.523 0.785,-0.9 0.942,-0.9 0.026,0 0.08,0 0.13,0.026 l 1.1,0.55 c 0.124,0.054 0.152,0.105 0.152,0.2 z m 8.277,-5.16 a 0.22,0.22 0 0 1 -0.262,0.262 h -5.056 c -0.183,0 -0.262,-0.08 -0.262,-0.262 v -0.366 c 0,-1.5460004 1.18,-2.7770004 2.777,-2.7770004 1.572,0 2.803,1.284 2.803,2.7770004 z m 1.784,1.232 v -1.598 c 0,-2.2530004 -2.044,-4.2700004 -4.585,-4.2700004 -1.336,0 -2.437,0.472 -3.3,1.39 -0.786,0.838 -1.23,1.912 -1.23,2.8820004 v 3.5360001 c 0,2.5939999 1.755,4.29699992 4.532,4.29699992 2.463,0 4.06,-1.46700002 4.06,-2.30400002 0,-0.105 -0.026,-0.158 -0.157,-0.2 l -1.1,-0.55 c -0.052,-0.026 -0.104,-0.026 -0.13,-0.026 -0.158,0 -0.393,0.367 -0.944,0.9 -0.47,0.447 -1.1,0.708 -1.73,0.708 -1.572,0 -2.777,-1.284 -2.777,-2.8039999 v -1.4150001 a 0.22,0.22 0 0 1 0.262,-0.262 h 6.838 c 0.187,-0.008 0.264,-0.085 0.264,-0.268 z" id="path4"></path></g></svg>
        <svg class="w-28 svelte-1lhmdrf" width="800" height="200" viewBox="0 -193.5 512 128" version="1.1" preserveAspectRatio="xMidYMid" fill="#000000" id="svg15" inkscape:version="1.2.2 (b0a8486541, 2022-12-01)" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"><defs id="defs19"></defs><sodipodi:namedview id="namedview17" pagecolor="#ffffff" bordercolor="#000000" borderopacity="0.25" inkscape:showpageshadow="2" inkscape:pageopacity="0.0" inkscape:pagecheckerboard="0" inkscape:deskcolor="#d1d1d1" showgrid="false" inkscape:zoom="1.04875" inkscape:cx="400" inkscape:cy="94.398093" inkscape:window-width="1920" inkscape:window-height="1011" inkscape:window-x="0" inkscape:window-y="32" inkscape:window-maximized="1" inkscape:current-layer="svg15"></sodipodi:namedview><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier" transform="translate(0.43002,-191.96623)"><g id="g12"><path d="m 166.66279,96.865252 c -5.42099,0.136416 -10.75632,-1.371204 -15.30423,-4.324559 -4.2489,-2.801955 -7.40412,-6.980748 -8.93568,-11.834451 l 9.31583,-3.422592 c 1.29079,2.981399 3.4003,5.53581 6.08388,7.367 2.72383,1.825081 5.94196,2.770698 9.22013,2.70925 3.15121,0.164567 6.26094,-0.776739 8.7919,-2.661285 2.23282,-1.874668 3.44868,-4.694052 3.27947,-7.604594 0.0129,-1.33713 -0.29688,-2.657645 -0.90297,-3.849593 -0.52733,-1.066492 -1.21672,-2.044837 -2.04365,-2.900218 -1.04606,-0.952154 -2.23241,-1.737674 -3.5174,-2.328987 -1.58501,-0.790867 -2.89981,-1.392922 -3.94441,-1.806166 -1.04572,-0.410567 -2.58239,-0.965029 -4.61001,-1.663387 -2.53583,-0.886723 -4.43707,-1.583519 -5.70372,-2.090387 -1.71644,-0.730488 -3.3834,-1.572147 -4.99028,-2.51962 -1.72935,-0.917531 -3.30164,-2.104477 -4.65786,-3.516292 -1.17343,-1.3785 -2.11993,-2.93502 -2.80395,-4.611123 -2.69171,-6.553118 -0.89285,-14.093302 4.46734,-18.72548 3.80285,-3.358452 8.9677,-5.038124 15.49452,-5.038124 5.44884,0 9.93214,1.204036 13.44988,3.61211 3.41438,2.27003 5.92132,5.668912 7.08177,9.601394 l -9.12531,3.041325 c -0.91676,-2.059506 -2.4649,-3.77399 -4.42049,-4.895457 -2.36499,-1.311997 -5.04343,-1.953074 -7.74615,-1.85402 -2.65086,-0.152063 -5.27677,0.583899 -7.46248,2.091504 -1.81147,1.403956 -2.82294,3.604234 -2.70914,5.893242 0.0161,1.749159 0.77632,3.408695 2.09039,4.56327 1.26336,1.243448 2.74585,2.242463 4.37263,2.946621 1.5218,0.633884 3.83517,1.489337 6.94011,2.566359 1.89979,0.698283 3.30938,1.221177 4.22874,1.568683 0.91937,0.347505 2.26615,0.933572 4.04034,1.758201 1.42233,0.629426 2.78949,1.376757 4.08719,2.234172 1.16202,0.835812 2.27293,1.740478 3.32677,2.709138 1.14592,0.993949 2.12508,2.165179 2.90022,3.469107 0.7379,1.352552 1.31202,2.788201 1.71024,4.276594 0.48535,1.748856 0.72561,3.556619 0.71431,5.371538 0,6.211226 -2.12352,11.074668 -6.36974,14.590327 -4.24584,3.518113 -9.69524,5.276946 -16.34819,5.2765 z m 60.92923,-1.140455 -22.81368,-66.539698 h 10.64704 l 15.11326,46.387869 c 0.83575,2.494659 1.53397,5.033303 2.0915,7.604483 0.55658,-2.571413 1.25482,-5.110109 2.0915,-7.604483 l 14.92374,-46.387869 h 10.55122 l -22.71897,66.539698 z m 52.75496,0 V 29.185545 h 41.25482 v 9.315946 h -31.3682 v 18.250513 h 20.24575 V 66.06795 H 290.2336 v 20.340901 h 33.4587 v 9.315946 z m 68.53438,1.12e-4 V 29.185545 h 9.88673 v 57.0339 h 32.50865 v 9.505464 z m 79.6556,-57.034012 v 57.0339 h -9.88662 v -57.0339 H 399.8306 v -9.505352 h 47.52721 v 9.505464 z m 39.25712,57.0339 V 29.185545 h 41.25493 v 9.315946 h -31.36764 v 18.250513 h 20.24575 v 9.315946 h -20.24575 v 20.340901 h 33.45859 v 9.315946 z" fill="#4a4a55" id="path4"></path><g id="g10"><path d="M 97.328731,16.529998 C 85.727859,-0.07386073 62.816138,-4.9953073 46.249871,5.5595894 L 17.155443,24.102802 C 9.208126,29.102544 3.7341084,37.218313 2.0757602,46.459912 0.68795211,54.158706 1.9078036,62.100459 5.5421898,69.027846 3.0518067,72.805666 1.3532721,77.049213 0.54924164,81.502017 -1.1251842,90.921039 1.0650264,100.61748 6.6254212,108.40232 18.228747,125.00774 41.140691,129.92707 57.704393,119.37273 l 29.094316,-18.54321 c 7.94781,-4.999239 13.421991,-13.11525 15.079681,-22.357115 1.38744,-7.698754 0.16839,-15.640338 -3.464308,-22.568491 2.489698,-3.777754 4.187518,-8.021122 4.990828,-12.473614 1.67552,-9.419048 -0.51479,-19.115912 -6.076179,-26.900302" fill="#ff3e00" id="path6"></path><path d="m 43.407434,109.96453 c -9.37789,2.43815 -19.281002,-1.23276 -24.80389,-9.19436 -3.344631,-4.681243 -4.662132,-10.512611 -3.654944,-16.177078 0.168812,-0.920602 0.401124,-1.828419 0.695272,-2.716947 l 0.547918,-1.670748 1.490489,1.094832 c 3.442454,2.529354 7.291451,4.452457 11.381124,5.686435 l 1.081335,0.328059 -0.0995,1.079216 c -0.132177,1.535316 0.283547,3.067844 1.173473,4.325898 1.662107,2.39832 4.64391,3.505051 7.468284,2.771939 0.632268,-0.169025 1.234916,-0.433896 1.78698,-0.785401 l 29.09454,-18.541093 c 1.439453,-0.906417 2.431504,-2.376257 2.733678,-4.050266 0.301592,-1.707281 -0.09534,-3.46415 -1.101636,-4.875936 -1.663084,-2.398772 -4.645573,-3.505967 -7.471073,-2.7735 -0.631478,0.169016 -1.233364,0.433695 -1.784749,0.784843 L 50.842143,72.327959 C 49.016506,73.488732 47.02418,74.363657 44.934176,74.922427 35.556021,77.360844 25.652519,73.689864 20.129505,65.727955 16.784904,61.046739 15.467404,55.215417 16.474561,49.550986 17.471696,43.993765 20.763843,39.113735 25.543319,36.108142 L 54.635962,17.565487 c 1.826436,-1.162711 3.820226,-2.038737 5.911983,-2.597591 9.37796,-2.438252 19.281193,1.232667 24.804113,9.19436 3.344584,4.681266 4.662081,10.512615 3.654944,16.177081 -0.16954,0.920441 -0.401839,1.828209 -0.695272,2.716946 l -0.547918,1.670749 -1.489819,-1.093159 c -3.442186,-2.530845 -7.29156,-4.454834 -11.381905,-5.688889 l -1.081224,-0.328171 0.0995,-1.079216 c 0.131109,-1.535185 -0.284518,-3.067317 -1.173473,-4.325786 -1.662106,-2.398321 -4.64391,-3.505051 -7.468284,-2.771939 -0.632267,0.169024 -1.234915,0.433896 -1.78698,0.785401 L 34.38653,48.767147 c -1.439703,0.905843 -2.431406,2.376068 -2.732006,4.050266 -0.303458,1.7072 0.09281,3.464699 1.099518,4.876493 1.663084,2.398772 4.645572,3.505967 7.471072,2.7735 0.632154,-0.169348 1.234754,-0.434199 1.786981,-0.785401 l 11.101141,-7.074858 c 1.824847,-1.162304 3.817083,-2.038003 5.907298,-2.596588 9.378118,-2.438332 19.281541,1.232636 24.804559,9.194472 3.344601,4.681216 4.662101,10.512538 3.654944,16.176969 -0.997762,5.557521 -4.289678,10.437978 -9.068758,13.444964 L 49.319082,107.36694 c -1.826435,1.16271 -3.820226,2.03874 -5.911982,2.59759" fill="#ffffff" id="path8"></path></g></g></g></svg></div>
</footer>`;
});
const Module$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
<main class="max-w-5xl mx-auto">${slots.default ? slots.default({}) : ``}</main>`;
});
const _module$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Module$1
}, Symbol.toStringTag, { value: "Module" }));
const Contact = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex flex-col md:items-center md:flex-row mt-10 h-128"><div class="flex flex-col gap-y-5 w-full md:w-1/2 text-lg px-10">${each(ContactPageData, (data) => {
    return `<div><p class="font-bold text-center mb-2">${escape(data.title)}</p>
                <p>${escape(data.description)}</p>

                <div class="flex flex-col"><ul class="list-disc ml-5">${each(data.datas, (dat) => {
      return `<li><a class="break-words"${add_attribute("href", dat.url, 0)}>${escape(dat.label)}</a>
                            </li>`;
    })}
                    </ul></div>
            </div>`;
  })}</div>
    <div class="mt-2 p-2 w-full md:w-1/2"><img${add_attribute("src", MailGif, 0)} alt=""></div></div>`;
});
const index$5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Contact
}, Symbol.toStringTag, { value: "Module" }));
const Pardus215 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1>Pardus 21.5 Release Notes</h1>
<ul><li><p>The default web browser, Firefox, has been upgraded to version 102.10.</p></li>
<li><p>Linux Kernel has been upgraded to version 5.10.0-22.</p></li>
<li><p>Improvements in design and functionality have been made in our applications such as Pardus Software Center, Pardus Xfce Lightdm Greeter, Pardus My Computer, Pardus About, Pardus Live Installation, Pardus Disk Image Writer, Pardus Java Installer, Pardus Package Installer, Pardus USB Formatter, Pardus Welcome. You can check the details on the git page of the relevant applications <a href="https://github.com/orgs/pardus/repositories?type=all" rel="nofollow">Link</a></p></li>
<li><p>In Pardus XFCE and GNOME desktop environments, support for viewing and previewing the webp image format, which is becoming a standard in the internet world, has been introduced.</p></li>
<li><p>The latest versions of some corporate applications such as E-Declaration, ArkSigner have been added to the repository.</p></li>
<li><p>15 new applications have been added to the Pardus Software Center <a href="https://apps.pardus.org.tr/cat/all?sort=date" rel="nofollow">Link</a></p></li>
<li><p>External applications in the repository (Android Studio, PyCharm, Google Chrome, Discord, AnyDesk, TeamViewer, VS Code, Vivaldi, Brave, Opera, Ventoy, System Monitoring Center, Apache Netbeans, Eclipse Installer, LibreWolf, Unity Hub\u2026) have been updated.</p></li>
<li><p>Over 150 patches and updates installed on the system have been implemented.</p></li></ul>`;
});
const pardus215 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Pardus215
}, Symbol.toStringTag, { value: "Module" }));
const index_svelte_svelte_type_style_lang$1 = "";
const css$2 = {
  code: ".isoa.svelte-179t7ug{background-color:var(--pardus-dark)}",
  map: null
};
const Download = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<main class="flex flex-col lg:flex-row justify-center gap-5 w-full">${each(datas, (data) => {
    return `<fieldset class="mt-10 rounded-xl px-10 pb-5 w-full"><legend class="px-3">${escape(data.label)}</legend>
               ${each(data.iso, (iso) => {
      return `<div class="my-4 flex flex-col md:flex-row md:justify-between"><b>${escape(iso.label)}</b>
                         <a${add_attribute("href", iso.url, 0)} class="flex items-center justify-center gap-2 py-1 px-2 rounded-md text-white isoa svelte-179t7ug"><span>${escape(data.downloadLabel)}</span>
                              <img${add_attribute("src", iso.icon, 0)} alt=""></a>
                    </div>`;
    })}
               <div class="flex flex-wrap flex-col md:flex-row gap-3 items-center justify-center mt-6 md:mt-16"><span class="h-10 mt-3"><img${add_attribute("src", data.keys[0].icon, 0)} alt=""></span>
                    ${each(data.keys, (key) => {
      return `<a${add_attribute("href", key.url, 0)} class="flex w-full md:w-auto justify-center items-center py-1 rounded-md border border-blue-700 px-3 bg-blue-200"><span>${escape(key.label)}</span>
                         </a>`;
    })}</div>
          </fieldset>`;
  })}</main>

<fieldset class="mt-10 rounded-xl px-10 pb-5 mx-1"><legend class="px-3"><a href="/wiki/release-notes">Release Notes</a></legend>
     ${validate_component(Pardus215, "LatestReleaseNotes").$$render($$result, {}, {}, {})}
</fieldset>`;
});
const index$4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Download
}, Symbol.toStringTag, { value: "Module" }));
const index_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".pardus2.svelte-1f9k80j{rotate:-10deg}.pardus1.svelte-1f9k80j{position:absolute;rotate:10deg;top:10%;left:30%}.isoa.svelte-1f9k80j{background-color:var(--pardus-dark)}",
  map: null
};
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<h1 class="text-3xl text-center mt-16"><!-- HTML_TAG_START -->${datas$1["title"]}<!-- HTML_TAG_END --></h1>
<div class="flex flex-col md:flex-row max-w-5xl justify-evenly items-center mt-16"><div class="md:w-1/4 w-2/4 relative"><img${add_attribute("src", Pardus2, 0)} alt="" class="pardus2 svelte-1f9k80j">
        <img${add_attribute("src", Pardus1, 0)} alt="" class="pardus1 svelte-1f9k80j"></div>
    <div class="text-center md:w-2/4 md:mt-0 mt-10"><p class="m-3 ml-5 text-lg">${escape(datas$1["description"])}</p>
        <a href="/download" class="flex w-44 mx-auto isoa items-center justify-center gap-2 py-1 px-2 rounded-md text-white isoa svelte-1f9k80j"><span class="font-bold text-xl">${escape(datas$1["downloadLabel"])}</span>
            </a></div></div>

<fieldset class="mt-20 rounded-xl"><legend class="mx-10 px-3">${escape(datas$1["appsHeader"])}</legend>
    <div class="flex flex-wrap flex-row">${each(datas$1["apps"], (app) => {
    return `<div class="md:w-1/3 flex p-6"><img${add_attribute("src", app.icon, 0)} alt="" class="h-16 w-1/3">
                <div class="flex flex-col w-full ml-3"><b>${escape(app.title)}</b>
                    <span>${escape(app.description)}
                    </span></div>
            </div>`;
  })}</div></fieldset>

${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
const index$3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Routes
}, Symbol.toStringTag, { value: "Module" }));
const _module_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-3ja5la{height:calc(100vh - 80px)}",
  map: null
};
const Module = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main class="flex flex-col md:flex-row items-start svelte-3ja5la">${validate_component(Navigation, "Navigation").$$render($$result, {}, {}, {})}
    <div class="px-5 py-2 w-full md:w-3/4 overflow-y-auto">${slots.default ? slots.default({}) : ``}</div>
</main>`;
});
const _module = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Module
}, Symbol.toStringTag, { value: "Module" }));
const Wiki = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1>Welcome to our Wiki!</h1>
<p>Our wiki is powered by Markdown, a lightweight markup language that allows you to easily format text with simple syntax.</p>
<h2>Contribution</h2>
<p>We welcome contributions to our wiki! You can use Markdown to format your contributions and submit them to our team. Thank you for contributing to our community!</p>`;
});
const index$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Wiki
}, Symbol.toStringTag, { value: "Module" }));
const Release_notes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1>releast ntoes page</h1>`;
});
const index$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Release_notes
}, Symbol.toStringTag, { value: "Module" }));
const _01_installation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<table><thead><tr><th>Tables</th>
<th align="center">Are</th>
<th align="right">Cool</th></tr></thead>
<tbody><tr><td>col 1 is</td>
<td align="center">left-aligned</td>
<td align="right">$1600</td></tr>
<tr><td>col 2 is</td>
<td align="center">centered</td>
<td align="right">$12</td></tr>
<tr><td>col 3 is</td>
<td align="center">right-aligned</td>
<td align="right">$1</td></tr></tbody></table>`;
});
const _01Installation = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _01_installation
}, Symbol.toStringTag, { value: "Module" }));
const _02_after_install = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1>page after install</h1>`;
});
const _02AfterInstall = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _02_after_install
}, Symbol.toStringTag, { value: "Module" }));
const _03_yusuf_duzgun = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1>deneme mr yusuf</h1>`;
});
const _03YusufDuzgun = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _03_yusuf_duzgun
}, Symbol.toStringTag, { value: "Module" }));
const System = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1>system index page</h1>`;
});
const index = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: System
}, Symbol.toStringTag, { value: "Module" }));
const load = ({ route }) => ({
  status: 404,
  error: "[Routify] Page could not be found.",
  props: { url: route.url }
});
const U5B_404u5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { url } = $$props;
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  return `
404 - Could not find the page &quot;${escape(url)}&quot;`;
});
const ____404_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: U5B_404u5D,
  load
}, Symbol.toStringTag, { value: "Module" }));
export {
  render
};
