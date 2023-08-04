import {
  i18nAddResources as r,
  registerMenu as e,
  registerRenderElemConf as n,
  registerStyleHandler as o,
  registerElemToHtmlConf as i,
  registerStyleToHtmlHandler as u,
  registerPreParseHtmlConf as a,
  registerParseElemHtmlConf as c,
  registerParseStyleHtmlHandler as f,
  t as l,
  coreCreateEditor as s,
  coreCreateToolbar as p,
} from "@klein-editor/core";
export {
  DomEditor,
  Toolbar,
  createUploader,
  genModalButtonElems,
  genModalInputElems,
  genModalTextareaElems,
  i18nAddResources,
  i18nChangeLanguage,
  i18nGetResources,
  t,
} from "@klein-editor/core";
import g from "@klein-editor/basic-modules";
import y from "@klein-editor/list-module";
import d from "@klein-editor/table-module";
import v from "@klein-editor/video-module";
import h from "@klein-editor/upload-image-module";
import {
  wangEditorCodeHighlightModule as b,
  wangEditorCodeHighLightDecorate as m,
} from "@klein-editor/code-highlight";
export {
  Editor as SlateEditor,
  Element as SlateElement,
  Location as SlateLocation,
  Node as SlateNode,
  Path as SlatePath,
  Point as SlatePoint,
  Range as SlateRange,
  Text as SlateText,
  Transforms as SlateTransforms,
} from "slate";
var S =
  "undefined" != typeof globalThis
    ? globalThis
    : "undefined" != typeof window
    ? window
    : "undefined" != typeof global
    ? global
    : "undefined" != typeof self
    ? self
    : {};
function w(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default")
    ? t.default
    : t;
}
function O(t) {
  var r = { exports: {} };
  return t(r, r.exports), r.exports;
}
var E,
  j,
  T = function (t) {
    return t && t.Math == Math && t;
  },
  P =
    T("object" == typeof globalThis && globalThis) ||
    T("object" == typeof window && window) ||
    T("object" == typeof self && self) ||
    T("object" == typeof S && S) ||
    (function () {
      return this;
    })() ||
    S ||
    Function("return this")(),
  x = function (t) {
    try {
      return !!t();
    } catch (t) {
      return !0;
    }
  },
  A = !x(function () {
    var t = function () {}.bind();
    return "function" != typeof t || t.hasOwnProperty("prototype");
  }),
  k = A,
  I = Function.prototype,
  L = I.apply,
  C = I.call,
  R =
    ("object" == typeof Reflect && Reflect.apply) ||
    (k
      ? C.bind(L)
      : function () {
          return C.apply(L, arguments);
        }),
  _ = Function.prototype,
  M = _.call,
  D = k && _.bind.bind(M, M),
  F = k
    ? D
    : function (t) {
        return function () {
          return M.apply(t, arguments);
        };
      },
  N = F({}.toString),
  H = F("".slice),
  G = function (t) {
    return H(N(t), 8, -1);
  },
  V = "object" == typeof document && document.all,
  z = { all: V, IS_HTMLDDA: void 0 === V && void 0 !== V },
  B = z.all,
  K = z.IS_HTMLDDA
    ? function (t) {
        return "function" == typeof t || t === B;
      }
    : function (t) {
        return "function" == typeof t;
      },
  U = !x(function () {
    return (
      7 !=
      Object.defineProperty({}, 1, {
        get: function () {
          return 7;
        },
      })[1]
    );
  }),
  W = Function.prototype.call,
  Y = k
    ? W.bind(W)
    : function () {
        return W.apply(W, arguments);
      },
  q = {}.propertyIsEnumerable,
  J = Object.getOwnPropertyDescriptor,
  X = {
    f:
      J && !q.call({ 1: 2 }, 1)
        ? function (t) {
            var r = J(this, t);
            return !!r && r.enumerable;
          }
        : q,
  },
  $ = Object,
  Q = F("".split),
  Z = x(function () {
    return !$("z").propertyIsEnumerable(0);
  })
    ? function (t) {
        return "String" == G(t) ? Q(t, "") : $(t);
      }
    : $,
  tt = function (t) {
    return null == t;
  },
  rt = TypeError,
  et = Z,
  nt = function (t) {
    if (tt(t)) throw rt("Can't call method on " + t);
    return t;
  },
  ot = K,
  it = z.all,
  ut = z.IS_HTMLDDA
    ? function (t) {
        return "object" == typeof t ? null !== t : ot(t) || t === it;
      }
    : function (t) {
        return "object" == typeof t ? null !== t : ot(t);
      },
  at = {},
  ct = P,
  ft = function (t) {
    return ot(t) ? t : void 0;
  },
  lt = F({}.isPrototypeOf),
  st = ("undefined" != typeof navigator && String(navigator.userAgent)) || "",
  pt = ct.process,
  gt = ct.Deno,
  yt = (pt && pt.versions) || (gt && gt.version),
  dt = yt && yt.v8;
dt && (j = (E = dt.split("."))[0] > 0 && E[0] < 4 ? 1 : +(E[0] + E[1])),
  !j &&
    st &&
    (!(E = st.match(/Edge\/(\d+)/)) || E[1] >= 74) &&
    (E = st.match(/Chrome\/(\d+)/)) &&
    (j = +E[1]);
var vt = j,
  ht = ct.String,
  bt =
    !!Object.getOwnPropertySymbols &&
    !x(function () {
      var t = Symbol();
      return (
        !ht(t) ||
        !(Object(t) instanceof Symbol) ||
        (!Symbol.sham && vt && vt < 41)
      );
    }),
  mt = bt,
  St = mt && !Symbol.sham && "symbol" == typeof Symbol.iterator,
  wt = function (t, r) {
    return arguments.length < 2
      ? ft(at[t]) || ft(ct[t])
      : (at[t] && at[t][r]) || (ct[t] && ct[t][r]);
  },
  Ot = lt,
  Et = St,
  jt = Object,
  Tt = Et
    ? function (t) {
        return "symbol" == typeof t;
      }
    : function (t) {
        var r = wt("Symbol");
        return ot(r) && Ot(r.prototype, jt(t));
      },
  Pt = String,
  xt = function (t) {
    try {
      return Pt(t);
    } catch (t) {
      return "Object";
    }
  },
  At = TypeError,
  kt = function (t) {
    if (ot(t)) return t;
    throw At(xt(t) + " is not a function");
  },
  It = Y,
  Lt = ut,
  Ct = TypeError,
  Rt = Object.defineProperty,
  _t = function (t, r) {
    try {
      Rt(ct, t, { value: r, configurable: !0, writable: !0 });
    } catch (e) {
      ct[t] = r;
    }
    return r;
  },
  Mt = "__core-js_shared__",
  Dt = ct[Mt] || _t(Mt, {}),
  Ft = Dt,
  Nt = O(function (t) {
    (t.exports = function (t, r) {
      return Ft[t] || (Ft[t] = void 0 !== r ? r : {});
    })("versions", []).push({
      version: "3.30.2",
      mode: "pure",
      copyright: "© 2014-2023 Denis Pushkarev (zloirock.ru)",
      license: "https://github.com/zloirock/core-js/blob/v3.30.2/LICENSE",
      source: "https://github.com/zloirock/core-js",
    });
  }),
  Ht = Object,
  Gt = function (t) {
    return Ht(nt(t));
  },
  Vt = F({}.hasOwnProperty),
  zt =
    Object.hasOwn ||
    function (t, r) {
      return Vt(Gt(t), r);
    },
  Bt = 0,
  Kt = Math.random(),
  Ut = F((1).toString),
  Wt = Nt,
  Yt = zt,
  qt = function (t) {
    return "Symbol(" + (void 0 === t ? "" : t) + ")_" + Ut(++Bt + Kt, 36);
  },
  Jt = ct.Symbol,
  Xt = Wt("wks"),
  $t = Et ? Jt.for || Jt : (Jt && Jt.withoutSetter) || qt,
  Qt = Tt,
  Zt = function (t, r) {
    var e = t[r];
    return tt(e) ? void 0 : kt(e);
  },
  tr = function (t, r) {
    var e, n;
    if ("string" === r && ot((e = t.toString)) && !Lt((n = It(e, t)))) return n;
    if (ot((e = t.valueOf)) && !Lt((n = It(e, t)))) return n;
    if ("string" !== r && ot((e = t.toString)) && !Lt((n = It(e, t)))) return n;
    throw Ct("Can't convert object to primitive value");
  },
  rr = function (t) {
    return (
      Yt(Xt, t) || (Xt[t] = mt && Yt(Jt, t) ? Jt[t] : $t("Symbol." + t)), Xt[t]
    );
  },
  er = TypeError,
  nr = rr("toPrimitive"),
  or = function (t, r) {
    if (!Lt(t) || Qt(t)) return t;
    var e,
      n = Zt(t, nr);
    if (n) {
      if ((void 0 === r && (r = "default"), (e = It(n, t, r)), !Lt(e) || Qt(e)))
        return e;
      throw er("Can't convert object to primitive value");
    }
    return void 0 === r && (r = "number"), tr(t, r);
  },
  ir = ct.document,
  ur = Lt(ir) && Lt(ir.createElement),
  ar = U,
  cr = function (t) {
    return ur ? ir.createElement(t) : {};
  },
  fr =
    !ar &&
    !x(function () {
      return (
        7 !=
        Object.defineProperty(cr("div"), "a", {
          get: function () {
            return 7;
          },
        }).a
      );
    }),
  lr = X,
  sr = function (t, r) {
    return {
      enumerable: !(1 & t),
      configurable: !(2 & t),
      writable: !(4 & t),
      value: r,
    };
  },
  pr = function (t) {
    return et(nt(t));
  },
  gr = function (t) {
    var r = or(t, "string");
    return Qt(r) ? r : r + "";
  },
  yr = fr,
  dr = Object.getOwnPropertyDescriptor,
  vr = {
    f: ar
      ? dr
      : function (t, r) {
          if (((t = pr(t)), (r = gr(r)), yr))
            try {
              return dr(t, r);
            } catch (t) {}
          if (Yt(t, r)) return sr(!It(lr.f, t, r), t[r]);
        },
  },
  hr = /#|\.prototype\./,
  br = function (t, r) {
    var e = Sr[mr(t)];
    return e == Or || (e != wr && (ot(r) ? x(r) : !!r));
  },
  mr = (br.normalize = function (t) {
    return String(t).replace(hr, ".").toLowerCase();
  }),
  Sr = (br.data = {}),
  wr = (br.NATIVE = "N"),
  Or = (br.POLYFILL = "P"),
  Er = br,
  jr = function (t) {
    if ("Function" === G(t)) return F(t);
  },
  Tr = jr(jr.bind),
  Pr =
    ar &&
    x(function () {
      return (
        42 !=
        Object.defineProperty(function () {}, "prototype", {
          value: 42,
          writable: !1,
        }).prototype
      );
    }),
  xr = String,
  Ar = TypeError,
  kr = Pr,
  Ir = function (t) {
    if (Lt(t)) return t;
    throw Ar(xr(t) + " is not an object");
  },
  Lr = TypeError,
  Cr = Object.defineProperty,
  Rr = Object.getOwnPropertyDescriptor,
  _r = "enumerable",
  Mr = "configurable",
  Dr = "writable",
  Fr = {
    f: ar
      ? kr
        ? function (t, r, e) {
            if (
              (Ir(t),
              (r = gr(r)),
              Ir(e),
              "function" == typeof t &&
                "prototype" === r &&
                "value" in e &&
                Dr in e &&
                !e[Dr])
            ) {
              var n = Rr(t, r);
              n &&
                n[Dr] &&
                ((t[r] = e.value),
                (e = {
                  configurable: Mr in e ? e[Mr] : n[Mr],
                  enumerable: _r in e ? e[_r] : n[_r],
                  writable: !1,
                }));
            }
            return Cr(t, r, e);
          }
        : Cr
      : function (t, r, e) {
          if ((Ir(t), (r = gr(r)), Ir(e), yr))
            try {
              return Cr(t, r, e);
            } catch (t) {}
          if ("get" in e || "set" in e) throw Lr("Accessors not supported");
          return "value" in e && (t[r] = e.value), t;
        },
  },
  Nr = R,
  Hr = vr,
  Gr = Er,
  Vr = function (t, r) {
    return (
      kt(t),
      void 0 === r
        ? t
        : k
        ? Tr(t, r)
        : function () {
            return t.apply(r, arguments);
          }
    );
  },
  zr = ar
    ? function (t, r, e) {
        return Fr.f(t, r, sr(1, e));
      }
    : function (t, r, e) {
        return (t[r] = e), t;
      },
  Br = Hr.f,
  Kr = function (t) {
    var r = function (e, n, o) {
      if (this instanceof r) {
        switch (arguments.length) {
          case 0:
            return new t();
          case 1:
            return new t(e);
          case 2:
            return new t(e, n);
        }
        return new t(e, n, o);
      }
      return Nr(t, this, arguments);
    };
    return (r.prototype = t.prototype), r;
  },
  Ur = function (t, r) {
    var e,
      n,
      o,
      i,
      u,
      a,
      c,
      f,
      l,
      s = t.target,
      p = t.global,
      g = t.stat,
      y = t.proto,
      d = p ? ct : g ? ct[s] : (ct[s] || {}).prototype,
      v = p ? at : at[s] || zr(at, s, {})[s],
      h = v.prototype;
    for (i in r)
      (n =
        !(e = Gr(p ? i : s + (g ? "." : "#") + i, t.forced)) && d && Yt(d, i)),
        (a = v[i]),
        n && (c = t.dontCallGetSet ? (l = Br(d, i)) && l.value : d[i]),
        (u = n && c ? c : r[i]),
        (n && typeof a == typeof u) ||
          ((f =
            t.bind && n
              ? Vr(u, ct)
              : t.wrap && n
              ? Kr(u)
              : y && ot(u)
              ? jr(u)
              : u),
          (t.sham || (u && u.sham) || (a && a.sham)) && zr(f, "sham", !0),
          zr(v, i, f),
          y &&
            (Yt(at, (o = s + "Prototype")) || zr(at, o, {}),
            zr(at[o], i, u),
            t.real && h && (e || !h[i]) && zr(h, i, u)));
  };
