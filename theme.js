! function (r, e) {
    if ("object" == typeof exports && "object" == typeof module) module.exports = e();
    else if ("function" == typeof define && define.amd) define([], e);
    else {
        var o = e();
        for (var t in o)("object" == typeof exports ? exports : r)[t] = o[t]
    }
}(this.__inside__ || (this.__inside__ = {}), (function () {
    return function (r) {
        var e = {};

        function o(t) {
            if (e[t]) return e[t].exports;
            var i = e[t] = {
                i: t,
                l: !1,
                exports: {}
            };
            return r[t].call(i.exports, i, i.exports, o), i.l = !0, i.exports
        }
        return o.m = r, o.c = e, o.d = function (r, e, t) {
            o.o(r, e) || Object.defineProperty(r, e, {
                enumerable: !0,
                get: t
            })
        }, o.r = function (r) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(r, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(r, "__esModule", {
                value: !0
            })
        }, o.t = function (r, e) {
            if (1 & e && (r = o(r)), 8 & e) return r;
            if (4 & e && "object" == typeof r && r && r.__esModule) return r;
            var t = Object.create(null);
            if (o.r(t), Object.defineProperty(t, "default", {
                    enumerable: !0,
                    value: r
                }), 2 & e && "string" != typeof r)
                for (var i in r) o.d(t, i, function (e) {
                    return r[e]
                }.bind(null, i));
            return t
        }, o.n = function (r) {
            var e = r && r.__esModule ? function () {
                return r.default
            } : function () {
                return r
            };
            return o.d(e, "a", e), e
        }, o.o = function (r, e) {
            return Object.prototype.hasOwnProperty.call(r, e)
        }, o.p = "", o(o.s = 16)
    }([function (r, e, o) {
        "use strict";
        r.exports = function (r) {
            var e = [];
            return e.toString = function () {
                return this.map((function (e) {
                    var o = function (r, e) {
                        var o = r[1] || "",
                            t = r[3];
                        if (!t) return o;
                        if (e && "function" == typeof btoa) {
                            var i = (c = t, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(c)))) + " */"),
                                n = t.sources.map((function (r) {
                                    return "/*# sourceURL=" + t.sourceRoot + r + " */"
                                }));
                            return [o].concat(n).concat([i]).join("\n")
                        }
                        var c;
                        return [o].join("\n")
                    }(e, r);
                    return e[2] ? "@media " + e[2] + "{" + o + "}" : o
                })).join("")
            }, e.i = function (r, o) {
                "string" == typeof r && (r = [
                    [null, r, ""]
                ]);
                for (var t = {}, i = 0; i < this.length; i++) {
                    var n = this[i][0];
                    null != n && (t[n] = !0)
                }
                for (i = 0; i < r.length; i++) {
                    var c = r[i];
                    null != c[0] && t[c[0]] || (o && !c[2] ? c[2] = o : o && (c[2] = "(" + c[2] + ") and (" + o + ")"), e.push(c))
                }
            }, e
        }
    }, function (r, e, o) {
        (r.exports = o(0)(!1)).push([r.i, '@charset "UTF-8";body{color:MODE_FG}.φba,.φz:after{background:MODE_CARD_BG}.φy,details figure.highlight,input,textarea{border-color:MODE_BORDER}.φx:after{color:CARD_COLOR}.φw:after{box-shadow:0 0 0 1px MODE_BORDER}.φcy ::-webkit-scrollbar-thumb{background-color:MODE_BORDER}.φcy ::-webkit-scrollbar-thumb:hover{background-color:MODE_FG}.φdb>ul>li:before{background-color:MODE_BORDER}.φdb>ul>li:after{background:MODE_CARD_BG}', ""])
    }, function (r, e, o) {
        (r.exports = o(0)(!1)).push([r.i, '@charset "UTF-8";@media (min-width:676px){.φb{max-width:CONTENT_WIDTH}}', ""])
    }, function (r, e, o) {
        (r.exports = o(0)(!1)).push([r.i, '@charset "UTF-8";::-moz-selection{background-color:COLOR;color:#fff}::selection{background-color:COLOR;color:#fff}::-webkit-scrollbar-thumb{background-color:COLOR_02}::-webkit-scrollbar-thumb:hover{background-color:COLOR_08}code{color:COLOR}.φda th,code{background-color:COLOR_005}@media (max-width:675px){.φv{background:SIDEBAR_BACKGROUND}}.φa:active:before,.φa:hover:before,.φp:active,.φp:hover,.φr:active:after,.φr:hover:after,.φs:before,.φt:after,.φu{background-color:COLOR;background-image:none}.φo{background-color:COLOR_01}.φn{background-color:COLOR_005}.φl:active,.φl:hover,.φm{color:COLOR}.φk{border-color:COLOR}.φj{border-color:COLOR_04}.φh:active,.φh:hover,.φi{border-color:COLOR_02}.φg a:hover,.φg sup a{color:COLOR}.φg a:hover{border-color:COLOR}.φf{stroke:COLOR}.φe{fill:COLOR}.φdb>ul li{border-color:COLOR}', ""])
    }, function (r, e, o) {
        (r.exports = o(0)(!1)).push([r.i, '@charset "UTF-8";.φc:after,.φd,body{background:BACKGROUND}@media (max-width:675px){.φq{background:BACKGROUND}}', ""])
    }, function (r, e, o) {
        (r.exports = o(0)(!1)).push([r.i, "body{font-family:FONT_BASE}", ""])
    }, function (r, e, o) {
        (r.exports = o(0)(!1)).push([r.i, '@charset "UTF-8";.φbf{font-family:FONT_LOGO}', ""])
    }, function (r, e, o) {
        (r.exports = o(0)(!1)).push([r.i, '@charset "UTF-8";.φbd{font-family:FONT_MENU}', ""])
    }, function (r, e, o) {
        (r.exports = o(0)(!1)).push([r.i, '@charset "UTF-8";.φbe,h1,h2,h3,h4,h5,h6{font-family:FONT_HEADING}', ""])
    }, function (r, e, o) {
        (r.exports = o(0)(!1)).push([r.i, '@charset "UTF-8";.φbb:after,.φbc{font-family:FONT_LABEL}', ""])
    }, function (r, e, o) {
        (r.exports = o(0)(!1)).push([r.i, ".highlight figcaption,code,pre{font-family:FONT_CODE}", ""])
    }, function (r, e, o) {
        (r.exports = o(0)(!1)).push([r.i, "@media print{body{font-family:FONT_PRINT}}", ""])
    }, function (r, e, o) {
        (r.exports = o(0)(!1)).push([r.i, ".highlight{border-radius:3px;color:base05}.highlight .gutter{color:base03}.highlight figcaption{color:base04}.highlight figcaption a,.highlight figcaption a:hover{color:base0C}.highlight ::-webkit-scrollbar-thumb{background-color:base01}.highlight ::-webkit-scrollbar-thumb:hover{background-color:base02}.highlight ::-moz-selection{background-color:base02;color:inherit}.highlight ::selection{background-color:base02;color:inherit}.highlight .comment,.highlight .quote{color:base03}.highlight .deletion,.highlight .name,.highlight .regexp,.highlight .selector-class,.highlight .selector-id,.highlight .tag,.highlight .template-variable,.highlight .variable{color:base08}.highlight .built_in,.highlight .builtin-name,.highlight .link,.highlight .literal,.highlight .meta,.highlight .number,.highlight .params,.highlight .type{color:base09}.highlight .attribute{color:base0A}.highlight .addition,.highlight .bullet,.highlight .string,.highlight .symbol{color:base0B}.highlight .section,.highlight .title{color:base0D}.highlight .keyword,.highlight .selector-tag{color:base0E}", ""])
    }, function (r, e, o) {
        (r.exports = o(0)(!1)).push([r.i, ".highlight{background-color:base00}.highlight figcaption{border-radius:3px 3px 0 0;background-color:base01}", ""])
    }, function (r, e, o) {
        (r.exports = o(0)(!1)).push([r.i, ".highlight{border:1px solid base01}.highlight figcaption{background-color:base01}", ""])
    }, function (r, e, o) {
        (r.exports = o(0)(!1)).push([r.i, ".highlight{border:1px solid;border-color:inherit}.highlight figcaption{border-bottom:1px solid;border-color:inherit}", ""])
    }, function (r, e, o) {
        "use strict";
        o.r(e);
        var t = function () {
            return (t = Object.assign || function (r) {
                for (var e, o = 1, t = arguments.length; o < t; o++)
                    for (var i in e = arguments[o]) Object.prototype.hasOwnProperty.call(e, i) && (r[i] = e[i]);
                return r
            }).apply(this, arguments)
        };
        o.d(e, "css", (function () {
            return l
        }));
        var i = /#(?:[0-9a-fA-F]{3}){1,2}/,
            n = /rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)/,
            c = {
                mode: O(o(1)),
                content_width: O(o(2)),
                accent_color: O(o(3)),
                background: O(o(4)),
                font: {
                    base: O(o(5)),
                    logo: O(o(6)),
                    menu: O(o(7)),
                    heading: O(o(8)),
                    label: O(o(9)),
                    code: O(o(10)),
                    print: O(o(11))
                },
                highlight: {
                    base: O(o(12)),
                    flat: O(o(13)),
                    bordered: O(o(14)),
                    bordered_mix: O(o(15))
                }
            },
            a = {
                accent_color: "#2a2b33",
                foreground_color: "#363636",
                border_color: "#e0e0e0",
                background: "#f3f6f7",
                sidebar_background: "#2a2b33",
                card_background: "#fff",
                highlight: ["#ffffff", "#ffffff", "#f3f6f7", "#95a5b3", "#363636", "#262b2f", "#000000", "#000000", "#5d6c7b", "#40464a", "#2980b9", "#be516e", "#237dac", "#944770", "#239371", "#edf0f3"]
            },
            h = "undefined" != typeof document;

        function l(r) {
            if (!r) return "";
            var e = function (r, e) {
                    var o = {},
                        t = r.accent_color,
                        i = r.foreground_color,
                        n = r.border_color,
                        c = r.background,
                        a = r.sidebar_background,
                        h = r.card_background,
                        l = r.font,
                        f = r.content_width,
                        d = r.highlight;
                    if (o.accent_color = t ? u(t).hex : e.accent_color, o.foreground_color = i ? u(i).hex : e.foreground_color, o.border_color = n ? u(n).hex : e.border_color, o.background = c ? g(c) : e.background, o.sidebar_background = a ? g(a) : e.sidebar_background, o.card_background = h ? g(h) : e.card_background, l) {
                        var s = b(l.base);
                        o.font = {
                            base: s.join(",")
                        }, l.logo && (o.font.logo = b(l.logo, s).join(",")), l.menu && (o.font.menu = b(l.menu, s).join(",")), l.heading && (o.font.heading = b(l.heading, s).join(",")), l.label && (o.font.label = b(l.label, s).join(",")), l.code && (o.font.code = b(l.code).join(",")), l.print && (o.font.print = b(l.print).join(","))
                    }
                    var p = function (r) {
                        if (!r) return;
                        if ("number" == typeof r) return {
                            value: r,
                            unit: "px"
                        };
                        var e = r.match(/^(\d+)(%|rem|px)$/);
                        if (e) return {
                            value: +e[1],
                            unit: e[2]
                        }
                    }(f);
                    p && (o.content_width = p.value + p.unit);
                    Array.isArray(d) ? (o.highlight = d.map((function (r) {
                        return u(r).hex
                    })).filter((function (r) {
                        return r
                    })), o.highlight.length < 16 && (o.highlight = e.highlight)) : o.highlight = e.highlight;
                    return o
                }(r, a),
                o = [],
                t = (e.card_background.match(i) || e.card_background.match(n) || [])[0] || e.foreground_color;
            if (o.push(c.mode.replace(/MODE_FG/g, e.foreground_color).replace(/MODE_CARD_BG/g, e.card_background).replace(/CARD_COLOR/g, t).replace(/MODE_BORDER/g, e.border_color)), e.font) {
                var h = e.font;
                h.base && o.push(c.font.base.replace(/FONT_BASE/g, h.base)), h.logo && o.push(c.font.logo.replace(/FONT_LOGO/g, h.logo)), h.menu && o.push(c.font.menu.replace(/FONT_MENU/g, h.menu)), h.heading && o.push(c.font.heading.replace(/FONT_HEADING/g, h.heading)), h.label && o.push(c.font.label.replace(/FONT_LABEL/g, h.label)), h.code && o.push(c.font.code.replace(/FONT_CODE/g, h.code)), h.print && o.push(c.font.print.replace(/FONT_PRINT/g, h.print))
            }
            var l = u(e.accent_color);
            return o.push(c.background.replace(/BACKGROUND/g, e.background), c.accent_color.replace(/COLOR_005/g, "rgba(" + l.r + "," + l.g + "," + l.b + ",.05)").replace(/COLOR_01/g, "rgba(" + l.r + "," + l.g + "," + l.b + ",.1)").replace(/COLOR_02/g, "rgba(" + l.r + "," + l.g + "," + l.b + ",.2)").replace(/COLOR_04/g, "rgba(" + l.r + "," + l.g + "," + l.b + ",.4)").replace(/COLOR_08/g, "rgba(" + l.r + "," + l.g + "," + l.b + ",.8)").replace(/COLOR/g, l.hex).replace(/SIDEBAR_BACKGROUND/g, g(e.sidebar_background))), e.content_width && o.push(c.content_width.replace(/CONTENT_WIDTH/g, e.content_width)), o.push(s(c.highlight.base, e.highlight)), p(e.card_background, e.highlight[0]) || p(e.highlight[15], e.highlight[0]) ? p(e.card_background, e.highlight[1]) || p(e.highlight[15], e.highlight[1]) ? o.push(c.highlight.bordered_mix) : o.push(s(c.highlight.bordered, e.highlight)) : (p(e.card_background, e.highlight[1]) && (e.highlight[1] = e.highlight[0]), o.push(s(c.highlight.flat, e.highlight))), o.join("")
        }

        function g(r) {
            var e = /(^data:image)|(^[^\(^'^"]*\.(jpg|png|gif|svg))/;
            return r.split(/\s+/).map((function (r) {
                return r.match(e) ? "url(" + r + ")" : r
            })).join(" ")
        }

        function u(r, e) {
            if (r = (r || "").trim(), i.test(r)) return t({
                hex: r
            }, d(r));
            if (n.test(r)) {
                var o = r.match(n).slice(1, 4).map((function (r) {
                    return +r
                })).filter((function (r) {
                    return r < 256
                }));
                if (3 === o.length) return {
                    hex: f.apply(null, o),
                    r: o[0],
                    g: o[1],
                    b: o[2]
                }
            }
            return e ? t({
                hex: e
            }, d(e)) : {}
        }

        function f(r, e, o) {
            return "#" + ((1 << 24) + (r << 16) + (e << 8) + o).toString(16).slice(1)
        }

        function d(r) {
            r = r.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (function (r, e, o, t) {
                return e + e + o + o + t + t
            }));
            var e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(r);
            return e ? {
                r: parseInt(e[1], 16),
                g: parseInt(e[2], 16),
                b: parseInt(e[3], 16)
            } : null
        }

        function b(r, e) {
            void 0 === e && (e = []);
            var o = r ? r.split(",") : [],
                t = [];
            return o.forEach((function (r) {
                (r = r.trim()) && !~e.indexOf(r) && t.push(r)
            })), t.concat(e)
        }

        function s(r, e) {
            return e.reduce((function (r, e, o) {
                var t = new RegExp("base0" + o.toString(16).toUpperCase(), "g");
                return r.replace(t, e)
            }), r)
        }

        function p(r, e) {
            var o = u(r),
                t = u(e);
            return o && t && o.r === t.r && o.g === t.g && o.b === t.b
        }

        function O(r) {
            return (r.default || r).toString().replace('@charset "UTF-8";', "")
        }

        function _(r) {
            if (!r) return {};
            var e = r.split(/\s+/);
            if (i.test(e[0])) return {
                color: e[0],
                image: e.slice(1).join(" ")
            };
            var o = e.length - 1;
            return e[o] && i.test(e[o]) ? {
                color: e.pop(),
                image: e.join(" ")
            } : {
                image: r
            }
        }
        h && document.addEventListener("inside:theme", (function (r) {
            if (!h) return !1;
            var e = document.querySelector('link[is="theme"]'),
                o = document.querySelector('meta[name="theme-color"]'),
                t = window.__inside__ || {};
            if (!e) return !1;
            t.theme = Object.assign({}, t.theme, r.detail), t.color = [_(t.theme.sidebar_background).color || t.theme.accent_color].concat(_(t.theme.background).color || []);
            var i = l(t.theme);
            if (!i) return !1;
            URL.revokeObjectURL(e.href), e.href = URL.createObjectURL(new Blob([i], {
                type: "text/css"
            })), o && (o.content = t.color[1])
        }))
    }])
}));