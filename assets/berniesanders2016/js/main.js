function embed(e, t)
{
	if (t)
	{
		var n = !e.getAttribute("viewBox") && t.getAttribute("viewBox"),
			i = document.createDocumentFragment(),
			o = t.cloneNode(!0);
		for (n && e.setAttribute("viewBox", n); o.childNodes.length;) i.appendChild(o.firstChild);
		e.appendChild(i)
	}
}

function loadreadystatechange(e)
{
	e.onreadystatechange = function()
	{
		if (4 === e.readyState)
		{
			var t = document.createElement("x");
			t.innerHTML = e.responseText, e.s.splice(0).map(function(e)
			{
				embed(e[0], t.querySelector("#" + e[1].replace(/(\W)/g, "\\$1")))
			})
		}
	}, e.onreadystatechange()
}

function svg4everybody(e)
{
	function t()
	{
		for (var e; e = i[0];)
		{
			var c = e.parentNode;
			if (c && /svg/i.test(c.nodeName))
			{
				var d = e.getAttribute("xlink:href");
				if (LEGACY_SUPPORT && n)
				{
					var u = new Image,
						h = c.getAttribute("width"),
						m = c.getAttribute("height");
					u.src = o(d, c, e), h && u.setAttribute("width", h), m && u.setAttribute("height", m), c.replaceChild(u, e)
				}
				else if (a && (!r || r(d, c, e)))
				{
					var g = d.split("#"),
						f = g[0],
						p = g[1];
					if (c.removeChild(e), f.length)
					{
						var b = l[f] = l[f] || new XMLHttpRequest;
						b.s || (b.s = [], b.open("GET", f), b.send()), b.s.push([c, p]), loadreadystatechange(b)
					}
					else embed(c, document.getElementById(p))
				}
			}
		}
		s(t, 17)
	}
	e = e ||
	{};
	var n, i = document.getElementsByTagName("use");
	if (LEGACY_SUPPORT)
	{
		var o = e.fallback || function(e)
		{
			return e.replace(/\?[^#]+/, "").replace("#", ".").replace(/^\./, "") + ".png" + (/\?[^#]+/.exec(e) || [""])[0]
		};
		n = "nosvg" in e ? e.nosvg : /\bMSIE [1-8]\b/.test(navigator.userAgent), n && (document.createElement("svg"), document.createElement("use"))
	}
	var a = "polyfill" in e ? e.polyfill : LEGACY_SUPPORT ? n || /\bEdge\/12\b|\bMSIE [1-8]\b|\bTrident\/[567]\b|\bVersion\/7.0 Safari\b/.test(navigator.userAgent) || (navigator.userAgent.match(
			/AppleWebKit\/(\d+)/) || [])[1] < 537 : /\bEdge\/12\b|\bTrident\/[567]\b|\bVersion\/7.0 Safari\b/.test(navigator.userAgent) || (navigator.userAgent.match(/AppleWebKit\/(\d+)/) || [])[1] < 537,
		r = e.validate,
		s = window.requestAnimationFrame || setTimeout,
		l = {};
	a && t()
}

function getParameterByName(e)
	{
		e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
		var t = new RegExp("[\\?&]" + e + "=([^&#]*)"),
			n = t.exec(location.search);
		return null === n ? "" : decodeURIComponent(n[1].replace(/\+/g, " "))
	}! function(e)
	{
		if ("function" == typeof define && define.amd) define(e);
		else if ("object" == typeof exports) module.exports = e();
		else
		{
			var t = window.Cookies,
				n = window.Cookies = e(window.jQuery);
			n.noConflict = function()
			{
				return window.Cookies = t, n
			}
		}
	}(function()
	{
		function e()
		{
			for (var e = 0, t = {}; e < arguments.length; e++)
			{
				var n = arguments[e];
				for (var i in n) t[i] = n[i]
			}
			return t
		}

		function t(n)
		{
			function i(t, o, a)
			{
				var r;
				if (arguments.length > 1)
				{
					if (a = e(
					{
						path: "/"
					}, i.defaults, a), "number" == typeof a.expires)
					{
						var s = new Date;
						s.setMilliseconds(s.getMilliseconds() + 864e5 * a.expires), a.expires = s
					}
					try
					{
						r = JSON.stringify(o), /^[\{\[]/.test(r) && (o = r)
					}
					catch (l)
					{}
					return o = encodeURIComponent(String(o)), o = o.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), t = encodeURIComponent(String(t)), t = t.replace(
						/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent), t = t.replace(/[\(\)]/g, escape), document.cookie = [t, "=", o, a.expires && "; expires=" + a.expires.toUTCString(), a.path && "; path=" + a
						.path, a.domain && "; domain=" + a.domain, a.secure ? "; secure" : ""].join("")
				}
				t || (r = {});
				for (var c = document.cookie ? document.cookie.split("; ") : [], d = /(%[0-9A-Z]{2})+/g, u = 0; u < c.length; u++)
				{
					var h = c[u].split("="),
						m = h[0].replace(d, decodeURIComponent),
						g = h.slice(1).join("=");
					'"' === g.charAt(0) && (g = g.slice(1, -1));
					try
					{
						if (g = n && n(g, m) || g.replace(d, decodeURIComponent), this.json) try
						{
							g = JSON.parse(g)
						}
						catch (l)
						{}
						if (t === m)
						{
							r = g;
							break
						}
						t || (r[m] = g)
					}
					catch (l)
					{}
				}
				return r
			}
			return i.get = i.set = i, i.getJSON = function()
			{
				return i.apply(
				{
					json: !0
				}, [].slice.call(arguments))
			}, i.defaults = {}, i.remove = function(t, n)
			{
				i(t, "", e(n,
				{
					expires: -1
				}))
			}, i.withConverter = t, i
		}
		return t()
	}),
	function(e, t)
	{
		var n = t(e, e.document);
		e.lazySizes = n, "object" == typeof module && module.exports ? module.exports = n : "function" == typeof define && define.amd && define(n)
	}(window, function(e, t)
	{
		"use strict";
		if (t.getElementsByClassName)
		{
			var n, i = t.documentElement,
				o = e.HTMLPictureElement && "sizes" in t.createElement("img"),
				a = "addEventListener",
				r = e[a],
				s = e.setTimeout,
				l = e.requestAnimationFrame || s,
				c = e.setImmediate || s,
				d = /^picture$/i,
				u = ["load", "error", "lazyincluded", "_lazyloaded"],
				h = {},
				m = Array.prototype.forEach,
				g = function(e, t)
				{
					return h[t] || (h[t] = new RegExp("(\\s|^)" + t + "(\\s|$)")), h[t].test(e.className) && h[t]
				},
				f = function(e, t)
				{
					g(e, t) || (e.className = e.className.trim() + " " + t)
				},
				p = function(e, t)
				{
					var n;
					(n = g(e, t)) && (e.className = e.className.replace(n, " "))
				},
				b = function(e, t, n)
				{
					var i = n ? a : "removeEventListener";
					n && b(e, t), u.forEach(function(n)
					{
						e[i](n, t)
					})
				},
				v = function(e, n, i, o, a)
				{
					var r = t.createEvent("CustomEvent");
					return r.initCustomEvent(n, !o, !a, i ||
					{}), e.dispatchEvent(r), r
				},
				y = function(t, i)
				{
					var a;
					!o && (a = e.picturefill || e.respimage || n.pf) ? a(
					{
						reevaluate: !0,
						elements: [t]
					}) : i && i.src && (t.src = i.src)
				},
				w = function(e, t)
				{
					return (getComputedStyle(e, null) ||
					{})[t]
				},
				x = function(e, t, i)
				{
					for (i = i || e.offsetWidth; i < n.minSize && t && !e._lazysizesWidth;) i = t.offsetWidth, t = t.parentNode;
					return i
				},
				C = function(t)
				{
					var n, i = 0,
						o = e.Date,
						a = function()
						{
							n = !1, i = o.now(), t()
						},
						r = function()
						{
							c(a)
						},
						d = function()
						{
							l(r)
						};
					return function()
					{
						if (!n)
						{
							var e = 125 - (o.now() - i);
							n = !0, 6 > e && (e = 6), s(d, e)
						}
					}
				},
				$ = function()
				{
					var o, c, u, h, x, $, k, A, z, N, E, _, T, S, j, O, B = /^img$/i,
						P = /^iframe$/i,
						D = "onscroll" in e && !/glebot/.test(navigator.userAgent),
						R = 0,
						L = 0,
						q = 0,
						M = 0,
						F = function(e)
						{
							q--, e && e.target && b(e.target, F), (!e || 0 > q || !e.target) && (q = 0)
						},
						Q = function(e, t)
						{
							var n, i = e,
								o = "hidden" != w(e, "visibility");
							for (z -= t, _ += t, N -= t, E += t; o && (i = i.offsetParent);) o = (w(i, "opacity") || 1) > 0, o && "visible" != w(i, "overflow") && (n = i.getBoundingClientRect(), o = E > n.left && N < n.right &&
								_ > n.top - 1 && z < n.bottom + 1);
							return o
						},
						U = function()
						{
							var e, t, i, a, r, s, l, d, h;
							if ((x = n.loadMode) && 8 > q && (e = o.length))
							{
								for (t = 0, M++, O > L && 1 > q && M > 3 && x > 2 ? (L = O, M = 0) : L = x > 1 && M > 2 && 6 > q ? j : R; e > t; t++)
									if (o[t] && !o[t]._lazyRace)
										if (D)
											if ((d = o[t].getAttribute("data-expand")) && (s = 1 * d) || (s = L), h !== s && (k = innerWidth + s, A = innerHeight + s, l = -1 * s, h = s), i = o[t].getBoundingClientRect(), (_ = i.bottom) >=
												l && (z = i.top) <= A && (E = i.right) >= l && (N = i.left) <= k && (_ || E || N || z) && (u && 3 > q && !d && (3 > x || 4 > M) || Q(o[t], s)))
											{
												if (V(o[t]), r = !0, q > 9) break;
												q > 6 && (L = R)
											}
											else !r && u && !a && 4 > q && 4 > M && x > 2 && (c[0] || n.preloadAfterLoad) && (c[0] || !d && (_ || E || N || z || "auto" != o[t].getAttribute(n.sizesAttr))) && (a = c[0] || o[t]);
								else V(o[t]);
								a && !r && V(a)
							}
						},
						G = C(U),
						W = function(e)
						{
							f(e.target, n.loadedClass), p(e.target, n.loadingClass), b(e.target, W)
						},
						H = function(e, t)
						{
							try
							{
								e.contentWindow.location.replace(t)
							}
							catch (n)
							{
								e.setAttribute("src", t)
							}
						},
						K = function(e)
						{
							var t, i, o = e.getAttribute(n.srcsetAttr);
							(t = n.customMedia[e.getAttribute("data-media") || e.getAttribute("media")]) && e.setAttribute("media", t), o && e.setAttribute("srcset", o), t && (i = e.parentNode, i.insertBefore(e.cloneNode(),
								e), i.removeChild(e))
						},
						J = function()
						{
							var e, t = [],
								n = function()
								{
									for (; t.length;) t.shift()();
									e = !1
								};
							return function(i)
							{
								t.push(i), e || (e = !0, l(n))
							}
						}(),
						V = function(e)
						{
							var t, i, o, a, r, l, c, w = B.test(e.nodeName),
								x = w && (e.getAttribute(n.sizesAttr) || e.getAttribute("sizes")),
								C = "auto" == x;
							(!C && u || !w || !e.src && !e.srcset || e.complete || g(e, n.errorClass)) && (C && (c = e.offsetWidth), e._lazyRace = !0, q++, J(function()
							{
								e._lazyRace && delete e._lazyRace, p(e, n.lazyClass), (r = v(e, "lazybeforeunveil")).defaultPrevented || (x && (C ? (f(e, n.autosizesClass), I.updateElem(e, !0, c)) : e.setAttribute(
										"sizes", x)), i = e.getAttribute(n.srcsetAttr), t = e.getAttribute(n.srcAttr), w && (o = e.parentNode, a = o && d.test(o.nodeName || "")), l = r.detail.firesLoad || "src" in e && (i ||
										t || a), r = {
										target: e
									}, l && (b(e, F, !0), clearTimeout(h), h = s(F, 2500), f(e, n.loadingClass), b(e, W, !0)), a && m.call(o.getElementsByTagName("source"), K), i ? e.setAttribute("srcset", i) : t && !a &&
									(P.test(e.nodeName) ? H(e, t) : e.setAttribute("src", t)), (i || a) && y(e,
									{
										src: t
									})), (!l || e.complete) && (l ? F(r) : q--, W(r))
							}))
						},
						Y = function()
						{
							if (!u)
							{
								if (Date.now() - $ < 999) return void s(Y, 999);
								var e, t = function()
								{
									n.loadMode = 3, j = T, G()
								};
								u = !0, n.loadMode = 3, q || G(), r("scroll", function()
								{
									3 == n.loadMode && (j = S, n.loadMode = 2), clearTimeout(e), e = s(t, 99)
								}, !0)
							}
						};
					return {
						_: function()
						{
							$ = Date.now(), o = t.getElementsByClassName(n.lazyClass), c = t.getElementsByClassName(n.lazyClass + " " + n.preloadClass), j = n.expand, T = j, S = j * ((n.expFactor + 1) / 2), O = j * n.expFactor,
								r("scroll", G, !0), r("resize", G, !0), e.MutationObserver ? new MutationObserver(G).observe(i,
								{
									childList: !0,
									subtree: !0,
									attributes: !0
								}) : (i[a]("DOMNodeInserted", G, !0), i[a]("DOMAttrModified", G, !0), setInterval(G, 999)), r("hashchange", G, !0), ["focus", "mouseover", "click", "load", "transitionend", "animationend",
									"webkitAnimationEnd"].forEach(function(e)
								{
									t[a](e, G, !0)
								}), /d$|^c/.test(t.readyState) ? Y() : (r("load", Y), t[a]("DOMContentLoaded", G), s(Y, 2e4)), G(o.length > 0)
						},
						checkElems: G,
						unveil: V
					}
				}(),
				I = function()
				{
					var e, i = function(e, t, n)
						{
							var i, o, a, r, s = e.parentNode;
							if (s && (n = x(e, s, n), r = v(e, "lazybeforesizes",
							{
								width: n,
								dataAttr: !!t
							}), !r.defaultPrevented && (n = r.detail.width, n && n !== e._lazysizesWidth)))
							{
								if (e._lazysizesWidth = n, n += "px", e.setAttribute("sizes", n), d.test(s.nodeName || ""))
									for (i = s.getElementsByTagName("source"), o = 0, a = i.length; a > o; o++) i[o].setAttribute("sizes", n);
								r.detail.dataAttr || y(e, r.detail)
							}
						},
						o = function()
						{
							var t, n = e.length;
							if (n)
								for (t = 0; n > t; t++) i(e[t])
						},
						a = C(o);
					return {
						_: function()
						{
							e = t.getElementsByClassName(n.autosizesClass), r("resize", a)
						},
						checkElems: a,
						updateElem: i
					}
				}(),
				k = function()
				{
					k.i || (k.i = !0, I._(), $._())
				};
			return function()
			{
				var t, i = {
					lazyClass: "lazyload",
					loadedClass: "lazyloaded",
					loadingClass: "lazyloading",
					preloadClass: "lazypreload",
					errorClass: "lazyerror",
					autosizesClass: "lazyautosizes",
					srcAttr: "data-src",
					srcsetAttr: "data-srcset",
					sizesAttr: "data-sizes",
					minSize: 40,
					customMedia:
					{},
					init: !0,
					expFactor: 2,
					expand: 359,
					loadMode: 2
				};
				n = e.lazySizesConfig || e.lazysizesConfig ||
				{};
				for (t in i) t in n || (n[t] = i[t]);
				e.lazySizesConfig = n, s(function()
				{
					n.init && k()
				})
			}(),
			{
				cfg: n,
				autoSizer: I,
				loader: $,
				init: k,
				uP: y,
				aC: f,
				rC: p,
				hC: g,
				fire: v,
				gW: x
			}
		}
	}),
	function()
	{
		for (var e, t = function() {}, n = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile",
			"profileEnd", "table", "time", "timeEnd", "timeline", "timelineEnd", "timeStamp", "trace", "warn"], i = n.length, o = window.console = window.console ||
		{}; i--;) e = n[i], o[e] || (o[e] = t)
	}(),
	function()
	{
		var e = jQuery,
			t = function()
			{
				function e()
				{
					this.fadeDuration = 500, this.fitImagesInViewport = !0, this.resizeDuration = 700, this.positionFromTop = 50, this.showImageNumberLabel = !0, this.alwaysShowNavOnTouchDevices = !1, this.wrapAround = !
						1
				}
				return e.prototype.albumLabel = function(e, t)
				{
					return "Image " + e + " of " + t
				}, e
			}(),
			n = function()
			{
				function t(e)
				{
					this.options = e, this.album = [], this.currentImageIndex = void 0, this.init()
				}
				return t.prototype.init = function()
				{
					this.enable(), this.build()
				}, t.prototype.enable = function()
				{
					var t = this;
					e("body").on("click", "a[rel^=lightbox], area[rel^=lightbox], a[data-lightbox], area[data-lightbox]", function(n)
					{
						return t.start(e(n.currentTarget)), !1
					})
				}, t.prototype.build = function()
				{
					var t = this;
					e(
							"<div id='lightboxOverlay' class='lightboxOverlay'></div><div id='lightbox' class='lightbox'><div class='lb-outerContainer'><div class='lb-container'><img class='lb-image' src='' /><div class='lb-nav'><a class='lb-prev' href='' ></a><a class='lb-next' href='' ></a></div><div class='lb-loader'><a class='lb-cancel'></a></div></div></div><div class='lb-dataContainer'><div class='lb-data'><div class='lb-details'><span class='lb-caption'></span><span class='lb-number'></span></div><div class='lb-closeContainer'><a class='lb-close'></a></div></div></div></div>"
						).appendTo(e("body")), this.$lightbox = e("#lightbox"), this.$overlay = e("#lightboxOverlay"), this.$outerContainer = this.$lightbox.find(".lb-outerContainer"), this.$container = this.$lightbox
						.find(".lb-container"), this.containerTopPadding = parseInt(this.$container.css("padding-top"), 10), this.containerRightPadding = parseInt(this.$container.css("padding-right"), 10), this.containerBottomPadding =
						parseInt(this.$container.css("padding-bottom"), 10), this.containerLeftPadding = parseInt(this.$container.css("padding-left"), 10), this.$overlay.hide().on("click", function()
						{
							return t.end(), !1
						}), this.$lightbox.hide().on("click", function(n)
						{
							return "lightbox" === e(n.target).attr("id") && t.end(), !1
						}), this.$outerContainer.on("click", function(n)
						{
							return "lightbox" === e(n.target).attr("id") && t.end(), !1
						}), this.$lightbox.find(".lb-prev").on("click", function()
						{
							return t.changeImage(0 === t.currentImageIndex ? t.album.length - 1 : t.currentImageIndex - 1), !1
						}), this.$lightbox.find(".lb-next").on("click", function()
						{
							return t.changeImage(t.currentImageIndex === t.album.length - 1 ? 0 : t.currentImageIndex + 1), !1
						}), this.$lightbox.find(".lb-loader, .lb-close").on("click", function()
						{
							return t.end(), !1
						})
				}, t.prototype.start = function(t)
				{
					function n(e)
					{
						i.album.push(
						{
							link: e.attr("href"),
							title: e.attr("data-title") || e.attr("title")
						})
					}
					var i = this,
						o = e(window);
					o.on("resize", e.proxy(this.sizeOverlay, this)), e("select, object, embed").css(
					{
						visibility: "hidden"
					}), this.sizeOverlay(), this.album = [];
					var a, r = 0,
						s = t.attr("data-lightbox");
					if (s)
					{
						a = e(t.prop("tagName") + '[data-lightbox="' + s + '"]');
						for (var l = 0; l < a.length; l = ++l) n(e(a[l])), a[l] === t[0] && (r = l)
					}
					else if ("lightbox" === t.attr("rel")) n(t);
					else
					{
						a = e(t.prop("tagName") + '[rel="' + t.attr("rel") + '"]');
						for (var c = 0; c < a.length; c = ++c) n(e(a[c])), a[c] === t[0] && (r = c)
					}
					var d = o.scrollTop() + this.options.positionFromTop,
						u = o.scrollLeft();
					this.$lightbox.css(
					{
						top: d + "px",
						left: u + "px"
					}).fadeIn(this.options.fadeDuration), this.changeImage(r)
				}, t.prototype.changeImage = function(t)
				{
					var n = this;
					this.disableKeyboardNav();
					var i = this.$lightbox.find(".lb-image");
					this.$overlay.fadeIn(this.options.fadeDuration), e(".lb-loader").fadeIn("slow"), this.$lightbox.find(".lb-image, .lb-nav, .lb-prev, .lb-next, .lb-dataContainer, .lb-numbers, .lb-caption").hide(),
						this.$outerContainer.addClass("animating");
					var o = new Image;
					o.onload = function()
					{
						var a, r, s, l, c, d, u;
						i.attr("src", n.album[t].link), a = e(o), i.width(o.width), i.height(o.height), n.options.fitImagesInViewport && (u = e(window).width(), d = e(window).height(), c = u - n.containerLeftPadding -
							n.containerRightPadding - 20, l = d - n.containerTopPadding - n.containerBottomPadding - 120, (o.width > c || o.height > l) && (o.width / c > o.height / l ? (s = c, r = parseInt(o.height /
								(o.width / s), 10), i.width(s), i.height(r)) : (r = l, s = parseInt(o.width / (o.height / r), 10), i.width(s), i.height(r)))), n.sizeContainer(i.width(), i.height())
					}, o.src = this.album[t].link, this.currentImageIndex = t
				}, t.prototype.sizeOverlay = function()
				{
					this.$overlay.width(e(window).width()).height(e(document).height())
				}, t.prototype.sizeContainer = function(e, t)
				{
					function n()
					{
						i.$lightbox.find(".lb-dataContainer").width(r), i.$lightbox.find(".lb-prevLink").height(s), i.$lightbox.find(".lb-nextLink").height(s), i.showImage()
					}
					var i = this,
						o = this.$outerContainer.outerWidth(),
						a = this.$outerContainer.outerHeight(),
						r = e + this.containerLeftPadding + this.containerRightPadding,
						s = t + this.containerTopPadding + this.containerBottomPadding;
					o !== r || a !== s ? this.$outerContainer.animate(
					{
						width: r,
						height: s
					}, this.options.resizeDuration, "swing", function()
					{
						n()
					}) : n()
				}, t.prototype.showImage = function()
				{
					this.$lightbox.find(".lb-loader").hide(), this.$lightbox.find(".lb-image").fadeIn("slow"), this.updateNav(), this.updateDetails(), this.preloadNeighboringImages(), this.enableKeyboardNav()
				}, t.prototype.updateNav = function()
				{
					var e = !1;
					try
					{
						document.createEvent("TouchEvent"), e = this.options.alwaysShowNavOnTouchDevices ? !0 : !1
					}
					catch (t)
					{}
					this.$lightbox.find(".lb-nav").show(), this.album.length > 1 && (this.options.wrapAround ? (e && this.$lightbox.find(".lb-prev, .lb-next").css("opacity", "1"), this.$lightbox.find(
						".lb-prev, .lb-next").show()) : (this.currentImageIndex > 0 && (this.$lightbox.find(".lb-prev").show(), e && this.$lightbox.find(".lb-prev").css("opacity", "1")), this.currentImageIndex <
						this.album.length - 1 && (this.$lightbox.find(".lb-next").show(), e && this.$lightbox.find(".lb-next").css("opacity", "1"))))
				}, t.prototype.updateDetails = function()
				{
					var t = this;
					"undefined" != typeof this.album[this.currentImageIndex].title && "" !== this.album[this.currentImageIndex].title && this.$lightbox.find(".lb-caption").html(this.album[this.currentImageIndex].title)
						.fadeIn("fast").find("a").on("click", function()
						{
							location.href = e(this).attr("href")
						}), this.album.length > 1 && this.options.showImageNumberLabel ? this.$lightbox.find(".lb-number").text(this.options.albumLabel(this.currentImageIndex + 1, this.album.length)).fadeIn("fast") :
						this.$lightbox.find(".lb-number").hide(), this.$outerContainer.removeClass("animating"), this.$lightbox.find(".lb-dataContainer").fadeIn(this.options.resizeDuration, function()
						{
							return t.sizeOverlay()
						})
				}, t.prototype.preloadNeighboringImages = function()
				{
					if (this.album.length > this.currentImageIndex + 1)
					{
						var e = new Image;
						e.src = this.album[this.currentImageIndex + 1].link
					}
					if (this.currentImageIndex > 0)
					{
						var t = new Image;
						t.src = this.album[this.currentImageIndex - 1].link
					}
				}, t.prototype.enableKeyboardNav = function()
				{
					e(document).on("keyup.keyboard", e.proxy(this.keyboardAction, this))
				}, t.prototype.disableKeyboardNav = function()
				{
					e(document).off(".keyboard")
				}, t.prototype.keyboardAction = function(e)
				{
					var t = 27,
						n = 37,
						i = 39,
						o = e.keyCode,
						a = String.fromCharCode(o).toLowerCase();
					o === t || a.match(/x|o|c/) ? this.end() : "p" === a || o === n ? 0 !== this.currentImageIndex ? this.changeImage(this.currentImageIndex - 1) : this.options.wrapAround && this.album.length > 1 &&
						this.changeImage(this.album.length - 1) : ("n" === a || o === i) && (this.currentImageIndex !== this.album.length - 1 ? this.changeImage(this.currentImageIndex + 1) : this.options.wrapAround &&
							this.album.length > 1 && this.changeImage(0))
				}, t.prototype.end = function()
				{
					this.disableKeyboardNav(), e(window).off("resize", this.sizeOverlay), this.$lightbox.fadeOut(this.options.fadeDuration), this.$overlay.fadeOut(this.options.fadeDuration), e(
						"select, object, embed").css(
					{
						visibility: "visible"
					})
				}, t
			}();
		e(function()
		{
			{
				var e = new t;
				new n(e)
			}
		})
	}.call(this),
	function(e)
	{
		var t = {
				set: function(t, o)
				{
					o = o ||
					{}, o.success = function(t)
					{
						"object" == typeof t && "guid" in t && "cookieDomain" in t && e.cookie("guid", t.guid,
						{
							expires: 365,
							path: "/",
							domain: t.cookieDomain,
							secure: !0
						})
					}, i(n("set",
					{
						mode: "standard",
						fields: t
					}, o))
				},
				get: function(e, t)
				{
					t = t ||
					{}, t.type = "GET", i(n("get",
					{
						mode: "standard",
						fields: e
					}, t))
				},
				setCustom: function(t, o, a)
				{
					a = a ||
					{}, a.success = function(t)
					{
						"object" == typeof t && "guid" in t && "cookieDomain" in t && e.cookie("guid", t.guid,
						{
							expires: 365,
							path: "/",
							domain: t.cookieDomain
						})
					}, i(n("set",
					{
						mode: "custom",
						appKey: t,
						fields: o
					}, a))
				},
				getCustom: function(e, t, o)
				{
					o = o ||
					{}, o.type = "GET", i(n("get",
					{
						mode: "custom",
						appKey: e,
						fields: t
					}, o))
				},
				populateForm: function(n, i, o)
				{
					t.get(i,
					{
						success: function(t)
						{
							e.each(t, function(t, i)
							{
								var o = "form#" + n + " [name=" + t + "]",
									a = e(o).val();
								(void 0 == a || "" == a) && e(o).val(i)
							}), "function" == typeof o && o()
						},
						type: "GET"
					})
				},
				setFromForm: function(e, n, i)
				{
					for (var o = {}, a = 0; a < n.length; a++)
					{
						var r = n[a],
							s = bQuery("#" + e + " [name=" + r + "]");
						s && (o[r] = s.val())
					}
					t.set(o), "function" == typeof i && i()
				},
				populateShareForm: function(n, i, o)
				{
					t.get(i,
					{
						success: function(t)
						{
							e.each(t, function(t, i)
							{
								var o = "form#" + n + " [name=from_" + t + "]",
									a = e(o).val();
								(void 0 == a || "" == a) && e(o).val(i)
							}), "function" == typeof o && o()
						},
						type: "GET"
					})
				},
				setFromShareForm: function(e, n, i)
				{
					for (var o = {}, a = 0; a < n.length; a++)
					{
						var r = n[a],
							s = bQuery("#" + e + " [name=from_" + r + "]");
						s && (o[r] = s.val())
					}
					t.set(o), "function" == typeof i && i()
				}
			},
			n = function(t, n, i)
			{
				return e.extend(
				{}, i ||
				{}, e.ajax(
				{
					url: "//go.berniesanders.com/modules/spud/" + t + ".php",
					dataType: "jsonp",
					type: i.type || "POST",
					data: n,
					success: i.success || function() {}
				}))
			},
			i = function(t)
			{
				var n = e.ajax(t);
				t.async === !1 && 200 != n.status && e.error("jQuery.bsd.spud failed to make SPUD request")
			};
		e.extend(
		{
			bsd: e.extend(e.bsd,
			{
				spud: function(n)
				{
					return t[n] ? t[n].apply(this, Array.prototype.slice.call(arguments, 1)) : void e.error('Method "' + n + '" does not exist on jQuery.bsd.spud')
				}
			})
		})
	}(window.jQuery),
	function(e)
	{
		e.simpleRotator = function(t, n)
		{
			var i = this,
				o = 0;
			i.container = e(t), i.options = n, i.navItemsContainer = e(i.options.navigation), i.contentItemsContainer = e(i.options.content), i.navItems = i.navItemsContainer.children(), i.contentItems = i.contentItemsContainer
				.children(), i.init = function()
				{
					i.container.addClass("cr-container"), i.navItemsContainer.addClass("cr-nav-container"), i.navItems.addClass("cr-nav-item"), i.contentItemsContainer.addClass("cr-content-container"), i.contentItems
						.addClass("cr-content-item"), i.navItems.eq(0).addClass("cr-nav-item-active"), i.contentItems.eq(0).addClass("cr-content-item-active"), i.navItems.click(function(t)
						{
							t.preventDefault(), o !== e(this).index() && i.changeContent(e(this).index())
						})
				}, i.changeContent = function(e)
				{
					i.navItems.eq(o).removeClass("cr-nav-item-active"), i.contentItems.eq(o).removeClass("cr-content-item-active"), o = e, i.navItems.eq(o).addClass("cr-nav-item-active"), i.contentItems.eq(o).addClass(
						"cr-content-item-active");
					var t = i.contentItems.eq(e).height();
					i.contentItemsContainer.height(t)
				}, i.init()
		}, e.fn.simpleRotator = function(t)
		{
			return this.each(function()
			{
				return t.navigation ? t.content ? void e.simpleRotator(this, t) : (console.error('"content" is required.'), !1) : (console.error('"navigation" is required.'), !1)
			})
		}
	}(window.jQuery), $.easing.jswing = $.easing.swing, $.extend($.easing,
	{
		def: "easeOutQuad",
		swing: function(e, t, n, i, o)
		{
			return $.easing[$.easing.def](e, t, n, i, o)
		},
		easeInQuad: function(e, t, n, i, o)
		{
			return i * (t /= o) * t + n
		},
		easeOutQuad: function(e, t, n, i, o)
		{
			return -i * (t /= o) * (t - 2) + n
		},
		easeInOutQuad: function(e, t, n, i, o)
		{
			return (t /= o / 2) < 1 ? i / 2 * t * t + n : -i / 2 * (--t * (t - 2) - 1) + n
		},
		easeInCubic: function(e, t, n, i, o)
		{
			return i * (t /= o) * t * t + n
		},
		easeOutCubic: function(e, t, n, i, o)
		{
			return i * ((t = t / o - 1) * t * t + 1) + n
		},
		easeInOutCubic: function(e, t, n, i, o)
		{
			return (t /= o / 2) < 1 ? i / 2 * t * t * t + n : i / 2 * ((t -= 2) * t * t + 2) + n
		}
	});
var GeoContent = function(e)
{
	function t(e)
	{
		e.regions ? e.regions && e.regions.indexOf(d.region_code) >= 0 && (!e.exclude || 0 == e.exclude) ? i(e.element, e.content) : e.regions && -1 == e.regions.indexOf(d.region_code) && 1 == e.exclude &&
			i(e.element, e.content) : i(e.element, e.content)
	}

	function n(t)
	{
		e.isArray(t.content) ? e.each(t.content, function(e, n)
		{
			return n.region === d.region_code ? (t.element.attr("src", n.image), void t.element.load(function() {})) : void 0
		}) : s('"content" must be an array for type image')
	}

	function i(e, t)
	{
		var n = "";
		n = t.indexOf("%%region_code%%") > 0 && "" !== d.region_code ? t.replace("%%region_code%%", d.region_code) : t.indexOf("%%region_name%%") > 0 && "" !== d.region_name ? t.replace("%%region_name%%",
			d.region_name) : t, "" !== n && e.html(n)
	}

	function o()
	{
		e.ajax(
		{
			url: c
		}).done(function(e)
		{
			l.settings.ip = e, document.dispatchEvent(m), a()
		}).error(function()
		{
			e("body").addClass("geocontent"), s("Unable to get IP.")
		})
	}

	function a()
	{
		e.ajax(
		{
			url: l.settings.mygeourl + "/" + l.settings.ip
		}).done(function(t)
		{
			GeoContent.location = t, d = t, document.dispatchEvent(g), e("body").addClass("geocontent-region-" + d.region_code), e("body").addClass("geocontent-initialized"), r()
		}).error(function()
		{
			e("body").addClass("geocontent-initialized"), s("Unable to get geolocate.")
		})
	}

	function r()
	{
		e.each(u, function(i, o)
		{
			o.type ? o.content ? "text" == o.type ? t(o) : "image" == o.type && n(o) : s("content is required for " + o.element.selector.toString()) : s("type is required for" + o.element.selector.toString()),
				i === u.length - 1 && (e("body").addClass("geocontent-initialized"), document.dispatchEvent(h))
		})
	}

	function s(e)
	{
		console.error(e)
	}
	var l = {},
		c = "//icanhazip.com/",
		d = null,
		u = [],
		h = new Event("geoContentCompleteEvent"),
		m = new Event("geoContentIPFound"),
		g = new Event("geoContentLocFound");
	return l.location = null, l.settings = {
		ip: null,
		mygeourl: "//freegeoip.net/json",
		onComplete: null
	}, e.ajaxSetup(
	{
		timeout: 3e3
	}), l.change = function(e)
	{
		u.push(e)
	}, l.init = function(t)
	{
		e.extend(l.settings, t), l.settings.ip ? a() : o()
	}, l
}(jQuery);
! function(e)
{
	"use strict";
	e.fn.fitVids = function(t)
	{
		var n = {
			customSelector: null,
			ignore: null
		};
		if (!document.getElementById("fit-vids-style"))
		{
			var i = document.head || document.getElementsByTagName("head")[0],
				o =
				".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}",
				a = document.createElement("div");
			a.innerHTML = '<p>x</p><style id="fit-vids-style">' + o + "</style>", i.appendChild(a.childNodes[1])
		}
		return t && e.extend(n, t), this.each(function()
		{
			var t = ['iframe[src*="player.vimeo.com"]', 'iframe[src*="youtube.com"]', 'iframe[src*="youtube-nocookie.com"]', 'iframe[src*="kickstarter.com"][src*="video.html"]', "object", "embed"];
			n.customSelector && t.push(n.customSelector);
			var i = ".fitvidsignore";
			n.ignore && (i = i + ", " + n.ignore);
			var o = e(this).find(t.join(","));
			o = o.not("object object"), o = o.not(i), o.each(function(t)
			{
				var n = e(this);
				if (!(n.parents(i).length > 0 || "embed" === this.tagName.toLowerCase() && n.parent("object").length || n.parent(".fluid-width-video-wrapper").length))
				{
					n.css("height") || n.css("width") || !isNaN(n.attr("height")) && !isNaN(n.attr("width")) || (n.attr("height", 9), n.attr("width", 16));
					var o = "object" === this.tagName.toLowerCase() || n.attr("height") && !isNaN(parseInt(n.attr("height"), 10)) ? parseInt(n.attr("height"), 10) : n.height(),
						a = isNaN(parseInt(n.attr("width"), 10)) ? n.width() : parseInt(n.attr("width"), 10),
						r = o / a;
					if (!n.attr("id"))
					{
						var s = "fitvid" + t;
						n.attr("id", s)
					}
					n.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top", 100 * r + "%"), n.removeAttr("height").removeAttr("width")
				}
			})
		})
	}
}(window.jQuery || window.Zepto),
function(e)
{
	"function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(e)
{
	function t(e)
	{
		return s.raw ? e : encodeURIComponent(e)
	}

	function n(e)
	{
		return s.raw ? e : decodeURIComponent(e)
	}

	function i(e)
	{
		return t(s.json ? JSON.stringify(e) : String(e))
	}

	function o(e)
	{
		0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
		try
		{
			return e = decodeURIComponent(e.replace(r, " ")), s.json ? JSON.parse(e) : e
		}
		catch (t)
		{}
	}

	function a(t, n)
	{
		var i = s.raw ? t : o(t);
		return e.isFunction(n) ? n(i) : i
	}
	var r = /\+/g,
		s = e.cookie = function(o, r, l)
		{
			if (arguments.length > 1 && !e.isFunction(r))
			{
				if (l = e.extend(
				{}, s.defaults, l), "number" == typeof l.expires)
				{
					var c = l.expires,
						d = l.expires = new Date;
					d.setMilliseconds(d.getMilliseconds() + 864e5 * c)
				}
				return document.cookie = [t(o), "=", i(r), l.expires ? "; expires=" + l.expires.toUTCString() : "", l.path ? "; path=" + l.path : "", l.domain ? "; domain=" + l.domain : "", l.secure ?
					"; secure" : ""].join("")
			}
			for (var u = o ? void 0 :
			{}, h = document.cookie ? document.cookie.split("; ") : [], m = 0, g = h.length; g > m; m++)
			{
				var f = h[m].split("="),
					p = n(f.shift()),
					b = f.join("=");
				if (o === p)
				{
					u = a(b, r);
					break
				}
				o || void 0 === (b = a(b)) || (u[p] = b)
			}
			return u
		};
	s.defaults = {}, e.removeCookie = function(t, n)
	{
		return e.cookie(t, "", e.extend(
		{}, n,
		{
			expires: -1
		})), !e.cookie(t)
	}
});
var bsan_submit_and_tracking, donation_preselect_submission;
bsan_submit_and_tracking = function(e)
{
	var t, n, i, o, a, r, s, l;
	return e.preventDefault(), "" !== $("#email").val() && "" !== $("#zip").val() ? ($("form#inlineSignup").hide(), $("div#signup-loader").show(), "undefined" != typeof ga && ga("send", "pageview",
			window.location + "/inline-signup-submission"), t = window._fbq || (window._fbq = []), t.loaded || (a = document.createElement("script"), a.async = !0, a.src =
			"//connect.facebook.net/en_US/fbds.js", s = document.getElementsByTagName("script")[0], s.parentNode.insertBefore(a, s), t.loaded = !0), window._fbq = window._fbq || [], window._fbq.push([
			"track", "6024224349465",
			{
				value: "0.00",
				currency: "USD"
			}]), n = getParameterByName("utm_source"), l = getParameterByName("utm_medium"), r = getParameterByName("utm_campaign"), s = getParameterByName("utm_content"), mixpanel.people.set(
		{
			$email: $("#email").val(),
			home_zip: $("#zip").val()
		}), i = {
			email: $("#email").val(),
			zip: $("#zip").val(),
			"best-contact-time": ""
		}, mixpanel.identify(sha1(jQuery("#email").val())), o = $("form#inlineSignup").attr("action"), null !== getParameterByName("source") ? o = o + "?source=" + getParameterByName("source") : null !==
		getParameterByName("ms") && (o = o + "?source=" + getParameterByName("ms")), i.bsan_url = o, $.post("/wp-content/themes/berniesanders2016/send-to-bsd/", i, function()
		{
			return $("form#inlineSignup").hide(), $("div#signup-loader").hide(), $("div#signup-thanks").show()
		})) : $("#bsderror").show()
}, donation_preselect_submission = function(e)
{
	return e.preventDefault(), "undefined" != typeof ga && ga("send", "pageview", window.location + "/signup_submission"), "" !== $("#other-amount").val() && $("#homepage-donation-preselect").append(
		'<input type="hidden" name="amount" value="' + $("#other-amount").val() + '">'), jQuery(this).off("submit", donation_preselect_submission), jQuery(this).submit()
}, $(document).ready(function()
{
	return $("#inlineSignup").length > 0 && $("form#inlineSignup").on("submit", bsan_submit_and_tracking), $("form.donation-preselect").on("submit", donation_preselect_submission), window.lazySizesConfig = {
		addClasses: !0,
		preloadAfterLoad: !1,
		threshold: 1
	}, "" !== getParameterByName("revmsg") ? $.bsd.spud("get", ["zip", "firstname"],
	{
		success: function(e)
		{
			var t;
			return "undefined" != typeof e.firstname ? (t = $(".notification p").text(), $(".notification p").text(e.firstname + ", " + t)) : void 0
		}
	}) : void 0
}), $(document).ready(function()
{
	if (GeoContent.change(
	{
		type: "text",
		element: $(".join.module h2"),
		content: "Are you ready Iowa?",
		regions: ["IA"]
	}), GeoContent.change(
	{
		type: "text",
		element: $(".marquee .join.module h2"),
		content: "Iowa for Bernie",
		regions: ["IA"]
	}), GeoContent.change(
	{
		type: "text",
		element: $(".social.module h2"),
		content: "Connect with Bernie in Iowa",
		regions: ["IA"]
	}), GeoContent.change(
	{
		type: "text",
		element: $("#post-406 h3"),
		content: "Iowa Events",
		regions: ["IA"]
	}), GeoContent.change(
	{
		type: "text",
		element: $("#post-405 h3"),
		content: "In Iowa",
		regions: ["IA"]
	}), GeoContent.change(
	{
		type: "text",
		element: $("#post-405 h3"),
		content: "In Iowa",
		regions: ["IA"]
	}), GeoContent.change(
	{
		type: "text",
		element: $("#menu-page-template-page-homepage-social-media .facebook"),
		content: '<a href="https://www.facebook.com/iowaforbernie">Facebook</a>',
		regions: ["IA"]
	}), GeoContent.init(
	{
		mygeourl: "https://pin.berniesanders.com/json"
	}), "undefined" != typeof lgimage && "undefined" != typeof smimage)
	{
		$("header[role=banner]").addClass("custom");
		var e = '<style type="text/css">body.page > header.custom,body.single > header.custom{ background-image: url("' + smimage +
			'");}@media (min-width: 768px) {body.page > header.custom,body.single > header.custom{ background-image: url("' + lgimage + '");}}</style>';
		$(e).appendTo("head")
	}
	$("#interstitial, .about-timeline").insertAfter($("article #lead").length > 0 ? "article #lead" : "article > p:first-of-type");
	$("#about").children("#timeline");
	$("#call-timeline").click(function()
	{
		$("#interstitial").fadeOut("fast", function()
		{
			$(".about-timeline").slideDown(), $(".timeline-wrapper").simpleRotator(
			{
				navigation: ".timeline-navigator",
				content: ".timeline-items"
			})
		})
	}), $(".page-template-page-home, .page-template-page-page-template-page-home").length > 0 && $(".timeline-wrapper").simpleRotator(
	{
		navigation: ".timeline-navigator",
		content: ".timeline-items"
	}), $(".timeline-navigator .slick-slide:first-of-type").addClass("slick-center"), $(".timeline-navigator .slick-slide").click(function()
	{
		$(".timeline-navigator .slick-slide").removeClass("slick-center"), $(this).addClass("slick-center")
	});
	var t = $("body > header.clearfix").outerHeight();
	$(".expand, .close").on("click", function(e)
	{
		var n, i = $(window).width();
		n = i > 767 ? "28rem" : "50rem", $(".full-nav").is(":visible") ? ($("body > header.clearfix").animate(
		{
			height: t
		}, 300, function() {}), $(".full-nav").fadeToggle(100, "easeInOutCubic")) : ($("body > header.clearfix").animate(
		{
			height: n
		}, 300, function() {}), $(".full-nav").fadeToggle(100, "easeInOutCubic")), e.preventDefault()
	}), $('.contribute label, :input[type="number"]').on("click", function()
	{
		$(this).is(':input[type="number"]') ? $(".contribute input").prop("checked", !1) : $(':input[type="number"]').val("")
	}), $(".action-center-items li").hover(function()
	{
		$(this).toggleClass("hover")
	}), $(".timeline-navigator .slick-slide").click(function()
	{
		$(".timeline-navigator .slick-slide").removeClass("slick-center"), $(this).addClass("slick-center")
	}), $(".page-template-page-volunteer").length > 0 && $(function()
	{
		var e = $("aside"),
			t = $(window),
			n = e.offset(),
			i = e.innerHeight(),
			o = $(".footer-offset").innerHeight() + $(".module-wrapper").innerHeight(),
			a = $(document).outerHeight(),
			r = 20;
		$(".left h2").on("click", function()
		{
			$(this).next(".details").slideToggle(800, "easeInOutCubic", function()
			{
				a = $(document).outerHeight()
			})
		}), t.scroll(function()
		{
			t.width() >= 980 && (t.scrollTop() > n.top && t.scrollTop() < a - (o + i + 80) ? e.stop().animate(
			{
				marginTop: t.scrollTop() - n.top + r
			}, 250) : t.scrollTop() > a - (o + (i + 80)) ? e.stop().animate(
			{
				marginTop: a - (o + (i + 190))
			}, 250) : e.stop().animate(
			{
				marginTop: 0
			}, 250))
		})
	}), $(".search-btn").length > 0 && ($(".search-btn").on("click", function()
	{
		$("#search").slideToggle(300, "easeInOutQuad")
	}), $(".masthead nav").each(function()
	{
		$(this).clone().insertAfter("#search").addClass("mobile").children().attr("id", "full-dd-menu"), $(".mobile").prepend('<h2>Sections <button type="button" class="close">Close</button></h2>')
	}), $("#menu-democracy-daily .more").nextAll().addClass("extra"), $("#full-dd-menu .more").remove(), $("#menu-democracy-daily .more, .mobile .close").on("click", function()
	{
		$(".mobile").slideToggle(300, "easeInOutQuad")
	}), 0 == $("#menu-democracy-daily").length && $(".search-btn").addClass("search-only")), $("#artist-readmore, #person-readmore").click(function(e)
	{
		e.preventDefault(), $(this).text("Read the full letter" === $(this).text() ? "close the full letter" : "Read the full letter"), $(".readmore").slideToggle(), $(".disclaimer").toggle(), $(
			".letter").toggleClass("readmore-shown")
	})
});