Ur({ global: !0, forced: ct.globalThis !== ct }, { globalThis: ct });
var Wr,
  Yr = ct,
  qr = Wt("keys"),
  Jr = function (t) {
    return qr[t] || (qr[t] = qt(t));
  },
  Xr = !x(function () {
    function t() {}
    return (
      (t.prototype.constructor = null),
      Object.getPrototypeOf(new t()) !== t.prototype
    );
  }),
  $r = Jr("IE_PROTO"),
  Qr = Object,
  Zr = Qr.prototype,
  te = Xr
    ? Qr.getPrototypeOf
    : function (t) {
        var r = Gt(t);
        if (Yt(r, $r)) return r[$r];
        var e = r.constructor;
        return ot(e) && r instanceof e
          ? e.prototype
          : r instanceof Qr
          ? Zr
          : null;
      },
  re = String,
  ee = TypeError,
  ne = function (t, r, e) {
    try {
      return F(kt(Object.getOwnPropertyDescriptor(t, r)[e]));
    } catch (t) {}
  },
  oe = function (t) {
    if ("object" == typeof t || ot(t)) return t;
    throw ee("Can't set " + re(t) + " as a prototype");
  },
  ie =
    Object.setPrototypeOf ||
    ("__proto__" in {}
      ? (function () {
          var t,
            r = !1,
            e = {};
          try {
            (t = ne(Object.prototype, "__proto__", "set"))(e, []),
              (r = e instanceof Array);
          } catch (t) {}
          return function (e, n) {
            return Ir(e), oe(n), r ? t(e, n) : (e.__proto__ = n), e;
          };
        })()
      : void 0),
  ue = Math.ceil,
  ae = Math.floor,
  ce =
    Math.trunc ||
    function (t) {
      var r = +t;
      return (r > 0 ? ae : ue)(r);
    },
  fe = function (t) {
    var r = +t;
    return r != r || 0 === r ? 0 : ce(r);
  },
  le = Math.max,
  se = Math.min,
  pe = Math.min,
  ge = function (t) {
    return t > 0 ? pe(fe(t), 9007199254740991) : 0;
  },
  ye = function (t, r) {
    var e = fe(t);
    return e < 0 ? le(e + r, 0) : se(e, r);
  },
  de = function (t) {
    return ge(t.length);
  },
  ve = function (t) {
    return function (r, e, n) {
      var o,
        i = pr(r),
        u = de(i),
        a = ye(n, u);
      if (t && e != e) {
        for (; u > a; ) if ((o = i[a++]) != o) return !0;
      } else
        for (; u > a; a++) if ((t || a in i) && i[a] === e) return t || a || 0;
      return !t && -1;
    };
  },
  he = { includes: ve(!0), indexOf: ve(!1) },
  be = {},
  me = he.indexOf,
  Se = F([].push),
  we = function (t, r) {
    var e,
      n = pr(t),
      o = 0,
      i = [];
    for (e in n) !Yt(be, e) && Yt(n, e) && Se(i, e);
    for (; r.length > o; ) Yt(n, (e = r[o++])) && (~me(i, e) || Se(i, e));
    return i;
  },
  Oe = [
    "constructor",
    "hasOwnProperty",
    "isPrototypeOf",
    "propertyIsEnumerable",
    "toLocaleString",
    "toString",
    "valueOf",
  ],
  Ee = Oe.concat("length", "prototype"),
  je = {
    f:
      Object.getOwnPropertyNames ||
      function (t) {
        return we(t, Ee);
      },
  },
  Te = Object.getOwnPropertySymbols,
  Pe = je,
  xe = { f: Te },
  Ae = F([].concat),
  ke =
    wt("Reflect", "ownKeys") ||
    function (t) {
      var r = Pe.f(Ir(t)),
        e = xe.f;
      return e ? Ae(r, e(t)) : r;
    },
  Ie = ke,
  Le =
    Object.keys ||
    function (t) {
      return we(t, Oe);
    },
  Ce =
    ar && !kr
      ? Object.defineProperties
      : function (t, r) {
          Ir(t);
          for (var e, n = pr(r), o = Le(r), i = o.length, u = 0; i > u; )
            Fr.f(t, (e = o[u++]), n[e]);
          return t;
        },
  Re = { f: Ce },
  _e = wt("document", "documentElement"),
  Me = Re,
  De = _e,
  Fe = "prototype",
  Ne = "script",
  He = Jr("IE_PROTO"),
  Ge = function () {},
  Ve = function (t) {
    return "<" + Ne + ">" + t + "</" + Ne + ">";
  },
  ze = function (t) {
    t.write(Ve("")), t.close();
    var r = t.parentWindow.Object;
    return (t = null), r;
  },
  Be = function () {
    try {
      Wr = new ActiveXObject("htmlfile");
    } catch (t) {}
    var t, r, e;
    Be =
      "undefined" != typeof document
        ? document.domain && Wr
          ? ze(Wr)
          : ((r = cr("iframe")),
            (e = "java" + Ne + ":"),
            (r.style.display = "none"),
            De.appendChild(r),
            (r.src = String(e)),
            (t = r.contentWindow.document).open(),
            t.write(Ve("document.F=Object")),
            t.close(),
            t.F)
        : ze(Wr);
    for (var n = Oe.length; n--; ) delete Be[Fe][Oe[n]];
    return Be();
  };
be[He] = !0;
var Ke =
    Object.create ||
    function (t, r) {
      var e;
      return (
        null !== t
          ? ((Ge[Fe] = Ir(t)), (e = new Ge()), (Ge[Fe] = null), (e[He] = t))
          : (e = Be()),
        void 0 === r ? e : Me.f(e, r)
      );
    },
  Ue = Error,
  We = F("".replace),
  Ye = String(Ue("zxcasd").stack),
  qe = /\n\s*at [^:]*:[^\n]*/,
  Je = qe.test(Ye),
  Xe = !x(function () {
    var t = Error("a");
    return (
      !("stack" in t) ||
      (Object.defineProperty(t, "stack", sr(1, 7)), 7 !== t.stack)
    );
  }),
  $e = function (t, r) {
    if (Je && "string" == typeof t && !Ue.prepareStackTrace)
      for (; r--; ) t = We(t, qe, "");
    return t;
  },
  Qe = Xe,
  Ze = Error.captureStackTrace,
  tn = {},
  rn = rr("iterator"),
  en = Array.prototype,
  nn = {};
nn[rr("toStringTag")] = "z";
var on = "[object z]" === String(nn),
  un = rr("toStringTag"),
  an = Object,
  cn =
    "Arguments" ==
    G(
      (function () {
        return arguments;
      })()
    ),
  fn = on
    ? G
    : function (t) {
        var r, e, n;
        return void 0 === t
          ? "Undefined"
          : null === t
          ? "Null"
          : "string" ==
            typeof (e = (function (t, r) {
              try {
                return t[r];
              } catch (t) {}
            })((r = an(t)), un))
          ? e
          : cn
          ? G(r)
          : "Object" == (n = G(r)) && ot(r.callee)
          ? "Arguments"
          : n;
      },
  ln = rr("iterator"),
  sn = function (t) {
    if (!tt(t)) return Zt(t, ln) || Zt(t, "@@iterator") || tn[fn(t)];
  },
  pn = TypeError,
  gn = function (t) {
    return void 0 !== t && (tn.Array === t || en[rn] === t);
  },
  yn = function (t, r) {
    var e = arguments.length < 2 ? sn(t) : r;
    if (kt(e)) return Ir(It(e, t));
    throw pn(xt(t) + " is not iterable");
  },
  dn = function (t, r, e) {
    var n, o;
    Ir(t);
    try {
      if (!(n = Zt(t, "return"))) {
        if ("throw" === r) throw e;
        return e;
      }
      n = It(n, t);
    } catch (t) {
      (o = !0), (n = t);
    }
    if ("throw" === r) throw e;
    if (o) throw n;
    return Ir(n), e;
  },
  vn = TypeError,
  hn = function (t, r) {
    (this.stopped = t), (this.result = r);
  },
  bn = hn.prototype,
  mn = String,
  Sn = function (t) {
    if ("Symbol" === fn(t))
      throw TypeError("Cannot convert a Symbol value to a string");
    return mn(t);
  },
  wn = te,
  On = ie,
  En = function (t, r, e) {
    for (var n = Ie(r), o = Fr.f, i = Hr.f, u = 0; u < n.length; u++) {
      var a = n[u];
      Yt(t, a) || (e && Yt(e, a)) || o(t, a, i(r, a));
    }
  },
  jn = Ke,
  Tn = function (t, r) {
    Lt(r) && "cause" in r && zr(t, "cause", r.cause);
  },
  Pn = function (t, r, e, n) {
    Qe && (Ze ? Ze(t, r) : zr(t, "stack", $e(e, n)));
  },
  xn = function (t, r, e) {
    var n,
      o,
      i,
      u,
      a,
      c,
      f,
      l = e && e.that,
      s = !(!e || !e.AS_ENTRIES),
      p = !(!e || !e.IS_RECORD),
      g = !(!e || !e.IS_ITERATOR),
      y = !(!e || !e.INTERRUPTED),
      d = Vr(r, l),
      v = function (t) {
        return n && dn(n, "normal", t), new hn(!0, t);
      },
      h = function (t) {
        return s
          ? (Ir(t), y ? d(t[0], t[1], v) : d(t[0], t[1]))
          : y
          ? d(t, v)
          : d(t);
      };
    if (p) n = t.iterator;
    else if (g) n = t;
    else {
      if (!(o = sn(t))) throw vn(xt(t) + " is not iterable");
      if (gn(o)) {
        for (i = 0, u = de(t); u > i; i++)
          if ((a = h(t[i])) && Ot(bn, a)) return a;
        return new hn(!1);
      }
      n = yn(t, o);
    }
    for (c = p ? t.next : n.next; !(f = It(c, n)).done; ) {
      try {
        a = h(f.value);
      } catch (t) {
        dn(n, "throw", t);
      }
      if ("object" == typeof a && a && Ot(bn, a)) return a;
    }
    return new hn(!1);
  },
  An = function (t, r) {
    return void 0 === t ? (arguments.length < 2 ? "" : r) : Sn(t);
  },
  kn = rr("toStringTag"),
  In = Error,
  Ln = [].push,
  Cn = function (t, r) {
    var e,
      n = Ot(Rn, this);
    On
      ? (e = On(In(), n ? wn(this) : Rn))
      : ((e = n ? this : jn(Rn)), zr(e, kn, "Error")),
      void 0 !== r && zr(e, "message", An(r)),
      Pn(e, Cn, e.stack, 1),
      arguments.length > 2 && Tn(e, arguments[2]);
    var o = [];
    return xn(t, Ln, { that: o }), zr(e, "errors", o), e;
  };
On ? On(Cn, In) : En(Cn, In, { name: !0 });
var Rn = (Cn.prototype = jn(In.prototype, {
  constructor: sr(1, Cn),
  message: sr(1, ""),
  name: sr(1, "AggregateError"),
}));
Ur({ global: !0, constructor: !0, arity: 2 }, { AggregateError: Cn });
var _n = Fr.f,
  Mn = function (t, r, e) {
    e in t ||
      _n(t, e, {
        configurable: !0,
        get: function () {
          return r[e];
        },
        set: function (t) {
          r[e] = t;
        },
      });
  },
  Dn = function (t, r, e) {
    var n, o;
    return (
      On &&
        ot((n = r.constructor)) &&
        n !== e &&
        Lt((o = n.prototype)) &&
        o !== e.prototype &&
        On(t, o),
      t
    );
  },
  Fn = function (t, r, e, n) {
    var o = "stackTraceLimit",
      i = n ? 2 : 1,
      u = t.split("."),
      a = u[u.length - 1],
      c = wt.apply(null, u);
    if (c) {
      var f = c.prototype;
      if (!e) return c;
      var l = wt("Error"),
        s = r(function (t, r) {
          var e = An(n ? r : t, void 0),
            o = n ? new c(t) : new c();
          return (
            void 0 !== e && zr(o, "message", e),
            Pn(o, s, o.stack, 2),
            this && Ot(f, this) && Dn(o, this, s),
            arguments.length > i && Tn(o, arguments[i]),
            o
          );
        });
      return (
        (s.prototype = f),
        "Error" !== a
          ? On
            ? On(s, l)
            : En(s, l, { name: !0 })
          : ar && o in c && (Mn(s, c, o), Mn(s, c, "prepareStackTrace")),
        En(s, c),
        s
      );
    }
  },
  Nn = "WebAssembly",
  Hn = ct[Nn],
  Gn = 7 !== Error("e", { cause: 7 }).cause,
  Vn = function (t, r) {
    var e = {};
    (e[t] = Fn(t, r, Gn)),
      Ur({ global: !0, constructor: !0, arity: 1, forced: Gn }, e);
  },
  zn = function (t, r) {
    if (Hn && Hn[t]) {
      var e = {};
      (e[t] = Fn(Nn + "." + t, r, Gn)),
        Ur({ target: Nn, stat: !0, constructor: !0, arity: 1, forced: Gn }, e);
    }
  };
