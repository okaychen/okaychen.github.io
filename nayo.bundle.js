! function (e) {
    function t(r) {
        if (n[r]) return n[r].exports;
        var i = n[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(i.exports, i, i.exports, t), i.l = !0, i.exports
    }
    var n = {};
    t.m = e, t.c = n, t.d = function (e, n, r) {
        t.o(e, n) || Object.defineProperty(e, n, {
            configurable: !1,
            enumerable: !0,
            get: r
        })
    }, t.n = function (e) {
        var n = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return t.d(n, "a", n), n
    }, t.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, t.p = "", t(t.s = 2)
}([function (e, t, n) {
    "use strict";

    function r(e) {
        $("html,body").animate({
            scrollTop: $("#" + e).offset().top
        }, 400)
    }

    function i() {
        var e = $(".mask");
        if (0 === e.length) {
            var t = document.createElement("div");
            t.className = "mask", document.getElementsByTagName("body")[0].appendChild(t), e = $(t)
        }
        return e
    }
    e.exports = {
        isPc: function () {
            for (var e = navigator.userAgent, t = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"), n = !0, r = 0; r < t.length; r++)
                if (e.indexOf(t[r]) > 0) {
                    n = !1;
                    break
                } return n
        }(),
        scrollToId: r,
        createMask: i
    }
}, function (e, t) {
    var n;
    n = function () {
        return this
    }();
    try {
        n = n || Function("return this")() || (0, eval)("this")
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var i = n(3),
        o = (r(i), n(4)),
        a = r(o),
        s = n(5),
        u = r(s),
        l = n(6),
        c = r(l),
        f = n(7),
        d = r(f),
        p = n(8),
        h = r(p),
        g = n(10),
        v = r(g),
        m = n(12),
        y = r(m),
        x = n(14),
        b = r(x);
    n(15)(function () {
        ! function (e) {
            var t = !0,
                n = !1,
                r = void 0;
            try {
                for (var i, o = e[Symbol.iterator](); !(t = (i = o.next()).done); t = !0) i.value.init()
            } catch (e) {
                n = !0, r = e
            } finally {
                try {
                    !t && o.return && o.return()
                } finally {
                    if (n) throw r
                }
            }
        }([a.default, c.default, d.default, u.default, h.default, b.default, v.default, y.default])
    })
}, function (e, t) {}, function (e, t, n) {
    "use strict";

    function r() {
        var e = window.location.href,
            t = "home",
            n = ["home", "archives", "categories", "tags", "about"],
            r = !0,
            i = !1,
            o = void 0;
        try {
            for (var a, s = n[Symbol.iterator](); !(r = (a = s.next()).done); r = !0) {
                var u = a.value;
                if (e.indexOf(u) > 0) {
                    t = u;
                    break
                }
            }
        } catch (e) {
            i = !0, o = e
        } finally {
            try {
                !r && s.return && s.return()
            } finally {
                if (i) throw o
            }
        }
        var l = $("#header-menu-".concat(t));
        0 != l.length ? l.addClass("header-menu-active") : $("#header-menu-home").addClass("header-menu-active")
    }

    function i() {
        var e = 0,
            t = $("#backTop");
        $(window).scroll(function () {
                r(), n(), e = $(window).scrollTop()
            }),
            function () {
                t.click(function () {
                    $("html,body").animate({
                        scrollTop: 0
                    }, 600)
                })
            }();
        var n = function () {
                $(window).scrollTop() > 800 ? t.removeClass("rightOut").addClass("leftIn") : t.hasClass("leftIn") && t.removeClass("leftIn").addClass("rightOut")
            },
            r = function () {
                if (l.default.isPc) {
                    var t = $(window).scrollTop(),
                        n = e;
                    t <= 0 ? s() : t - n > 0 ? a() : o()
                }
            }
    }

    function o() {
        $(".header").removeClass("header-static").addClass("header-fixed").addClass("slideDown").removeClass("slideUp")
    }

    function a() {
        $(".header").addClass("slideUp").removeClass("slideDown")
    }

    function s() {
        $(".header").addClass("header-static").removeClass("header-fixed").removeClass("slideUp").removeClass("slideDown")
    }
    var u = n(0),
        l = function (e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(u);
    e.exports = {
        init: function () {
            r(), i()
        }
    }
}, function (e, t, n) {
    "use strict";
    e.exports = {
        init: function () {
            function e() {
                for (var e = 1; e < a.length; e++)
                    if (a[e] < o + i)
                        for (var n = 0; n <= e; n++) t.eq(n).addClass(r)
            }
            for (var t = $(".article"), n = $(".article").outerHeight(), r = "scrollIn", i = $(window).height(), o = $(window).scrollTop(), a = [], s = 0; s < t.length; s++) a.push(t.eq(s).offset().top + n / 3);
            t.eq(0).addClass(r), e(), $(window).scroll(function () {
                i = $(window).height(), o = $(window).scrollTop(), e()
            })
        }
    }
}, function (e, t, n) {
    "use strict";
    var r = n(0),
        i = function (e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(r);
    t.init = function () {
        if (!i.default.isPc) {
            var e = $(".mobile-toggle"),
                t = $(".mobile-menu-search"),
                n = void 0;
            e.click(function () {
                n = i.default.createMask(), o();
                for (var e = [n, t], r = 0; r < e.length; r++) {
                    e[r].click(function () {
                        a()
                    })
                }
            })
        }
    };
    var o = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $(".mobile-toggle"),
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : $(".mask");
            e.removeClass("icon-menu").addClass("icon-no-menu"), $(".mobile-menu").show().removeClass("menuSlideOut").addClass("menuSlideIn"), $(".header").removeClass("slide-left").addClass("slide-right"), $(".container").removeClass("slide-left").addClass("slide-right"), $("#footer").removeClass("slide-left").addClass("slide-right"), t.show()
        },
        a = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $(".mobile-toggle"),
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : $(".mask");
            e.removeClass("icon-no-menu").addClass("icon-menu"), $(".mobile-menu").removeClass("menuSlideIn").addClass("menuSlideOut"), $(".header").removeClass("slide-right").addClass("slide-left"), $(".container").removeClass("slide-right").addClass("slide-left"), $("#footer").removeClass("slide-right").addClass("slide-left"), t.remove()
        }
}, function (e, t, n) {
    "use strict";

    function r() {
        var e = $(".search-container"),
            t = a.default.createMask();
        e.is(":visible") ? (e.hide(), t.remove(), $("#search-input").val(""), $("#search-result").html("")) : (e.show(), t.show(), $("#search-input").focus(), i("/search.xml", "search-input", "search-result"))
    }

    function i(e, t, n) {
        $.ajax({
            url: e,
            dataType: "xml",
            success: function (e) {
                var r = $("entry", e).map(function () {
                        return {
                            title: $("title", this).text(),
                            content: $("content", this).text(),
                            url: $("link", this).attr("href")
                        }
                    }).get(),
                    i = document.getElementById(t),
                    o = document.getElementById(n);
                i.addEventListener("input", function () {
                    var e = "",
                        t = this.value.trim().toLowerCase().split(/[\s\-]+/);
                    if (o.innerHTML = "", !(this.value.trim().length <= 0)) {
                        if (r.forEach(function (n) {
                                var r = !0;
                                n.title && "" !== n.title.trim() || (n.title = "Untitled");
                                var i = n.title.trim().toLowerCase(),
                                    o = n.content.trim().replace(/<[^>]+>/g, "").toLowerCase(),
                                    a = n.url,
                                    s = -1,
                                    u = -1,
                                    l = -1;
                                if ("" !== o ? t.forEach(function (e, t) {
                                        s = i.indexOf(e), u = o.indexOf(e), s < 0 && u < 0 ? r = !1 : (u < 0 && (u = 0), 0 == t && (l = u))
                                    }) : r = !1, r) {
                                    e += "<div class='search-item'>", e += "<a href='" + a + "' class='search-title'>" + i + "</a>";
                                    var c = n.content.trim().replace(/<[^>]+>/g, "");
                                    if (l >= 0) {
                                        var f = l - 40,
                                            d = l + 60;
                                        f < 0 && (f = 0), 0 == f && (d = 100), d > c.length && (d = c.length);
                                        var p = c.substr(f, d);
                                        t.forEach(function (e) {
                                            var t = new RegExp(e, "gi");
                                            p = p.replace(t, '<span class="search-keyword">' + e + "</span>")
                                        }), e += '<p class="search-content">' + p + "</p>"
                                    }
                                    e += "</div>"
                                }
                            }), -1 === e.indexOf("<div")) return o.innerHTML = "<div class='iconfont icon-nofound search-empty'></div>";
                        o.innerHTML = e
                    }
                })
            }
        })
    }
    var o = n(0),
        a = function (e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(o);
    t.init = function () {
        $(".search-widget,.mobile-menu-search,#header-menu-search,.search-cancel").click(function () {
            r()
        })
    }
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function i() {
        o(), a()
    }

    function o() {
        var e = $(".donate-btn"),
            t = $("#donate-box"),
            n = void 0,
            r = $(".donate-cancel"),
            i = $(".icon-donate-wechat"),
            o = $(".icon-donate-alipay");
        e.click(function () {
            n = u.default.createMask(), t.is(":visible") ? t.hide() : (t.show(), n.show(), l($(".icon-donate-wechat")));
            for (var e = [n, r], i = 0; i < e.length; i++) {
                e[i].click(function () {
                    t.hide(), n.remove()
                })
            }
        });
        for (var a = [i, o], s = 0; s < a.length; s++) ! function () {
            var e = a[s];
            e.click(function () {
                l(e)
            })
        }();
        var l = function (e) {
            var t = e.attr("class");
            $(".donate-list span").removeClass("donate-active"), e.addClass("donate-active"), t.indexOf("wechat") > 0 ? ($(".donate-img").hide(), $("#donate-qr-wechat").show()) : t.indexOf("alipay") > 0 && ($(".donate-img").hide(), $("#donate-qr-alipay").show())
        }
    }

    function a() {
        var e = $(".share-btn"),
            t = $(".-mob-share");
        e.click(function () {
            var e = u.default.createMask();
            t.is(":visible") ? (t.hide(), e.remove()) : (e.show(), t.show(), e.click(function () {
                t.hide(), e.remove()
            }))
        })
    }
    var s = n(0),
        u = r(s),
        l = n(9),
        c = r(l);
    t.init = function () {
        i(), c.default.init()
    }
}, function (e, t, n) {
    "use strict";

    function r() {
        $(window).scroll(function () {
            i()
        })
    }

    function i() {
        var e = $(".toc-container");
        if (e.length > 0) {
            var t = e.offset().top,
                n = $(window).scrollTop();
            t < n && e.addClass("toc-fixed"), (n < 90 || u()) && e.removeClass("toc-fixed")
        }
    }

    function o() {
        var e = $(".post-content h1,.post-content h2,.post-content h3,.post-content h4,.post-content h5,.post-content h6");
        $(window).scroll(function () {
            e.each(function () {
                if (s($(this)) <= 40) {
                    a($(this).text())
                }
            })
        })
    }

    function a(e) {
        $(".toc-inner li").each(function () {
            $(this).text() === e ? $(this).addClass("toc-active") : $(this).removeClass("toc-active")
        })
    }

    function s(e) {
        return e.offset().top - $(window).scrollTop()
    }

    function u() {
        var e = $(window).height();
        return $(".post-footer-nav").offset().top - $(document).scrollTop() <= e
    }
    t.init = function () {
        var e = $(".toc-sidebar"),
            t = $(".toc-title"),
            n = $(".toc-list");
        n[0] && "" !== n[0].innerHTML.trim() && (e.show(), t.click(function () {
            n.is(":visible") ? n.hide() : n.show()
        }), r(), o())
    }
}, function (e, t, n) {
    "use strict";

    function r(e) {
        if ("function" != typeof e.each) return void console.log(e + " not support 'each' ");
        e.each(function (t) {
            $(this).hover(function () {
                e.each(function (e) {
                    t != e && $(this).addClass("inactive-item")
                })
            }, function () {
                e.removeClass("inactive-item")
            })
        })
    }
    var i = n(11);
    ! function (e) {
        e && e.__esModule
    }(i);
    t.init = function () {
        var e = $(".social a"),
            t = $(".-mob-share div");
        r(e), r(t)
    }
}, function (e, t) {}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function i(e) {
        "" !== e && void 0 !== e || (e = document.getElementsByTagName("img")), this.config = {
            width: .66 * window.innerWidth,
            height: .76 * window.innerHeight
        }, this.style = {
            container: "gContainer",
            box: "gBox gSlideDown",
            img: "gImg"
        }, this.elements = e, this.init()
    }
    var o = n(13),
        a = (r(o), n(0)),
        s = r(a);
    t.init = function () {
        new i($(".banner,.gallery,img"))
    }, i.prototype = {
        init: function () {
            var e = this;
            if (s.default.isPc)
                for (var t = 0; t < this.elements.length; t++) ! function (t) {
                    e.elements[t].addEventListener("click", function () {
                        e.show(e.elements[t])
                    })
                }(t)
        },
        show: function (e) {
            var t = this,
                n = this.config.width,
                r = this.config.height,
                i = this.style;
            if (!(e.height < 340 || e.width < 340 || e.height > r || e.width > n)) {
                var o = document.createElement("div"),
                    a = document.createElement("div"),
                    s = document.createElement("img");
                o.className = i.container, a.className = i.box, s.className = i.img;
                if (e.getAttribute("src")) s.src = e.getAttribute("src");
                else {
                    var u = e.style.backgroundImage,
                        l = u.substring(6, u.length - 2);
                    s.src = l
                }
                this.setStyle([a, s], n, r), a.appendChild(s), o.appendChild(a), o.addEventListener("click", function () {
                    t.destoryGallery()
                }), document.getElementsByTagName("body")[0].appendChild(o)
            }
        },
        setStyle: function (e, t, n, r) {
            e.forEach(function (e) {
                var r = e.style;
                r.width = t + "px", r.height = n + "px", r.marginTop = -.5 * n + "px", r.marginLeft = -.5 * t + "px"
            })
        },
        destoryGallery: function () {
            var e = document.getElementsByClassName(this.style.container)[0];
            document.getElementsByTagName("body")[0].removeChild(e)
        }
    }
}, function (e, t) {}, function (e, t, n) {
    "use strict";
    var r = function () {
        function e(e) {
            this.settings = t, this.images = e, this.observer = null, this.init()
        }
        var t = {
                src: "data-src",
                nolazy: "noLazyLoad"
            },
            n = window;
        return e.prototype = {
            init: function () {
                var e = this;
                if (!n.IntersectionObserver) return void this.loadImages();
                var t = this,
                    r = {
                        root: null,
                        rootMargin: "0px",
                        threshold: [0]
                    };
                this.observer = new IntersectionObserver(function (e) {
                    e.forEach(function (e) {
                        if (e.intersectionRatio > 0) {
                            t.observer.unobserve(e.target);
                            var n = e.target.getAttribute(t.settings.src);
                            n && ("img" === e.target.tagName.toLowerCase() ? (e.target.src = n, e.target.removeAttribute(t.settings.src)) : (e.target.style.backgroundImage = "url(" + n + ")", e.target.removeAttribute(t.settings.src)))
                        }
                    })
                }, r), this.images.forEach(function (n) {
                    if (e.isNolazy(n)) {
                        var r = n.getAttribute(t.settings.src);
                        r && ("img" === n.tagName.toLowerCase() ? (n.src = r, n.removeAttribute(t.settings.src)) : (n.style.backgroundImage = "url(" + r + ")", n.removeAttribute(t.settings.src)))
                    } else t.observer.observe(n)
                })
            },
            loadImages: function () {
                if (this.settings) {
                    var e = this;
                    this.images.forEach(function (t) {
                        var n = t.getAttribute(e.settings.src);
                        n && ("img" === t.tagName.toLowerCase() ? (t.src = n, t.removeAttribute(e.settings.src)) : (t.style.backgroundImage = "url(" + n + ")", t.removeAttribute(e.settings.src)))
                    })
                }
            },
            isNolazy: function (e) {
                return -1 !== e.className.split(" ").indexOf(this.settings.nolazy)
            }
        }, e
    }();
    t.init = function () {
        var e = document.getElementsByClassName("lazyload");
        HTMLCollection.prototype.forEach = function (e) {
            Array.prototype.slice.call(this).forEach(e)
        }, new r(e)
    }
}, function (e, t, n) {
    (function (t) {
        e.exports = t.$ = n(16)
    }).call(t, n(1))
}, function (e, t, n) {
    (function (t) {
        e.exports = t.$ = n(17)
    }).call(t, n(1))
}, function (e, t, n) {
    "use strict";
    (function (e) {
        var r, i, o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }; /*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
        ! function (t, n) {
            "object" == o(e) && "object" == o(e.exports) ? e.exports = t.document ? n(t, !0) : function (e) {
                if (!e.document) throw new Error("jQuery requires a window with a document");
                return n(e)
            } : n(t)
        }("undefined" != typeof window ? window : void 0, function (a, s) {
            function u(e, t, n) {
                var r, i = (t = t || de).createElement("script");
                if (i.text = e, n)
                    for (r in Se) n[r] && (i[r] = n[r]);
                t.head.appendChild(i).parentNode.removeChild(i)
            }

            function l(e) {
                return null == e ? e + "" : "object" == (void 0 === e ? "undefined" : o(e)) || "function" == typeof e ? ye[xe.call(e)] || "object" : void 0 === e ? "undefined" : o(e)
            }

            function c(e) {
                var t = !!e && "length" in e && e.length,
                    n = l(e);
                return !ke(e) && !Ee(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
            }

            function f(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            }

            function d(e, t, n) {
                return ke(t) ? Ne.grep(e, function (e, r) {
                    return !!t.call(e, r, e) !== n
                }) : t.nodeType ? Ne.grep(e, function (e) {
                    return e === t !== n
                }) : "string" != typeof t ? Ne.grep(e, function (e) {
                    return me.call(t, e) > -1 !== n
                }) : Ne.filter(t, e, n)
            }

            function p(e, t) {
                for (;
                    (e = e[t]) && 1 !== e.nodeType;);
                return e
            }

            function h(e) {
                var t = {};
                return Ne.each(e.match(Ie) || [], function (e, n) {
                    t[n] = !0
                }), t
            }

            function g(e) {
                return e
            }

            function v(e) {
                throw e
            }

            function m(e, t, n, r) {
                var i;
                try {
                    e && ke(i = e.promise) ? i.call(e).done(t).fail(n) : e && ke(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
                } catch (e) {
                    n.apply(void 0, [e])
                }
            }

            function y() {
                de.removeEventListener("DOMContentLoaded", y), a.removeEventListener("load", y), Ne.ready()
            }

            function x(e, t) {
                return t.toUpperCase()
            }

            function b(e) {
                return e.replace(Fe, "ms-").replace(_e, x)
            }

            function w() {
                this.expando = Ne.expando + w.uid++
            }

            function C(e) {
                return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Ve.test(e) ? JSON.parse(e) : e)
            }

            function T(e, t, n) {
                var r;
                if (void 0 === n && 1 === e.nodeType)
                    if (r = "data-" + t.replace(Ge, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
                        try {
                            n = C(n)
                        } catch (e) {}
                        Xe.set(e, t, n)
                    } else n = void 0;
                return n
            }

            function k(e, t, n, r) {
                var i, o, a = 20,
                    s = r ? function () {
                        return r.cur()
                    } : function () {
                        return Ne.css(e, t, "")
                    },
                    u = s(),
                    l = n && n[3] || (Ne.cssNumber[t] ? "" : "px"),
                    c = (Ne.cssNumber[t] || "px" !== l && +u) && Qe.exec(Ne.css(e, t));
                if (c && c[3] !== l) {
                    for (u /= 2, l = l || c[3], c = +u || 1; a--;) Ne.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
                    c *= 2, Ne.style(e, t, c + l), n = n || []
                }
                return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
            }

            function E(e) {
                var t, n = e.ownerDocument,
                    r = e.nodeName,
                    i = et[r];
                return i || (t = n.body.appendChild(n.createElement(r)), i = Ne.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), et[r] = i, i)
            }

            function S(e, t) {
                for (var n, r, i = [], o = 0, a = e.length; o < a; o++)(r = e[o]).style && (n = r.style.display, t ? ("none" === n && (i[o] = Ue.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && Ke(r) && (i[o] = E(r))) : "none" !== n && (i[o] = "none", Ue.set(r, "display", n)));
                for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
                return e
            }

            function N(e, t) {
                var n;
                return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && f(e, t) ? Ne.merge([e], n) : n
            }

            function A(e, t) {
                for (var n = 0, r = e.length; n < r; n++) Ue.set(e[n], "globalEval", !t || Ue.get(t[n], "globalEval"))
            }

            function D(e, t, n, r, i) {
                for (var o, a, s, u, c, f, d = t.createDocumentFragment(), p = [], h = 0, g = e.length; h < g; h++)
                    if ((o = e[h]) || 0 === o)
                        if ("object" === l(o)) Ne.merge(p, o.nodeType ? [o] : o);
                        else if (ot.test(o)) {
                    for (a = a || d.appendChild(t.createElement("div")), s = (nt.exec(o) || ["", ""])[1].toLowerCase(), u = it[s] || it._default, a.innerHTML = u[1] + Ne.htmlPrefilter(o) + u[2], f = u[0]; f--;) a = a.lastChild;
                    Ne.merge(p, a.childNodes), (a = d.firstChild).textContent = ""
                } else p.push(t.createTextNode(o));
                for (d.textContent = "", h = 0; o = p[h++];)
                    if (r && Ne.inArray(o, r) > -1) i && i.push(o);
                    else if (c = Ne.contains(o.ownerDocument, o), a = N(d.appendChild(o), "script"), c && A(a), n)
                    for (f = 0; o = a[f++];) rt.test(o.type || "") && n.push(o);
                return d
            }

            function j() {
                return !0
            }

            function $() {
                return !1
            }

            function L() {
                try {
                    return de.activeElement
                } catch (e) {}
            }

            function q(e, t, n, r, i, a) {
                var s, u;
                if ("object" == (void 0 === t ? "undefined" : o(t))) {
                    "string" != typeof n && (r = r || n, n = void 0);
                    for (u in t) q(e, u, n, r, t[u], a);
                    return e
                }
                if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = $;
                else if (!i) return e;
                return 1 === a && (s = i, (i = function (e) {
                    return Ne().off(e), s.apply(this, arguments)
                }).guid = s.guid || (s.guid = Ne.guid++)), e.each(function () {
                    Ne.event.add(this, t, i, r, n)
                })
            }

            function O(e, t) {
                return f(e, "table") && f(11 !== t.nodeType ? t : t.firstChild, "tr") ? Ne(e).children("tbody")[0] || e : e
            }

            function H(e) {
                return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
            }

            function P(e) {
                return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
            }

            function M(e, t) {
                var n, r, i, o, a, s, u, l;
                if (1 === t.nodeType) {
                    if (Ue.hasData(e) && (o = Ue.access(e), a = Ue.set(t, o), l = o.events)) {
                        delete a.handle, a.events = {};
                        for (i in l)
                            for (n = 0, r = l[i].length; n < r; n++) Ne.event.add(t, i, l[i][n])
                    }
                    Xe.hasData(e) && (s = Xe.access(e), u = Ne.extend({}, s), Xe.set(t, u))
                }
            }

            function I(e, t) {
                var n = t.nodeName.toLowerCase();
                "input" === n && tt.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
            }

            function R(e, t, n, r) {
                t = ge.apply([], t);
                var i, o, a, s, l, c, f = 0,
                    d = e.length,
                    p = d - 1,
                    h = t[0],
                    g = ke(h);
                if (g || d > 1 && "string" == typeof h && !Te.checkClone && dt.test(h)) return e.each(function (i) {
                    var o = e.eq(i);
                    g && (t[0] = h.call(this, i, o.html())), R(o, t, n, r)
                });
                if (d && (i = D(t, e[0].ownerDocument, !1, e, r), o = i.firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
                    for (s = (a = Ne.map(N(i, "script"), H)).length; f < d; f++) l = i, f !== p && (l = Ne.clone(l, !0, !0), s && Ne.merge(a, N(l, "script"))), n.call(e[f], l, f);
                    if (s)
                        for (c = a[a.length - 1].ownerDocument, Ne.map(a, P), f = 0; f < s; f++) l = a[f], rt.test(l.type || "") && !Ue.access(l, "globalEval") && Ne.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? Ne._evalUrl && Ne._evalUrl(l.src) : u(l.textContent.replace(pt, ""), c, l))
                }
                return e
            }

            function B(e, t, n) {
                for (var r, i = t ? Ne.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || Ne.cleanData(N(r)), r.parentNode && (n && Ne.contains(r.ownerDocument, r) && A(N(r, "script")), r.parentNode.removeChild(r));
                return e
            }

            function W(e, t, n) {
                var r, i, o, a, s = e.style;
                return (n = n || gt(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || Ne.contains(e.ownerDocument, e) || (a = Ne.style(e, t)), !Te.pixelBoxStyles() && ht.test(a) && vt.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
            }

            function F(e, t) {
                return {
                    get: function () {
                        if (!e()) return (this.get = t).apply(this, arguments);
                        delete this.get
                    }
                }
            }

            function _(e) {
                if (e in Ct) return e;
                for (var t = e[0].toUpperCase() + e.slice(1), n = wt.length; n--;)
                    if ((e = wt[n] + t) in Ct) return e
            }

            function z(e) {
                var t = Ne.cssProps[e];
                return t || (t = Ne.cssProps[e] = _(e) || e), t
            }

            function U(e, t, n) {
                var r = Qe.exec(t);
                return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
            }

            function X(e, t, n, r, i, o) {
                var a = "width" === t ? 1 : 0,
                    s = 0,
                    u = 0;
                if (n === (r ? "border" : "content")) return 0;
                for (; a < 4; a += 2) "margin" === n && (u += Ne.css(e, n + Je[a], !0, i)), r ? ("content" === n && (u -= Ne.css(e, "padding" + Je[a], !0, i)), "margin" !== n && (u -= Ne.css(e, "border" + Je[a] + "Width", !0, i))) : (u += Ne.css(e, "padding" + Je[a], !0, i), "padding" !== n ? u += Ne.css(e, "border" + Je[a] + "Width", !0, i) : s += Ne.css(e, "border" + Je[a] + "Width", !0, i));
                return !r && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5))), u
            }

            function V(e, t, n) {
                var r = gt(e),
                    i = W(e, t, r),
                    o = "border-box" === Ne.css(e, "boxSizing", !1, r),
                    a = o;
                if (ht.test(i)) {
                    if (!n) return i;
                    i = "auto"
                }
                return a = a && (Te.boxSizingReliable() || i === e.style[t]), ("auto" === i || !parseFloat(i) && "inline" === Ne.css(e, "display", !1, r)) && (i = e["offset" + t[0].toUpperCase() + t.slice(1)], a = !0), (i = parseFloat(i) || 0) + X(e, t, n || (o ? "border" : "content"), a, r, i) + "px"
            }

            function G(e, t, n, r, i) {
                return new G.prototype.init(e, t, n, r, i)
            }

            function Y() {
                kt && (!1 === de.hidden && a.requestAnimationFrame ? a.requestAnimationFrame(Y) : a.setTimeout(Y, Ne.fx.interval), Ne.fx.tick())
            }

            function Q() {
                return a.setTimeout(function () {
                    Tt = void 0
                }), Tt = Date.now()
            }

            function J(e, t) {
                var n, r = 0,
                    i = {
                        height: e
                    };
                for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = Je[r])] = i["padding" + n] = e;
                return t && (i.opacity = i.width = e), i
            }

            function K(e, t, n) {
                for (var r, i = (te.tweeners[t] || []).concat(te.tweeners["*"]), o = 0, a = i.length; o < a; o++)
                    if (r = i[o].call(n, t, e)) return r
            }

            function Z(e, t, n) {
                var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t,
                    d = this,
                    p = {},
                    h = e.style,
                    g = e.nodeType && Ke(e),
                    v = Ue.get(e, "fxshow");
                n.queue || (null == (a = Ne._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
                    a.unqueued || s()
                }), a.unqueued++, d.always(function () {
                    d.always(function () {
                        a.unqueued--, Ne.queue(e, "fx").length || a.empty.fire()
                    })
                }));
                for (r in t)
                    if (i = t[r], Et.test(i)) {
                        if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                            if ("show" !== i || !v || void 0 === v[r]) continue;
                            g = !0
                        }
                        p[r] = v && v[r] || Ne.style(e, r)
                    } if ((u = !Ne.isEmptyObject(t)) || !Ne.isEmptyObject(p)) {
                    f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = Ue.get(e, "display")), "none" === (c = Ne.css(e, "display")) && (l ? c = l : (S([e], !0), l = e.style.display || l, c = Ne.css(e, "display"), S([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === Ne.css(e, "float") && (u || (d.done(function () {
                        h.display = l
                    }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", d.always(function () {
                        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                    })), u = !1;
                    for (r in p) u || (v ? "hidden" in v && (g = v.hidden) : v = Ue.access(e, "fxshow", {
                        display: l
                    }), o && (v.hidden = !g), g && S([e], !0), d.done(function () {
                        g || S([e]), Ue.remove(e, "fxshow");
                        for (r in p) Ne.style(e, r, p[r])
                    })), u = K(g ? v[r] : 0, r, d), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0))
                }
            }

            function ee(e, t) {
                var n, r, i, o, a;
                for (n in e)
                    if (r = b(n), i = t[r], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = Ne.cssHooks[r]) && "expand" in a) {
                        o = a.expand(o), delete e[r];
                        for (n in o) n in e || (e[n] = o[n], t[n] = i)
                    } else t[r] = i
            }

            function te(e, t, n) {
                var r, i, o = 0,
                    a = te.prefilters.length,
                    s = Ne.Deferred().always(function () {
                        delete u.elem
                    }),
                    u = function () {
                        if (i) return !1;
                        for (var t = Tt || Q(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++) l.tweens[o].run(r);
                        return s.notifyWith(e, [l, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1)
                    },
                    l = s.promise({
                        elem: e,
                        props: Ne.extend({}, t),
                        opts: Ne.extend(!0, {
                            specialEasing: {},
                            easing: Ne.easing._default
                        }, n),
                        originalProperties: t,
                        originalOptions: n,
                        startTime: Tt || Q(),
                        duration: n.duration,
                        tweens: [],
                        createTween: function (t, n) {
                            var r = Ne.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                            return l.tweens.push(r), r
                        },
                        stop: function (t) {
                            var n = 0,
                                r = t ? l.tweens.length : 0;
                            if (i) return this;
                            for (i = !0; n < r; n++) l.tweens[n].run(1);
                            return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this
                        }
                    }),
                    c = l.props;
                for (ee(c, l.opts.specialEasing); o < a; o++)
                    if (r = te.prefilters[o].call(l, e, c, l.opts)) return ke(r.stop) && (Ne._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;
                return Ne.map(c, K, l), ke(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), Ne.fx.timer(Ne.extend(u, {
                    elem: e,
                    anim: l,
                    queue: l.opts.queue
                })), l
            }

            function ne(e) {
                return (e.match(Ie) || []).join(" ")
            }

            function re(e) {
                return e.getAttribute && e.getAttribute("class") || ""
            }

            function ie(e) {
                return Array.isArray(e) ? e : "string" == typeof e ? e.match(Ie) || [] : []
            }

            function oe(e, t, n, r) {
                var i;
                if (Array.isArray(t)) Ne.each(t, function (t, i) {
                    n || Mt.test(e) ? r(e, i) : oe(e + "[" + ("object" == (void 0 === i ? "undefined" : o(i)) && null != i ? t : "") + "]", i, n, r)
                });
                else if (n || "object" !== l(t)) r(e, t);
                else
                    for (i in t) oe(e + "[" + i + "]", t[i], n, r)
            }

            function ae(e) {
                return function (t, n) {
                    "string" != typeof t && (n = t, t = "*");
                    var r, i = 0,
                        o = t.toLowerCase().match(Ie) || [];
                    if (ke(n))
                        for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
                }
            }

            function se(e, t, n, r) {
                function i(s) {
                    var u;
                    return o[s] = !0, Ne.each(e[s] || [], function (e, s) {
                        var l = s(t, n, r);
                        return "string" != typeof l || a || o[l] ? a ? !(u = l) : void 0 : (t.dataTypes.unshift(l), i(l), !1)
                    }), u
                }
                var o = {},
                    a = e === Yt;
                return i(t.dataTypes[0]) || !o["*"] && i("*")
            }

            function ue(e, t) {
                var n, r, i = Ne.ajaxSettings.flatOptions || {};
                for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
                return r && Ne.extend(!0, e, r), e
            }

            function le(e, t, n) {
                for (var r, i, o, a, s = e.contents, u = e.dataTypes;
                    "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                if (r)
                    for (i in s)
                        if (s[i] && s[i].test(r)) {
                            u.unshift(i);
                            break
                        } if (u[0] in n) o = u[0];
                else {
                    for (i in n) {
                        if (!u[0] || e.converters[i + " " + u[0]]) {
                            o = i;
                            break
                        }
                        a || (a = i)
                    }
                    o = o || a
                }
                if (o) return o !== u[0] && u.unshift(o), n[o]
            }

            function ce(e, t, n, r) {
                var i, o, a, s, u, l = {},
                    c = e.dataTypes.slice();
                if (c[1])
                    for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                for (o = c.shift(); o;)
                    if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                        if ("*" === o) o = u;
                        else if ("*" !== u && u !== o) {
                    if (!(a = l[u + " " + o] || l["* " + o]))
                        for (i in l)
                            if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                                break
                            } if (!0 !== a)
                        if (a && e.throws) t = a(t);
                        else try {
                            t = a(t)
                        } catch (e) {
                            return {
                                state: "parsererror",
                                error: a ? e : "No conversion from " + u + " to " + o
                            }
                        }
                }
                return {
                    state: "success",
                    data: t
                }
            }
            var fe = [],
                de = a.document,
                pe = Object.getPrototypeOf,
                he = fe.slice,
                ge = fe.concat,
                ve = fe.push,
                me = fe.indexOf,
                ye = {},
                xe = ye.toString,
                be = ye.hasOwnProperty,
                we = be.toString,
                Ce = we.call(Object),
                Te = {},
                ke = function (e) {
                    return "function" == typeof e && "number" != typeof e.nodeType
                },
                Ee = function (e) {
                    return null != e && e === e.window
                },
                Se = {
                    type: !0,
                    src: !0,
                    noModule: !0
                },
                Ne = function e(t, n) {
                    return new e.fn.init(t, n)
                },
                Ae = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
            Ne.fn = Ne.prototype = {
                jquery: "3.3.1",
                constructor: Ne,
                length: 0,
                toArray: function () {
                    return he.call(this)
                },
                get: function (e) {
                    return null == e ? he.call(this) : e < 0 ? this[e + this.length] : this[e]
                },
                pushStack: function (e) {
                    var t = Ne.merge(this.constructor(), e);
                    return t.prevObject = this, t
                },
                each: function (e) {
                    return Ne.each(this, e)
                },
                map: function (e) {
                    return this.pushStack(Ne.map(this, function (t, n) {
                        return e.call(t, n, t)
                    }))
                },
                slice: function () {
                    return this.pushStack(he.apply(this, arguments))
                },
                first: function () {
                    return this.eq(0)
                },
                last: function () {
                    return this.eq(-1)
                },
                eq: function (e) {
                    var t = this.length,
                        n = +e + (e < 0 ? t : 0);
                    return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
                },
                end: function () {
                    return this.prevObject || this.constructor()
                },
                push: ve,
                sort: fe.sort,
                splice: fe.splice
            }, Ne.extend = Ne.fn.extend = function () {
                var e, t, n, r, i, a, s = arguments[0] || {},
                    u = 1,
                    l = arguments.length,
                    c = !1;
                for ("boolean" == typeof s && (c = s, s = arguments[u] || {}, u++), "object" == (void 0 === s ? "undefined" : o(s)) || ke(s) || (s = {}), u === l && (s = this, u--); u < l; u++)
                    if (null != (e = arguments[u]))
                        for (t in e) n = s[t], s !== (r = e[t]) && (c && r && (Ne.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1, a = n && Array.isArray(n) ? n : []) : a = n && Ne.isPlainObject(n) ? n : {}, s[t] = Ne.extend(c, a, r)) : void 0 !== r && (s[t] = r));
                return s
            }, Ne.extend({
                expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function (e) {
                    throw new Error(e)
                },
                noop: function () {},
                isPlainObject: function (e) {
                    var t, n;
                    return !(!e || "[object Object]" !== xe.call(e) || (t = pe(e)) && ("function" != typeof (n = be.call(t, "constructor") && t.constructor) || we.call(n) !== Ce))
                },
                isEmptyObject: function (e) {
                    var t;
                    for (t in e) return !1;
                    return !0
                },
                globalEval: function (e) {
                    u(e)
                },
                each: function (e, t) {
                    var n, r = 0;
                    if (c(e))
                        for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
                    else
                        for (r in e)
                            if (!1 === t.call(e[r], r, e[r])) break;
                    return e
                },
                trim: function (e) {
                    return null == e ? "" : (e + "").replace(Ae, "")
                },
                makeArray: function (e, t) {
                    var n = t || [];
                    return null != e && (c(Object(e)) ? Ne.merge(n, "string" == typeof e ? [e] : e) : ve.call(n, e)), n
                },
                inArray: function (e, t, n) {
                    return null == t ? -1 : me.call(t, e, n)
                },
                merge: function (e, t) {
                    for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
                    return e.length = i, e
                },
                grep: function (e, t, n) {
                    for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
                    return r
                },
                map: function (e, t, n) {
                    var r, i, o = 0,
                        a = [];
                    if (c(e))
                        for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
                    else
                        for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
                    return ge.apply([], a)
                },
                guid: 1,
                support: Te
            }), "function" == typeof Symbol && (Ne.fn[Symbol.iterator] = fe[Symbol.iterator]), Ne.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
                ye["[object " + t + "]"] = t.toLowerCase()
            });
            var De = function (e) {
                function t(e, t, n, r) {
                    var i, o, a, s, u, c, d, p = t && t.ownerDocument,
                        h = t ? t.nodeType : 9;
                    if (n = n || [], "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h) return n;
                    if (!r && ((t ? t.ownerDocument || t : R) !== $ && j(t), t = t || $, q)) {
                        if (11 !== h && (u = ge.exec(e)))
                            if (i = u[1]) {
                                if (9 === h) {
                                    if (!(a = t.getElementById(i))) return n;
                                    if (a.id === i) return n.push(a), n
                                } else if (p && (a = p.getElementById(i)) && M(t, a) && a.id === i) return n.push(a), n
                            } else {
                                if (u[2]) return Q.apply(n, t.getElementsByTagName(e)), n;
                                if ((i = u[3]) && b.getElementsByClassName && t.getElementsByClassName) return Q.apply(n, t.getElementsByClassName(i)), n
                            } if (b.qsa && !z[e + " "] && (!O || !O.test(e))) {
                            if (1 !== h) p = t, d = e;
                            else if ("object" !== t.nodeName.toLowerCase()) {
                                for ((s = t.getAttribute("id")) ? s = s.replace(xe, be) : t.setAttribute("id", s = I), o = (c = k(e)).length; o--;) c[o] = "#" + s + " " + f(c[o]);
                                d = c.join(","), p = ve.test(e) && l(t.parentNode) || t
                            }
                            if (d) try {
                                return Q.apply(n, p.querySelectorAll(d)), n
                            } catch (e) {} finally {
                                s === I && t.removeAttribute("id")
                            }
                        }
                    }
                    return S(e.replace(oe, "$1"), t, n, r)
                }

                function n() {
                    function e(n, r) {
                        return t.push(n + " ") > w.cacheLength && delete e[t.shift()], e[n + " "] = r
                    }
                    var t = [];
                    return e
                }

                function r(e) {
                    return e[I] = !0, e
                }

                function i(e) {
                    var t = $.createElement("fieldset");
                    try {
                        return !!e(t)
                    } catch (e) {
                        return !1
                    } finally {
                        t.parentNode && t.parentNode.removeChild(t), t = null
                    }
                }

                function o(e, t) {
                    for (var n = e.split("|"), r = n.length; r--;) w.attrHandle[n[r]] = t
                }

                function a(e, t) {
                    var n = t && e,
                        r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                    if (r) return r;
                    if (n)
                        for (; n = n.nextSibling;)
                            if (n === t) return -1;
                    return e ? 1 : -1
                }

                function s(e) {
                    return function (t) {
                        return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && Ce(t) === e : t.disabled === e : "label" in t && t.disabled === e
                    }
                }

                function u(e) {
                    return r(function (t) {
                        return t = +t, r(function (n, r) {
                            for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                        })
                    })
                }

                function l(e) {
                    return e && void 0 !== e.getElementsByTagName && e
                }

                function c() {}

                function f(e) {
                    for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
                    return r
                }

                function d(e, t, n) {
                    var r = t.dir,
                        i = t.next,
                        o = i || r,
                        a = n && "parentNode" === o,
                        s = W++;
                    return t.first ? function (t, n, i) {
                        for (; t = t[r];)
                            if (1 === t.nodeType || a) return e(t, n, i);
                        return !1
                    } : function (t, n, u) {
                        var l, c, f, d = [B, s];
                        if (u) {
                            for (; t = t[r];)
                                if ((1 === t.nodeType || a) && e(t, n, u)) return !0
                        } else
                            for (; t = t[r];)
                                if (1 === t.nodeType || a)
                                    if (f = t[I] || (t[I] = {}), c = f[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;
                                    else {
                                        if ((l = c[o]) && l[0] === B && l[1] === s) return d[2] = l[2];
                                        if (c[o] = d, d[2] = e(t, n, u)) return !0
                                    } return !1
                    }
                }

                function p(e) {
                    return e.length > 1 ? function (t, n, r) {
                        for (var i = e.length; i--;)
                            if (!e[i](t, n, r)) return !1;
                        return !0
                    } : e[0]
                }

                function h(e, n, r) {
                    for (var i = 0, o = n.length; i < o; i++) t(e, n[i], r);
                    return r
                }

                function g(e, t, n, r, i) {
                    for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
                    return a
                }

                function v(e, t, n, i, o, a) {
                    return i && !i[I] && (i = v(i)), o && !o[I] && (o = v(o, a)), r(function (r, a, s, u) {
                        var l, c, f, d = [],
                            p = [],
                            v = a.length,
                            m = r || h(t || "*", s.nodeType ? [s] : s, []),
                            y = !e || !r && t ? m : g(m, d, e, s, u),
                            x = n ? o || (r ? e : v || i) ? [] : a : y;
                        if (n && n(y, x, s, u), i)
                            for (l = g(x, p), i(l, [], s, u), c = l.length; c--;)(f = l[c]) && (x[p[c]] = !(y[p[c]] = f));
                        if (r) {
                            if (o || e) {
                                if (o) {
                                    for (l = [], c = x.length; c--;)(f = x[c]) && l.push(y[c] = f);
                                    o(null, x = [], l, u)
                                }
                                for (c = x.length; c--;)(f = x[c]) && (l = o ? K(r, f) : d[c]) > -1 && (r[l] = !(a[l] = f))
                            }
                        } else x = g(x === a ? x.splice(v, x.length) : x), o ? o(null, a, x, u) : Q.apply(a, x)
                    })
                }

                function m(e) {
                    for (var t, n, r, i = e.length, o = w.relative[e[0].type], a = o || w.relative[" "], s = o ? 1 : 0, u = d(function (e) {
                            return e === t
                        }, a, !0), l = d(function (e) {
                            return K(t, e) > -1
                        }, a, !0), c = [function (e, n, r) {
                            var i = !o && (r || n !== N) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r));
                            return t = null, i
                        }]; s < i; s++)
                        if (n = w.relative[e[s].type]) c = [d(p(c), n)];
                        else {
                            if ((n = w.filter[e[s].type].apply(null, e[s].matches))[I]) {
                                for (r = ++s; r < i && !w.relative[e[r].type]; r++);
                                return v(s > 1 && p(c), s > 1 && f(e.slice(0, s - 1).concat({
                                    value: " " === e[s - 2].type ? "*" : ""
                                })).replace(oe, "$1"), n, s < r && m(e.slice(s, r)), r < i && m(e = e.slice(r)), r < i && f(e))
                            }
                            c.push(n)
                        } return p(c)
                }

                function y(e, n) {
                    var i = n.length > 0,
                        o = e.length > 0,
                        a = function (r, a, s, u, l) {
                            var c, f, d, p = 0,
                                h = "0",
                                v = r && [],
                                m = [],
                                y = N,
                                x = r || o && w.find.TAG("*", l),
                                b = B += null == y ? 1 : Math.random() || .1,
                                C = x.length;
                            for (l && (N = a === $ || a || l); h !== C && null != (c = x[h]); h++) {
                                if (o && c) {
                                    for (f = 0, a || c.ownerDocument === $ || (j(c), s = !q); d = e[f++];)
                                        if (d(c, a || $, s)) {
                                            u.push(c);
                                            break
                                        } l && (B = b)
                                }
                                i && ((c = !d && c) && p--, r && v.push(c))
                            }
                            if (p += h, i && h !== p) {
                                for (f = 0; d = n[f++];) d(v, m, a, s);
                                if (r) {
                                    if (p > 0)
                                        for (; h--;) v[h] || m[h] || (m[h] = G.call(u));
                                    m = g(m)
                                }
                                Q.apply(u, m), l && !r && m.length > 0 && p + n.length > 1 && t.uniqueSort(u)
                            }
                            return l && (B = b, N = y), v
                        };
                    return i ? r(a) : a
                }
                var x, b, w, C, T, k, E, S, N, A, D, j, $, L, q, O, H, P, M, I = "sizzle" + 1 * new Date,
                    R = e.document,
                    B = 0,
                    W = 0,
                    F = n(),
                    _ = n(),
                    z = n(),
                    U = function (e, t) {
                        return e === t && (D = !0), 0
                    },
                    X = {}.hasOwnProperty,
                    V = [],
                    G = V.pop,
                    Y = V.push,
                    Q = V.push,
                    J = V.slice,
                    K = function (e, t) {
                        for (var n = 0, r = e.length; n < r; n++)
                            if (e[n] === t) return n;
                        return -1
                    },
                    Z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    ee = "[\\x20\\t\\r\\n\\f]",
                    te = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                    ne = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + te + "))|)" + ee + "*\\]",
                    re = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ne + ")*)|.*)\\)|)",
                    ie = new RegExp(ee + "+", "g"),
                    oe = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"),
                    ae = new RegExp("^" + ee + "*," + ee + "*"),
                    se = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"),
                    ue = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]", "g"),
                    le = new RegExp(re),
                    ce = new RegExp("^" + te + "$"),
                    fe = {
                        ID: new RegExp("^#(" + te + ")"),
                        CLASS: new RegExp("^\\.(" + te + ")"),
                        TAG: new RegExp("^(" + te + "|[*])"),
                        ATTR: new RegExp("^" + ne),
                        PSEUDO: new RegExp("^" + re),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + Z + ")$", "i"),
                        needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i")
                    },
                    de = /^(?:input|select|textarea|button)$/i,
                    pe = /^h\d$/i,
                    he = /^[^{]+\{\s*\[native \w/,
                    ge = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    ve = /[+~]/,
                    me = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)", "ig"),
                    ye = function (e, t, n) {
                        var r = "0x" + t - 65536;
                        return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
                    },
                    xe = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                    be = function (e, t) {
                        return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                    },
                    we = function () {
                        j()
                    },
                    Ce = d(function (e) {
                        return !0 === e.disabled && ("form" in e || "label" in e)
                    }, {
                        dir: "parentNode",
                        next: "legend"
                    });
                try {
                    Q.apply(V = J.call(R.childNodes), R.childNodes), V[R.childNodes.length].nodeType
                } catch (e) {
                    Q = {
                        apply: V.length ? function (e, t) {
                            Y.apply(e, J.call(t))
                        } : function (e, t) {
                            for (var n = e.length, r = 0; e[n++] = t[r++];);
                            e.length = n - 1
                        }
                    }
                }
                b = t.support = {}, T = t.isXML = function (e) {
                    var t = e && (e.ownerDocument || e).documentElement;
                    return !!t && "HTML" !== t.nodeName
                }, j = t.setDocument = function (e) {
                    var t, n, r = e ? e.ownerDocument || e : R;
                    return r !== $ && 9 === r.nodeType && r.documentElement ? ($ = r, L = $.documentElement, q = !T($), R !== $ && (n = $.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", we, !1) : n.attachEvent && n.attachEvent("onunload", we)), b.attributes = i(function (e) {
                        return e.className = "i", !e.getAttribute("className")
                    }), b.getElementsByTagName = i(function (e) {
                        return e.appendChild($.createComment("")), !e.getElementsByTagName("*").length
                    }), b.getElementsByClassName = he.test($.getElementsByClassName), b.getById = i(function (e) {
                        return L.appendChild(e).id = I, !$.getElementsByName || !$.getElementsByName(I).length
                    }), b.getById ? (w.filter.ID = function (e) {
                        var t = e.replace(me, ye);
                        return function (e) {
                            return e.getAttribute("id") === t
                        }
                    }, w.find.ID = function (e, t) {
                        if (void 0 !== t.getElementById && q) {
                            var n = t.getElementById(e);
                            return n ? [n] : []
                        }
                    }) : (w.filter.ID = function (e) {
                        var t = e.replace(me, ye);
                        return function (e) {
                            var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                            return n && n.value === t
                        }
                    }, w.find.ID = function (e, t) {
                        if (void 0 !== t.getElementById && q) {
                            var n, r, i, o = t.getElementById(e);
                            if (o) {
                                if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                                for (i = t.getElementsByName(e), r = 0; o = i[r++];)
                                    if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                            }
                            return []
                        }
                    }), w.find.TAG = b.getElementsByTagName ? function (e, t) {
                        return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : b.qsa ? t.querySelectorAll(e) : void 0
                    } : function (e, t) {
                        var n, r = [],
                            i = 0,
                            o = t.getElementsByTagName(e);
                        if ("*" === e) {
                            for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                            return r
                        }
                        return o
                    }, w.find.CLASS = b.getElementsByClassName && function (e, t) {
                        if (void 0 !== t.getElementsByClassName && q) return t.getElementsByClassName(e)
                    }, H = [], O = [], (b.qsa = he.test($.querySelectorAll)) && (i(function (e) {
                        L.appendChild(e).innerHTML = "<a id='" + I + "'></a><select id='" + I + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && O.push("[*^$]=" + ee + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || O.push("\\[" + ee + "*(?:value|" + Z + ")"), e.querySelectorAll("[id~=" + I + "-]").length || O.push("~="), e.querySelectorAll(":checked").length || O.push(":checked"), e.querySelectorAll("a#" + I + "+*").length || O.push(".#.+[+~]")
                    }), i(function (e) {
                        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var t = $.createElement("input");
                        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && O.push("name" + ee + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && O.push(":enabled", ":disabled"), L.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && O.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), O.push(",.*:")
                    })), (b.matchesSelector = he.test(P = L.matches || L.webkitMatchesSelector || L.mozMatchesSelector || L.oMatchesSelector || L.msMatchesSelector)) && i(function (e) {
                        b.disconnectedMatch = P.call(e, "*"), P.call(e, "[s!='']:x"), H.push("!=", re)
                    }), O = O.length && new RegExp(O.join("|")), H = H.length && new RegExp(H.join("|")), t = he.test(L.compareDocumentPosition), M = t || he.test(L.contains) ? function (e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e,
                            r = t && t.parentNode;
                        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                    } : function (e, t) {
                        if (t)
                            for (; t = t.parentNode;)
                                if (t === e) return !0;
                        return !1
                    }, U = t ? function (e, t) {
                        if (e === t) return D = !0, 0;
                        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                        return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !b.sortDetached && t.compareDocumentPosition(e) === n ? e === $ || e.ownerDocument === R && M(R, e) ? -1 : t === $ || t.ownerDocument === R && M(R, t) ? 1 : A ? K(A, e) - K(A, t) : 0 : 4 & n ? -1 : 1)
                    } : function (e, t) {
                        if (e === t) return D = !0, 0;
                        var n, r = 0,
                            i = e.parentNode,
                            o = t.parentNode,
                            s = [e],
                            u = [t];
                        if (!i || !o) return e === $ ? -1 : t === $ ? 1 : i ? -1 : o ? 1 : A ? K(A, e) - K(A, t) : 0;
                        if (i === o) return a(e, t);
                        for (n = e; n = n.parentNode;) s.unshift(n);
                        for (n = t; n = n.parentNode;) u.unshift(n);
                        for (; s[r] === u[r];) r++;
                        return r ? a(s[r], u[r]) : s[r] === R ? -1 : u[r] === R ? 1 : 0
                    }, $) : $
                }, t.matches = function (e, n) {
                    return t(e, null, null, n)
                }, t.matchesSelector = function (e, n) {
                    if ((e.ownerDocument || e) !== $ && j(e), n = n.replace(ue, "='$1']"), b.matchesSelector && q && !z[n + " "] && (!H || !H.test(n)) && (!O || !O.test(n))) try {
                        var r = P.call(e, n);
                        if (r || b.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
                    } catch (e) {}
                    return t(n, $, null, [e]).length > 0
                }, t.contains = function (e, t) {
                    return (e.ownerDocument || e) !== $ && j(e), M(e, t)
                }, t.attr = function (e, t) {
                    (e.ownerDocument || e) !== $ && j(e);
                    var n = w.attrHandle[t.toLowerCase()],
                        r = n && X.call(w.attrHandle, t.toLowerCase()) ? n(e, t, !q) : void 0;
                    return void 0 !== r ? r : b.attributes || !q ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                }, t.escape = function (e) {
                    return (e + "").replace(xe, be)
                }, t.error = function (e) {
                    throw new Error("Syntax error, unrecognized expression: " + e)
                }, t.uniqueSort = function (e) {
                    var t, n = [],
                        r = 0,
                        i = 0;
                    if (D = !b.detectDuplicates, A = !b.sortStable && e.slice(0), e.sort(U), D) {
                        for (; t = e[i++];) t === e[i] && (r = n.push(i));
                        for (; r--;) e.splice(n[r], 1)
                    }
                    return A = null, e
                }, C = t.getText = function (e) {
                    var t, n = "",
                        r = 0,
                        i = e.nodeType;
                    if (i) {
                        if (1 === i || 9 === i || 11 === i) {
                            if ("string" == typeof e.textContent) return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling) n += C(e)
                        } else if (3 === i || 4 === i) return e.nodeValue
                    } else
                        for (; t = e[r++];) n += C(t);
                    return n
                }, (w = t.selectors = {
                    cacheLength: 50,
                    createPseudo: r,
                    match: fe,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function (e) {
                            return e[1] = e[1].replace(me, ye), e[3] = (e[3] || e[4] || e[5] || "").replace(me, ye), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                        },
                        CHILD: function (e) {
                            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                        },
                        PSEUDO: function (e) {
                            var t, n = !e[6] && e[2];
                            return fe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && le.test(n) && (t = k(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function (e) {
                            var t = e.replace(me, ye).toLowerCase();
                            return "*" === e ? function () {
                                return !0
                            } : function (e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t
                            }
                        },
                        CLASS: function (e) {
                            var t = F[e + " "];
                            return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && F(e, function (e) {
                                return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                            })
                        },
                        ATTR: function (e, n, r) {
                            return function (i) {
                                var o = t.attr(i, e);
                                return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(ie, " ") + " ").indexOf(r) > -1 : "|=" === n && (o === r || o.slice(0, r.length + 1) === r + "-"))
                            }
                        },
                        CHILD: function (e, t, n, r, i) {
                            var o = "nth" !== e.slice(0, 3),
                                a = "last" !== e.slice(-4),
                                s = "of-type" === t;
                            return 1 === r && 0 === i ? function (e) {
                                return !!e.parentNode
                            } : function (t, n, u) {
                                var l, c, f, d, p, h, g = o !== a ? "nextSibling" : "previousSibling",
                                    v = t.parentNode,
                                    m = s && t.nodeName.toLowerCase(),
                                    y = !u && !s,
                                    x = !1;
                                if (v) {
                                    if (o) {
                                        for (; g;) {
                                            for (d = t; d = d[g];)
                                                if (s ? d.nodeName.toLowerCase() === m : 1 === d.nodeType) return !1;
                                            h = g = "only" === e && !h && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (h = [a ? v.firstChild : v.lastChild], a && y) {
                                        for (x = (p = (l = (c = (f = (d = v)[I] || (d[I] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === B && l[1]) && l[2], d = p && v.childNodes[p]; d = ++p && d && d[g] || (x = p = 0) || h.pop();)
                                            if (1 === d.nodeType && ++x && d === t) {
                                                c[e] = [B, p, x];
                                                break
                                            }
                                    } else if (y && (x = p = (l = (c = (f = (d = t)[I] || (d[I] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === B && l[1]), !1 === x)
                                        for (;
                                            (d = ++p && d && d[g] || (x = p = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== m : 1 !== d.nodeType) || !++x || (y && ((c = (f = d[I] || (d[I] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] = [B, x]), d !== t)););
                                    return (x -= i) === r || x % r == 0 && x / r >= 0
                                }
                            }
                        },
                        PSEUDO: function (e, n) {
                            var i, o = w.pseudos[e] || w.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                            return o[I] ? o(n) : o.length > 1 ? (i = [e, e, "", n], w.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function (e, t) {
                                for (var r, i = o(e, n), a = i.length; a--;) e[r = K(e, i[a])] = !(t[r] = i[a])
                            }) : function (e) {
                                return o(e, 0, i)
                            }) : o
                        }
                    },
                    pseudos: {
                        not: r(function (e) {
                            var t = [],
                                n = [],
                                i = E(e.replace(oe, "$1"));
                            return i[I] ? r(function (e, t, n, r) {
                                for (var o, a = i(e, null, r, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                            }) : function (e, r, o) {
                                return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop()
                            }
                        }),
                        has: r(function (e) {
                            return function (n) {
                                return t(e, n).length > 0
                            }
                        }),
                        contains: r(function (e) {
                            return e = e.replace(me, ye),
                                function (t) {
                                    return (t.textContent || t.innerText || C(t)).indexOf(e) > -1
                                }
                        }),
                        lang: r(function (e) {
                            return ce.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(me, ye).toLowerCase(),
                                function (t) {
                                    var n;
                                    do {
                                        if (n = q ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                    } while ((t = t.parentNode) && 1 === t.nodeType);
                                    return !1
                                }
                        }),
                        target: function (t) {
                            var n = e.location && e.location.hash;
                            return n && n.slice(1) === t.id
                        },
                        root: function (e) {
                            return e === L
                        },
                        focus: function (e) {
                            return e === $.activeElement && (!$.hasFocus || $.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                        },
                        enabled: s(!1),
                        disabled: s(!0),
                        checked: function (e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && !!e.checked || "option" === t && !!e.selected
                        },
                        selected: function (e) {
                            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                        },
                        empty: function (e) {
                            for (e = e.firstChild; e; e = e.nextSibling)
                                if (e.nodeType < 6) return !1;
                            return !0
                        },
                        parent: function (e) {
                            return !w.pseudos.empty(e)
                        },
                        header: function (e) {
                            return pe.test(e.nodeName)
                        },
                        input: function (e) {
                            return de.test(e.nodeName)
                        },
                        button: function (e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && "button" === e.type || "button" === t
                        },
                        text: function (e) {
                            var t;
                            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                        },
                        first: u(function () {
                            return [0]
                        }),
                        last: u(function (e, t) {
                            return [t - 1]
                        }),
                        eq: u(function (e, t, n) {
                            return [n < 0 ? n + t : n]
                        }),
                        even: u(function (e, t) {
                            for (var n = 0; n < t; n += 2) e.push(n);
                            return e
                        }),
                        odd: u(function (e, t) {
                            for (var n = 1; n < t; n += 2) e.push(n);
                            return e
                        }),
                        lt: u(function (e, t, n) {
                            for (var r = n < 0 ? n + t : n; --r >= 0;) e.push(r);
                            return e
                        }),
                        gt: u(function (e, t, n) {
                            for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                            return e
                        })
                    }
                }).pseudos.nth = w.pseudos.eq;
                for (x in {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    }) w.pseudos[x] = function (e) {
                    return function (t) {
                        return "input" === t.nodeName.toLowerCase() && t.type === e
                    }
                }(x);
                for (x in {
                        submit: !0,
                        reset: !0
                    }) w.pseudos[x] = function (e) {
                    return function (t) {
                        var n = t.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && t.type === e
                    }
                }(x);
                return c.prototype = w.filters = w.pseudos, w.setFilters = new c, k = t.tokenize = function (e, n) {
                    var r, i, o, a, s, u, l, c = _[e + " "];
                    if (c) return n ? 0 : c.slice(0);
                    for (s = e, u = [], l = w.preFilter; s;) {
                        r && !(i = ae.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), r = !1, (i = se.exec(s)) && (r = i.shift(), o.push({
                            value: r,
                            type: i[0].replace(oe, " ")
                        }), s = s.slice(r.length));
                        for (a in w.filter) !(i = fe[a].exec(s)) || l[a] && !(i = l[a](i)) || (r = i.shift(), o.push({
                            value: r,
                            type: a,
                            matches: i
                        }), s = s.slice(r.length));
                        if (!r) break
                    }
                    return n ? s.length : s ? t.error(e) : _(e, u).slice(0)
                }, E = t.compile = function (e, t) {
                    var n, r = [],
                        i = [],
                        o = z[e + " "];
                    if (!o) {
                        for (t || (t = k(e)), n = t.length; n--;)(o = m(t[n]))[I] ? r.push(o) : i.push(o);
                        (o = z(e, y(i, r))).selector = e
                    }
                    return o
                }, S = t.select = function (e, t, n, r) {
                    var i, o, a, s, u, c = "function" == typeof e && e,
                        d = !r && k(e = c.selector || e);
                    if (n = n || [], 1 === d.length) {
                        if ((o = d[0] = d[0].slice(0)).length > 2 && "ID" === (a = o[0]).type && 9 === t.nodeType && q && w.relative[o[1].type]) {
                            if (!(t = (w.find.ID(a.matches[0].replace(me, ye), t) || [])[0])) return n;
                            c && (t = t.parentNode), e = e.slice(o.shift().value.length)
                        }
                        for (i = fe.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !w.relative[s = a.type]);)
                            if ((u = w.find[s]) && (r = u(a.matches[0].replace(me, ye), ve.test(o[0].type) && l(t.parentNode) || t))) {
                                if (o.splice(i, 1), !(e = r.length && f(o))) return Q.apply(n, r), n;
                                break
                            }
                    }
                    return (c || E(e, d))(r, t, !q, n, !t || ve.test(e) && l(t.parentNode) || t), n
                }, b.sortStable = I.split("").sort(U).join("") === I, b.detectDuplicates = !!D, j(), b.sortDetached = i(function (e) {
                    return 1 & e.compareDocumentPosition($.createElement("fieldset"))
                }), i(function (e) {
                    return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
                }) || o("type|href|height|width", function (e, t, n) {
                    if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                }), b.attributes && i(function (e) {
                    return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
                }) || o("value", function (e, t, n) {
                    if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
                }), i(function (e) {
                    return null == e.getAttribute("disabled")
                }) || o(Z, function (e, t, n) {
                    var r;
                    if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                }), t
            }(a);
            Ne.find = De, Ne.expr = De.selectors, Ne.expr[":"] = Ne.expr.pseudos, Ne.uniqueSort = Ne.unique = De.uniqueSort, Ne.text = De.getText, Ne.isXMLDoc = De.isXML, Ne.contains = De.contains, Ne.escapeSelector = De.escape;
            var je = function (e, t, n) {
                    for (var r = [], i = void 0 !== n;
                        (e = e[t]) && 9 !== e.nodeType;)
                        if (1 === e.nodeType) {
                            if (i && Ne(e).is(n)) break;
                            r.push(e)
                        } return r
                },
                $e = function (e, t) {
                    for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                    return n
                },
                Le = Ne.expr.match.needsContext,
                qe = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
            Ne.filter = function (e, t, n) {
                var r = t[0];
                return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? Ne.find.matchesSelector(r, e) ? [r] : [] : Ne.find.matches(e, Ne.grep(t, function (e) {
                    return 1 === e.nodeType
                }))
            }, Ne.fn.extend({
                find: function (e) {
                    var t, n, r = this.length,
                        i = this;
                    if ("string" != typeof e) return this.pushStack(Ne(e).filter(function () {
                        for (t = 0; t < r; t++)
                            if (Ne.contains(i[t], this)) return !0
                    }));
                    for (n = this.pushStack([]), t = 0; t < r; t++) Ne.find(e, i[t], n);
                    return r > 1 ? Ne.uniqueSort(n) : n
                },
                filter: function (e) {
                    return this.pushStack(d(this, e || [], !1))
                },
                not: function (e) {
                    return this.pushStack(d(this, e || [], !0))
                },
                is: function (e) {
                    return !!d(this, "string" == typeof e && Le.test(e) ? Ne(e) : e || [], !1).length
                }
            });
            var Oe, He = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
            (Ne.fn.init = function (e, t, n) {
                var r, i;
                if (!e) return this;
                if (n = n || Oe, "string" == typeof e) {
                    if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : He.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                    if (r[1]) {
                        if (t = t instanceof Ne ? t[0] : t, Ne.merge(this, Ne.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : de, !0)), qe.test(r[1]) && Ne.isPlainObject(t))
                            for (r in t) ke(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                        return this
                    }
                    return (i = de.getElementById(r[2])) && (this[0] = i, this.length = 1), this
                }
                return e.nodeType ? (this[0] = e, this.length = 1, this) : ke(e) ? void 0 !== n.ready ? n.ready(e) : e(Ne) : Ne.makeArray(e, this)
            }).prototype = Ne.fn, Oe = Ne(de);
            var Pe = /^(?:parents|prev(?:Until|All))/,
                Me = {
                    children: !0,
                    contents: !0,
                    next: !0,
                    prev: !0
                };
            Ne.fn.extend({
                has: function (e) {
                    var t = Ne(e, this),
                        n = t.length;
                    return this.filter(function () {
                        for (var e = 0; e < n; e++)
                            if (Ne.contains(this, t[e])) return !0
                    })
                },
                closest: function (e, t) {
                    var n, r = 0,
                        i = this.length,
                        o = [],
                        a = "string" != typeof e && Ne(e);
                    if (!Le.test(e))
                        for (; r < i; r++)
                            for (n = this[r]; n && n !== t; n = n.parentNode)
                                if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && Ne.find.matchesSelector(n, e))) {
                                    o.push(n);
                                    break
                                } return this.pushStack(o.length > 1 ? Ne.uniqueSort(o) : o)
                },
                index: function (e) {
                    return e ? "string" == typeof e ? me.call(Ne(e), this[0]) : me.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                },
                add: function (e, t) {
                    return this.pushStack(Ne.uniqueSort(Ne.merge(this.get(), Ne(e, t))))
                },
                addBack: function (e) {
                    return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
                }
            }), Ne.each({
                parent: function (e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null
                },
                parents: function (e) {
                    return je(e, "parentNode")
                },
                parentsUntil: function (e, t, n) {
                    return je(e, "parentNode", n)
                },
                next: function (e) {
                    return p(e, "nextSibling")
                },
                prev: function (e) {
                    return p(e, "previousSibling")
                },
                nextAll: function (e) {
                    return je(e, "nextSibling")
                },
                prevAll: function (e) {
                    return je(e, "previousSibling")
                },
                nextUntil: function (e, t, n) {
                    return je(e, "nextSibling", n)
                },
                prevUntil: function (e, t, n) {
                    return je(e, "previousSibling", n)
                },
                siblings: function (e) {
                    return $e((e.parentNode || {}).firstChild, e)
                },
                children: function (e) {
                    return $e(e.firstChild)
                },
                contents: function (e) {
                    return f(e, "iframe") ? e.contentDocument : (f(e, "template") && (e = e.content || e), Ne.merge([], e.childNodes))
                }
            }, function (e, t) {
                Ne.fn[e] = function (n, r) {
                    var i = Ne.map(this, t, n);
                    return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = Ne.filter(r, i)), this.length > 1 && (Me[e] || Ne.uniqueSort(i), Pe.test(e) && i.reverse()), this.pushStack(i)
                }
            });
            var Ie = /[^\x20\t\r\n\f]+/g;
            Ne.Callbacks = function (e) {
                e = "string" == typeof e ? h(e) : Ne.extend({}, e);
                var t, n, r, i, o = [],
                    a = [],
                    s = -1,
                    u = function () {
                        for (i = i || e.once, r = t = !0; a.length; s = -1)
                            for (n = a.shift(); ++s < o.length;) !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length, n = !1);
                        e.memory || (n = !1), t = !1, i && (o = n ? [] : "")
                    },
                    c = {
                        add: function () {
                            return o && (n && !t && (s = o.length - 1, a.push(n)), function t(n) {
                                Ne.each(n, function (n, r) {
                                    ke(r) ? e.unique && c.has(r) || o.push(r) : r && r.length && "string" !== l(r) && t(r)
                                })
                            }(arguments), n && !t && u()), this
                        },
                        remove: function () {
                            return Ne.each(arguments, function (e, t) {
                                for (var n;
                                    (n = Ne.inArray(t, o, n)) > -1;) o.splice(n, 1), n <= s && s--
                            }), this
                        },
                        has: function (e) {
                            return e ? Ne.inArray(e, o) > -1 : o.length > 0
                        },
                        empty: function () {
                            return o && (o = []), this
                        },
                        disable: function () {
                            return i = a = [], o = n = "", this
                        },
                        disabled: function () {
                            return !o
                        },
                        lock: function () {
                            return i = a = [], n || t || (o = n = ""), this
                        },
                        locked: function () {
                            return !!i
                        },
                        fireWith: function (e, n) {
                            return i || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || u()), this
                        },
                        fire: function () {
                            return c.fireWith(this, arguments), this
                        },
                        fired: function () {
                            return !!r
                        }
                    };
                return c
            }, Ne.extend({
                Deferred: function (e) {
                    var t = [
                            ["notify", "progress", Ne.Callbacks("memory"), Ne.Callbacks("memory"), 2],
                            ["resolve", "done", Ne.Callbacks("once memory"), Ne.Callbacks("once memory"), 0, "resolved"],
                            ["reject", "fail", Ne.Callbacks("once memory"), Ne.Callbacks("once memory"), 1, "rejected"]
                        ],
                        n = "pending",
                        r = {
                            state: function () {
                                return n
                            },
                            always: function () {
                                return i.done(arguments).fail(arguments), this
                            },
                            catch: function (e) {
                                return r.then(null, e)
                            },
                            pipe: function () {
                                var e = arguments;
                                return Ne.Deferred(function (n) {
                                    Ne.each(t, function (t, r) {
                                        var o = ke(e[r[4]]) && e[r[4]];
                                        i[r[1]](function () {
                                            var e = o && o.apply(this, arguments);
                                            e && ke(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this, o ? [e] : arguments)
                                        })
                                    }), e = null
                                }).promise()
                            },
                            then: function (e, n, r) {
                                function i(e, t, n, r) {
                                    return function () {
                                        var u = this,
                                            l = arguments,
                                            c = function () {
                                                var a, c;
                                                if (!(e < s)) {
                                                    if ((a = n.apply(u, l)) === t.promise()) throw new TypeError("Thenable self-resolution");
                                                    c = a && ("object" == (void 0 === a ? "undefined" : o(a)) || "function" == typeof a) && a.then, ke(c) ? r ? c.call(a, i(s, t, g, r), i(s, t, v, r)) : (s++, c.call(a, i(s, t, g, r), i(s, t, v, r), i(s, t, g, t.notifyWith))) : (n !== g && (u = void 0, l = [a]), (r || t.resolveWith)(u, l))
                                                }
                                            },
                                            f = r ? c : function () {
                                                try {
                                                    c()
                                                } catch (r) {
                                                    Ne.Deferred.exceptionHook && Ne.Deferred.exceptionHook(r, f.stackTrace), e + 1 >= s && (n !== v && (u = void 0, l = [r]), t.rejectWith(u, l))
                                                }
                                            };
                                        e ? f() : (Ne.Deferred.getStackHook && (f.stackTrace = Ne.Deferred.getStackHook()), a.setTimeout(f))
                                    }
                                }
                                var s = 0;
                                return Ne.Deferred(function (o) {
                                    t[0][3].add(i(0, o, ke(r) ? r : g, o.notifyWith)), t[1][3].add(i(0, o, ke(e) ? e : g)), t[2][3].add(i(0, o, ke(n) ? n : v))
                                }).promise()
                            },
                            promise: function (e) {
                                return null != e ? Ne.extend(e, r) : r
                            }
                        },
                        i = {};
                    return Ne.each(t, function (e, o) {
                        var a = o[2],
                            s = o[5];
                        r[o[1]] = a.add, s && a.add(function () {
                            n = s
                        }, t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock), a.add(o[3].fire), i[o[0]] = function () {
                            return i[o[0] + "With"](this === i ? void 0 : this, arguments), this
                        }, i[o[0] + "With"] = a.fireWith
                    }), r.promise(i), e && e.call(i, i), i
                },
                when: function (e) {
                    var t = arguments.length,
                        n = t,
                        r = Array(n),
                        i = he.call(arguments),
                        o = Ne.Deferred(),
                        a = function (e) {
                            return function (n) {
                                r[e] = this, i[e] = arguments.length > 1 ? he.call(arguments) : n, --t || o.resolveWith(r, i)
                            }
                        };
                    if (t <= 1 && (m(e, o.done(a(n)).resolve, o.reject, !t), "pending" === o.state() || ke(i[n] && i[n].then))) return o.then();
                    for (; n--;) m(i[n], a(n), o.reject);
                    return o.promise()
                }
            });
            var Re = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
            Ne.Deferred.exceptionHook = function (e, t) {
                a.console && a.console.warn && e && Re.test(e.name) && a.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
            }, Ne.readyException = function (e) {
                a.setTimeout(function () {
                    throw e
                })
            };
            var Be = Ne.Deferred();
            Ne.fn.ready = function (e) {
                return Be.then(e).catch(function (e) {
                    Ne.readyException(e)
                }), this
            }, Ne.extend({
                isReady: !1,
                readyWait: 1,
                ready: function (e) {
                    (!0 === e ? --Ne.readyWait : Ne.isReady) || (Ne.isReady = !0, !0 !== e && --Ne.readyWait > 0 || Be.resolveWith(de, [Ne]))
                }
            }), Ne.ready.then = Be.then, "complete" === de.readyState || "loading" !== de.readyState && !de.documentElement.doScroll ? a.setTimeout(Ne.ready) : (de.addEventListener("DOMContentLoaded", y), a.addEventListener("load", y));
            var We = function e(t, n, r, i, o, a, s) {
                    var u = 0,
                        c = t.length,
                        f = null == r;
                    if ("object" === l(r)) {
                        o = !0;
                        for (u in r) e(t, n, u, r[u], !0, a, s)
                    } else if (void 0 !== i && (o = !0, ke(i) || (s = !0), f && (s ? (n.call(t, i), n = null) : (f = n, n = function (e, t, n) {
                            return f.call(Ne(e), n)
                        })), n))
                        for (; u < c; u++) n(t[u], r, s ? i : i.call(t[u], u, n(t[u], r)));
                    return o ? t : f ? n.call(t) : c ? n(t[0], r) : a
                },
                Fe = /^-ms-/,
                _e = /-([a-z])/g,
                ze = function (e) {
                    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
                };
            w.uid = 1, w.prototype = {
                cache: function (e) {
                    var t = e[this.expando];
                    return t || (t = {}, ze(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                        value: t,
                        configurable: !0
                    }))), t
                },
                set: function (e, t, n) {
                    var r, i = this.cache(e);
                    if ("string" == typeof t) i[b(t)] = n;
                    else
                        for (r in t) i[b(r)] = t[r];
                    return i
                },
                get: function (e, t) {
                    return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][b(t)]
                },
                access: function (e, t, n) {
                    return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
                },
                remove: function (e, t) {
                    var n, r = e[this.expando];
                    if (void 0 !== r) {
                        if (void 0 !== t) {
                            n = (t = Array.isArray(t) ? t.map(b) : (t = b(t)) in r ? [t] : t.match(Ie) || []).length;
                            for (; n--;) delete r[t[n]]
                        }(void 0 === t || Ne.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                    }
                },
                hasData: function (e) {
                    var t = e[this.expando];
                    return void 0 !== t && !Ne.isEmptyObject(t)
                }
            };
            var Ue = new w,
                Xe = new w,
                Ve = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                Ge = /[A-Z]/g;
            Ne.extend({
                hasData: function (e) {
                    return Xe.hasData(e) || Ue.hasData(e)
                },
                data: function (e, t, n) {
                    return Xe.access(e, t, n)
                },
                removeData: function (e, t) {
                    Xe.remove(e, t)
                },
                _data: function (e, t, n) {
                    return Ue.access(e, t, n)
                },
                _removeData: function (e, t) {
                    Ue.remove(e, t)
                }
            }), Ne.fn.extend({
                data: function (e, t) {
                    var n, r, i, a = this[0],
                        s = a && a.attributes;
                    if (void 0 === e) {
                        if (this.length && (i = Xe.get(a), 1 === a.nodeType && !Ue.get(a, "hasDataAttrs"))) {
                            for (n = s.length; n--;) s[n] && 0 === (r = s[n].name).indexOf("data-") && (r = b(r.slice(5)), T(a, r, i[r]));
                            Ue.set(a, "hasDataAttrs", !0)
                        }
                        return i
                    }
                    return "object" == (void 0 === e ? "undefined" : o(e)) ? this.each(function () {
                        Xe.set(this, e)
                    }) : We(this, function (t) {
                        var n;
                        if (a && void 0 === t) {
                            if (void 0 !== (n = Xe.get(a, e))) return n;
                            if (void 0 !== (n = T(a, e))) return n
                        } else this.each(function () {
                            Xe.set(this, e, t)
                        })
                    }, null, t, arguments.length > 1, null, !0)
                },
                removeData: function (e) {
                    return this.each(function () {
                        Xe.remove(this, e)
                    })
                }
            }), Ne.extend({
                queue: function (e, t, n) {
                    var r;
                    if (e) return t = (t || "fx") + "queue", r = Ue.get(e, t), n && (!r || Array.isArray(n) ? r = Ue.access(e, t, Ne.makeArray(n)) : r.push(n)), r || []
                },
                dequeue: function (e, t) {
                    t = t || "fx";
                    var n = Ne.queue(e, t),
                        r = n.length,
                        i = n.shift(),
                        o = Ne._queueHooks(e, t),
                        a = function () {
                            Ne.dequeue(e, t)
                        };
                    "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
                },
                _queueHooks: function (e, t) {
                    var n = t + "queueHooks";
                    return Ue.get(e, n) || Ue.access(e, n, {
                        empty: Ne.Callbacks("once memory").add(function () {
                            Ue.remove(e, [t + "queue", n])
                        })
                    })
                }
            }), Ne.fn.extend({
                queue: function (e, t) {
                    var n = 2;
                    return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? Ne.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                        var n = Ne.queue(this, e, t);
                        Ne._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && Ne.dequeue(this, e)
                    })
                },
                dequeue: function (e) {
                    return this.each(function () {
                        Ne.dequeue(this, e)
                    })
                },
                clearQueue: function (e) {
                    return this.queue(e || "fx", [])
                },
                promise: function (e, t) {
                    var n, r = 1,
                        i = Ne.Deferred(),
                        o = this,
                        a = this.length,
                        s = function () {
                            --r || i.resolveWith(o, [o])
                        };
                    for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = Ue.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
                    return s(), i.promise(t)
                }
            });
            var Ye = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                Qe = new RegExp("^(?:([+-])=|)(" + Ye + ")([a-z%]*)$", "i"),
                Je = ["Top", "Right", "Bottom", "Left"],
                Ke = function (e, t) {
                    return "none" === (e = t || e).style.display || "" === e.style.display && Ne.contains(e.ownerDocument, e) && "none" === Ne.css(e, "display")
                },
                Ze = function (e, t, n, r) {
                    var i, o, a = {};
                    for (o in t) a[o] = e.style[o], e.style[o] = t[o];
                    i = n.apply(e, r || []);
                    for (o in t) e.style[o] = a[o];
                    return i
                },
                et = {};
            Ne.fn.extend({
                show: function () {
                    return S(this, !0)
                },
                hide: function () {
                    return S(this)
                },
                toggle: function (e) {
                    return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                        Ke(this) ? Ne(this).show() : Ne(this).hide()
                    })
                }
            });
            var tt = /^(?:checkbox|radio)$/i,
                nt = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
                rt = /^$|^module$|\/(?:java|ecma)script/i,
                it = {
                    option: [1, "<select multiple='multiple'>", "</select>"],
                    thead: [1, "<table>", "</table>"],
                    col: [2, "<table><colgroup>", "</colgroup></table>"],
                    tr: [2, "<table><tbody>", "</tbody></table>"],
                    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                    _default: [0, "", ""]
                };
            it.optgroup = it.option, it.tbody = it.tfoot = it.colgroup = it.caption = it.thead, it.th = it.td;
            var ot = /<|&#?\w+;/;
            ! function () {
                var e = de.createDocumentFragment().appendChild(de.createElement("div")),
                    t = de.createElement("input");
                t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), Te.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", Te.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
            }();
            var at = de.documentElement,
                st = /^key/,
                ut = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
                lt = /^([^.]*)(?:\.(.+)|)/;
            Ne.event = {
                global: {},
                add: function (e, t, n, r, i) {
                    var o, a, s, u, l, c, f, d, p, h, g, v = Ue.get(e);
                    if (v)
                        for (n.handler && (n = (o = n).handler, i = o.selector), i && Ne.find.matchesSelector(at, i), n.guid || (n.guid = Ne.guid++), (u = v.events) || (u = v.events = {}), (a = v.handle) || (a = v.handle = function (t) {
                                return void 0 !== Ne && Ne.event.triggered !== t.type ? Ne.event.dispatch.apply(e, arguments) : void 0
                            }), l = (t = (t || "").match(Ie) || [""]).length; l--;) p = g = (s = lt.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), p && (f = Ne.event.special[p] || {}, p = (i ? f.delegateType : f.bindType) || p, f = Ne.event.special[p] || {}, c = Ne.extend({
                            type: p,
                            origType: g,
                            data: r,
                            handler: n,
                            guid: n.guid,
                            selector: i,
                            needsContext: i && Ne.expr.match.needsContext.test(i),
                            namespace: h.join(".")
                        }, o), (d = u[p]) || ((d = u[p] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(p, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? d.splice(d.delegateCount++, 0, c) : d.push(c), Ne.event.global[p] = !0)
                },
                remove: function (e, t, n, r, i) {
                    var o, a, s, u, l, c, f, d, p, h, g, v = Ue.hasData(e) && Ue.get(e);
                    if (v && (u = v.events)) {
                        for (l = (t = (t || "").match(Ie) || [""]).length; l--;)
                            if (s = lt.exec(t[l]) || [], p = g = s[1], h = (s[2] || "").split(".").sort(), p) {
                                for (f = Ne.event.special[p] || {}, d = u[p = (r ? f.delegateType : f.bindType) || p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = d.length; o--;) c = d[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (d.splice(o, 1), c.selector && d.delegateCount--, f.remove && f.remove.call(e, c));
                                a && !d.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || Ne.removeEvent(e, p, v.handle), delete u[p])
                            } else
                                for (p in u) Ne.event.remove(e, p + t[l], n, r, !0);
                        Ne.isEmptyObject(u) && Ue.remove(e, "handle events")
                    }
                },
                dispatch: function (e) {
                    var t, n, r, i, o, a, s = Ne.event.fix(e),
                        u = new Array(arguments.length),
                        l = (Ue.get(this, "events") || {})[s.type] || [],
                        c = Ne.event.special[s.type] || {};
                    for (u[0] = s, t = 1; t < arguments.length; t++) u[t] = arguments[t];
                    if (s.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
                        for (a = Ne.event.handlers.call(this, s, l), t = 0;
                            (i = a[t++]) && !s.isPropagationStopped();)
                            for (s.currentTarget = i.elem, n = 0;
                                (o = i.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, void 0 !== (r = ((Ne.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u)) && !1 === (s.result = r) && (s.preventDefault(), s.stopPropagation()));
                        return c.postDispatch && c.postDispatch.call(this, s), s.result
                    }
                },
                handlers: function (e, t) {
                    var n, r, i, o, a, s = [],
                        u = t.delegateCount,
                        l = e.target;
                    if (u && l.nodeType && !("click" === e.type && e.button >= 1))
                        for (; l !== this; l = l.parentNode || this)
                            if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                                for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? Ne(i, this).index(l) > -1 : Ne.find(i, this, null, [l]).length), a[i] && o.push(r);
                                o.length && s.push({
                                    elem: l,
                                    handlers: o
                                })
                            } return l = this, u < t.length && s.push({
                        elem: l,
                        handlers: t.slice(u)
                    }), s
                },
                addProp: function (e, t) {
                    Object.defineProperty(Ne.Event.prototype, e, {
                        enumerable: !0,
                        configurable: !0,
                        get: ke(t) ? function () {
                            if (this.originalEvent) return t(this.originalEvent)
                        } : function () {
                            if (this.originalEvent) return this.originalEvent[e]
                        },
                        set: function (t) {
                            Object.defineProperty(this, e, {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: t
                            })
                        }
                    })
                },
                fix: function (e) {
                    return e[Ne.expando] ? e : new Ne.Event(e)
                },
                special: {
                    load: {
                        noBubble: !0
                    },
                    focus: {
                        trigger: function () {
                            if (this !== L() && this.focus) return this.focus(), !1
                        },
                        delegateType: "focusin"
                    },
                    blur: {
                        trigger: function () {
                            if (this === L() && this.blur) return this.blur(), !1
                        },
                        delegateType: "focusout"
                    },
                    click: {
                        trigger: function () {
                            if ("checkbox" === this.type && this.click && f(this, "input")) return this.click(), !1
                        },
                        _default: function (e) {
                            return f(e.target, "a")
                        }
                    },
                    beforeunload: {
                        postDispatch: function (e) {
                            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                        }
                    }
                }
            }, Ne.removeEvent = function (e, t, n) {
                e.removeEventListener && e.removeEventListener(t, n)
            }, Ne.Event = function (e, t) {
                if (!(this instanceof Ne.Event)) return new Ne.Event(e, t);
                e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? j : $, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && Ne.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[Ne.expando] = !0
            }, Ne.Event.prototype = {
                constructor: Ne.Event,
                isDefaultPrevented: $,
                isPropagationStopped: $,
                isImmediatePropagationStopped: $,
                isSimulated: !1,
                preventDefault: function () {
                    var e = this.originalEvent;
                    this.isDefaultPrevented = j, e && !this.isSimulated && e.preventDefault()
                },
                stopPropagation: function () {
                    var e = this.originalEvent;
                    this.isPropagationStopped = j, e && !this.isSimulated && e.stopPropagation()
                },
                stopImmediatePropagation: function () {
                    var e = this.originalEvent;
                    this.isImmediatePropagationStopped = j, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
                }
            }, Ne.each({
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: function (e) {
                    var t = e.button;
                    return null == e.which && st.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && ut.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
                }
            }, Ne.event.addProp), Ne.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            }, function (e, t) {
                Ne.event.special[e] = {
                    delegateType: t,
                    bindType: t,
                    handle: function (e) {
                        var n, r = this,
                            i = e.relatedTarget,
                            o = e.handleObj;
                        return i && (i === r || Ne.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
                    }
                }
            }), Ne.fn.extend({
                on: function (e, t, n, r) {
                    return q(this, e, t, n, r)
                },
                one: function (e, t, n, r) {
                    return q(this, e, t, n, r, 1)
                },
                off: function (e, t, n) {
                    var r, i;
                    if (e && e.preventDefault && e.handleObj) return r = e.handleObj, Ne(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                    if ("object" == (void 0 === e ? "undefined" : o(e))) {
                        for (i in e) this.off(i, t, e[i]);
                        return this
                    }
                    return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = $), this.each(function () {
                        Ne.event.remove(this, e, n, t)
                    })
                }
            });
            var ct = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
                ft = /<script|<style|<link/i,
                dt = /checked\s*(?:[^=]|=\s*.checked.)/i,
                pt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
            Ne.extend({
                htmlPrefilter: function (e) {
                    return e.replace(ct, "<$1></$2>")
                },
                clone: function (e, t, n) {
                    var r, i, o, a, s = e.cloneNode(!0),
                        u = Ne.contains(e.ownerDocument, e);
                    if (!(Te.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || Ne.isXMLDoc(e)))
                        for (a = N(s), r = 0, i = (o = N(e)).length; r < i; r++) I(o[r], a[r]);
                    if (t)
                        if (n)
                            for (o = o || N(e), a = a || N(s), r = 0, i = o.length; r < i; r++) M(o[r], a[r]);
                        else M(e, s);
                    return (a = N(s, "script")).length > 0 && A(a, !u && N(e, "script")), s
                },
                cleanData: function (e) {
                    for (var t, n, r, i = Ne.event.special, o = 0; void 0 !== (n = e[o]); o++)
                        if (ze(n)) {
                            if (t = n[Ue.expando]) {
                                if (t.events)
                                    for (r in t.events) i[r] ? Ne.event.remove(n, r) : Ne.removeEvent(n, r, t.handle);
                                n[Ue.expando] = void 0
                            }
                            n[Xe.expando] && (n[Xe.expando] = void 0)
                        }
                }
            }), Ne.fn.extend({
                detach: function (e) {
                    return B(this, e, !0)
                },
                remove: function (e) {
                    return B(this, e)
                },
                text: function (e) {
                    return We(this, function (e) {
                        return void 0 === e ? Ne.text(this) : this.empty().each(function () {
                            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                        })
                    }, null, e, arguments.length)
                },
                append: function () {
                    return R(this, arguments, function (e) {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || O(this, e).appendChild(e)
                    })
                },
                prepend: function () {
                    return R(this, arguments, function (e) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var t = O(this, e);
                            t.insertBefore(e, t.firstChild)
                        }
                    })
                },
                before: function () {
                    return R(this, arguments, function (e) {
                        this.parentNode && this.parentNode.insertBefore(e, this)
                    })
                },
                after: function () {
                    return R(this, arguments, function (e) {
                        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                    })
                },
                empty: function () {
                    for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (Ne.cleanData(N(e, !1)), e.textContent = "");
                    return this
                },
                clone: function (e, t) {
                    return e = null != e && e, t = null == t ? e : t, this.map(function () {
                        return Ne.clone(this, e, t)
                    })
                },
                html: function (e) {
                    return We(this, function (e) {
                        var t = this[0] || {},
                            n = 0,
                            r = this.length;
                        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                        if ("string" == typeof e && !ft.test(e) && !it[(nt.exec(e) || ["", ""])[1].toLowerCase()]) {
                            e = Ne.htmlPrefilter(e);
                            try {
                                for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (Ne.cleanData(N(t, !1)), t.innerHTML = e);
                                t = 0
                            } catch (e) {}
                        }
                        t && this.empty().append(e)
                    }, null, e, arguments.length)
                },
                replaceWith: function () {
                    var e = [];
                    return R(this, arguments, function (t) {
                        var n = this.parentNode;
                        Ne.inArray(this, e) < 0 && (Ne.cleanData(N(this)), n && n.replaceChild(t, this))
                    }, e)
                }
            }), Ne.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, function (e, t) {
                Ne.fn[e] = function (e) {
                    for (var n, r = [], i = Ne(e), o = i.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), Ne(i[a])[t](n), ve.apply(r, n.get());
                    return this.pushStack(r)
                }
            });
            var ht = new RegExp("^(" + Ye + ")(?!px)[a-z%]+$", "i"),
                gt = function (e) {
                    var t = e.ownerDocument.defaultView;
                    return t && t.opener || (t = a), t.getComputedStyle(e)
                },
                vt = new RegExp(Je.join("|"), "i");
            ! function () {
                function e() {
                    if (l) {
                        u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", at.appendChild(u).appendChild(l);
                        var e = a.getComputedStyle(l);
                        n = "1%" !== e.top, s = 12 === t(e.marginLeft), l.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), l.style.position = "absolute", i = 36 === l.offsetWidth || "absolute", at.removeChild(u), l = null
                    }
                }

                function t(e) {
                    return Math.round(parseFloat(e))
                }
                var n, r, i, o, s, u = de.createElement("div"),
                    l = de.createElement("div");
                l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", Te.clearCloneStyle = "content-box" === l.style.backgroundClip, Ne.extend(Te, {
                    boxSizingReliable: function () {
                        return e(), r
                    },
                    pixelBoxStyles: function () {
                        return e(), o
                    },
                    pixelPosition: function () {
                        return e(), n
                    },
                    reliableMarginLeft: function () {
                        return e(), s
                    },
                    scrollboxSize: function () {
                        return e(), i
                    }
                }))
            }();
            var mt = /^(none|table(?!-c[ea]).+)/,
                yt = /^--/,
                xt = {
                    position: "absolute",
                    visibility: "hidden",
                    display: "block"
                },
                bt = {
                    letterSpacing: "0",
                    fontWeight: "400"
                },
                wt = ["Webkit", "Moz", "ms"],
                Ct = de.createElement("div").style;
            Ne.extend({
                cssHooks: {
                    opacity: {
                        get: function (e, t) {
                            if (t) {
                                var n = W(e, "opacity");
                                return "" === n ? "1" : n
                            }
                        }
                    }
                },
                cssNumber: {
                    animationIterationCount: !0,
                    columnCount: !0,
                    fillOpacity: !0,
                    flexGrow: !0,
                    flexShrink: !0,
                    fontWeight: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {},
                style: function (e, t, n, r) {
                    if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                        var i, a, s, u = b(t),
                            l = yt.test(t),
                            c = e.style;
                        if (l || (t = z(u)), s = Ne.cssHooks[t] || Ne.cssHooks[u], void 0 === n) return s && "get" in s && void 0 !== (i = s.get(e, !1, r)) ? i : c[t];
                        "string" == (a = void 0 === n ? "undefined" : o(n)) && (i = Qe.exec(n)) && i[1] && (n = k(e, t, i), a = "number"), null != n && n === n && ("number" === a && (n += i && i[3] || (Ne.cssNumber[u] ? "" : "px")), Te.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, r)) || (l ? c.setProperty(t, n) : c[t] = n))
                    }
                },
                css: function (e, t, n, r) {
                    var i, o, a, s = b(t);
                    return yt.test(t) || (t = z(s)), (a = Ne.cssHooks[t] || Ne.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = W(e, t, r)), "normal" === i && t in bt && (i = bt[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
                }
            }), Ne.each(["height", "width"], function (e, t) {
                Ne.cssHooks[t] = {
                    get: function (e, n, r) {
                        if (n) return !mt.test(Ne.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? V(e, t, r) : Ze(e, xt, function () {
                            return V(e, t, r)
                        })
                    },
                    set: function (e, n, r) {
                        var i, o = gt(e),
                            a = "border-box" === Ne.css(e, "boxSizing", !1, o),
                            s = r && X(e, t, r, a, o);
                        return a && Te.scrollboxSize() === o.position && (s -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - X(e, t, "border", !1, o) - .5)), s && (i = Qe.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = Ne.css(e, t)), U(e, n, s)
                    }
                }
            }), Ne.cssHooks.marginLeft = F(Te.reliableMarginLeft, function (e, t) {
                if (t) return (parseFloat(W(e, "marginLeft")) || e.getBoundingClientRect().left - Ze(e, {
                    marginLeft: 0
                }, function () {
                    return e.getBoundingClientRect().left
                })) + "px"
            }), Ne.each({
                margin: "",
                padding: "",
                border: "Width"
            }, function (e, t) {
                Ne.cssHooks[e + t] = {
                    expand: function (n) {
                        for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + Je[r] + t] = o[r] || o[r - 2] || o[0];
                        return i
                    }
                }, "margin" !== e && (Ne.cssHooks[e + t].set = U)
            }), Ne.fn.extend({
                css: function (e, t) {
                    return We(this, function (e, t, n) {
                        var r, i, o = {},
                            a = 0;
                        if (Array.isArray(t)) {
                            for (r = gt(e), i = t.length; a < i; a++) o[t[a]] = Ne.css(e, t[a], !1, r);
                            return o
                        }
                        return void 0 !== n ? Ne.style(e, t, n) : Ne.css(e, t)
                    }, e, t, arguments.length > 1)
                }
            }), Ne.Tween = G, G.prototype = {
                constructor: G,
                init: function (e, t, n, r, i, o) {
                    this.elem = e, this.prop = n, this.easing = i || Ne.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (Ne.cssNumber[n] ? "" : "px")
                },
                cur: function () {
                    var e = G.propHooks[this.prop];
                    return e && e.get ? e.get(this) : G.propHooks._default.get(this)
                },
                run: function (e) {
                    var t, n = G.propHooks[this.prop];
                    return this.options.duration ? this.pos = t = Ne.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : G.propHooks._default.set(this), this
                }
            }, G.prototype.init.prototype = G.prototype, G.propHooks = {
                _default: {
                    get: function (e) {
                        var t;
                        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = Ne.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                    },
                    set: function (e) {
                        Ne.fx.step[e.prop] ? Ne.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[Ne.cssProps[e.prop]] && !Ne.cssHooks[e.prop] ? e.elem[e.prop] = e.now : Ne.style(e.elem, e.prop, e.now + e.unit)
                    }
                }
            }, G.propHooks.scrollTop = G.propHooks.scrollLeft = {
                set: function (e) {
                    e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                }
            }, Ne.easing = {
                linear: function (e) {
                    return e
                },
                swing: function (e) {
                    return .5 - Math.cos(e * Math.PI) / 2
                },
                _default: "swing"
            }, Ne.fx = G.prototype.init, Ne.fx.step = {};
            var Tt, kt, Et = /^(?:toggle|show|hide)$/,
                St = /queueHooks$/;
            Ne.Animation = Ne.extend(te, {
                    tweeners: {
                        "*": [function (e, t) {
                            var n = this.createTween(e, t);
                            return k(n.elem, e, Qe.exec(t), n), n
                        }]
                    },
                    tweener: function (e, t) {
                        ke(e) ? (t = e, e = ["*"]) : e = e.match(Ie);
                        for (var n, r = 0, i = e.length; r < i; r++) n = e[r], te.tweeners[n] = te.tweeners[n] || [], te.tweeners[n].unshift(t)
                    },
                    prefilters: [Z],
                    prefilter: function (e, t) {
                        t ? te.prefilters.unshift(e) : te.prefilters.push(e)
                    }
                }), Ne.speed = function (e, t, n) {
                    var r = e && "object" == (void 0 === e ? "undefined" : o(e)) ? Ne.extend({}, e) : {
                        complete: n || !n && t || ke(e) && e,
                        duration: e,
                        easing: n && t || t && !ke(t) && t
                    };
                    return Ne.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in Ne.fx.speeds ? r.duration = Ne.fx.speeds[r.duration] : r.duration = Ne.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
                        ke(r.old) && r.old.call(this), r.queue && Ne.dequeue(this, r.queue)
                    }, r
                }, Ne.fn.extend({
                    fadeTo: function (e, t, n, r) {
                        return this.filter(Ke).css("opacity", 0).show().end().animate({
                            opacity: t
                        }, e, n, r)
                    },
                    animate: function (e, t, n, r) {
                        var i = Ne.isEmptyObject(e),
                            o = Ne.speed(t, n, r),
                            a = function () {
                                var t = te(this, Ne.extend({}, e), o);
                                (i || Ue.get(this, "finish")) && t.stop(!0)
                            };
                        return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
                    },
                    stop: function (e, t, n) {
                        var r = function (e) {
                            var t = e.stop;
                            delete e.stop, t(n)
                        };
                        return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
                            var t = !0,
                                i = null != e && e + "queueHooks",
                                o = Ne.timers,
                                a = Ue.get(this);
                            if (i) a[i] && a[i].stop && r(a[i]);
                            else
                                for (i in a) a[i] && a[i].stop && St.test(i) && r(a[i]);
                            for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                            !t && n || Ne.dequeue(this, e)
                        })
                    },
                    finish: function (e) {
                        return !1 !== e && (e = e || "fx"), this.each(function () {
                            var t, n = Ue.get(this),
                                r = n[e + "queue"],
                                i = n[e + "queueHooks"],
                                o = Ne.timers,
                                a = r ? r.length : 0;
                            for (n.finish = !0, Ne.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                            for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                            delete n.finish
                        })
                    }
                }), Ne.each(["toggle", "show", "hide"], function (e, t) {
                    var n = Ne.fn[t];
                    Ne.fn[t] = function (e, r, i) {
                        return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(J(t, !0), e, r, i)
                    }
                }), Ne.each({
                    slideDown: J("show"),
                    slideUp: J("hide"),
                    slideToggle: J("toggle"),
                    fadeIn: {
                        opacity: "show"
                    },
                    fadeOut: {
                        opacity: "hide"
                    },
                    fadeToggle: {
                        opacity: "toggle"
                    }
                }, function (e, t) {
                    Ne.fn[e] = function (e, n, r) {
                        return this.animate(t, e, n, r)
                    }
                }), Ne.timers = [], Ne.fx.tick = function () {
                    var e, t = 0,
                        n = Ne.timers;
                    for (Tt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
                    n.length || Ne.fx.stop(), Tt = void 0
                }, Ne.fx.timer = function (e) {
                    Ne.timers.push(e), Ne.fx.start()
                }, Ne.fx.interval = 13, Ne.fx.start = function () {
                    kt || (kt = !0, Y())
                }, Ne.fx.stop = function () {
                    kt = null
                }, Ne.fx.speeds = {
                    slow: 600,
                    fast: 200,
                    _default: 400
                }, Ne.fn.delay = function (e, t) {
                    return e = Ne.fx ? Ne.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
                        var r = a.setTimeout(t, e);
                        n.stop = function () {
                            a.clearTimeout(r)
                        }
                    })
                },
                function () {
                    var e = de.createElement("input"),
                        t = de.createElement("select").appendChild(de.createElement("option"));
                    e.type = "checkbox", Te.checkOn = "" !== e.value, Te.optSelected = t.selected, (e = de.createElement("input")).value = "t", e.type = "radio", Te.radioValue = "t" === e.value
                }();
            var Nt, At = Ne.expr.attrHandle;
            Ne.fn.extend({
                attr: function (e, t) {
                    return We(this, Ne.attr, e, t, arguments.length > 1)
                },
                removeAttr: function (e) {
                    return this.each(function () {
                        Ne.removeAttr(this, e)
                    })
                }
            }), Ne.extend({
                attr: function (e, t, n) {
                    var r, i, o = e.nodeType;
                    if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? Ne.prop(e, t, n) : (1 === o && Ne.isXMLDoc(e) || (i = Ne.attrHooks[t.toLowerCase()] || (Ne.expr.match.bool.test(t) ? Nt : void 0)), void 0 !== n ? null === n ? void Ne.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = Ne.find.attr(e, t)) ? void 0 : r)
                },
                attrHooks: {
                    type: {
                        set: function (e, t) {
                            if (!Te.radioValue && "radio" === t && f(e, "input")) {
                                var n = e.value;
                                return e.setAttribute("type", t), n && (e.value = n), t
                            }
                        }
                    }
                },
                removeAttr: function (e, t) {
                    var n, r = 0,
                        i = t && t.match(Ie);
                    if (i && 1 === e.nodeType)
                        for (; n = i[r++];) e.removeAttribute(n)
                }
            }), Nt = {
                set: function (e, t, n) {
                    return !1 === t ? Ne.removeAttr(e, n) : e.setAttribute(n, n), n
                }
            }, Ne.each(Ne.expr.match.bool.source.match(/\w+/g), function (e, t) {
                var n = At[t] || Ne.find.attr;
                At[t] = function (e, t, r) {
                    var i, o, a = t.toLowerCase();
                    return r || (o = At[a], At[a] = i, i = null != n(e, t, r) ? a : null, At[a] = o), i
                }
            });
            var Dt = /^(?:input|select|textarea|button)$/i,
                jt = /^(?:a|area)$/i;
            Ne.fn.extend({
                prop: function (e, t) {
                    return We(this, Ne.prop, e, t, arguments.length > 1)
                },
                removeProp: function (e) {
                    return this.each(function () {
                        delete this[Ne.propFix[e] || e]
                    })
                }
            }), Ne.extend({
                prop: function (e, t, n) {
                    var r, i, o = e.nodeType;
                    if (3 !== o && 8 !== o && 2 !== o) return 1 === o && Ne.isXMLDoc(e) || (t = Ne.propFix[t] || t, i = Ne.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
                },
                propHooks: {
                    tabIndex: {
                        get: function (e) {
                            var t = Ne.find.attr(e, "tabindex");
                            return t ? parseInt(t, 10) : Dt.test(e.nodeName) || jt.test(e.nodeName) && e.href ? 0 : -1
                        }
                    }
                },
                propFix: {
                    for: "htmlFor",
                    class: "className"
                }
            }), Te.optSelected || (Ne.propHooks.selected = {
                get: function (e) {
                    var t = e.parentNode;
                    return t && t.parentNode && t.parentNode.selectedIndex, null
                },
                set: function (e) {
                    var t = e.parentNode;
                    t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
                }
            }), Ne.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
                Ne.propFix[this.toLowerCase()] = this
            }), Ne.fn.extend({
                addClass: function (e) {
                    var t, n, r, i, o, a, s, u = 0;
                    if (ke(e)) return this.each(function (t) {
                        Ne(this).addClass(e.call(this, t, re(this)))
                    });
                    if ((t = ie(e)).length)
                        for (; n = this[u++];)
                            if (i = re(n), r = 1 === n.nodeType && " " + ne(i) + " ") {
                                for (a = 0; o = t[a++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                                i !== (s = ne(r)) && n.setAttribute("class", s)
                            } return this
                },
                removeClass: function (e) {
                    var t, n, r, i, o, a, s, u = 0;
                    if (ke(e)) return this.each(function (t) {
                        Ne(this).removeClass(e.call(this, t, re(this)))
                    });
                    if (!arguments.length) return this.attr("class", "");
                    if ((t = ie(e)).length)
                        for (; n = this[u++];)
                            if (i = re(n), r = 1 === n.nodeType && " " + ne(i) + " ") {
                                for (a = 0; o = t[a++];)
                                    for (; r.indexOf(" " + o + " ") > -1;) r = r.replace(" " + o + " ", " ");
                                i !== (s = ne(r)) && n.setAttribute("class", s)
                            } return this
                },
                toggleClass: function (e, t) {
                    var n = void 0 === e ? "undefined" : o(e),
                        r = "string" === n || Array.isArray(e);
                    return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : ke(e) ? this.each(function (n) {
                        Ne(this).toggleClass(e.call(this, n, re(this), t), t)
                    }) : this.each(function () {
                        var t, i, o, a;
                        if (r)
                            for (i = 0, o = Ne(this), a = ie(e); t = a[i++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                        else void 0 !== e && "boolean" !== n || ((t = re(this)) && Ue.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Ue.get(this, "__className__") || ""))
                    })
                },
                hasClass: function (e) {
                    var t, n, r = 0;
                    for (t = " " + e + " "; n = this[r++];)
                        if (1 === n.nodeType && (" " + ne(re(n)) + " ").indexOf(t) > -1) return !0;
                    return !1
                }
            });
            var $t = /\r/g;
            Ne.fn.extend({
                val: function (e) {
                    var t, n, r, i = this[0];
                    return arguments.length ? (r = ke(e), this.each(function (n) {
                        var i;
                        1 === this.nodeType && (null == (i = r ? e.call(this, n, Ne(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = Ne.map(i, function (e) {
                            return null == e ? "" : e + ""
                        })), (t = Ne.valHooks[this.type] || Ne.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                    })) : i ? (t = Ne.valHooks[i.type] || Ne.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace($t, "") : null == n ? "" : n : void 0
                }
            }), Ne.extend({
                valHooks: {
                    option: {
                        get: function (e) {
                            var t = Ne.find.attr(e, "value");
                            return null != t ? t : ne(Ne.text(e))
                        }
                    },
                    select: {
                        get: function (e) {
                            var t, n, r, i = e.options,
                                o = e.selectedIndex,
                                a = "select-one" === e.type,
                                s = a ? null : [],
                                u = a ? o + 1 : i.length;
                            for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                                if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !f(n.parentNode, "optgroup"))) {
                                    if (t = Ne(n).val(), a) return t;
                                    s.push(t)
                                } return s
                        },
                        set: function (e, t) {
                            for (var n, r, i = e.options, o = Ne.makeArray(t), a = i.length; a--;)((r = i[a]).selected = Ne.inArray(Ne.valHooks.option.get(r), o) > -1) && (n = !0);
                            return n || (e.selectedIndex = -1), o
                        }
                    }
                }
            }), Ne.each(["radio", "checkbox"], function () {
                Ne.valHooks[this] = {
                    set: function (e, t) {
                        if (Array.isArray(t)) return e.checked = Ne.inArray(Ne(e).val(), t) > -1
                    }
                }, Te.checkOn || (Ne.valHooks[this].get = function (e) {
                    return null === e.getAttribute("value") ? "on" : e.value
                })
            }), Te.focusin = "onfocusin" in a;
            var Lt = /^(?:focusinfocus|focusoutblur)$/,
                qt = function (e) {
                    e.stopPropagation()
                };
            Ne.extend(Ne.event, {
                trigger: function (e, t, n, r) {
                    var i, s, u, l, c, f, d, p, h = [n || de],
                        g = be.call(e, "type") ? e.type : e,
                        v = be.call(e, "namespace") ? e.namespace.split(".") : [];
                    if (s = p = u = n = n || de, 3 !== n.nodeType && 8 !== n.nodeType && !Lt.test(g + Ne.event.triggered) && (g.indexOf(".") > -1 && (g = (v = g.split(".")).shift(), v.sort()), c = g.indexOf(":") < 0 && "on" + g, e = e[Ne.expando] ? e : new Ne.Event(g, "object" == (void 0 === e ? "undefined" : o(e)) && e), e.isTrigger = r ? 2 : 3, e.namespace = v.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : Ne.makeArray(t, [e]), d = Ne.event.special[g] || {}, r || !d.trigger || !1 !== d.trigger.apply(n, t))) {
                        if (!r && !d.noBubble && !Ee(n)) {
                            for (l = d.delegateType || g, Lt.test(l + g) || (s = s.parentNode); s; s = s.parentNode) h.push(s), u = s;
                            u === (n.ownerDocument || de) && h.push(u.defaultView || u.parentWindow || a)
                        }
                        for (i = 0;
                            (s = h[i++]) && !e.isPropagationStopped();) p = s, e.type = i > 1 ? l : d.bindType || g, (f = (Ue.get(s, "events") || {})[e.type] && Ue.get(s, "handle")) && f.apply(s, t), (f = c && s[c]) && f.apply && ze(s) && (e.result = f.apply(s, t), !1 === e.result && e.preventDefault());
                        return e.type = g, r || e.isDefaultPrevented() || d._default && !1 !== d._default.apply(h.pop(), t) || !ze(n) || c && ke(n[g]) && !Ee(n) && ((u = n[c]) && (n[c] = null), Ne.event.triggered = g, e.isPropagationStopped() && p.addEventListener(g, qt), n[g](), e.isPropagationStopped() && p.removeEventListener(g, qt), Ne.event.triggered = void 0, u && (n[c] = u)), e.result
                    }
                },
                simulate: function (e, t, n) {
                    var r = Ne.extend(new Ne.Event, n, {
                        type: e,
                        isSimulated: !0
                    });
                    Ne.event.trigger(r, null, t)
                }
            }), Ne.fn.extend({
                trigger: function (e, t) {
                    return this.each(function () {
                        Ne.event.trigger(e, t, this)
                    })
                },
                triggerHandler: function (e, t) {
                    var n = this[0];
                    if (n) return Ne.event.trigger(e, t, n, !0)
                }
            }), Te.focusin || Ne.each({
                focus: "focusin",
                blur: "focusout"
            }, function (e, t) {
                var n = function (e) {
                    Ne.event.simulate(t, e.target, Ne.event.fix(e))
                };
                Ne.event.special[t] = {
                    setup: function () {
                        var r = this.ownerDocument || this,
                            i = Ue.access(r, t);
                        i || r.addEventListener(e, n, !0), Ue.access(r, t, (i || 0) + 1)
                    },
                    teardown: function () {
                        var r = this.ownerDocument || this,
                            i = Ue.access(r, t) - 1;
                        i ? Ue.access(r, t, i) : (r.removeEventListener(e, n, !0), Ue.remove(r, t))
                    }
                }
            });
            var Ot = a.location,
                Ht = Date.now(),
                Pt = /\?/;
            Ne.parseXML = function (e) {
                var t;
                if (!e || "string" != typeof e) return null;
                try {
                    t = (new a.DOMParser).parseFromString(e, "text/xml")
                } catch (e) {
                    t = void 0
                }
                return t && !t.getElementsByTagName("parsererror").length || Ne.error("Invalid XML: " + e), t
            };
            var Mt = /\[\]$/,
                It = /\r?\n/g,
                Rt = /^(?:submit|button|image|reset|file)$/i,
                Bt = /^(?:input|select|textarea|keygen)/i;
            Ne.param = function (e, t) {
                var n, r = [],
                    i = function (e, t) {
                        var n = ke(t) ? t() : t;
                        r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
                    };
                if (Array.isArray(e) || e.jquery && !Ne.isPlainObject(e)) Ne.each(e, function () {
                    i(this.name, this.value)
                });
                else
                    for (n in e) oe(n, e[n], t, i);
                return r.join("&")
            }, Ne.fn.extend({
                serialize: function () {
                    return Ne.param(this.serializeArray())
                },
                serializeArray: function () {
                    return this.map(function () {
                        var e = Ne.prop(this, "elements");
                        return e ? Ne.makeArray(e) : this
                    }).filter(function () {
                        var e = this.type;
                        return this.name && !Ne(this).is(":disabled") && Bt.test(this.nodeName) && !Rt.test(e) && (this.checked || !tt.test(e))
                    }).map(function (e, t) {
                        var n = Ne(this).val();
                        return null == n ? null : Array.isArray(n) ? Ne.map(n, function (e) {
                            return {
                                name: t.name,
                                value: e.replace(It, "\r\n")
                            }
                        }) : {
                            name: t.name,
                            value: n.replace(It, "\r\n")
                        }
                    }).get()
                }
            });
            var Wt = /%20/g,
                Ft = /#.*$/,
                _t = /([?&])_=[^&]*/,
                zt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                Ut = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
                Xt = /^(?:GET|HEAD)$/,
                Vt = /^\/\//,
                Gt = {},
                Yt = {},
                Qt = "*/".concat("*"),
                Jt = de.createElement("a");
            Jt.href = Ot.href, Ne.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: Ot.href,
                    type: "GET",
                    isLocal: Ut.test(Ot.protocol),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": Qt,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                    },
                    contents: {
                        xml: /\bxml\b/,
                        html: /\bhtml/,
                        json: /\bjson\b/
                    },
                    responseFields: {
                        xml: "responseXML",
                        text: "responseText",
                        json: "responseJSON"
                    },
                    converters: {
                        "* text": String,
                        "text html": !0,
                        "text json": JSON.parse,
                        "text xml": Ne.parseXML
                    },
                    flatOptions: {
                        url: !0,
                        context: !0
                    }
                },
                ajaxSetup: function (e, t) {
                    return t ? ue(ue(e, Ne.ajaxSettings), t) : ue(Ne.ajaxSettings, e)
                },
                ajaxPrefilter: ae(Gt),
                ajaxTransport: ae(Yt),
                ajax: function (e, t) {
                    function n(e, t, n, o) {
                        var u, c, p, h, w, C = t;
                        f || (f = !0, l && a.clearTimeout(l), r = void 0, s = o || "", k.readyState = e > 0 ? 4 : 0, u = e >= 200 && e < 300 || 304 === e, n && (h = le(g, k, n)), h = ce(g, h, k, u), u ? (g.ifModified && ((w = k.getResponseHeader("Last-Modified")) && (Ne.lastModified[i] = w), (w = k.getResponseHeader("etag")) && (Ne.etag[i] = w)), 204 === e || "HEAD" === g.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = h.state, c = h.data, u = !(p = h.error))) : (p = C, !e && C || (C = "error", e < 0 && (e = 0))), k.status = e, k.statusText = (t || C) + "", u ? y.resolveWith(v, [c, C, k]) : y.rejectWith(v, [k, C, p]), k.statusCode(b), b = void 0, d && m.trigger(u ? "ajaxSuccess" : "ajaxError", [k, g, u ? c : p]), x.fireWith(v, [k, C]), d && (m.trigger("ajaxComplete", [k, g]), --Ne.active || Ne.event.trigger("ajaxStop")))
                    }
                    "object" == (void 0 === e ? "undefined" : o(e)) && (t = e, e = void 0), t = t || {};
                    var r, i, s, u, l, c, f, d, p, h, g = Ne.ajaxSetup({}, t),
                        v = g.context || g,
                        m = g.context && (v.nodeType || v.jquery) ? Ne(v) : Ne.event,
                        y = Ne.Deferred(),
                        x = Ne.Callbacks("once memory"),
                        b = g.statusCode || {},
                        w = {},
                        C = {},
                        T = "canceled",
                        k = {
                            readyState: 0,
                            getResponseHeader: function (e) {
                                var t;
                                if (f) {
                                    if (!u)
                                        for (u = {}; t = zt.exec(s);) u[t[1].toLowerCase()] = t[2];
                                    t = u[e.toLowerCase()]
                                }
                                return null == t ? null : t
                            },
                            getAllResponseHeaders: function () {
                                return f ? s : null
                            },
                            setRequestHeader: function (e, t) {
                                return null == f && (e = C[e.toLowerCase()] = C[e.toLowerCase()] || e, w[e] = t), this
                            },
                            overrideMimeType: function (e) {
                                return null == f && (g.mimeType = e), this
                            },
                            statusCode: function (e) {
                                var t;
                                if (e)
                                    if (f) k.always(e[k.status]);
                                    else
                                        for (t in e) b[t] = [b[t], e[t]];
                                return this
                            },
                            abort: function (e) {
                                var t = e || T;
                                return r && r.abort(t), n(0, t), this
                            }
                        };
                    if (y.promise(k), g.url = ((e || g.url || Ot.href) + "").replace(Vt, Ot.protocol + "//"), g.type = t.method || t.type || g.method || g.type, g.dataTypes = (g.dataType || "*").toLowerCase().match(Ie) || [""], null == g.crossDomain) {
                        c = de.createElement("a");
                        try {
                            c.href = g.url, c.href = c.href, g.crossDomain = Jt.protocol + "//" + Jt.host != c.protocol + "//" + c.host
                        } catch (e) {
                            g.crossDomain = !0
                        }
                    }
                    if (g.data && g.processData && "string" != typeof g.data && (g.data = Ne.param(g.data, g.traditional)), se(Gt, g, t, k), f) return k;
                    (d = Ne.event && g.global) && 0 == Ne.active++ && Ne.event.trigger("ajaxStart"), g.type = g.type.toUpperCase(), g.hasContent = !Xt.test(g.type), i = g.url.replace(Ft, ""), g.hasContent ? g.data && g.processData && 0 === (g.contentType || "").indexOf("application/x-www-form-urlencoded") && (g.data = g.data.replace(Wt, "+")) : (h = g.url.slice(i.length), g.data && (g.processData || "string" == typeof g.data) && (i += (Pt.test(i) ? "&" : "?") + g.data, delete g.data), !1 === g.cache && (i = i.replace(_t, "$1"), h = (Pt.test(i) ? "&" : "?") + "_=" + Ht++ + h), g.url = i + h), g.ifModified && (Ne.lastModified[i] && k.setRequestHeader("If-Modified-Since", Ne.lastModified[i]), Ne.etag[i] && k.setRequestHeader("If-None-Match", Ne.etag[i])), (g.data && g.hasContent && !1 !== g.contentType || t.contentType) && k.setRequestHeader("Content-Type", g.contentType), k.setRequestHeader("Accept", g.dataTypes[0] && g.accepts[g.dataTypes[0]] ? g.accepts[g.dataTypes[0]] + ("*" !== g.dataTypes[0] ? ", " + Qt + "; q=0.01" : "") : g.accepts["*"]);
                    for (p in g.headers) k.setRequestHeader(p, g.headers[p]);
                    if (g.beforeSend && (!1 === g.beforeSend.call(v, k, g) || f)) return k.abort();
                    if (T = "abort", x.add(g.complete), k.done(g.success), k.fail(g.error), r = se(Yt, g, t, k)) {
                        if (k.readyState = 1, d && m.trigger("ajaxSend", [k, g]), f) return k;
                        g.async && g.timeout > 0 && (l = a.setTimeout(function () {
                            k.abort("timeout")
                        }, g.timeout));
                        try {
                            f = !1, r.send(w, n)
                        } catch (e) {
                            if (f) throw e;
                            n(-1, e)
                        }
                    } else n(-1, "No Transport");
                    return k
                },
                getJSON: function (e, t, n) {
                    return Ne.get(e, t, n, "json")
                },
                getScript: function (e, t) {
                    return Ne.get(e, void 0, t, "script")
                }
            }), Ne.each(["get", "post"], function (e, t) {
                Ne[t] = function (e, n, r, i) {
                    return ke(n) && (i = i || r, r = n, n = void 0), Ne.ajax(Ne.extend({
                        url: e,
                        type: t,
                        dataType: i,
                        data: n,
                        success: r
                    }, Ne.isPlainObject(e) && e))
                }
            }), Ne._evalUrl = function (e) {
                return Ne.ajax({
                    url: e,
                    type: "GET",
                    dataType: "script",
                    cache: !0,
                    async: !1,
                    global: !1,
                    throws: !0
                })
            }, Ne.fn.extend({
                wrapAll: function (e) {
                    var t;
                    return this[0] && (ke(e) && (e = e.call(this[0])), t = Ne(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                        for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                        return e
                    }).append(this)), this
                },
                wrapInner: function (e) {
                    return ke(e) ? this.each(function (t) {
                        Ne(this).wrapInner(e.call(this, t))
                    }) : this.each(function () {
                        var t = Ne(this),
                            n = t.contents();
                        n.length ? n.wrapAll(e) : t.append(e)
                    })
                },
                wrap: function (e) {
                    var t = ke(e);
                    return this.each(function (n) {
                        Ne(this).wrapAll(t ? e.call(this, n) : e)
                    })
                },
                unwrap: function (e) {
                    return this.parent(e).not("body").each(function () {
                        Ne(this).replaceWith(this.childNodes)
                    }), this
                }
            }), Ne.expr.pseudos.hidden = function (e) {
                return !Ne.expr.pseudos.visible(e)
            }, Ne.expr.pseudos.visible = function (e) {
                return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
            }, Ne.ajaxSettings.xhr = function () {
                try {
                    return new a.XMLHttpRequest
                } catch (e) {}
            };
            var Kt = {
                    0: 200,
                    1223: 204
                },
                Zt = Ne.ajaxSettings.xhr();
            Te.cors = !!Zt && "withCredentials" in Zt, Te.ajax = Zt = !!Zt, Ne.ajaxTransport(function (e) {
                var t, n;
                if (Te.cors || Zt && !e.crossDomain) return {
                    send: function (r, i) {
                        var o, s = e.xhr();
                        if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                            for (o in e.xhrFields) s[o] = e.xhrFields[o];
                        e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                        for (o in r) s.setRequestHeader(o, r[o]);
                        t = function (e) {
                            return function () {
                                t && (t = n = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? i(0, "error") : i(s.status, s.statusText) : i(Kt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                                    binary: s.response
                                } : {
                                    text: s.responseText
                                }, s.getAllResponseHeaders()))
                            }
                        }, s.onload = t(), n = s.onerror = s.ontimeout = t("error"), void 0 !== s.onabort ? s.onabort = n : s.onreadystatechange = function () {
                            4 === s.readyState && a.setTimeout(function () {
                                t && n()
                            })
                        }, t = t("abort");
                        try {
                            s.send(e.hasContent && e.data || null)
                        } catch (e) {
                            if (t) throw e
                        }
                    },
                    abort: function () {
                        t && t()
                    }
                }
            }), Ne.ajaxPrefilter(function (e) {
                e.crossDomain && (e.contents.script = !1)
            }), Ne.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                },
                contents: {
                    script: /\b(?:java|ecma)script\b/
                },
                converters: {
                    "text script": function (e) {
                        return Ne.globalEval(e), e
                    }
                }
            }), Ne.ajaxPrefilter("script", function (e) {
                void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
            }), Ne.ajaxTransport("script", function (e) {
                if (e.crossDomain) {
                    var t, n;
                    return {
                        send: function (r, i) {
                            t = Ne("<script>").prop({
                                charset: e.scriptCharset,
                                src: e.url
                            }).on("load error", n = function (e) {
                                t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
                            }), de.head.appendChild(t[0])
                        },
                        abort: function () {
                            n && n()
                        }
                    }
                }
            });
            var en = [],
                tn = /(=)\?(?=&|$)|\?\?/;
            Ne.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function () {
                    var e = en.pop() || Ne.expando + "_" + Ht++;
                    return this[e] = !0, e
                }
            }), Ne.ajaxPrefilter("json jsonp", function (e, t, n) {
                var r, i, o, s = !1 !== e.jsonp && (tn.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && tn.test(e.data) && "data");
                if (s || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = ke(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(tn, "$1" + r) : !1 !== e.jsonp && (e.url += (Pt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
                    return o || Ne.error(r + " was not called"), o[0]
                }, e.dataTypes[0] = "json", i = a[r], a[r] = function () {
                    o = arguments
                }, n.always(function () {
                    void 0 === i ? Ne(a).removeProp(r) : a[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, en.push(r)), o && ke(i) && i(o[0]), o = i = void 0
                }), "script"
            }), Te.createHTMLDocument = function () {
                var e = de.implementation.createHTMLDocument("").body;
                return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
            }(), Ne.parseHTML = function (e, t, n) {
                if ("string" != typeof e) return [];
                "boolean" == typeof t && (n = t, t = !1);
                var r, i, o;
                return t || (Te.createHTMLDocument ? ((r = (t = de.implementation.createHTMLDocument("")).createElement("base")).href = de.location.href, t.head.appendChild(r)) : t = de), i = qe.exec(e), o = !n && [], i ? [t.createElement(i[1])] : (i = D([e], t, o), o && o.length && Ne(o).remove(), Ne.merge([], i.childNodes))
            }, Ne.fn.load = function (e, t, n) {
                var r, i, a, s = this,
                    u = e.indexOf(" ");
                return u > -1 && (r = ne(e.slice(u)), e = e.slice(0, u)), ke(t) ? (n = t, t = void 0) : t && "object" == (void 0 === t ? "undefined" : o(t)) && (i = "POST"), s.length > 0 && Ne.ajax({
                    url: e,
                    type: i || "GET",
                    dataType: "html",
                    data: t
                }).done(function (e) {
                    a = arguments, s.html(r ? Ne("<div>").append(Ne.parseHTML(e)).find(r) : e)
                }).always(n && function (e, t) {
                    s.each(function () {
                        n.apply(this, a || [e.responseText, t, e])
                    })
                }), this
            }, Ne.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
                Ne.fn[t] = function (e) {
                    return this.on(t, e)
                }
            }), Ne.expr.pseudos.animated = function (e) {
                return Ne.grep(Ne.timers, function (t) {
                    return e === t.elem
                }).length
            }, Ne.offset = {
                setOffset: function (e, t, n) {
                    var r, i, o, a, s, u, l = Ne.css(e, "position"),
                        c = Ne(e),
                        f = {};
                    "static" === l && (e.style.position = "relative"), s = c.offset(), o = Ne.css(e, "top"), u = Ne.css(e, "left"), ("absolute" === l || "fixed" === l) && (o + u).indexOf("auto") > -1 ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), ke(t) && (t = t.call(e, n, Ne.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f)
                }
            }, Ne.fn.extend({
                offset: function (e) {
                    if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                        Ne.offset.setOffset(this, e, t)
                    });
                    var t, n, r = this[0];
                    return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                        top: t.top + n.pageYOffset,
                        left: t.left + n.pageXOffset
                    }) : {
                        top: 0,
                        left: 0
                    } : void 0
                },
                position: function () {
                    if (this[0]) {
                        var e, t, n, r = this[0],
                            i = {
                                top: 0,
                                left: 0
                            };
                        if ("fixed" === Ne.css(r, "position")) t = r.getBoundingClientRect();
                        else {
                            for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === Ne.css(e, "position");) e = e.parentNode;
                            e && e !== r && 1 === e.nodeType && ((i = Ne(e).offset()).top += Ne.css(e, "borderTopWidth", !0), i.left += Ne.css(e, "borderLeftWidth", !0))
                        }
                        return {
                            top: t.top - i.top - Ne.css(r, "marginTop", !0),
                            left: t.left - i.left - Ne.css(r, "marginLeft", !0)
                        }
                    }
                },
                offsetParent: function () {
                    return this.map(function () {
                        for (var e = this.offsetParent; e && "static" === Ne.css(e, "position");) e = e.offsetParent;
                        return e || at
                    })
                }
            }), Ne.each({
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset"
            }, function (e, t) {
                var n = "pageYOffset" === t;
                Ne.fn[e] = function (r) {
                    return We(this, function (e, r, i) {
                        var o;
                        if (Ee(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];
                        o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i
                    }, e, r, arguments.length)
                }
            }), Ne.each(["top", "left"], function (e, t) {
                Ne.cssHooks[t] = F(Te.pixelPosition, function (e, n) {
                    if (n) return n = W(e, t), ht.test(n) ? Ne(e).position()[t] + "px" : n
                })
            }), Ne.each({
                Height: "height",
                Width: "width"
            }, function (e, t) {
                Ne.each({
                    padding: "inner" + e,
                    content: t,
                    "": "outer" + e
                }, function (n, r) {
                    Ne.fn[r] = function (i, o) {
                        var a = arguments.length && (n || "boolean" != typeof i),
                            s = n || (!0 === i || !0 === o ? "margin" : "border");
                        return We(this, function (t, n, i) {
                            var o;
                            return Ee(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? Ne.css(t, n, s) : Ne.style(t, n, i, s)
                        }, t, a ? i : void 0, a)
                    }
                })
            }), Ne.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
                Ne.fn[t] = function (e, n) {
                    return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
                }
            }), Ne.fn.extend({
                hover: function (e, t) {
                    return this.mouseenter(e).mouseleave(t || e)
                }
            }), Ne.fn.extend({
                bind: function (e, t, n) {
                    return this.on(e, null, t, n)
                },
                unbind: function (e, t) {
                    return this.off(e, null, t)
                },
                delegate: function (e, t, n, r) {
                    return this.on(t, e, n, r)
                },
                undelegate: function (e, t, n) {
                    return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
                }
            }), Ne.proxy = function (e, t) {
                var n, r, i;
                if ("string" == typeof t && (n = e[t], t = e, e = n), ke(e)) return r = he.call(arguments, 2), i = function () {
                    return e.apply(t || this, r.concat(he.call(arguments)))
                }, i.guid = e.guid = e.guid || Ne.guid++, i
            }, Ne.holdReady = function (e) {
                e ? Ne.readyWait++ : Ne.ready(!0)
            }, Ne.isArray = Array.isArray, Ne.parseJSON = JSON.parse, Ne.nodeName = f, Ne.isFunction = ke, Ne.isWindow = Ee, Ne.camelCase = b, Ne.type = l, Ne.now = Date.now, Ne.isNumeric = function (e) {
                var t = Ne.type(e);
                return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
            }, n(19) && (r = [], void 0 !== (i = function () {
                return Ne
            }.apply(t, r)) && (e.exports = i));
            var nn = a.jQuery,
                rn = a.$;
            return Ne.noConflict = function (e) {
                return a.$ === Ne && (a.$ = rn), e && a.jQuery === Ne && (a.jQuery = nn), Ne
            }, s || (a.jQuery = a.$ = Ne), Ne
        })
    }).call(t, n(18)(e))
}, function (e, t) {
    e.exports = function (e) {
        return e.webpackPolyfill || (e.deprecate = function () {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function () {
                return e.l
            }
        }), Object.defineProperty(e, "id", {
            enumerable: !0,
            get: function () {
                return e.i
            }
        }), e.webpackPolyfill = 1), e
    }
}, function (e, t) {
    (function (t) {
        e.exports = t
    }).call(t, {})
}]);