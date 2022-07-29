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
  var __spreadValues = (a3, b3) => {
    for (var prop in b3 || (b3 = {}))
      if (__hasOwnProp.call(b3, prop))
        __defNormalProp(a3, prop, b3[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b3)) {
        if (__propIsEnum.call(b3, prop))
          __defNormalProp(a3, prop, b3[prop]);
      }
    return a3;
  };
  var __spreadProps = (a3, b3) => __defProps(a3, __getOwnPropDescs(b3));
  var __objRest = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
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

  // node_modules/preact/dist/preact.module.js
  function s(n2, l3) {
    for (var u3 in l3)
      n2[u3] = l3[u3];
    return n2;
  }
  function a(n2) {
    var l3 = n2.parentNode;
    l3 && l3.removeChild(n2);
  }
  function h(l3, u3, i3) {
    var t3, o3, r3, f3 = {};
    for (r3 in u3)
      "key" == r3 ? t3 = u3[r3] : "ref" == r3 ? o3 = u3[r3] : f3[r3] = u3[r3];
    if (arguments.length > 2 && (f3.children = arguments.length > 3 ? n.call(arguments, 2) : i3), "function" == typeof l3 && null != l3.defaultProps)
      for (r3 in l3.defaultProps)
        void 0 === f3[r3] && (f3[r3] = l3.defaultProps[r3]);
    return v(l3, f3, t3, o3, null);
  }
  function v(n2, i3, t3, o3, r3) {
    var f3 = { type: n2, props: i3, key: t3, ref: o3, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == r3 ? ++u : r3 };
    return null == r3 && null != l.vnode && l.vnode(f3), f3;
  }
  function p(n2) {
    return n2.children;
  }
  function d(n2, l3) {
    this.props = n2, this.context = l3;
  }
  function _(n2, l3) {
    if (null == l3)
      return n2.__ ? _(n2.__, n2.__.__k.indexOf(n2) + 1) : null;
    for (var u3; l3 < n2.__k.length; l3++)
      if (null != (u3 = n2.__k[l3]) && null != u3.__e)
        return u3.__e;
    return "function" == typeof n2.type ? _(n2) : null;
  }
  function k(n2) {
    var l3, u3;
    if (null != (n2 = n2.__) && null != n2.__c) {
      for (n2.__e = n2.__c.base = null, l3 = 0; l3 < n2.__k.length; l3++)
        if (null != (u3 = n2.__k[l3]) && null != u3.__e) {
          n2.__e = n2.__c.base = u3.__e;
          break;
        }
      return k(n2);
    }
  }
  function b(n2) {
    (!n2.__d && (n2.__d = true) && t.push(n2) && !g.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || setTimeout)(g);
  }
  function g() {
    for (var n2; g.__r = t.length; )
      n2 = t.sort(function(n3, l3) {
        return n3.__v.__b - l3.__v.__b;
      }), t = [], n2.some(function(n3) {
        var l3, u3, i3, t3, o3, r3;
        n3.__d && (o3 = (t3 = (l3 = n3).__v).__e, (r3 = l3.__P) && (u3 = [], (i3 = s({}, t3)).__v = t3.__v + 1, j(r3, t3, i3, l3.__n, void 0 !== r3.ownerSVGElement, null != t3.__h ? [o3] : null, u3, null == o3 ? _(t3) : o3, t3.__h), z(u3, t3), t3.__e != o3 && k(t3)));
      });
  }
  function w(n2, l3, u3, i3, t3, o3, r3, c3, s2, a3) {
    var h2, y2, d3, k3, b3, g3, w3, x = i3 && i3.__k || e, C2 = x.length;
    for (u3.__k = [], h2 = 0; h2 < l3.length; h2++)
      if (null != (k3 = u3.__k[h2] = null == (k3 = l3[h2]) || "boolean" == typeof k3 ? null : "string" == typeof k3 || "number" == typeof k3 || "bigint" == typeof k3 ? v(null, k3, null, null, k3) : Array.isArray(k3) ? v(p, { children: k3 }, null, null, null) : k3.__b > 0 ? v(k3.type, k3.props, k3.key, null, k3.__v) : k3)) {
        if (k3.__ = u3, k3.__b = u3.__b + 1, null === (d3 = x[h2]) || d3 && k3.key == d3.key && k3.type === d3.type)
          x[h2] = void 0;
        else
          for (y2 = 0; y2 < C2; y2++) {
            if ((d3 = x[y2]) && k3.key == d3.key && k3.type === d3.type) {
              x[y2] = void 0;
              break;
            }
            d3 = null;
          }
        j(n2, k3, d3 = d3 || f, t3, o3, r3, c3, s2, a3), b3 = k3.__e, (y2 = k3.ref) && d3.ref != y2 && (w3 || (w3 = []), d3.ref && w3.push(d3.ref, null, k3), w3.push(y2, k3.__c || b3, k3)), null != b3 ? (null == g3 && (g3 = b3), "function" == typeof k3.type && k3.__k === d3.__k ? k3.__d = s2 = m(k3, s2, n2) : s2 = A(n2, k3, d3, x, b3, s2), "function" == typeof u3.type && (u3.__d = s2)) : s2 && d3.__e == s2 && s2.parentNode != n2 && (s2 = _(d3));
      }
    for (u3.__e = g3, h2 = C2; h2--; )
      null != x[h2] && ("function" == typeof u3.type && null != x[h2].__e && x[h2].__e == u3.__d && (u3.__d = _(i3, h2 + 1)), N(x[h2], x[h2]));
    if (w3)
      for (h2 = 0; h2 < w3.length; h2++)
        M(w3[h2], w3[++h2], w3[++h2]);
  }
  function m(n2, l3, u3) {
    for (var i3, t3 = n2.__k, o3 = 0; t3 && o3 < t3.length; o3++)
      (i3 = t3[o3]) && (i3.__ = n2, l3 = "function" == typeof i3.type ? m(i3, l3, u3) : A(u3, i3, i3, t3, i3.__e, l3));
    return l3;
  }
  function A(n2, l3, u3, i3, t3, o3) {
    var r3, f3, e3;
    if (void 0 !== l3.__d)
      r3 = l3.__d, l3.__d = void 0;
    else if (null == u3 || t3 != o3 || null == t3.parentNode)
      n:
        if (null == o3 || o3.parentNode !== n2)
          n2.appendChild(t3), r3 = null;
        else {
          for (f3 = o3, e3 = 0; (f3 = f3.nextSibling) && e3 < i3.length; e3 += 2)
            if (f3 == t3)
              break n;
          n2.insertBefore(t3, o3), r3 = o3;
        }
    return void 0 !== r3 ? r3 : t3.nextSibling;
  }
  function C(n2, l3, u3, i3, t3) {
    var o3;
    for (o3 in u3)
      "children" === o3 || "key" === o3 || o3 in l3 || H(n2, o3, null, u3[o3], i3);
    for (o3 in l3)
      t3 && "function" != typeof l3[o3] || "children" === o3 || "key" === o3 || "value" === o3 || "checked" === o3 || u3[o3] === l3[o3] || H(n2, o3, l3[o3], u3[o3], i3);
  }
  function $(n2, l3, u3) {
    "-" === l3[0] ? n2.setProperty(l3, u3) : n2[l3] = null == u3 ? "" : "number" != typeof u3 || c.test(l3) ? u3 : u3 + "px";
  }
  function H(n2, l3, u3, i3, t3) {
    var o3;
    n:
      if ("style" === l3)
        if ("string" == typeof u3)
          n2.style.cssText = u3;
        else {
          if ("string" == typeof i3 && (n2.style.cssText = i3 = ""), i3)
            for (l3 in i3)
              u3 && l3 in u3 || $(n2.style, l3, "");
          if (u3)
            for (l3 in u3)
              i3 && u3[l3] === i3[l3] || $(n2.style, l3, u3[l3]);
        }
      else if ("o" === l3[0] && "n" === l3[1])
        o3 = l3 !== (l3 = l3.replace(/Capture$/, "")), l3 = l3.toLowerCase() in n2 ? l3.toLowerCase().slice(2) : l3.slice(2), n2.l || (n2.l = {}), n2.l[l3 + o3] = u3, u3 ? i3 || n2.addEventListener(l3, o3 ? T : I, o3) : n2.removeEventListener(l3, o3 ? T : I, o3);
      else if ("dangerouslySetInnerHTML" !== l3) {
        if (t3)
          l3 = l3.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if ("href" !== l3 && "list" !== l3 && "form" !== l3 && "tabIndex" !== l3 && "download" !== l3 && l3 in n2)
          try {
            n2[l3] = null == u3 ? "" : u3;
            break n;
          } catch (n3) {
          }
        "function" == typeof u3 || (null != u3 && (false !== u3 || "a" === l3[0] && "r" === l3[1]) ? n2.setAttribute(l3, u3) : n2.removeAttribute(l3));
      }
  }
  function I(n2) {
    this.l[n2.type + false](l.event ? l.event(n2) : n2);
  }
  function T(n2) {
    this.l[n2.type + true](l.event ? l.event(n2) : n2);
  }
  function j(n2, u3, i3, t3, o3, r3, f3, e3, c3) {
    var a3, h2, v3, y2, _3, k3, b3, g3, m3, x, A2, C2, $2, H2 = u3.type;
    if (void 0 !== u3.constructor)
      return null;
    null != i3.__h && (c3 = i3.__h, e3 = u3.__e = i3.__e, u3.__h = null, r3 = [e3]), (a3 = l.__b) && a3(u3);
    try {
      n:
        if ("function" == typeof H2) {
          if (g3 = u3.props, m3 = (a3 = H2.contextType) && t3[a3.__c], x = a3 ? m3 ? m3.props.value : a3.__ : t3, i3.__c ? b3 = (h2 = u3.__c = i3.__c).__ = h2.__E : ("prototype" in H2 && H2.prototype.render ? u3.__c = h2 = new H2(g3, x) : (u3.__c = h2 = new d(g3, x), h2.constructor = H2, h2.render = O), m3 && m3.sub(h2), h2.props = g3, h2.state || (h2.state = {}), h2.context = x, h2.__n = t3, v3 = h2.__d = true, h2.__h = []), null == h2.__s && (h2.__s = h2.state), null != H2.getDerivedStateFromProps && (h2.__s == h2.state && (h2.__s = s({}, h2.__s)), s(h2.__s, H2.getDerivedStateFromProps(g3, h2.__s))), y2 = h2.props, _3 = h2.state, v3)
            null == H2.getDerivedStateFromProps && null != h2.componentWillMount && h2.componentWillMount(), null != h2.componentDidMount && h2.__h.push(h2.componentDidMount);
          else {
            if (null == H2.getDerivedStateFromProps && g3 !== y2 && null != h2.componentWillReceiveProps && h2.componentWillReceiveProps(g3, x), !h2.__e && null != h2.shouldComponentUpdate && false === h2.shouldComponentUpdate(g3, h2.__s, x) || u3.__v === i3.__v) {
              h2.props = g3, h2.state = h2.__s, u3.__v !== i3.__v && (h2.__d = false), h2.__v = u3, u3.__e = i3.__e, u3.__k = i3.__k, u3.__k.forEach(function(n3) {
                n3 && (n3.__ = u3);
              }), h2.__h.length && f3.push(h2);
              break n;
            }
            null != h2.componentWillUpdate && h2.componentWillUpdate(g3, h2.__s, x), null != h2.componentDidUpdate && h2.__h.push(function() {
              h2.componentDidUpdate(y2, _3, k3);
            });
          }
          if (h2.context = x, h2.props = g3, h2.__v = u3, h2.__P = n2, A2 = l.__r, C2 = 0, "prototype" in H2 && H2.prototype.render)
            h2.state = h2.__s, h2.__d = false, A2 && A2(u3), a3 = h2.render(h2.props, h2.state, h2.context);
          else
            do {
              h2.__d = false, A2 && A2(u3), a3 = h2.render(h2.props, h2.state, h2.context), h2.state = h2.__s;
            } while (h2.__d && ++C2 < 25);
          h2.state = h2.__s, null != h2.getChildContext && (t3 = s(s({}, t3), h2.getChildContext())), v3 || null == h2.getSnapshotBeforeUpdate || (k3 = h2.getSnapshotBeforeUpdate(y2, _3)), $2 = null != a3 && a3.type === p && null == a3.key ? a3.props.children : a3, w(n2, Array.isArray($2) ? $2 : [$2], u3, i3, t3, o3, r3, f3, e3, c3), h2.base = u3.__e, u3.__h = null, h2.__h.length && f3.push(h2), b3 && (h2.__E = h2.__ = null), h2.__e = false;
        } else
          null == r3 && u3.__v === i3.__v ? (u3.__k = i3.__k, u3.__e = i3.__e) : u3.__e = L(i3.__e, u3, i3, t3, o3, r3, f3, c3);
      (a3 = l.diffed) && a3(u3);
    } catch (n3) {
      u3.__v = null, (c3 || null != r3) && (u3.__e = e3, u3.__h = !!c3, r3[r3.indexOf(e3)] = null), l.__e(n3, u3, i3);
    }
  }
  function z(n2, u3) {
    l.__c && l.__c(u3, n2), n2.some(function(u4) {
      try {
        n2 = u4.__h, u4.__h = [], n2.some(function(n3) {
          n3.call(u4);
        });
      } catch (n3) {
        l.__e(n3, u4.__v);
      }
    });
  }
  function L(l3, u3, i3, t3, o3, r3, e3, c3) {
    var s2, h2, v3, y2 = i3.props, p3 = u3.props, d3 = u3.type, k3 = 0;
    if ("svg" === d3 && (o3 = true), null != r3) {
      for (; k3 < r3.length; k3++)
        if ((s2 = r3[k3]) && "setAttribute" in s2 == !!d3 && (d3 ? s2.localName === d3 : 3 === s2.nodeType)) {
          l3 = s2, r3[k3] = null;
          break;
        }
    }
    if (null == l3) {
      if (null === d3)
        return document.createTextNode(p3);
      l3 = o3 ? document.createElementNS("http://www.w3.org/2000/svg", d3) : document.createElement(d3, p3.is && p3), r3 = null, c3 = false;
    }
    if (null === d3)
      y2 === p3 || c3 && l3.data === p3 || (l3.data = p3);
    else {
      if (r3 = r3 && n.call(l3.childNodes), h2 = (y2 = i3.props || f).dangerouslySetInnerHTML, v3 = p3.dangerouslySetInnerHTML, !c3) {
        if (null != r3)
          for (y2 = {}, k3 = 0; k3 < l3.attributes.length; k3++)
            y2[l3.attributes[k3].name] = l3.attributes[k3].value;
        (v3 || h2) && (v3 && (h2 && v3.__html == h2.__html || v3.__html === l3.innerHTML) || (l3.innerHTML = v3 && v3.__html || ""));
      }
      if (C(l3, p3, y2, o3, c3), v3)
        u3.__k = [];
      else if (k3 = u3.props.children, w(l3, Array.isArray(k3) ? k3 : [k3], u3, i3, t3, o3 && "foreignObject" !== d3, r3, e3, r3 ? r3[0] : i3.__k && _(i3, 0), c3), null != r3)
        for (k3 = r3.length; k3--; )
          null != r3[k3] && a(r3[k3]);
      c3 || ("value" in p3 && void 0 !== (k3 = p3.value) && (k3 !== l3.value || "progress" === d3 && !k3 || "option" === d3 && k3 !== y2.value) && H(l3, "value", k3, y2.value, false), "checked" in p3 && void 0 !== (k3 = p3.checked) && k3 !== l3.checked && H(l3, "checked", k3, y2.checked, false));
    }
    return l3;
  }
  function M(n2, u3, i3) {
    try {
      "function" == typeof n2 ? n2(u3) : n2.current = u3;
    } catch (n3) {
      l.__e(n3, i3);
    }
  }
  function N(n2, u3, i3) {
    var t3, o3;
    if (l.unmount && l.unmount(n2), (t3 = n2.ref) && (t3.current && t3.current !== n2.__e || M(t3, null, u3)), null != (t3 = n2.__c)) {
      if (t3.componentWillUnmount)
        try {
          t3.componentWillUnmount();
        } catch (n3) {
          l.__e(n3, u3);
        }
      t3.base = t3.__P = null;
    }
    if (t3 = n2.__k)
      for (o3 = 0; o3 < t3.length; o3++)
        t3[o3] && N(t3[o3], u3, "function" != typeof n2.type);
    i3 || null == n2.__e || a(n2.__e), n2.__e = n2.__d = void 0;
  }
  function O(n2, l3, u3) {
    return this.constructor(n2, u3);
  }
  function P(u3, i3, t3) {
    var o3, r3, e3;
    l.__ && l.__(u3, i3), r3 = (o3 = "function" == typeof t3) ? null : t3 && t3.__k || i3.__k, e3 = [], j(i3, u3 = (!o3 && t3 || i3).__k = h(p, null, [u3]), r3 || f, f, void 0 !== i3.ownerSVGElement, !o3 && t3 ? [t3] : r3 ? null : i3.firstChild ? n.call(i3.childNodes) : null, e3, !o3 && t3 ? t3 : r3 ? r3.__e : i3.firstChild, o3), z(e3, u3);
  }
  var n, l, u, i, t, o, r, f, e, c;
  var init_preact_module = __esm({
    "node_modules/preact/dist/preact.module.js"() {
      f = {};
      e = [];
      c = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
      n = e.slice, l = { __e: function(n2, l3, u3, i3) {
        for (var t3, o3, r3; l3 = l3.__; )
          if ((t3 = l3.__c) && !t3.__)
            try {
              if ((o3 = t3.constructor) && null != o3.getDerivedStateFromError && (t3.setState(o3.getDerivedStateFromError(n2)), r3 = t3.__d), null != t3.componentDidCatch && (t3.componentDidCatch(n2, i3 || {}), r3 = t3.__d), r3)
                return t3.__E = t3;
            } catch (l4) {
              n2 = l4;
            }
        throw n2;
      } }, u = 0, i = function(n2) {
        return null != n2 && void 0 === n2.constructor;
      }, d.prototype.setState = function(n2, l3) {
        var u3;
        u3 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = s({}, this.state), "function" == typeof n2 && (n2 = n2(s({}, u3), this.props)), n2 && s(u3, n2), null != n2 && this.__v && (l3 && this.__h.push(l3), b(this));
      }, d.prototype.forceUpdate = function(n2) {
        this.__v && (this.__e = true, n2 && this.__h.push(n2), b(this));
      }, d.prototype.render = p, t = [], g.__r = 0, r = 0;
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/utilities/create-class-name.js
  function createClassName(classNames) {
    return classNames.filter(function(className) {
      return className !== null;
    }).join(" ");
  }
  var init_create_class_name = __esm({
    "node_modules/@create-figma-plugin/ui/lib/utilities/create-class-name.js"() {
    }
  });

  // node_modules/preact/hooks/dist/hooks.module.js
  function p2(t3, r3) {
    l.__h && l.__h(u2, t3, i2 || r3), i2 = 0;
    var o3 = u2.__H || (u2.__H = { __: [], __h: [] });
    return t3 >= o3.__.length && o3.__.push({ __V: f2 }), o3.__[t3];
  }
  function y(n2) {
    return i2 = 1, d2(z2, n2);
  }
  function d2(n2, r3, o3) {
    var i3 = p2(t2++, 2);
    return i3.t = n2, i3.__c || (i3.__ = [o3 ? o3(r3) : z2(void 0, r3), function(n3) {
      var t3 = i3.t(i3.__[0], n3);
      i3.__[0] !== t3 && (i3.__ = [t3, i3.__[1]], i3.__c.setState({}));
    }], i3.__c = u2), i3.__;
  }
  function _2(r3, o3) {
    var i3 = p2(t2++, 3);
    !l.__s && w2(i3.__H, o3) && (i3.__ = r3, i3.u = o3, u2.__H.__h.push(i3));
  }
  function F(n2, u3) {
    var r3 = p2(t2++, 7);
    return w2(r3.__H, u3) ? (r3.__V = n2(), r3.u = u3, r3.__h = n2, r3.__V) : r3.__;
  }
  function T2(n2, t3) {
    return i2 = 8, F(function() {
      return n2;
    }, t3);
  }
  function b2() {
    for (var t3; t3 = c2.shift(); )
      if (t3.__P)
        try {
          t3.__H.__h.forEach(j2), t3.__H.__h.forEach(k2), t3.__H.__h = [];
        } catch (u3) {
          t3.__H.__h = [], l.__e(u3, t3.__v);
        }
  }
  function j2(n2) {
    var t3 = u2, r3 = n2.__c;
    "function" == typeof r3 && (n2.__c = void 0, r3()), u2 = t3;
  }
  function k2(n2) {
    var t3 = u2;
    n2.__c = n2.__(), u2 = t3;
  }
  function w2(n2, t3) {
    return !n2 || n2.length !== t3.length || t3.some(function(t4, u3) {
      return t4 !== n2[u3];
    });
  }
  function z2(n2, t3) {
    return "function" == typeof t3 ? t3(n2) : t3;
  }
  var t2, u2, r2, o2, i2, c2, f2, e2, a2, v2, l2, m2, g2;
  var init_hooks_module = __esm({
    "node_modules/preact/hooks/dist/hooks.module.js"() {
      init_preact_module();
      i2 = 0;
      c2 = [];
      f2 = [];
      e2 = l.__b;
      a2 = l.__r;
      v2 = l.diffed;
      l2 = l.__c;
      m2 = l.unmount;
      l.__b = function(n2) {
        u2 = null, e2 && e2(n2);
      }, l.__r = function(n2) {
        a2 && a2(n2), t2 = 0;
        var o3 = (u2 = n2.__c).__H;
        o3 && (r2 === u2 ? (o3.__h = [], u2.__h = [], o3.__.forEach(function(n3) {
          n3.__V = f2, n3.u = void 0;
        })) : (o3.__h.forEach(j2), o3.__h.forEach(k2), o3.__h = [])), r2 = u2;
      }, l.diffed = function(t3) {
        v2 && v2(t3);
        var i3 = t3.__c;
        i3 && i3.__H && (i3.__H.__h.length && (1 !== c2.push(i3) && o2 === l.requestAnimationFrame || ((o2 = l.requestAnimationFrame) || function(n2) {
          var t4, u3 = function() {
            clearTimeout(r3), g2 && cancelAnimationFrame(t4), setTimeout(n2);
          }, r3 = setTimeout(u3, 100);
          g2 && (t4 = requestAnimationFrame(u3));
        })(b2)), i3.__H.__.forEach(function(n2) {
          n2.u && (n2.__H = n2.u), n2.__V !== f2 && (n2.__ = n2.__V), n2.u = void 0, n2.__V = f2;
        })), r2 = u2 = null;
      }, l.__c = function(t3, u3) {
        u3.some(function(t4) {
          try {
            t4.__h.forEach(j2), t4.__h = t4.__h.filter(function(n2) {
              return !n2.__ || k2(n2);
            });
          } catch (r3) {
            u3.some(function(n2) {
              n2.__h && (n2.__h = []);
            }), u3 = [], l.__e(r3, t4.__v);
          }
        }), l2 && l2(t3, u3);
      }, l.unmount = function(t3) {
        m2 && m2(t3);
        var u3, r3 = t3.__c;
        r3 && r3.__H && (r3.__H.__.forEach(function(n2) {
          try {
            j2(n2);
          } catch (n3) {
            u3 = n3;
          }
        }), u3 && l.__e(u3, r3.__v));
      };
      g2 = "function" == typeof requestAnimationFrame;
    }
  });

  // C:/Users/salaj/AppData/Local/Temp/21102e20-6098-4711-bae0-a67be9544564/loading-indicator.js
  var loading_indicator_default;
  var init_loading_indicator = __esm({
    "C:/Users/salaj/AppData/Local/Temp/21102e20-6098-4711-bae0-a67be9544564/loading-indicator.js"() {
      if (document.getElementById("6382d9d1d4") === null) {
        const element = document.createElement("style");
        element.id = "6382d9d1d4";
        element.textContent = `._loadingIndicator_pl5c3_1 {
  position: relative;
  width: 16px;
  height: 16px;
  margin: 0 auto;
}

._svg_pl5c3_8 {
  position: absolute;
  top: 0;
  left: 0;
  width: 16px;
  height: 16px;
  animation: _rotating_pl5c3_1 0.5s linear infinite;
  fill: currentColor;
}

@keyframes _rotating_pl5c3_1 {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy9sb2FkaW5nLWluZGljYXRvci9sb2FkaW5nLWluZGljYXRvci5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFDWixpREFBd0M7RUFDeEMsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0U7SUFDRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNGIiwiZmlsZSI6Im5vZGVfbW9kdWxlc1xcQGNyZWF0ZS1maWdtYS1wbHVnaW5cXHVpXFxsaWJcXGNvbXBvbmVudHNcXGxvYWRpbmctaW5kaWNhdG9yXFxsb2FkaW5nLWluZGljYXRvci5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9hZGluZ0luZGljYXRvciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5zdmcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbiAgYW5pbWF0aW9uOiByb3RhdGluZyAwLjVzIGxpbmVhciBpbmZpbml0ZTtcbiAgZmlsbDogY3VycmVudENvbG9yO1xufVxuXG5Aa2V5ZnJhbWVzIHJvdGF0aW5nIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbiJdfQ== */`;
        document.head.append(element);
      }
      loading_indicator_default = { "loadingIndicator": "_loadingIndicator_pl5c3_1", "svg": "_svg_pl5c3_8", "rotating": "_rotating_pl5c3_1" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/loading-indicator/loading-indicator.js
  function LoadingIndicator(_a) {
    var _b = _a, { color } = _b, rest = __objRest(_b, ["color"]);
    return h("div", __spreadProps(__spreadValues({}, rest), { class: loading_indicator_default.loadingIndicator }), h("svg", { class: loading_indicator_default.svg, style: typeof color === "undefined" ? void 0 : {
      fill: `var(--figma-color-icon-${color})`
    } }, h("path", { d: "M8 15C11.866 15 15 11.866 15 8C15 6.7865 14.6912 5.64511 14.1479 4.65013L15.0263 4.17174C15.6471 5.30882 16 6.6132 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 5.54138 1.10909 3.34181 2.85426 1.8743L3.47761 2.65678C1.96204 3.94081 1 5.85806 1 8C1 11.866 4.13401 15 8 15Z" })));
  }
  var init_loading_indicator2 = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/loading-indicator/loading-indicator.js"() {
      init_preact_module();
      init_loading_indicator();
    }
  });

  // C:/Users/salaj/AppData/Local/Temp/6a2501e9-e187-4b8c-942f-9a041d77617f/button.js
  var button_default;
  var init_button = __esm({
    "C:/Users/salaj/AppData/Local/Temp/6a2501e9-e187-4b8c-942f-9a041d77617f/button.js"() {
      if (document.getElementById("59aaf4e5a1") === null) {
        const element = document.createElement("style");
        element.id = "59aaf4e5a1";
        element.textContent = `._button_5fxgc_1 {
  position: relative;
  z-index: var(--z-index-1);
  display: inline-block;
}

._fullWidth_5fxgc_7 {
  display: block;
}

._button_5fxgc_1 button {
  display: inline-block;
  height: 32px;
  border-radius: var(--border-radius-6);
}

._disabled_5fxgc_17 button {
  cursor: not-allowed;
}

._fullWidth_5fxgc_7 button {
  display: block;
  overflow: hidden;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
}

._default_5fxgc_29 button {
  padding: 0 14px;
  border: 2px solid transparent;
  background-color: var(--figma-color-bg-brand);
  color: var(--figma-color-text-onbrand);
  line-height: 28px;
}
._default_5fxgc_29:not(._disabled_5fxgc_17) button:focus {
  border-color: var(--figma-color-border-brand-strong);
}
._default_5fxgc_29._disabled_5fxgc_17 button {
  background-color: var(--figma-color-bg-disabled);
  color: var(--figma-color-text-ondisabled);
}

._default_5fxgc_29._danger_5fxgc_44 button {
  background-color: var(--figma-color-bg-danger);
  color: var(--figma-color-text-ondanger);
}
._default_5fxgc_29._danger_5fxgc_44:not(._disabled_5fxgc_17) button:focus {
  border-color: var(--figma-color-border-danger-strong);
}
._default_5fxgc_29._danger_5fxgc_44._disabled_5fxgc_17 button {
  background-color: var(--figma-color-bg-disabled);
  color: var(--figma-color-text-ondisabled);
}

._secondary_5fxgc_56 button {
  padding: 0 15px;
  border: 1px solid var(--figma-color-border-strong);
  background-color: transparent;
  color: var(--figma-color-text);
  line-height: 30px;
}
._secondary_5fxgc_56:not(._disabled_5fxgc_17) button:focus {
  padding: 0 14px;
  border-width: 2px;
  border-color: var(--figma-color-border-brand-strong);
  line-height: 28px;
}
._secondary_5fxgc_56._disabled_5fxgc_17 button {
  border-color: var(--figma-color-border-disabled-strong);
  color: var(--figma-color-text-disabled);
}

._secondary_5fxgc_56._danger_5fxgc_44 button {
  border-color: var(--figma-color-border-danger-strong);
  color: var(--figma-color-text-danger);
}
._secondary_5fxgc_56._danger_5fxgc_44:not(._disabled_5fxgc_17) button:focus {
  border-color: var(--figma-color-border-danger-strong);
}
._secondary_5fxgc_56._danger_5fxgc_44._disabled_5fxgc_17 button {
  border-color: var(--figma-color-border-disabled-strong);
  color: var(--figma-color-text-disabled);
}

._loadingIndicator_5fxgc_86 {
  position: absolute;
  top: 50%;
  left: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
}

._default_5fxgc_29 ._loadingIndicator_5fxgc_86 {
  color: var(--figma-color-icon-onbrand);
}
._default_5fxgc_29._disabled_5fxgc_17 ._loadingIndicator_5fxgc_86 {
  color: var(--figma-color-icon-ondisabled);
}

._default_5fxgc_29._danger_5fxgc_44 ._loadingIndicator_5fxgc_86 {
  color: var(--figma-color-icon-ondanger);
}
._default_5fxgc_29._danger_5fxgc_44._disabled_5fxgc_17 ._loadingIndicator_5fxgc_86 {
  color: var(--figma-color-icon-ondisabled);
}

._secondary_5fxgc_56 ._loadingIndicator_5fxgc_86 {
  color: var(--figma-color-text);
}
._secondary_5fxgc_56._disabled_5fxgc_17 ._loadingIndicator_5fxgc_86 {
  color: var(--figma-color-text-disabled);
}

._secondary_5fxgc_56._danger_5fxgc_44 ._loadingIndicator_5fxgc_86 {
  color: var(--figma-color-text-danger);
}
._secondary_5fxgc_56._danger_5fxgc_44._disabled_5fxgc_17 ._loadingIndicator_5fxgc_86 {
  color: var(--figma-color-text-disabled);
}

._children_5fxgc_122 {
  display: inline;
}
._loading_5fxgc_86 ._children_5fxgc_122 {
  visibility: hidden;
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1oscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0IsNkNBQTZDO0VBQzdDLHNDQUFzQztFQUN0QyxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLG9EQUFvRDtBQUN0RDtBQUNBO0VBQ0UsZ0RBQWdEO0VBQ2hELHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLDhDQUE4QztFQUM5Qyx1Q0FBdUM7QUFDekM7QUFDQTtFQUNFLHFEQUFxRDtBQUN2RDtBQUNBO0VBQ0UsZ0RBQWdEO0VBQ2hELHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLGVBQWU7RUFDZixrREFBa0Q7RUFDbEQsNkJBQTZCO0VBQzdCLDhCQUE4QjtFQUM5QixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsb0RBQW9EO0VBQ3BELGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsdURBQXVEO0VBQ3ZELHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLHFEQUFxRDtFQUNyRCxxQ0FBcUM7QUFDdkM7QUFDQTtFQUNFLHFEQUFxRDtBQUN2RDtBQUNBO0VBQ0UsdURBQXVEO0VBQ3ZELHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULG9CQUFvQjtFQUNwQixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxzQ0FBc0M7QUFDeEM7QUFDQTtFQUNFLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLHVDQUF1QztBQUN6QztBQUNBO0VBQ0UseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSx1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxxQ0FBcUM7QUFDdkM7QUFDQTtFQUNFLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJub2RlX21vZHVsZXNcXEBjcmVhdGUtZmlnbWEtcGx1Z2luXFx1aVxcbGliXFxjb21wb25lbnRzXFxidXR0b25cXGJ1dHRvbi5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiB2YXIoLS16LWluZGV4LTEpO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5mdWxsV2lkdGgge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmJ1dHRvbiBidXR0b24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogMzJweDtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cy02KTtcbn1cblxuLmRpc2FibGVkIGJ1dHRvbiB7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi5mdWxsV2lkdGggYnV0dG9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmRlZmF1bHQgYnV0dG9uIHtcbiAgcGFkZGluZzogMCAxNHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYmctYnJhbmQpO1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItdGV4dC1vbmJyYW5kKTtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG59XG4uZGVmYXVsdDpub3QoLmRpc2FibGVkKSBidXR0b246Zm9jdXMge1xuICBib3JkZXItY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWJvcmRlci1icmFuZC1zdHJvbmcpO1xufVxuLmRlZmF1bHQuZGlzYWJsZWQgYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYmctZGlzYWJsZWQpO1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItdGV4dC1vbmRpc2FibGVkKTtcbn1cblxuLmRlZmF1bHQuZGFuZ2VyIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWJnLWRhbmdlcik7XG4gIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci10ZXh0LW9uZGFuZ2VyKTtcbn1cbi5kZWZhdWx0LmRhbmdlcjpub3QoLmRpc2FibGVkKSBidXR0b246Zm9jdXMge1xuICBib3JkZXItY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWJvcmRlci1kYW5nZXItc3Ryb25nKTtcbn1cbi5kZWZhdWx0LmRhbmdlci5kaXNhYmxlZCBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci1iZy1kaXNhYmxlZCk7XG4gIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci10ZXh0LW9uZGlzYWJsZWQpO1xufVxuXG4uc2Vjb25kYXJ5IGJ1dHRvbiB7XG4gIHBhZGRpbmc6IDAgMTVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZmlnbWEtY29sb3ItYm9yZGVyLXN0cm9uZyk7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItdGV4dCk7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xufVxuLnNlY29uZGFyeTpub3QoLmRpc2FibGVkKSBidXR0b246Zm9jdXMge1xuICBwYWRkaW5nOiAwIDE0cHg7XG4gIGJvcmRlci13aWR0aDogMnB4O1xuICBib3JkZXItY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWJvcmRlci1icmFuZC1zdHJvbmcpO1xuICBsaW5lLWhlaWdodDogMjhweDtcbn1cbi5zZWNvbmRhcnkuZGlzYWJsZWQgYnV0dG9uIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci1ib3JkZXItZGlzYWJsZWQtc3Ryb25nKTtcbiAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLXRleHQtZGlzYWJsZWQpO1xufVxuXG4uc2Vjb25kYXJ5LmRhbmdlciBidXR0b24ge1xuICBib3JkZXItY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWJvcmRlci1kYW5nZXItc3Ryb25nKTtcbiAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLXRleHQtZGFuZ2VyKTtcbn1cbi5zZWNvbmRhcnkuZGFuZ2VyOm5vdCguZGlzYWJsZWQpIGJ1dHRvbjpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYm9yZGVyLWRhbmdlci1zdHJvbmcpO1xufVxuLnNlY29uZGFyeS5kYW5nZXIuZGlzYWJsZWQgYnV0dG9uIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci1ib3JkZXItZGlzYWJsZWQtc3Ryb25nKTtcbiAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLXRleHQtZGlzYWJsZWQpO1xufVxuXG4ubG9hZGluZ0luZGljYXRvciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4uZGVmYXVsdCAubG9hZGluZ0luZGljYXRvciB7XG4gIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci1pY29uLW9uYnJhbmQpO1xufVxuLmRlZmF1bHQuZGlzYWJsZWQgLmxvYWRpbmdJbmRpY2F0b3Ige1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItaWNvbi1vbmRpc2FibGVkKTtcbn1cblxuLmRlZmF1bHQuZGFuZ2VyIC5sb2FkaW5nSW5kaWNhdG9yIHtcbiAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWljb24tb25kYW5nZXIpO1xufVxuLmRlZmF1bHQuZGFuZ2VyLmRpc2FibGVkIC5sb2FkaW5nSW5kaWNhdG9yIHtcbiAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWljb24tb25kaXNhYmxlZCk7XG59XG5cbi5zZWNvbmRhcnkgLmxvYWRpbmdJbmRpY2F0b3Ige1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItdGV4dCk7XG59XG4uc2Vjb25kYXJ5LmRpc2FibGVkIC5sb2FkaW5nSW5kaWNhdG9yIHtcbiAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLXRleHQtZGlzYWJsZWQpO1xufVxuXG4uc2Vjb25kYXJ5LmRhbmdlciAubG9hZGluZ0luZGljYXRvciB7XG4gIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci10ZXh0LWRhbmdlcik7XG59XG4uc2Vjb25kYXJ5LmRhbmdlci5kaXNhYmxlZCAubG9hZGluZ0luZGljYXRvciB7XG4gIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci10ZXh0LWRpc2FibGVkKTtcbn1cblxuLmNoaWxkcmVuIHtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuLmxvYWRpbmcgLmNoaWxkcmVuIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuIl19 */`;
        document.head.append(element);
      }
      button_default = { "button": "_button_5fxgc_1", "fullWidth": "_fullWidth_5fxgc_7", "disabled": "_disabled_5fxgc_17", "default": "_default_5fxgc_29", "danger": "_danger_5fxgc_44", "secondary": "_secondary_5fxgc_56", "loadingIndicator": "_loadingIndicator_5fxgc_86", "children": "_children_5fxgc_122", "loading": "_loading_5fxgc_86" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/button/button.js
  function Button(_a) {
    var _b = _a, { children, danger = false, disabled = false, fullWidth = false, loading = false, onClick, propagateEscapeKeyDown = true, secondary = false } = _b, rest = __objRest(_b, ["children", "danger", "disabled", "fullWidth", "loading", "onClick", "propagateEscapeKeyDown", "secondary"]);
    const handleKeyDown = T2(function(event) {
      if (event.key !== "Escape") {
        return;
      }
      if (propagateEscapeKeyDown === false) {
        event.stopPropagation();
      }
      event.currentTarget.blur();
    }, [propagateEscapeKeyDown]);
    return h("div", { class: createClassName([
      button_default.button,
      secondary === true ? button_default.secondary : button_default.default,
      danger === true ? button_default.danger : null,
      fullWidth === true ? button_default.fullWidth : null,
      disabled === true ? button_default.disabled : null,
      loading === true ? button_default.loading : null
    ]) }, loading === true ? h("div", { class: button_default.loadingIndicator }, h(LoadingIndicator, null)) : null, h("button", __spreadProps(__spreadValues({}, rest), { disabled: disabled === true, onClick: disabled === true || loading === true ? void 0 : onClick, onKeyDown: disabled === true || loading === true ? void 0 : handleKeyDown, tabIndex: disabled === true ? -1 : 0 }), h("div", { class: button_default.children }, children)));
  }
  var init_button2 = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/button/button.js"() {
      init_preact_module();
      init_hooks_module();
      init_create_class_name();
      init_loading_indicator2();
      init_button();
    }
  });

  // C:/Users/salaj/AppData/Local/Temp/26373ae5-4a94-4250-8b34-e02f4aa1e295/icon.js
  var icon_default;
  var init_icon = __esm({
    "C:/Users/salaj/AppData/Local/Temp/26373ae5-4a94-4250-8b34-e02f4aa1e295/icon.js"() {
      if (document.getElementById("3534db11f8") === null) {
        const element = document.createElement("style");
        element.id = "3534db11f8";
        element.textContent = `._icon_13804_1 {
  fill: currentColor;
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvaWNvbnMvaWNvbi5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoibm9kZV9tb2R1bGVzXFxAY3JlYXRlLWZpZ21hLXBsdWdpblxcdWlcXGxpYlxcaWNvbnNcXGljb24uY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmljb24ge1xuICBmaWxsOiBjdXJyZW50Q29sb3I7XG59XG4iXX0= */`;
        document.head.append(element);
      }
      icon_default = { "icon": "_icon_13804_1" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/icons/create-icon.js
  function createIcon(path, options) {
    const { width, height } = options;
    return function Icon(_a) {
      var _b = _a, { color } = _b, rest = __objRest(_b, ["color"]);
      return h("svg", __spreadProps(__spreadValues({}, rest), { class: icon_default.icon, height, style: typeof color === "undefined" ? void 0 : {
        fill: `var(--figma-color-icon-${color})`
      }, width, xmlns: "http://www.w3.org/2000/svg" }), h("path", { "clip-rule": "evenodd", d: path, "fill-rule": "evenodd" }));
    };
  }
  var init_create_icon = __esm({
    "node_modules/@create-figma-plugin/ui/lib/icons/create-icon.js"() {
      init_preact_module();
      init_icon();
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/icons/icon-12/icon-control-checkbox-checked-12.js
  var IconControlCheckboxChecked12;
  var init_icon_control_checkbox_checked_12 = __esm({
    "node_modules/@create-figma-plugin/ui/lib/icons/icon-12/icon-control-checkbox-checked-12.js"() {
      init_create_icon();
      IconControlCheckboxChecked12 = createIcon("m3.17647 4.82377 1.88235 1.88236 3.76471-3.76472L10 4.11788l-4.94118 4.9412L2 6.00024l1.17647-1.17647Z", { height: 12, width: 12 });
    }
  });

  // C:/Users/salaj/AppData/Local/Temp/6df9565e-31f8-4fb2-a7cc-c770c9605860/checkbox.js
  var checkbox_default;
  var init_checkbox = __esm({
    "C:/Users/salaj/AppData/Local/Temp/6df9565e-31f8-4fb2-a7cc-c770c9605860/checkbox.js"() {
      if (document.getElementById("d3e5ff0c7f") === null) {
        const element = document.createElement("style");
        element.id = "d3e5ff0c7f";
        element.textContent = `._checkbox_1a43f_1 {
  position: relative;
  z-index: var(--z-index-1);
}

._input_1a43f_6 {
  position: absolute;
  z-index: var(
    --z-index-1
  ); /* stack \`.input\` over all other elements within \`.checkbox\` */
  top: -8px;
  right: -16px;
  bottom: -8px;
  left: -16px;
  display: block;
  width: calc(100% + 32px);
}
._disabled_1a43f_18 ._input_1a43f_6 {
  cursor: not-allowed;
}

._fill_1a43f_22,
._border_1a43f_23 {
  position: absolute;
  top: 0;
  left: 0;
  width: 12px;
  height: 12px;
  border-radius: var(--border-radius-2);
}

._border_1a43f_23 {
  border: 1px solid var(--figma-color-border-strong);
}
._checkbox_1a43f_1:not(._disabled_1a43f_18) ._input_1a43f_6:focus ~ ._border_1a43f_23 {
  border-color: var(--figma-color-border-brand-strong);
  box-shadow: 0 0 0 1px var(--figma-color-border-brand-strong);
}
._checkbox_1a43f_1:not(._disabled_1a43f_18) ._input_1a43f_6:checked ~ ._border_1a43f_23 {
  border: 0;
}
._checkbox_1a43f_1:not(._disabled_1a43f_18) ._input_1a43f_6:checked:focus ~ ._border_1a43f_23 {
  box-shadow: 0 0 0 1px var(--figma-color-bg),
    0 0 0 2px var(--figma-color-border-brand-strong);
}
._disabled_1a43f_18 ._input_1a43f_6 ~ ._border_1a43f_23 {
  border-color: var(--figma-color-border-disabled-strong);
}
._disabled_1a43f_18 ._input_1a43f_6:checked ~ ._border_1a43f_23 {
  border: 0;
}

._checkbox_1a43f_1:not(._disabled_1a43f_18) ._input_1a43f_6:checked ~ ._fill_1a43f_22 {
  background-color: var(--figma-color-bg-brand);
}
._disabled_1a43f_18 ._input_1a43f_6:checked ~ ._fill_1a43f_22 {
  background-color: var(--figma-color-bg-disabled);
}

._checkIcon_1a43f_60 {
  color: var(--figma-color-icon-onbrand);
}
._disabled_1a43f_18 ._checkIcon_1a43f_60 {
  color: var(--figma-color-icon-ondisabled);
}

._children_1a43f_67 {
  min-height: 12px;
  padding: 2px 0 0 20px;
  color: var(--figma-color-text);
}
._disabled_1a43f_18 ._children_1a43f_67 {
  opacity: var(--opacity-30);
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy9jaGVja2JveC9jaGVja2JveC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCOztHQUVDLEVBQUUsOERBQThEO0VBQ2pFLFNBQVM7RUFDVCxZQUFZO0VBQ1osWUFBWTtFQUNaLFdBQVc7RUFDWCxjQUFjO0VBQ2Qsd0JBQXdCO0FBQzFCO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUUsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFDWixxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxrREFBa0Q7QUFDcEQ7QUFDQTtFQUNFLG9EQUFvRDtFQUNwRCw0REFBNEQ7QUFDOUQ7QUFDQTtFQUNFLFNBQVM7QUFDWDtBQUNBO0VBQ0U7b0RBQ2tEO0FBQ3BEO0FBQ0E7RUFDRSx1REFBdUQ7QUFDekQ7QUFDQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLDZDQUE2QztBQUMvQztBQUNBO0VBQ0UsZ0RBQWdEO0FBQ2xEOztBQUVBO0VBQ0Usc0NBQXNDO0FBQ3hDO0FBQ0E7RUFDRSx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UsMEJBQTBCO0FBQzVCIiwiZmlsZSI6Im5vZGVfbW9kdWxlc1xcQGNyZWF0ZS1maWdtYS1wbHVnaW5cXHVpXFxsaWJcXGNvbXBvbmVudHNcXGNoZWNrYm94XFxjaGVja2JveC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hlY2tib3gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IHZhcigtLXotaW5kZXgtMSk7XG59XG5cbi5pbnB1dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogdmFyKFxuICAgIC0tei1pbmRleC0xXG4gICk7IC8qIHN0YWNrIGAuaW5wdXRgIG92ZXIgYWxsIG90aGVyIGVsZW1lbnRzIHdpdGhpbiBgLmNoZWNrYm94YCAqL1xuICB0b3A6IC04cHg7XG4gIHJpZ2h0OiAtMTZweDtcbiAgYm90dG9tOiAtOHB4O1xuICBsZWZ0OiAtMTZweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiBjYWxjKDEwMCUgKyAzMnB4KTtcbn1cbi5kaXNhYmxlZCAuaW5wdXQge1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuXG4uZmlsbCxcbi5ib3JkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEycHg7XG4gIGhlaWdodDogMTJweDtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cy0yKTtcbn1cblxuLmJvcmRlciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWZpZ21hLWNvbG9yLWJvcmRlci1zdHJvbmcpO1xufVxuLmNoZWNrYm94Om5vdCguZGlzYWJsZWQpIC5pbnB1dDpmb2N1cyB+IC5ib3JkZXIge1xuICBib3JkZXItY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWJvcmRlci1icmFuZC1zdHJvbmcpO1xuICBib3gtc2hhZG93OiAwIDAgMCAxcHggdmFyKC0tZmlnbWEtY29sb3ItYm9yZGVyLWJyYW5kLXN0cm9uZyk7XG59XG4uY2hlY2tib3g6bm90KC5kaXNhYmxlZCkgLmlucHV0OmNoZWNrZWQgfiAuYm9yZGVyIHtcbiAgYm9yZGVyOiAwO1xufVxuLmNoZWNrYm94Om5vdCguZGlzYWJsZWQpIC5pbnB1dDpjaGVja2VkOmZvY3VzIH4gLmJvcmRlciB7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDFweCB2YXIoLS1maWdtYS1jb2xvci1iZyksXG4gICAgMCAwIDAgMnB4IHZhcigtLWZpZ21hLWNvbG9yLWJvcmRlci1icmFuZC1zdHJvbmcpO1xufVxuLmRpc2FibGVkIC5pbnB1dCB+IC5ib3JkZXIge1xuICBib3JkZXItY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWJvcmRlci1kaXNhYmxlZC1zdHJvbmcpO1xufVxuLmRpc2FibGVkIC5pbnB1dDpjaGVja2VkIH4gLmJvcmRlciB7XG4gIGJvcmRlcjogMDtcbn1cblxuLmNoZWNrYm94Om5vdCguZGlzYWJsZWQpIC5pbnB1dDpjaGVja2VkIH4gLmZpbGwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci1iZy1icmFuZCk7XG59XG4uZGlzYWJsZWQgLmlucHV0OmNoZWNrZWQgfiAuZmlsbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWJnLWRpc2FibGVkKTtcbn1cblxuLmNoZWNrSWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci1pY29uLW9uYnJhbmQpO1xufVxuLmRpc2FibGVkIC5jaGVja0ljb24ge1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItaWNvbi1vbmRpc2FibGVkKTtcbn1cblxuLmNoaWxkcmVuIHtcbiAgbWluLWhlaWdodDogMTJweDtcbiAgcGFkZGluZzogMnB4IDAgMCAyMHB4O1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItdGV4dCk7XG59XG4uZGlzYWJsZWQgLmNoaWxkcmVuIHtcbiAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS0zMCk7XG59XG4iXX0= */`;
        document.head.append(element);
      }
      checkbox_default = { "checkbox": "_checkbox_1a43f_1", "input": "_input_1a43f_6", "disabled": "_disabled_1a43f_18", "fill": "_fill_1a43f_22", "border": "_border_1a43f_23", "checkIcon": "_checkIcon_1a43f_60", "children": "_children_1a43f_67" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/checkbox/checkbox.js
  function Checkbox(_a) {
    var _b = _a, { children, disabled = false, name, onChange = function() {
    }, onValueChange = function() {
    }, propagateEscapeKeyDown = true, value = false } = _b, rest = __objRest(_b, ["children", "disabled", "name", "onChange", "onValueChange", "propagateEscapeKeyDown", "value"]);
    const handleChange = T2(function(event) {
      const newValue = event.currentTarget.checked;
      onValueChange(newValue, name);
      onChange(event);
    }, [name, onChange, onValueChange]);
    const handleKeyDown = T2(function(event) {
      if (event.key !== "Escape") {
        return;
      }
      if (propagateEscapeKeyDown === false) {
        event.stopPropagation();
      }
      event.currentTarget.blur();
    }, [propagateEscapeKeyDown]);
    return h("label", { class: createClassName([
      checkbox_default.checkbox,
      disabled === true ? checkbox_default.disabled : null
    ]) }, h("input", __spreadProps(__spreadValues({}, rest), { checked: value === true, class: checkbox_default.input, disabled: disabled === true, name, onChange: handleChange, onKeyDown: handleKeyDown, tabIndex: disabled === true ? -1 : 0, type: "checkbox" })), h("div", { class: checkbox_default.fill }, value === true ? h("div", { class: checkbox_default.checkIcon }, h(IconControlCheckboxChecked12, null)) : null), h("div", { class: checkbox_default.border }), h("div", { class: checkbox_default.children }, children));
  }
  var init_checkbox2 = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/checkbox/checkbox.js"() {
      init_preact_module();
      init_hooks_module();
      init_icon_control_checkbox_checked_12();
      init_create_class_name();
      init_checkbox();
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/utilities/private/get-focusable-elements.js
  function getFocusableElements(rootElement) {
    const elements = (typeof rootElement === "undefined" ? document : rootElement).querySelectorAll(':not([disabled])[tabindex]:not([tabindex="-1"])');
    return Array.prototype.slice.call(elements);
  }
  var init_get_focusable_elements = __esm({
    "node_modules/@create-figma-plugin/ui/lib/utilities/private/get-focusable-elements.js"() {
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/utilities/private/create-focus-trap-key-down-handler.js
  function createFocusTrapKeyDownHandler(rootElement) {
    return function(event) {
      if (event.key !== "Tab") {
        return;
      }
      event.preventDefault();
      const focusableElements = getFocusableElements(rootElement);
      if (focusableElements.length === 0) {
        return;
      }
      const index = findElementIndex(event.target, focusableElements);
      if (index === focusableElements.length - 1 && event.shiftKey === false) {
        focusableElements[0].focus();
        return;
      }
      if (index === 0 && event.shiftKey === true) {
        focusableElements[focusableElements.length - 1].focus();
        return;
      }
      focusableElements[event.shiftKey === true ? index - 1 : index + 1].focus();
    };
  }
  function findElementIndex(targetElement, elements) {
    return elements.reduce(function(result, element, index) {
      if (result === -1 && element.isSameNode(targetElement) === true) {
        return index;
      }
      return result;
    }, -1);
  }
  var init_create_focus_trap_key_down_handler = __esm({
    "node_modules/@create-figma-plugin/ui/lib/utilities/private/create-focus-trap-key-down-handler.js"() {
      init_get_focusable_elements();
    }
  });

  // C:/Users/salaj/AppData/Local/Temp/c871eb44-1b3c-4265-8343-448b49856aeb/text.js
  var text_default;
  var init_text = __esm({
    "C:/Users/salaj/AppData/Local/Temp/c871eb44-1b3c-4265-8343-448b49856aeb/text.js"() {
      if (document.getElementById("93869c3fd0") === null) {
        const element = document.createElement("style");
        element.id = "93869c3fd0";
        element.textContent = `._text_mh6mm_1 {
  padding-top: 1px;
  color: var(--figma-color-text);
  pointer-events: none;
  transform: translateY(4px);
}
._text_mh6mm_1:before {
  display: block;
  height: 0;
  margin-top: -9px;
  content: '';
  pointer-events: none;
}

._numeric_mh6mm_15 {
  font-variant-numeric: tabular-nums;
}

._left_mh6mm_19 {
  text-align: left;
}
._center_mh6mm_22 {
  text-align: center;
}
._right_mh6mm_25 {
  text-align: right;
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy90ZXh0L3RleHQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLDhCQUE4QjtFQUM5QixvQkFBb0I7RUFDcEIsMEJBQTBCO0FBQzVCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsU0FBUztFQUNULGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJub2RlX21vZHVsZXNcXEBjcmVhdGUtZmlnbWEtcGx1Z2luXFx1aVxcbGliXFxjb21wb25lbnRzXFx0ZXh0XFx0ZXh0LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0IHtcbiAgcGFkZGluZy10b3A6IDFweDtcbiAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLXRleHQpO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDRweCk7XG59XG4udGV4dDpiZWZvcmUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAwO1xuICBtYXJnaW4tdG9wOiAtOXB4O1xuICBjb250ZW50OiAnJztcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5udW1lcmljIHtcbiAgZm9udC12YXJpYW50LW51bWVyaWM6IHRhYnVsYXItbnVtcztcbn1cblxuLmxlZnQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLmNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuIl19 */`;
        document.head.append(element);
      }
      text_default = { "text": "_text_mh6mm_1", "numeric": "_numeric_mh6mm_15", "left": "_left_mh6mm_19", "center": "_center_mh6mm_22", "right": "_right_mh6mm_25" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/text/text.js
  function Text(_a) {
    var _b = _a, { align = "left", children, numeric = false } = _b, rest = __objRest(_b, ["align", "children", "numeric"]);
    return h("div", __spreadProps(__spreadValues({}, rest), { class: createClassName([
      text_default.text,
      text_default[align],
      numeric === true ? text_default.numeric : null
    ]) }), children);
  }
  var init_text2 = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/text/text.js"() {
      init_preact_module();
      init_create_class_name();
      init_text();
    }
  });

  // node_modules/@create-figma-plugin/utilities/lib/events.js
  function invokeEventHandler(name, args) {
    for (const id in eventHandlers) {
      if (eventHandlers[id].name === name) {
        eventHandlers[id].handler.apply(null, args);
      }
    }
  }
  var eventHandlers, emit;
  var init_events = __esm({
    "node_modules/@create-figma-plugin/utilities/lib/events.js"() {
      eventHandlers = {};
      emit = typeof window === "undefined" ? function(name, ...args) {
        figma.ui.postMessage([name, ...args]);
      } : function(name, ...args) {
        window.parent.postMessage({
          pluginMessage: [name, ...args]
        }, "*");
      };
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

  // node_modules/@create-figma-plugin/utilities/lib/index.js
  var init_lib = __esm({
    "node_modules/@create-figma-plugin/utilities/lib/index.js"() {
      init_events();
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/hooks/use-focus-trap/use-focus-trap.js
  function useFocusTrap(rootElement) {
    _2(function() {
      const handleKeyDown = createFocusTrapKeyDownHandler(rootElement);
      window.addEventListener("keydown", handleKeyDown);
      return function() {
        window.removeEventListener("keydown", handleKeyDown);
      };
    }, [rootElement]);
  }
  var init_use_focus_trap = __esm({
    "node_modules/@create-figma-plugin/ui/lib/hooks/use-focus-trap/use-focus-trap.js"() {
      init_hooks_module();
      init_create_focus_trap_key_down_handler();
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/hooks/use-initial-focus/use-initial-focus.js
  function useInitialFocus() {
    _2(function() {
      const focusableElements = document.querySelectorAll(`[${INITIAL_FOCUS_DATA_ATTRIBUTE_NAME}]`);
      if (focusableElements.length === 0) {
        throw new Error(`No element with attribute \`${INITIAL_FOCUS_DATA_ATTRIBUTE_NAME}\``);
      }
      if (focusableElements.length > 1) {
        const checkedRadioButtonInputElement = Array.prototype.slice.call(focusableElements).find(function(focusableElement) {
          const inputElement = focusableElement;
          return inputElement.type === "radio" && inputElement.checked === true;
        });
        if (typeof checkedRadioButtonInputElement !== "undefined") {
          checkedRadioButtonInputElement.focus();
          return;
        }
      }
      focusableElements[0].focus();
    }, []);
    return {
      [INITIAL_FOCUS_DATA_ATTRIBUTE_NAME]: true
    };
  }
  var INITIAL_FOCUS_DATA_ATTRIBUTE_NAME;
  var init_use_initial_focus = __esm({
    "node_modules/@create-figma-plugin/ui/lib/hooks/use-initial-focus/use-initial-focus.js"() {
      init_hooks_module();
      INITIAL_FOCUS_DATA_ATTRIBUTE_NAME = "data-initial-focus";
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/hooks/use-window-key-down.js
  function useWindowKeyDown(key, onKeyDown) {
    const handleKeyDown = T2(function(event) {
      if (event.key !== key) {
        return;
      }
      onKeyDown(event);
    }, [key, onKeyDown]);
    _2(function() {
      window.addEventListener("keydown", handleKeyDown);
      return function() {
        window.removeEventListener("keydown", handleKeyDown);
      };
    }, [handleKeyDown]);
  }
  var init_use_window_key_down = __esm({
    "node_modules/@create-figma-plugin/ui/lib/hooks/use-window-key-down.js"() {
      init_hooks_module();
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/hooks/use-form/use-form.js
  function useForm(initialState, options) {
    const { close, submit, transform, validate } = options;
    const [formState, setState] = y(initialState);
    const setFormState = T2(function(value, name) {
      if (typeof name === "undefined") {
        throw new Error("`name` is `undefined`");
      }
      setState(function(previousState) {
        const newState = __spreadValues(__spreadValues({}, previousState), { [name]: value });
        return typeof transform === "undefined" ? newState : transform(newState);
      });
    }, [transform]);
    const handleSubmit = T2(function() {
      if (typeof validate !== "undefined" && validate(formState) === false) {
        return;
      }
      submit(formState);
    }, [formState, submit, validate]);
    useWindowKeyDown("Enter", handleSubmit);
    const handleClose = T2(function() {
      close(formState);
    }, [close, formState]);
    useWindowKeyDown("Escape", handleClose);
    useFocusTrap();
    const disabled = typeof validate !== "undefined" ? validate(formState) === false : false;
    const initialFocus = useInitialFocus();
    return {
      disabled,
      formState,
      handleSubmit,
      initialFocus,
      setFormState
    };
  }
  var init_use_form = __esm({
    "node_modules/@create-figma-plugin/ui/lib/hooks/use-form/use-form.js"() {
      init_hooks_module();
      init_use_focus_trap();
      init_use_initial_focus();
      init_use_window_key_down();
    }
  });

  // C:/Users/salaj/AppData/Local/Temp/8d05a9cb-5034-4706-843e-7fc172ef20e3/base.js
  var init_base = __esm({
    "C:/Users/salaj/AppData/Local/Temp/8d05a9cb-5034-4706-843e-7fc172ef20e3/base.js"() {
      if (document.getElementById("493f6ccd70") === null) {
        const element = document.createElement("style");
        element.id = "493f6ccd70";
        element.textContent = `@import url('https://fonts.googleapis.com/css?family=Inter:400,600&display=swap');

:root {
  /* border-radius */
  --border-radius-2: 2px;
  --border-radius-6: 6px;
  /* box-shadow */
  --box-shadow: var(--box-shadow-menu);
  --box-shadow-menu: 0 5px 17px rgba(0, 0, 0, 0.2),
    0 2px 7px rgba(0, 0, 0, 0.15), inset 0 0 0 0.5px #000000,
    0 0 0 0.5px rgba(0, 0, 0, 0.1);
  --box-shadow-modal: 0 2px 14px rgba(0, 0, 0, 0.15),
    0 0 0 0.5px rgba(0, 0, 0, 0.2);
  /* font */
  --font-family: 'Inter', 'Helvetica', sans-serif;
  --font-family-code: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono',
    'Courier New', monospace;
  --font-size-11: 11px;
  --font-size-12: 12px;
  --font-weight-regular: 400;
  --font-weight-bold: 600;
  --line-height-16: 16px;
  /* opacity */
  --opacity-30: 0.3;
  /* space */
  --space-extra-small: 8px;
  --space-small: 12px;
  --space-medium: 16px;
  --space-large: 20px;
  --space-extra-large: 24px;
  /* z-index */
  --z-index-1: 1;
  --z-index-2: 2;
}

* {
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: currentColor;
}

body {
  margin: 0;
  background-color: var(--figma-color-bg);
  color: var(--figma-color-text);
  font-family: var(--font-family);
  font-size: var(--font-size-11);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-16);
}

div,
span {
  cursor: default;
  user-select: none;
}

h1,
h2,
h3 {
  margin: 0;
  font-weight: inherit;
}

button {
  padding: 0;
  border: 0;
  -webkit-appearance: none;
  background-color: transparent;
  font: inherit;
  outline: 0;
}

hr {
  border: 0;
  margin: 0;
}

label {
  display: block;
}

input,
textarea {
  padding: 0;
  border: 0;
  margin: 0;
  -webkit-appearance: none;
  cursor: default;
  font: inherit;
  outline: 0;
}

svg {
  display: block;
}

::selection {
  background-color: var(--figma-color-bg-onselected);
}
`;
        document.head.append(element);
      }
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/utilities/render.js
  function render(Plugin) {
    return function(rootNode2, props) {
      P(h(Plugin, __spreadValues({}, props)), rootNode2);
    };
  }
  var init_render = __esm({
    "node_modules/@create-figma-plugin/ui/lib/utilities/render.js"() {
      init_base();
      init_preact_module();
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/index.js
  var init_lib2 = __esm({
    "node_modules/@create-figma-plugin/ui/lib/index.js"() {
      init_button2();
      init_checkbox2();
      init_text2();
      init_use_form();
      init_render();
    }
  });

  // C:/Users/salaj/AppData/Local/Temp/b2d58895-f698-41e5-bad3-7d3cfa53b450/styles.js
  var styles_default;
  var init_styles = __esm({
    "C:/Users/salaj/AppData/Local/Temp/b2d58895-f698-41e5-bad3-7d3cfa53b450/styles.js"() {
      if (document.getElementById("15d609d962") === null) {
        const element = document.createElement("style");
        element.id = "15d609d962";
        element.textContent = `:root {
	/* border-radius */
	--border-radius-2: 2px;
	--border-radius-6: 6px;
	/* box-shadow */
	--box-shadow: var(--box-shadow-menu);
	--box-shadow-menu: 0 5px 17px rgba(0, 0, 0, 0.2), 0 2px 7px rgba(0, 0, 0, 0.15), inset 0 0 0 0.5px #000000, 0 0 0 0.5px rgba(0, 0, 0, 0.1);
	--box-shadow-modal: 0 2px 14px rgba(0, 0, 0, 0.15), 0 0 0 0.5px rgba(0, 0, 0, 0.2);
	--box-shadow-custom: 0px -4px 4px rgba(0, 0, 0, 0.25), 0px -32px 64px rgba(0, 0, 0, 0.1876);
	/* font */
	--font-family: 'Inter', 'Helvetica', sans-serif;
	--font-family-code: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
	--font-size-11: 11px;
	--font-size-12: 12px;
	--font-weight-regular: 400;
	--font-weight-bold: 600;
	--line-height-16: 16px;
	/* opacity */
	--opacity-30: 0.3;
	/* space */
	--space-extra-small: 8px;
	--space-small: 12px;
	--space-medium: 16px;
	--space-large: 20px;
	--space-extra-large: 24px;
	/* z-index */
	--z-index-1: 1;
	--z-index-2: 2;
}
._root_146w5_59 {
	display: flex;
	flex-direction: column;
	align-items: flex-start;

	width: auto;
	max-height: 400px;

	overflow-x: hidden !important;
	overflow-y: hidden !important;
}
._divider_146w5_81 {
	width: 100%;
	height: 1px;
	background-color: var(--figma-color-border);
}

._header_146w5_93 {
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: center;
	align-items: stretch;
	align-content: normal;

	height: 64px;
	/* height: 32px; */

	order: 0;
	align-self: stretch;
	flex-grow: 0;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 32px 64px rgba(0, 0, 0, 0.1876);
}
._header-container_146w5_125 {
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: center;
	align-items: stretch;
	align-content: normal;
	padding: var(--space-medium);
	background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);

	background-size: 400% 400%;
	animation: _gradient_146w5_1 5s ease infinite;
}
@keyframes _gradient_146w5_1 {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
._content_146w5_173 {
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	flex-shrink: 1;
	flex-basis: auto;
	align-self: auto;
	order: 0;

	padding-left: var(--space-medium);
	padding-right: var(--space-medium);
	padding-top: var(--space-medium);
	padding-bottom: var(--space-medium);

	gap: var(--space-medium);

	width: 100%;

	overflow-x: hidden !important;
	overflow-y: auto !important;
	z-index: var(--z-index-1);
}
._content_146w5_173::-webkit-scrollbar {
	background-color: var(--figma-color-bg);
	width: 8px;
}
._content_146w5_173::-webkit-scrollbar-track {
	background-color: var(--figma-color-bg);
}
._content_146w5_173::-webkit-scrollbar-thumb {
	background-color: var(--figma-color-bg-tertiary);
	border: 4px solid var(--figma-color-bg-tertiary);
}

._footer_146w5_241 {
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: center;
	align-items: stretch;
	align-content: normal;

	min-height: 80.5;

	gap: var(--space-extra-small);

	order: 2;
	align-self: stretch;
	flex-grow: 0;

	padding: var(--space-medium);

	border-top: var(--figma-color-border) solid 1px;
	box-shadow: var(--box-shadow-custom);
	z-index: var(--z-index-2);
}
._support_146w5_285 {
	display: block;
	color: var(--figma-color-text-tertiary);
	text-align: center;
}
._bold_146w5_295 {
	font-weight: var(--font-weight-bold);
}
a {
	text-decoration: underline;
	color: var(--figma-color-text-brand);
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMvc3R5bGVzLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGtCQUFrQjtDQUNsQixzQkFBc0I7Q0FDdEIsc0JBQXNCO0NBQ3RCLGVBQWU7Q0FDZixvQ0FBb0M7Q0FDcEMsMElBQTBJO0NBQzFJLGtGQUFrRjtDQUNsRiwyRkFBMkY7Q0FDM0YsU0FBUztDQUNULCtDQUErQztDQUMvQyx3R0FBd0c7Q0FDeEcsb0JBQW9CO0NBQ3BCLG9CQUFvQjtDQUNwQiwwQkFBMEI7Q0FDMUIsdUJBQXVCO0NBQ3ZCLHNCQUFzQjtDQUN0QixZQUFZO0NBQ1osaUJBQWlCO0NBQ2pCLFVBQVU7Q0FDVix3QkFBd0I7Q0FDeEIsbUJBQW1CO0NBQ25CLG9CQUFvQjtDQUNwQixtQkFBbUI7Q0FDbkIseUJBQXlCO0NBQ3pCLFlBQVk7Q0FDWixjQUFjO0NBQ2QsY0FBYztBQUNmO0FBQ0E7Q0FDQyxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLHVCQUF1Qjs7Q0FFdkIsV0FBVztDQUNYLGlCQUFpQjs7Q0FFakIsNkJBQTZCO0NBQzdCLDZCQUE2QjtBQUM5QjtBQUNBO0NBQ0MsV0FBVztDQUNYLFdBQVc7Q0FDWCwyQ0FBMkM7QUFDNUM7O0FBRUE7Q0FDQyxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLGlCQUFpQjtDQUNqQix1QkFBdUI7Q0FDdkIsb0JBQW9CO0NBQ3BCLHFCQUFxQjs7Q0FFckIsWUFBWTtDQUNaLGtCQUFrQjs7Q0FFbEIsUUFBUTtDQUNSLG1CQUFtQjtDQUNuQixZQUFZO0NBQ1osZ0ZBQWdGO0FBQ2pGO0FBQ0E7Q0FDQyxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLGlCQUFpQjtDQUNqQix1QkFBdUI7Q0FDdkIsb0JBQW9CO0NBQ3BCLHFCQUFxQjtDQUNyQiw0QkFBNEI7Q0FDNUIsdUVBQXVFOztDQUV2RSwwQkFBMEI7Q0FDMUIsNkNBQW9DO0FBQ3JDO0FBQ0E7Q0FDQztFQUNDLDJCQUEyQjtDQUM1QjtDQUNBO0VBQ0MsNkJBQTZCO0NBQzlCO0NBQ0E7RUFDQywyQkFBMkI7Q0FDNUI7QUFDRDtBQUNBO0NBQ0MsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixZQUFZO0NBQ1osY0FBYztDQUNkLGdCQUFnQjtDQUNoQixnQkFBZ0I7Q0FDaEIsUUFBUTs7Q0FFUixpQ0FBaUM7Q0FDakMsa0NBQWtDO0NBQ2xDLGdDQUFnQztDQUNoQyxtQ0FBbUM7O0NBRW5DLHdCQUF3Qjs7Q0FFeEIsV0FBVzs7Q0FFWCw2QkFBNkI7Q0FDN0IsMkJBQTJCO0NBQzNCLHlCQUF5QjtBQUMxQjtBQUNBO0NBQ0MsdUNBQXVDO0NBQ3ZDLFVBQVU7QUFDWDtBQUNBO0NBQ0MsdUNBQXVDO0FBQ3hDO0FBQ0E7Q0FDQyxnREFBZ0Q7Q0FDaEQsZ0RBQWdEO0FBQ2pEOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixpQkFBaUI7Q0FDakIsdUJBQXVCO0NBQ3ZCLG9CQUFvQjtDQUNwQixxQkFBcUI7O0NBRXJCLGdCQUFnQjs7Q0FFaEIsNkJBQTZCOztDQUU3QixRQUFRO0NBQ1IsbUJBQW1CO0NBQ25CLFlBQVk7O0NBRVosNEJBQTRCOztDQUU1QiwrQ0FBK0M7Q0FDL0Msb0NBQW9DO0NBQ3BDLHlCQUF5QjtBQUMxQjtBQUNBO0NBQ0MsY0FBYztDQUNkLHVDQUF1QztDQUN2QyxrQkFBa0I7QUFDbkI7QUFDQTtDQUNDLG9DQUFvQztBQUNyQztBQUNBO0NBQ0MsMEJBQTBCO0NBQzFCLG9DQUFvQztBQUNyQyIsImZpbGUiOiJzcmNcXHN0eWxlc1xcc3R5bGVzLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpyb290IHtcclxuXHQvKiBib3JkZXItcmFkaXVzICovXHJcblx0LS1ib3JkZXItcmFkaXVzLTI6IDJweDtcclxuXHQtLWJvcmRlci1yYWRpdXMtNjogNnB4O1xyXG5cdC8qIGJveC1zaGFkb3cgKi9cclxuXHQtLWJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3ctbWVudSk7XHJcblx0LS1ib3gtc2hhZG93LW1lbnU6IDAgNXB4IDE3cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDJweCA3cHggcmdiYSgwLCAwLCAwLCAwLjE1KSwgaW5zZXQgMCAwIDAgMC41cHggIzAwMDAwMCwgMCAwIDAgMC41cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG5cdC0tYm94LXNoYWRvdy1tb2RhbDogMCAycHggMTRweCByZ2JhKDAsIDAsIDAsIDAuMTUpLCAwIDAgMCAwLjVweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcblx0LS1ib3gtc2hhZG93LWN1c3RvbTogMHB4IC00cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSksIDBweCAtMzJweCA2NHB4IHJnYmEoMCwgMCwgMCwgMC4xODc2KTtcclxuXHQvKiBmb250ICovXHJcblx0LS1mb250LWZhbWlseTogJ0ludGVyJywgJ0hlbHZldGljYScsIHNhbnMtc2VyaWY7XHJcblx0LS1mb250LWZhbWlseS1jb2RlOiBTRk1vbm8tUmVndWxhciwgTWVubG8sIE1vbmFjbywgQ29uc29sYXMsICdMaWJlcmF0aW9uIE1vbm8nLCAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7XHJcblx0LS1mb250LXNpemUtMTE6IDExcHg7XHJcblx0LS1mb250LXNpemUtMTI6IDEycHg7XHJcblx0LS1mb250LXdlaWdodC1yZWd1bGFyOiA0MDA7XHJcblx0LS1mb250LXdlaWdodC1ib2xkOiA2MDA7XHJcblx0LS1saW5lLWhlaWdodC0xNjogMTZweDtcclxuXHQvKiBvcGFjaXR5ICovXHJcblx0LS1vcGFjaXR5LTMwOiAwLjM7XHJcblx0Lyogc3BhY2UgKi9cclxuXHQtLXNwYWNlLWV4dHJhLXNtYWxsOiA4cHg7XHJcblx0LS1zcGFjZS1zbWFsbDogMTJweDtcclxuXHQtLXNwYWNlLW1lZGl1bTogMTZweDtcclxuXHQtLXNwYWNlLWxhcmdlOiAyMHB4O1xyXG5cdC0tc3BhY2UtZXh0cmEtbGFyZ2U6IDI0cHg7XHJcblx0Lyogei1pbmRleCAqL1xyXG5cdC0tei1pbmRleC0xOiAxO1xyXG5cdC0tei1pbmRleC0yOiAyO1xyXG59XHJcbi5yb290IHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcblxyXG5cdHdpZHRoOiBhdXRvO1xyXG5cdG1heC1oZWlnaHQ6IDQwMHB4O1xyXG5cclxuXHRvdmVyZmxvdy14OiBoaWRkZW4gIWltcG9ydGFudDtcclxuXHRvdmVyZmxvdy15OiBoaWRkZW4gIWltcG9ydGFudDtcclxufVxyXG4uZGl2aWRlciB7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiAxcHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYm9yZGVyKTtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGZsZXgtd3JhcDogbm93cmFwO1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG5cdGFsaWduLWNvbnRlbnQ6IG5vcm1hbDtcclxuXHJcblx0aGVpZ2h0OiA2NHB4O1xyXG5cdC8qIGhlaWdodDogMzJweDsgKi9cclxuXHJcblx0b3JkZXI6IDA7XHJcblx0YWxpZ24tc2VsZjogc3RyZXRjaDtcclxuXHRmbGV4LWdyb3c6IDA7XHJcblx0Ym94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KSwgMHB4IDMycHggNjRweCByZ2JhKDAsIDAsIDAsIDAuMTg3Nik7XHJcbn1cclxuLmhlYWRlci1jb250YWluZXIge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRmbGV4LXdyYXA6IG5vd3JhcDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuXHRhbGlnbi1jb250ZW50OiBub3JtYWw7XHJcblx0cGFkZGluZzogdmFyKC0tc3BhY2UtbWVkaXVtKTtcclxuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjZWU3NzUyLCAjZTczYzdlLCAjMjNhNmQ1LCAjMjNkNWFiKTtcclxuXHJcblx0YmFja2dyb3VuZC1zaXplOiA0MDAlIDQwMCU7XHJcblx0YW5pbWF0aW9uOiBncmFkaWVudCA1cyBlYXNlIGluZmluaXRlO1xyXG59XHJcbkBrZXlmcmFtZXMgZ3JhZGllbnQge1xyXG5cdDAlIHtcclxuXHRcdGJhY2tncm91bmQtcG9zaXRpb246IDAlIDUwJTtcclxuXHR9XHJcblx0NTAlIHtcclxuXHRcdGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgNTAlO1xyXG5cdH1cclxuXHQxMDAlIHtcclxuXHRcdGJhY2tncm91bmQtcG9zaXRpb246IDAlIDUwJTtcclxuXHR9XHJcbn1cclxuLmNvbnRlbnQge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRmbGV4LWdyb3c6IDE7XHJcblx0ZmxleC1zaHJpbms6IDE7XHJcblx0ZmxleC1iYXNpczogYXV0bztcclxuXHRhbGlnbi1zZWxmOiBhdXRvO1xyXG5cdG9yZGVyOiAwO1xyXG5cclxuXHRwYWRkaW5nLWxlZnQ6IHZhcigtLXNwYWNlLW1lZGl1bSk7XHJcblx0cGFkZGluZy1yaWdodDogdmFyKC0tc3BhY2UtbWVkaXVtKTtcclxuXHRwYWRkaW5nLXRvcDogdmFyKC0tc3BhY2UtbWVkaXVtKTtcclxuXHRwYWRkaW5nLWJvdHRvbTogdmFyKC0tc3BhY2UtbWVkaXVtKTtcclxuXHJcblx0Z2FwOiB2YXIoLS1zcGFjZS1tZWRpdW0pO1xyXG5cclxuXHR3aWR0aDogMTAwJTtcclxuXHJcblx0b3ZlcmZsb3cteDogaGlkZGVuICFpbXBvcnRhbnQ7XHJcblx0b3ZlcmZsb3cteTogYXV0byAhaW1wb3J0YW50O1xyXG5cdHotaW5kZXg6IHZhcigtLXotaW5kZXgtMSk7XHJcbn1cclxuLmNvbnRlbnQ6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci1iZyk7XHJcblx0d2lkdGg6IDhweDtcclxufVxyXG4uY29udGVudDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWJnKTtcclxufVxyXG4uY29udGVudDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWJnLXRlcnRpYXJ5KTtcclxuXHRib3JkZXI6IDRweCBzb2xpZCB2YXIoLS1maWdtYS1jb2xvci1iZy10ZXJ0aWFyeSk7XHJcbn1cclxuXHJcbi5mb290ZXIge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRmbGV4LXdyYXA6IG5vd3JhcDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuXHRhbGlnbi1jb250ZW50OiBub3JtYWw7XHJcblxyXG5cdG1pbi1oZWlnaHQ6IDgwLjU7XHJcblxyXG5cdGdhcDogdmFyKC0tc3BhY2UtZXh0cmEtc21hbGwpO1xyXG5cclxuXHRvcmRlcjogMjtcclxuXHRhbGlnbi1zZWxmOiBzdHJldGNoO1xyXG5cdGZsZXgtZ3JvdzogMDtcclxuXHJcblx0cGFkZGluZzogdmFyKC0tc3BhY2UtbWVkaXVtKTtcclxuXHJcblx0Ym9yZGVyLXRvcDogdmFyKC0tZmlnbWEtY29sb3ItYm9yZGVyKSBzb2xpZCAxcHg7XHJcblx0Ym94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdy1jdXN0b20pO1xyXG5cdHotaW5kZXg6IHZhcigtLXotaW5kZXgtMik7XHJcbn1cclxuLnN1cHBvcnQge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci10ZXh0LXRlcnRpYXJ5KTtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmJvbGQge1xyXG5cdGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1ib2xkKTtcclxufVxyXG5hIHtcclxuXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuXHRjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItdGV4dC1icmFuZCk7XHJcbn1cclxuIl19 */`;
        document.head.append(element);
      }
      styles_default = { "root": "_root_146w5_59", "divider": "_divider_146w5_81", "header": "_header_146w5_93", "header-container": "_header-container_146w5_125", "gradient": "_gradient_146w5_1", "content": "_content_146w5_173", "footer": "_footer_146w5_241", "support": "_support_146w5_285", "bold": "_bold_146w5_295" };
    }
  });

  // src/components/social-media-framework.tsx
  function SocialMedia(props) {
    const { disabled, formState, handleSubmit, initialFocus, setFormState } = useForm(__spreadProps(__spreadValues({}, props), { loading: false }), {
      close: function() {
        emit("CLOSE_UI");
      },
      submit: function({ loading, Behance: Behance2, ChromeWebstore: ChromeWebstore2, Dribbble: Dribbble2, Discord: Discord2, Facebook: Facebook2, Figma: Figma2, Github: Github2, Gumroad: Gumroad2, Instagram: Instagram2, LinkedIn: LinkedIn2, Pinterest: Pinterest2, ProductHunt: ProductHunt2, Snapchat: Snapchat2, Twitter: Twitter2, Twitch: Twitch2, TikTok: TikTok2, Youtube: Youtube2 }) {
        setFormState(loading, "loading");
        emit("SUBMIT", {
          Behance: Behance2,
          ChromeWebstore: ChromeWebstore2,
          Dribbble: Dribbble2,
          Discord: Discord2,
          Facebook: Facebook2,
          Figma: Figma2,
          Github: Github2,
          Gumroad: Gumroad2,
          Instagram: Instagram2,
          LinkedIn: LinkedIn2,
          Pinterest: Pinterest2,
          ProductHunt: ProductHunt2,
          Snapchat: Snapchat2,
          Twitter: Twitter2,
          Twitch: Twitch2,
          TikTok: TikTok2,
          Youtube: Youtube2
        });
      },
      validate: function({ Behance: Behance2, ChromeWebstore: ChromeWebstore2, Dribbble: Dribbble2, Discord: Discord2, Facebook: Facebook2, Figma: Figma2, Github: Github2, Gumroad: Gumroad2, Instagram: Instagram2, LinkedIn: LinkedIn2, Pinterest: Pinterest2, ProductHunt: ProductHunt2, Snapchat: Snapchat2, Twitter: Twitter2, Twitch: Twitch2, TikTok: TikTok2, Youtube: Youtube2 }) {
        return Behance2 === true || ChromeWebstore2 === true || Dribbble2 === true || Discord2 === true || Facebook2 === true || Figma2 === true || Github2 === true || Gumroad2 === true || Instagram2 === true || LinkedIn2 === true || Pinterest2 === true || ProductHunt2 === true || Snapchat2 === true || Twitter2 === true || Twitch2 === true || TikTok2 === true || Youtube2 === true;
      }
    });
    const { Behance, ChromeWebstore, Dribbble, Discord, Facebook, Figma, Github, Gumroad, Instagram, LinkedIn, Pinterest, ProductHunt, Snapchat, Twitter, Twitch, TikTok, Youtube } = formState;
    return /* @__PURE__ */ h("div", {
      class: styles_default.root
    }, /* @__PURE__ */ h("div", {
      class: styles_default.header
    }, /* @__PURE__ */ h("div", {
      class: styles_default["header-container"]
    }, /* @__PURE__ */ h("span", {
      class: styles_default.bold
    }, "Welcome to Exacto!"), /* @__PURE__ */ h("span", null, "Choose your desired brands below."))), /* @__PURE__ */ h("div", {
      class: styles_default.content
    }, /* @__PURE__ */ h(Checkbox, {
      name: "Behance",
      onValueChange: setFormState,
      value: Behance
    }, /* @__PURE__ */ h(Text, null, " Behance ")), /* @__PURE__ */ h(Checkbox, {
      name: "ChromeWebstore",
      onValueChange: setFormState,
      value: ChromeWebstore
    }, /* @__PURE__ */ h(Text, null, " Chrome Webstore ")), /* @__PURE__ */ h(Checkbox, {
      name: "Dribbble",
      onValueChange: setFormState,
      value: Dribbble
    }, /* @__PURE__ */ h(Text, null, " Dribbble ")), /* @__PURE__ */ h(Checkbox, {
      name: "Discord",
      onValueChange: setFormState,
      value: Discord
    }, /* @__PURE__ */ h(Text, null, " Discord ")), /* @__PURE__ */ h(Checkbox, {
      name: "Facebook",
      onValueChange: setFormState,
      value: Facebook
    }, /* @__PURE__ */ h(Text, null, " Facebook ")), /* @__PURE__ */ h(Checkbox, {
      name: "Figma",
      onValueChange: setFormState,
      value: Figma
    }, /* @__PURE__ */ h(Text, null, " Figma ")), /* @__PURE__ */ h(Checkbox, {
      name: "Github",
      onValueChange: setFormState,
      value: Github
    }, /* @__PURE__ */ h(Text, null, " Github ")), /* @__PURE__ */ h(Checkbox, {
      name: "Gumroad",
      onValueChange: setFormState,
      value: Gumroad
    }, /* @__PURE__ */ h(Text, null, " Gumroad ")), /* @__PURE__ */ h(Checkbox, {
      name: "Instagram",
      onValueChange: setFormState,
      value: Instagram
    }, /* @__PURE__ */ h(Text, null, " Instagram ")), /* @__PURE__ */ h(Checkbox, {
      name: "LinkedIn",
      onValueChange: setFormState,
      value: LinkedIn
    }, /* @__PURE__ */ h(Text, null, " LinkedIn ")), /* @__PURE__ */ h(Checkbox, {
      name: "Pinterest",
      onValueChange: setFormState,
      value: Pinterest
    }, /* @__PURE__ */ h(Text, null, " Pinterest ")), /* @__PURE__ */ h(Checkbox, {
      name: "ProductHunt",
      onValueChange: setFormState,
      value: ProductHunt
    }, /* @__PURE__ */ h(Text, null, " Product Hunt ")), /* @__PURE__ */ h(Checkbox, {
      name: "Snapchat",
      onValueChange: setFormState,
      value: Snapchat
    }, /* @__PURE__ */ h(Text, null, " Snapchat ")), /* @__PURE__ */ h(Checkbox, {
      name: "Twitter",
      onValueChange: setFormState,
      value: Twitter
    }, /* @__PURE__ */ h(Text, null, " Twitter ")), /* @__PURE__ */ h(Checkbox, {
      name: "Twitch",
      onValueChange: setFormState,
      value: Twitch
    }, /* @__PURE__ */ h(Text, null, " Twitch ")), /* @__PURE__ */ h(Checkbox, {
      name: "TikTok",
      onValueChange: setFormState,
      value: TikTok
    }, /* @__PURE__ */ h(Text, null, " Tik Tok ")), /* @__PURE__ */ h(Checkbox, {
      name: "Youtube",
      onValueChange: setFormState,
      value: Youtube
    }, /* @__PURE__ */ h(Text, null, " Youtube "))), /* @__PURE__ */ h("div", {
      class: styles_default.footer
    }, /* @__PURE__ */ h(Button, __spreadProps(__spreadValues({}, initialFocus), {
      disabled: disabled === true,
      fullWidth: true,
      onClick: handleSubmit
    }), "Build Frames"), /* @__PURE__ */ h("span", {
      class: styles_default.support
    }, "Created with love by ", /* @__PURE__ */ h("a", {
      href: "https://twitter.com/raf_underscore"
    }, "Raphael S"))));
  }
  var init_social_media_framework = __esm({
    "src/components/social-media-framework.tsx"() {
      "use strict";
      init_lib2();
      init_lib();
      init_preact_module();
      init_styles();
    }
  });

  // src/ui.ts
  var ui_exports = {};
  __export(ui_exports, {
    default: () => ui_default
  });
  var ui_default;
  var init_ui = __esm({
    "src/ui.ts"() {
      "use strict";
      init_lib2();
      init_social_media_framework();
      ui_default = render(SocialMedia);
    }
  });

  // <stdin>
  var rootNode = document.getElementById("create-figma-plugin");
  var modules = { "src/main.ts--default": (init_ui(), __toCommonJS(ui_exports))["default"] };
  var commandId = __FIGMA_COMMAND__ === "" ? "src/main.ts--default" : __FIGMA_COMMAND__;
  if (typeof modules[commandId] === "undefined") {
    throw new Error("No UI defined for command `" + commandId + "`");
  }
  modules[commandId](rootNode, __SHOW_UI_DATA__);
})();