Vn("Error", function (t) {
  return function (r) {
    return Nr(t, this, arguments);
  };
}),
  Vn("EvalError", function (t) {
    return function (r) {
      return Nr(t, this, arguments);
    };
  }),
  Vn("RangeError", function (t) {
    return function (r) {
      return Nr(t, this, arguments);
    };
  }),
  Vn("ReferenceError", function (t) {
    return function (r) {
      return Nr(t, this, arguments);
    };
  }),
  Vn("SyntaxError", function (t) {
    return function (r) {
      return Nr(t, this, arguments);
    };
  }),
  Vn("TypeError", function (t) {
    return function (r) {
      return Nr(t, this, arguments);
    };
  }),
  Vn("URIError", function (t) {
    return function (r) {
      return Nr(t, this, arguments);
    };
  }),
  zn("CompileError", function (t) {
    return function (r) {
      return Nr(t, this, arguments);
    };
  }),
  zn("LinkError", function (t) {
    return function (r) {
      return Nr(t, this, arguments);
    };
  }),
  zn("RuntimeError", function (t) {
    return function (r) {
      return Nr(t, this, arguments);
    };
  });
var Bn = "AggregateError",
  Kn = wt(Bn),
  Un =
    !x(function () {
      return 1 !== Kn([1]).errors[0];
    }) &&
    x(function () {
      return 7 !== Kn([1], Bn, { cause: 7 }).cause;
    });
Ur(
  { global: !0, constructor: !0, arity: 2, forced: Un },
  {
    AggregateError: Fn(
      Bn,
      function (t) {
        return function (r, e) {
          return Nr(t, this, arguments);
        };
      },
      Un,
      !0
    ),
  }
);
var Wn,
  Yn,
  qn,
  Jn = ct.WeakMap,
  Xn = ot(Jn) && /native code/.test(String(Jn)),
  $n = "Object already initialized",
  Qn = ct.TypeError,
  Zn = ct.WeakMap;
if (Xn || Ft.state) {
  var to = Ft.state || (Ft.state = new Zn());
  (to.get = to.get),
    (to.has = to.has),
    (to.set = to.set),
    (Wn = function (t, r) {
      if (to.has(t)) throw Qn($n);
      return (r.facade = t), to.set(t, r), r;
    }),
    (Yn = function (t) {
      return to.get(t) || {};
    }),
    (qn = function (t) {
      return to.has(t);
    });
} else {
  var ro = Jr("state");
  (be[ro] = !0),
    (Wn = function (t, r) {
      if (Yt(t, ro)) throw Qn($n);
      return (r.facade = t), zr(t, ro, r), r;
    }),
    (Yn = function (t) {
      return Yt(t, ro) ? t[ro] : {};
    }),
    (qn = function (t) {
      return Yt(t, ro);
    });
}
var eo,
  no,
  oo,
  io = {
    set: Wn,
    get: Yn,
    has: qn,
    enforce: function (t) {
      return qn(t) ? Yn(t) : Wn(t, {});
    },
    getterFor: function (t) {
      return function (r) {
        var e;
        if (!Lt(r) || (e = Yn(r)).type !== t)
          throw Qn("Incompatible receiver, " + t + " required");
        return e;
      };
    },
  },
  uo = Function.prototype,
  ao = ar && Object.getOwnPropertyDescriptor,
  co = Yt(uo, "name"),
  fo = {
    EXISTS: co,
    PROPER: co && "something" === function () {}.name,
    CONFIGURABLE: co && (!ar || (ar && ao(uo, "name").configurable)),
  },
  lo = function (t, r, e, n) {
    return n && n.enumerable ? (t[r] = e) : zr(t, r, e), t;
  },
  so = rr("iterator"),
  po = !1;
[].keys &&
  ("next" in (oo = [].keys())
    ? (no = wn(wn(oo))) !== Object.prototype && (eo = no)
    : (po = !0));
var go =
  !Lt(eo) ||
  x(function () {
    var t = {};
    return eo[so].call(t) !== t;
  });
(eo = go ? {} : jn(eo)),
  ot(eo[so]) ||
    lo(eo, so, function () {
      return this;
    });
var yo = { IteratorPrototype: eo, BUGGY_SAFARI_ITERATORS: po },
  vo = on
    ? {}.toString
    : function () {
        return "[object " + fn(this) + "]";
      },
  ho = Fr.f,
  bo = rr("toStringTag"),
  mo = function (t, r, e, n) {
    if (t) {
      var o = e ? t : t.prototype;
      Yt(o, bo) || ho(o, bo, { configurable: !0, value: r }),
        n && !on && zr(o, "toString", vo);
    }
  },
  So = yo.IteratorPrototype,
  wo = function () {
    return this;
  },
  Oo = function (t, r, e, n) {
    var o = r + " Iterator";
    return (
      (t.prototype = jn(So, { next: sr(+!n, e) })),
      mo(t, o, !1, !0),
      (tn[o] = wo),
      t
    );
  },
  Eo = fo.PROPER,
  jo = yo.BUGGY_SAFARI_ITERATORS,
  To = rr("iterator"),
  Po = "keys",
  xo = "values",
  Ao = "entries",
  ko = function () {
    return this;
  },
  Io = function () {},
  Lo = io,
  Co = function (t, r, e, n, o, i, u) {
    Oo(e, r, n);
    var a,
      c,
      f,
      l = function (t) {
        if (t === o && d) return d;
        if (!jo && t in g) return g[t];
        switch (t) {
          case Po:
          case xo:
          case Ao:
            return function () {
              return new e(this, t);
            };
        }
        return function () {
          return new e(this);
        };
      },
      s = r + " Iterator",
      p = !1,
      g = t.prototype,
      y = g[To] || g["@@iterator"] || (o && g[o]),
      d = (!jo && y) || l(o),
      v = ("Array" == r && g.entries) || y;
    if (
      (v &&
        (a = wn(v.call(new t()))) !== Object.prototype &&
        a.next &&
        (mo(a, s, !0, !0), (tn[s] = ko)),
      Eo &&
        o == xo &&
        y &&
        y.name !== xo &&
        ((p = !0),
        (d = function () {
          return It(y, this);
        })),
      o)
    )
      if (((c = { values: l(xo), keys: i ? d : l(Po), entries: l(Ao) }), u))
        for (f in c) (jo || p || !(f in g)) && lo(g, f, c[f]);
      else Ur({ target: r, proto: !0, forced: jo || p }, c);
    return u && g[To] !== d && lo(g, To, d, { name: o }), (tn[r] = d), c;
  },
  Ro = function (t, r) {
    return { value: t, done: r };
  },
  _o = (Fr.f, "Array Iterator"),
  Mo = Lo.set,
  Do = Lo.getterFor(_o);
Co(
  Array,
  "Array",
  function (t, r) {
    Mo(this, { type: _o, target: pr(t), index: 0, kind: r });
  },
  function () {
    var t = Do(this),
      r = t.target,
      e = t.kind,
      n = t.index++;
    return !r || n >= r.length
      ? ((t.target = void 0), Ro(void 0, !0))
      : Ro("keys" == e ? n : "values" == e ? r[n] : [n, r[n]], !1);
  },
  "values"
);
tn.Arguments = tn.Array;
Io(), Io(), Io();
var Fo = F("".charAt),
  No = F("".charCodeAt),
  Ho = F("".slice),
  Go = function (t) {
    return function (r, e) {
      var n,
        o,
        i = Sn(nt(r)),
        u = fe(e),
        a = i.length;
      return u < 0 || u >= a
        ? t
          ? ""
          : void 0
        : (n = No(i, u)) < 55296 ||
          n > 56319 ||
          u + 1 === a ||
          (o = No(i, u + 1)) < 56320 ||
          o > 57343
        ? t
          ? Fo(i, u)
          : n
        : t
        ? Ho(i, u, u + 2)
        : o - 56320 + ((n - 55296) << 10) + 65536;
    };
  },
  Vo = { codeAt: Go(!1), charAt: Go(!0) }.charAt,
  zo = "String Iterator",
  Bo = Lo.set,
  Ko = Lo.getterFor(zo);
Co(
  String,
  "String",
  function (t) {
    Bo(this, { type: zo, string: Sn(t), index: 0 });
  },
  function () {
    var t,
      r = Ko(this),
      e = r.string,
      n = r.index;
    return n >= e.length
      ? Ro(void 0, !0)
      : ((t = Vo(e, n)), (r.index += t.length), Ro(t, !1));
  }
);
var Uo = at.AggregateError,
  Wo = {
    CSSRuleList: 0,
    CSSStyleDeclaration: 0,
    CSSValueList: 0,
    ClientRectList: 0,
    DOMRectList: 0,
    DOMStringList: 0,
    DOMTokenList: 1,
    DataTransferItemList: 0,
    FileList: 0,
    HTMLAllCollection: 0,
    HTMLCollection: 0,
    HTMLFormElement: 0,
    HTMLSelectElement: 0,
    MediaList: 0,
    MimeTypeArray: 0,
    NamedNodeMap: 0,
    NodeList: 1,
    PaintRequestList: 0,
    Plugin: 0,
    PluginArray: 0,
    SVGLengthList: 0,
    SVGNumberList: 0,
    SVGPathSegList: 0,
    SVGPointList: 0,
    SVGStringList: 0,
    SVGTransformList: 0,
    SourceBufferList: 0,
    StyleSheetList: 0,
    TextTrackCueList: 0,
    TextTrackList: 0,
    TouchList: 0,
  },
  Yo = rr("toStringTag");
for (var qo in Wo) {
  var Jo = ct[qo],
    Xo = Jo && Jo.prototype;
  Xo && fn(Xo) !== Yo && zr(Xo, Yo, qo), (tn[qo] = tn.Array);
}
var $o,
  Qo,
  Zo = Uo,
  ti = function (t) {
    return t && t.Math == Math && t;
  },
  ri =
    ti("object" == typeof globalThis && globalThis) ||
    ti("object" == typeof window && window) ||
    ti("object" == typeof self && self) ||
    ti("object" == typeof S && S) ||
    (function () {
      return this;
    })() ||
    S ||
    Function("return this")(),
  ei = function (t) {
    try {
      return !!t();
    } catch (t) {
      return !0;
    }
  },
  ni = !ei(function () {
    return (
      7 !=
      Object.defineProperty({}, 1, {
        get: function () {
          return 7;
        },
      })[1]
    );
  }),
  oi = !ei(function () {
    var t = function () {}.bind();
    return "function" != typeof t || t.hasOwnProperty("prototype");
  }),
  ii = Function.prototype.call,
  ui = oi
    ? ii.bind(ii)
    : function () {
        return ii.apply(ii, arguments);
      },
  ai = {}.propertyIsEnumerable,
  ci = Object.getOwnPropertyDescriptor,
  fi = {
    f:
      ci && !ai.call({ 1: 2 }, 1)
        ? function (t) {
            var r = ci(this, t);
            return !!r && r.enumerable;
          }
        : ai,
  },
  li = function (t, r) {
    return {
      enumerable: !(1 & t),
      configurable: !(2 & t),
      writable: !(4 & t),
      value: r,
    };
  },
  si = Function.prototype,
  pi = si.call,
  gi = oi && si.bind.bind(pi, pi),
  yi = oi
    ? gi
    : function (t) {
        return function () {
          return pi.apply(t, arguments);
        };
      },
  di = yi({}.toString),
  vi = yi("".slice),
  hi = function (t) {
    return vi(di(t), 8, -1);
  },
  bi = Object,
  mi = yi("".split),
  Si = ei(function () {
    return !bi("z").propertyIsEnumerable(0);
  })
    ? function (t) {
        return "String" == hi(t) ? mi(t, "") : bi(t);
      }
    : bi,
  wi = function (t) {
    return null == t;
  },
  Oi = TypeError,
  Ei = function (t) {
    if (wi(t)) throw Oi("Can't call method on " + t);
    return t;
  },
  ji = function (t) {
    return Si(Ei(t));
  },
  Ti = "object" == typeof document && document.all,
  Pi = { all: Ti, IS_HTMLDDA: void 0 === Ti && void 0 !== Ti },
  xi = Pi.all,
  Ai = Pi.IS_HTMLDDA
    ? function (t) {
        return "function" == typeof t || t === xi;
      }
    : function (t) {
        return "function" == typeof t;
      },
  ki = Pi.all,
  Ii = Pi.IS_HTMLDDA
    ? function (t) {
        return "object" == typeof t ? null !== t : Ai(t) || t === ki;
      }
    : function (t) {
        return "object" == typeof t ? null !== t : Ai(t);
      },
  Li = function (t, r) {
    return arguments.length < 2
      ? ((e = ri[t]), Ai(e) ? e : void 0)
      : ri[t] && ri[t][r];
    var e;
  },
  Ci = yi({}.isPrototypeOf),
  Ri = ("undefined" != typeof navigator && String(navigator.userAgent)) || "",
  _i = ri.process,
  Mi = ri.Deno,
  Di = (_i && _i.versions) || (Mi && Mi.version),
  Fi = Di && Di.v8;
Fi && (Qo = ($o = Fi.split("."))[0] > 0 && $o[0] < 4 ? 1 : +($o[0] + $o[1])),
  !Qo &&
    Ri &&
    (!($o = Ri.match(/Edge\/(\d+)/)) || $o[1] >= 74) &&
    ($o = Ri.match(/Chrome\/(\d+)/)) &&
    (Qo = +$o[1]);
var Ni = Qo,
  Hi = ri.String,
  Gi =
    !!Object.getOwnPropertySymbols &&
    !ei(function () {
      var t = Symbol();
      return (
        !Hi(t) ||
        !(Object(t) instanceof Symbol) ||
        (!Symbol.sham && Ni && Ni < 41)
      );
    }),
  Vi = Gi && !Symbol.sham && "symbol" == typeof Symbol.iterator,
  zi = Object,
  Bi = Vi
    ? function (t) {
        return "symbol" == typeof t;
      }
    : function (t) {
        var r = Li("Symbol");
        return Ai(r) && Ci(r.prototype, zi(t));
      },
  Ki = String,
  Ui = function (t) {
    try {
      return Ki(t);
    } catch (t) {
      return "Object";
    }
  },
  Wi = TypeError,
  Yi = function (t) {
    if (Ai(t)) return t;
    throw Wi(Ui(t) + " is not a function");
  },
  qi = function (t, r) {
    var e = t[r];
    return wi(e) ? void 0 : Yi(e);
  },
  Ji = TypeError,
  Xi = Object.defineProperty,
  $i = function (t, r) {
    try {
      Xi(ri, t, { value: r, configurable: !0, writable: !0 });
    } catch (e) {
      ri[t] = r;
    }
    return r;
  },
  Qi = "__core-js_shared__",
  Zi = ri[Qi] || $i(Qi, {}),
  tu = O(function (t) {
    (t.exports = function (t, r) {
      return Zi[t] || (Zi[t] = void 0 !== r ? r : {});
    })("versions", []).push({
      version: "3.30.2",
      mode: "global",
      copyright: "© 2014-2023 Denis Pushkarev (zloirock.ru)",
      license: "https://github.com/zloirock/core-js/blob/v3.30.2/LICENSE",
      source: "https://github.com/zloirock/core-js",
    });
  }),
  ru = Object,
  eu = function (t) {
    return ru(Ei(t));
  },
  nu = yi({}.hasOwnProperty),
  ou =
    Object.hasOwn ||
    function (t, r) {
      return nu(eu(t), r);
    },
  iu = 0,
  uu = Math.random(),
  au = yi((1).toString),
  cu = function (t) {
    return "Symbol(" + (void 0 === t ? "" : t) + ")_" + au(++iu + uu, 36);
  },
  fu = ri.Symbol,
  lu = tu("wks"),
  su = Vi ? fu.for || fu : (fu && fu.withoutSetter) || cu,
  pu = function (t) {
    return (
      ou(lu, t) || (lu[t] = Gi && ou(fu, t) ? fu[t] : su("Symbol." + t)), lu[t]
    );
  },
  gu = TypeError,
  yu = pu("toPrimitive"),
  du = function (t, r) {
    if (!Ii(t) || Bi(t)) return t;
    var e,
      n = qi(t, yu);
    if (n) {
      if ((void 0 === r && (r = "default"), (e = ui(n, t, r)), !Ii(e) || Bi(e)))
        return e;
      throw gu("Can't convert object to primitive value");
    }
    return (
      void 0 === r && (r = "number"),
      (function (t, r) {
        var e, n;
        if ("string" === r && Ai((e = t.toString)) && !Ii((n = ui(e, t))))
          return n;
        if (Ai((e = t.valueOf)) && !Ii((n = ui(e, t)))) return n;
        if ("string" !== r && Ai((e = t.toString)) && !Ii((n = ui(e, t))))
          return n;
        throw Ji("Can't convert object to primitive value");
      })(t, r)
    );
  },
  vu = function (t) {
    var r = du(t, "string");
    return Bi(r) ? r : r + "";
  },
  hu = ri.document,
  bu = Ii(hu) && Ii(hu.createElement),
  mu = function (t) {
    return bu ? hu.createElement(t) : {};
  },
  Su =
    !ni &&
    !ei(function () {
      return (
        7 !=
        Object.defineProperty(mu("div"), "a", {
          get: function () {
            return 7;
          },
        }).a
      );
    }),
  wu = Object.getOwnPropertyDescriptor,
  Ou = {
    f: ni
      ? wu
      : function (t, r) {
          if (((t = ji(t)), (r = vu(r)), Su))
            try {
              return wu(t, r);
            } catch (t) {}
          if (ou(t, r)) return li(!ui(fi.f, t, r), t[r]);
        },
  },
  Eu =
    ni &&
    ei(function () {
      return (
        42 !=
        Object.defineProperty(function () {}, "prototype", {
          value: 42,
          writable: !1,
        }).prototype
      );
    }),
  ju = String,
  Tu = TypeError,
  Pu = function (t) {
    if (Ii(t)) return t;
    throw Tu(ju(t) + " is not an object");
  },
  xu = TypeError,
  Au = Object.defineProperty,
  ku = Object.getOwnPropertyDescriptor,
  Iu = "enumerable",
  Lu = "configurable",
  Cu = "writable",
  Ru = {
    f: ni
      ? Eu
        ? function (t, r, e) {
            if (
              (Pu(t),
              (r = vu(r)),
              Pu(e),
              "function" == typeof t &&
                "prototype" === r &&
                "value" in e &&
                Cu in e &&
                !e[Cu])
            ) {
              var n = ku(t, r);
              n &&
                n[Cu] &&
                ((t[r] = e.value),
                (e = {
                  configurable: Lu in e ? e[Lu] : n[Lu],
                  enumerable: Iu in e ? e[Iu] : n[Iu],
                  writable: !1,
                }));
            }
            return Au(t, r, e);
          }
        : Au
      : function (t, r, e) {
          if ((Pu(t), (r = vu(r)), Pu(e), Su))
            try {
              return Au(t, r, e);
            } catch (t) {}
          if ("get" in e || "set" in e) throw xu("Accessors not supported");
          return "value" in e && (t[r] = e.value), t;
        },
  },
  _u = ni
    ? function (t, r, e) {
        return Ru.f(t, r, li(1, e));
      }
    : function (t, r, e) {
        return (t[r] = e), t;
      },
  Mu = Function.prototype,
  Du = ni && Object.getOwnPropertyDescriptor,
  Fu = ou(Mu, "name"),
  Nu = {
    EXISTS: Fu,
    PROPER: Fu && "something" === function () {}.name,
    CONFIGURABLE: Fu && (!ni || (ni && Du(Mu, "name").configurable)),
  },
  Hu = yi(Function.toString);
Ai(Zi.inspectSource) ||
  (Zi.inspectSource = function (t) {
    return Hu(t);
  });
var Gu,
  Vu,
  zu,
  Bu = Zi.inspectSource,
  Ku = ri.WeakMap,
  Uu = Ai(Ku) && /native code/.test(String(Ku)),
  Wu = tu("keys"),
  Yu = function (t) {
    return Wu[t] || (Wu[t] = cu(t));
  },
  qu = {},
  Ju = "Object already initialized",
  Xu = ri.TypeError,
  $u = ri.WeakMap;
if (Uu || Zi.state) {
  var Qu = Zi.state || (Zi.state = new $u());
  (Qu.get = Qu.get),
    (Qu.has = Qu.has),
    (Qu.set = Qu.set),
    (Gu = function (t, r) {
      if (Qu.has(t)) throw Xu(Ju);
      return (r.facade = t), Qu.set(t, r), r;
    }),
    (Vu = function (t) {
      return Qu.get(t) || {};
    }),
    (zu = function (t) {
      return Qu.has(t);
    });
} else {
  var Zu = Yu("state");
  (qu[Zu] = !0),
    (Gu = function (t, r) {
      if (ou(t, Zu)) throw Xu(Ju);
      return (r.facade = t), _u(t, Zu, r), r;
    }),
    (Vu = function (t) {
      return ou(t, Zu) ? t[Zu] : {};
    }),
    (zu = function (t) {
      return ou(t, Zu);
    });
}
var ta = {
    set: Gu,
    get: Vu,
    has: zu,
    enforce: function (t) {
      return zu(t) ? Vu(t) : Gu(t, {});
    },
    getterFor: function (t) {
      return function (r) {
        var e;
        if (!Ii(r) || (e = Vu(r)).type !== t)
          throw Xu("Incompatible receiver, " + t + " required");
        return e;
      };
    },
  },
  ra = O(function (t) {
    var r = Nu.CONFIGURABLE,
      e = ta.enforce,
      n = ta.get,
      o = String,
      i = Object.defineProperty,
      u = yi("".slice),
      a = yi("".replace),
      c = yi([].join),
      f =
        ni &&
        !ei(function () {
          return 8 !== i(function () {}, "length", { value: 8 }).length;
        }),
      l = String(String).split("String"),
      s = (t.exports = function (t, n, s) {
        "Symbol(" === u(o(n), 0, 7) &&
          (n = "[" + a(o(n), /^Symbol\(([^)]*)\)/, "$1") + "]"),
          s && s.getter && (n = "get " + n),
          s && s.setter && (n = "set " + n),
          (!ou(t, "name") || (r && t.name !== n)) &&
            (ni ? i(t, "name", { value: n, configurable: !0 }) : (t.name = n)),
          f &&
            s &&
            ou(s, "arity") &&
            t.length !== s.arity &&
            i(t, "length", { value: s.arity });
        try {
          s && ou(s, "constructor") && s.constructor
            ? ni && i(t, "prototype", { writable: !1 })
            : t.prototype && (t.prototype = void 0);
        } catch (t) {}
        var p = e(t);
        return (
          ou(p, "source") || (p.source = c(l, "string" == typeof n ? n : "")), t
        );
      });
    Function.prototype.toString = s(function () {
      return (Ai(this) && n(this).source) || Bu(this);
    }, "toString");
  }),
  ea = function (t, r, e, n) {
    n || (n = {});
    var o = n.enumerable,
      i = void 0 !== n.name ? n.name : r;
    if ((Ai(e) && ra(e, i, n), n.global)) o ? (t[r] = e) : $i(r, e);
    else {
      try {
        n.unsafe ? t[r] && (o = !0) : delete t[r];
      } catch (t) {}
      o
        ? (t[r] = e)
        : Ru.f(t, r, {
            value: e,
            enumerable: !1,
            configurable: !n.nonConfigurable,
            writable: !n.nonWritable,
          });
    }
    return t;
  },
  na = Math.ceil,
  oa = Math.floor,
  ia =
    Math.trunc ||
    function (t) {
      var r = +t;
      return (r > 0 ? oa : na)(r);
    },
  ua = function (t) {
    var r = +t;
    return r != r || 0 === r ? 0 : ia(r);
  },
  aa = Math.max,
  ca = Math.min,
  fa = Math.min,
  la = function (t) {
    return t > 0 ? fa(ua(t), 9007199254740991) : 0;
  },
  sa = function (t) {
    return la(t.length);
  },
  pa = function (t) {
    return function (r, e, n) {
      var o,
        i = ji(r),
        u = sa(i),
        a = (function (t, r) {
          var e = ua(t);
          return e < 0 ? aa(e + r, 0) : ca(e, r);
        })(n, u);
      if (t && e != e) {
        for (; u > a; ) if ((o = i[a++]) != o) return !0;
      } else
        for (; u > a; a++) if ((t || a in i) && i[a] === e) return t || a || 0;
      return !t && -1;
    };
  },
  ga = { includes: pa(!0), indexOf: pa(!1) }.indexOf,
  ya = yi([].push),
  da = function (t, r) {
    var e,
      n = ji(t),
      o = 0,
      i = [];
    for (e in n) !ou(qu, e) && ou(n, e) && ya(i, e);
    for (; r.length > o; ) ou(n, (e = r[o++])) && (~ga(i, e) || ya(i, e));
    return i;
  },
  va = [
    "constructor",
    "hasOwnProperty",
    "isPrototypeOf",
    "propertyIsEnumerable",
    "toLocaleString",
    "toString",
    "valueOf",
  ],
  ha = va.concat("length", "prototype"),
  ba = {
    f:
      Object.getOwnPropertyNames ||
      function (t) {
        return da(t, ha);
      },
  },
  ma = { f: Object.getOwnPropertySymbols },
  Sa = yi([].concat),
  wa =
    Li("Reflect", "ownKeys") ||
    function (t) {
      var r = ba.f(Pu(t)),
        e = ma.f;
      return e ? Sa(r, e(t)) : r;
    },
  Oa = function (t, r, e) {
    for (var n = wa(r), o = Ru.f, i = Ou.f, u = 0; u < n.length; u++) {
      var a = n[u];
      ou(t, a) || (e && ou(e, a)) || o(t, a, i(r, a));
    }
  },
  Ea = /#|\.prototype\./,
  ja = function (t, r) {
    var e = Pa[Ta(t)];
    return e == Aa || (e != xa && (Ai(r) ? ei(r) : !!r));
  },
  Ta = (ja.normalize = function (t) {
    return String(t).replace(Ea, ".").toLowerCase();
  }),
  Pa = (ja.data = {}),
  xa = (ja.NATIVE = "N"),
  Aa = (ja.POLYFILL = "P"),
  ka = ja,
  Ia = Ou.f,
  La = function (t, r) {
    var e,
      n,
      o,
      i,
      u,
      a = t.target,
      c = t.global,
      f = t.stat;
    if ((e = c ? ri : f ? ri[a] || $i(a, {}) : (ri[a] || {}).prototype))
      for (n in r) {
        if (
          ((i = r[n]),
          (o = t.dontCallGetSet ? (u = Ia(e, n)) && u.value : e[n]),
          !ka(c ? n : a + (f ? "." : "#") + n, t.forced) && void 0 !== o)
        ) {
          if (typeof i == typeof o) continue;
          Oa(i, o);
        }
        (t.sham || (o && o.sham)) && _u(i, "sham", !0), ea(e, n, i, t);
      }
  },
  Ca = {};
Ca[pu("toStringTag")] = "z";
var Ra,
  _a = "[object z]" === String(Ca),
  Ma = pu("toStringTag"),
  Da = Object,
  Fa =
    "Arguments" ==
    hi(
      (function () {
        return arguments;
      })()
    ),
  Na = _a
    ? hi
    : function (t) {
        var r, e, n;
        return void 0 === t
          ? "Undefined"
          : null === t
          ? "Null"
          : "string" ==
            typeof (e = (function (t, r) {
              try {
                return t[r];
              } catch (t) {}
            })((r = Da(t)), Ma))
          ? e
          : Fa
          ? hi(r)
          : "Object" == (n = hi(r)) && Ai(r.callee)
          ? "Arguments"
          : n;
      },
  Ha = String,
  Ga = function (t) {
    if ("Symbol" === Na(t))
      throw TypeError("Cannot convert a Symbol value to a string");
    return Ha(t);
  },
  Va = function () {
    var t = Pu(this),
      r = "";
    return (
      t.hasIndices && (r += "d"),
      t.global && (r += "g"),
      t.ignoreCase && (r += "i"),
      t.multiline && (r += "m"),
      t.dotAll && (r += "s"),
      t.unicode && (r += "u"),
      t.unicodeSets && (r += "v"),
      t.sticky && (r += "y"),
      r
    );
  },
  za = ri.RegExp,
  Ba = ei(function () {
    var t = za("a", "y");
    return (t.lastIndex = 2), null != t.exec("abcd");
  }),
  Ka =
    Ba ||
    ei(function () {
      return !za("a", "y").sticky;
    }),
  Ua = {
    BROKEN_CARET:
      Ba ||
      ei(function () {
        var t = za("^r", "gy");
        return (t.lastIndex = 2), null != t.exec("str");
      }),
    MISSED_STICKY: Ka,
    UNSUPPORTED_Y: Ba,
  },
  Wa =
    Object.keys ||
    function (t) {
      return da(t, va);
    },
  Ya =
    ni && !Eu
      ? Object.defineProperties
      : function (t, r) {
          Pu(t);
          for (var e, n = ji(r), o = Wa(r), i = o.length, u = 0; i > u; )
            Ru.f(t, (e = o[u++]), n[e]);
          return t;
        },
  qa = { f: Ya },
  Ja = Li("document", "documentElement"),
  Xa = "prototype",
  $a = "script",
  Qa = Yu("IE_PROTO"),
  Za = function () {},
  tc = function (t) {
    return "<" + $a + ">" + t + "</" + $a + ">";
  },
  rc = function (t) {
    t.write(tc("")), t.close();
    var r = t.parentWindow.Object;
    return (t = null), r;
  },
  ec = function () {
    try {
      Ra = new ActiveXObject("htmlfile");
    } catch (t) {}
    var t, r, e;
    ec =
      "undefined" != typeof document
        ? document.domain && Ra
          ? rc(Ra)
          : ((r = mu("iframe")),
            (e = "java" + $a + ":"),
            (r.style.display = "none"),
            Ja.appendChild(r),
            (r.src = String(e)),
            (t = r.contentWindow.document).open(),
            t.write(tc("document.F=Object")),
            t.close(),
            t.F)
        : rc(Ra);
    for (var n = va.length; n--; ) delete ec[Xa][va[n]];
    return ec();
  };
qu[Qa] = !0;
var nc,
  oc,
  ic =
    Object.create ||
    function (t, r) {
      var e;
      return (
        null !== t
          ? ((Za[Xa] = Pu(t)), (e = new Za()), (Za[Xa] = null), (e[Qa] = t))
          : (e = ec()),
        void 0 === r ? e : qa.f(e, r)
      );
    },
  uc = ri.RegExp,
  ac = ei(function () {
    var t = uc(".", "s");
    return !(t.dotAll && t.exec("\n") && "s" === t.flags);
  }),
  cc = ri.RegExp,
  fc = ei(function () {
    var t = cc("(?<a>b)", "g");
    return "b" !== t.exec("b").groups.a || "bc" !== "b".replace(t, "$<a>c");
  }),
  lc = ta.get,
  sc = tu("native-string-replace", String.prototype.replace),
  pc = RegExp.prototype.exec,
  gc = pc,
  yc = yi("".charAt),
  dc = yi("".indexOf),
  vc = yi("".replace),
  hc = yi("".slice),
  bc =
    ((oc = /b*/g),
    ui(pc, (nc = /a/), "a"),
    ui(pc, oc, "a"),
    0 !== nc.lastIndex || 0 !== oc.lastIndex),
  mc = Ua.BROKEN_CARET,
  Sc = void 0 !== /()??/.exec("")[1];
(bc || Sc || mc || ac || fc) &&
  (gc = function (t) {
    var r,
      e,
      n,
      o,
      i,
      u,
      a,
      c = this,
      f = lc(c),
      l = Ga(t),
      s = f.raw;
    if (s)
      return (
        (s.lastIndex = c.lastIndex),
        (r = ui(gc, s, l)),
        (c.lastIndex = s.lastIndex),
        r
      );
    var p = f.groups,
      g = mc && c.sticky,
      y = ui(Va, c),
      d = c.source,
      v = 0,
      h = l;
    if (
      (g &&
        ((y = vc(y, "y", "")),
        -1 === dc(y, "g") && (y += "g"),
        (h = hc(l, c.lastIndex)),
        c.lastIndex > 0 &&
          (!c.multiline || (c.multiline && "\n" !== yc(l, c.lastIndex - 1))) &&
          ((d = "(?: " + d + ")"), (h = " " + h), v++),
        (e = new RegExp("^(?:" + d + ")", y))),
      Sc && (e = new RegExp("^" + d + "$(?!\\s)", y)),
      bc && (n = c.lastIndex),
      (o = ui(pc, g ? e : c, h)),
      g
        ? o
          ? ((o.input = hc(o.input, v)),
            (o[0] = hc(o[0], v)),
            (o.index = c.lastIndex),
            (c.lastIndex += o[0].length))
          : (c.lastIndex = 0)
        : bc && o && (c.lastIndex = c.global ? o.index + o[0].length : n),
      Sc &&
        o &&
        o.length > 1 &&
        ui(sc, o[0], e, function () {
          for (i = 1; i < arguments.length - 2; i++)
            void 0 === arguments[i] && (o[i] = void 0);
        }),
      o && p)
    )
      for (o.groups = u = ic(null), i = 0; i < p.length; i++)
        u[(a = p[i])[0]] = o[a[1]];
    return o;
  });
var wc = gc;
La({ target: "RegExp", proto: !0, forced: /./.exec !== wc }, { exec: wc });
var Oc = function (t) {
    if ("Function" === hi(t)) return yi(t);
  },
  Ec = pu("species"),
  jc = RegExp.prototype,
  Tc = yi("".charAt),
  Pc = yi("".charCodeAt),
  xc = yi("".slice),
  Ac = function (t) {
    return function (r, e) {
      var n,
        o,
        i = Ga(Ei(r)),
        u = ua(e),
        a = i.length;
      return u < 0 || u >= a
        ? t
          ? ""
          : void 0
        : (n = Pc(i, u)) < 55296 ||
          n > 56319 ||
          u + 1 === a ||
          (o = Pc(i, u + 1)) < 56320 ||
          o > 57343
        ? t
          ? Tc(i, u)
          : n
        : t
        ? xc(i, u, u + 2)
        : o - 56320 + ((n - 55296) << 10) + 65536;
    };
  },
  kc = { codeAt: Ac(!1), charAt: Ac(!0) },
  Ic = kc.charAt,
  Lc = function (t, r, e) {
    return r + (e ? Ic(t, r).length : 1);
  },
  Cc = TypeError,
  Rc = function (t, r) {
    var e = t.exec;
    if (Ai(e)) {
      var n = ui(e, t, r);
      return null !== n && Pu(n), n;
    }
    if ("RegExp" === hi(t)) return ui(wc, t, r);
    throw Cc("RegExp#exec called on incompatible receiver");
  };
!(function (t, r, e, n) {
  var o = pu(t),
    i = !ei(function () {
      var r = {};
      return (
        (r[o] = function () {
          return 7;
        }),
        7 != ""[t](r)
      );
    }),
    u =
      i &&
      !ei(function () {
        var r = !1,
          e = /a/;
        return (
          "split" === t &&
            (((e = {}).constructor = {}),
            (e.constructor[Ec] = function () {
              return e;
            }),
            (e.flags = ""),
            (e[o] = /./[o])),
          (e.exec = function () {
            return (r = !0), null;
          }),
          e[o](""),
          !r
        );
      });
  if (!i || !u || e) {
    var a = Oc(/./[o]),
      c = r(o, ""[t], function (t, r, e, n, o) {
        var u = Oc(t),
          c = r.exec;
        return c === wc || c === jc.exec
          ? i && !o
            ? { done: !0, value: a(r, e, n) }
            : { done: !0, value: u(e, r, n) }
          : { done: !1 };
      });
    ea(String.prototype, t, c[0]), ea(jc, o, c[1]);
  }
  n && _u(jc[o], "sham", !0);
})("match", function (t, r, e) {
  return [
    function (r) {
      var e = Ei(this),
        n = wi(r) ? void 0 : qi(r, t);
      return n ? ui(n, r, e) : new RegExp(r)[t](Ga(e));
    },
    function (t) {
      var n = Pu(this),
        o = Ga(t),
        i = e(r, n, o);
      if (i.done) return i.value;
      if (!n.global) return Rc(n, o);
      var u = n.unicode;
      n.lastIndex = 0;
      for (var a, c = [], f = 0; null !== (a = Rc(n, o)); ) {
        var l = Ga(a[0]);
        (c[f] = l), "" === l && (n.lastIndex = Lc(o, la(n.lastIndex), u)), f++;
      }
      return 0 === f ? null : c;
    },
  ];
}),
  La({ global: !0, forced: ri.globalThis !== ri }, { globalThis: ri });
var _c = !ei(function () {
    function t() {}
    return (
      (t.prototype.constructor = null),
      Object.getPrototypeOf(new t()) !== t.prototype
    );
  }),
  Mc = Yu("IE_PROTO"),
  Dc = Object,
  Fc = Dc.prototype,
  Nc = _c
    ? Dc.getPrototypeOf
    : function (t) {
        var r = eu(t);
        if (ou(r, Mc)) return r[Mc];
        var e = r.constructor;
        return Ai(e) && r instanceof e
          ? e.prototype
          : r instanceof Dc
          ? Fc
          : null;
      },
  Hc = String,
  Gc = TypeError,
  Vc =
    Object.setPrototypeOf ||
    ("__proto__" in {}
      ? (function () {
          var t,
            r = !1,
            e = {};
          try {
            (t = (function (t, r, e) {
              try {
                return yi(Yi(Object.getOwnPropertyDescriptor(t, r)[e]));
              } catch (t) {}
            })(Object.prototype, "__proto__", "set")),
              t(e, []),
              (r = e instanceof Array);
          } catch (t) {}
          return function (e, n) {
            return (
              Pu(e),
              (function (t) {
                if ("object" == typeof t || Ai(t)) return t;
                throw Gc("Can't set " + Hc(t) + " as a prototype");
              })(n),
              r ? t(e, n) : (e.__proto__ = n),
              e
            );
          };
        })()
      : void 0),
  zc = Error,
  Bc = yi("".replace),
  Kc = String(zc("zxcasd").stack),
  Uc = /\n\s*at [^:]*:[^\n]*/,
  Wc = Uc.test(Kc),
  Yc = !ei(function () {
    var t = Error("a");
    return (
      !("stack" in t) ||
      (Object.defineProperty(t, "stack", li(1, 7)), 7 !== t.stack)
    );
  }),
  qc = Error.captureStackTrace,
  Jc = function (t, r, e, n) {
    Yc &&
      (qc
        ? qc(t, r)
        : _u(
            t,
            "stack",
            (function (t, r) {
              if (Wc && "string" == typeof t && !zc.prepareStackTrace)
                for (; r--; ) t = Bc(t, Uc, "");
              return t;
            })(e, n)
          ));
  },
  Xc = Oc(Oc.bind),
  $c = {},
  Qc = pu("iterator"),
  Zc = Array.prototype,
  tf = pu("iterator"),
  rf = function (t) {
    if (!wi(t)) return qi(t, tf) || qi(t, "@@iterator") || $c[Na(t)];
  },
  ef = TypeError,
  nf = function (t, r, e) {
    var n, o;
    Pu(t);
    try {
      if (!(n = qi(t, "return"))) {
        if ("throw" === r) throw e;
        return e;
      }
      n = ui(n, t);
    } catch (t) {
      (o = !0), (n = t);
    }
    if ("throw" === r) throw e;
    if (o) throw n;
    return Pu(n), e;
  },
  of = TypeError,
  uf = function (t, r) {
    (this.stopped = t), (this.result = r);
  },
  af = uf.prototype,
  cf = function (t, r, e) {
    var n,
      o,
      i,
      u,
      a,
      c,
      f,
      l,
      s = e && e.that,
      p = !(!e || !e.AS_ENTRIES),
      g = !(!e || !e.IS_RECORD),
      y = !(!e || !e.IS_ITERATOR),
      d = !(!e || !e.INTERRUPTED),
      v = (function (t, r) {
        return (
          Yi(t),
          void 0 === r
            ? t
            : oi
            ? Xc(t, r)
            : function () {
                return t.apply(r, arguments);
              }
        );
      })(r, s),
      h = function (t) {
        return n && nf(n, "normal", t), new uf(!0, t);
      },
      b = function (t) {
        return p
          ? (Pu(t), d ? v(t[0], t[1], h) : v(t[0], t[1]))
          : d
          ? v(t, h)
          : v(t);
      };
    if (g) n = t.iterator;
    else if (y) n = t;
    else {
      if (!(o = rf(t))) throw of(Ui(t) + " is not iterable");
      if (void 0 !== (l = o) && ($c.Array === l || Zc[Qc] === l)) {
        for (i = 0, u = sa(t); u > i; i++)
          if ((a = b(t[i])) && Ci(af, a)) return a;
        return new uf(!1);
      }
      n = (function (t, r) {
        var e = arguments.length < 2 ? rf(t) : r;
        if (Yi(e)) return Pu(ui(e, t));
        throw ef(Ui(t) + " is not iterable");
      })(t, o);
    }
    for (c = g ? t.next : n.next; !(f = ui(c, n)).done; ) {
      try {
        a = b(f.value);
      } catch (t) {
        nf(n, "throw", t);
      }
      if ("object" == typeof a && a && Ci(af, a)) return a;
    }
    return new uf(!1);
  },
  ff = pu("toStringTag"),
  lf = Error,
  sf = [].push,
  pf = function (t, r) {
    var e,
      n,
      o,
      i = Ci(gf, this);
    Vc
      ? (e = Vc(lf(), i ? Nc(this) : gf))
      : ((e = i ? this : ic(gf)), _u(e, ff, "Error")),
      void 0 !== r &&
        _u(
          e,
          "message",
          (function (t, r) {
            return void 0 === t ? (arguments.length < 2 ? "" : r) : Ga(t);
          })(r)
        ),
      Jc(e, pf, e.stack, 1),
      arguments.length > 2 &&
        ((n = e),
        Ii((o = arguments[2])) && "cause" in o && _u(n, "cause", o.cause));
    var u = [];
    return cf(t, sf, { that: u }), _u(e, "errors", u), e;
  };
Vc ? Vc(pf, lf) : Oa(pf, lf, { name: !0 });
var gf = (pf.prototype = ic(lf.prototype, {
  constructor: li(1, pf),
  message: li(1, ""),
  name: li(1, "AggregateError"),
}));
La({ global: !0, constructor: !0, arity: 2 }, { AggregateError: pf });
var yf = Ru.f,
  df = pu("unscopables"),
  vf = Array.prototype;
null == vf[df] && yf(vf, df, { configurable: !0, value: ic(null) });
var hf,
  bf,
  mf,
  Sf = function (t) {
    vf[df][t] = !0;
  },
  wf = pu("iterator"),
  Of = !1;
[].keys &&
  ("next" in (mf = [].keys())
    ? (bf = Nc(Nc(mf))) !== Object.prototype && (hf = bf)
    : (Of = !0));
var Ef =
  !Ii(hf) ||
  ei(function () {
    var t = {};
    return hf[wf].call(t) !== t;
  });
Ef && (hf = {}),
  Ai(hf[wf]) ||
    ea(hf, wf, function () {
      return this;
    });
var jf = { IteratorPrototype: hf, BUGGY_SAFARI_ITERATORS: Of },
  Tf = Ru.f,
  Pf = pu("toStringTag"),
  xf = function (t, r, e) {
    t && !e && (t = t.prototype),
      t && !ou(t, Pf) && Tf(t, Pf, { configurable: !0, value: r });
  },
  Af = jf.IteratorPrototype,
  kf = function () {
    return this;
  },
  If = Nu.PROPER,
  Lf = Nu.CONFIGURABLE,
  Cf = jf.IteratorPrototype,
  Rf = jf.BUGGY_SAFARI_ITERATORS,
  _f = pu("iterator"),
  Mf = "keys",
  Df = "values",
  Ff = "entries",
  Nf = function () {
    return this;
  },
  Hf = function (t, r, e, n, o, i, u) {
    !(function (t, r, e, n) {
      var o = r + " Iterator";
      (t.prototype = ic(Af, { next: li(+!n, e) })), xf(t, o, !1), ($c[o] = kf);
    })(e, r, n);
    var a,
      c,
      f,
      l = function (t) {
        if (t === o && d) return d;
        if (!Rf && t in g) return g[t];
        switch (t) {
          case Mf:
          case Df:
          case Ff:
            return function () {
              return new e(this, t);
            };
        }
        return function () {
          return new e(this);
        };
      },
      s = r + " Iterator",
      p = !1,
      g = t.prototype,
      y = g[_f] || g["@@iterator"] || (o && g[o]),
      d = (!Rf && y) || l(o),
      v = ("Array" == r && g.entries) || y;
    if (
      (v &&
        (a = Nc(v.call(new t()))) !== Object.prototype &&
        a.next &&
        (Nc(a) !== Cf && (Vc ? Vc(a, Cf) : Ai(a[_f]) || ea(a, _f, Nf)),
        xf(a, s, !0)),
      If &&
        o == Df &&
        y &&
        y.name !== Df &&
        (Lf
          ? _u(g, "name", Df)
          : ((p = !0),
            (d = function () {
              return ui(y, this);
            }))),
      o)
    )
      if (((c = { values: l(Df), keys: i ? d : l(Mf), entries: l(Ff) }), u))
        for (f in c) (Rf || p || !(f in g)) && ea(g, f, c[f]);
      else La({ target: r, proto: !0, forced: Rf || p }, c);
    return g[_f] !== d && ea(g, _f, d, { name: o }), ($c[r] = d), c;
  },
  Gf = function (t, r) {
    return { value: t, done: r };
  },
  Vf = Ru.f,
  zf = "Array Iterator",
  Bf = ta.set,
  Kf = ta.getterFor(zf),
  Uf = Hf(
    Array,
    "Array",
    function (t, r) {
      Bf(this, { type: zf, target: ji(t), index: 0, kind: r });
    },
    function () {
      var t = Kf(this),
        r = t.target,
        e = t.kind,
        n = t.index++;
      return !r || n >= r.length
        ? ((t.target = void 0), Gf(void 0, !0))
        : Gf("keys" == e ? n : "values" == e ? r[n] : [n, r[n]], !1);
    },
    "values"
  ),
  Wf = ($c.Arguments = $c.Array);
if ((Sf("keys"), Sf("values"), Sf("entries"), ni && "values" !== Wf.name))
  try {
    Vf(Wf, "name", { value: "values" });
  } catch (t) {}
var Yf = _a
  ? {}.toString
  : function () {
      return "[object " + Na(this) + "]";
    };
_a || ea(Object.prototype, "toString", Yf, { unsafe: !0 });
var qf = kc.charAt,
  Jf = "String Iterator",
  Xf = ta.set,
  $f = ta.getterFor(Jf);
Hf(
  String,
  "String",
  function (t) {
    Xf(this, { type: Jf, string: Ga(t), index: 0 });
  },
  function () {
    var t,
      r = $f(this),
      e = r.string,
      n = r.index;
    return n >= e.length
      ? Gf(void 0, !0)
      : ((t = qf(e, n)), (r.index += t.length), Gf(t, !1));
  }
);
var Qf,
  Zf = {
    CSSRuleList: 0,
    CSSStyleDeclaration: 0,
    CSSValueList: 0,
    ClientRectList: 0,
    DOMRectList: 0,
    DOMStringList: 0,
    DOMTokenList: 1,
    DataTransferItemList: 0,
    FileList: 0,
    HTMLAllCollection: 0,
    HTMLCollection: 0,
    HTMLFormElement: 0,
    HTMLSelectElement: 0,
    MediaList: 0,
    MimeTypeArray: 0,
    NamedNodeMap: 0,
    NodeList: 1,
    PaintRequestList: 0,
    Plugin: 0,
    PluginArray: 0,
    SVGLengthList: 0,
    SVGNumberList: 0,
    SVGPathSegList: 0,
    SVGPointList: 0,
    SVGStringList: 0,
    SVGTransformList: 0,
    SourceBufferList: 0,
    StyleSheetList: 0,
    TextTrackCueList: 0,
    TextTrackList: 0,
    TouchList: 0,
  },
  tl = mu("span").classList,
  rl = tl && tl.constructor && tl.constructor.prototype,
  el = rl === Object.prototype ? void 0 : rl,
  nl = pu("iterator"),
  ol = pu("toStringTag"),
  il = Uf.values,
  ul = function (t, r) {
    if (t) {
      if (t[nl] !== il)
        try {
          _u(t, nl, il);
        } catch (r) {
          t[nl] = il;
        }
      if ((t[ol] || _u(t, ol, r), Zf[r]))
        for (var e in Uf)
          if (t[e] !== Uf[e])
            try {
              _u(t, e, Uf[e]);
            } catch (r) {
              t[e] = Uf[e];
            }
    }
  };
for (var al in Zf) ul(ri[al] && ri[al].prototype, al);
if ((ul(el, "DOMTokenList"), "undefined" == typeof global)) {
  if ("ActiveXObject" in window) {
    "\n Sorry, wangEditor V5+ versions do not support IE browser.",
      console.error(
        "抱歉，wangEditor V5+ 版本开始，不在支持 IE 浏览器\n Sorry, wangEditor V5+ versions do not support IE browser."
      );
  }
  cl(), fl();
} else
  global &&
    null !== (Qf = global.navigator) &&
    void 0 !== Qf &&
    Qf.userAgent.match("QQBrowser") &&
    (cl(), fl());
function cl() {
  void 0 === Yr && (window.globalThis = window);
}
function fl() {
  void 0 === Zo &&
    (window.AggregateError = function (t, r) {
      var e = new Error(r);
      return (e.errors = t), e;
    });
}
var ll =
    Array.isArray ||
    function (t) {
      return "Array" == G(t);
    },
  sl = TypeError,
  pl = F(Function.toString);
ot(Ft.inspectSource) ||
  (Ft.inspectSource = function (t) {
    return pl(t);
  });
var gl = Ft.inspectSource,
  yl = function () {},
  dl = [],
  vl = wt("Reflect", "construct"),
  hl = /^\s*(?:class|function)\b/,
  bl = F(hl.exec),
  ml = !hl.exec(yl),
  Sl = function (t) {
    if (!ot(t)) return !1;
    try {
      return vl(yl, dl, t), !0;
    } catch (t) {
      return !1;
    }
  },
  wl = function (t) {
    if (!ot(t)) return !1;
    switch (fn(t)) {
      case "AsyncFunction":
      case "GeneratorFunction":
      case "AsyncGeneratorFunction":
        return !1;
    }
    try {
      return ml || !!bl(hl, gl(t));
    } catch (t) {
      return !0;
    }
  };
wl.sham = !0;
var Ol =
    !vl ||
    x(function () {
      var t;
      return (
        Sl(Sl.call) ||
        !Sl(Object) ||
        !Sl(function () {
          t = !0;
        }) ||
        t
      );
    })
      ? wl
      : Sl,
  El = ll,
  jl = Ol,
  Tl = rr("species"),
  Pl = Array,
  xl = function (t) {
    var r;
    return (
      El(t) &&
        ((r = t.constructor),
        ((jl(r) && (r === Pl || El(r.prototype))) ||
          (Lt(r) && null === (r = r[Tl]))) &&
          (r = void 0)),
      void 0 === r ? Pl : r
    );
  },
  Al = rr("species"),
  kl = function (t) {
    if (t > 9007199254740991) throw sl("Maximum allowed index exceeded");
    return t;
  },
  Il = function (t, r, e) {
    var n = gr(r);
    n in t ? Fr.f(t, n, sr(0, e)) : (t[n] = e);
  },
  Ll = function (t, r) {
    return new (xl(t))(0 === r ? 0 : r);
  },
  Cl = function (t) {
    return (
      vt >= 51 ||
      !x(function () {
        var r = [];
        return (
          ((r.constructor = {})[Al] = function () {
            return { foo: 1 };
          }),
          1 !== r[t](Boolean).foo
        );
      })
    );
  },
  Rl = rr("isConcatSpreadable"),
  _l =
    vt >= 51 ||
    !x(function () {
      var t = [];
      return (t[Rl] = !1), t.concat()[0] !== t;
    }),
  Ml = function (t) {
    if (!Lt(t)) return !1;
    var r = t[Rl];
    return void 0 !== r ? !!r : El(t);
  },
  Dl = !_l || !Cl("concat");
Ur(
  { target: "Array", proto: !0, arity: 1, forced: Dl },
  {
    concat: function (t) {
      var r,
        e,
        n,
        o,
        i,
        u = Gt(this),
        a = Ll(u, 0),
        c = 0;
      for (r = -1, n = arguments.length; r < n; r++)
        if (Ml((i = -1 === r ? u : arguments[r])))
          for (o = de(i), kl(c + o), e = 0; e < o; e++, c++)
            e in i && Il(a, c, i[e]);
        else kl(c + 1), Il(a, c++, i);
      return (a.length = c), a;
    },
  }
);
var Fl = Array,
  Nl = Math.max,
  Hl = function (t, r, e) {
    for (
      var n = de(t),
        o = ye(r, n),
        i = ye(void 0 === e ? n : e, n),
        u = Fl(Nl(i - o, 0)),
        a = 0;
      o < i;
      o++, a++
    )
      Il(u, a, t[o]);
    return (u.length = a), u;
  },
  Gl = Pe.f,
  Vl =
    "object" == typeof window && window && Object.getOwnPropertyNames
      ? Object.getOwnPropertyNames(window)
      : [],
  zl = {
    f: function (t) {
      return Vl && "Window" == G(t)
        ? (function (t) {
            try {
              return Gl(t);
            } catch (t) {
              return Hl(Vl);
            }
          })(t)
        : Gl(pr(t));
    },
  },
  Bl = { f: rr },
  Kl = Fr.f,
  Ul = F([].push),
  Wl = function (t) {
    var r = 1 == t,
      e = 2 == t,
      n = 3 == t,
      o = 4 == t,
      i = 6 == t,
      u = 7 == t,
      a = 5 == t || i;
    return function (c, f, l, s) {
      for (
        var p,
          g,
          y = Gt(c),
          d = et(y),
          v = Vr(f, l),
          h = de(d),
          b = 0,
          m = s || Ll,
          S = r ? m(c, h) : e || u ? m(c, 0) : void 0;
        h > b;
        b++
      )
        if ((a || b in d) && ((g = v((p = d[b]), b, y)), t))
          if (r) S[b] = g;
          else if (g)
            switch (t) {
              case 3:
                return !0;
              case 5:
                return p;
              case 6:
                return b;
              case 2:
                Ul(S, p);
            }
          else
            switch (t) {
              case 4:
                return !1;
              case 7:
                Ul(S, p);
            }
      return i ? -1 : n || o ? o : S;
    };
  },
  Yl = {
    forEach: Wl(0),
    map: Wl(1),
    filter: Wl(2),
    some: Wl(3),
    every: Wl(4),
    find: Wl(5),
    findIndex: Wl(6),
    filterReject: Wl(7),
  },
  ql = zl,
  Jl = function (t, r, e) {
    return Fr.f(t, r, e);
  },
  Xl = function (t) {
    var r = at.Symbol || (at.Symbol = {});
    Yt(r, t) || Kl(r, t, { value: Bl.f(t) });
  },
  $l = function () {
    var t = wt("Symbol"),
      r = t && t.prototype,
      e = r && r.valueOf,
      n = rr("toPrimitive");
    r &&
      !r[n] &&
      lo(
        r,
        n,
        function (t) {
          return It(e, this);
        },
        { arity: 1 }
      );
  },
  Ql = Yl,
  Zl = Ql.forEach,
  ts = Jr("hidden"),
  rs = "Symbol",
  es = "prototype",
  ns = Lo.set,
  os = Lo.getterFor(rs),
  is = Object[es],
  us = ct.Symbol,
  as = us && us[es],
  cs = ct.TypeError,
  fs = ct.QObject,
  ls = Hr.f,
  ss = Fr.f,
  ps = ql.f,
  gs = lr.f,
  ys = F([].push),
  ds = Wt("symbols"),
  vs = Wt("op-symbols"),
  hs = Wt("wks"),
  bs = !fs || !fs[es] || !fs[es].findChild,
  ms =
    ar &&
    x(function () {
      return (
        7 !=
        jn(
          ss({}, "a", {
            get: function () {
              return ss(this, "a", { value: 7 }).a;
            },
          })
        ).a
      );
    })
      ? function (t, r, e) {
          var n = ls(is, r);
          n && delete is[r], ss(t, r, e), n && t !== is && ss(is, r, n);
        }
      : ss,
  Ss = function (t, r) {
    var e = (ds[t] = jn(as));
    return (
      ns(e, { type: rs, tag: t, description: r }), ar || (e.description = r), e
    );
  },
  ws = function (t, r, e) {
    t === is && ws(vs, r, e), Ir(t);
    var n = gr(r);
    return (
      Ir(e),
      Yt(ds, n)
        ? (e.enumerable
            ? (Yt(t, ts) && t[ts][n] && (t[ts][n] = !1),
              (e = jn(e, { enumerable: sr(0, !1) })))
            : (Yt(t, ts) || ss(t, ts, sr(1, {})), (t[ts][n] = !0)),
          ms(t, n, e))
        : ss(t, n, e)
    );
  },
  Os = function (t, r) {
    Ir(t);
    var e = pr(r),
      n = Le(e).concat(Ps(e));
    return (
      Zl(n, function (r) {
        (ar && !It(Es, e, r)) || ws(t, r, e[r]);
      }),
      t
    );
  },
  Es = function (t) {
    var r = gr(t),
      e = It(gs, this, r);
    return (
      !(this === is && Yt(ds, r) && !Yt(vs, r)) &&
      (!(e || !Yt(this, r) || !Yt(ds, r) || (Yt(this, ts) && this[ts][r])) || e)
    );
  },
  js = function (t, r) {
    var e = pr(t),
      n = gr(r);
    if (e !== is || !Yt(ds, n) || Yt(vs, n)) {
      var o = ls(e, n);
      return (
        !o || !Yt(ds, n) || (Yt(e, ts) && e[ts][n]) || (o.enumerable = !0), o
      );
    }
  },
  Ts = function (t) {
    var r = ps(pr(t)),
      e = [];
    return (
      Zl(r, function (t) {
        Yt(ds, t) || Yt(be, t) || ys(e, t);
      }),
      e
    );
  },
  Ps = function (t) {
    var r = t === is,
      e = ps(r ? vs : pr(t)),
      n = [];
    return (
      Zl(e, function (t) {
        !Yt(ds, t) || (r && !Yt(is, t)) || ys(n, ds[t]);
      }),
      n
    );
  };
mt ||
  ((as = (us = function () {
    if (Ot(as, this)) throw cs("Symbol is not a constructor");
    var t =
        arguments.length && void 0 !== arguments[0] ? Sn(arguments[0]) : void 0,
      r = qt(t),
      e = function (t) {
        this === is && It(e, vs, t),
          Yt(this, ts) && Yt(this[ts], r) && (this[ts][r] = !1),
          ms(this, r, sr(1, t));
      };
    return ar && bs && ms(is, r, { configurable: !0, set: e }), Ss(r, t);
  })[es]),
  lo(as, "toString", function () {
    return os(this).tag;
  }),
  lo(us, "withoutSetter", function (t) {
    return Ss(qt(t), t);
  }),
  (lr.f = Es),
  (Fr.f = ws),
  (Me.f = Os),
  (Hr.f = js),
  (Pe.f = ql.f = Ts),
  (xe.f = Ps),
  (Bl.f = function (t) {
    return Ss(rr(t), t);
  }),
  ar &&
    Jl(as, "description", {
      configurable: !0,
      get: function () {
        return os(this).description;
      },
    })),
  Ur(
    { global: !0, constructor: !0, wrap: !0, forced: !mt, sham: !mt },
    { Symbol: us }
  ),
  Zl(Le(hs), function (t) {
    Xl(t);
  }),
  Ur(
    { target: rs, stat: !0, forced: !mt },
    {
      useSetter: function () {
        bs = !0;
      },
      useSimple: function () {
        bs = !1;
      },
    }
  ),
  Ur(
    { target: "Object", stat: !0, forced: !mt, sham: !ar },
    {
      create: function (t, r) {
        return void 0 === r ? jn(t) : Os(jn(t), r);
      },
      defineProperty: ws,
      defineProperties: Os,
      getOwnPropertyDescriptor: js,
    }
  ),
  Ur({ target: "Object", stat: !0, forced: !mt }, { getOwnPropertyNames: Ts }),
  $l(),
  mo(us, rs),
  (be[ts] = !0);
var xs = mt && !!Symbol.for && !!Symbol.keyFor,
  As = Wt("string-to-symbol-registry"),
  ks = Wt("symbol-to-string-registry");
Ur(
  { target: "Symbol", stat: !0, forced: !xs },
  {
    for: function (t) {
      var r = Sn(t);
      if (Yt(As, r)) return As[r];
      var e = wt("Symbol")(r);
      return (As[r] = e), (ks[e] = r), e;
    },
  }
);
var Is = Wt("symbol-to-string-registry");
Ur(
  { target: "Symbol", stat: !0, forced: !xs },
  {
    keyFor: function (t) {
      if (!Qt(t)) throw TypeError(xt(t) + " is not a symbol");
      if (Yt(Is, t)) return Is[t];
    },
  }
);
var Ls = F([].slice),
  Cs = F([].push),
  Rs = Ls,
  _s = function (t) {
    if (ot(t)) return t;
    if (El(t)) {
      for (var r = t.length, e = [], n = 0; n < r; n++) {
        var o = t[n];
        "string" == typeof o
          ? Cs(e, o)
          : ("number" != typeof o && "Number" != G(o) && "String" != G(o)) ||
            Cs(e, Sn(o));
      }
      var i = e.length,
        u = !0;
      return function (t, r) {
        if (u) return (u = !1), r;
        if (El(this)) return r;
        for (var n = 0; n < i; n++) if (e[n] === t) return r;
      };
    }
  },
  Ms = String,
  Ds = wt("JSON", "stringify"),
  Fs = F(/./.exec),
  Ns = F("".charAt),
  Hs = F("".charCodeAt),
  Gs = F("".replace),
  Vs = F((1).toString),
  zs = /[\uD800-\uDFFF]/g,
  Bs = /^[\uD800-\uDBFF]$/,
  Ks = /^[\uDC00-\uDFFF]$/,
  Us =
    !mt ||
    x(function () {
      var t = wt("Symbol")();
      return (
        "[null]" != Ds([t]) || "{}" != Ds({ a: t }) || "{}" != Ds(Object(t))
      );
    }),
  Ws = x(function () {
    return (
      '"\\udf06\\ud834"' !== Ds("\udf06\ud834") || '"\\udead"' !== Ds("\udead")
    );
  }),
  Ys = function (t, r) {
    var e = Rs(arguments),
      n = _s(r);
    if (ot(n) || (void 0 !== t && !Qt(t)))
      return (
        (e[1] = function (t, r) {
          if ((ot(n) && (r = It(n, this, Ms(t), r)), !Qt(r))) return r;
        }),
        Nr(Ds, null, e)
      );
  },
  qs = function (t, r, e) {
    var n = Ns(e, r - 1),
      o = Ns(e, r + 1);
    return (Fs(Bs, t) && !Fs(Ks, o)) || (Fs(Ks, t) && !Fs(Bs, n))
      ? "\\u" + Vs(Hs(t, 0), 16)
      : t;
  };
Ds &&
  Ur(
    { target: "JSON", stat: !0, arity: 3, forced: Us || Ws },
    {
      stringify: function (t, r, e) {
        var n = Rs(arguments),
          o = Nr(Us ? Ys : Ds, null, n);
        return Ws && "string" == typeof o ? Gs(o, zs, qs) : o;
      },
    }
  );
var Js =
  !mt ||
  x(function () {
    xe.f(1);
  });
Ur(
  { target: "Object", stat: !0, forced: Js },
  {
    getOwnPropertySymbols: function (t) {
      var r = xe.f;
      return r ? r(Gt(t)) : [];
    },
  }
),
  Xl("asyncIterator"),
  Xl("hasInstance"),
  Xl("isConcatSpreadable"),
  Xl("iterator"),
  Xl("match"),
  Xl("matchAll"),
  Xl("replace"),
  Xl("search"),
  Xl("species"),
  Xl("split"),
  Xl("toPrimitive"),
  $l(),
  Xl("toStringTag"),
  mo(wt("Symbol"), "Symbol"),
  Xl("unscopables"),
  mo(ct.JSON, "JSON", !0);
var Xs = at.Symbol;
Xl("dispose");
var $s = Xs;
Xl("asyncDispose");
var Qs = wt("Symbol"),
  Zs = Qs.keyFor,
  tp = F(Qs.prototype.valueOf);
Ur(
  { target: "Symbol", stat: !0 },
  {
    isRegistered: function (t) {
      try {
        return void 0 !== Zs(tp(t));
      } catch (t) {
        return !1;
      }
    },
  }
);
for (
  var rp = wt("Symbol"),
    ep = rp.isWellKnown,
    np = wt("Object", "getOwnPropertyNames"),
    op = F(rp.prototype.valueOf),
    ip = Wt("wks"),
    up = 0,
    ap = np(rp),
    cp = ap.length;
  up < cp;
  up++
)
  try {
    var fp = ap[up];
    Qt(rp[fp]) && rr(fp);
  } catch (t) {}
Ur(
  { target: "Symbol", stat: !0, forced: !0 },
  {
    isWellKnown: function (t) {
      if (ep && ep(t)) return !0;
      try {
        for (var r = op(t), e = 0, n = np(ip), o = n.length; e < o; e++)
          if (ip[n[e]] == r) return !0;
      } catch (t) {}
      return !1;
    },
  }
),
  Xl("matcher"),
  Xl("metadataKey"),
  Xl("observable"),
  Xl("metadata"),
  Xl("patternMatch"),
  Xl("replaceAll");
var lp = $s,
  sp = Bl.f("iterator"),
  pp = lp,
  gp = sp,
  yp = O(function (t) {
    function r(e) {
      return (
        (t.exports = r =
          "function" == typeof pp && "symbol" == typeof gp
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof pp &&
                  t.constructor === pp &&
                  t !== pp.prototype
                  ? "symbol"
                  : typeof t;
              }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports),
        r(e)
      );
    }
    (t.exports = r),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports);
  }),
  dp = w(yp),
  vp = Hr.f,
  hp =
    !ar ||
    x(function () {
      vp(1);
    });
Ur(
  { target: "Object", stat: !0, forced: hp, sham: !ar },
  {
    getOwnPropertyDescriptor: function (t, r) {
      return vp(pr(t), r);
    },
  }
);
var bp = O(function (t) {
    var r = at.Object,
      e = (t.exports = function (t, e) {
        return r.getOwnPropertyDescriptor(t, e);
      });
    r.getOwnPropertyDescriptor.sham && (e.sham = !0);
  }),
  mp = bp;
if ("object" === ("undefined" == typeof global ? "undefined" : dp(global))) {
  var Sp = mp(global, "window");
  (global.window && !Sp.set) ||
    ((global.window = global),
    (global.requestAnimationFrame = function () {}),
    (global.navigator = { userAgent: "" }),
    (global.location = { hostname: "0.0.0.0", port: 0, protocol: "http:" }),
    (global.btoa = function () {}),
    (global.crypto = {
      getRandomValues: function (t) {
        return nodeCrypto.randomFillSync(t);
      },
    })),
    null != global.document &&
      null == global.document.getElementsByTagName &&
      (global.document.getElementsByTagName = function () {
        return [];
      });
}
r("en", {
  editor: {
    more: "More",
    justify: "Justify",
    indent: "Indent",
    image: "Image",
    video: "Video",
  },
}),
  r("zh-CN", {
    editor: {
      more: "更多",
      justify: "对齐",
      indent: "缩进",
      image: "图片",
      video: "视频",
    },
  });
var wp = function (t, r) {
    var e = [][t];
    return (
      !!e &&
      x(function () {
        e.call(
          null,
          r ||
            function () {
              return 1;
            },
          1
        );
      })
    );
  },
  Op = Ql.forEach,
  Ep = wp("forEach")
    ? [].forEach
    : function (t) {
        return Op(this, t, arguments.length > 1 ? arguments[1] : void 0);
      };
Ur({ target: "Array", proto: !0, forced: [].forEach != Ep }, { forEach: Ep });
var jp = function (t) {
    return at[t + "Prototype"];
  },
  Tp = jp("Array").forEach,
  Pp = Array.prototype,
  xp = { DOMTokenList: !0, NodeList: !0 },
  Ap = function (t) {
    var r = t.forEach;
    return t === Pp || (Ot(Pp, t) && r === Pp.forEach) || Yt(xp, fn(t))
      ? Tp
      : r;
  },
  kp = x(function () {
    Le(1);
  });
Ur(
  { target: "Object", stat: !0, forced: kp },
  {
    keys: function (t) {
      return Le(Gt(t));
    },
  }
);
var Ip = at.Object.keys,
  Lp = at.Object.getOwnPropertySymbols,
  Cp = Ql.filter,
  Rp = Cl("filter");
Ur(
  { target: "Array", proto: !0, forced: !Rp },
  {
    filter: function (t) {
      return Cp(this, t, arguments.length > 1 ? arguments[1] : void 0);
    },
  }
);
var _p = jp("Array").filter,
  Mp = Array.prototype,
  Dp = function (t) {
    var r = t.filter;
    return t === Mp || (Ot(Mp, t) && r === Mp.filter) ? _p : r;
  };
Ur(
  { target: "Object", stat: !0, sham: !ar },
  {
    getOwnPropertyDescriptors: function (t) {
      for (
        var r, e, n = pr(t), o = Hr.f, i = Ie(n), u = {}, a = 0;
        i.length > a;

      )
        void 0 !== (e = o(n, (r = i[a++]))) && Il(u, r, e);
      return u;
    },
  }
);
var Fp = at.Object.getOwnPropertyDescriptors,
  Np = Me.f;
Ur(
  {
    target: "Object",
    stat: !0,
    forced: Object.defineProperties !== Np,
    sham: !ar,
  },
  { defineProperties: Np }
);
var Hp = O(function (t) {
    var r = at.Object,
      e = (t.exports = function (t, e) {
        return r.defineProperties(t, e);
      });
    r.defineProperties.sham && (e.sham = !0);
  }),
  Gp = Hp,
  Vp = Fr.f;
Ur(
  {
    target: "Object",
    stat: !0,
    forced: Object.defineProperty !== Vp,
    sham: !ar,
  },
  { defineProperty: Vp }
);
var zp = O(function (t) {
    var r = at.Object,
      e = (t.exports = function (t, e, n) {
        return r.defineProperty(t, e, n);
      });
    r.defineProperty.sham && (e.sham = !0);
  }),
  Bp = zp,
  Kp = Bp,
  Up = w(
    O(function (t) {
      (t.exports = function (t, r) {
        if (!(t instanceof r))
          throw new TypeError("Cannot call a class as a function");
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    })
  ),
  Wp = Bp,
  Yp = Bl.f("toPrimitive"),
  qp = O(function (t) {
    var r = yp.default;
    (t.exports = function (t, e) {
      if ("object" !== r(t) || null === t) return t;
      var n = t[Yp];
      if (void 0 !== n) {
        var o = n.call(t, e || "default");
        if ("object" !== r(o)) return o;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === e ? String : Number)(t);
    }),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports);
  }),
  Jp = O(function (t) {
    var r = yp.default;
    (t.exports = function (t) {
      var e = qp(t, "string");
      return "symbol" === r(e) ? e : String(e);
    }),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports);
  }),
  Xp = Wp,
  $p = O(function (t) {
    function r(t, r) {
      for (var e = 0; e < r.length; e++) {
        var n = r[e];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Xp(t, Jp(n.key), n);
      }
    }
    (t.exports = function (t, e, n) {
      return (
        e && r(t.prototype, e),
        n && r(t, n),
        Xp(t, "prototype", { writable: !1 }),
        t
      );
    }),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports);
  }),
  Qp = w($p),
  Zp = w(
    O(function (t) {
      (t.exports = function (t, r, e) {
        return (
          (r = Jp(r)) in t
            ? Xp(t, r, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[r] = e),
          t
        );
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    })
  );
function tg(t, r) {
  var e = Ip(t);
  if (Lp) {
    var n = Lp(t);
    r &&
      (n = Dp(n).call(n, function (r) {
        return mp(t, r).enumerable;
      })),
      e.push.apply(e, n);
  }
  return e;
}
function rg(t) {
  for (var r = 1; r < arguments.length; r++) {
    var e,
      n,
      o = null != arguments[r] ? arguments[r] : {};
    r % 2
      ? Ap((e = tg(Object(o), !0))).call(e, function (r) {
          Zp(t, r, o[r]);
        })
      : Fp
      ? Gp(t, Fp(o))
      : Ap((n = tg(Object(o)))).call(n, function (r) {
          Kp(t, r, mp(o, r));
        });
  }
  return t;
}
var eg = (function () {
  function t() {
    throw (Up(this, t), new Error("不能实例化\nCan not construct a instance"));
  }
  return (
    Qp(t, null, [
      {
        key: "setEditorConfig",
        value: function () {
          var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          this.editorConfig = rg(rg({}, this.editorConfig), t);
        },
      },
      {
        key: "setSimpleEditorConfig",
        value: function () {
          var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          this.simpleEditorConfig = rg(rg({}, this.simpleEditorConfig), t);
        },
      },
      {
        key: "setToolbarConfig",
        value: function () {
          var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          this.toolbarConfig = rg(rg({}, this.toolbarConfig), t);
        },
      },
      {
        key: "setSimpleToolbarConfig",
        value: function () {
          var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          this.simpleToolbarConfig = rg(rg({}, this.simpleToolbarConfig), t);
        },
      },
      {
        key: "registerPlugin",
        value: function (t) {
          this.plugins.push(t);
        },
      },
      {
        key: "registerMenu",
        value: function (t, r) {
          e(t, r);
        },
      },
      {
        key: "registerRenderElem",
        value: function (t) {
          n(t);
        },
      },
      {
        key: "registerRenderStyle",
        value: function (t) {
          o(t);
        },
      },
      {
        key: "registerElemToHtml",
        value: function (t) {
          i(t);
        },
      },
      {
        key: "registerStyleToHtml",
        value: function (t) {
          u(t);
        },
      },
      {
        key: "registerPreParseHtml",
        value: function (t) {
          a(t);
        },
      },
      {
        key: "registerParseElemHtml",
        value: function (t) {
          c(t);
        },
      },
      {
        key: "registerParseStyleHtml",
        value: function (t) {
          f(t);
        },
      },
      {
        key: "registerModule",
        value: function (t) {
          ng(t);
        },
      },
    ]),
    t
  );
})();
function ng(t) {
  var r = t.menus,
    e = t.renderElems,
    n = t.renderStyle,
    o = t.elemsToHtml,
    i = t.styleToHtml,
    u = t.preParseHtml,
    a = t.parseElemsHtml,
    c = t.parseStyleHtml,
    f = t.editorPlugin;
  r &&
    Ap(r).call(r, function (t) {
      return eg.registerMenu(t);
    }),
    e &&
      Ap(e).call(e, function (t) {
        return eg.registerRenderElem(t);
      }),
    n && eg.registerRenderStyle(n),
    o &&
      Ap(o).call(o, function (t) {
        return eg.registerElemToHtml(t);
      }),
    i && eg.registerStyleToHtml(i),
    u &&
      Ap(u).call(u, function (t) {
        return eg.registerPreParseHtml(t);
      }),
    a &&
      Ap(a).call(a, function (t) {
        return eg.registerParseElemHtml(t);
      }),
    c && eg.registerParseStyleHtml(c),
    f && eg.registerPlugin(f);
}
Zp(eg, "editorConfig", {}),
  Zp(eg, "simpleEditorConfig", {}),
  Zp(eg, "toolbarConfig", {}),
  Zp(eg, "simpleToolbarConfig", {}),
  Zp(eg, "plugins", []),
  Ap(g).call(g, function (t) {
    return ng(t);
  }),
  ng(y),
  ng(d),
  ng(v),
  ng(h),
  ng(b);
var og =
  '<svg viewBox="0 0 1024 1024"><path d="M959.877 128l0.123 0.123v767.775l-0.123 0.122H64.102l-0.122-0.122V128.123l0.122-0.123h895.775zM960 64H64C28.795 64 0 92.795 0 128v768c0 35.205 28.795 64 64 64h896c35.205 0 64-28.795 64-64V128c0-35.205-28.795-64-64-64zM832 288.01c0 53.023-42.988 96.01-96.01 96.01s-96.01-42.987-96.01-96.01S682.967 192 735.99 192 832 234.988 832 288.01zM896 832H128V704l224.01-384 256 320h64l224.01-192z"></path></svg>';
function ig(t, r) {
  var e = Ip(t);
  if (Lp) {
    var n = Lp(t);
    r &&
      (n = Dp(n).call(n, function (r) {
        return mp(t, r).enumerable;
      })),
      e.push.apply(e, n);
  }
  return e;
}
var ug = {
  link: { menuKeys: ["editLink", "unLink", "viewLink"] },
  image: {
    menuKeys: [
      "imageWidth30",
      "imageWidth50",
      "imageWidth100",
      "editImage",
      "viewImageLink",
      "deleteImage",
    ],
  },
  "custom-paste": { menuKeys: ["saveCustomPasteFormat"] },
  video: { menuKeys: ["enter", "editVideoSize"] },
};
function ag() {
  return (function (t) {
    for (var r = 1; r < arguments.length; r++) {
      var e,
        n,
        o = null != arguments[r] ? arguments[r] : {};
      r % 2
        ? Ap((e = ig(Object(o), !0))).call(e, function (r) {
            Zp(t, r, o[r]);
          })
        : Fp
        ? Gp(t, Fp(o))
        : Ap((n = ig(Object(o)))).call(n, function (r) {
            Kp(t, r, mp(o, r));
          });
    }
    return t;
  })({}, ug);
}
function cg(t, r) {
  var e = Ip(t);
  if (Lp) {
    var n = Lp(t);
    r &&
      (n = Dp(n).call(n, function (r) {
        return mp(t, r).enumerable;
      })),
      e.push.apply(e, n);
  }
  return e;
}
function fg(t) {
  for (var r = 1; r < arguments.length; r++) {
    var e,
      n,
      o = null != arguments[r] ? arguments[r] : {};
    r % 2
      ? Ap((e = cg(Object(o), !0))).call(e, function (r) {
          Zp(t, r, o[r]);
        })
      : Fp
      ? Gp(t, Fp(o))
      : Ap((n = cg(Object(o)))).call(n, function (r) {
          Kp(t, r, mp(o, r));
        });
  }
  return t;
}
var lg = { hoverbarKeys: ag() };
eg.setEditorConfig(fg(fg({}, lg), {}, { decorate: m }));
var sg = { hoverbarKeys: ug };
eg.setSimpleEditorConfig(fg(fg({}, sg), {}, { decorate: m }));
var pg = {
  toolbarKeys: [
    "undo",
    "redo",
    "formatBrush",
    "clearFormat",
    "|",
    "insertMenu",
    "|",
    "headerSelect",
    "fontSize",
    "bold",
    "italic",
    "underline",
    "through",
    "border",
    "color",
    "bgColor",
    "|",
    "justifySelect",
    "indentSelect",
    "lineHeight",
    "marginTop",
    "marginBottom",
    "bulletedList",
    "numberedList",
    "|",
    "insertLink",
    "blockquote",
    "divider",
    "fullScreen",
  ],
};
eg.setToolbarConfig(pg);
var gg = {
  toolbarKeys: [
    "insertMenu",
    "blockquote",
    "header1",
    "header2",
    "header3",
    "|",
    "bold",
    "underline",
    "italic",
    "through",
    "color",
    "bgColor",
    "clearStyle",
    "|",
    "bulletedList",
    "numberedList",
    "todo",
    "justifyLeft",
    "justifyRight",
    "justifyCenter",
    "|",
    "insertLink",
    {
      key: "group-image",
      title: l("editor.image"),
      iconSvg: og,
      menuKeys: ["insertImage", "uploadImage"],
    },
    "insertVideo",
    "insertTable",
    "codeBlock",
    "|",
    "undo",
    "redo",
    "|",
    "fullScreen",
  ],
};
function yg(t, r) {
  var e = Ip(t);
  if (Lp) {
    var n = Lp(t);
    r &&
      (n = Dp(n).call(n, function (r) {
        return mp(t, r).enumerable;
      })),
      e.push.apply(e, n);
  }
  return e;
}
function dg(t) {
  for (var r = 1; r < arguments.length; r++) {
    var e,
      n,
      o = null != arguments[r] ? arguments[r] : {};
    r % 2
      ? Ap((e = yg(Object(o), !0))).call(e, function (r) {
          Zp(t, r, o[r]);
        })
      : Fp
      ? Gp(t, Fp(o))
      : Ap((n = yg(Object(o)))).call(n, function (r) {
          Kp(t, r, mp(o, r));
        });
  }
  return t;
}
function vg() {
  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
    r = t.selector,
    e = void 0 === r ? "" : r,
    n = t.content,
    o = void 0 === n ? [] : n,
    i = t.html,
    u = t.config,
    a = void 0 === u ? {} : u,
    c = t.mode,
    f =
      "simple" === (void 0 === c ? "default" : c)
        ? eg.simpleEditorConfig
        : eg.editorConfig,
    l = dg(dg({}, f.hoverbarKeys || {}), a.hoverbarKeys || {});
  return s({
    selector: e,
    config: dg(dg(dg({}, f), a), {}, { hoverbarKeys: l }),
    content: o,
    html: i,
    plugins: eg.plugins,
  });
}
function hg(t) {
  var r = t.selector,
    e = t.editor,
    n = t.config,
    o = void 0 === n ? {} : n,
    i = t.mode,
    u = void 0 === i ? "default" : i;
  if (!r) throw new Error("Cannot find 'selector' when create toolbar");
  var a = "simple" === u ? eg.simpleToolbarConfig : eg.toolbarConfig;
  return p(e, { selector: r, config: dg(dg({}, a), o) });
}
eg.setSimpleToolbarConfig(gg);
var bg = {};
export {
  eg as Boot,
  vg as createEditor,
  hg as createToolbar,
  bg as default,
  ng as registerModule,
};
//# sourceMappingURL=index.esm.js.map
