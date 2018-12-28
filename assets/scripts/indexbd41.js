var browser = {
    versions:function(){ 
        var u = navigator.userAgent, app = navigator.appVersion; 
        return {
           trident: u.indexOf('Trident') > -1, //IE内核
           presto: u.indexOf('Presto') > -1, //opera内核
           webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
           gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
           mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
           ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
           android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
           iPhone: u.indexOf('iPhone') > -1 , //是否为iPhone
           iPad: u.indexOf('iPad') > -1, //是否iPad
        };
    }(),
    language:(navigator.browserLanguage || navigator.language).toLowerCase()
};
webpackJsonp([0], {
	11: function(e, t, n) {
		"use strict";
		n(2), n(6), n(0), n(3);
		var i = window.jwplayer,
            o = document.querySelector("#indexHeaderPlay"),
			qr = document.querySelector("#indexHeaderQr"),
			card = document.querySelector("#card"),
			shop = document.querySelector("#shop"),
			service = document.querySelector("#service"),
			soondiv = document.querySelector("#soon"),
			soonClose = document.querySelector("#soonClose"),
            qrdiv = document.querySelector("#indexQr"),
            qrClose = document.querySelector("#indexQrClose"),
			r = document.querySelector("#indexVideoClose"),
			a = document.querySelector("#indexVideo");
		i.key = "xzkK4MC3J1+eAy2KN2mdPEAIAjnuxi8g208upw==";
		var s = i("indexVideoPlayer").setup({
			file: "https://static.huanjiaohu.com/image/kouhao.mp4",
			width: "100%",
			height: "100%"
		});
		card.addEventListener("click", function(e) {
			// e.preventDefault && e.preventDefault(), e.stopPropagation && e.stopPropagation(), soondiv.style.display = "block"
		}),
		shop.addEventListener("click", function(e) {
			// e.preventDefault && e.preventDefault(), e.stopPropagation && e.stopPropagation(), soondiv.style.display = "block"
		}),
		service.addEventListener("click", function(e) {
			// e.preventDefault && e.preventDefault(), e.stopPropagation && e.stopPropagation(), soondiv.style.display = "block"
		}),
		soonClose.addEventListener("click", function(e) {
			e.preventDefault && e.preventDefault(), e.stopPropagation && e.stopPropagation(), soondiv.style.display = "none"
		}),
        qr.addEventListener("click", function(e) {
			// if(browser.versions.mobile){
			// 	window.location.href='http://www.coral123.com';
			// }else{
			// 	e.preventDefault && e.preventDefault(), e.stopPropagation && e.stopPropagation(), qrdiv.style.display = "block"
			// }
        }),
        qrClose.addEventListener("click", function(e) {
			e.preventDefault && e.preventDefault(), e.stopPropagation && e.stopPropagation(), qrdiv.style.display = "none"
		}),
		o.addEventListener("click", function(e) {
			e.preventDefault && e.preventDefault(), e.stopPropagation && e.stopPropagation(), a.style.display = "block"
		}, !1), r.addEventListener("click", function(e) {
			e.preventDefault && e.preventDefault(), e.stopPropagation && e.stopPropagation(), s.stop(), a.style.display = "none"
		}, !1), n(1)
	},
	3: function(e, t, n) {
		"use strict";
		var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
		function(e) {
			return typeof e
		} : function(e) {
			return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
		};
		window.jwplayer = function(e) {
			function t(n) {
				if (i[n]) return i[n].exports;
				var o = i[n] = {
					exports: {},
					id: n,
					loaded: !1
				};
				return e[n].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports
			}
			var n = window.webpackJsonpjwplayer;
			window.webpackJsonpjwplayer = function(i, r) {
				for (var a, s, l = 0, u = []; l < i.length; l++) s = i[l], o[s] && u.push.apply(u, o[s]), o[s] = 0;
				for (a in r) e[a] = r[a];
				for (n && n(i, r); u.length;) u.shift().call(null, t)
			};
			var i = {},
				o = {
					0: 0
				};
			return t.e = function(e, n) {
				if (0 === o[e]) return n.call(null, t);
				if (void 0 !== o[e]) o[e].push(n);
				else {
					o[e] = [n];
					var i = document.getElementsByTagName("head")[0],
						r = document.createElement("script");
					r.type = "text/javascript", r.charset = "utf-8", r.async = !0, r.src = t.p + "" + ({
						1: "provider.caterpillar",
						2: "provider.shaka",
						3: "provider.cast",
						4: "provider.html5",
						5: "provider.flash",
						6: "provider.youtube",
						7: "polyfills.vttrenderer",
						8: "polyfills.promise",
						9: "polyfills.base64",
						10: "vttparser"
					}[e] || e) + ".js", i.appendChild(r)
				}
			}, t.m = e, t.c = i, t.p = "", t(0)
		}([function(e, t, n) {
			e.exports = n(219)
		}, function(e, t, n) {
			var i, o;
			i = [], void 0 !== (o = function() {
				var e = {},
					t = Array.prototype,
					n = Object.prototype,
					i = Function.prototype,
					o = t.slice,
					r = t.concat,
					a = n.toString,
					s = n.hasOwnProperty,
					l = t.map,
					u = t.reduce,
					c = t.forEach,
					d = t.filter,
					p = t.every,
					h = t.some,
					f = t.indexOf,
					g = Array.isArray,
					m = Object.keys,
					w = i.bind,
					v = function e(t) {
						return t instanceof e ? t : this instanceof e ? void 0 : new e(t)
					},
					y = v.each = v.forEach = function(t, n, i) {
						if (null == t) return t;
						if (c && t.forEach === c) t.forEach(n, i);
						else if (t.length === +t.length) {
							for (var o = 0, r = t.length; o < r; o++) if (n.call(i, t[o], o, t) === e) return
						} else for (var a = v.keys(t), o = 0, r = a.length; o < r; o++) if (n.call(i, t[a[o]], a[o], t) === e) return;
						return t
					};
				v.map = v.collect = function(e, t, n) {
					var i = [];
					return null == e ? i : l && e.map === l ? e.map(t, n) : (y(e, function(e, o, r) {
						i.push(t.call(n, e, o, r))
					}), i)
				};
				v.reduce = v.foldl = v.inject = function(e, t, n, i) {
					var o = arguments.length > 2;
					if (null == e && (e = []), u && e.reduce === u) return i && (t = v.bind(t, i)), o ? e.reduce(t, n) : e.reduce(t);
					if (y(e, function(e, r, a) {
						o ? n = t.call(i, n, e, r, a) : (n = e, o = !0)
					}), !o) throw new TypeError("Reduce of empty array with no initial value");
					return n
				}, v.find = v.detect = function(e, t, n) {
					var i;
					return j(e, function(e, o, r) {
						if (t.call(n, e, o, r)) return i = e, !0
					}), i
				}, v.filter = v.select = function(e, t, n) {
					var i = [];
					return null == e ? i : d && e.filter === d ? e.filter(t, n) : (y(e, function(e, o, r) {
						t.call(n, e, o, r) && i.push(e)
					}), i)
				}, v.reject = function(e, t, n) {
					return v.filter(e, function(e, i, o) {
						return !t.call(n, e, i, o)
					}, n)
				}, v.compact = function(e) {
					return v.filter(e, v.identity)
				}, v.every = v.all = function(t, n, i) {
					n || (n = v.identity);
					var o = !0;
					return null == t ? o : p && t.every === p ? t.every(n, i) : (y(t, function(t, r, a) {
						if (!(o = o && n.call(i, t, r, a))) return e
					}), !! o)
				};
				var j = v.some = v.any = function(t, n, i) {
						n || (n = v.identity);
						var o = !1;
						return null == t ? o : h && t.some === h ? t.some(n, i) : (y(t, function(t, r, a) {
							if (o || (o = n.call(i, t, r, a))) return e
						}), !! o)
					};
				v.size = function(e) {
					return null == e ? 0 : e.length === +e.length ? e.length : v.keys(e).length
				}, v.last = function(e, t, n) {
					if (null != e) return null == t || n ? e[e.length - 1] : o.call(e, Math.max(e.length - t, 0))
				}, v.after = function(e, t) {
					return function() {
						if (--e < 1) return t.apply(this, arguments)
					}
				}, v.before = function(e, t) {
					var n;
					return function() {
						return --e > 0 && (n = t.apply(this, arguments)), e <= 1 && (t = null), n
					}
				};
				var b = function(e) {
						return null == e ? v.identity : v.isFunction(e) ? e : v.property(e)
					},
					E = function(e) {
						return function(t, n, i) {
							var o = {};
							return n = b(n), y(t, function(r, a) {
								var s = n.call(i, r, a, t);
								e(o, s, r)
							}), o
						}
					};
				v.groupBy = E(function(e, t, n) {
					v.has(e, t) ? e[t].push(n) : e[t] = [n]
				}), v.indexBy = E(function(e, t, n) {
					e[t] = n
				}), v.sortedIndex = function(e, t, n, i) {
					n = b(n);
					for (var o = n.call(i, t), r = 0, a = e.length; r < a;) {
						var s = r + a >>> 1;
						n.call(i, e[s]) < o ? r = s + 1 : a = s
					}
					return r
				};
				var j = v.some = v.any = function(t, n, i) {
						n || (n = v.identity);
						var o = !1;
						return null == t ? o : h && t.some === h ? t.some(n, i) : (y(t, function(t, r, a) {
							if (o || (o = n.call(i, t, r, a))) return e
						}), !! o)
					};
				v.contains = v.include = function(e, t) {
					return null != e && (e.length !== +e.length && (e = v.values(e)), v.indexOf(e, t) >= 0)
				}, v.pluck = function(e, t) {
					return v.map(e, v.property(t))
				}, v.where = function(e, t) {
					return v.filter(e, v.matches(t))
				}, v.findWhere = function(e, t) {
					return v.find(e, v.matches(t))
				}, v.max = function(e, t, n) {
					if (!t && v.isArray(e) && e[0] === +e[0] && e.length < 65535) return Math.max.apply(Math, e);
					var i = -1 / 0,
						o = -1 / 0;
					return y(e, function(e, r, a) {
						var s = t ? t.call(n, e, r, a) : e;
						s > o && (i = e, o = s)
					}), i
				}, v.difference = function(e) {
					var n = r.apply(t, o.call(arguments, 1));
					return v.filter(e, function(e) {
						return !v.contains(n, e)
					})
				}, v.without = function(e) {
					return v.difference(e, o.call(arguments, 1))
				}, v.indexOf = function(e, t, n) {
					if (null == e) return -1;
					var i = 0,
						o = e.length;
					if (n) {
						if ("number" != typeof n) return i = v.sortedIndex(e, t), e[i] === t ? i : -1;
						i = n < 0 ? Math.max(0, o + n) : n
					}
					if (f && e.indexOf === f) return e.indexOf(t, n);
					for (; i < o; i++) if (e[i] === t) return i;
					return -1
				};
				var k = function() {};
				v.bind = function(e, t) {
					var n, i;
					if (w && e.bind === w) return w.apply(e, o.call(arguments, 1));
					if (!v.isFunction(e)) throw new TypeError;
					return n = o.call(arguments, 2), i = function() {
						if (!(this instanceof i)) return e.apply(t, n.concat(o.call(arguments)));
						k.prototype = e.prototype;
						var r = new k;
						k.prototype = null;
						var a = e.apply(r, n.concat(o.call(arguments)));
						return Object(a) === a ? a : r
					}
				}, v.partial = function(e) {
					var t = o.call(arguments, 1);
					return function() {
						for (var n = 0, i = t.slice(), o = 0, r = i.length; o < r; o++) i[o] === v && (i[o] = arguments[n++]);
						for (; n < arguments.length;) i.push(arguments[n++]);
						return e.apply(this, i)
					}
				}, v.once = v.partial(v.before, 2), v.memoize = function(e, t) {
					var n = {};
					return t || (t = v.identity), function() {
						var i = t.apply(this, arguments);
						return v.has(n, i) ? n[i] : n[i] = e.apply(this, arguments)
					}
				}, v.delay = function(e, t) {
					var n = o.call(arguments, 2);
					return setTimeout(function() {
						return e.apply(null, n)
					}, t)
				}, v.defer = function(e) {
					return v.delay.apply(v, [e, 1].concat(o.call(arguments, 1)))
				}, v.throttle = function(e, t, n) {
					var i, o, r, a = null,
						s = 0;
					n || (n = {});
					var l = function() {
							s = !1 === n.leading ? 0 : v.now(), a = null, r = e.apply(i, o), i = o = null
						};
					return function() {
						var u = v.now();
						s || !1 !== n.leading || (s = u);
						var c = t - (u - s);
						return i = this, o = arguments, c <= 0 ? (clearTimeout(a), a = null, s = u, r = e.apply(i, o), i = o = null) : a || !1 === n.trailing || (a = setTimeout(l, c)), r
					}
				}, v.keys = function(e) {
					if (!v.isObject(e)) return [];
					if (m) return m(e);
					var t = [];
					for (var n in e) v.has(e, n) && t.push(n);
					return t
				}, v.invert = function(e) {
					for (var t = {}, n = v.keys(e), i = 0, o = n.length; i < o; i++) t[e[n[i]]] = n[i];
					return t
				}, v.defaults = function(e) {
					return y(o.call(arguments, 1), function(t) {
						if (t) for (var n in t) void 0 === e[n] && (e[n] = t[n])
					}), e
				}, v.extend = function(e) {
					return y(o.call(arguments, 1), function(t) {
						if (t) for (var n in t) e[n] = t[n]
					}), e
				}, v.pick = function(e) {
					var n = {},
						i = r.apply(t, o.call(arguments, 1));
					return y(i, function(t) {
						t in e && (n[t] = e[t])
					}), n
				}, v.omit = function(e) {
					var n = {},
						i = r.apply(t, o.call(arguments, 1));
					for (var a in e) v.contains(i, a) || (n[a] = e[a]);
					return n
				}, v.clone = function(e) {
					return v.isObject(e) ? v.isArray(e) ? e.slice() : v.extend({}, e) : e
				}, v.isArray = g ||
				function(e) {
					return "[object Array]" == a.call(e)
				}, v.isObject = function(e) {
					return e === Object(e)
				}, y(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(e) {
					v["is" + e] = function(t) {
						return a.call(t) == "[object " + e + "]"
					}
				}), v.isArguments(arguments) || (v.isArguments = function(e) {
					return !(!e || !v.has(e, "callee"))
				}), v.isFunction = function(e) {
					return "function" == typeof e
				}, v.isFinite = function(e) {
					return isFinite(e) && !isNaN(parseFloat(e))
				}, v.isNaN = function(e) {
					return v.isNumber(e) && e != +e
				}, v.isBoolean = function(e) {
					return !0 === e || !1 === e || "[object Boolean]" == a.call(e)
				}, v.isNull = function(e) {
					return null === e
				}, v.isUndefined = function(e) {
					return void 0 === e
				}, v.has = function(e, t) {
					return s.call(e, t)
				}, v.identity = function(e) {
					return e
				}, v.constant = function(e) {
					return function() {
						return e
					}
				}, v.property = function(e) {
					return function(t) {
						return t[e]
					}
				}, v.propertyOf = function(e) {
					return null == e ?
					function() {} : function(t) {
						return e[t]
					}
				}, v.matches = function(e) {
					return function(t) {
						if (t === e) return !0;
						for (var n in e) if (e[n] !== t[n]) return !1;
						return !0
					}
				}, v.now = Date.now ||
				function() {
					return (new Date).getTime()
				}, v.result = function(e, t) {
					if (null != e) {
						var n = e[t];
						return v.isFunction(n) ? n.call(e) : n
					}
				};
				var x = 0;
				return v.uniqueId = function(e) {
					var t = ++x + "";
					return e ? e + t : t
				}, v
			}.apply(t, i)) && (e.exports = o)
		}, function(e, t, n) {
			var o, r;
			o = [n(8), n(1), n(26), n(45), n(28), n(46), n(18), n(44), n(47), n(81), n(190)], void 0 !== (r = function(e, t, n, o, r, a, s, l, u, c, d) {
				var p = {};
				return p.log = function() {
					window.console && ("object" == i(console.log) ? console.log(Array.prototype.slice.call(arguments, 0)) : console.log.apply(console, arguments))
				}, p.between = function(e, t, n) {
					return Math.max(Math.min(e, n), t)
				}, p.foreach = function(e, t) {
					var n, i;
					for (n in e)"function" === p.typeOf(e.hasOwnProperty) ? e.hasOwnProperty(n) && (i = e[n], t(n, i)) : (i = e[n], t(n, i))
				}, p.indexOf = t.indexOf, p.noop = function() {}, p.seconds = e.seconds, p.prefix = e.prefix, p.suffix = e.suffix, t.extend(p, a, s, u, n, l, o, r, c, d), p
			}.apply(t, o)) && (e.exports = r)
		}, function(e, t, n) {
			var o, r;
			o = [n(1)], void 0 !== (r = function(e) {
				var t = [],
					n = t.slice,
					o = {
						on: function(e, t, n) {
							return a(this, "on", e, [t, n]) && t ? (this._events || (this._events = {}), (this._events[e] || (this._events[e] = [])).push({
								callback: t,
								context: n
							}), this) : this
						},
						once: function(t, n, i) {
							if (!a(this, "once", t, [n, i]) || !n) return this;
							var o = this,
								r = e.once(function() {
									o.off(t, r), n.apply(this, arguments)
								});
							return r._callback = n, this.on(t, r, i)
						},
						off: function(t, n, i) {
							var o, r, s, l, u, c, d, p;
							if (!this._events || !a(this, "off", t, [n, i])) return this;
							if (!t && !n && !i) return this._events = void 0, this;
							for (l = t ? [t] : e.keys(this._events), u = 0, c = l.length; u < c; u++) if (t = l[u], s = this._events[t]) {
								if (this._events[t] = o = [], n || i) for (d = 0, p = s.length; d < p; d++) r = s[d], (n && n !== r.callback && n !== r.callback._callback || i && i !== r.context) && o.push(r);
								o.length || delete this._events[t]
							}
							return this
						},
						trigger: function(e) {
							if (!this._events) return this;
							var t = n.call(arguments, 1);
							if (!a(this, "trigger", e, t)) return this;
							var i = this._events[e],
								o = this._events.all;
							return i && s(i, t, this), o && s(o, arguments, this), this
						},
						triggerSafe: function(e) {
							if (!this._events) return this;
							var t = n.call(arguments, 1);
							if (!a(this, "trigger", e, t)) return this;
							var i = this._events[e],
								o = this._events.all;
							return i && l(i, t, this, e), o && l(o, arguments, this, e), this
						}
					},
					r = /\s+/,
					a = function(e, t, n, o) {
						if (!n) return !0;
						if ("object" == (void 0 === n ? "undefined" : i(n))) {
							for (var a in n) e[t].apply(e, [a, n[a]].concat(o));
							return !1
						}
						if (r.test(n)) {
							for (var s = n.split(r), l = 0, u = s.length; l < u; l++) e[t].apply(e, [s[l]].concat(o));
							return !1
						}
						return !0
					},
					s = function(e, t, n) {
						var i, o = -1,
							r = e.length,
							a = t[0],
							s = t[1],
							l = t[2];
						switch (t.length) {
						case 0:
							for (; ++o < r;)(i = e[o]).callback.call(i.context || n);
							return;
						case 1:
							for (; ++o < r;)(i = e[o]).callback.call(i.context || n, a);
							return;
						case 2:
							for (; ++o < r;)(i = e[o]).callback.call(i.context || n, a, s);
							return;
						case 3:
							for (; ++o < r;)(i = e[o]).callback.call(i.context || n, a, s, l);
							return;
						default:
							for (; ++o < r;)(i = e[o]).callback.apply(i.context || n, t);
							return
						}
					},
					l = function(e, t, n, i) {
						for (var o, r = -1, a = e.length; ++r < a;) try {
							(o = e[r]).callback.apply(o.context || n, t)
						} catch (e) {
							console.log('Error in "' + i + '" event handler:', e)
						}
					};
				return o
			}.apply(t, o)) && (e.exports = r)
		}, function(e, t, n) {
			var i, o;
			i = [], void 0 !== (o = function() {
				var e = {
					DRAG: "drag",
					DRAG_START: "dragStart",
					DRAG_END: "dragEnd",
					CLICK: "click",
					DOUBLE_CLICK: "doubleClick",
					TAP: "tap",
					DOUBLE_TAP: "doubleTap",
					OVER: "over",
					MOVE: "move",
					OUT: "out"
				},
					t = {
						COMPLETE: "complete",
						ERROR: "error",
						JWPLAYER_AD_CLICK: "adClick",
						JWPLAYER_AD_COMPANIONS: "adCompanions",
						JWPLAYER_AD_COMPLETE: "adComplete",
						JWPLAYER_AD_ERROR: "adError",
						JWPLAYER_AD_IMPRESSION: "adImpression",
						JWPLAYER_AD_META: "adMeta",
						JWPLAYER_AD_PAUSE: "adPause",
						JWPLAYER_AD_PLAY: "adPlay",
						JWPLAYER_AD_SKIPPED: "adSkipped",
						JWPLAYER_AD_TIME: "adTime",
						JWPLAYER_CAST_AD_CHANGED: "castAdChanged",
						JWPLAYER_MEDIA_COMPLETE: "complete",
						JWPLAYER_READY: "ready",
						JWPLAYER_MEDIA_SEEK: "seek",
						JWPLAYER_MEDIA_BEFOREPLAY: "beforePlay",
						JWPLAYER_MEDIA_BEFORECOMPLETE: "beforeComplete",
						JWPLAYER_MEDIA_BUFFER_FULL: "bufferFull",
						JWPLAYER_DISPLAY_CLICK: "displayClick",
						JWPLAYER_PLAYLIST_COMPLETE: "playlistComplete",
						JWPLAYER_CAST_SESSION: "cast",
						JWPLAYER_MEDIA_ERROR: "mediaError",
						JWPLAYER_MEDIA_FIRST_FRAME: "firstFrame",
						JWPLAYER_MEDIA_PLAY_ATTEMPT: "playAttempt",
						JWPLAYER_MEDIA_LOADED: "loaded",
						JWPLAYER_MEDIA_SEEKED: "seeked",
						JWPLAYER_SETUP_ERROR: "setupError",
						JWPLAYER_ERROR: "error",
						JWPLAYER_PLAYER_STATE: "state",
						JWPLAYER_CAST_AVAILABLE: "castAvailable",
						JWPLAYER_MEDIA_BUFFER: "bufferChange",
						JWPLAYER_MEDIA_TIME: "time",
						JWPLAYER_MEDIA_TYPE: "mediaType",
						JWPLAYER_MEDIA_VOLUME: "volume",
						JWPLAYER_MEDIA_MUTE: "mute",
						JWPLAYER_MEDIA_META: "meta",
						JWPLAYER_MEDIA_LEVELS: "levels",
						JWPLAYER_MEDIA_LEVEL_CHANGED: "levelsChanged",
						JWPLAYER_CONTROLS: "controls",
						JWPLAYER_FULLSCREEN: "fullscreen",
						JWPLAYER_RESIZE: "resize",
						JWPLAYER_PLAYLIST_ITEM: "playlistItem",
						JWPLAYER_PLAYLIST_LOADED: "playlist",
						JWPLAYER_AUDIO_TRACKS: "audioTracks",
						JWPLAYER_AUDIO_TRACK_CHANGED: "audioTrackChanged",
						JWPLAYER_LOGO_CLICK: "logoClick",
						JWPLAYER_CAPTIONS_LIST: "captionsList",
						JWPLAYER_CAPTIONS_CHANGED: "captionsChanged",
						JWPLAYER_PROVIDER_CHANGED: "providerChanged",
						JWPLAYER_PROVIDER_FIRST_FRAME: "providerFirstFrame",
						JWPLAYER_USER_ACTION: "userAction",
						JWPLAYER_PROVIDER_CLICK: "providerClick",
						JWPLAYER_VIEW_TAB_FOCUS: "tabFocus",
						JWPLAYER_CONTROLBAR_DRAGGING: "scrubbing",
						JWPLAYER_INSTREAM_CLICK: "instreamClick"
					};
				return t.touchEvents = e, t
			}.apply(t, i)) && (e.exports = o)
		}, , function(e, t, n) {
			var i, o;
			i = [], void 0 !== (o = function() {
				return {
					BUFFERING: "buffering",
					IDLE: "idle",
					COMPLETE: "complete",
					PAUSED: "paused",
					PLAYING: "playing",
					ERROR: "error",
					LOADING: "loading",
					STALLED: "stalled"
				}
			}.apply(t, i)) && (e.exports = o)
		}, , function(e, t, n) {
			var i, o;
			i = [n(1)], void 0 !== (o = function(e) {
				function t(e) {
					return !!/[\(,]format=m3u8-/i.test(e) && "m3u8"
				}
				var n = function(e) {
						return e.replace(/^\s+|\s+$/g, "")
					},
					i = function(e, t, n) {
						for (e = "" + e, n = n || "0"; e.length < t;) e = n + e;
						return e
					},
					o = function(e, t) {
						for (var n = 0; n < e.attributes.length; n++) if (e.attributes[n].name && e.attributes[n].name.toLowerCase() === t.toLowerCase()) return e.attributes[n].value.toString();
						return ""
					},
					r = function(e) {
						if (!e || "rtmp" === e.substr(0, 4)) return "";
						var n = t(e);
						return n || (e = e.split("?")[0].split("#")[0], e.lastIndexOf(".") > -1 ? e.substr(e.lastIndexOf(".") + 1, e.length).toLowerCase() : void 0)
					},
					a = function(e) {
						var t = parseInt(e / 3600),
							n = parseInt(e / 60) % 60,
							o = e % 60;
						return i(t, 2) + ":" + i(n, 2) + ":" + i(o.toFixed(3), 6)
					},
					s = function(t, n) {
						if (e.isNumber(t)) return t;
						t = t.replace(",", ".");
						var i = t.split(":"),
							o = i.length,
							r = 0;
						if ("s" === t.slice(-1)) r = parseFloat(t);
						else if ("m" === t.slice(-1)) r = 60 * parseFloat(t);
						else if ("h" === t.slice(-1)) r = 3600 * parseFloat(t);
						else if (o > 1) {
							var a = o - 1;
							4 === o && (n && (r = parseFloat(i[a]) / n), a -= 1), r += parseFloat(i[a]), r += 60 * parseFloat(i[a - 1]), o >= 3 && (r += 3600 * parseFloat(i[a - 2]))
						} else r = parseFloat(t);
						return r
					},
					l = function(t, n) {
						return e.map(t, function(e) {
							return n + e
						})
					};
				return {
					trim: n,
					pad: i,
					xmlAttribute: o,
					extension: r,
					hms: a,
					seconds: s,
					suffix: function(t, n) {
						return e.map(t, function(e) {
							return e + n
						})
					},
					prefix: l
				}
			}.apply(t, i)) && (e.exports = o)
		}, function(e, t, n) {
			var i, o;
			i = [n(3), n(4), n(1), n(2)], void 0 !== (o = function(e, t, n, i) {
				function o(e, t) {
					return /touch/.test(e.type) ? (e.originalEvent || e).changedTouches[0]["page" + t] : e["page" + t]
				}
				function r(e) {
					var t = e || window.event;
					return e instanceof MouseEvent && ("which" in t ? 3 === t.which : "button" in t && 2 === t.button)
				}
				function a(e, t, n) {
					var i;
					return i = t instanceof MouseEvent || !t.touches && !t.changedTouches ? t : t.touches && t.touches.length ? t.touches[0] : t.changedTouches[0], {
						type: e,
						target: t.target,
						currentTarget: n,
						pageX: i.pageX,
						pageY: i.pageY
					}
				}
				function s(e) {
					(e instanceof MouseEvent || e instanceof window.TouchEvent) && (e.preventManipulation && e.preventManipulation(), e.preventDefault && e.preventDefault())
				}
				var l = !n.isUndefined(window.PointerEvent),
					u = !l && i.isMobile(),
					c = !l && !u,
					d = i.isFF() && i.isOSX(),
					p = function(e, i) {
						function u(e) {
							(c || l && "touch" !== e.pointerType) && w(t.touchEvents.OVER, e)
						}
						function p(e) {
							(c || l && "touch" !== e.pointerType) && w(t.touchEvents.MOVE, e)
						}
						function h(n) {
							(c || l && "touch" !== n.pointerType && !e.contains(document.elementFromPoint(n.x, n.y))) && w(t.touchEvents.OUT, n)
						}
						function f(t) {
							v = t.target, E = o(t, "X"), k = o(t, "Y"), r(t) || (l ? t.isPrimary && (i.preventScrolling && (y = t.pointerId, e.setPointerCapture(y)), e.addEventListener("pointermove", g), e.addEventListener("pointercancel", m), e.addEventListener("pointerup", m)) : c && (document.addEventListener("mousemove", g), d && "object" === t.target.nodeName.toLowerCase() ? e.addEventListener("click", m) : document.addEventListener("mouseup", m)), v.addEventListener("touchmove", g), v.addEventListener("touchcancel", m), v.addEventListener("touchend", m), i.preventScrolling && s(t))
						}
						function g(e) {
							var n = t.touchEvents;
							if (b) w(n.DRAG, e);
							else {
								var r = o(e, "X"),
									a = o(e, "Y"),
									l = r - E,
									u = a - k;
								l * l + u * u > 36 && (w(n.DRAG_START, e), b = !0, w(n.DRAG, e))
							}
							i.preventScrolling && s(e)
						}
						function m(n) {
							var o = t.touchEvents;
							l ? (i.preventScrolling && e.releasePointerCapture(y), e.removeEventListener("pointermove", g), e.removeEventListener("pointercancel", m), e.removeEventListener("pointerup", m)) : c && (document.removeEventListener("mousemove", g), document.removeEventListener("mouseup", m)), v && (v.removeEventListener("touchmove", g), v.removeEventListener("touchcancel", m), v.removeEventListener("touchend", m)), b ? w(o.DRAG_END, n) : i.directSelect && n.target !== e || -1 !== n.type.indexOf("cancel") || (l && n instanceof window.PointerEvent ? "touch" === n.pointerType ? w(o.TAP, n) : w(o.CLICK, n) : c ? w(o.CLICK, n) : (w(o.TAP, n), s(n))), v = null, b = !1
						}
						function w(e, o) {
							var r;
							if (i.enableDoubleTap && (e === t.touchEvents.CLICK || e === t.touchEvents.TAP)) if (n.now() - x < A) {
								var s = e === t.touchEvents.CLICK ? t.touchEvents.DOUBLE_CLICK : t.touchEvents.DOUBLE_TAP;
								r = a(s, o, j), _.trigger(s, r), x = 0
							} else x = n.now();
							r = a(e, o, j), _.trigger(e, r)
						}
						var v, y, j = e,
							b = !1,
							E = 0,
							k = 0,
							x = 0,
							A = 300;
						i = i || {}, l ? (e.addEventListener("pointerdown", f), i.useHover && (e.addEventListener("pointerover", u), e.addEventListener("pointerout", h)), i.useMove && e.addEventListener("pointermove", p)) : c && (e.addEventListener("mousedown", f), i.useHover && (e.addEventListener("mouseover", u), e.addEventListener("mouseout", h)), i.useMove && e.addEventListener("mousemove", p)), e.addEventListener("touchstart", f);
						var _ = this;
						return this.triggerEvent = w, this.destroy = function() {
							e.removeEventListener("touchstart", f), e.removeEventListener("mousedown", f), v && (v.removeEventListener("touchmove", g), v.removeEventListener("touchcancel", m), v.removeEventListener("touchend", m)), l && (i.preventScrolling && e.releasePointerCapture(y), e.removeEventListener("pointerover", u), e.removeEventListener("pointerdown", f), e.removeEventListener("pointermove", g), e.removeEventListener("pointermove", p), e.removeEventListener("pointercancel", m), e.removeEventListener("pointerout", h), e.removeEventListener("pointerup", m)), e.removeEventListener("click", m), e.removeEventListener("mouseover", u), e.removeEventListener("mousemove", p), e.removeEventListener("mouseout", h), document.removeEventListener("mousemove", g), document.removeEventListener("mouseup", m)
						}, this
					};
				return n.extend(p.prototype, e), p
			}.apply(t, i)) && (e.exports = o)
		}, , function(e, t, n) {
			e.exports = n(147).
		default
		}, , function(e, t) {
			function n(e) {
				return d[e]
			}
			function o(e) {
				for (var t = 1; t < arguments.length; t++) for (var n in arguments[t]) Object.prototype.hasOwnProperty.call(arguments[t], n) && (e[n] = arguments[t][n]);
				return e
			}
			function r(e, t) {
				for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
				return -1
			}
			function a(e) {
				if ("string" != typeof e) {
					if (e && e.toHTML) return e.toHTML();
					if (null == e) return "";
					if (!e) return e + "";
					e = "" + e
				}
				return h.test(e) ? e.replace(p, n) : e
			}
			function s(e) {
				return !e && 0 !== e || !(!m(e) || 0 !== e.length)
			}
			function l(e) {
				var t = o({}, e);
				return t._parent = e, t
			}
			function u(e, t) {
				return e.path = t, e
			}
			function c(e, t) {
				return (e ? e + "." : "") + t
			}
			t.__esModule = !0, t.extend = o, t.indexOf = r, t.escapeExpression = a, t.isEmpty = s, t.createFrame = l, t.blockParams = u, t.appendContextPath = c;
			var d = {
				"&": "&amp;",
				"<": "&lt;",
				">": "&gt;",
				'"': "&quot;",
				"'": "&#x27;",
				"`": "&#x60;",
				"=": "&#x3D;"
			},
				p = /[&<>"'`=]/g,
				h = /[&<>"'`=]/,
				f = Object.prototype.toString;
			t.toString = f;
			var g = function(e) {
					return "function" == typeof e
				};
			g(/x/) && (t.isFunction = g = function(e) {
				return "function" == typeof e && "[object Function]" === f.call(e)
			}), t.isFunction = g;
			var m = Array.isArray ||
			function(e) {
				return !(!e || "object" != (void 0 === e ? "undefined" : i(e))) && "[object Array]" === f.call(e)
			};
			t.isArray = m
		}, , , function(e, t, n) {
			var i, o;
			i = [n(26)], void 0 !== (o = function(e) {
				return {
					createId: function(e, t) {
						var n = e.kind || "cc";
						return e.
					default ||e.defaulttrack ? "default":
						e._id || e.file || e.name || e.label || n + t
					},
					createLabel: function(e, t) {
						var n = e.label || e.name || e.language;
						return n || (n = "Unknown CC", (t += 1) > 1 && (n += " [" + t + "]")), {
							label: n,
							unknownCount: t
						}
					},
					renderNatively: function(t) {
						return ("html5" === t || "shaka" === t || "caterpillar" === t) && (e.isChrome() || e.isIOS() || e.isSafari() || e.isEdge())
					}
				}
			}.apply(t, i)) && (e.exports = o)
		}, function(e, t, n) {
			var i, o;
			i = [n(2), n(4), n(6), n(1)], void 0 !== (o = function(e, t, n, i) {
				var o = e.noop,
					r = i.constant(!1);
				return {
					supports: r,
					play: o,
					load: o,
					stop: o,
					volume: o,
					mute: o,
					seek: o,
					resize: o,
					remove: o,
					destroy: o,
					setVisibility: o,
					setFullscreen: r,
					getFullscreen: o,
					getContainer: o,
					setContainer: r,
					getName: o,
					getQualityLevels: o,
					getCurrentQuality: o,
					setCurrentQuality: o,
					getAudioTracks: o,
					getCurrentAudioTrack: o,
					setCurrentAudioTrack: o,
					checkComplete: o,
					setControls: o,
					attachMedia: o,
					detachMedia: o,
					setState: function(e) {
						var i = this.state || n.IDLE;
						this.state = e, e !== i && this.trigger(t.JWPLAYER_PLAYER_STATE, {
							newstate: e
						})
					},
					sendMediaType: function(e) {
						var n = e[0].type,
							i = "oga" === n || "aac" === n || "mp3" === n || "mpeg" === n || "vorbis" === n;
						this.trigger(t.JWPLAYER_MEDIA_TYPE, {
							mediaType: i ? "audio" : "video"
						})
					}
				}
			}.apply(t, i)) && (e.exports = o)
		}, function(e, t, n) {
			var i, o;
			i = [n(1)], void 0 !== (o = function(e) {
				var t = {},
					n = {
						TIT2: "title",
						TT2: "title",
						WXXX: "url",
						TPE1: "artist",
						TP1: "artist",
						TALB: "album",
						TAL: "album"
					};
				return t.utf8ArrayToStr = function(e, t) {
					var n, i, o, r, a, s;
					for (n = "", o = e.length, i = t || 0; i < o;) if (0 !== (r = e[i++]) && 3 !== r) switch (r >> 4) {
					case 0:
					case 1:
					case 2:
					case 3:
					case 4:
					case 5:
					case 6:
					case 7:
						n += String.fromCharCode(r);
						break;
					case 12:
					case 13:
						a = e[i++], n += String.fromCharCode((31 & r) << 6 | 63 & a);
						break;
					case 14:
						a = e[i++], s = e[i++], n += String.fromCharCode((15 & r) << 12 | (63 & a) << 6 | (63 & s) << 0)
					}
					return n
				}, t.utf16BigEndianArrayToStr = function(e, t) {
					var n, i, o;
					for (n = "", o = e.length - 1, i = t || 0; i < o;) 254 === e[i] && 255 === e[i + 1] || (n += String.fromCharCode((e[i] << 8) + e[i + 1])), i += 2;
					return n
				}, t.syncSafeInt = function(e) {
					var n = t.arrayToInt(e);
					return 127 & n | (32512 & n) >> 1 | (8323072 & n) >> 2 | (2130706432 & n) >> 3
				}, t.arrayToInt = function(e) {
					for (var t = "0x", n = 0; n < e.length; n++) t += e[n].toString(16);
					return parseInt(t)
				}, t.parseID3 = function(i) {
					return e.reduce(i, function(i, o) {
						if (!("value" in o) && "data" in o && o.data instanceof ArrayBuffer) {
							var r = o,
								a = new Uint8Array(r.data),
								s = a.length;
							o = {
								value: {
									key: "",
									data: ""
								}
							};
							for (var l = 10; l < 14 && l < a.length && 0 !== a[l];) o.value.key += String.fromCharCode(a[l]), l++;
							var u = 19,
								c = a[u];
							3 !== c && 0 !== c || (c = a[++u], s--);
							var d = 0;
							if (1 !== c && 2 !== c) for (var p = u + 1; p < s; p++) if (0 === a[p]) {
								d = p - u;
								break
							}
							if (d > 0) {
								var h = t.utf8ArrayToStr(a.subarray(u, u += d), 0);
								if ("PRIV" === o.value.key) {
									if ("com.apple.streaming.transportStreamTimestamp" === h) {
										var f = 1 & t.syncSafeInt(a.subarray(u, u += 4)),
											g = t.syncSafeInt(a.subarray(u, u += 4));
										f && (g += 4294967296), o.value.data = g
									} else o.value.data = t.utf8ArrayToStr(a, u + 1);
									o.value.info = h
								} else o.value.info = h, o.value.data = t.utf8ArrayToStr(a, u + 1)
							} else {
								var m = a[u];
								o.value.data = 1 === m || 2 === m ? t.utf16BigEndianArrayToStr(a, u + 1) : t.utf8ArrayToStr(a, u + 1)
							}
						}
						if (n.hasOwnProperty(o.value.key) && (i[n[o.value.key]] = o.value.data), o.value.info) {
							var w = i[o.value.key];
							e.isObject(w) || (w = {}, i[o.value.key] = w), w[o.value.info] = o.value.data
						} else i[o.value.key] = o.value.data;
						return i
					}, {})
				}, t
			}.apply(t, i)) && (e.exports = o)
		}, function(e, t, n) {
			var i, o;
			i = [n(4), n(3), n(1)], void 0 !== (o = function(e, t, n) {
				var i = {},
					o = {
						NEW: 0,
						LOADING: 1,
						ERROR: 2,
						COMPLETE: 3
					},
					r = function(r, a) {
						function s(t) {
							c = o.ERROR, u.trigger(e.ERROR, t)
						}
						function l(t) {
							c = o.COMPLETE, u.trigger(e.COMPLETE, t)
						}
						var u = n.extend(this, t),
							c = o.NEW;
						this.addEventListener = this.on, this.removeEventListener = this.off, this.makeStyleLink = function(e) {
							var t = document.createElement("link");
							return t.type = "text/css", t.rel = "stylesheet", t.href = e, t
						}, this.makeScriptTag = function(e) {
							var t = document.createElement("script");
							return t.src = e, t
						}, this.makeTag = a ? this.makeStyleLink : this.makeScriptTag, this.load = function() {
							if (c === o.NEW) {
								var t = i[r];
								if (t && (c = t.getStatus()) < 2) return t.on(e.ERROR, s), void t.on(e.COMPLETE, l);
								var n = document.getElementsByTagName("head")[0] || document.documentElement,
									u = this.makeTag(r),
									d = !1;
								u.onload = u.onreadystatechange = function(e) {
									d || this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || (d = !0, l(e), u.onload = u.onreadystatechange = null, n && u.parentNode && !a && n.removeChild(u))
								}, u.onerror = s, n.insertBefore(u, n.firstChild), c = o.LOADING, i[r] = this
							}
						}, this.getStatus = function() {
							return c
						}
					};
				return r.loaderstatus = o, r
			}.apply(t, i)) && (e.exports = o)
		}, function(e, t, n) {
			var i, o;
			i = [n(1)], void 0 !== (o = function(e) {
				var t = "free",
					n = "premium",
					i = "enterprise",
					o = "platinum",
					r = "ads",
					a = "unlimited",
					s = "trial",
					l = {
						setup: [t, n, i, r, a, s, o],
						dash: [n, i, r, a, s, o],
						drm: [i, r, a, s],
						hls: [n, r, i, a, s, o],
						ads: [r, a, s, o, i],
						casting: [n, i, r, a, s, o],
						jwpsrv: [t, n, i, r, s, o]
					};
				return function(t) {
					return function(n) {
						return e.contains(l[n], t)
					}
				}
			}.apply(t, i)) && (e.exports = o)
		}, , function(e, t) {
			function n(e, t) {
				var o = t && t.loc,
					r = void 0,
					a = void 0;
				o && (r = o.start.line, a = o.start.column, e += " - " + r + ":" + a);
				for (var s = Error.prototype.constructor.call(this, e), l = 0; l < i.length; l++) this[i[l]] = s[i[l]];
				Error.captureStackTrace && Error.captureStackTrace(this, n), o && (this.lineNumber = r, this.column = a)
			}
			t.__esModule = !0;
			var i = ["description", "fileName", "lineNumber", "message", "name", "number", "stack"];
			n.prototype = new Error, t.
		default = n, e.exports = t.
		default
		}, function(e, t, n) {
			var i, o;
			i = [n(1), n(2), n(24), n(42), n(177), n(68)], void 0 !== (o = function(e, t, i, o, r, a) {
				function s(e, t, n, a) {
					var s, u, c = e.responseXML ? e.responseXML.firstChild : null;
					if (c) for ("xml" === i.localName(c) && (c = c.nextSibling); c.nodeType === c.COMMENT_NODE;) c = c.nextSibling;
					try {
						if (c && "tt" === i.localName(c)) s = r(e.responseXML), u = this.convertToVTTCues(s), delete t.xhr, n(u);
						else {
							var d = e.responseText;
							d.indexOf("WEBVTT") >= 0 ? l(d, t, n, a) : (s = o(d), u = this.convertToVTTCues(s), delete t.xhr, n(u))
						}
					} catch (e) {
						delete t.xhr, a(e)
					}
				}
				function l(e, t, i, o) {
					n.e(10, function(r) {
						var a = n(69),
							s = new a(window),
							l = [];
						s.oncue = function(e) {
							l.push(e)
						}, s.onflush = function() {
							delete t.xhr, i(l)
						};
						try {
							s.parse(e).flush()
						} catch (e) {
							delete t.xhr, o(e)
						}
					})
				}
				var u = {};
				return u.loadFile = function(e, n, i) {
					e.xhr = t.ajax(e.file, function(t) {
						s.call(u, t, e, n, i)
					}, i)
				}, u.cancelXhr = function(t) {
					e.each(t, function(e) {
						var t = e.xhr;
						t && (t.onload = null, t.onreadystatechange = null, t.onerror = null, "abort" in t && t.abort()), delete e.xhr
					})
				}, u.convertToVTTCues = function(t) {
					return e.map(t, function(e) {
						return new a(e.begin, e.end, e.text)
					})
				}, u
			}.apply(t, i)) && (e.exports = o)
		}, function(e, t, n) {
			var i, o;
			i = [n(8)], void 0 !== (o = function(e) {
				return {
					localName: function(e) {
						return e ? e.localName ? e.localName : e.baseName ? e.baseName : "" : ""
					},
					textContent: function(t) {
						return t ? t.textContent ? e.trim(t.textContent) : t.text ? e.trim(t.text) : "" : ""
					},
					getChildNode: function(e, t) {
						return e.childNodes[t]
					},
					numChildren: function(e) {
						return e.childNodes ? e.childNodes.length : 0
					}
				}
			}.apply(t, i)) && (e.exports = o)
		}, function(e, t, n) {
			var i, o;
			i = [n(181), n(182), n(74), n(32)], void 0 !== (o = function(e, t, n, i) {
				var o = {},
					r = {};
				return {
					loadPlugins: function(n, i) {
						return r[n] = new e(new t(o), i), r[n]
					},
					registerPlugin: function(e, t, r, a) {
						var s = i.getPluginName(e);
						o[s] || (o[s] = new n(e)), o[s].registerPlugin(e, t, r, a)
					}
				}
			}.apply(t, i)) && (e.exports = o)
		}, function(e, t, n) {
			var i, o;
			i = [n(1)], void 0 !== (o = function(e) {
				function t(e) {
					return function() {
						return i(e)
					}
				}
				var n = {},
					i = e.memoize(function(e) {
						return null !== navigator.userAgent.toLowerCase().match(e)
					}),
					o = n.isInt = function(e) {
						return parseFloat(e) % 1 == 0
					};
				n.isFlashSupported = function() {
					var e = n.flashVersion();
					return e && e >= 11.2
				}, n.isFF = t(/firefox/i), n.isIPod = t(/iP(hone|od)/i), n.isIPad = t(/iPad/i), n.isSafari602 = t(/Macintosh.*Mac OS X 10_8.*6\.0\.\d* Safari/i), n.isOSX = t(/Mac OS X/i);
				var r = n.isEdge = function(e) {
						return i(e ? new RegExp("\\sedge\\/" + e, "i") : /\sEdge\/\d+/i)
					},
					a = n.isIETrident = t(/trident\/.+rv:\s*11/i),
					s = n.isMSIE = function(e) {
						return e ? (e = parseFloat(e).toFixed(1), i(new RegExp("msie\\s*" + e, "i"))) : i(/msie/i)
					};
				n.isChrome = function() {
					return i(/\s(?:Chrome|CriOS)\//i) && !n.isEdge()
				}, n.isIE = function(e) {
					return e ? (e = parseFloat(e).toFixed(1), e >= 12 ? r(e) : e >= 11 ? a() : s(e)) : r() || a() || s()
				}, n.isSafari = function() {
					return i(/safari/i) && !i(/chrome/i) && !i(/chromium/i) && !i(/android/i)
				};
				var l = n.isIOS = function(e) {
						return i(e ? new RegExp("iP(hone|ad|od).+\\s(OS\\s" + e + "|.*\\sVersion/" + e + ")", "i") : /iP(hone|ad|od)/i)
					};
				n.isAndroidNative = function(e) {
					return u(e, !0)
				};
				var u = n.isAndroid = function(e, t) {
						return !(t && i(/chrome\/[123456789]/i) && !i(/chrome\/18/)) && (e ? (o(e) && !/\./.test(e) && (e += "."), i(new RegExp("Android\\s*" + e, "i"))) : i(/Android/i))
					};
				return n.isMobile = function() {
					return l() || u()
				}, n.isIframe = function() {
					return window.frameElement && "IFRAME" === window.frameElement.nodeName
				}, n.flashVersion = function() {
					if (n.isAndroid()) return 0;
					var e, t = navigator.plugins;
					if (t && (e = t["Shockwave Flash"]) && e.description) return parseFloat(e.description.replace(/\D+(\d+\.?\d*).*/, "$1"));
					if (void 0 !== window.ActiveXObject) {
						try {
							if (e = new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash")) return parseFloat(e.GetVariable("$version").split(" ")[1].replace(/\s*,\s*/, "."))
						} catch (e) {
							return 0
						}
						return e
					}
					return 0
				}, n
			}.apply(t, i)) && (e.exports = o)
		}, function(e, t, n) {
			var i, o;
			i = [], void 0 !== (o = function() {
				return {
					repo: "http://ssl.p.jwpcdn.com/player/v/",
					SkinsIncluded: ["seven"],
					SkinsLoadable: ["beelden", "bekle", "five", "glow", "roundster", "six", "stormtrooper", "vapor"],
					dvrSeekLimit: -25
				}
			}.apply(t, i)) && (e.exports = o)
		}, function(e, t, n) {
			var o, r;
			o = [n(8), n(86)], void 0 !== (r = function(e, t) {
				function n(e) {
					e = e.split("-");
					for (var t = 1; t < e.length; t++) e[t] = e[t].charAt(0).toUpperCase() + e[t].slice(1);
					return e.join("")
				}
				function o(t, n, i) {
					if ("" === n || void 0 === n || null === n) return "";
					var o = i ? " !important" : "";
					return "string" == typeof n && isNaN(n) ? /png|gif|jpe?g/i.test(n) && n.indexOf("url") < 0 ? "url(" + n + ")" : n + o : 0 === n || "z-index" === t || "opacity" === t ? "" + n + o : /color/i.test(t) ? "#" + e.pad(n.toString(16).replace(/^0x/i, ""), 6) + o : Math.ceil(n) + "px" + o
				}
				var r = function(e, n, o) {
						o = o || "all-players";
						var r = "";
						if ("object" == (void 0 === n ? "undefined" : i(n))) {
							var s = document.createElement("div");
							a(s, n), r = "{" + s.style.cssText + "}"
						} else "string" == typeof n && (r = n);
						t.style([
							[e, e + r]
						], o)
					},
					a = function(e, t) {
						if (void 0 !== e && null !== e) {
							void 0 === e.length && (e = [e]);
							var i, r = {};
							for (i in t) r[i] = o(i, t[i]);
							for (var a = 0; a < e.length; a++) {
								var s, l = e[a];
								if (void 0 !== l && null !== l) for (i in r) s = n(i), l.style[s] !== r[i] && (l.style[s] = r[i])
							}
						}
					},
					s = function(e, t) {
						a(e, {
							transform: t,
							webkitTransform: t,
							msTransform: t,
							mozTransform: t,
							oTransform: t
						})
					},
					l = function(e, t) {
						var n = "rgb";
						e ? (e = String(e).replace("#", ""), 3 === e.length && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2])) : e = "000000";
						var i = [parseInt(e.substr(0, 2), 16), parseInt(e.substr(2, 2), 16), parseInt(e.substr(4, 2), 16)];
						return void 0 !== t && 100 !== t && (n += "a", i.push(t / 100)), n + "(" + i.join(",") + ")"
					};
				return {
					css: r,
					style: a,
					clearCss: t.clear,
					transform: s,
					hexToRgba: l
				}
			}.apply(t, o)) && (e.exports = r)
		}, function(e, t, n) {
			var i, o;
			i = [], void 0 !== (o = function() {
				return "7.7.4+commercial_v7-7-4.127.commercial.8c45ad.jwplayer.39d271.freewheel.32fc26.googima.17c8c6.vast.10bf30.analytics.516c4b.plugin-gapro.7e936b.plugin-related.b37675.plugin-sharing.8b8aae"
			}.apply(t, i)) && (e.exports = o)
		}, , function(e, t, n) {
			var i, o;
			i = [n(2), n(53), n(173), n(1), n(3), n(189), n(4), n(6)], void 0 !== (o = function(e, t, n, i, o, r, a, s) {
				var l = function() {
						function r(e, t) {
							var n = i.extend({}, t, {
								type: e
							});
							switch (e) {
							case "flashThrottle":
								var o = "resume" !== t.state;
								this.set("flashThrottle", o), this.set("flashBlocked", o);
								break;
							case "flashBlocked":
								return void this.set("flashBlocked", !0);
							case "flashUnblocked":
								return void this.set("flashBlocked", !1);
							case "volume":
							case "mute":
								return void this.set(e, t[e]);
							case a.JWPLAYER_MEDIA_TYPE:
								return void(this.mediaModel.get("mediaType") !== t.mediaType && (this.mediaModel.set("mediaType", t.mediaType), this.mediaController.trigger(e, n)));
							case a.JWPLAYER_PLAYER_STATE:
								return void this.mediaModel.set("state", t.newstate);
							case a.JWPLAYER_MEDIA_BUFFER:
								this.set("buffer", t.bufferPercent);
							case a.JWPLAYER_MEDIA_META:
								var r = t.duration;
								i.isNumber(r) && !i.isNaN(r) && (this.mediaModel.set("duration", r), this.set("duration", r));
								break;
							case a.JWPLAYER_MEDIA_BUFFER_FULL:
								this.mediaModel.get("playAttempt") ? this.playVideo() : this.mediaModel.on("change:playAttempt", function() {
									this.playVideo()
								}, this);
								break;
							case a.JWPLAYER_MEDIA_TIME:
								this.mediaModel.set("position", t.position), this.set("position", t.position), i.isNumber(t.duration) && (this.mediaModel.set("duration", t.duration), this.set("duration", t.duration));
								break;
							case a.JWPLAYER_PROVIDER_CHANGED:
								this.set("provider", c.getName());
								break;
							case a.JWPLAYER_MEDIA_LEVELS:
								this.setQualityLevel(t.currentQuality, t.levels), this.mediaModel.set("levels", t.levels);
								break;
							case a.JWPLAYER_MEDIA_LEVEL_CHANGED:
								this.setQualityLevel(t.currentQuality, t.levels), this.persistQualityLevel(t.currentQuality, t.levels);
								break;
							case a.JWPLAYER_AUDIO_TRACKS:
								this.setCurrentAudioTrack(t.currentTrack, t.tracks), this.mediaModel.set("audioTracks", t.tracks);
								break;
							case a.JWPLAYER_AUDIO_TRACK_CHANGED:
								this.setCurrentAudioTrack(t.currentTrack, t.tracks);
								break;
							case "subtitlesTrackChanged":
								this.persistVideoSubtitleTrack(t.currentTrack, t.tracks);
								break;
							case "visualQuality":
								var s = i.extend({}, t);
								this.mediaModel.set("visualQuality", s)
							}
							this.mediaController.trigger(e, n)
						}
						var l, c, d = this,
							p = e.noop;
						this.mediaController = i.extend({}, o), this.mediaModel = new u, n.model(this), this.set("mediaModel", this.mediaModel), this.setup = function(t) {
							return i.extend(this.attributes, t, {
								item: 0,
								state: s.IDLE,
								flashBlocked: !1,
								fullscreen: !1,
								scrubbing: !1,
								duration: 0,
								position: 0,
								buffer: 0
							}), e.isMobile() && !t.mobileSdk && this.set("autostart", !1), this.updateProviders(), this
						}, this.getConfiguration = function() {
							return i.omit(this.clone(), ["mediaModel"])
						}, this.updateProviders = function() {
							l = new t(this.getConfiguration())
						}, this.setQualityLevel = function(e, t) {
							e > -1 && t.length > 1 && "youtube" !== c.getName().name && this.mediaModel.set("currentLevel", parseInt(e))
						}, this.persistQualityLevel = function(e, t) {
							var n = t[e] || {},
								i = n.label;
							this.set("qualityLabel", i)
						}, this.setCurrentAudioTrack = function(e, t) {
							e > -1 && t.length > 0 && e < t.length && this.mediaModel.set("currentAudioTrack", parseInt(e))
						}, this.onMediaContainer = function() {
							var e = this.get("mediaContainer");
							p.setContainer(e)
						}, this.changeVideoProvider = function(e) {
							if (this.off("change:mediaContainer", this.onMediaContainer), c && (c.off(null, null, this), c.getContainer() && c.remove(), delete c.instreamMode), !e) return c = p = e, void this.set("provider", void 0);
							p = new e(d.get("id"), d.getConfiguration());
							var t = this.get("mediaContainer");
							t ? p.setContainer(t) : this.once("change:mediaContainer", this.onMediaContainer), this.set("provider", p.getName()), -1 === p.getName().name.indexOf("flash") && (this.set("flashThrottle", void 0), this.set("flashBlocked", !1)), c = p, c.volume(d.get("volume")), c.mute(d.get("mute")), c.on("all", r, this), !0 === this.get("instreamMode") && (c.instreamMode = !0)
						}, this.destroy = function() {
							this.off(), c && (c.off(null, null, this), c.destroy())
						}, this.getVideo = function() {
							return c
						}, this.setFullscreen = function(e) {
							(e = !! e) !== d.get("fullscreen") && d.set("fullscreen", e)
						}, this.chooseProvider = function(e) {
							return l.choose(e).provider
						}, this.setItemIndex = function(e) {
							var t = this.get("playlist");
							e = parseInt(e, 10) || 0, e = (e + t.length) % t.length, this.set("item", e), this.set("playlistItem", t[e]), this.setActiveItem(t[e])
						}, this.setActiveItem = function(t) {
							this.mediaModel.off(), this.mediaModel = new u, this.set("mediaModel", this.mediaModel), this.set("position", t.starttime || 0), this.set("minDvrWindow", t.minDvrWindow), this.set("duration", t.duration && e.seconds(t.duration) || 0), this.setProvider(t)
						}, this.setProvider = function(e) {
							var t = e && e.sources && e.sources[0];
							if (void 0 !== t) {
								var n = this.chooseProvider(t);
								n && p instanceof n || d.changeVideoProvider(n), p && (p.init && p.init(e), this.trigger("itemReady", e))
							}
						}, this.getProviders = function() {
							return l
						}, this.resetProvider = function() {
							p = null
						}, this.setVolume = function(e) {
							e = Math.round(e), this.set("volume", e), c && c.volume(e);
							var t = 0 === e;
							t !== this.get("mute") && this.setMute(t)
						}, this.setMute = function(t) {
							if (e.exists(t) || (t = !this.get("mute")), this.set("mute", t), c && c.mute(t), !t) {
								var n = Math.max(10, this.get("volume"));
								this.setVolume(n)
							}
						}, this.loadVideo = function(t) {
							if (!t) {
								var n = this.get("item");
								t = this.get("playlist")[n]
							}
							this.set("position", t.starttime || 0), this.set("duration", t.duration && e.seconds(t.duration) || 0), this.mediaModel.set("playAttempt", !0), this.mediaController.trigger(a.JWPLAYER_MEDIA_PLAY_ATTEMPT, {
								playReason: this.get("playReason")
							}), c.load(t)
						}, this.stopVideo = function() {
							c && c.stop()
						}, this.playVideo = function() {
							c.play()
						}, this.persistCaptionsTrack = function() {
							var e = this.get("captionsTrack");
							e ? this.set("captionLabel", e.name) : this.set("captionLabel", "Off")
						}, this.setVideoSubtitleTrack = function(e, t) {
							this.set("captionsIndex", e), e && t && e <= t.length && t[e - 1].data && this.set("captionsTrack", t[e - 1]), c && c.setSubtitlesTrack && c.setSubtitlesTrack(e)
						}, this.persistVideoSubtitleTrack = function(e, t) {
							this.setVideoSubtitleTrack(e, t), this.persistCaptionsTrack()
						}, this.setNextUp = function(e) {
							this.set("nextUp", e)
						}
					},
					u = l.MediaModel = function() {
						this.set("state", s.IDLE)
					};
				return i.extend(l.prototype, r), i.extend(u.prototype, r), l
			}.apply(t, i)) && (e.exports = o)
		}, function(e, t, n) {
			var i, o;
			i = [n(8)], void 0 !== (o = function(e) {
				var t = {},
					n = t.pluginPathType = {
						ABSOLUTE: 0,
						RELATIVE: 1,
						CDN: 2
					};
				return t.getPluginPathType = function(t) {
					if ("string" == typeof t) {
						t = t.split("?")[0];
						var i = t.indexOf("://");
						if (i > 0) return n.ABSOLUTE;
						var o = t.indexOf("/"),
							r = e.extension(t);
						return !(i < 0 && o < 0) || r && isNaN(r) ? n.RELATIVE : n.CDN
					}
				}, t.getPluginName = function(e) {
					return e.replace(/^(.*\/)?([^-]*)-?.*\.(swf|js)$/, "$2")
				}, t.getPluginVersion = function(e) {
					return e.replace(/[^-]*-?([^\.]*).*$/, "$1")
				}, t
			}.apply(t, i)) && (e.exports = o)
		}, function(e, t, n) {
			var i, o;
			i = [], void 0 !== (o = function() {
				var e = window.chrome,
					t = {};
				return t.NS = "urn:x-cast:com.longtailvideo.jwplayer", t.debug = !1, t.availability = null, t.available = function(n) {
					n = n || t.availability;
					var i = "available";
					return e && e.cast && e.cast.ReceiverAvailability && (i = e.cast.ReceiverAvailability.AVAILABLE), n === i
				}, t.log = function() {
					if (t.debug) {
						var e = Array.prototype.slice.call(arguments, 0);
						console.log.apply(console, e)
					}
				}, t.error = function() {
					var e = Array.prototype.slice.call(arguments, 0);
					console.error.apply(console, e)
				}, t
			}.apply(t, i)) && (e.exports = o)
		}, , , , , , , , function(e, t, n) {
			var i, o;
			i = [n(6)], void 0 !== (o = function(e) {
				function t(t) {
					return t === e.COMPLETE || t === e.ERROR ? e.IDLE : t
				}
				return function(e, n, i) {
					if (n = t(n), i = t(i), n !== i) {
						var o = n.replace(/(?:ing|d)$/, ""),
							r = {
								type: o,
								newstate: n,
								oldstate: i,
								reason: e.mediaModel.get("state")
							};
						"play" === o && (r.playReason = e.get("playReason")), this.trigger(o, r)
					}
				}
			}.apply(t, i)) && (e.exports = o)
		}, function(e, t, n) {
			var i, o;
			i = [n(2), n(8)], void 0 !== (o = function(e, t) {
				function n(e) {
					var t = {},
						n = e.split("\r\n");
					1 === n.length && (n = e.split("\n"));
					var o = 1;
					if (n[0].indexOf(" --\x3e ") > 0 && (o = 0), n.length > o + 1 && n[o + 1]) {
						var r = n[o],
							a = r.indexOf(" --\x3e ");
						a > 0 && (t.begin = i(r.substr(0, a)), t.end = i(r.substr(a + 5)), t.text = n.slice(o + 1).join("\r\n"))
					}
					return t
				}
				var i = e.seconds;
				return function(e) {
					var i = [];
					e = t.trim(e);
					var o = e.split("\r\n\r\n");
					1 === o.length && (o = e.split("\n\n"));
					for (var r = 0; r < o.length; r++) if ("WEBVTT" !== o[r]) {
						var a = n(o[r]);
						a.text && i.push(a)
					}
					return i
				}
			}.apply(t, i)) && (e.exports = o)
		}, function(e, t, n) {
			var i, o;
			i = [n(1), n(73), n(180)], void 0 !== (o = function(e, t, n) {
				var i = {
					sources: [],
					tracks: [],
					minDvrWindow: 120
				};
				return function(o) {
					o = o || {}, e.isArray(o.tracks) || delete o.tracks;
					var r = e.extend({}, i, o);
					e.isObject(r.sources) && !e.isArray(r.sources) && (r.sources = [t(r.sources)]), e.isArray(r.sources) && 0 !== r.sources.length || (o.levels ? r.sources = o.levels : r.sources = [t(o)]);
					for (var a = 0; a < r.sources.length; a++) {
						var s = r.sources[a];
						if (s) {
							var l = s.
						default;
							s.
						default = !! l && "true" === l.toString(), r.sources[a].label || (r.sources[a].label = a.toString()), r.sources[a] = t(r.sources[a])
						}
					}
					return r.sources = e.compact(r.sources), e.isArray(r.tracks) || (r.tracks = []), e.isArray(r.captions) && (r.tracks = r.tracks.concat(r.captions), delete r.captions), r.tracks = e.compact(e.map(r.tracks, n)), r
				}
			}.apply(t, i)) && (e.exports = o)
		}, function(e, t, n) {
			var i, o;
			i = [n(1), n(46)], void 0 !== (o = function(e, t) {
				function n(e) {
					e.onload = null, e.onprogress = null, e.onreadystatechange = null, e.onerror = null, "abort" in e && e.abort()
				}
				function i(t, i) {
					return function(o) {
						var r = o.currentTarget || i.xhr;
						if (clearTimeout(i.timeoutId), i.retryWithoutCredentials && i.xhr.withCredentials) {
							n(r);
							var a = e.extend({}, i, {
								xhr: null,
								withCredentials: !1,
								retryWithoutCredentials: !1
							});
							return void d(a)
						}
						i.onerror(t, i.url, r)
					}
				}
				function o(e) {
					return function(t) {
						var n = t.currentTarget || e.xhr;
						if (4 === n.readyState) {
							if (clearTimeout(e.timeoutId), n.status >= 400) {
								var i;
								return i = 404 === n.status ? "File not found" : n.status + "(" + n.statusText + ")", e.onerror(i, e.url, n)
							}
							if (200 === n.status) return r(e)(t)
						}
					}
				}
				function r(e) {
					return function(n) {
						var i = n.currentTarget || e.xhr;
						if (clearTimeout(e.timeoutId), e.responseType) {
							if ("json" === e.responseType) return a(i, e)
						} else {
							var o, r = i.responseXML;
							if (r) try {
								o = r.firstChild
							} catch (e) {}
							if (r && o) return s(i, r, e);
							if (u && i.responseText && !r && (r = t.parseXML(i.responseText)) && r.firstChild) return s(i, r, e);
							if (e.requireValidXML) return void e.onerror("Invalid XML", e.url, i)
						}
						e.oncomplete(i)
					}
				}
				function a(t, n) {
					if (!t.response || e.isString(t.response) && '"' !== t.responseText.substr(1)) try {
						t = e.extend({}, t, {
							response: JSON.parse(t.responseText)
						})
					} catch (e) {
						return void n.onerror("Invalid JSON", n.url, t)
					}
					return n.oncomplete(t)
				}
				function s(t, n, i) {
					var o = n.documentElement;
					return i.requireValidXML && ("parsererror" === o.nodeName || o.getElementsByTagName("parsererror").length) ? void i.onerror("Invalid XML", i.url, t) : (t.responseXML || (t = e.extend({}, t, {
						responseXML: n
					})), i.oncomplete(t))
				}
				var l = function() {},
					u = !1,
					c = function(e) {
						var t = document.createElement("a"),
							n = document.createElement("a");
						t.href = location.href;
						try {
							return n.href = e, n.href = n.href, t.protocol + "//" + t.host != n.protocol + "//" + n.host
						} catch (e) {}
						return !0
					},
					d = function(t, a, s, d) {
						e.isObject(t) && (d = t, t = d.url);
						var p, h = e.extend({
							xhr: null,
							url: t,
							withCredentials: !1,
							retryWithoutCredentials: !1,
							timeout: 6e4,
							timeoutId: -1,
							oncomplete: a || l,
							onerror: s || l,
							mimeType: d && !d.responseType ? "text/xml" : "",
							requireValidXML: !1,
							responseType: d && d.plainText ? "text" : ""
						}, d);
						if ("XDomainRequest" in window && c(t)) p = h.xhr = new window.XDomainRequest, p.onload = r(h), p.ontimeout = p.onprogress = l, u = !0;
						else {
							if (!("XMLHttpRequest" in window)) return void h.onerror("", t);
							p = h.xhr = new window.XMLHttpRequest, p.onreadystatechange = o(h)
						}
						var f = i("Error loading file", h);
						p.onerror = f, "overrideMimeType" in p ? h.mimeType && p.overrideMimeType(h.mimeType) : u = !0;
						try {
							t = t.replace(/#.*$/, ""), p.open("GET", t, !0)
						} catch (e) {
							return f(e), p
						}
						if (h.responseType) try {
							p.responseType = h.responseType
						} catch (e) {}
						h.timeout && (h.timeoutId = setTimeout(function() {
							n(p), h.onerror("Timeout", t, p)
						}, h.timeout), p.onabort = function() {
							clearTimeout(h.timeoutId)
						});
						try {
							h.withCredentials && "withCredentials" in p && (p.withCredentials = !0), p.send()
						} catch (e) {
							f(e)
						}
						return p
					};
				return {
					ajax: d,
					crossdomain: c
				}
			}.apply(t, i)) && (e.exports = o)
		}, function(e, t, n) {
			var i, o;
			i = [n(8), n(1), n(188)], void 0 !== (o = function(e, t, n) {
				var i = {};
				i.createElement = function(e) {
					var t = document.createElement("div");
					return t.innerHTML = e, t.firstChild
				}, i.styleDimension = function(e) {
					return e + (e.toString().indexOf("%") > 0 ? "" : "px")
				};
				var o = function(e) {
						return t.isString(e.className) ? e.className.split(" ") : []
					},
					r = function(t, n) {
						n = e.trim(n), t.className !== n && (t.className = n)
					};
				return i.classList = function(e) {
					return e.classList ? e.classList : o(e)
				}, i.hasClass = n.hasClass, i.addClass = function(e, n) {
					var i = o(e),
						a = t.isArray(n) ? n : n.split(" ");
					t.each(a, function(e) {
						t.contains(i, e) || i.push(e)
					}), r(e, i.join(" "))
				}, i.removeClass = function(e, n) {
					var i = o(e),
						a = t.isArray(n) ? n : n.split(" ");
					r(e, t.difference(i, a).join(" "))
				}, i.replaceClass = function(e, t, n) {
					var i = e.className || "";
					t.test(i) ? i = i.replace(t, n) : n && (i += " " + n), r(e, i)
				}, i.toggleClass = function(e, n, o) {
					var r = i.hasClass(e, n);
					(o = t.isBoolean(o) ? o : !r) !== r && (o ? i.addClass(e, n) : i.removeClass(e, n))
				}, i.emptyElement = function(e) {
					for (; e.firstChild;) e.removeChild(e.firstChild)
				}, i.addStyleSheet = function(e) {
					var t = document.createElement("link");
					t.rel = "stylesheet", t.href = e, document.getElementsByTagName("head")[0].appendChild(t)
				}, i.empty = function(e) {
					if (e) for (; e.childElementCount > 0;) e.removeChild(e.children[0])
				}, i.bounds = function(e) {
					var t = {
						left: 0,
						right: 0,
						width: 0,
						height: 0,
						top: 0,
						bottom: 0
					};
					if (!e || !document.body.contains(e)) return t;
					var n = e.getBoundingClientRect(),
						i = window.pageYOffset,
						o = window.pageXOffset;
					return n.width || n.height || n.left || n.top ? (t.left = n.left + o, t.right = n.right + o, t.top = n.top + i, t.bottom = n.bottom + i, t.width = n.right - n.left, t.height = n.bottom - n.top, t) : t
				}, i
			}.apply(t, i)) && (e.exports = o)
		}, function(e, t, n) {
			var i, o;
			i = [n(1), n(47)], void 0 !== (o = function(e, t) {
				function n(e) {
					return /^(?:(?:https?|file)\:)?\/\//.test(e)
				}
				function i(t) {
					return e.some(t, function(e) {
						return "parsererror" === e.nodeName
					})
				}
				var o = {};
				return o.getAbsolutePath = function(e, i) {
					if (t.exists(i) || (i = document.location.href), t.exists(e)) {
						if (n(e)) return e;
						var o, r = i.substring(0, i.indexOf("://") + 3),
							a = i.substring(r.length, i.indexOf("/", r.length + 1));
						if (0 === e.indexOf("/")) o = e.split("/");
						else {
							var s = i.split("?")[0];
							s = s.substring(r.length + a.length + 1, s.lastIndexOf("/")), o = s.split("/").concat(e.split("/"))
						}
						for (var l = [], u = 0; u < o.length; u++) o[u] && t.exists(o[u]) && "." !== o[u] && (".." === o[u] ? l.pop() : l.push(o[u]));
						return r + a + "/" + l.join("/")
					}
				}, o.getScriptPath = e.memoize(function(e) {
					for (var t = document.getElementsByTagName("script"), n = 0; n < t.length; n++) {
						var i = t[n].src;
						if (i && i.indexOf(e) >= 0) return i.substr(0, i.indexOf(e))
					}
					return ""
				}), o.parseXML = function(e) {
					var t = null;
					try {
						"DOMParser" in window ? (t = (new window.DOMParser).parseFromString(e, "text/xml"), (i(t.childNodes) || t.childNodes && i(t.childNodes[0].childNodes)) && (t = null)) : (t = new window.ActiveXObject("Microsoft.XMLDOM"), t.async = "false", t.loadXML(e))
					} catch (e) {}
					return t
				}, o.serialize = function(e) {
					if (void 0 === e) return null;
					if ("string" == typeof e && e.length < 6) {
						var t = e.toLowerCase();
						if ("true" === t) return !0;
						if ("false" === t) return !1;
						if (!isNaN(Number(e)) && !isNaN(parseFloat(e))) return Number(e)
					}
					return e
				}, o.parseDimension = function(e) {
					return "string" == typeof e ? "" === e ? 0 : e.lastIndexOf("%") > -1 ? e : parseInt(e.replace("px", ""), 10) : e
				}, o.timeFormat = function(t, n) {
					if (t <= 0 && !n || e.isNaN(parseInt(t))) return "00:00";
					var i = t < 0 ? "-" : "";
					t = Math.abs(t);
					var o = Math.floor(t / 3600),
						r = Math.floor((t - 3600 * o) / 60),
						a = Math.floor(t % 60);
					return i + (o ? o + ":" : "") + (r < 10 ? "0" : "") + r + ":" + (a < 10 ? "0" : "") + a
				}, o.streamType = function(t, n) {
					var i = e.isUndefined(n) ? 120 : n,
						o = "VOD";
					return t === 1 / 0 ? o = "LIVE" : t < 0 && (o = Math.abs(t) >= Math.max(i, 0) ? "DVR" : "LIVE"), o
				}, o
			}.apply(t, i)) && (e.exports = o)
		}, function(e, t, n) {
			var o, r;
			o = [n(1)], void 0 !== (r = function(e) {
				var t = {};
				return t.exists = function(e) {
					switch (void 0 === e ? "undefined" : i(e)) {
					case "string":
						return e.length > 0;
					case "object":
						return null !== e;
					case "undefined":
						return !1
					}
					return !0
				}, t.isHTTPS = function() {
					return 0 === window.location.href.indexOf("https")
				}, t.isRtmp = function(e, t) {
					return 0 === e.indexOf("rtmp") || "rtmp" === t
				}, t.isYouTube = function(e, t) {
					return "youtube" === t || /^(http|\/\/).*(youtube\.com|youtu\.be)\/.+/.test(e)
				}, t.youTubeID = function(e) {
					var t = /v[=\/]([^?&]*)|youtu\.be\/([^?]*)|^([\w-]*)$/i.exec(e);
					return t ? t.slice(1).join("").replace("?", "") : ""
				}, t.typeOf = function(t) {
					if (null === t) return "null";
					var n = void 0 === t ? "undefined" : i(t);
					return "object" === n && e.isArray(t) ? "array" : n
				}, t
			}.apply(t, o)) && (e.exports = r)
		}, function(e, t, n) {
			var i, o;
			i = [n(80), n(9), n(145), n(2)], void 0 !== (o = function(e, t, n, i) {
				return e.extend({
					constructor: function(e, t) {
						this.className = e + " jw-background-color jw-reset", this.orientation = t, this.dragStartListener = this.dragStart.bind(this), this.dragMoveListener = this.dragMove.bind(this), this.dragEndListener = this.dragEnd.bind(this), this.tapListener = this.tap.bind(this), this.setup()
					},
					setup: function() {
						var e = {
						default:
							this.
						default, className:
							this.className, orientation: "jw-slider-" + this.orientation
						};
						this.el = i.createElement(n(e)), this.elementRail = this.el.getElementsByClassName("jw-slider-container")[0], this.elementBuffer = this.el.getElementsByClassName("jw-buffer")[0], this.elementProgress = this.el.getElementsByClassName("jw-progress")[0], this.elementThumb = this.el.getElementsByClassName("jw-knob")[0], this.userInteract = new t(this.element(), {
							preventScrolling: !0
						}), this.userInteract.on("dragStart", this.dragStartListener), this.userInteract.on("drag", this.dragMoveListener), this.userInteract.on("dragEnd", this.dragEndListener), this.userInteract.on("tap click", this.tapListener)
					},
					dragStart: function() {
						this.trigger("dragStart"), this.railBounds = i.bounds(this.elementRail)
					},
					dragEnd: function(e) {
						this.dragMove(e), this.trigger("dragEnd")
					},
					dragMove: function(e) {
						var t, n, o = this.railBounds = this.railBounds ? this.railBounds : i.bounds(this.elementRail);
						"horizontal" === this.orientation ? (t = e.pageX, n = t < o.left ? 0 : t > o.right ? 100 : 100 * i.between((t - o.left) / o.width, 0, 1)) : (t = e.pageY, n = t >= o.bottom ? 0 : t <= o.top ? 100 : 100 * i.between((o.height - (t - o.top)) / o.height, 0, 1));
						var r = this.limit(n);
						return this.render(r), this.update(r), !1
					},
					tap: function(e) {
						this.railBounds = i.bounds(this.elementRail), this.dragMove(e)
					},
					limit: function(e) {
						return e
					},
					update: function(e) {
						this.trigger("update", {
							percentage: e
						})
					},
					render: function(e) {
						e = Math.max(0, Math.min(e, 100)), "horizontal" === this.orientation ? (this.elementThumb.style.left = e + "%", this.elementProgress.style.width = e + "%") : (this.elementThumb.style.bottom = e + "%", this.elementProgress.style.height = e + "%")
					},
					updateBuffer: function(e) {
						this.elementBuffer.style.width = e + "%"
					},
					element: function() {
						return this.el
					}
				})
			}.apply(t, i)) && (e.exports = o)
		}, function(e, t, n) {
			var i, o;
			i = [n(80), n(2)], void 0 !== (o = function(e, t) {
				return e.extend({
					constructor: function(e, t, n) {
						this.el = document.createElement("div"), this.el.className = "jw-icon jw-icon-tooltip " + e + " jw-button-color jw-reset jw-hidden", t && (this.el.setAttribute("tabindex", "0"), this.el.setAttribute("role", "button"), this.el.setAttribute("aria-label", t)), !0 === n ? this.el.setAttribute("aria-hidden", "false") : this.el.setAttribute("aria-hidden", "true"), this.container = document.createElement("div"), this.container.className = "jw-overlay jw-reset", this.openClass = "jw-open", this.componentType = "tooltip", this.el.appendChild(this.container)
					},
					addContent: function(e) {
						this.content && this.removeContent(), this.content = e, this.container.appendChild(e)
					},
					removeContent: function() {
						this.content && (this.container.removeChild(this.content), this.content = null)
					},
					hasContent: function() {
						return !!this.content
					},
					element: function() {
						return this.el
					},
					openTooltip: function(e) {
						this.trigger("open-" + this.componentType, e, {
							isOpen: !0
						}), this.isOpen = !0, t.toggleClass(this.el, this.openClass, this.isOpen)
					},
					closeTooltip: function(e) {
						this.trigger("close-" + this.componentType, e, {
							isOpen: !1
						}), this.isOpen = !1, t.toggleClass(this.el, this.openClass, this.isOpen)
					},
					toggleOpenState: function(e) {
						this.isOpen ? this.closeTooltip(e) : this.openTooltip(e)
					}
				})
			}.apply(t, i)) && (e.exports = o)
		}, , function(e, t, n) {
			var i, o;
			i = [n(1), n(20)], void 0 !== (o = function(e, t) {
				var n, i = [{
					configName: "clearkey",
					keyName: "org.w3.clearkey"
				}, {
					configName: "widevine",
					keyName: "com.widevine.alpha"
				}, {
					configName: "playready",
					keyName: "com.microsoft.playready"
				}],
					o = [],
					r = {},
					a = function(t) {
						var n = t.get("playlist");
						return !!t.get("drm") || e.some(n, function(t) {
							return !!t.drm || e.some(t.sources, function(e) {
								return !!e.drm
							})
						})
					},
					s = function(e) {
						return new Promise(function(t, n) {
							var i;
							try {
								i = new window.MSMediaKeys(e)
							} catch (e) {}
							i ? t() : n()
						})
					},
					l = function(t) {
						var a = s;
						return navigator.requestMediaKeySystemAccess && (a = navigator.requestMediaKeySystemAccess.bind(navigator)), n ? n.then(t) : (e.forEach(i, function(e) {
							var t = a(e.keyName, [{}]).then(function() {
								r[e.configName] = !0
							}, function() {
								r[e.configName] = !1
							});
							o.push(t)
						}), n = Promise.all(o).then(t))
					},
					u = function() {
						return !!navigator.requestMediaKeySystemAccess && !! MediaKeySystemAccess.prototype.getConfiguration || !! window.MSMediaKeys
					},
					c = function(e) {
						return r[e]
					},
					d = function(t) {
						n || console.error('DRM only supported with "drm" block in initial setup.', t);
						var i = e.keys(t);
						return e.some(i, function(e) {
							return c(e)
						})
					};
				return {
					containsDrm: a,
					probe: function(e, n) {
						u() && t(n)("drm") ? l(e) : e()
					},
					anySupported: d,
					isSupported: c
				}
			}.apply(t, i)) && (e.exports = o)
		}, function(e, t, n) {
			var i, o;
			i = [n(26), n(20), n(1), n(185), n(51)], void 0 !== (o = function(e, t, n, i, o) {
				function r() {
					return !!window.MediaSource && !! window.MediaSource.isTypeSupported && window.MediaSource.isTypeSupported('video/mp4;codecs="avc1.4d400d,mp4a.40.2"')
				}
				function a(i, r) {
					if (e.isSafari()) return !1;
					if (!t(r)("dash")) return !1;
					if (i.drm && !o.anySupported(i.drm)) return !1;
					var a = window.MediaSource;
					if (!window.HTMLVideoElement || !a) return !1;
					var s = !0;
					return i.mediaTypes && (s = n.all(i.mediaTypes, function(e) {
						return a.isTypeSupported(e)
					})), s && ("dash" === i.type || "mpd" === i.type || (i.file || "").indexOf("mpd-time-csf") > -1)
				}
				var s = n.find(i, n.matches({
					name: "flash"
				})),
					l = s.supports;
				s.supports = function(n, i) {
					if (!e.isFlashSupported() || n.drm) return !1;
					var o = n && n.type;
					if ("hls" === o || "m3u8" === o) {
						return t(i)("hls")
					}
					return l.apply(this, arguments)
				};
				var u = n.find(i, n.matches({
					name: "html5"
				})),
					c = u.supports;
				return u.supports = function(e, n) {
					var i = c.apply(this, arguments);
					if (i && e.drm && "hls" === e.type) {
						var o = t(n),
							r = o("drm");
						if (r && e.drm.fairplay) {
							var a = window.WebKitMediaKeys;
							return a && a.isTypeSupported && a.isTypeSupported("com.apple.fps.1_0", "video/mp4")
						}
						return r
					}
					return i
				}, i.push({
					name: "shaka",
					supports: a
				}), i.push({
					name: "caterpillar",
					supports: function(n, i) {
						if ((e.isChrome() || e.isFF()) && r() && !e.isMobile() && !n.drm) {
							var o = n && n.type;
							if ((n && n.file).indexOf(".m3u8") > -1 || "hls" === o || "m3u8" === o) {
								return t(i)("hls")
							}
						}
					}
				}), i
			}.apply(t, i)) && (e.exports = o)
		}, function(e, t, n) {
			var i, o;
			i = [n(186), n(1), n(52)], void 0 !== (o = function(e, t) {
				var i, o = e.registerProvider,
					r = e.prototype.reorderProviders;
				return t.extend(e.loaders, {
					caterpillar: function(e) {
						n.e(1, function(t) {
							var r = n(90);
							r.setEdition && r.setEdition(i), o(r), e(r)
						})
					},
					shaka: function(e) {
						n.e(2, function(t) {
							var i = n(92);
							o(i), e(i)
						})
					}
				}), t.extend(e.prototype, {
					reorderProviders: function(e) {
						var n = r.call(this, e);
						if ("flash" !== e && !0 === this.config.hlshtml) {
							var i = t.indexOf(n, t.findWhere(n, {
								name: "caterpillar"
							})),
								o = n.splice(i, 1)[0],
								a = t.indexOf(n, t.findWhere(n, {
									name: "flash"
								}));
							n.splice(a, 0, o)
						}
						return n
					},
					providerSupports: function(e, t) {
						return i = this.config.edition, e.supports(t, i)
					}
				}), e
			}.apply(t, i)) && (e.exports = o)
		}, , , , , , , , , , , , , function(e, t, n) {
			function i(e) {
				return e && e.__esModule ? e : {
				default:
					e
				}
			}
			function o(e, t, n) {
				this.helpers = e || {}, this.partials = t || {}, this.decorators = n || {}, l.registerDefaultHelpers(this), u.registerDefaultDecorators(this)
			}
			t.__esModule = !0, t.HandlebarsEnvironment = o;
			var r = n(13),
				a = n(22),
				s = i(a),
				l = n(150),
				u = n(148),
				c = n(158),
				d = i(c);
			t.VERSION = "4.0.5";
			t.COMPILER_REVISION = 7;
			var p = {
				1: "<= 1.0.rc.2",
				2: "== 1.0.0-rc.3",
				3: "== 1.0.0-rc.4",
				4: "== 1.x.x",
				5: "== 2.0.0-alpha.x",
				6: ">= 2.0.0-beta.1",
				7: ">= 4.0.0"
			};
			t.REVISION_CHANGES = p;
			var h = "[object Object]";
			o.prototype = {
				constructor: o,
				logger: d.
			default,
				log:
				d.
			default.log,
				registerHelper:


				function(e, t) {
					if (r.toString.call(e) === h) {
						if (t) throw new s.
					default ("Arg not supported with multiple helpers");
						r.extend(this.helpers, e)
					} else this.helpers[e] = t
				},
				unregisterHelper: function(e) {
					delete this.helpers[e]
				},
				registerPartial: function(e, t) {
					if (r.toString.call(e) === h) r.extend(this.partials, e);
					else {
						if (void 0 === t) throw new s.
					default ('Attempting to register a partial called "' + e + '" as undefined');
						this.partials[e] = t
					}
				},
				unregisterPartial: function(e) {
					delete this.partials[e]
				},
				registerDecorator: function(e, t) {
					if (r.toString.call(e) === h) {
						if (t) throw new s.
					default ("Arg not supported with multiple decorators");
						r.extend(this.decorators, e)
					} else this.decorators[e] = t
				},
				unregisterDecorator: function(e) {
					delete this.decorators[e]
				}
			};
			var f = d.
		default.log;
			t.log = f, t.createFrame = r.createFrame, t.logger = d.
		default
		}, function(e, t, n) {
			var i, o;
			i = [n(2), n(1)], void 0 !== (o = function(e, t) {
				function i(n) {
					t.each(n, function(t, i) {
						n[i] = e.serialize(t)
					})
				}
				function o(e) {
					return e.slice && "px" === e.slice(-2) && (e = e.slice(0, -2)), e
				}
				function r(t, n) {
					if (-1 === n.toString().indexOf("%")) return 0;
					if ("string" != typeof t || !e.exists(t)) return 0;
					if (/^\d*\.?\d+%$/.test(t)) return t;
					var i = t.indexOf(":");
					if (-1 === i) return 0;
					var o = parseFloat(t.substr(0, i)),
						r = parseFloat(t.substr(i + 1));
					return o <= 0 || r <= 0 ? 0 : r / o * 100 + "%"
				}
				var a = {
					autostart: !1,
					controls: !0,
					displaytitle: !0,
					displaydescription: !0,
					mobilecontrols: !1,
					repeat: !1,
					castAvailable: !1,
					skin: "seven",
					stretching: "uniform",
					mute: !1,
					volume: 90,
					width: 480,
					height: 270,
					localization: {
						play: "Play",
						playback: "Start playback",
						pause: "Pause",
						volume: "Volume",
						prev: "Previous",
						next: "Next",
						cast: "Chromecast",
						fullscreen: "Fullscreen",
						playlist: "Playlist",
						hd: "Quality",
						cc: "Closed captions",
						audioTracks: "Audio tracks",
						replay: "Replay",
						buffer: "Loading",
						more: "More",
						liveBroadcast: "Live broadcast",
						loadingAd: "Loading ad",
						rewind: "Rewind 10s",
						nextUp: "Next Up",
						related: "Related"
					}
				};
				return function(s, l) {
					var u = l && l.getAllItems(),
						c = t.extend({}, (window.jwplayer || {}).defaults, u, s);
					i(c), c.localization = t.extend({}, a.localization, c.localization);
					var d = t.extend({}, a, c);
					if ("." === d.base && (d.base = e.getScriptPath("jwplayer.js")), d.base = (d.base || e.loadFrom()).replace(/\/?$/, "/"), n.p = d.base, d.width = o(d.width), d.height = o(d.height), d.flashplayer = d.flashplayer || (e.getScriptPath("jwplayer.js") || d.base) + "jwplayer.flash.swf", "http:" === window.location.protocol && (d.flashplayer = d.flashplayer.replace("https", "http")), d.aspectratio = r(d.aspectratio, d.width), t.isObject(d.skin) && (d.skinUrl = d.skin.url, d.skinColorInactive = d.skin.inactive, d.skinColorActive = d.skin.active, d.skinColorBackground = d.skin.background, d.skin = t.isString(d.skin.name) ? d.skin.name : a.skin), t.isString(d.skin) && d.skin.indexOf(".xml") > 0 && (console.log("JW Player does not support XML skins, please update your config"), d.skin = d.skin.replace(".xml", "")), d.aspectratio || delete d.aspectratio, !d.playlist) {
						var p = t.pick(d, ["title", "description", "type", "mediaid", "image", "file", "sources", "tracks", "preload"]);
						d.playlist = [p]
					}
					return d
				}
			}.apply(t, i)) && (e.exports = o)
		}, function(e, t, n) {
			var i;
			void 0 !== (i = function() {
				function e(e) {
					return "string" == typeof e && ( !! r[e.toLowerCase()] && e.toLowerCase())
				}
				function t(e) {
					return "string" == typeof e && ( !! a[e.toLowerCase()] && e.toLowerCase())
				}
				function n(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var i in n) e[i] = n[i]
					}
					return e
				}
				function i(i, r, a) {
					var s = this,
						l = /MSIE\s8\.0/.test(navigator.userAgent),
						u = {};
					l ? s = document.createElement("custom") : u.enumerable = !0, s.hasBeenReset = !1;
					var c = "",
						d = !1,
						p = i,
						h = r,
						f = a,
						g = null,
						m = "",
						w = !0,
						v = "auto",
						y = "start",
						j = 50,
						b = "middle",
						E = 50,
						k = "middle";
					if (Object.defineProperty(s, "id", n({}, u, {
						get: function() {
							return c
						},
						set: function(e) {
							c = "" + e
						}
					})), Object.defineProperty(s, "pauseOnExit", n({}, u, {
						get: function() {
							return d
						},
						set: function(e) {
							d = !! e
						}
					})), Object.defineProperty(s, "startTime", n({}, u, {
						get: function() {
							return p
						},
						set: function(e) {
							if ("number" != typeof e) throw new TypeError("Start time must be set to a number.");
							p = e, this.hasBeenReset = !0
						}
					})), Object.defineProperty(s, "endTime", n({}, u, {
						get: function() {
							return h
						},
						set: function(e) {
							if ("number" != typeof e) throw new TypeError("End time must be set to a number.");
							h = e, this.hasBeenReset = !0
						}
					})), Object.defineProperty(s, "text", n({}, u, {
						get: function() {
							return f
						},
						set: function(e) {
							f = "" + e, this.hasBeenReset = !0
						}
					})), Object.defineProperty(s, "region", n({}, u, {
						get: function() {
							return g
						},
						set: function(e) {
							g = e, this.hasBeenReset = !0
						}
					})), Object.defineProperty(s, "vertical", n({}, u, {
						get: function() {
							return m
						},
						set: function(t) {
							var n = e(t);
							if (!1 === n) throw new SyntaxError("An invalid or illegal string was specified.");
							m = n, this.hasBeenReset = !0
						}
					})), Object.defineProperty(s, "snapToLines", n({}, u, {
						get: function() {
							return w
						},
						set: function(e) {
							w = !! e, this.hasBeenReset = !0
						}
					})), Object.defineProperty(s, "line", n({}, u, {
						get: function() {
							return v
						},
						set: function(e) {
							if ("number" != typeof e && e !== o) throw new SyntaxError("An invalid number or illegal string was specified.");
							v = e, this.hasBeenReset = !0
						}
					})), Object.defineProperty(s, "lineAlign", n({}, u, {
						get: function() {
							return y
						},
						set: function(e) {
							var n = t(e);
							if (!n) throw new SyntaxError("An invalid or illegal string was specified.");
							y = n, this.hasBeenReset = !0
						}
					})), Object.defineProperty(s, "position", n({}, u, {
						get: function() {
							return j
						},
						set: function(e) {
							if (e < 0 || e > 100) throw new Error("Position must be between 0 and 100.");
							j = e, this.hasBeenReset = !0
						}
					})), Object.defineProperty(s, "positionAlign", n({}, u, {
						get: function() {
							return b
						},
						set: function(e) {
							var n = t(e);
							if (!n) throw new SyntaxError("An invalid or illegal string was specified.");
							b = n, this.hasBeenReset = !0
						}
					})), Object.defineProperty(s, "size", n({}, u, {
						get: function() {
							return E
						},
						set: function(e) {
							if (e < 0 || e > 100) throw new Error("Size must be between 0 and 100.");
							E = e, this.hasBeenReset = !0
						}
					})), Object.defineProperty(s, "align", n({}, u, {
						get: function() {
							return k
						},
						set: function(e) {
							var n = t(e);
							if (!n) throw new SyntaxError("An invalid or illegal string was specified.");
							k = n, this.hasBeenReset = !0
						}
					})), s.displayState = void 0, l) return s
				}
				if (window.VTTCue) return window.VTTCue;
				var o = "auto",
					r = {
						"": !0,
						lr: !0,
						rl: !0
					},
					a = {
						start: !0,
						middle: !0,
						end: !0,
						left: !0,
						right: !0
					};
				return i.prototype.getCueAsHTML = function() {
					return window.WebVTT.convertCueToDOMTree(window, this.text)
				}, i
			}.call(t, n, t, e)) && (e.exports = i)
		}, , function(e, t, n) {
			var i, o;
			i = [n(8), n(24), n(178), n(179), n(43)], void 0 !== (o = function(e, t, n, i, o) {
				function r(t) {
					for (var r = {}, s = 0; s < t.childNodes.length; s++) {
						var l = t.childNodes[s],
							c = u(l);
						if (c) switch (c.toLowerCase()) {
						case "enclosure":
							r.file = e.xmlAttribute(l, "url");
							break;
						case "title":
							r.title = a(l);
							break;
						case "guid":
							r.mediaid = a(l);
							break;
						case "pubdate":
							r.date = a(l);
							break;
						case "description":
							r.description = a(l);
							break;
						case "link":
							r.link = a(l);
							break;
						case "category":
							r.tags ? r.tags += a(l) : r.tags = a(l)
						}
					}
					return r = i(t, r), r = n(t, r), new o(r)
				}
				var a = t.textContent,
					s = t.getChildNode,
					l = t.numChildren,
					u = t.localName,
					c = {};
				return c.parse = function(e) {
					for (var t = [], n = 0; n < l(e); n++) {
						var i = s(e, n);
						if ("channel" === u(i).toLowerCase()) for (var o = 0; o < l(i); o++) {
							var a = s(i, o);
							"item" === u(a).toLowerCase() && t.push(r(a))
						}
					}
					return t
				}, c
			}.apply(t, i)) && (e.exports = o)
		}, function(e, t, n) {
			var i, o;
			i = [n(24), n(70), n(2), n(4), n(3), n(1)], void 0 !== (o = function(e, t, n, i, o, r) {
				return function() {
					function a(o) {
						n.tryCatch(function() {
							var n, a = o.responseXML ? o.responseXML.childNodes : null,
								s = "";
							if (a) {
								for (var c = 0; c < a.length && (s = a[c], 8 === s.nodeType); c++);
								"xml" === e.localName(s) && (s = s.nextSibling), "rss" === e.localName(s) && (n = {
									playlist: t.parse(s)
								})
							}
							if (!n) try {
								var d = JSON.parse(o.responseText);
								if (r.isArray(d)) n = {
									playlist: d
								};
								else {
									if (!r.isArray(d.playlist)) throw null;
									n = d
								}
							} catch (e) {
								return void l("Not a valid RSS/JSON feed")
							}
							u.trigger(i.JWPLAYER_PLAYLIST_LOADED, n)
						}) instanceof n.Error && l()
					}
					function s(e) {
						l("Playlist load error: " + e)
					}
					function l(e) {
						u.trigger(i.JWPLAYER_ERROR, {
							message: e || "Error loading file"
						})
					}
					var u = r.extend(this, o);
					this.load = function(e) {
						n.ajax(e, a, s)
					}, this.destroy = function() {
						this.off()
					}
				}
			}.apply(t, i)) && (e.exports = o)
		}, function(e, t, n) {
			var i, o;
			i = [n(43), n(73), n(1), n(53)], void 0 !== (o = function(e, t, n, i) {
				function o(e, t) {
					for (var n = 0; n < e.length; n++) {
						var i = e[n],
							o = t.choose(i);
						if (o) return {
							type: i.type,
							provider: o.providerToCheck
						}
					}
					return null
				}
				function r(e, t) {
					return n.isUndefined(e) ? t : e
				}
				var a = function(t) {
						return t = n.isArray(t) ? t : [t], n.compact(n.map(t, e))
					};
				a.filterPlaylist = function(e, t, i, o, a, u, c) {
					var d = [];
					return n.each(e, function(e) {
						e = n.extend({}, e), e.allSources = s(e.sources, i, e.drm || o, e.preload || a, r(e.withCredentials, c)), e.sources = l(e.allSources, t), e.sources.length && (e.file = e.sources[0].file, (e.preload || a) && (e.preload = e.preload || a), (e.feedid || u) && (e.feedid = e.feedid || u), d.push(e))
					}), d
				};
				var s = function(e, i, o, a, s) {
						return n.compact(n.map(e, function(e) {
							if (n.isObject(e)) {
								void 0 !== i && null !== i && (e.androidhls = i), (e.drm || o) && (e.drm = e.drm || o), (e.preload || a) && (e.preload = e.preload || a);
								var l = r(e.withCredentials, s);
								return n.isUndefined(l) || (e.withCredentials = l), t(e)
							}
						}))
					},
					l = function(e, t) {
						t && t.choose || (t = new i({
							primary: t ? "flash" : null
						}));
						var r = o(e, t);
						if (!r) return [];
						var a = r.provider,
							s = r.type;
						return n.filter(e, function(e) {
							return e.type === s && t.providerSupports(a, e)
						})
					};
				return a
			}.apply(t, i)) && (e.exports = o)
		}, function(e, t, n) {
			var i, o;
			i = [n(2), n(8), n(1)], void 0 !== (o = function(e, t, n) {
				var i = {
				default:
					!1
				};
				return function(o) {
					if (o && o.file) {
						var r = n.extend({}, i, o);
						r.file = t.trim("" + r.file);
						var a = /^[^\/]+\/(?:x-)?([^\/]+)$/;
						if (a.test(r.type) && (r.mimeType = r.type, r.type = r.type.replace(a, "$1")), e.isYouTube(r.file) ? r.type = "youtube" : e.isRtmp(r.file) ? r.type = "rtmp" : r.type || (r.type = t.extension(r.file)), r.type) {
							switch (r.type) {
							case "m3u8":
							case "vnd.apple.mpegurl":
								r.type = "hls";
								break;
							case "dash+xml":
								r.type = "dash";
								break;
							case "smil":
								r.type = "rtmp";
								break;
							case "m4a":
								r.type = "aac"
							}
							return n.each(r, function(e, t) {
								"" === e && delete r[t]
							}), r
						}
					}
				}
			}.apply(t, i)) && (e.exports = o)
		}, function(e, t, n) {
			var o, r;
			o = [n(2), n(32), n(4), n(3), n(19), n(1)], void 0 !== (r = function(e, t, n, o, r, a) {
				var s = {
					FLASH: 0,
					JAVASCRIPT: 1,
					HYBRID: 2
				};
				return function(l) {
					function u() {
						switch (t.getPluginPathType(l)) {
						case t.pluginPathType.ABSOLUTE:
							return l;
						case t.pluginPathType.RELATIVE:
							return e.getAbsolutePath(l, window.location.href)
						}
					}
					function c() {
						a.defer(function() {
							w = r.loaderstatus.COMPLETE, m.trigger(n.COMPLETE)
						})
					}
					function d() {
						w = r.loaderstatus.ERROR, m.trigger(n.ERROR, {
							url: l
						})
					}
					var p, h, f, g, m = a.extend(this, o),
						w = r.loaderstatus.NEW;
					this.load = function() {
						if (w === r.loaderstatus.NEW) {
							if (l.lastIndexOf(".swf") > 0) return p = l, w = r.loaderstatus.COMPLETE, void m.trigger(n.COMPLETE);
							if (t.getPluginPathType(l) === t.pluginPathType.CDN) return w = r.loaderstatus.COMPLETE, void m.trigger(n.COMPLETE);
							w = r.loaderstatus.LOADING;
							var e = new r(u());
							e.on(n.COMPLETE, c), e.on(n.ERROR, d), e.load()
						}
					}, this.registerPlugin = function(e, t, i, o) {
						g && (clearTimeout(g), g = void 0), f = t, i && o ? (p = o, h = i) : "string" == typeof i ? p = i : "function" == typeof i ? h = i : i || o || (p = e), w = r.loaderstatus.COMPLETE, m.trigger(n.COMPLETE)
					}, this.getStatus = function() {
						return w
					}, this.getPluginName = function() {
						return t.getPluginName(l)
					}, this.getFlashPath = function() {
						if (p) switch (t.getPluginPathType(p)) {
						case t.pluginPathType.ABSOLUTE:
							return p;
						case t.pluginPathType.RELATIVE:
							return l.lastIndexOf(".swf") > 0 ? e.getAbsolutePath(p, window.location.href) : e.getAbsolutePath(p, u())
						}
						return null
					}, this.getJS = function() {
						return h
					}, this.getTarget = function() {
						return f
					}, this.getPluginmode = function() {
						return void 0 !== (void 0 === p ? "undefined" : i(p)) && void 0 !== (void 0 === h ? "undefined" : i(h)) ? s.HYBRID : void 0 !== (void 0 === p ? "undefined" : i(p)) ? s.FLASH : void 0 !== (void 0 === h ? "undefined" : i(h)) ? s.JAVASCRIPT : void 0
					}, this.getNewInstance = function(e, t, n) {
						return new h(e, t, n)
					}, this.getURL = function() {
						return l
					}
				}
			}.apply(t, o)) && (e.exports = r)
		}, , , , , , function(e, t, n) {
			var i, o;
			i = [n(3), n(1)], void 0 !== (o = function(e, t) {
				function n() {}
				var i = function(e, n) {
						var i, o = this;
						i = e && t.has(e, "constructor") ? e.constructor : function() {
							return o.apply(this, arguments)
						}, t.extend(i, o, n);
						var r = function() {
								this.constructor = i
							};
						return r.prototype = o.prototype, i.prototype = new r, e && t.extend(i.prototype, e), i.__super__ = o.prototype, i
					};
				return n.extend = i, t.extend(n.prototype, e), n
			}.apply(t, i)) && (e.exports = o)
		}, function(e, t, n) {
			var i, o;
			i = [n(27), n(1), n(47), n(46), n(29)], void 0 !== (o = function(e, t, n, i, o) {
				var r = {};
				return r.repo = t.memoize(function() {
					var t = o.split("+")[0],
						i = e.repo + t + "/";
					return n.isHTTPS() ? i.replace(/^http:/, "https:") : i
				}), r.versionCheck = function(e) {
					var t = ("0" + e).split(/\W/),
						n = o.split(/\W/),
						i = parseFloat(t[0]),
						r = parseFloat(n[0]);
					return !(i > r || i === r && parseFloat("0" + t[1]) > parseFloat(n[1]))
				}, r.loadFrom = function() {
					return r.repo()
				}, r
			}.apply(t, i)) && (e.exports = o)
		}, function(e, t, n) {
			var i, o;
			i = [n(1)], void 0 !== (o = function(e) {
				return function() {
					var t = {},
						n = {},
						i = {},
						o = {};
					return {
						start: function(n) {
							t[n] = e.now(), i[n] = i[n] + 1 || 1
						},
						end: function(i) {
							if (t[i]) {
								var o = e.now() - t[i];
								n[i] = n[i] + o || o
							}
						},
						dump: function() {
							return {
								counts: i,
								sums: n,
								events: o
							}
						},
						tick: function(t, n) {
							o[t] = n || e.now()
						},
						between: function(e, t) {
							return o[t] && o[e] ? o[t] - o[e] : -1
						}
					}
				}
			}.apply(t, i)) && (e.exports = o)
		}, function(e, t, n) {
			var i, o;
			i = [], void 0 !== (o = function() {
				return document.createElement("video")
			}.apply(t, i)) && (e.exports = o)
		}, , , function(e, t, n) {
			var i;
			void 0 !== (i = function(e, t, n) {
				function i(e, t) {
					r(t, a(e))
				}
				function o(e) {
					var t = d[e];
					if (t) {
						for (var n = Object.keys(t), i = 0; i < n.length; i += 1) for (var o = t[n[i]], r = 0; r < o.parts.length; r += 1) o.parts[r]();
						delete d[e]
					}
				}
				function r(e, t) {
					for (var n = 0; n < t.length; n++) {
						var i = t[n],
							o = (d[e] || {})[i.id];
						if (o) {
							for (var r = 0; r < o.parts.length; r++) o.parts[r](i.parts[r]);
							for (; r < i.parts.length; r++) o.parts.push(u(e, i.parts[r]))
						} else {
							for (var a = [], r = 0; r < i.parts.length; r++) a.push(u(e, i.parts[r]));
							d[e] = d[e] || {}, d[e][i.id] = {
								id: i.id,
								parts: a
							}
						}
					}
				}
				function a(e) {
					for (var t = [], n = {}, i = 0; i < e.length; i++) {
						var o = e[i],
							r = o[0],
							a = o[1],
							s = o[2],
							l = {
								css: a,
								media: s
							};
						n[r] ? n[r].parts.push(l) : t.push(n[r] = {
							id: r,
							parts: [l]
						})
					}
					return t
				}
				function s(e) {
					h().appendChild(e)
				}
				function l(e) {
					var t = document.createElement("style");
					return t.type = "text/css", t.setAttribute("data-jwplayer-id", e), s(t), t
				}
				function u(e, t) {
					var n, i, o, r = p[e];
					r || (r = p[e] = {
						element: l(e),
						counter: 0
					});
					var a = r.counter++;
					return n = r.element, i = c.bind(null, n, a, !1), o = c.bind(null, n, a, !0), i(t), function(e) {
						if (e) {
							if (e.css === t.css && e.media === t.media) return;
							i(t = e)
						} else o()
					}
				}
				function c(e, t, n, i) {
					var o = n ? "" : i.css;
					if (e.styleSheet) e.styleSheet.cssText = f(t, o);
					else {
						var r = document.createTextNode(o),
							a = e.childNodes;
						a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(r, a[t]) : e.appendChild(r)
					}
				}
				var d = {},
					p = {},
					h = function(e) {
						var t;
						return function() {
							return void 0 === t && (t = e.apply(this, arguments)), t
						}
					}(function() {
						return document.head || document.getElementsByTagName("head")[0]
					});
				n.exports = {
					style: i,
					clear: o
				};
				var f = function() {
						var e = [];
						return function(t, n) {
							return e[t] = n, e.filter(Boolean).join("\n")
						}
					}()
			}.call(t, n, t, e)) && (e.exports = i)
		}, , function(e, t, n) {
			var i, o;
			i = [n(166), n(25), n(1)], void 0 !== (o = function(e, t, n) {
				var i = e.selectPlayer,
					o = function() {
						var e = i.apply(this, arguments);
						return e || {
							registerPlugin: function(e, n, i) {
								"jwpsrv" !== e && t.registerPlugin(e, n, i)
							}
						}
					};
				return n.extend(e, {
					selectPlayer: o
				})
			}.apply(t, i)) && (e.exports = o)
		}, , , , , function(e, t, n) {
			var i, o;
			i = [n(2), n(94), n(20)], void 0 !== (o = function(e, t, n) {
				var i = "invalid",
					o = "RnXcsftYjWRDA^Uy";
				return function(r) {
					var a, s, l;
					this.edition = function() {
						return l && l.getTime() < (new Date).getTime() ? i : a
					}, this.token = function() {
						return s
					}, this.expiration = function() {
						return l
					}, function(r) {
						e.exists(r) || (r = "");
						try {
							r = t.decrypt(r, o);
							var u = r.split("/");
							"pro" === (a = u[0]) && (a = "premium");
							var c = n(a);
							if (u.length > 2 && c("setup")) {
								s = u[1];
								var d = parseInt(u[2]);
								d > 0 && (l = new Date, l.setTime(d))
							} else a = i
						} catch (e) {
							a = i
						}
					}(r)
				}
			}.apply(t, i)) && (e.exports = o)
		}, function(e, t, n) {
			var i, o;
			i = [], void 0 !== (o = function() {
				var e = function(e) {
						return window.atob(e)
					},
					t = function(e) {
						return unescape(encodeURIComponent(e))
					},
					n = function(e) {
						try {
							return decodeURIComponent(escape(e))
						} catch (t) {
							return e
						}
					},
					i = function(e) {
						for (var t = new Array(Math.ceil(e.length / 4)), n = 0; n < t.length; n++) t[n] = e.charCodeAt(4 * n) + (e.charCodeAt(4 * n + 1) << 8) + (e.charCodeAt(4 * n + 2) << 16) + (e.charCodeAt(4 * n + 3) << 24);
						return t
					},
					o = function(e) {
						for (var t = new Array(e.length), n = 0; n < e.length; n++) t[n] = String.fromCharCode(255 & e[n], e[n] >>> 8 & 255, e[n] >>> 16 & 255, e[n] >>> 24 & 255);
						return t.join("")
					};
				return {
					decrypt: function(r, a) {
						if (r = String(r), a = String(a), 0 == r.length) return "";
						for (var s, l, u = i(e(r)), c = i(t(a).slice(0, 16)), d = u.length, p = u[d - 1], h = u[0], f = 2654435769, g = Math.floor(6 + 52 / d), m = g * f; 0 != m;) {
							l = m >>> 2 & 3;
							for (var w = d - 1; w >= 0; w--) p = u[w > 0 ? w - 1 : d - 1], s = (p >>> 5 ^ h << 2) + (h >>> 3 ^ p << 4) ^ (m ^ h) + (c[3 & w ^ l] ^ p), h = u[w] -= s;
							m -= f
						}
						var v = o(u);
						return v = v.replace(/\0+$/, ""), n(v)
					}
				}
			}.apply(t, i)) && (e.exports = o)
		}, function(e, t, n) {
			var i, o;
			i = [n(208), n(4), n(221)], void 0 !== (o = function(e, t, n) {
				return function(i, o) {
					var r = new e(i, o),
						a = r.setup;
					return r.setup = function() {
						a.call(this), o.on("change:skipButton", this.onSkipButton, this), o.on("change:castActive change:playlistItem", this.showDisplayIconImage, this)
					}, r.showDisplayIconImage = function(e) {
						var t = e.get("castActive"),
							n = e.get("playlistItem"),
							i = r.controlsContainer().getElementsByClassName("jw-display-icon-container")[0];
						t && n && n.image ? (i.style.backgroundImage = 'url("' + n.image + '")', i.style.backgroundSize = "contain") : (i.style.backgroundImage = "", i.style.backgroundSize = "")
					}, r.onSkipButton = function(e, t) {
						t ? this.addSkipButton() : this._skipButton && (this._skipButton.destroy(), this._skipButton = null)
					}, r.addSkipButton = function() {
						this._skipButton = new n(this.instreamModel), this._skipButton.on(t.JWPLAYER_AD_SKIPPED, function() {
							this.api.skipAd()
						}, this), this.controlsContainer().appendChild(this._skipButton.element())
					}, r
				}
			}.apply(t, i)) && (e.exports = o)
		}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
			t = e.exports = n(133)(), t.push([e.id, ".jw-reset{color:inherit;background-color:transparent;padding:0;margin:0;float:none;font-family:Arial,Helvetica,sans-serif;font-size:1em;line-height:1em;list-style:none;text-align:left;text-transform:none;vertical-align:baseline;border:0;direction:ltr;font-variant:inherit;font-stretch:inherit;-webkit-tap-highlight-color:rgba(255,255,255,0)}@font-face{font-family:jw-icons;src:url(" + n(135) + ") format('woff'),url(" + n(134) + ') format(\'truetype\');font-weight:400;font-style:normal}.jw-controlbar .jw-menu .jw-option:before,.jw-icon-display,.jw-icon-inline,.jw-icon-tooltip{font-family:jw-icons;-webkit-font-smoothing:antialiased;font-style:normal;font-weight:400;text-transform:none;background-color:transparent;font-variant:normal;-webkit-font-feature-settings:"liga";-ms-font-feature-settings:"liga" 1;-o-font-feature-settings:"liga";font-feature-settings:"liga";-moz-osx-font-smoothing:grayscale}.jw-icon-audio-tracks:before{content:"\\E600"}.jw-icon-buffer:before{content:"\\E601"}.jw-icon-cast:before{content:"\\E603"}.jw-icon-cast.jw-off:before{content:"\\E602"}.jw-icon-cc:before{content:"\\E605"}.jw-icon-cue:before,.jw-icon-menu-bullet:before{content:"\\E606"}.jw-icon-error:before{content:"\\E607"}.jw-icon-fullscreen:before{content:"\\E608"}.jw-icon-fullscreen.jw-off:before{content:"\\E613"}.jw-icon-hd:before{content:"\\E60A"}.jw-rightclick-logo:before{content:"\\E60B"}.jw-icon-next:before{content:"\\E60C"}.jw-icon-pause:before{content:"\\E60D"}.jw-icon-play:before{content:"\\E60E"}.jw-icon-replay:before{content:"\\E610"}.jw-icon-volume:before{content:"\\E612"}.jw-icon-volume.jw-off:before{content:"\\E611"}.jw-icon-more:before{content:"\\E614"}.jw-icon-close:before{content:"\\E615"}.jw-icon-rewind:before{content:"\\E900"}.jwplayer{width:100%;font-size:16px;position:relative;display:block;min-height:0;overflow:hidden;box-sizing:border-box;font-family:Arial,Helvetica,sans-serif;background-color:#000;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.jwplayer *{box-sizing:inherit}.jwplayer.jw-flag-aspect-mode{height:auto!important}.jwplayer.jw-flag-aspect-mode .jw-aspect{display:block}.jwplayer .jw-aspect{display:none}.jwplayer.jw-no-focus:focus,.jwplayer .jw-swf{outline:none}.jwplayer.jw-ie:focus{outline:1px dotted #585858}.jwplayer:hover .jw-display-icon-container{background-color:#212121}.jw-controls,.jw-media,.jw-overlays,.jw-preview{position:absolute;width:100%;height:100%;top:0;left:0;bottom:0;right:0}.jw-media{overflow:hidden;cursor:pointer}.jw-overlays{cursor:auto}.jw-media.jw-media-show{visibility:visible;opacity:1}.jw-controls.jw-controls-disabled{display:none}.jw-controls .jw-controls-right{position:absolute;top:0;right:0;left:0;bottom:2.5em}.jw-text{height:1em;font-family:Arial,Helvetica,sans-serif;font-size:.75em;font-style:normal;font-weight:400;color:#fff;text-align:center;font-variant:normal;font-stretch:normal}.jw-plugin{position:absolute;bottom:2.5em}.jw-plugin .jw-banner{max-width:100%;opacity:0;cursor:pointer;position:absolute;margin:auto auto 0;left:0;right:0;bottom:0;display:block}.jw-cast-screen{width:100%;height:100%}.jw-instream{position:absolute;top:0;right:0;bottom:0;left:0;display:none}.jw-icon-playback:before{content:"\\E60E"}.jw-captions,.jw-controls,.jw-overlays,.jw-preview,.jw-title{pointer-events:none}.jw-controlbar,.jw-display-icon-container,.jw-dock .jw-dock-button,.jw-logo,.jw-media,.jw-nextup-container,.jw-overlays .jw-plugin,.jw-skip{pointer-events:all}.jwplayer video{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;margin:auto;background:transparent}.jwplayer video::-webkit-media-controls-start-playback-button{display:none}.jwplayer.jw-stretch-uniform video{-o-object-fit:contain;object-fit:contain}.jwplayer.jw-stretch-none video{-o-object-fit:none;object-fit:none}.jwplayer.jw-stretch-fill video{-o-object-fit:cover;object-fit:cover}.jwplayer.jw-stretch-exactfit video{-o-object-fit:fill;object-fit:fill}.jw-click,.jw-preview{position:absolute;width:100%;height:100%}.jw-preview{display:none;opacity:1;visibility:visible;background:#000 no-repeat 50% 50%}.jw-error .jw-preview,.jw-stretch-uniform .jw-preview,.jwplayer .jw-preview{background-size:contain}.jw-stretch-none .jw-preview{background-size:auto auto}.jw-stretch-fill .jw-preview{background-size:cover}.jw-stretch-exactfit .jw-preview{background-size:100% 100%}.jw-display-icon-container{position:relative;top:50%;display:table;height:3.75em;width:3.75em;margin:-1.875em auto 0;cursor:pointer}.jw-display-icon-container .jw-icon-display{position:relative;display:table-cell;text-align:center;vertical-align:middle!important;background-position:50% 50%;background-repeat:no-repeat;font-size:2.5em}.jw-breakpoint-0 .jw-display-icon-container{height:44px;width:44px;margin:-22px auto 0}.jw-breakpoint-0 .jw-display-icon-container .jw-icon{font-size:22px}.jw-breakpoint-1 .jw-display-icon-container{height:55px;width:55px;margin:-27.5px auto 0}.jw-breakpoint-1 .jw-display-icon-container .jw-icon{font-size:35.2px}.jw-flag-audio-player .jw-display-icon-container,.jw-flag-dragging .jw-display-icon-container{display:none}.jw-icon{font-family:jw-icons;-webkit-font-smoothing:antialiased;font-style:normal;font-weight:400;text-transform:none;background-color:transparent;font-variant:normal;-webkit-font-feature-settings:"liga";-ms-font-feature-settings:"liga" 1;-o-font-feature-settings:"liga";font-feature-settings:"liga";-moz-osx-font-smoothing:grayscale}.jw-controlbar{display:table;position:absolute;bottom:0;height:2.5em;width:100%;padding:0 .5em}.jw-controlbar .jw-hidden{display:none}.jw-background-color{background-color:rgba(33,33,33,.8)}.jw-slider-horizontal{background-color:transparent}.jw-group{display:table-cell}.jw-controlbar-center-group{width:100%;padding:0 .5em}.jw-controlbar-center-group .jw-slider-time,.jw-controlbar-center-group .jw-text-alt{padding:0}.jw-controlbar-center-group .jw-text-alt{display:none}.jw-controlbar-left-group,.jw-controlbar-right-group{white-space:nowrap}.jw-icon-display:hover,.jw-icon-inline:hover,.jw-icon-tooltip:hover,.jw-knob:hover,.jw-option:before:hover{color:#fff}.jw-icon-inline,.jw-icon-tooltip,.jw-slider-horizontal,.jw-text-duration,.jw-text-elapsed{display:inline-block;height:2.5em;position:relative;line-height:2.5em;vertical-align:middle;cursor:pointer;padding:0 .5em}.jw-icon-inline,.jw-icon-tooltip{min-width:1.5625em;text-align:center}.jw-icon-playback{min-width:2.25em}.jw-icon-volume{min-width:1.75em;text-align:left}.jw-time-tip{line-height:1em;pointer-events:none}.jw-icon-cast,.jw-icon-inline.jw-icon-volume,.jw-slider-volume.jw-slider-horizontal{display:none}.jw-button-color{color:hsla(0,0%,100%,.6)}.jw-button-color:hover{color:#fff}.jw-button-color:focus{outline:none;color:#fff}.jw-toggle{color:#fff}.jw-toggle.jw-off{color:hsla(0,0%,100%,.6)}.jw-toggle:focus{outline:none;color:#fff}.jw-dock{clear:right;margin:.75em;display:block;opacity:1}.jw-breakpoint-0 .jw-dock{margin:.225em .1125em}.jw-breakpoint-1 .jw-dock{margin:.45em .225em}.jw-dock:after{content:\'\';clear:both;display:block}.jw-dock-button{cursor:pointer;float:right;height:2.5em;margin:.5em;position:relative;width:2.5em}.jw-breakpoint-0 .jw-dock-button{margin:0 .1125em;height:44px;width:44px}.jw-breakpoint-1 .jw-dock-button{margin:0 .225em;height:44px;width:44px}.jw-dock-button .jw-arrow{display:none;position:absolute;bottom:-.2em;width:.5em;height:.2em;left:50%;margin-left:-.25em}.jw-dock-button .jw-overlay{display:none;position:absolute;top:2.5em;right:0;margin-top:.25em;padding:.5em;white-space:nowrap}.jw-dock-button:hover .jw-arrow,.jw-dock-button:hover .jw-overlay{display:block}.jw-dock-image{width:100%;height:100%;background-position:50% 50%;background-repeat:no-repeat;opacity:.75}.jw-title{display:none;position:absolute;top:0;width:100%;font-size:.875em;height:8em;background:-webkit-linear-gradient(top,#000,#000 18%,transparent);background:linear-gradient(180deg,#000 0,#000 18%,transparent)}.jw-title-primary,.jw-title-secondary{padding:.75em 1.5em;min-height:2.5em;width:100%;color:#fff;white-space:nowrap;text-overflow:ellipsis;overflow-x:hidden}.jw-title-primary{font-weight:700}.jw-title-secondary{margin-top:-.5em}.jw-slider-container{height:1em;width:100%;position:relative;touch-action:none}.jw-buffer,.jw-progress,.jw-rail{position:absolute;cursor:pointer}.jw-progress{background-color:#fff}.jw-rail{background-color:hsla(0,0%,100%,.2)}.jw-buffer{background-color:hsla(0,0%,100%,.3)}.jw-cue,.jw-knob{position:absolute;cursor:pointer}.jw-cue{height:.25em;background-color:rgba(33,33,33,.9);border-radius:25%;width:.5em}.jw-knob{background-color:#fff;width:.5em;height:.5em;border-radius:.25em}.jw-slider-horizontal{height:.25em}.jw-slider-horizontal.jw-slider-volume{width:4em}.jw-slider-horizontal .jw-rail{width:100%}.jw-slider-horizontal .jw-knob{top:-.125em;margin-left:-.25em}.jw-slider-horizontal .jw-buffer,.jw-slider-horizontal .jw-progress,.jw-slider-horizontal .jw-rail{height:.25em}.jw-slider-vertical{padding:1em 1em 0;position:absolute}.jw-slider-vertical .jw-buffer,.jw-slider-vertical .jw-progress,.jw-slider-vertical .jw-rail{bottom:0;height:100%;left:0;right:0;margin:0 auto}.jw-slider-vertical .jw-progress,.jw-slider-vertical .jw-rail,.jw-slider-vertical .jw-slider-container{width:.25em}.jw-slider-vertical .jw-slider-container{height:4em}.jw-slider-vertical .jw-knob{right:0;left:-.125em}.jw-slider-time{width:100%}.jw-tooltip-time{position:absolute}.jw-slider-volume .jw-buffer{display:none}.jw-captions{position:absolute;width:100%;height:inherit;text-align:center;display:none;max-height:81.375%;line-height:1.3em;letter-spacing:normal;word-spacing:normal;text-transform:none;text-indent:0;text-decoration:none;pointer-events:none;overflow:hidden;top:0}.jw-captions.jw-captions-enabled{display:block}.jw-captions-window{display:none;padding:.25em;border-radius:.25em}.jw-captions-text,.jw-captions-window.jw-captions-window-active{display:inline-block}.jw-captions-text{color:#fff;background-color:#000;word-wrap:normal;word-break:normal;white-space:pre-line;font-style:normal;font-weight:400;text-align:center;text-decoration:none;line-height:1.3em;padding:.1em .8em}.jw-text-track-display{font-size:inherit;line-height:1.3em}.jwplayer video::-webkit-media-controls{-webkit-box-pack:start;justify-content:flex-start}.jwplayer video::-webkit-media-text-track-container{max-height:81.375%;line-height:1.3em}.jwplayer .jw-rightclick{display:none;position:absolute;white-space:nowrap}.jwplayer .jw-rightclick.jw-open{display:block}.jwplayer .jw-rightclick ul{list-style:none;font-weight:700;border-radius:.15em;margin:0;border:1px solid #444;padding:0}.jwplayer .jw-rightclick ul li{background-color:#000;border-bottom:1px solid #444;margin:0}.jwplayer .jw-rightclick ul li .jw-rightclick-logo{font-size:2em;color:#ff0147;vertical-align:middle;padding-right:.3em;margin-right:.3em;border-right:1px solid #444}.jwplayer .jw-rightclick ul li a{color:#fff;text-decoration:none;padding:1em;display:block;font-size:.6875em;line-height:1em}.jwplayer .jw-rightclick ul li:last-child{border-bottom:none}.jwplayer .jw-rightclick ul li:hover{background-color:#1a1a1a;cursor:pointer}.jwplayer .jw-rightclick ul .jw-featured{background-color:#252525;vertical-align:middle}.jwplayer .jw-rightclick ul .jw-featured a{color:#777}.jw-logo{position:absolute;margin:.75em;cursor:pointer;pointer-events:all;background-repeat:no-repeat;background-size:contain;top:auto;right:auto;left:auto;bottom:auto}.jw-logo .jw-flag-audio-player{display:none}.jw-logo-top-right{top:0;right:0}.jw-logo-top-left{top:0;left:0}.jw-logo-bottom-left{bottom:0;left:0}.jw-logo-bottom-right{bottom:0;right:0}.jw-icon-tooltip.jw-open .jw-overlay{opacity:1;visibility:visible}.jw-icon-tooltip.jw-hidden{display:none}.jw-overlay:before{position:absolute;top:0;bottom:0;left:-50%;width:100%;background-color:transparent;content:" "}.jw-slider-time .jw-overlay:before{height:1em;top:auto}.jw-menu,.jw-time-tip,.jw-volume-tip{position:relative;left:-50%;margin:0}.jw-volume-tip{width:100%;height:100%;display:block}.jw-time-tip{text-align:center;font-family:inherit;bottom:1.25em;padding:.5em;border-radius:.25em}.jw-time-tip .jw-text{color:#fff;line-height:1em}.jw-controlbar .jw-overlay{margin:0;position:absolute;bottom:2.5em;left:50%;opacity:0;visibility:hidden}.jw-controlbar .jw-overlay .jw-contents{position:relative}.jw-controlbar .jw-option{position:relative;white-space:nowrap;cursor:pointer;list-style:none;height:1.5em;font-family:inherit;line-height:1.5em;color:hsla(0,0%,100%,.6);padding:0 .5em;font-size:.8em}.jw-controlbar .jw-option:before:hover,.jw-controlbar .jw-option:hover{color:#fff}.jw-controlbar .jw-option:before{padding-right:.125em}.jw-controlbar .jw-option.jw-active-option{color:#fff}.jw-skip{cursor:default;position:absolute;float:right;display:inline-block;right:.75em;bottom:3em;padding:.5em}.jw-skip.jw-skippable{cursor:pointer}.jw-skip.jw-hidden{visibility:hidden}.jw-skip .jw-skip-icon{display:none;margin-left:-.75em}.jw-skip .jw-skip-icon:before{content:"\\E60C"}.jw-skip .jw-skip-icon,.jw-skip .jw-text{color:hsla(0,0%,100%,.6);vertical-align:middle;line-height:1.5em;font-size:.7em}.jw-skip.jw-skippable:hover{cursor:pointer}.jw-skip.jw-skippable:hover .jw-skip-icon,.jw-skip.jw-skippable:hover .jw-text{color:#fff}.jw-skip.jw-skippable .jw-skip-icon{display:inline;margin:0}.jwplayer.jw-state-paused.jw-flag-casting .jw-display-icon-container,.jwplayer.jw-state-playing.jw-flag-casting .jw-display-icon-container{display:table}.jwplayer.jw-flag-casting .jw-display-icon-container{border-radius:0;border:1px solid #fff;position:absolute;top:auto;left:.5em;right:.5em;bottom:50%;margin-bottom:-12.5%;height:50%;width:50%;padding:0;background-repeat:no-repeat;background-position:50%}.jwplayer.jw-flag-casting .jw-display-icon-container .jw-icon{font-size:3em}.jwplayer.jw-flag-casting.jw-state-complete .jw-preview{display:none}.jw-cast{position:absolute;width:100%;height:100%;background-repeat:no-repeat;background-size:auto;background-position:50% 50%}.jw-cast-label{position:absolute;left:.5em;right:.5em;bottom:75%;margin-bottom:1.5em;text-align:center}.jw-cast-name{color:#ccc}.jw-nextup-container{-webkit-font-smoothing:antialiased;-moz-font-smoothing:antialiased;background-color:transparent;bottom:3em;cursor:pointer;max-width:300px;min-width:200px;opacity:0;position:absolute;right:.5em;-webkit-transform:translateY(5px);transform:translateY(5px);-webkit-transition:all .15s ease;transition:all .15s ease;visibility:hidden;width:40%}.jw-nextup-container-visible{opacity:1;-webkit-transform:translateY(0);transform:translateY(0);visibility:visible}.jw-nextup{border-radius:0;overflow:hidden;position:relative}.jw-nextup-header{background:rgba(33,33,33,.8);box-sizing:border-box;color:#fff;font-size:12px;font-weight:700;line-height:normal;padding:8px}.jw-nextup-body{background:rgba(0,0,0,.8);color:#fff;overflow:hidden}.jw-nextup-thumbnail{background-position:50%;background-size:cover;display:none;float:left;height:60px;width:45%}.jw-nextup-thumbnail-visible{display:block}.jw-nextup-title{box-sizing:border-box;float:left;font-size:12px;font-weight:700;line-height:1.3;overflow:hidden;padding:5px 6px;position:relative;text-overflow:ellipsis;white-space:nowrap;width:100%}.jw-nextup-thumbnail-visible+.jw-nextup-title{height:60px;white-space:normal;width:55%}.jw-nextup-thumbnail-visible+.jw-nextup-title:after{background:-webkit-linear-gradient(top,transparent,#000);background:linear-gradient(-180deg,transparent,#000);bottom:0;content:\'\';height:30px;left:0;position:absolute;width:100%}.jw-nextup-close{font-family:jw-icons;-webkit-font-smoothing:antialiased;font-style:normal;font-weight:400;text-transform:none;background-color:transparent;font-variant:normal;-webkit-font-feature-settings:"liga";-ms-font-feature-settings:"liga" 1;-o-font-feature-settings:"liga";font-feature-settings:"liga";-moz-osx-font-smoothing:grayscale;border:none;color:hsla(0,0%,100%,.6);font-size:13px;opacity:0;position:absolute;right:5px;top:6px;-webkit-transition:color .15s ease,opacity .15s ease,visibility .15s ease;transition:color .15s ease,opacity .15s ease,visibility .15s ease;visibility:hidden}.jw-nextup-close:before{content:"\\E615"}.jw-nextup-close:active,.jw-nextup-close:hover{color:#fff}.jw-nextup-sticky .jw-nextup-close{opacity:1;visibility:visible}.jw-state-idle .jw-preview{display:block}.jw-state-idle .jw-icon-display:before{content:"\\E60E"}.jw-state-idle .jw-captions,.jw-state-idle .jw-controlbar{display:none}.jw-state-idle .jw-title{display:block}.jwplayer.jw-state-playing .jw-display-icon-container{display:none}.jwplayer.jw-state-playing .jw-display-icon-container .jw-icon-display:before,.jwplayer.jw-state-playing .jw-icon-playback:before{content:"\\E60D"}.jwplayer.jw-state-paused .jw-display-icon-container{display:none}.jwplayer.jw-state-paused .jw-display-icon-container .jw-icon-display:before,.jwplayer.jw-state-paused .jw-icon-playback:before{content:"\\E60E"}.jwplayer.jw-state-buffering .jw-display-icon-container .jw-icon-display{-webkit-animation:spin 2s linear infinite;animation:spin 2s linear infinite}.jwplayer.jw-state-buffering .jw-display-icon-container .jw-icon-display:before{content:"\\E601"}@-webkit-keyframes spin{to{-webkit-transform:rotate(1turn)}}@keyframes spin{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.jwplayer.jw-state-buffering .jw-display-icon-container .jw-text{display:none}.jwplayer.jw-state-buffering .jw-icon-playback:before{content:"\\E60D"}.jwplayer.jw-state-complete .jw-preview{display:block}.jwplayer.jw-state-complete .jw-display-icon-container .jw-icon-display:before{content:"\\E610"}.jwplayer.jw-state-complete .jw-display-icon-container .jw-text{display:none}.jwplayer.jw-state-complete .jw-icon-playback:before{content:"\\E60E"}.jwplayer.jw-state-complete .jw-captions{display:none}.jwplayer.jw-state-error .jw-title,body .jw-error .jw-title{display:block}.jwplayer.jw-state-error .jw-title .jw-title-primary,body .jw-error .jw-title .jw-title-primary{white-space:normal}.jwplayer.jw-state-error .jw-preview,body .jw-error .jw-preview{display:block}.jwplayer.jw-state-error .jw-captions,.jwplayer.jw-state-error .jw-controlbar,body .jw-error .jw-captions,body .jw-error .jw-controlbar{display:none}.jwplayer.jw-state-error:hover .jw-display-icon-container,body .jw-error:hover .jw-display-icon-container{cursor:default;color:#fff;background:#000}.jwplayer.jw-state-error .jw-icon-display,body .jw-error .jw-icon-display{cursor:default;font-family:jw-icons;-webkit-font-smoothing:antialiased;font-style:normal;font-weight:400;text-transform:none;background-color:transparent;font-variant:normal;-webkit-font-feature-settings:"liga";-ms-font-feature-settings:"liga" 1;-o-font-feature-settings:"liga";font-feature-settings:"liga";-moz-osx-font-smoothing:grayscale}.jwplayer.jw-state-error .jw-icon-display:before,body .jw-error .jw-icon-display:before{content:"\\E607"}.jwplayer.jw-state-error .jw-icon-display:hover,body .jw-error .jw-icon-display:hover{color:#fff}body .jw-error{font-size:16px;background-color:#000;color:#fff;width:100%;height:100%;display:table;opacity:1;position:relative}body .jw-error .jw-icon-container{position:absolute;width:100%;height:100%;top:0;left:0;bottom:0;right:0}.jwplayer.jw-flag-cast-available .jw-controlbar{display:table}.jwplayer.jw-flag-cast-available .jw-icon-cast{display:inline-block}.jwplayer.jw-flag-skin-loading .jw-captions,.jwplayer.jw-flag-skin-loading .jw-controls,.jwplayer.jw-flag-skin-loading .jw-title{display:none}.jwplayer.jw-flag-fullscreen{width:100%!important;height:100%!important;top:0;right:0;bottom:0;left:0;z-index:1000;margin:0;position:fixed}.jwplayer.jw-flag-live .jw-controlbar .jw-slider-time,.jwplayer.jw-flag-live .jw-controlbar .jw-text-duration,.jwplayer.jw-flag-live .jw-controlbar .jw-text-elapsed{display:none}.jwplayer.jw-flag-live .jw-controlbar .jw-text-alt{display:inline-block;margin:0 -.5em;overflow:hidden;text-overflow:ellipsis;vertical-align:middle;white-space:nowrap}.jwplayer.jw-flag-live.jw-breakpoint-0 .jw-text-alt{max-width:80px}.jwplayer.jw-flag-live.jw-breakpoint-1 .jw-text-alt{max-width:150px}.jwplayer.jw-flag-live.jw-breakpoint-2 .jw-text-alt{max-width:250px}.jwplayer.jw-flag-live.jw-breakpoint-3 .jw-text-alt{max-width:370px}.jwplayer.jw-flag-live.jw-breakpoint-4 .jw-text-alt{max-width:470px}.jwplayer.jw-flag-live.jw-breakpoint-5 .jw-text-alt{max-width:630px}.jwplayer.jw-flag-live.jw-breakpoint-6 .jw-text-alt{max-width:790px}.jwplayer.jw-flag-user-inactive.jw-state-playing .jw-controlbar,.jwplayer.jw-flag-user-inactive.jw-state-playing .jw-dock,.jwplayer.jw-flag-user-inactive.jw-state-playing .jw-logo.jw-hide{display:none}.jwplayer.jw-flag-user-inactive.jw-state-playing .jw-nextup-container,.jwplayer.jw-flag-user-inactive.jw-state-playing .jw-plugin{bottom:.5em}.jwplayer.jw-flag-user-inactive.jw-state-playing .jw-media{cursor:none;-webkit-cursor-visibility:auto-hide}.jwplayer.jw-flag-user-inactive.jw-state-playing .jw-captions{max-height:none}.jwplayer.jw-flag-user-inactive.jw-state-playing video::-webkit-media-text-track-container{max-height:none}.jwplayer.jw-flag-user-inactive.jw-state-buffering .jw-controlbar{display:none}.jwplayer.jw-flag-user-inactive.jw-state-buffering .jw-nextup-container{bottom:.5em}.jwplayer.jw-flag-media-audio .jw-controlbar,.jwplayer.jw-flag-media-audio.jw-flag-user-inactive .jw-controlbar{display:table}.jwplayer.jw-flag-media-audio.jw-flag-user-inactive .jw-nextup-container,.jwplayer.jw-flag-media-audio.jw-flag-user-inactive.jw-state-playing .jw-plugin{bottom:3em}.jwplayer.jw-flag-media-audio.jw-flag-user-inactive.jw-state-playing .jw-captions{max-height:81.375%}.jwplayer.jw-flag-media-audio.jw-flag-user-inactive.jw-state-playing video::-webkit-media-text-track-container{max-height:81.375%}.jwplayer.jw-flag-media-audio.jw-flag-user-inactive.jw-state-playing.jw-flag-touch video::-webkit-media-text-track-container{max-height:70%}.jw-flag-media-audio .jw-preview{display:block}.jwplayer.jw-flag-ads .jw-captions.jw-captions-enabled,.jwplayer.jw-flag-ads .jw-dock,.jwplayer.jw-flag-ads .jw-logo,.jwplayer.jw-flag-ads .jw-nextup-container,.jwplayer.jw-flag-ads .jw-preview{display:none}.jwplayer.jw-flag-ads video::-webkit-media-text-track-container{display:none}.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-inline,.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-tooltip,.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-horizontal,.jwplayer.jw-flag-ads .jw-controlbar .jw-text{display:none}.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-fullscreen,.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-playback,.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-volume,.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-volume{display:inline-block}.jwplayer.jw-flag-ads .jw-controlbar .jw-text-alt{display:inline-block;margin:0 -.5em;overflow:hidden;text-overflow:ellipsis;vertical-align:middle;white-space:nowrap}.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-inline.jw-icon-volume,.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-volume.jw-slider-horizontal{display:inline-block}.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-tooltip.jw-icon-volume{display:none}.jwplayer.jw-flag-ads.jw-breakpoint-0 .jw-text-alt{max-width:80px}.jwplayer.jw-flag-ads.jw-breakpoint-1 .jw-text-alt{max-width:150px}.jwplayer.jw-flag-ads.jw-breakpoint-2 .jw-text-alt{max-width:250px}.jwplayer.jw-flag-ads.jw-breakpoint-3 .jw-text-alt{max-width:370px}.jwplayer.jw-flag-ads.jw-breakpoint-4 .jw-text-alt{max-width:470px}.jwplayer.jw-flag-ads.jw-breakpoint-5 .jw-text-alt{max-width:630px}.jwplayer.jw-flag-ads.jw-breakpoint-6 .jw-text-alt{max-width:790px}.jwplayer.jw-flag-ads-freewheel.jw-freewheel-before-impression .jw-media video{pointer-events:none}.jwplayer.jw-flag-ads-freewheel.jw-flag-user-inactive.jw-state-playing .jw-freewheel-nonlinear-container{bottom:.5em}.jwplayer.jw-flag-ads-freewheel .jw-freewheel-nonlinear-container{bottom:2.5em;pointer-events:none}.jwplayer.jw-flag-ads-freewheel .jw-freewheel-nonlinear-container iframe{pointer-events:all}.jwplayer.jw-flag-ads-googleima .jw-controlbar{display:table;bottom:0}.jwplayer.jw-flag-ads-googleima.jw-flag-touch .jw-controlbar{font-size:1em}.jwplayer.jw-flag-ads-googleima.jw-flag-touch.jw-state-paused .jw-display-icon-container{display:none}.jwplayer.jw-flag-ads-googleima.jw-skin-seven .jw-controlbar{font-size:.9em}.jwplayer.jw-flag-ads.jw-flag-touch .jw-controlbar{display:table}.jwplayer.jw-flag-ads-vpaid .jw-controlbar,.jwplayer.jw-flag-ads-vpaid .jw-skip,.jwplayer.jw-flag-touch.jw-flag-ads-vpaid .jw-controlbar,.jwplayer.jw-flag-touch.jw-flag-ads-vpaid .jw-skip{display:none}.jwplayer.jw-flag-ads-hide-controls .jw-controls{display:none!important}.jwplayer.jw-flag-overlay-open-related .jw-controls,.jwplayer.jw-flag-overlay-open-related .jw-title,.jwplayer.jw-flag-overlay-open-sharing .jw-controls,.jwplayer.jw-flag-overlay-open-sharing .jw-title,.jwplayer.jw-flag-overlay-open .jw-controls-right .jw-logo,.jwplayer.jw-flag-overlay-open .jw-title{display:none}.jwplayer.jw-flag-rightclick-open{overflow:visible}.jwplayer.jw-flag-rightclick-open .jw-rightclick{z-index:16777215}.jw-flag-controls-disabled .jw-controls{visibility:hidden}.jw-flag-controls-disabled .jw-logo{visibility:visible}.jw-flag-controls-disabled .jw-media{cursor:auto}.jw-flag-controls-disabled.jwplayer .jw-captions{max-height:none}.jw-flag-controls-disabled.jwplayer video::-webkit-media-text-track-container{max-height:none}body .jwplayer.jw-flag-flash-blocked .jw-title{display:block}body .jwplayer.jw-flag-flash-blocked .jw-controls,body .jwplayer.jw-flag-flash-blocked .jw-overlays,body .jwplayer.jw-flag-flash-blocked .jw-preview{display:none}.jw-flag-touch.jw-breakpoint-4 .jw-controlbar,.jw-flag-touch.jw-breakpoint-4 .jw-plugin,.jw-flag-touch.jw-breakpoint-4 .jw-skip,.jw-flag-touch.jw-breakpoint-5 .jw-controlbar,.jw-flag-touch.jw-breakpoint-5 .jw-plugin,.jw-flag-touch.jw-breakpoint-5 .jw-skip,.jw-flag-touch.jw-breakpoint-6 .jw-controlbar,.jw-flag-touch.jw-breakpoint-6 .jw-plugin,.jw-flag-touch.jw-breakpoint-6 .jw-skip,.jw-flag-touch.jw-breakpoint-7 .jw-controlbar,.jw-flag-touch.jw-breakpoint-7 .jw-plugin,.jw-flag-touch.jw-breakpoint-7 .jw-skip{font-size:1.5em}.jw-flag-touch.jw-breakpoint-4 .jw-captions,.jw-flag-touch.jw-breakpoint-5 .jw-captions,.jw-flag-touch.jw-breakpoint-6 .jw-captions,.jw-flag-touch.jw-breakpoint-7 .jw-captions{bottom:4.25em}.jw-flag-touch.jw-breakpoint-4 video::-webkit-media-text-track-container,.jw-flag-touch.jw-breakpoint-5 video::-webkit-media-text-track-container,.jw-flag-touch.jw-breakpoint-6 video::-webkit-media-text-track-container,.jw-flag-touch.jw-breakpoint-7 video::-webkit-media-text-track-container{max-height:70%}.jw-flag-touch.jw-breakpoint-4 .jw-nextup-container,.jw-flag-touch.jw-breakpoint-5 .jw-nextup-container,.jw-flag-touch.jw-breakpoint-6 .jw-nextup-container,.jw-flag-touch.jw-breakpoint-7 .jw-nextup-container{bottom:4.25em}.jw-flag-touch .jw-display-icon-container{pointer-events:none}.jw-flag-touch.jw-state-paused .jw-display-icon-container{display:table}.jw-flag-compact-player .jw-text-duration,.jw-flag-compact-player .jw-text-elapsed,.jw-flag-touch.jw-state-paused.jw-flag-dragging .jw-display-icon-container{display:none}.jwplayer.jw-flag-audio-player{background-color:transparent}.jwplayer.jw-flag-audio-player .jw-media{visibility:hidden}.jwplayer.jw-flag-audio-player .jw-media object{width:1px;height:1px}.jwplayer.jw-flag-audio-player .jw-display-icon-container,.jwplayer.jw-flag-audio-player .jw-dock,.jwplayer.jw-flag-audio-player .jw-nextup-container,.jwplayer.jw-flag-audio-player .jw-preview,.jwplayer.jw-flag-audio-player .jw-title{display:none}.jwplayer.jw-flag-audio-player .jw-controlbar{vertical-align:middle;display:table;height:100%;left:0;bottom:0;margin:0;width:100%;min-width:100%}.jwplayer.jw-flag-audio-player .jw-controlbar .jw-icon-fullscreen,.jwplayer.jw-flag-audio-player .jw-controlbar .jw-icon-tooltip{display:none}.jwplayer.jw-flag-audio-player .jw-controlbar .jw-icon-inline.jw-icon-volume,.jwplayer.jw-flag-audio-player .jw-controlbar .jw-slider-volume.jw-slider-horizontal{display:inline-block}.jwplayer.jw-flag-audio-player .jw-controlbar .jw-icon-tooltip.jw-icon-volume{display:none}.jwplayer.jw-flag-audio-player.jw-flag-user-inactive .jw-controlbar{display:table}.jwplayer.jw-flag-audio-player .jw-icon-inline{height:auto;line-height:normal}.jwplayer.jw-flag-audio-player .jw-group{vertical-align:middle}.jwplayer.jw-flag-audio-player .jw-controlbar-center-group{padding-bottom:2px}.jw-breakpoint-0 .jw-nextup-container,.jw-breakpoint-0 .jw-text-duration,.jw-breakpoint-0 .jw-text-elapsed,.jw-breakpoint-1 .jw-nextup-container,.jw-breakpoint-1 .jw-text-duration,.jw-breakpoint-1 .jw-text-elapsed{display:none}.jw-skin-seven .jw-color-active,.jw-skin-seven .jw-color-active-hover:hover{color:#fff;stroke:#fff;border-color:#fff}.jw-skin-seven .jw-color-inactive,.jw-skin-seven .jw-color-inactive-hover:hover{color:#cecece;stroke:#cecece;border-color:#cecece}.jw-skin-seven .jw-active-option{background-color:hsla(0,0%,100%,.1)}.jw-skin-seven .jw-display-icon-container{display:table;font-size:20px;border-radius:3.5em}.jw-skin-seven .jw-display-icon-container:hover .jw-icon{color:#fff}.jw-skin-seven .jw-display-icon-container>.jw-icon{color:hsla(0,0%,100%,.9);font-size:1.7em}.jw-skin-seven.jw-state-idle .jw-display-icon-container>.jw-icon{padding-left:4px}.jw-skin-seven .jw-dock-button{border-radius:2.5em}.jw-skin-seven .jw-menu{padding:0}.jw-skin-seven .jw-dock .jw-overlay,.jw-skin-seven .jw-skip{border-radius:.5em}.jw-skin-seven .jw-text{text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.jw-skin-seven.jw-breakpoint-0 .jw-display-icon-container .jw-icon{font-size:22px}.jw-skin-seven.jw-breakpoint-1 .jw-display-icon-container .jw-icon{font-size:35.2px}', ""])
		}, function(e, t) {
			e.exports = function() {
				var e = [];
				return e.toString = function() {
					for (var e = [], t = 0; t < this.length; t++) {
						var n = this[t];
						n[2] ? e.push("@media " + n[2] + "{" + n[1] + "}") : e.push(n[1])
					}
					return e.join("")
				}, e.i = function(t, n) {
					"string" == typeof t && (t = [
						[null, t, ""]
					]);
					for (var i = {}, o = 0; o < this.length; o++) {
						var r = this[o][0];
						"number" == typeof r && (i[r] = !0)
					}
					for (o = 0; o < t.length; o++) {
						var a = t[o];
						"number" == typeof a[0] && i[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), e.push(a))
					}
				}, e
			}
		}, function(e, t, n) {
			e.exports = n.p + "jw-icons.ttf"
		}, function(e, t, n) {
			e.exports = n.p + "jw-icons.woff"
		}, function(e, t, n) {
			var i = n(11);
			e.exports = (i.
		default ||i).template({
				compiler: [7, ">= 4.0.0"],
				main: function(e, t, n, i, o) {
					return '<div class="jw-skip jw-background-color jw-hidden jw-reset">\n    <span class="jw-text jw-skiptext jw-reset"></span>\n    <span class="jw-icon-inline jw-skip-icon jw-reset"></span>\n</div>'
				},
				useData: !0
			})
		}, function(e, t, n) {
			var i = n(11);
			e.exports = (i.
		default ||i).template({
				compiler: [7, ">= 4.0.0"],
				main: function(e, t, n, i, o) {
					var r;
					return '<div class="jw-display-icon-container jw-background-color jw-reset">\n    <div class="jw-icon jw-icon-display jw-button-color jw-reset" role="button" tabindex="0" aria-label="' + e.escapeExpression((r = null != (r = n.ariaLabel || (null != t ? t.ariaLabel : t)) ? r : n.helperMissing, "function" == typeof r ? r.call(null != t ? t : {}, {
						name: "ariaLabel",
						hash: {},
						data: o
					}) : r)) + '"></div>\n</div>\n'
				},
				useData: !0
			})
		}, function(e, t, n) {
			var i = n(11);
			e.exports = (i.
		default ||i).template({
				1: function(e, t, n, i, o) {
					var r, a, s = null != t ? t : {};
					return '    <div class="jw-dock-button jw-background-color jw-reset' + (null != (r = n.
					if.call(s, null != t ? t.btnClass : t, {
						name: "if",
						hash: {},
						fn: e.program(2, o, 0),
						inverse: e.noop,
						data: o
					})) ? r : "") + '" button="' + e.escapeExpression((a = null != (a = n.id || (null != t ? t.id : t)) ? a : n.helperMissing, "function" == typeof a ? a.call(s, {
						name: "id",
						hash: {},
						data: o
					}) : a)) + '">\n        <div class="jw-icon jw-dock-image jw-reset" ' + (null != (r = n.
					if.call(s, null != t ? t.img : t, {
						name: "if",
						hash: {},
						fn: e.program(4, o, 0),
						inverse: e.noop,
						data: o
					})) ? r : "") + '></div>\n        <div class="jw-arrow jw-reset"></div>\n' + (null != (r = n.
					if.call(s, null != t ? t.tooltip : t, {
						name: "if",
						hash: {},
						fn: e.program(6, o, 0),
						inverse: e.noop,
						data: o
					})) ? r : "") + "    </div>\n"
				},
				2: function(e, t, n, i, o) {
					var r;
					return " " + e.escapeExpression((r = null != (r = n.btnClass || (null != t ? t.btnClass : t)) ? r : n.helperMissing, "function" == typeof r ? r.call(null != t ? t : {}, {
						name: "btnClass",
						hash: {},
						data: o
					}) : r))
				},
				4: function(e, t, n, i, o) {
					var r;
					return "style='background-image: url(\"" + e.escapeExpression((r = null != (r = n.img || (null != t ? t.img : t)) ? r : n.helperMissing, "function" == typeof r ? r.call(null != t ? t : {}, {
						name: "img",
						hash: {},
						data: o
					}) : r)) + "\")'"
				},
				6: function(e, t, n, i, o) {
					var r;
					return '        <div class="jw-overlay jw-background-color jw-reset">\n            <span class="jw-text jw-dock-text jw-reset">' + e.escapeExpression((r = null != (r = n.tooltip || (null != t ? t.tooltip : t)) ? r : n.helperMissing, "function" == typeof r ? r.call(null != t ? t : {}, {
						name: "tooltip",
						hash: {},
						data: o
					}) : r)) + "</span>\n        </div>\n"
				},
				compiler: [7, ">= 4.0.0"],
				main: function(e, t, n, i, o) {
					var r;
					return '<div class="jw-dock jw-reset">\n' + (null != (r = n.each.call(null != t ? t : {}, t, {
						name: "each",
						hash: {},
						fn: e.program(1, o, 0),
						inverse: e.noop,
						data: o
					})) ? r : "") + "</div>"
				},
				useData: !0
			})
		}, function(e, t, n) {
			var o = n(11);
			e.exports = (o.
		default ||o).template({
				compiler: [7, ">= 4.0.0"],
				main: function(e, t, n, o, r) {
					var a, s = null != t ? t : {},
						l = n.helperMissing,
						u = "function",
						c = e.escapeExpression;
					return '<div id="' + c((a = null != (a = n.id || (null != t ? t.id : t)) ? a : l, (void 0 === a ? "undefined" : i(a)) === u ? a.call(s, {
						name: "id",
						hash: {},
						data: r
					}) : a)) + '"class="jw-skin-' + c((a = null != (a = n.skin || (null != t ? t.skin : t)) ? a : l, (void 0 === a ? "undefined" : i(a)) === u ? a.call(s, {
						name: "skin",
						hash: {},
						data: r
					}) : a)) + ' jw-error jw-reset">\n    <div class="jw-title jw-reset">\n        <div class="jw-title-primary jw-reset">' + c((a = null != (a = n.title || (null != t ? t.title : t)) ? a : l, (void 0 === a ? "undefined" : i(a)) === u ? a.call(s, {
						name: "title",
						hash: {},
						data: r
					}) : a)) + '</div>\n        <div class="jw-title-secondary jw-reset">' + c((a = null != (a = n.body || (null != t ? t.body : t)) ? a : l, (void 0 === a ? "undefined" : i(a)) === u ? a.call(s, {
						name: "body",
						hash: {},
						data: r
					}) : a)) + '</div>\n    </div>\n\n    <div class="jw-icon-container jw-reset">\n        <div class="jw-display-icon-container jw-background-color jw-reset">\n            <div class="jw-icon jw-icon-display jw-reset" aria-hidden="true"></div>\n        </div>\n    </div>\n</div>\n'
				},
				useData: !0
			})
		}, function(e, t, n) {
			var i = n(11);
			e.exports = (i.
		default ||i).template({
				compiler: [7, ">= 4.0.0"],
				main: function(e, t, n, i, o) {
					return '<div class="jw-logo jw-reset"></div>'
				},
				useData: !0
			})
		}, function(e, t, n) {
			var i = n(11);
			e.exports = (i.
		default ||i).template({
				1: function(e, t, n, i, o) {
					var r, a = e.escapeExpression;
					return "        <li class='jw-text jw-option jw-item-" + a((r = null != (r = n.index || o && o.index) ? r : n.helperMissing, "function" == typeof r ? r.call(null != t ? t : {}, {
						name: "index",
						hash: {},
						data: o
					}) : r)) + " jw-reset'>" + a(e.lambda(null != t ? t.label : t, t)) + "</li>\n"
				},
				compiler: [7, ">= 4.0.0"],
				main: function(e, t, n, i, o) {
					var r;
					return '<ul class="jw-menu jw-background-color jw-reset">\n' + (null != (r = n.each.call(null != t ? t : {}, t, {
						name: "each",
						hash: {},
						fn: e.program(1, o, 0),
						inverse: e.noop,
						data: o
					})) ? r : "") + "</ul>"
				},
				useData: !0
			})
		}, function(e, t, n) {
			var i = n(11);
			e.exports = (i.
		default ||i).template({
				compiler: [7, ">= 4.0.0"],
				main: function(e, t, n, i, o) {
					var r = e.lambda,
						a = e.escapeExpression;
					return '<div class="jw-nextup jw-reset">\n    <div class="jw-nextup-tooltip jw-reset">\n        <div class="jw-nextup-header jw-reset">\n            ' + a(r(null != t ? t.nextUpText : t, t)) + '\n        </div>\n        <div class="jw-nextup-body jw-background-color jw-reset">\n            <div class="jw-nextup-thumbnail jw-reset"></div>\n            <div class="jw-nextup-title jw-reset">' + a(r(null != t ? t.title : t, t)) + '</div>\n        </div>\n    </div>\n    <button class="jw-nextup-close"></button>\n</div>\n'
				},
				useData: !0
			})
		}, function(e, t, n) {
			var i = n(11);
			e.exports = (i.
		default ||i).template({
				compiler: [7, ">= 4.0.0"],
				main: function(e, t, n, i, o) {
					var r;
					return '<div id="' + e.escapeExpression((r = null != (r = n.id || (null != t ? t.id : t)) ? r : n.helperMissing, "function" == typeof r ? r.call(null != t ? t : {}, {
						name: "id",
						hash: {},
						data: o
					}) : r)) + '" class="jwplayer jw-reset jw-state-idle" tabindex="0">\n    <div class="jw-aspect jw-reset"></div>\n    <div class="jw-media jw-reset"></div>\n    <div class="jw-preview jw-reset"></div>\n    <div class="jw-title jw-reset">\n        <div class="jw-title-primary jw-reset"></div>\n        <div class="jw-title-secondary jw-reset"></div>\n    </div>\n    <div class="jw-overlays jw-reset"></div>\n    <div class="jw-controls jw-reset"></div>\n</div>'
				},
				useData: !0
			})
		}, function(e, t, n) {
			var o = n(11);
			e.exports = (o.
		default ||o).template({
				1: function(e, t, n, o, r) {
					var a, s, l = null != t ? t : {},
						u = n.helperMissing,
						c = "function",
						d = e.escapeExpression;
					return '        <li class="jw-reset' + (null != (a = n.
					if.call(l, null != t ? t.featured : t, {
						name: "if",
						hash: {},
						fn: e.program(2, r, 0),
						inverse: e.noop,
						data: r
					})) ? a : "") + '">\n            <a href="' + d((s = null != (s = n.link || (null != t ? t.link : t)) ? s : u, (void 0 === s ? "undefined" : i(s)) === c ? s.call(l, {
						name: "link",
						hash: {},
						data: r
					}) : s)) + '" class="jw-reset" target="_top">\n' + (null != (a = n.
					if.call(l, null != t ? t.showLogo : t, {
						name: "if",
						hash: {},
						fn: e.program(4, r, 0),
						inverse: e.noop,
						data: r
					})) ? a : "") + "                " + d((s = null != (s = n.title || (null != t ? t.title : t)) ? s : u, (void 0 === s ? "undefined" : i(s)) === c ? s.call(l, {
						name: "title",
						hash: {},
						data: r
					}) : s)) + "\n            </a>\n        </li>\n"
				},
				2: function(e, t, n, i, o) {
					return " jw-featured"
				},
				4: function(e, t, n, i, o) {
					return '                <span class="jw-icon jw-rightclick-logo jw-reset"></span>\n'
				},
				compiler: [7, ">= 4.0.0"],
				main: function(e, t, n, i, o) {
					var r;
					return '<div class="jw-rightclick jw-reset">\n    <ul class="jw-reset">\n' + (null != (r = n.each.call(null != t ? t : {}, null != t ? t.items : t, {
						name: "each",
						hash: {},
						fn: e.program(1, o, 0),
						inverse: e.noop,
						data: o
					})) ? r : "") + "    </ul>\n</div>"
				},
				useData: !0
			})
		}, function(e, t, n) {
			var o = n(11);
			e.exports = (o.
		default ||o).template({
				compiler: [7, ">= 4.0.0"],
				main: function(e, t, n, o, r) {
					var a, s = null != t ? t : {},
						l = n.helperMissing,
						u = "function",
						c = e.escapeExpression;
					return '<div class="' + c((a = null != (a = n.className || (null != t ? t.className : t)) ? a : l, (void 0 === a ? "undefined" : i(a)) === u ? a.call(s, {
						name: "className",
						hash: {},
						data: r
					}) : a)) + " " + c((a = null != (a = n.orientation || (null != t ? t.orientation : t)) ? a : l, (void 0 === a ? "undefined" : i(a)) === u ? a.call(s, {
						name: "orientation",
						hash: {},
						data: r
					}) : a)) + ' jw-reset" aria-hidden="true">\n    <div class="jw-slider-container jw-reset">\n        <div class="jw-rail jw-reset"></div>\n        <div class="jw-buffer jw-reset"></div>\n        <div class="jw-progress jw-reset"></div>\n        <div class="jw-knob jw-reset"></div>\n    </div>\n</div>'
				},
				useData: !0
			})
		}, , function(e, t, n) {
			function i(e) {
				return e && e.__esModule ? e : {
				default:
					e
				}
			}
			function o(e) {
				if (e && e.__esModule) return e;
				var t = {};
				if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
				return t.
			default = e, t
			}
			function r() {
				var e = new s.HandlebarsEnvironment;
				return h.extend(e, s), e.SafeString = u.
			default, e.Exception = d.
			default, e.Utils = h, e.escapeExpression = h.escapeExpression, e.VM = g, e.template = function(t) {
					return g.template(t, e)
				}, e
			}
			t.__esModule = !0;
			var a = n(66),
				s = o(a),
				l = n(161),
				u = i(l),
				c = n(22),
				d = i(c),
				p = n(13),
				h = o(p),
				f = n(160),
				g = o(f),
				m = n(159),
				w = i(m),
				v = r();
			v.create = r, w.
		default (v), v.
		default = v, t.
		default = v, e.exports = t.
		default
		}, function(e, t, n) {
			function i(e) {
				r.
			default (e)
			}
			t.__esModule = !0, t.registerDefaultDecorators = i;
			var o = n(149),
				r = function(e) {
					return e && e.__esModule ? e : {
					default:
						e
					}
				}(o)
		}, function(e, t, n) {
			t.__esModule = !0;
			var i = n(13);
			t.
		default = function(e) {
				e.registerDecorator("inline", function(e, t, n, o) {
					var r = e;
					return t.partials || (t.partials = {}, r = function(o, r) {
						var a = n.partials;
						n.partials = i.extend({}, a, t.partials);
						var s = e(o, r);
						return n.partials = a, s
					}), t.partials[o.args[0]] = o.fn, r
				})
			}, e.exports = t.
		default
		}, function(e, t, n) {
			function i(e) {
				return e && e.__esModule ? e : {
				default:
					e
				}
			}
			function o(e) {
				a.
			default (e), l.
			default (e), c.
			default (e), p.
			default (e), f.
			default (e), m.
			default (e), v.
			default (e)
			}
			t.__esModule = !0, t.registerDefaultHelpers = o;
			var r = n(151),
				a = i(r),
				s = n(152),
				l = i(s),
				u = n(153),
				c = i(u),
				d = n(154),
				p = i(d),
				h = n(155),
				f = i(h),
				g = n(156),
				m = i(g),
				w = n(157),
				v = i(w)
		}, function(e, t, n) {
			t.__esModule = !0;
			var i = n(13);
			t.
		default = function(e) {
				e.registerHelper("blockHelperMissing", function(t, n) {
					var o = n.inverse,
						r = n.fn;
					if (!0 === t) return r(this);
					if (!1 === t || null == t) return o(this);
					if (i.isArray(t)) return t.length > 0 ? (n.ids && (n.ids = [n.name]), e.helpers.each(t, n)) : o(this);
					if (n.data && n.ids) {
						var a = i.createFrame(n.data);
						a.contextPath = i.appendContextPath(n.data.contextPath, n.name), n = {
							data: a
						}
					}
					return r(t, n)
				})
			}, e.exports = t.
		default
		}, function(e, t, n) {
			t.__esModule = !0;
			var o = n(13),
				r = n(22),
				a = function(e) {
					return e && e.__esModule ? e : {
					default:
						e
					}
				}(r);
			t.
		default = function(e) {
				e.registerHelper("each", function(e, t) {
					function n(t, n, i) {
						c && (c.key = t, c.index = n, c.first = 0 === n, c.last = !! i, d && (c.contextPath = d + t)), u += r(e[t], {
							data: c,
							blockParams: o.blockParams([e[t], t], [d + t, null])
						})
					}
					if (!t) throw new a.
				default ("Must pass iterator to #each");
					var r = t.fn,
						s = t.inverse,
						l = 0,
						u = "",
						c = void 0,
						d = void 0;
					if (t.data && t.ids && (d = o.appendContextPath(t.data.contextPath, t.ids[0]) + "."), o.isFunction(e) && (e = e.call(this)), t.data && (c = o.createFrame(t.data)), e && "object" == (void 0 === e ? "undefined" : i(e))) if (o.isArray(e)) for (var p = e.length; l < p; l++) l in e && n(l, l, l === e.length - 1);
					else {
						var h = void 0;
						for (var f in e) e.hasOwnProperty(f) && (void 0 !== h && n(h, l - 1), h = f, l++);
						void 0 !== h && n(h, l - 1, !0)
					}
					return 0 === l && (u = s(this)), u
				})
			}, e.exports = t.
		default
		}, function(e, t, n) {
			t.__esModule = !0;
			var i = n(22),
				o = function(e) {
					return e && e.__esModule ? e : {
					default:
						e
					}
				}(i);
			t.
		default = function(e) {
				e.registerHelper("helperMissing", function() {
					if (1 !== arguments.length) throw new o.
				default ('Missing helper: "' + arguments[arguments.length - 1].name + '"')
				})
			}, e.exports = t.
		default
		}, function(e, t, n) {
			t.__esModule = !0;
			var i = n(13);
			t.
		default = function(e) {
				e.registerHelper("if", function(e, t) {
					return i.isFunction(e) && (e = e.call(this)), !t.hash.includeZero && !e || i.isEmpty(e) ? t.inverse(this) : t.fn(this)
				}), e.registerHelper("unless", function(t, n) {
					return e.helpers.
					if.call(this, t, {
						fn: n.inverse,
						inverse: n.fn,
						hash: n.hash
					})
				})
			}, e.exports = t.
		default
		}, function(e, t) {
			t.__esModule = !0, t.
		default = function(e) {
				e.registerHelper("log", function() {
					for (var t = [void 0], n = arguments[arguments.length - 1], i = 0; i < arguments.length - 1; i++) t.push(arguments[i]);
					var o = 1;
					null != n.hash.level ? o = n.hash.level : n.data && null != n.data.level && (o = n.data.level), t[0] = o, e.log.apply(e, t)
				})
			}, e.exports = t.
		default
		}, function(e, t) {
			t.__esModule = !0, t.
		default = function(e) {
				e.registerHelper("lookup", function(e, t) {
					return e && e[t]
				})
			}, e.exports = t.
		default
		}, function(e, t, n) {
			t.__esModule = !0;
			var i = n(13);
			t.
		default = function(e) {
				e.registerHelper("with", function(e, t) {
					i.isFunction(e) && (e = e.call(this));
					var n = t.fn;
					if (i.isEmpty(e)) return t.inverse(this);
					var o = t.data;
					return t.data && t.ids && (o = i.createFrame(t.data), o.contextPath = i.appendContextPath(t.data.contextPath, t.ids[0])), n(e, {
						data: o,
						blockParams: i.blockParams([e], [o && o.contextPath])
					})
				})
			}, e.exports = t.
		default
		}, function(e, t, n) {
			t.__esModule = !0;
			var i = n(13),
				o = {
					methodMap: ["debug", "info", "warn", "error"],
					level: "info",
					lookupLevel: function(e) {
						if ("string" == typeof e) {
							var t = i.indexOf(o.methodMap, e.toLowerCase());
							e = t >= 0 ? t : parseInt(e, 10)
						}
						return e
					},
					log: function(e) {
						if (e = o.lookupLevel(e), "undefined" != typeof console && o.lookupLevel(o.level) <= e) {
							var t = o.methodMap[e];
							console[t] || (t = "log");
							for (var n = arguments.length, i = Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) i[r - 1] = arguments[r];
							console[t].apply(console, i)
						}
					}
				};
			t.
		default = o, e.exports = t.
		default
		}, function(e, t) {
			(function(n) {
				t.__esModule = !0, t.
			default = function(e) {
					var t = void 0 !== n ? n : window,
						i = t.Handlebars;
					e.noConflict = function() {
						return t.Handlebars === e && (t.Handlebars = i), e
					}
				}, e.exports = t.
			default
			}).call(t, function() {
				return this
			}())
		}, function(e, t, n) {
			function o(e) {
				var t = e && e[0] || 1,
					n = m.COMPILER_REVISION;
				if (t !== n) {
					if (t < n) {
						var i = m.REVISION_CHANGES[n],
							o = m.REVISION_CHANGES[t];
						throw new g.
					default ("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + i + ") or downgrade your runtime to an older version (" + o + ").")
					}
					throw new g.
				default ("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + e[1] + ").")
				}
			}
			function r(e, t) {
				function n(n, i, o) {
					o.hash && (i = h.extend({}, i, o.hash), o.ids && (o.ids[0] = !0)), n = t.VM.resolvePartial.call(this, n, i, o);
					var r = t.VM.invokePartial.call(this, n, i, o);
					if (null == r && t.compile && (o.partials[o.name] = t.compile(n, e.compilerOptions, t), r = o.partials[o.name](i, o)), null != r) {
						if (o.indent) {
							for (var a = r.split("\n"), s = 0, l = a.length; s < l && (a[s] || s + 1 !== l); s++) a[s] = o.indent + a[s];
							r = a.join("\n")
						}
						return r
					}
					throw new g.
				default ("The partial " + o.name + " could not be compiled when running in runtime-only mode")
				}
				function o(t) {
					function n(t) {
						return "" + e.main(r, t, r.helpers, r.partials, a, l, s)
					}
					var i = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
						a = i.data;
					o._setup(i), !i.partial && e.useData && (a = c(t, a));
					var s = void 0,
						l = e.useBlockParams ? [] : void 0;
					return e.useDepths && (s = i.depths ? t !== i.depths[0] ? [t].concat(i.depths) : i.depths : [t]), (n = d(e.main, n, r, i.depths || [], a, l))(t, i)
				}
				if (!t) throw new g.
			default ("No environment passed to template");
				if (!e || !e.main) throw new g.
			default ("Unknown template object: " + (void 0 === e ? "undefined" : i(e)));
				e.main.decorator = e.main_d, t.VM.checkRevision(e.compiler);
				var r = {
					strict: function(e, t) {
						if (!(t in e)) throw new g.
					default ('"' + t + '" not defined in ' + e);
						return e[t]
					},
					lookup: function(e, t) {
						for (var n = e.length, i = 0; i < n; i++) if (e[i] && null != e[i][t]) return e[i][t]
					},
					lambda: function(e, t) {
						return "function" == typeof e ? e.call(t) : e
					},
					escapeExpression: h.escapeExpression,
					invokePartial: n,
					fn: function(t) {
						var n = e[t];
						return n.decorator = e[t + "_d"], n
					},
					programs: [],
					program: function(e, t, n, i, o) {
						var r = this.programs[e],
							s = this.fn(e);
						return t || o || i || n ? r = a(this, e, s, t, n, i, o) : r || (r = this.programs[e] = a(this, e, s)), r
					},
					data: function(e, t) {
						for (; e && t--;) e = e._parent;
						return e
					},
					merge: function(e, t) {
						var n = e || t;
						return e && t && e !== t && (n = h.extend({}, t, e)), n
					},
					noop: t.VM.noop,
					compilerInfo: e.compiler
				};
				return o.isTop = !0, o._setup = function(n) {
					n.partial ? (r.helpers = n.helpers, r.partials = n.partials, r.decorators = n.decorators) : (r.helpers = r.merge(n.helpers, t.helpers), e.usePartial && (r.partials = r.merge(n.partials, t.partials)), (e.usePartial || e.useDecorators) && (r.decorators = r.merge(n.decorators, t.decorators)))
				}, o._child = function(t, n, i, o) {
					if (e.useBlockParams && !i) throw new g.
				default ("must pass block params");
					if (e.useDepths && !o) throw new g.
				default ("must pass parent depths");
					return a(r, t, e[t], n, 0, i, o)
				}, o
			}
			function a(e, t, n, i, o, r, a) {
				function s(t) {
					var o = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
						s = a;
					return a && t !== a[0] && (s = [t].concat(a)), n(e, t, e.helpers, e.partials, o.data || i, r && [o.blockParams].concat(r), s)
				}
				return s = d(n, s, e, a, i, r), s.program = t, s.depth = a ? a.length : 0, s.blockParams = o || 0, s
			}
			function s(e, t, n) {
				return e ? e.call || n.name || (n.name = e, e = n.partials[e]) : e = "@partial-block" === n.name ? n.data["partial-block"] : n.partials[n.name], e
			}
			function l(e, t, n) {
				n.partial = !0, n.ids && (n.data.contextPath = n.ids[0] || n.data.contextPath);
				var i = void 0;
				if (n.fn && n.fn !== u && (n.data = m.createFrame(n.data), i = n.data["partial-block"] = n.fn, i.partials && (n.partials = h.extend({}, n.partials, i.partials))), void 0 === e && i && (e = i), void 0 === e) throw new g.
			default ("The partial " + n.name + " could not be found");
				if (e instanceof Function) return e(t, n)
			}
			function u() {
				return ""
			}
			function c(e, t) {
				return t && "root" in t || (t = t ? m.createFrame(t) : {}, t.root = e), t
			}
			function d(e, t, n, i, o, r) {
				if (e.decorator) {
					var a = {};
					t = e.decorator(t, a, n, i && i[0], o, r, i), h.extend(t, a)
				}
				return t
			}
			t.__esModule = !0, t.checkRevision = o, t.template = r, t.wrapProgram = a, t.resolvePartial = s, t.invokePartial = l, t.noop = u;
			var p = n(13),
				h = function(e) {
					if (e && e.__esModule) return e;
					var t = {};
					if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
					return t.
				default = e, t
				}(p),
				f = n(22),
				g = function(e) {
					return e && e.__esModule ? e : {
					default:
						e
					}
				}(f),
				m = n(66)
		}, function(e, t) {
			function n(e) {
				this.string = e
			}
			t.__esModule = !0, n.prototype.toString = n.prototype.toHTML = function() {
				return "" + this.string
			}, t.
		default = n, e.exports = t.
		default
		}, function(e, t, n) {
			var i, o;
			i = [n(25), n(1)], void 0 !== (o = function(e, t) {
				return function(n, i) {
					var o = ["seek", "skipAd", "stop", "playlistNext", "playlistPrev", "playlistItem", "resize", "addButton", "removeButton", "registerPlugin", "attachMedia", "next"];
					t.each(o, function(e) {
						n[e] = function() {
							return i[e].apply(i, arguments), n
						}
					}), n.registerPlugin = e.registerPlugin
				}
			}.apply(t, i)) && (e.exports = o)
		}, function(e, t, n) {
			var i, o;
			i = [n(1)], void 0 !== (o = function(e) {
				return function(t, n) {
					var i = ["buffer", "controls", "position", "duration", "fullscreen", "volume", "mute", "item", "stretching", "playlist", "captions"];
					e.each(i, function(e) {
						var i = e.slice(0, 1).toUpperCase() + e.slice(1);
						t["get" + i] = function() {
							return n._model.get(e)
						}
					});
					var o = ["getAudioTracks", "getCaptionsList", "getWidth", "getHeight", "getCurrentAudioTrack", "setCurrentAudioTrack", "getCurrentCaptions", "setCurrentCaptions", "getCurrentQuality", "setCurrentQuality", "getQualityLevels", "getVisualQuality", "getConfig", "getState", "getSafeRegion", "isBeforeComplete", "isBeforePlay", "getProvider", "detachMedia"],
						r = ["setControls", "setFullscreen", "setVolume", "setMute", "setCues", "setCaptions"];
					e.each(o, function(e) {
						t[e] = function() {
							return n[e] ? n[e].apply(n, arguments) : null
						}
					}), e.each(r, function(e) {
						t[e] = function() {
							return n[e].apply(n, arguments), t
						}
					}), t.getPlaylistIndex = t.getItem
				}
			}.apply(t, i)) && (e.exports = o)
		}, function(e, t, n) {
			var i, o;
			i = [n(4), n(6), n(3), n(2), n(82), n(1), n(217), n(162), n(163), n(165), n(29)], void 0 !== (o = function(e, t, n, i, o, r, a, s, l, u, c) {
				return function(d, p) {
					var h, f = this,
						g = !1,
						m = {};
					r.extend(this, n), this.utils = i, this._ = r, this.Events = n, this.version = c, this.trigger = function(e, t) {
						t = r.isObject(t) ? r.extend({}, t) : {}, t.type = e;
						var i = window.jwplayer;
						return i && i.debug ? n.trigger.call(f, e, t) : n.triggerSafe.call(f, e, t)
					}, this.dispatchEvent = this.trigger, this.removeEventListener = this.off.bind(this);
					var w = function() {
							h = new a(d), s(f, h), l(f, h), h.on(e.JWPLAYER_PLAYLIST_ITEM, function() {
								m = {}
							}), h.on(e.JWPLAYER_MEDIA_META, function(e) {
								r.extend(m, e.metadata)
							}), h.on(e.JWPLAYER_READY, function(e) {
								g = !0, v.tick("ready"), e.setupTime = v.between("setup", "ready")
							}), h.on("all", f.trigger)
						};
					w(), u(this), this.id = d.id;
					var v = this._qoe = new o;
					v.tick("init");
					var y = function() {
							g = !1, m = {}, f.off(), h && h.off(), h && h.playerDestroy && h.playerDestroy()
						};
					return this.getPlugin = function(e) {
						return f.plugins && f.plugins[e]
					}, this.addPlugin = function(e, t) {
						this.plugins = this.plugins || {}, this.plugins[e] = t, this.onReady(t.addToPlayer), t.resize && this.onResize(t.resizeHandler)
					}, this.setup = function(e) {
						return v.tick("setup"), y(), w(), i.foreach(e.events, function(e, t) {
							var n = f[e];
							"function" == typeof n && n.call(f, t)
						}), e.id = f.id, h.setup(e, this), f
					}, this.qoe = function() {
						var t = h.getItemQoe();
						return {
							setupTime: v.between("setup", "ready"),
							firstFrame: t.between(e.JWPLAYER_MEDIA_PLAY_ATTEMPT, e.JWPLAYER_MEDIA_FIRST_FRAME),
							player: v.dump(),
							item: t.dump()
						}
					}, this.getContainer = function() {
						return h.getContainer ? h.getContainer() : d
					}, this.getMeta = this.getItemMeta = function() {
						return m
					}, this.getPlaylistItem = function(e) {
						if (!i.exists(e)) return h._model.get("playlistItem");
						var t = f.getPlaylist();
						return t ? t[e] : null
					}, this.getRenderingMode = function() {
						return "html5"
					}, this.load = function(e) {
						var t = this.getPlugin("vast") || this.getPlugin("googima") || this.getPlugin("freewheel");
						return t && (h._model.set("preInstreamState", "instream-idle"), t.destroy()), h.load(e), f
					}, this.play = function(e, n) {
						if (r.isBoolean(e) || (n = e), n || (n = {
							reason: "external"
						}), !0 === e) return h.play(n), f;
						if (!1 === e) return h.pause(), f;
						switch (e = f.getState()) {
						case t.PLAYING:
						case t.BUFFERING:
							h.pause();
							break;
						default:
							h.play(n)
						}
						return f
					}, this.pause = function(e) {
						return r.isBoolean(e) ? this.play(!e) : this.play()
					}, this.createInstream = function() {
						return h.createInstream()
					}, this.castToggle = function() {
						h && h.castToggle && h.castToggle()
					}, this.playAd = this.pauseAd = i.noop, this.remove = function() {
						return p(f), f.trigger("remove"), y(), f
					}, this
				}
			}.apply(t, i)) && (e.exports = o)
		}, function(e, t, n) {
			var i, o;
			i = [n(1), n(4)], void 0 !== (o = function(e, t) {
				return function(n) {
					var i = {
						onBufferChange: t.JWPLAYER_MEDIA_BUFFER,
						onBufferFull: t.JWPLAYER_MEDIA_BUFFER_FULL,
						onError: t.JWPLAYER_ERROR,
						onSetupError: t.JWPLAYER_SETUP_ERROR,
						onFullscreen: t.JWPLAYER_FULLSCREEN,
						onMeta: t.JWPLAYER_MEDIA_META,
						onMute: t.JWPLAYER_MEDIA_MUTE,
						onPlaylist: t.JWPLAYER_PLAYLIST_LOADED,
						onPlaylistItem: t.JWPLAYER_PLAYLIST_ITEM,
						onPlaylistComplete: t.JWPLAYER_PLAYLIST_COMPLETE,
						onReady: t.JWPLAYER_READY,
						onResize: t.JWPLAYER_RESIZE,
						onComplete: t.JWPLAYER_MEDIA_COMPLETE,
						onSeek: t.JWPLAYER_MEDIA_SEEK,
						onTime: t.JWPLAYER_MEDIA_TIME,
						onVolume: t.JWPLAYER_MEDIA_VOLUME,
						onBeforePlay: t.JWPLAYER_MEDIA_BEFOREPLAY,
						onBeforeComplete: t.JWPLAYER_MEDIA_BEFORECOMPLETE,
						onDisplayClick: t.JWPLAYER_DISPLAY_CLICK,
						onControls: t.JWPLAYER_CONTROLS,
						onQualityLevels: t.JWPLAYER_MEDIA_LEVELS,
						onQualityChange: t.JWPLAYER_MEDIA_LEVEL_CHANGED,
						onCaptionsList: t.JWPLAYER_CAPTIONS_LIST,
						onCaptionsChange: t.JWPLAYER_CAPTIONS_CHANGED,
						onAdError: t.JWPLAYER_AD_ERROR,
						onAdClick: t.JWPLAYER_AD_CLICK,
						onAdImpression: t.JWPLAYER_AD_IMPRESSION,
						onAdTime: t.JWPLAYER_AD_TIME,
						onAdComplete: t.JWPLAYER_AD_COMPLETE,
						onAdCompanions: t.JWPLAYER_AD_COMPANIONS,
						onAdSkipped: t.JWPLAYER_AD_SKIPPED,
						onAdPlay: t.JWPLAYER_AD_PLAY,
						onAdPause: t.JWPLAYER_AD_PAUSE,
						onAdMeta: t.JWPLAYER_AD_META,
						onCast: t.JWPLAYER_CAST_SESSION,
						onAudioTrackChange: t.JWPLAYER_AUDIO_TRACK_CHANGED,
						onAudioTracks: t.JWPLAYER_AUDIO_TRACKS
					},
						o = {
							onBuffer: "buffer",
							onPause: "pause",
							onPlay: "play",
							onIdle: "idle"
						};
					e.each(o, function(t, i) {
						n[i] = e.partial(n.on, t, e)
					}), e.each(i, function(t, i) {
						n[i] = e.partial(n.on, t, e)
					})
				}
			}.apply(t, i)) && (e.exports = o)
		}, function(e, t, n) {
			var i, o;
			i = [n(164), n(1), n(53), n(52), n(25)], void 0 !== (o = function(e, t, n, i, o) {
				var r = [],
					a = 0,
					s = function(t) {
						var n, i;
						return t ? "string" == typeof t ? (n = l(t)) || (i = document.getElementById(t)) : "number" == typeof t ? n = r[t] : t.nodeType && (i = t, n = l(i.id)) : n = r[0], n || (i ? u(new e(i, c)) : {
							registerPlugin: o.registerPlugin
						})
					},
					l = function(e) {
						for (var t = 0; t < r.length; t++) if (r[t].id === e) return r[t];
						return null
					},
					u = function(e) {
						return a++, e.uniqueId = a, r.push(e), e
					},
					c = function(e) {
						for (var t = r.length; t--;) if (r[t].uniqueId === e.uniqueId) {
							r.splice(t, 1);
							break
						}
					},
					d = {
						selectPlayer: s,
						registerProvider: n.registerProvider,
						availableProviders: i,
						registerPlugin: o.registerPlugin
					};
				return s.api = d, d
			}.apply(t, i)) && (e.exports = o)
		}, function(e, t, n) {
			var i, o;
			i = [n(218), n(3), n(1), n(4)], void 0 !== (o = function(e, t, n, i) {
				var o = function(t, o, r, a) {
						function s() {
							p("Setup Timeout Error", "Setup took longer than " + m + " seconds to complete.")
						}
						function l() {
							n.each(g, function(e) {
								!0 !== e.complete && !0 !== e.running && null !== t && c(e.depends) && (e.running = !0, u(e))
							})
						}
						function u(e) {
							var n = function(t) {
									t = t || {}, d(e, t)
								};
							e.method(n, o, t, r, a)
						}
						function c(e) {
							return n.all(e, function(e) {
								return g[e].complete
							})
						}
						function d(e, t) {
							"error" === t.type ? p(t.msg, t.reason) : "complete" === t.type ? (clearTimeout(h), f.trigger(i.JWPLAYER_READY)) : (e.complete = !0, l())
						}
						function p(e, t) {
							clearTimeout(h), f.trigger(i.JWPLAYER_SETUP_ERROR, {
								message: e + ": " + t
							}), f.destroy()
						}
						var h, f = this,
							g = e.getQueue(),
							m = 30;
						this.start = function() {
							h = setTimeout(s, 1e3 * m), l()
						}, this.destroy = function() {
							clearTimeout(h), this.off(), g.length = 0, t = null, o = null, r = null
						}
					};
				return o.prototype = t, o
			}.apply(t, i)) && (e.exports = o)
		}, function(e, t, n) {
			var i, o;
			i = [n(2), n(23), n(16)], void 0 !== (o = function(e, t, n) {
				return function(i, o) {
					function r(e) {
						if (e.tracks.length) {
							for (var t = e.tracks || [], n = 0; n < t.length; n++) {
								var i = t[n];
								v[i._id] || p(i)
							}
							var o = h();
							f(), this.setCaptionsList(o)
						}
					}
					function a(e, t) {
						m = t, w = [], v = {}, y = {}, j = 0
					}
					function s(e) {
						a(o, e);
						var i = e.tracks,
							r = i && i.length;
						if (!n.renderNatively(o.get("provider").name) && r) {
							var s, d;
							for (s = 0; s < r; s++) d = i[s], l(d.kind) && !v[d._id] && (p(d), t.loadFile(d, u.bind(null, d), c))
						}
						var g = h();
						f(), this.setCaptionsList(g)
					}
					function l(e) {
						return "subtitles" === e || "captions" === e
					}
					function u(e, t) {
						e.data = t
					}
					function c(t) {
						e.log("CAPTIONS(" + t + ")")
					}
					function d(e, t) {
						var n = null;
						0 !== t && (n = w[t - 1]), e.set("captionsTrack", n)
					}
					function p(e) {
						if (e.data = e.data || [], e.name = e.label || e.name || e.language, e._id = n.createId(e, w.length), !e.name) {
							var t = n.createLabel(e, j);
							e.name = t.label, j = t.unknownCount
						}
						w.push(e), v[e._id] = e
					}
					function h() {
						for (var e = [{
							id: "off",
							label: "Off"
						}], t = 0; t < w.length; t++) e.push({
							id: w[t]._id,
							label: w[t].name || "Unknown CC"
						});
						return e
					}
					function f() {
						var e = 0,
							t = o.get("captionLabel");
						if ("Off" === t) return void o.set("captionsIndex", 0);
						for (var n = 0; n < w.length; n++) {
							var i = w[n];
							if (t && t === i.name) {
								e = n + 1;
								break
							}
							i.
						default ||i.defaulttrack || "default" === i._id ? e = n + 1:
							i.autoselect
						}
						g(e)
					}
					function g(e) {
						w.length ? o.setVideoSubtitleTrack(e, w) : o.set("captionsIndex", e)
					}
					o.on("change:playlistItem", a, this), o.on("change:captionsIndex", d, this), o.on("itemReady", s, this), o.mediaController.on("subtitlesTracks", r, this);
					var m = {},
						w = [],
						v = {},
						y = {},
						j = 0;
					this.getCurrentIndex = function() {
						return o.get("captionsIndex")
					}, this.getCaptionsList = function() {
						return o.get("captionsList")
					}, this.setCaptionsList = function(e) {
						o.set("captionsList", e)
					}
				}
			}.apply(t, i)) && (e.exports = o)
		}, function(e, t, n) {
			var o, r;
			o = [n(67), n(170), n(1), n(167), n(168), n(31), n(175), n(72), n(71), n(2), n(95), n(3), n(41), n(6), n(4), n(203)], void 0 !== (r = function(e, t, n, o, r, a, s, l, u, c, d, p, h, f, g, m) {
				function w(e) {
					return function() {
						var t = Array.prototype.slice.call(arguments, 0);
						this._model.getVideo() ? this["_" + e].apply(this, t) : this.eventsQueue.push([e, t])
					}
				}
				function v(e) {
					return e === f.LOADING || e === f.STALLED ? f.BUFFERING : e
				}
				var y = function(e) {
						this.originalContainer = this.currentContainer = e, this.eventsQueue = [], n.extend(this, p), this._model = new a
					};
				return y.prototype = {
					play: w("play"),
					pause: w("pause"),
					seek: w("seek"),
					stop: w("stop"),
					load: w("load"),
					playlistNext: w("next"),
					playlistPrev: w("prev"),
					playlistItem: w("item"),
					setCurrentCaptions: w("setCurrentCaptions"),
					setCurrentQuality: w("setCurrentQuality"),
					setFullscreen: w("setFullscreen"),
					setup: function(a, p) {
						function m(e, t) {
							ae.triggerAfterReady(e, t)
						}
						function w() {
							ee = null, $.on("all", m, ae), ae.showView($.element()), n.defer(y)
						}
						function y() {
							ae.trigger(g.JWPLAYER_READY, {
								setupTime: 0
							}), ae.triggerAfterReady = ae.trigger;
							for (var e = 0; e < ce.length; e++) {
								var t = ce[e];
								ae.trigger(t.type, t.args)
							}
							var n = p.getPlugin("related");
							n && n.on("nextUp", ie.setNextUp, ie), ie.get("autostart") && ae.play({
								reason: "autostart"
							})
						}
						function j(e) {
							var t = ie.getProviders(),
								n = t.required(e, ie.get("primary"));
							return t.load(n).then(function() {
								ae.getProvider() || (ie.setProvider(ie.get("playlistItem")), b())
							})
						}
						function b() {
							for (; ae.eventsQueue.length > 0;) {
								var e = ae.eventsQueue.shift(),
									t = e[0],
									n = e[1] || [];
								ae["_" + t].apply(ae, n)
							}
						}
						function E(e) {
							switch (ie.get("state") === f.ERROR && ie.set("state", f.IDLE), L(!0), ie.get("autostart") && ie.once("itemReady", _), void 0 === e ? "undefined" : i(e)) {
							case "string":
								k(e);
								break;
							case "object":
								I(e) && M(0);
								break;
							case "number":
								M(e)
							}
						}
						function k(e) {
							var t = new u;
							t.on(g.JWPLAYER_PLAYLIST_LOADED, function(e) {
								E(e.playlist)
							}), t.on(g.JWPLAYER_ERROR, function(e) {
								e.message = "Error loading playlist: " + e.message, this.triggerError(e)
							}, this), t.load(e)
						}
						function x() {
							return ae._instreamAdapter && ae._instreamAdapter.getState()
						}
						function A() {
							var e = x();
							return n.isString(e) ? e : ie.get("state")
						}
						function _(e) {
							var t;
							if (e && ie.set("playReason", e.reason), ie.get("state") !== f.ERROR) {
								var i = x();
								if (n.isString(i)) return p.pauseAd(!1);
								if (ie.get("state") === f.COMPLETE && (L(!0), M(0)), !oe && (oe = !0, ae.trigger(g.JWPLAYER_MEDIA_BEFOREPLAY, {
									playReason: ie.get("playReason")
								}), oe = !1, ne)) return ne = !1, void(te = null);
								if (P()) {
									if (0 === ie.get("playlist").length) return !1;
									t = c.tryCatch(function() {
										ie.loadVideo()
									})
								} else ie.get("state") === f.PAUSED && (t = c.tryCatch(function() {
									ie.playVideo()
								}));
								return !(t instanceof c.Error && (ae.triggerError(t), te = null, 1))
							}
						}
						function L(e) {
							ie.off("itemReady", _);
							var t = !e;
							te = null;
							var n = c.tryCatch(function() {
								ie.stopVideo()
							}, ae);
							return n instanceof c.Error ? (ae.triggerError(n), !1) : (t && (re = !0), oe && (ne = !0), !0)
						}
						function C() {
							te = null;
							var e = x();
							if (n.isString(e)) return p.pauseAd(!0);
							switch (ie.get("state")) {
							case f.ERROR:
								return !1;
							case f.PLAYING:
							case f.BUFFERING:
								var t = c.tryCatch(function() {
									se().pause()
								}, this);
								if (t instanceof c.Error) return ae.triggerError(t), !1;
								break;
							default:
								oe && (ne = !0)
							}
							return !0
						}
						function P() {
							var e = ie.get("state");
							return e === f.IDLE || e === f.COMPLETE || e === f.ERROR
						}
						function T(e) {
							ie.get("state") !== f.ERROR && (ie.get("scrubbing") || ie.get("state") === f.PLAYING || _(!0), se().seek(e))
						}
						function R(e, t) {
							L(!0), ie.get("state") === f.ERROR && ie.set("state", f.IDLE), M(e), _(t)
						}
						function I(e) {
							var t = l(e);
							return t = l.filterPlaylist(t, ie.getProviders(), ie.get("androidhls"), ie.get("drm"), ie.get("preload"), ie.get("feedid"), ie.get("withCredentials")), ie.set("playlist", t), n.isArray(t) && 0 !== t.length ? (j(t), !0) : (ae.triggerError({
								message: "Error loading playlist: No playable sources found"
							}), !1)
						}
						function M(e) {
							ie.setItemIndex(e)
						}
						function S(e) {
							R(ie.get("item") - 1, e || {
								reason: "external"
							})
						}
						function O(e) {
							R(ie.get("item") + 1, e || {
								reason: "external"
							})
						}
						function D() {
							if (P()) {
								if (re) return void(re = !1);
								te = D;
								return ie.get("item") === ie.get("playlist").length - 1 ? void(ie.get("repeat") ? O({
									reason: "repeat"
								}) : (ie.set("state", f.COMPLETE), ae.trigger(g.JWPLAYER_PLAYLIST_COMPLETE, {}))) : void O({
									reason: "playlist"
								})
							}
						}
						function N(e) {
							se() && (e = parseInt(e, 10) || 0, se().setCurrentQuality(e))
						}
						function Y() {
							return se() ? se().getCurrentQuality() : -1
						}
						function W() {
							if (this._model) return this._model.getConfiguration()
						}
						function F() {
							if (this._model.mediaModel) return this._model.mediaModel.get("visualQuality");
							var e = J();
							if (e) {
								var t = Y(),
									i = e[t];
								if (i) return {
									level: n.extend({
										index: t
									}, i),
									mode: "",
									reason: ""
								}
							}
							return null
						}
						function J() {
							return se() ? se().getQualityLevels() : null
						}
						function B(e) {
							se() && (e = parseInt(e, 10) || 0, se().setCurrentAudioTrack(e))
						}
						function V() {
							return se() ? se().getCurrentAudioTrack() : -1
						}
						function z() {
							return se() ? se().getAudioTracks() : null
						}
						function U(e) {
							e = parseInt(e, 10) || 0, ie.persistVideoSubtitleTrack(e), ae.trigger(g.JWPLAYER_CAPTIONS_CHANGED, {
								tracks: G(),
								track: e
							})
						}
						function H() {
							return Z.getCurrentIndex()
						}
						function G() {
							return Z.getCaptionsList()
						}
						function K() {
							var e = ie.getVideo();
							if (e) {
								var t = e.detachMedia();
								if (t instanceof HTMLVideoElement) return t
							}
							return null
						}
						function q() {
							var e = c.tryCatch(function() {
								ie.getVideo().attachMedia()
							});
							return e instanceof c.Error ? void c.log("Error calling _attachMedia", e) : void("function" == typeof te && te())
						}
						function X(e) {
							n.isBoolean(e) || (e = !ie.get("fullscreen")), ie.set("fullscreen", e), this._instreamAdapter && this._instreamAdapter._adModel && this._instreamAdapter._adModel.set("fullscreen", e)
						}
						function Q() {
							var e = p.getPlugin("related");
							e && e.next()
						}
						var $, Z, ee, te, ne, ie = this._model,
							oe = !1,
							re = !1,
							ae = this,
							se = function() {
								return ie.getVideo()
							},
							le = new s;
						le.track(ie);
						var ue = new e(a, le),
							ce = [];
						ie.setup(ue, le), $ = this._view = new d(p, ie), ee = new o(p, ie, $, I), ee.on(g.JWPLAYER_READY, w, this), ee.on(g.JWPLAYER_SETUP_ERROR, this.setupError, this), ie.mediaController.on("all", m, this), ie.mediaController.on(g.JWPLAYER_MEDIA_COMPLETE, function() {
							n.defer(D)
						}), ie.mediaController.on(g.JWPLAYER_MEDIA_ERROR, this.triggerError, this), ie.on("change:flashBlocked", function(e, t) {
							if (!t) return void this._model.set("errorEvent", void 0);
							var n = !! e.get("flashThrottle"),
								i = {
									message: n ? "Click to run Flash" : "Flash plugin failed to load"
								};
							n || this.trigger(g.JWPLAYER_ERROR, i), this._model.set("errorEvent", i)
						}, this), ie.on("change:state", h, this), ie.on("change:castState", function(e, t) {
							ae.trigger(g.JWPLAYER_CAST_SESSION, t)
						}), ie.on("change:fullscreen", function(e, t) {
							ae.trigger(g.JWPLAYER_FULLSCREEN, {
								fullscreen: t
							})
						}), ie.on("itemReady", function() {
							ae.triggerAfterReady(g.JWPLAYER_PLAYLIST_ITEM, {
								index: ie.get("item"),
								item: ie.get("playlistItem")
							})
						}), ie.on("change:playlist", function(e, t) {
							t.length && ae.triggerAfterReady(g.JWPLAYER_PLAYLIST_LOADED, {
								playlist: t
							})
						}), ie.on("change:volume", function(e, t) {
							ae.trigger(g.JWPLAYER_MEDIA_VOLUME, {
								volume: t
							})
						}), ie.on("change:mute", function(e, t) {
							ae.trigger(g.JWPLAYER_MEDIA_MUTE, {
								mute: t
							})
						}), ie.on("change:controls", function(e, t) {
							ae.trigger(g.JWPLAYER_CONTROLS, {
								controls: t
							})
						}), ie.on("change:scrubbing", function(e, t) {
							t ? C() : _()
						}), ie.on("change:captionsList", function(e, t) {
							try {
								ae.triggerAfterReady(g.JWPLAYER_CAPTIONS_LIST, {
									tracks: t,
									track: H()
								})
							} catch (e) {
								c.log("Error with captionsList event:", e)
							}
						}), ie.on("change:mediaModel", function(e) {
							e.mediaModel.on("change:state", function(t, n) {
								var i = v(n);
								e.set("state", i)
							})
						}), Z = new r(p, ie), this.triggerAfterReady = function(e, t) {
							ce.push({
								type: e,
								args: t
							})
						}, this._play = _, this._pause = C, this._seek = T, this._stop = L, this._load = E, this._next = O, this._prev = S, this._item = R, this._setCurrentCaptions = U, this._setCurrentQuality = N, this._setFullscreen = X, this.detachMedia = K, this.attachMedia = q, this.getCurrentQuality = Y, this.getQualityLevels = J, this.setCurrentAudioTrack = B, this.getCurrentAudioTrack = V, this.getAudioTracks = z, this.getCurrentCaptions = H, this.getCaptionsList = G, this.getVisualQuality = F, this.getConfig = W, this.getState = A, this.setVolume = ie.setVolume.bind(ie), this.setMute = ie.setMute.bind(ie), this.getProvider = function() {
							return ie.get("provider")
						}, this.getWidth = function() {
							return ie.get("containerWidth")
						}, this.getHeight = function() {
							return ie.get("containerHeight")
						}, this.getContainer = function() {
							return this.currentContainer
						}, this.resize = $.resize, this.getSafeRegion = $.getSafeRegion, this.setCues = $.addCues, this.setCaptions = $.setCaptions, this.next = Q, this.addButton = function(e, t, i, o, r) {
							var a = {
								img: e,
								tooltip: t,
								callback: i,
								id: o,
								btnClass: r
							},
								s = ie.get("dock");
							s = s ? s.slice(0) : [], s = n.reject(s, n.matches({
								id: a.id
							})), s.push(a), ie.set("dock", s)
						}, this.removeButton = function(e) {
							var t = ie.get("dock") || [];
							t = n.reject(t, n.matches({
								id: e
							})), ie.set("dock", t)
						}, this.checkBeforePlay = function() {
							return oe
						}, this.getItemQoe = function() {
							return ie._qoeItem
						}, this.setControls = function(e) {
							n.isBoolean(e) || (e = !ie.get("controls")), ie.set("controls", e);
							var t = ie.getVideo();
							t && t.setControls(e)
						}, this.playerDestroy = function() {
							this.stop(), this.showView(this.originalContainer), $ && $.destroy(), ie && ie.destroy(), ee && (ee.destroy(), ee = null)
						}, this.isBeforePlay = this.checkBeforePlay, this.isBeforeComplete = function() {
							return ie.getVideo().checkComplete()
						}, this.createInstream = function() {
							return this.instreamDestroy(), this._instreamAdapter = new t(this, ie, $), this._instreamAdapter
						}, this.skipAd = function() {
							this._instreamAdapter && this._instreamAdapter.skipAd()
						}, this.instreamDestroy = function() {
							ae._instreamAdapter && ae._instreamAdapter.destroy()
						}, ee.start()
					},
					showView: function(e) {
						(document.documentElement.contains(this.currentContainer) || (this.currentContainer = document.getElementById(this._model.get("id")), this.currentContainer)) && (this.currentContainer.parentElement && this.currentContainer.parentElement.replaceChild(e, this.currentContainer), this.currentContainer = e)
					},
					triggerError: function(e) {
						this._model.set("errorEvent", e), this._model.set("state", f.ERROR), this._model.once("change:state", function() {
							this._model.set("errorEvent", void 0)
						}, this), this.trigger(g.JWPLAYER_ERROR, e)
					},
					setupError: function(e) {
						var t = e.message,
							i = c.createElement(m(this._model.get("id"), this._model.get("skin"), t)),
							o = this._model.get("width"),
							r = this._model.get("height");
						c.style(i, {
							width: o.toString().indexOf("%") > 0 ? o : o + "px",
							height: r.toString().indexOf("%") > 0 ? r : r + "px"
						}), this.showView(i);
						var a = this;
						n.defer(function() {
							a.trigger(g.JWPLAYER_SETUP_ERROR, {
								message: t
							})
						})
					}
				}, y
			}.apply(t, o)) && (e.exports = r)
		}, function(e, t, n) {
			var i, o;
			i = [n(172), n(171), n(4), n(6), n(2), n(3), n(1)], void 0 !== (o = function(e, t, n, i, o, r, a) {
				function s(n) {
					var i = "",
						o = n.get("provider");
					return o && (i = o.name), i.indexOf("flash") >= 0 ? t : e
				}
				var l = {
					skipoffset: null,
					tag: null
				},
					u = function(e, r, u) {
						function c() {
							y._adModel.set("state", "buffering"), r.set("skipButton", !1), j++;
							var e, t = h[j];
							f && (e = f[j]), E.loadItem(t, e)
						}
						function d(e, t) {
							"complete" !== e && (t = t || {}, b.tag && !t.tag && (t.tag = b.tag), this.trigger(e, t), "mediaError" !== e && "error" !== e || h && j + 1 < h.length && c())
						}
						function p(e) {
							y._adModel.set("duration", e.duration), y._adModel.set("position", e.position)
						}
						var h, f, g, m, w, v = s(r),
							y = new v(e, r),
							j = 0,
							b = {},
							E = this,
							k = a.bind(function(e) {
								e = e || {}, e.hasControls = !! r.get("controls"), this.trigger(n.JWPLAYER_INSTREAM_CLICK, e), y && y._adModel && (y._adModel.get("state") === i.PAUSED ? e.hasControls && y.instreamPlay() : y.instreamPause())
							}, this),
							x = a.bind(function() {
								y && y._adModel && y._adModel.get("state") === i.PAUSED && r.get("controls") && (e.setFullscreen(), e.play())
							}, this);
						this.type = "instream", this.init = function() {
							g = r.getVideo(), m = r.get("position"), w = r.get("playlist")[r.get("item")], y.on("all", d, this), y.on(n.JWPLAYER_MEDIA_TIME, p, this), y.on(n.JWPLAYER_MEDIA_COMPLETE, A, this), y.init(), g.detachMedia(), r.mediaModel.set("state", i.BUFFERING), e.checkBeforePlay() || 0 === m && !g.checkComplete() ? (m = 0, r.set("preInstreamState", "instream-preroll")) : g && g.checkComplete() || r.get("state") === i.COMPLETE ? r.set("preInstreamState", "instream-postroll") : r.set("preInstreamState", "instream-midroll");
							var t = r.get("state");
							return t !== i.PLAYING && t !== i.BUFFERING || g.pause(), u.setupInstream(y._adModel), y._adModel.set("state", i.BUFFERING), u.clickHandler().setAlternateClickHandlers(o.noop, null), this.setText(r.get("localization").loadingAd), this
						};
						var A = function(e) {
								var t = {};
								b.tag && (t.tag = b.tag), h && j + 1 < h.length ? (this.trigger(n.JWPLAYER_MEDIA_COMPLETE, t), c()) : (e.type === n.JWPLAYER_MEDIA_COMPLETE && (this.trigger(n.JWPLAYER_MEDIA_COMPLETE, t), this.trigger(n.JWPLAYER_PLAYLIST_COMPLETE, {})), this.destroy())
							};
						this.loadItem = function(e, i) {
							if (o.isAndroid(2.3)) return void this.trigger({
								type: n.JWPLAYER_ERROR,
								message: "Error loading instream: Cannot play instream on Android 2.3"
							});
							var s = e;
							a.isArray(e) ? (h = e, f = i, e = h[j], f && (i = f[j])) : s = [e];
							var u = this,
								c = r.getProviders(),
								d = v === t ? "flash" : void 0,
								p = c.required(s, d);
							r.set("hideAdsControls", !1), c.load(p).then(function() {
								if (null !== y) {
									u.trigger(n.JWPLAYER_PLAYLIST_ITEM, {
										index: j,
										item: e
									}), b = a.extend({}, l, i), y.load(e), u.addClickHandler();
									var t = e.skipoffset || b.skipoffset;
									t && u.setupSkipButton(t, b)
								}
							})
						}, this.setupSkipButton = function(e, t, n) {
							r.set("skipButton", !1), n && (A = n), y._adModel.set("skipMessage", t.skipMessage), y._adModel.set("skipText", t.skipText), y._adModel.set("skipOffset", e), r.set("skipButton", !0)
						}, this.applyProviderListeners = function(e) {
							y.applyProviderListeners(e), this.addClickHandler()
						}, this.play = function() {
							y.instreamPlay()
						}, this.pause = function() {
							y.instreamPause()
						}, this.addClickHandler = function() {
							u.clickHandler().setAlternateClickHandlers(k, x), y.on(n.JWPLAYER_MEDIA_META, this.metaHandler, this)
						}, this.skipAd = function(e) {
							var t = n.JWPLAYER_AD_SKIPPED;
							this.trigger(t, e), A.call(this, {
								type: t
							})
						}, this.metaHandler = function(e) {
							e.width && e.height && u.resizeMedia()
						}, this.destroy = function() {
							if (this.off(), r.set("skipButton", !1), y) {
								u.clickHandler() && u.clickHandler().revertAlternateClickHandlers(), r.off(null, null, y), y.instreamDestroy(), u.destroyInstream(), y = null, e.attachMedia();
								switch (r.get("preInstreamState")) {
								case "instream-preroll":
								case "instream-midroll":
									var t = a.extend({}, w);
									t.starttime = m, r.loadVideo(t), o.isMobile() && r.mediaModel.get("state") === i.BUFFERING && g.setState(i.BUFFERING), g.play();
									break;
								case "instream-postroll":
								case "instream-idle":
									g.stop()
								}
							}
						}, this.getState = function() {
							return !(!y || !y._adModel) && y._adModel.get("state")
						}, this.setText = function(e) {
							u.setAltText(e || "")
						}, this.hide = function() {
							r.set("hideAdsControls", !0)
						}
					};
				return a.extend(u.prototype, r), u
			}.apply(t, i)) && (e.exports = o)
		}, function(e, t, n) {
			var i, o;
			i = [n(3), n(31), n(41), n(4), n(6), n(2), n(1)], void 0 !== (o = function(e, t, n, i, o, r, a) {
				var s = function(e, i) {
						this.model = i, this._adModel = (new t).setup({
							id: i.get("id"),
							volume: i.get("volume"),
							fullscreen: i.get("fullscreen"),
							mute: i.get("mute")
						}), this._adModel.on("change:state", n, this);
						var o = e.getContainer();
						this.swf = o.querySelector("object")
					};
				return s.prototype = a.extend({
					init: function() {
						if (r.isChrome()) {
							var e = -1,
								t = !1;
							this.swf.on("throttle", function(n) {
								if (clearTimeout(e), "resume" === n.state) t && (t = !1, this.instreamPlay());
								else {
									var i = this;
									e = setTimeout(function() {
										i._adModel.get("state") === o.PLAYING && (t = !0, i.instreamPause())
									}, 250)
								}
							}, this)
						}
						this.swf.on("instream:state", this.stateHandler, this).on("instream:time", function(e) {
							this._adModel.set("position", e.position), this._adModel.set("duration", e.duration), this.trigger(i.JWPLAYER_MEDIA_TIME, e)
						}, this).on("instream:complete", function(e) {
							this.trigger(i.JWPLAYER_MEDIA_COMPLETE, e)
						}, this).on("instream:error", function(e) {
							this.trigger(i.JWPLAYER_MEDIA_ERROR, e)
						}, this), this.swf.triggerFlash("instream:init"), this.applyProviderListeners = function(e) {
							this.model.on("change:volume", function(t, n) {
								e.volume(n)
							}, this), this.model.on("change:mute", function(t, n) {
								e.mute(n)
							}, this), e.volume(this.model.get("volume")), e.mute(this.model.get("mute")), e.off(), e.on(i.JWPLAYER_PLAYER_STATE, this.stateHandler, this), e.on(i.JWPLAYER_MEDIA_TIME, function(e) {
								this.trigger(i.JWPLAYER_MEDIA_TIME, e)
							}, this)
						}
					},
					stateHandler: function(e) {
						switch (e.newstate) {
						case o.PLAYING:
						case o.PAUSED:
							this._adModel.set("state", e.newstate)
						}
					},
					instreamDestroy: function() {
						this._adModel && (this.off(), this.swf.off(null, null, this), this.swf.triggerFlash("instream:destroy"), this.swf = null, this._adModel.off(), this._adModel = null, this.model = null)
					},
					load: function(e) {
						this.swf.triggerFlash("instream:load", e)
					},
					instreamPlay: function() {
						this.swf.triggerFlash("instream:play")
					},
					instreamPause: function() {
						this.swf.triggerFlash("instream:pause")
					}
				}, e), s
			}.apply(t, i)) && (e.exports = o)
		}, function(e, t, n) {
			var i, o;
			i = [n(1), n(3), n(41), n(4), n(6), n(31)], void 0 !== (o = function(e, t, n, i, o, r) {
				return function(a, s) {
					function l(t) {
						var o = t || p.getVideo();
						if (h !== o) {
							if (h = o, !o) return;
							o.off(), o.on("all", function(t, n) {
								n = e.extend({}, n, {
									type: t
								}), this.trigger(t, n)
							}, f), o.on(i.JWPLAYER_MEDIA_BUFFER_FULL, d), o.on(i.JWPLAYER_PLAYER_STATE, u), o.attachMedia(), o.volume(s.get("volume")), o.mute(s.get("mute")), p.on("change:state", n, f)
						}
					}
					function u(e) {
						switch (e.newstate) {
						case o.PLAYING:
						case o.PAUSED:
							p.set("state", e.newstate)
						}
					}
					function c(e) {
						s.trigger(e.type, e), f.trigger(i.JWPLAYER_FULLSCREEN, {
							fullscreen: e.jwstate
						})
					}
					function d() {
						p.getVideo().play()
					}
					var p, h, f = e.extend(this, t);
					return a.on(i.JWPLAYER_FULLSCREEN, function(e) {
						this.trigger(i.JWPLAYER_FULLSCREEN, e)
					}, f), this.init = function() {
						p = (new r).setup({
							id: s.get("id"),
							volume: s.get("volume"),
							fullscreen: s.get("fullscreen"),
							mute: s.get("mute"),
							instreamMode: !0
						}), p.on("fullscreenchange", c), this._adModel = p
					}, f.load = function(e) {
						p.set("item", 0), p.set("playlistItem", e), p.setActiveItem(e), l(), p.off(i.JWPLAYER_ERROR), p.on(i.JWPLAYER_ERROR, function(e) {
							this.trigger(i.JWPLAYER_ERROR, e)
						}, f), p.loadVideo(e)
					}, f.applyProviderListeners = function(e) {
						l(e), e.off(i.JWPLAYER_ERROR), e.on(i.JWPLAYER_ERROR, function(e) {
							this.trigger(i.JWPLAYER_ERROR, e)
						}, f), s.on("change:volume", function(e, t) {
							h.volume(t)
						}, f), s.on("change:mute", function(e, t) {
							h.mute(t)
						}, f)
					}, this.instreamDestroy = function() {
						p && (p.off(), this.off(), h && (h.detachMedia(), h.off(), p.getVideo() && h.destroy()), p = null, a.off(null, null, this), a = null)
					}, f.instreamPlay = function() {
						p.getVideo() && p.getVideo().play(!0)
					}, f.instreamPause = function() {
						p.getVideo() && p.getVideo().pause(!0)
					}, f
				}
			}.apply(t, i)) && (e.exports = o)
		}, function(e, t, n) {
			var i, o;
			i = [n(82), n(4), n(1)], void 0 !== (o = function(e, t, n) {
				function i(e) {
					e.mediaController.off(t.JWPLAYER_MEDIA_PLAY_ATTEMPT, e._onPlayAttempt), e.mediaController.off(t.JWPLAYER_PROVIDER_FIRST_FRAME, e._triggerFirstFrame), e.mediaController.off(t.JWPLAYER_MEDIA_TIME, e._onTime)
				}
				function o(e) {
					i(e), e._triggerFirstFrame = n.once(function() {
						var n = e._qoeItem;
						n.tick(t.JWPLAYER_MEDIA_FIRST_FRAME);
						var o = n.between(t.JWPLAYER_MEDIA_PLAY_ATTEMPT, t.JWPLAYER_MEDIA_FIRST_FRAME);
						e.mediaController.trigger(t.JWPLAYER_MEDIA_FIRST_FRAME, {
							loadTime: o
						}), i(e)
					}), e._onTime = a(e._triggerFirstFrame), e._onPlayAttempt = function() {
						e._qoeItem.tick(t.JWPLAYER_MEDIA_PLAY_ATTEMPT)
					}, e.mediaController.on(t.JWPLAYER_MEDIA_PLAY_ATTEMPT, e._onPlayAttempt), e.mediaController.once(t.JWPLAYER_PROVIDER_FIRST_FRAME, e._triggerFirstFrame), e.mediaController.on(t.JWPLAYER_MEDIA_TIME, e._onTime)
				}
				function r(n) {
					function i(n, i, r) {
						n._qoeItem && r && n._qoeItem.end(r.get("state")), n._qoeItem = new e, n._qoeItem.tick(t.JWPLAYER_PLAYLIST_ITEM), n._qoeItem.start(i.get("state")), o(n), i.on("change:state", function(e, t, i) {
							n._qoeItem.end(i), n._qoeItem.start(t)
						})
					}
					n.on("change:mediaModel", i)
				}
				var a = function(e) {
						var t = 0;
						return function(n) {
							var i = n.position;
							i > t && e(), t = i
						}
					};
				return {
					model: r
				}
			}.apply(t, i)) && (e.exports = o)
		}, function(e, t, n) {
			var i, o;
			i = [n(25), n(71), n(19), n(27), n(1), n(2), n(4)], void 0 !== (o = function(e, t, i, o, r, a, s) {
				function l() {
					return {
						LOAD_PROMISE_POLYFILL: {
							method: u,
							depends: []
						},
						LOAD_BASE64_POLYFILL: {
							method: c,
							depends: []
						},
						LOADED_POLYFILLS: {
							method: d,
							depends: ["LOAD_PROMISE_POLYFILL", "LOAD_BASE64_POLYFILL"]
						},
						LOAD_PLUGINS: {
							method: p,
							depends: ["LOADED_POLYFILLS"]
						},
						INIT_PLUGINS: {
							method: h,
							depends: ["LOAD_PLUGINS", "SETUP_VIEW"]
						},
						LOAD_SKIN: {
							method: j,
							depends: ["LOADED_POLYFILLS"]
						},
						LOAD_PLAYLIST: {
							method: g,
							depends: ["LOADED_POLYFILLS"]
						},
						FILTER_PLAYLIST: {
							method: m,
							depends: ["LOAD_PLAYLIST"]
						},
						SETUP_VIEW: {
							method: b,
							depends: ["LOAD_SKIN"]
						},
						SET_ITEM: {
							method: E,
							depends: ["INIT_PLUGINS", "FILTER_PLAYLIST"]
						},
						SEND_READY: {
							method: k,
							depends: ["SETUP_VIEW", "SET_ITEM"]
						}
					}
				}
				function u(e) {
					window.Promise ? e() : n.e(8, function(t) {
						n(76), e()
					})
				}
				function c(e) {
					window.btoa && window.atob ? e() : n.e(9, function(t) {
						n(75), e()
					})
				}
				function d(e) {
					e()
				}
				function p(t, n) {
					window.jwplayerPluginJsonp = e.registerPlugin, A = e.loadPlugins(n.get("id"), n.get("plugins")), A.on(s.COMPLETE, t), A.on(s.ERROR, r.partial(f, t)), A.load()
				}
				function h(e, t, n) {
					delete window.jwplayerPluginJsonp, A.setupPlugins(n, t), e()
				}
				function f(e, t) {
					x(e, "Could not load plugin", t.message)
				}
				function g(e, n) {
					var i = n.get("playlist");
					r.isString(i) ? (_ = new t, _.on(s.JWPLAYER_PLAYLIST_LOADED, function(t) {
						n.set("playlist", t.playlist), n.set("feedid", t.feedid), e()
					}), _.on(s.JWPLAYER_ERROR, r.partial(w, e)), _.load(i)) : e()
				}
				function m(e, t, n, i, o) {
					o(t.get("playlist")) ? e() : w(e)
				}
				function w(e, t) {
					t && t.message ? x(e, "Error loading playlist", t.message) : x(e, "Error loading player", "No playable sources found")
				}
				function v(e, t) {
					if (r.contains(o.SkinsLoadable, e)) return t + "skins/" + e + ".css"
				}
				function y(e) {
					for (var t = document.styleSheets, n = 0, i = t.length; n < i; n++) if (t[n].href === e) return !0;
					return !1
				}
				function j(e, t) {
					var n = t.get("skin"),
						a = t.get("skinUrl");
					if (r.contains(o.SkinsIncluded, n)) return void e();
					if (a || (a = v(n, t.get("base"))), r.isString(a) && !y(a)) {
						t.set("skin-loading", !0);
						var l = new i(a, !0);
						l.addEventListener(s.COMPLETE, function() {
							t.set("skin-loading", !1)
						}), l.addEventListener(s.ERROR, function() {
							t.set("skin", "seven"), t.set("skin-loading", !1)
						}), l.load()
					}
					r.defer(function() {
						e()
					})
				}
				function b(e, t, n, i) {
					i.setup(), e()
				}
				function E(e, t) {
					t.once("itemReady", e), t.setItemIndex(t.get("item"))
				}
				function k(e) {
					e({
						type: "complete"
					})
				}
				function x(e, t, n) {
					e({
						type: "error",
						msg: t,
						reason: n
					})
				}
				var A, _;
				return {
					getQueue: l,
					error: x
				}
			}.apply(t, i)) && (e.exports = o)
		}, function(e, t, n) {
			var i, o;
			i = [n(1), n(2)], void 0 !== (o = function(e, t) {
				function n(e) {
					return "jwplayer." + e
				}
				function i() {
					return e.reduce(this.persistItems, function(e, i) {
						var o = l[n(i)];
						return o && (e[i] = t.serialize(o)), e
					}, {})
				}
				function o(e, t) {
					try {
						l[n(e)] = t
					} catch (e) {
						var i = window.jwplayer;
						i && i.debug && console.error(e)
					}
				}
				function r() {
					e.each(this.persistItems, function(e) {
						l.removeItem(n(e))
					})
				}
				function a() {
					this.persistItems = ["volume", "mute", "captionLabel", "qualityLabel"]
				}
				function s(t) {
					e.each(this.persistItems, function(e) {
						t.on("change:" + e, function(t, n) {
							o(e, n)
						})
					})
				}
				var l = {
					removeItem: t.noop
				};
				try {
					l = window.localStorage
				} catch (e) {}
				return e.extend(a.prototype, {
					getAllItems: i,
					track: s,
					clear: r
				}), a
			}.apply(t, i)) && (e.exports = o)
		}, function(e, t, n) {
			var i, o;
			i = [n(88), n(2)], void 0 !== (o = function(e, t) {
				return n.p = t.loadFrom(), e.selectPlayer
			}.apply(t, i)) && (e.exports = o)
		}, function(e, t, n) {
			var i, o;
			i = [n(8)], void 0 !== (o = function(e) {
				function t(e) {
					e || n()
				}
				function n() {
					throw new Error("Invalid DFXP file")
				}
				var i = e.seconds;
				return function(o) {
					t(o);
					var r = [],
						a = o.getElementsByTagName("p"),
						s = 30,
						l = o.getElementsByTagName("tt");
					if (l && l[0]) {
						var u = parseFloat(l[0].getAttribute("ttp:frameRate"));
						isNaN(u) || (s = u)
					}
					t(a), a.length || (a = o.getElementsByTagName("tt:p"), a.length || (a = o.getElementsByTagName("tts:p")));
					for (var c = 0; c < a.length; c++) {
						for (var d = a[c], p = d.getElementsByTagName("br"), h = 0; h < p.length; h++) {
							var f = p[h];
							f.parentNode.replaceChild(o.createTextNode("\r\n"), f)
						}
						var g = d.innerHTML || d.textContent || d.text || "",
							m = e.trim(g).replace(/>\s+</g, "><").replace(/(<\/?)tts?:/g, "$1").replace(/<br.*?\/>/g, "\r\n");
						if (m) {
							var w = d.getAttribute("begin"),
								v = d.getAttribute("dur"),
								y = d.getAttribute("end"),
								j = {
									begin: i(w, s),
									text: m
								};
							y ? j.end = i(y, s) : v && (j.end = j.begin + i(v, s)), r.push(j)
						}
					}
					return r.length || n(), r
				}
			}.apply(t, i)) && (e.exports = o)
		}, function(e, t, n) {
			var i, o;
			i = [n(24), n(8), n(2)], void 0 !== (o = function(e, t, n) {
				return function(i, o) {
					for (var r = [], a = [], s = t.xmlAttribute, l = "default", u = "label", c = "file", d = 0; d < i.childNodes.length; d++) {
						var p = i.childNodes[d];
						if ("jwplayer" === p.prefix) {
							var h = e.localName(p);
							"source" === h ? (delete o.sources, r.push({
								file: s(p, c),
							default:
								s(p, l),
								label: s(p, u),
								type: s(p, "type")
							})) : "track" === h ? (delete o.tracks, a.push({
								file: s(p, c),
							default:
								s(p, l),
								kind: s(p, "kind"),
								label: s(p, u)
							})) : (o[h] = n.serialize(e.textContent(p)), "file" === h && o.sources && delete o.sources)
						}
						o[c] || (o[c] = o.link)
					}
					if (r.length) for (o.sources = [], d = 0; d < r.length; d++) r[d].file.length > 0 && (r[d][l] = "true" === r[d][l], r[d].label.length || delete r[d].label, o.sources.push(r[d]));
					if (a.length) for (o.tracks = [], d = 0; d < a.length; d++) a[d].file.length > 0 && (a[d][l] = "true" === a[d][l], a[d].kind = a[d].kind.length ? a[d].kind : "captions", a[d].label.length || delete a[d].label, o.tracks.push(a[d]));
					return o
				}
			}.apply(t, i)) && (e.exports = o)
		}, function(e, t, n) {
			var i, o;
			i = [n(24), n(8), n(2)], void 0 !== (o = function(e, t, n) {
				function i(e) {
					for (var t = [], n = 0; n < s(e); n++) {
						var i = e.childNodes[n];
						"jwplayer" === i.prefix && "mediatypes" === r(i).toLowerCase() && t.push(a(i))
					}
					return t
				}
				var o = t.xmlAttribute,
					r = e.localName,
					a = e.textContent,
					s = e.numChildren;
				return function e(t, l) {
					var u, c, d = "tracks",
						p = [];
					for (c = 0; c < s(t); c++) if (u = t.childNodes[c], "media" === u.prefix) {
						if (!r(u)) continue;
						switch (r(u).toLowerCase()) {
						case "content":
							if (o(u, "duration") && (l.duration = n.seconds(o(u, "duration"))), o(u, "url")) {
								l.sources || (l.sources = []);
								var h = {
									file: o(u, "url"),
									type: o(u, "type"),
									width: o(u, "width"),
									label: o(u, "label")
								},
									f = i(u);
								f.length && (h.mediaTypes = f), l.sources.push(h)
							}
							s(u) > 0 && (l = e(u, l));
							break;
						case "title":
							l.title = a(u);
							break;
						case "description":
							l.description = a(u);
							break;
						case "guid":
							l.mediaid = a(u);
							break;
						case "thumbnail":
							l.image || (l.image = o(u, "url"));
							break;
						case "player":
							break;
						case "group":
							e(u, l);
							break;
						case "subtitle":
							var g = {};
							g.file = o(u, "url"), g.kind = "captions", o(u, "lang").length > 0 && (g.label = function(e) {
								var t = {
									zh: "Chinese",
									nl: "Dutch",
									en: "English",
									fr: "French",
									de: "German",
									it: "Italian",
									ja: "Japanese",
									pt: "Portuguese",
									ru: "Russian",
									es: "Spanish"
								};
								return t[e] ? t[e] : e
							}(o(u, "lang"))), p.push(g)
						}
					}
					for (l.hasOwnProperty(d) || (l[d] = []), c = 0; c < p.length; c++) l[d].push(p[c]);
					return l
				}
			}.apply(t, i)) && (e.exports = o)
		}, function(e, t, n) {
			var i, o;
			i = [n(1)], void 0 !== (o = function(e) {
				var t = {
					kind: "captions",
				default:
					!1
				};
				return function(n) {
					if (n && n.file) return e.extend({}, t, n)
				}
			}.apply(t, i)) && (e.exports = o)
		}, function(e, t, n) {
			var i, o;
			i = [n(32), n(2), n(4), n(3), n(1), n(19)], void 0 !== (o = function(e, t, n, i, o, r) {
				function a(e, t, n) {
					return function() {
						var i = e.getContainer().getElementsByClassName("jw-overlays")[0];
						i && (i.appendChild(n), n.left = i.style.left, n.top = i.style.top, t.displayArea = i)
					}
				}
				function s(e) {
					function t() {
						var t = e.displayArea;
						t && e.resize(t.clientWidth, t.clientHeight)
					}
					return function() {
						t(), setTimeout(t, 400)
					}
				}
				return function(l, u) {
					function c() {
						m || (m = !0, g = r.loaderstatus.COMPLETE, f.trigger(n.COMPLETE))
					}
					function d() {
						if (!v && (u && 0 !== o.keys(u).length || c(), !m)) {
							var i = l.getPlugins();
							h = o.after(w, c), o.each(u, function(o, a) {
								var s = e.getPluginName(a),
									l = i[s],
									u = l.getJS(),
									c = l.getTarget(),
									d = l.getStatus();
								d !== r.loaderstatus.LOADING && d !== r.loaderstatus.NEW && (u && !t.versionCheck(c) && f.trigger(n.ERROR, {
									message: "Incompatible player version"
								}), h())
							})
						}
					}
					function p(e) {
						if (!v) {
							var i = "File not found";
							e.url && t.log(i, e.url), this.off(), this.trigger(n.ERROR, {
								message: i
							}), d()
						}
					}
					var h, f = o.extend(this, i),
						g = r.loaderstatus.NEW,
						m = !1,
						w = o.size(u),
						v = !1;
					this.setupPlugins = function(n, i) {
						var r = [],
							u = l.getPlugins(),
							c = i.get("plugins");
						o.each(c, function(i, l) {
							var d = e.getPluginName(l),
								p = u[d],
								h = p.getFlashPath(),
								f = p.getJS(),
								g = p.getURL();
							if (h) {
								var m = o.extend({
									name: d,
									swf: h,
									pluginmode: p.getPluginmode()
								}, i);
								r.push(m)
							}
							t.tryCatch(function() {
								if (f) {
									var e = c[g];
									if (!e) return void t.log("JW Plugin already loaded", d, g);
									var i = document.createElement("div");
									i.id = n.id + "_" + d, i.className = "jw-plugin jw-reset";
									var r = o.extend({}, e),
										l = p.getNewInstance(n, r, i);
									l.addToPlayer = a(n, l, i), l.resizeHandler = s(l), n.addPlugin(d, l, i)
								}
							}) instanceof t.Error && t.log("ERROR: Failed to load " + d + ".")
						}), i.set("flashPlugins", r)
					}, this.load = function() {
						if (t.exists(u) && "object" !== t.typeOf(u)) return void d();
						g = r.loaderstatus.LOADING, o.each(u, function(e, i) {
							if (t.exists(i)) {
								var o = l.addPlugin(i);
								o.on(n.COMPLETE, d), o.on(n.ERROR, p)
							}
						});
						var e = l.getPlugins();
						o.each(e, function(e) {
							e.load()
						}), d()
					}, this.destroy = function() {
						v = !0, this.off()
					}, this.getStatus = function() {
						return g
					}
				}
			}.apply(t, i)) && (e.exports = o)
		}, function(e, t, n) {
			var i, o;
			i = [n(32), n(74)], void 0 !== (o = function(e, t) {
				return function(n) {
					this.addPlugin = function(i) {
						var o = e.getPluginName(i);
						return n[o] || (n[o] = new t(i)), n[o]
					}, this.getPlugins = function() {
						return n
					}
				}
			}.apply(t, i)) && (e.exports = o)
		}, , function(e, t, n) {
			var i, o;
			i = [], void 0 !== (o = function() {
				return {}
			}.apply(t, i)) && (e.exports = o)
		}, function(e, t, n) {
			var i, o;
			i = [n(2), n(1), n(83)], void 0 !== (o = function(e, t, n) {
				function i(t) {
					if ("hls" === t.type) if (!1 !== t.androidhls) {
						var n = e.isAndroidNative;
						if (n(2) || n(3) || n("4.0")) return !1;
						if (e.isAndroid()) return !0
					} else if (e.isAndroid()) return !1;
					return null
				}
				return [{
					name: "youtube",
					supports: function(t) {
						return e.isYouTube(t.file, t.type)
					}
				}, {
					name: "html5",
					supports: function(t) {
						var o = {
							aac: "audio/mp4",
							mp4: "video/mp4",
							f4v: "video/mp4",
							m4v: "video/mp4",
							mov: "video/mp4",
							mp3: "audio/mpeg",
							mpeg: "audio/mpeg",
							ogv: "video/ogg",
							ogg: "video/ogg",
							oga: "video/ogg",
							vorbis: "video/ogg",
							webm: "video/webm",
							f4a: "video/aac",
							m3u8: "application/vnd.apple.mpegurl",
							m3u: "application/vnd.apple.mpegurl",
							hls: "application/vnd.apple.mpegurl"
						},
							r = t.file,
							a = t.type,
							s = i(t);
						if (null !== s) return s;
						if (e.isRtmp(r, a)) return !1;
						if (!o[a]) return !1;
						if (n.canPlayType) {
							return !!n.canPlayType(o[a])
						}
						return !1
					}
				}, {
					name: "flash",
					supports: function(n) {
						var i = {
							flv: "video",
							f4v: "video",
							mov: "video",
							m4a: "video",
							m4v: "video",
							mp4: "video",
							aac: "video",
							f4a: "video",
							mp3: "sound",
							mpeg: "sound",
							smil: "rtmp"
						},
							o = t.keys(i);
						if (!e.isFlashSupported()) return !1;
						var r = n.file,
							a = n.type;
						return !!e.isRtmp(r, a) || t.contains(o, a)
					}
				}]
			}.apply(t, i)) && (e.exports = o)
		}, function(e, t, n) {
			var i, o;
			i = [n(17), n(52), n(184), n(1)], void 0 !== (o = function(e, t, i, o) {
				function r(e) {
					this.config = e || {}, this.providers = this.reorderProviders(this.config.primary)
				}
				r.loaders = {
					html5: function(e) {
						n.e(4, function(t) {
							var i = n(91);
							a(i), e(i)
						})
					},
					flash: function(e) {
						n.e(5, function(t) {
							var i = n(78);
							a(i), e(i)
						})
					},
					youtube: function(e) {
						n.e(6, function(t) {
							var i = n(79);
							a(i), e(i)
						})
					}
				};
				var a = r.registerProvider = function(n) {
						var r = n.getName().name;
						if (!i[r]) {
							if (!o.find(t, o.matches({
								name: r
							}))) {
								if (!o.isFunction(n.supports)) throw {
									message: "Tried to register a provider with an invalid object"
								};
								t.unshift({
									name: r,
									supports: n.supports
								})
							}
							var a = function() {};
							a.prototype = e, n.prototype = new a, i[r] = n
						}
					};
				return o.extend(r.prototype, {
					load: function(e) {
						return Promise.all(o.map(e, function(e) {
							return new Promise(function(t) {
								var n = r.loaders[e.name];
								n ? n(t) : t()
							})
						}))
					},
					reorderProviders: function(e) {
						var n = o.clone(t);
						if ("flash" === e) {
							var i = o.indexOf(n, o.findWhere(n, {
								name: "flash"
							})),
								r = n.splice(i, 1)[0],
								a = o.indexOf(n, o.findWhere(n, {
									name: "html5"
								}));
							n.splice(a, 0, r)
						}
						return n
					},
					providerSupports: function(e, t) {
						return e.supports(t)
					},
					required: function(e, t) {
						var n = this,
							i = this.reorderProviders(t);
						return e = e.slice(), o.compact(o.map(i, function(t) {
							for (var i = !1, o = e.length; o--;) {
								var r = e[o],
									a = n.providerSupports(t, r.sources[0]);
								a && e.splice(o, 1), i = i || a
							}
							if (i) return t
						}))
					},
					choose: function(e) {
						e = o.isObject(e) ? e : {};
						for (var t = this.providers.length, n = 0; n < t; n++) {
							var r = this.providers[n];
							if (this.providerSupports(r, e)) {
								return {
									priority: t - n - 1,
									name: r.name,
									type: e.type,
									providerToCheck: r,
									provider: i[r.name]
								}
							}
						}
						return null
					}
				}), r
			}.apply(t, i)) && (e.exports = o)
		}, , function(e, t, n) {
			var i, o;
			i = [], void 0 !== (o = function() {
				return {
					hasClass: function(e, t) {
						var n = " " + t + " ";
						return 1 === e.nodeType && (" " + e.className + " ").replace(/[\t\r\n\f]/g, " ").indexOf(n) >= 0
					}
				}
			}.apply(t, i)) && (e.exports = o)
		}, function(e, t, n) {
			var i, o;
			i = [n(1), n(3)], void 0 !== (o = function(e, t) {
				return e.extend({
					get: function(e) {
						return this.attributes = this.attributes || {}, this.attributes[e]
					},
					set: function(e, t) {
						if (this.attributes = this.attributes || {}, this.attributes[e] !== t) {
							var n = this.attributes[e];
							this.attributes[e] = t, this.trigger("change:" + e, this, t, n)
						}
					},
					clone: function() {
						return e.clone(this.attributes)
					}
				}, t)
			}.apply(t, i)) && (e.exports = o)
		}, function(e, t, n) {
			var i, o;
			i = [], void 0 !== (o = function() {
				var e = function(e, n, i) {
						n = n || this, i = i || [];
						var o = window.jwplayer;
						if (o && o.debug) return e.apply(n, i);
						try {
							return e.apply(n, i)
						} catch (n) {
							return new t(e.name, n)
						}
					},
					t = function(e, t) {
						this.name = e, this.message = t.message || t.toString(), this.error = t
					};
				return {
					tryCatch: e,
					Error: t
				}
			}.apply(t, i)) && (e.exports = o)
		}, function(e, t, n) {
			var i, o;
			i = [n(2), n(1)], void 0 !== (o = function(e) {
				return function(t, n, i) {
					var o = "jw-breakpoint-",
						r = n,
						a = i;
					o += r >= 1280 ? "7" : r >= 960 ? "6" : r >= 800 ? "5" : r >= 640 ? "4" : r >= 540 ? "3" : r >= 420 ? "2" : r >= 320 ? "1" : "0", e.replaceClass(t, /jw-breakpoint-\d+/, o), e.toggleClass(t, "jw-orientation-portrait", a > r)
				}
			}.apply(t, i)) && (e.exports = o)
		}, function(e, t, n) {
			var i, o;
			i = [n(2), n(28), n(6), n(1), n(16)], void 0 !== (o = function(e, t, i, o, r) {
				var a = t.style,
					s = {
						back: !0,
						fontSize: 14,
						fontFamily: "Arial,sans-serif",
						fontOpacity: 100,
						color: "#FFF",
						backgroundColor: "#000",
						backgroundOpacity: 100,
						edgeStyle: null,
						windowColor: "#FFF",
						windowOpacity: 0,
						preprocessor: o.identity
					};
				return function(l) {
					function u(e, n, i) {
						if (t.css("#" + e + " .jw-text-track-display", n, e), t.css("#" + e + " .jw-text-track-cue", i, e), t.css("#" + e + " .jw-video::-webkit-media-text-track-display", n, e), t.css("#" + e + " .jw-video::cue", i, e), i.backgroundColor) {
							var o = "{background-color: " + i.backgroundColor + " !important;}";
							t.css("#" + e + " .jw-video::-webkit-media-text-track-display-backdrop", o, e)
						}
					}
					function c(e, n, i) {
						var o = t.hexToRgba("#000000", i);
						"dropshadow" === e ? n.textShadow = "0 2px 1px " + o : "raised" === e ? n.textShadow = "0 0 5px " + o + ", 0 1px 5px " + o + ", 0 2px 5px " + o : "depressed" === e ? n.textShadow = "0 -2px 1px " + o : "uniform" === e && (n.textShadow = "-2px 0 1px " + o + ",2px 0 1px " + o + ",0 -2px 1px " + o + ",0 2px 1px " + o + ",-1px 1px 1px " + o + ",1px 1px 1px " + o + ",1px -1px 1px " + o + ",1px 1px 1px " + o)
					}
					function d(e) {
						g = e, this.selectCues(h, g)
					}
					function p() {
						r.renderNatively(l.get("provider").name) || n.e(7, function(e) {
							y = n(77)
						})
					}
					var h, f, g, m, w, v, y, j = {};
					m = document.createElement("div"), m.className = "jw-captions jw-reset", this.show = function() {
						m.className = "jw-captions jw-captions-enabled jw-reset"
					}, this.hide = function() {
						m.className = "jw-captions jw-reset"
					}, this.populate = function(e) {
						return f = [], h = e, e ? void this.selectCues(e, g) : (f = [], void this.renderCues())
					}, this.resize = function() {
						var e = m.clientWidth,
							t = Math.pow(e / 400, .6);
						if (t) {
							var n = j.fontSize * t;
							a(m, {
								fontSize: Math.floor(2 * n) / 2 + "px"
							})
						}
						this.renderCues(!0)
					}, this.renderCues = function(e) {
						e = !! e, y && y.WebVTT.processCues(window, f, m, e)
					}, this.selectCues = function(e, t) {
						var n, i;
						e && e.data && t && !1 !== (i = this.getAlignmentPosition(e, t)) && (n = this.getCurrentCues(e.data, i), this.updateCurrentCues(n), this.renderCues(!0))
					}, this.getCurrentCues = function(e, t) {
						return o.filter(e, function(e) {
							return t >= e.startTime && (!e.endTime || t <= e.endTime)
						})
					}, this.updateCurrentCues = function(e) {
						return e.length ? o.difference(e, f).length && (w.className = "jw-captions-window jw-reset jw-captions-window-active", f = e) : f = [], f
					}, this.getAlignmentPosition = function(e, t) {
						var n = e.source,
							i = t.metadata;
						return n ? !(!i || !o.isNumber(i[n])) && i[n] : e.embedded && t.duration < 0 ? t.position - t.duration : t.position
					}, this.clear = function() {
						e.empty(m)
					}, this.setContainerHeight = function(e) {
						a(m, {
							height: e
						})
					}, this.setup = function(e, n) {
						w = document.createElement("div"), v = document.createElement("span"), w.className = "jw-captions-window jw-reset", v.className = "jw-captions-text jw-reset", j = o.extend({}, s, n);
						var i = j.fontOpacity,
							r = j.windowOpacity,
							d = j.edgeStyle,
							p = j.backgroundColor,
							h = {},
							f = {
								color: t.hexToRgba(j.color, i),
								fontFamily: j.fontFamily,
								fontStyle: j.fontStyle,
								fontWeight: j.fontWeight,
								textDecoration: j.textDecoration
							};
						r && (h.backgroundColor = t.hexToRgba(j.windowColor, r)), c(d, f, i), j.back ? f.backgroundColor = t.hexToRgba(p, j.backgroundOpacity) : null === d && c("uniform", f), a(w, h), a(v, f), u(e, h, f), w.appendChild(v), m.appendChild(w), this.populate(l.get("captionsTrack")), l.set("captions", j)
					}, this.element = function() {
						return m
					}, l.on("change:playlistItem", function() {
						g = null, f = []
					}, this), l.on("change:captionsTrack", function(e, t) {
						this.populate(t)
					}, this), l.mediaController.on("seek", function() {
						f = []
					}, this), l.mediaController.on("time seek", d, this), l.mediaController.on("subtitlesTrackData", function() {
						this.selectCues(h, g)
					}, this), l.on("change:state", function(e, t) {
						switch (t) {
						case i.IDLE:
						case i.ERROR:
						case i.COMPLETE:
							this.hide();
							break;
						default:
							this.show()
						}
					}, this), l.on("itemReady", p, this)
				}
			}.apply(t, i)) && (e.exports = o)
		}, function(e, t, n) {
			var i, o;
			i = [n(9), n(4), n(3), n(1)], void 0 !== (o = function(e, t, n, i) {
				return function(o, r, a) {
					function s(e) {
						if (!o.get("flashBlocked")) return c ? void c(e) : void f.trigger(e.type === t.touchEvents.CLICK ? "click" : "tap")
					}
					function l() {
						return d ? void d() : void f.trigger("doubleClick")
					}
					var u, c, d, p = {
						enableDoubleTap: !0,
						useMove: !0
					};
					i.extend(this, n), u = r, this.element = function() {
						return u
					};
					var h = new e(u, i.extend(p, a));
					h.on("click tap", s), h.on("doubleClick doubleTap", l), h.on("move", function() {
						f.trigger("move")
					}), h.on("over", function() {
						f.trigger("over")
					}), h.on("out", function() {
						f.trigger("out")
					}), this.clickHandler = s;
					var f = this;
					this.setAlternateClickHandlers = function(e, t) {
						c = e, d = t || null
					}, this.revertAlternateClickHandlers = function() {
						c = null, d = null
					}
				}
			}.apply(t, i)) && (e.exports = o)
		}, function(e, t, n) {
			var i, o;
			i = [n(1), n(2), n(42)], void 0 !== (o = function(e, t, n) {
				function i(e, t) {
					this.time = e, this.text = t, this.el = document.createElement("div"), this.el.className = "jw-cue jw-reset"
				}
				return e.extend(i.prototype, {
					align: function(e) {
						if ("%" === this.time.toString().slice(-1)) this.pct = this.time;
						else {
							var t = this.time / e * 100;
							this.pct = t + "%"
						}
						this.el.style.left = this.pct
					}
				}), {
					loadChapters: function(e) {
						t.ajax(e, this.chaptersLoaded.bind(this), this.chaptersFailed, {
							plainText: !0
						})
					},
					chaptersLoaded: function(t) {
						var i = n(t.responseText);
						e.isArray(i) && (e.each(i, this.addCue, this), this.drawCues())
					},
					chaptersFailed: function() {},
					addCue: function(e) {
						this.cues.push(new i(e.begin, e.text))
					},
					drawCues: function() {
						var t = this._model.mediaModel.get("duration");
						if (!t || t <= 0) return void this._model.mediaModel.once("change:duration", this.drawCues, this);
						var n = this;
						e.each(this.cues, function(e) {
							e.align(t), e.el.addEventListener("mouseover", function() {
								n.activeCue = e
							}), e.el.addEventListener("mouseout", function() {
								n.activeCue = null
							}), n.elementRail.appendChild(e.el)
						})
					},
					resetChapters: function() {
						e.each(this.cues, function(e) {
							e.el.parentNode && e.el.parentNode.removeChild(e.el)
						}, this), this.cues = []
					}
				}
			}.apply(t, i)) && (e.exports = o)
		}, function(e, t, n) {
			var i, o;
			i = [n(49), n(2), n(1), n(9), n(141)], void 0 !== (o = function(e, t, n, i, o) {
				return e.extend({
					setup: function(e, r, a) {
						a = a || {}, this.iconUI || (this.iconUI = new i(this.el, {
							useHover: !0,
							directSelect: !0
						}), this.toggleValueListener = this.toggleValue.bind(this), this.toggleOpenStateListener = this.toggleOpenState.bind(this), this.openTooltipListener = this.openTooltip.bind(this), this.closeTooltipListener = this.closeTooltip.bind(this), this.selectListener = this.select.bind(this)), this.reset(), e = n.isArray(e) ? e : [], t.toggleClass(this.el, "jw-hidden", e.length < 2);
						var s = e.length > 2 || 2 === e.length && a && !1 === a.toggle,
							l = !s && 2 === e.length;
						if (t.toggleClass(this.el, "jw-toggle", l || !! a.isToggle), t.toggleClass(this.el, "jw-button-color", !l), this.isActive = s || l, s) {
							t.removeClass(this.el, "jw-off"), this.iconUI.on("tap", this.toggleOpenStateListener).on("over", this.openTooltipListener).on("out", this.closeTooltipListener);
							var u = o(e),
								c = t.createElement(u);
							this.addContent(c), this.contentUI = new i(this.content).on("click tap", this.selectListener)
						} else l && this.iconUI.on("click tap", this.toggleValueListener);
						this.selectItem(r)
					},
					toggleValue: function() {
						this.trigger("toggleValue")
					},
					select: function(e) {
						if (e.target.parentElement === this.content) {
							var i = t.classList(e.target),
								o = n.find(i, function(e) {
									return 0 === e.indexOf("jw-item")
								});
							o && (this.trigger("select", parseInt(o.split("-")[2])), this.closeTooltipListener())
						}
					},
					selectItem: function(e) {
						if (this.content) for (var n = 0; n < this.content.children.length; n++) t.toggleClass(this.content.children[n], "jw-active-option", e === n);
						t.toggleClass(this.el, "jw-off", 0 === e)
					},
					reset: function() {
						t.addClass(this.el, "jw-off"), this.iconUI.off(), this.contentUI && this.contentUI.off().destroy(), this.removeContent()
					}
				})
			}.apply(t, i)) && (e.exports = o)
		}, function(e, t, n) {
			var i, o;
			i = [n(45), n(9), n(1), n(2), n(142)], void 0 !== (o = function(e, t, n, i, o) {
				var r = function(e, t, n) {
						this._model = e, this._api = t, this._nextButton = n, this.nextUpText = e.get("localization").nextUp, this.state = "tooltip"
					};
				return n.extend(r.prototype, {
					setup: function() {
						this.container = document.createElement("div"), this.container.className = "jw-nextup-container jw-reset";
						var e = i.createElement(o());
						this.addContent(e), this.closeButton = this.content.querySelector(".jw-nextup-close"), this.tooltip = this.content.querySelector(".jw-nextup-tooltip"), this.showNextUp = !1, this.streamType = void 0, this._model.on("change:mediaModel", this.onMediaModel, this), this._model.on("change:streamType", this.onStreamType, this), this._model.on("change:nextUp", this.onNextUp, this), this._model.on("change:duration", this.onDuration, this), this._model.on("change:position", this.onElapsed, this), this.onMediaModel(this._model, this._model.get("mediaModel")), new t(this.closeButton, {
							directSelect: !0
						}).on("click tap", this.hide, this), new t(this.tooltip).on("click tap", this.click, this), new t(this._nextButton.element(), {
							useHover: !0,
							directSelect: !0
						}).on("click tap", this.click, this).on("over", this.show, this).on("out", this.hoverOut, this)
					},
					loadThumbnail: function(e) {
						return this.nextUpImage = new Image, this.nextUpImage.onload = function() {
							this.nextUpImage.onload = null
						}.bind(this), this.nextUpImage.src = e, {
							backgroundImage: 'url("' + e + '")'
						}
					},
					click: function() {
						this.state = "tooltip", this._api.next(), this.hide()
					},
					show: function() {
						"opened" === this.state || this.hideToolTip || e.addClass(this.container, "jw-nextup-container-visible")
					},
					hide: function() {
						e.removeClass(this.container, "jw-nextup-container-visible"), e.removeClass(this.container, "jw-nextup-sticky"), "opened" === this.state && (this.state = "closed")
					},
					hoverOut: function() {
						"opened" !== this.state && this.hide()
					},
					showTilEnd: function() {
						"opened" !== this.state && "closed" !== this.state && (e.addClass(this.container, "jw-nextup-sticky"), this.show(), this.state = "opened")
					},
					setNextUpItem: function(t) {
						var n = this;
						setTimeout(function() {
							if (n.hideToolTip = !(t.title || t.image), !n.hideToolTip) {
								if (n.thumbnail = n.content.querySelector(".jw-nextup-thumbnail"), e.toggleClass(n.thumbnail, "jw-nextup-thumbnail-visible", !! t.image), t.image) {
									var o = n.loadThumbnail(t.image);
									i.style(n.thumbnail, o)
								}
								n.header = n.content.querySelector(".jw-nextup-header"), n.header.innerText = n.nextUpText, n.title = n.content.querySelector(".jw-nextup-title");
								var r = t.title;
								n.title.innerText = r ? i.createElement(r).textContent : ""
							}
						}, 500)
					},
					onNextUp: function(e, t) {
						return t ? (this.showNextUp = !0, this._nextButton.toggle(!0), void this.setNextUpItem(t)) : (this._nextButton.toggle(!1), void(this.showNextUp = !1))
					},
					onDuration: function(e, t) {
						if (t) {
							var n = i.seconds(e.get("nextupoffset") || -10);
							n < 0 && (n += t), this.offset = n
						}
					},
					onMediaModel: function(e, t) {
						t.on("change:state", function(e, t) {
							"complete" === t && (this.state = "tooltip", this.hide())
						}, this)
					},
					onElapsed: function(e, t) {
						"VOD" === this.streamType && this.showNextUp && t >= this.offset ? this.showTilEnd() : "opened" !== this.state && "closed" !== this.state || (this.state = "tooltip", this.hide())
					},
					onStreamType: function(e, t) {
						this.streamType = t
					},
					element: function() {
						return this.container
					},
					addContent: function(e) {
						this.content && this.removeContent(), this.content = e, this.container.appendChild(e)
					},
					removeContent: function() {
						this.content && (this.container.removeChild(this.content), this.content = null)
					}
				}), r
			}.apply(t, i)) && (e.exports = o)
		}, function(e, t, n) {
			var i, o;
			i = [n(1), n(2), n(42)], void 0 !== (o = function(e, t, n) {
				function i(e) {
					this.begin = e.begin, this.end = e.end, this.img = e.text
				}
				return {
					loadThumbnails: function(e) {
						e && (this.vttPath = e.split("?")[0].split("/").slice(0, -1).join("/"), this.individualImage = null, t.ajax(e, this.thumbnailsLoaded.bind(this), this.thumbnailsFailed.bind(this), {
							plainText: !0
						}))
					},
					thumbnailsLoaded: function(t) {
						var o = n(t.responseText);
						e.isArray(o) && (e.each(o, function(e) {
							this.thumbnails.push(new i(e))
						}, this), this.drawCues())
					},
					thumbnailsFailed: function() {},
					chooseThumbnail: function(t) {
						var n = e.sortedIndex(this.thumbnails, {
							end: t
						}, e.property("end"));
						n >= this.thumbnails.length && (n = this.thumbnails.length - 1);
						var i = this.thumbnails[n].img;
						return i.indexOf("://") < 0 && (i = this.vttPath ? this.vttPath + "/" + i : i), i
					},
					loadThumbnail: function(t) {
						var n = this.chooseThumbnail(t),
							i = {
								display: "block",
								margin: "0 auto",
								backgroundPosition: "0 0"
							};
						if (n.indexOf("#xywh") > 0) try {
							var o = /(.+)\#xywh=(\d+),(\d+),(\d+),(\d+)/.exec(n);
							n = o[1], i.backgroundPosition = -1 * o[2] + "px " + -1 * o[3] + "px", i.width = o[4], i.height = o[5]
						} catch (e) {
							return
						} else this.individualImage || (this.individualImage = new Image, this.individualImage.onload = e.bind(function() {
							this.individualImage.onload = null, this.timeTip.image({
								width: this.individualImage.width,
								height: this.individualImage.height
							})
						}, this), this.individualImage.src = n);
						return i.backgroundImage = 'url("' + n + '")', i
					},
					showThumbnail: function(e) {
						this.thumbnails.length < 1 || this.timeTip.image(this.loadThumbnail(e))
					},
					resetThumbnails: function() {
						this.timeTip.image({
							backgroundImage: "",
							width: 0,
							height: 0
						}), this.thumbnails = []
					}
				}
			}.apply(t, i)) && (e.exports = o)
		}, function(e, t, n) {
			var i, o;
			i = [n(1), n(2), n(27), n(48), n(49), n(194), n(197)], void 0 !== (o = function(e, t, n, i, o, r, a) {
				var s = o.extend({
					setup: function() {
						this.text = document.createElement("span"), this.text.className = "jw-text jw-reset", this.img = document.createElement("div"), this.img.className = "jw-reset";
						var e = document.createElement("div");
						e.className = "jw-time-tip jw-background-color jw-reset", e.appendChild(this.img), e.appendChild(this.text), t.removeClass(this.el, "jw-hidden"), this.addContent(e)
					},
					image: function(e) {
						t.style(this.img, e)
					},
					update: function(e) {
						this.text.innerHTML = e
					}
				}),
					l = i.extend({
						constructor: function(t, n) {
							this._model = t, this._api = n, this.timeTip = new s("jw-tooltip-time"), this.timeTip.setup(), this.cues = [], this.seekThrottled = e.throttle(this.performSeek, 400), this._model.on("change:playlistItem", this.onPlaylistItem, this).on("change:position", this.onPosition, this).on("change:duration", this.onDuration, this).on("change:buffer", this.onBuffer, this), i.call(this, "jw-slider-time", "horizontal")
						},
						setup: function() {
							i.prototype.setup.apply(this, arguments), this._model.get("playlistItem") && this.onPlaylistItem(this._model, this._model.get("playlistItem")), this.elementRail.appendChild(this.timeTip.element()), this.el.addEventListener("mousemove", this.showTimeTooltip.bind(this), !1), this.el.addEventListener("mouseout", this.hideTimeTooltip.bind(this), !1)
						},
						limit: function(t) {
							if (this.activeCue && e.isNumber(this.activeCue.pct)) return this.activeCue.pct;
							var i = this._model.get("duration");
							if ("DVR" === this._model.get("streamType")) {
								var o = (1 - t / 100) * i,
									r = this._model.get("position");
								return 100 - 100 * Math.min(o, Math.max(n.dvrSeekLimit, r)) / i
							}
							return t
						},
						update: function(e) {
							this.seekTo = e, this.seekThrottled(), i.prototype.update.apply(this, arguments)
						},
						dragStart: function() {
							this._model.set("scrubbing", !0), i.prototype.dragStart.apply(this, arguments)
						},
						dragEnd: function() {
							i.prototype.dragEnd.apply(this, arguments), this._model.set("scrubbing", !1)
						},
						onSeeked: function() {
							this._model.get("scrubbing") && this.performSeek()
						},
						onBuffer: function(e, t) {
							this.updateBuffer(t)
						},
						onPosition: function(e, t) {
							this.updateTime(t, e.get("duration"))
						},
						onDuration: function(e, t) {
							this.updateTime(e.get("position"), t)
						},
						updateTime: function(e, t) {
							var n = 0;
							if (t) {
								var i = this._model.get("streamType");
								"DVR" === i ? n = (t - e) / t * 100 : "VOD" === i && (n = e / t * 100)
							}
							this.render(n)
						},
						onPlaylistItem: function(t, n) {
							this.reset(), t.mediaModel.on("seeked", this.onSeeked, this);
							var i = n.tracks;
							e.each(i, function(e) {
								e && e.kind && "thumbnails" === e.kind.toLowerCase() ? this.loadThumbnails(e.file) : e && e.kind && "chapters" === e.kind.toLowerCase() && this.loadChapters(e.file)
							}, this)
						},
						performSeek: function() {
							var e, t = this.seekTo,
								n = this._model.get("duration"),
								i = this._model.get("streamType");
							0 === n ? this._api.play() : "DVR" === i ? (e = (100 - t) / 100 * n, this._api.seek(e)) : (e = t / 100 * n, this._api.seek(Math.min(e, n - .25)))
						},
						showTimeTooltip: function(e) {
							var i = this._model.get("duration");
							if (0 !== i) {
								var o = t.bounds(this.elementRail),
									r = e.pageX ? e.pageX - o.left : e.x;
								r = t.between(r, 0, o.width);
								var a = r / o.width,
									s = i * a;
								i < 0 && (s = i - s);
								var l;
								if (this.activeCue) l = this.activeCue.text;
								else {
									l = t.timeFormat(s, !0), i < 0 && s > n.dvrSeekLimit && (l = "Live")
								}
								this.timeTip.update(l), this.showThumbnail(s), t.addClass(this.timeTip.el, "jw-open"), this.timeTip.el.style.left = 100 * a + "%"
							}
						},
						hideTimeTooltip: function() {
							t.removeClass(this.timeTip.el, "jw-open")
						},
						reset: function() {
							this.resetChapters(), this.resetThumbnails()
						}
					});
				return e.extend(l.prototype, r, a), l
			}.apply(t, i)) && (e.exports = o)
		}, function(e, t, n) {
			var i, o;
			i = [n(49), n(48), n(9), n(2)], void 0 !== (o = function(e, t, n, i) {
				return e.extend({
					constructor: function(o, r, a) {
						this._model = o, e.call(this, r, a, !0), this.volumeSlider = new t("jw-slider-volume jw-volume-tip", "vertical"), this.addContent(this.volumeSlider.element()), this.volumeSlider.on("update", function(e) {
							this.trigger("update", e)
						}, this), i.removeClass(this.el, "jw-hidden"), new n(this.el, {
							useHover: !0,
							directSelect: !0
						}).on("click", this.toggleValue, this).on("tap", this.toggleOpenState, this).on("over", this.openTooltip, this).on("out", this.closeTooltip, this), this._model.on("change:volume", this.onVolume, this)
					},
					toggleValue: function() {
						this.trigger("toggleValue")
					}
				})
			}.apply(t, i)) && (e.exports = o)
		}, function(e, t, n) {
			var i, o;
			i = [n(2), n(1), n(3), n(27), n(9), n(48), n(198), n(195), n(199)], void 0 !== (o = function(e, t, n, i, o, r, a, s, l) {
				function u(e, t, n) {
					var i = document.createElement("div");
					return i.className = "jw-icon jw-icon-inline jw-button-color jw-reset " + e, i.setAttribute("role", "button"), i.setAttribute("tabindex", "0"), n && i.setAttribute("aria-label", n), i.style.display = "none", t && new o(i).on("click tap", function() {
						t()
					}), {
						element: function() {
							return i
						},
						toggle: function(e) {
							e ? this.show() : this.hide()
						},
						show: function() {
							i.style.display = ""
						},
						hide: function() {
							i.style.display = "none"
						}
					}
				}
				function c(e, t) {
					var n = document.createElement("span");
					return n.className = "jw-text jw-reset " + e, t && n.setAttribute("role", t), n
				}
				function d(e, t) {
					return new s(e, t)
				}
				function p(e, n) {
					var i = document.createElement("div");
					return i.className = "jw-group jw-controlbar-" + e + "-group jw-reset", t.each(n, function(e) {
						e.element && (e = e.element()), i.appendChild(e)
					}), i
				}
				function h(t, n) {
					this._api = t, this._model = n, this._isMobile = e.isMobile(), this._localization = this._model.get("localization"), this.setup()
				}
				return t.extend(h.prototype, n, {
					setup: function() {
						this.build(), this.initialize()
					},
					build: function() {
						var e, n, i, o = new a(this._model, this._api),
							s = this._localization.play,
							h = this._localization.next,
							f = this._localization.volume,
							g = this._localization.rewind;
						this._isMobile || (i = u("jw-icon-volume", this._api.setMute, f), e = new r("jw-slider-volume", "horizontal"), n = new l(this._model, "jw-icon-volume", f)), this.elements = {
							alt: c("jw-text-alt", "status"),
							play: u("jw-icon-playback", this._api.play.bind(this, {
								reason: "interaction"
							}), s),
							rewind: u("jw-icon-rewind", this.rewind.bind(this), g),
							next: u("jw-icon-next", null, h),
							elapsed: c("jw-text-elapsed", "timer"),
							time: o,
							duration: c("jw-text-duration", "timer"),
							hd: d("jw-icon-hd", this._localization.hd),
							cc: d("jw-icon-cc", this._localization.cc),
							audiotracks: d("jw-icon-audio-tracks", this._localization.audioTracks),
							mute: i,
							volume: e,
							volumetooltip: n,
							cast: u("jw-icon-cast jw-off", this._api.castToggle, this._localization.cast),
							fullscreen: u("jw-icon-fullscreen", this._api.setFullscreen, this._localization.fullscreen)
						}, this.layout = {
							left: [this.elements.play, this.elements.rewind, this.elements.elapsed],
							center: [this.elements.time, this.elements.alt],
							right: [this.elements.duration, this.elements.next, this.elements.hd, this.elements.cc, this.elements.audiotracks, this.elements.mute, this.elements.cast, this.elements.volume, this.elements.volumetooltip, this.elements.fullscreen]
						}, this.menus = t.compact([this.elements.hd, this.elements.cc, this.elements.audiotracks, this.elements.volumetooltip]), this.layout.left = t.compact(this.layout.left), this.layout.center = t.compact(this.layout.center), this.layout.right = t.compact(this.layout.right), this.el = document.createElement("div"), this.el.className = "jw-controlbar jw-background-color jw-reset", this.elements.left = p("left", this.layout.left), this.elements.center = p("center", this.layout.center), this.elements.right = p("right", this.layout.right), this.el.appendChild(this.elements.left), this.el.appendChild(this.elements.center), this.el.appendChild(this.elements.right)
					},
					initialize: function() {
						this.elements.play.show(), this.elements.fullscreen.show(), this.elements.mute && this.elements.mute.show(), this.onVolume(this._model, this._model.get("volume")), this.onPlaylistItem(), this.onMediaModel(this._model, this._model.get("mediaModel")), this.onCastAvailable(this._model, this._model.get("castAvailable")), this.onCastActive(this._model, this._model.get("castActive")), this.onCaptionsList(this._model, this._model.get("captionsList")), this._model.on("change:volume", this.onVolume, this), this._model.on("change:mute", this.onMute, this), this._model.on("change:playlistItem", this.onPlaylistItem, this), this._model.on("change:mediaModel", this.onMediaModel, this), this._model.on("change:castAvailable", this.onCastAvailable, this), this._model.on("change:castActive", this.onCastActive, this), this._model.on("change:duration", this.onDuration, this), this._model.on("change:position", this.onElapsed, this), this._model.on("change:fullscreen", this.onFullscreen, this), this._model.on("change:captionsList", this.onCaptionsList, this), this._model.on("change:captionsIndex", this.onCaptionsIndex, this), this._model.on("change:streamType", this.onStreamTypeChange, this), this.elements.volume && this.elements.volume.on("update", function(e) {
							var t = e.percentage;
							this._api.setVolume(t)
						}, this), this.elements.volumetooltip && (this.elements.volumetooltip.on("update", function(e) {
							var t = e.percentage;
							this._api.setVolume(t)
						}, this), this.elements.volumetooltip.on("toggleValue", function() {
							this._api.setMute()
						}, this)), this.elements.hd.on("select", function(e) {
							this._model.getVideo().setCurrentQuality(e)
						}, this), this.elements.hd.on("toggleValue", function() {
							this._model.getVideo().setCurrentQuality(0 === this._model.getVideo().getCurrentQuality() ? 1 : 0)
						}, this), this.elements.cc.on("select", function(e) {
							this._api.setCurrentCaptions(e)
						}, this), this.elements.cc.on("toggleValue", function() {
							var e = this._model.get("captionsIndex");
							this._api.setCurrentCaptions(e ? 0 : 1)
						}, this), this.elements.audiotracks.on("select", function(e) {
							this._model.getVideo().setCurrentAudioTrack(e)
						}, this), new o(this.elements.duration).on("click tap", function() {
							if ("DVR" === this._model.get("streamType")) {
								var e = this._model.get("position");
								this._api.seek(Math.max(i.dvrSeekLimit, e))
							}
						}, this), new o(this.el).on("click tap drag", function() {
							this.trigger("userAction")
						}, this), t.each(this.menus, function(e) {
							e.on("open-tooltip", this.closeMenus, this)
						}, this)
					},
					onCaptionsList: function(e, t) {
						var n = e.get("captionsIndex");
						this.elements.cc.setup(t, n, {
							isToggle: !0
						})
					},
					onCaptionsIndex: function(e, t) {
						this.elements.cc.selectItem(t)
					},
					onPlaylistItem: function() {
						this.elements.time.updateBuffer(0), this.elements.time.render(0), this.elements.duration.innerHTML = "00:00", this.elements.elapsed.innerHTML = "00:00", this.elements.audiotracks.setup()
					},
					onMediaModel: function(e, n) {
						n.on("change:levels", function(e, t) {
							this.elements.hd.setup(t, e.get("currentLevel"))
						}, this), n.on("change:currentLevel", function(e, t) {
							this.elements.hd.selectItem(t)
						}, this), n.on("change:audioTracks", function(e, n) {
							var i = t.map(n, function(e) {
								return {
									label: e.name
								}
							});
							this.elements.audiotracks.setup(i, e.get("currentAudioTrack"), {
								toggle: !1
							})
						}, this), n.on("change:currentAudioTrack", function(e, t) {
							this.elements.audiotracks.selectItem(t)
						}, this)
					},
					onVolume: function(e, t) {
						this.renderVolume(e.get("mute"), t)
					},
					onMute: function(e, t) {
						this.renderVolume(t, e.get("volume"))
					},
					renderVolume: function(t, n) {
						this.elements.mute && e.toggleClass(this.elements.mute.element(), "jw-off", t), this.elements.volume && this.elements.volume.render(t ? 0 : n), this.elements.volumetooltip && (this.elements.volumetooltip.volumeSlider.render(t ? 0 : n), e.toggleClass(this.elements.volumetooltip.element(), "jw-off", t))
					},
					onCastAvailable: function(e, t) {
						this.elements.cast.toggle(t)
					},
					onCastActive: function(t, n) {
						e.toggleClass(this.elements.cast.element(), "jw-off", !n)
					},
					onElapsed: function(t, n) {
						var i, o = t.get("duration");
						i = "DVR" === t.get("streamType") ? "-" + e.timeFormat(-o) : e.timeFormat(n), this.elements.elapsed.innerHTML = i
					},
					onDuration: function(t, n) {
						var i;
						i = "DVR" === t.get("streamType") ? "Live" : e.timeFormat(n), this.elements.duration.innerHTML = i
					},
					onFullscreen: function(t, n) {
						e.toggleClass(this.elements.fullscreen.element(), "jw-off", n)
					},
					element: function() {
						return this.el
					},
					setAltText: function(e) {
						this.elements.alt.innerHTML = e
					},
					addCues: function(e) {
						this.elements.time && (t.each(e, function(e) {
							this.elements.time.addCue(e)
						}, this), this.elements.time.drawCues())
					},
					closeMenus: function(e) {
						t.each(this.menus, function(t) {
							e && e.target === t.el || t.closeTooltip(e)
						})
					},
					hideComponents: function() {
						this.closeMenus()
					},
					rewind: function() {
						var e = this._model.get("position"),
							t = this._model.get("duration"),
							n = e - 10,
							i = 0;
						"DVR" === this._model.get("streamType") && (i = t), this._api.seek(Math.max(n, i))
					},
					onStreamTypeChange: function(e) {
						this.elements.rewind.toggle("LIVE" !== e.get("streamType"))
					}
				}), h
			}.apply(t, i)) && (e.exports = o)
		}, function(e, t, n) {
			var i, o;
			i = [n(2), n(3), n(9), n(137), n(1)], void 0 !== (o = function(e, t, n, i, o) {
				var r = function(r) {
						o.extend(this, t), this.model = r, this.el = e.createElement(i({
							ariaLabel: this.model.get("localization").playback
						}));
						var a = this;
						this.iconUI = new n(this.el).on("click tap", function(e) {
							a.trigger(e.type)
						}), this.model.on("change:state", function(e, t) {
							var n = a.el.getElementsByClassName("jw-icon-display");
							if (n.length) {
								var i = a.model.get("localization"),
									o = i.playback;
								switch (t) {
								case "buffering":
									o = i.buffer;
									break;
								case "playing":
									o = i.pause;
									break;
								case "complete":
									o = i.replay;
									break;
								case "error":
									o = ""
								}
								"" === o ? n[0].removeAttribute("aria-label") : n[0].setAttribute("aria-label", o)
							}
						})
					};
				return o.extend(r.prototype, {
					element: function() {
						return this.el
					}
				}), r
			}.apply(t, i)) && (e.exports = o)
		}, function(e, t, n) {
			var i, o;
			i = [n(138), n(2), n(1), n(9)], void 0 !== (o = function(e, t, n, i) {
				var o = function(e) {
						this.model = e, this.setup(), this.model.on("change:dock", this.render, this)
					};
				return n.extend(o.prototype, {
					setup: function() {
						var n = this.model.get("dock"),
							o = this.click.bind(this),
							r = e(n);
						this.el = t.createElement(r), new i(this.el).on("click tap", o)
					},
					getDockButton: function(e) {
						return t.hasClass(e.target, "jw-dock-button") ? e.target : t.hasClass(e.target, "jw-dock-text") ? e.target.parentElement.parentElement : e.target.parentElement
					},
					click: function(e) {
						var t = this.getDockButton(e),
							i = t.getAttribute("button"),
							o = this.model.get("dock"),
							r = n.findWhere(o, {
								id: i
							});
						r && r.callback && r.callback(e)
					},
					render: function() {
						var n = this.model.get("dock"),
							i = e(n),
							o = t.createElement(i);
						this.el.innerHTML = o.innerHTML
					},
					element: function() {
						return this.el
					}
				}), o
			}.apply(t, i)) && (e.exports = o)
		}, function(e, t, n) {
			var i, o;
			i = [n(139)], void 0 !== (o = function(e) {
				function t(t, n, i, o) {
					return e({
						id: t,
						skin: n,
						title: i,
						body: o
					})
				}
				return t
			}.apply(t, i)) && (e.exports = o)
		}, function(e, t, n) {
			var i, o;
			i = [n(9), n(2), n(4), n(1), n(3), n(140)], void 0 !== (o = function(e, t, n, i, o, r) {
				var a = t.style,
					s = {
						linktarget: "_blank",
						margin: 8,
						hide: !1,
						position: "top-right"
					};
				return function(l) {
					var u, c, d = new Image,
						p = i.extend({}, l.get("logo"));
					return i.extend(this, o), this.setup = function(o) {
						if (c = i.extend({}, s, p), c.hide = "true" === c.hide.toString(), u = t.createElement(r()), c.file) {
							c.hide && t.addClass(u, "jw-hide"), t.addClass(u, "jw-logo-" + (c.position || s.position)), "top-right" === c.position && (l.on("change:dock", this.topRight, this), l.on("change:controls", this.topRight, this), this.topRight(l)), l.set("logo", c), d.onload = function() {
								var e = {
									backgroundImage: 'url("' + this.src + '")',
									width: this.width,
									height: this.height
								};
								if (c.margin !== s.margin) {
									var t = /(\w+)-(\w+)/.exec(c.position);
									3 === t.length && (e["margin-" + t[1]] = c.margin, e["margin-" + t[2]] = c.margin)
								}
								a(u, e), l.set("logoWidth", e.width)
							}, d.src = c.file;
							new e(u).on("click tap", function(e) {
								t.exists(e) && e.stopPropagation && e.stopPropagation(), this.trigger(n.JWPLAYER_LOGO_CLICK, {
									link: c.link,
									linktarget: c.linktarget
								})
							}, this), o.appendChild(u)
						}
					}, this.topRight = function(e) {
						var t = e.get("controls"),
							n = e.get("dock"),
							i = t && (n && n.length || e.get("sharing") || e.get("related"));
						a(u, {
							top: i ? "3.5em" : 0
						})
					}, this.element = function() {
						return u
					}, this.position = function() {
						return c.position
					}, this.destroy = function() {
						d.onload = null
					}, this
				}
			}.apply(t, i)) && (e.exports = o)
		}, function(e, t, n) {
			var i, o;
			i = [n(1), n(2)], void 0 !== (o = function(e, t) {
				function n(e, t) {
					t.off("change:mediaType", null, this), t.on("change:mediaType", function(t, n) {
						"audio" === n && this.setImage(e.get("playlistItem").image)
					}, this)
				}
				function i(e, n) {
					return e.get("autostart") && !t.isMobile() || e.get("item") > 0 ? (this.setImage(null), e.off("change:state", null, this), void e.on("change:state", function(e, t) {
						"complete" !== t && "idle" !== t && "error" !== t || (this.setImage(n.image), this.resize(null, null, e.get("stretching")))
					}, this)) : void this.setImage(n.image)
				}
				var o = function(e) {
						this.model = e, e.on("change:playlistItem", i, this), e.on("change:mediaModel", n, this)
					};
				return e.extend(o.prototype, {
					setup: function(e) {
						this.el = e;
						var t = this.model.get("playlistItem");
						t && this.setImage(t.image)
					},
					setImage: function(n) {
						var i = this.image;
						i && (i.onload = null, this.image = null), this.model.off("change:state", null, this);
						var o = "";
						e.isString(n) && (o = 'url("' + n + '")', i = this.image = new Image, i.src = n), t.style(this.el, {
							backgroundImage: o
						})
					},
					resize: function(e, n, i) {
						if ("uniform" === i) {
							if (e && (this.playerAspectRatio = e / n), !this.playerAspectRatio) return;
							var o = this.image,
								r = null;
							if (o) {
								if (0 === o.width) {
									var a = this;
									return void(o.onload = function() {
										a.resize(e, n, i)
									})
								}
								var s = o.width / o.height;
								Math.abs(this.playerAspectRatio - s) < .09 && (r = "cover")
							}
							t.style(this.el, {
								backgroundSize: r
							})
						}
					},
					element: function() {
						return this.el
					}
				}), o
			}.apply(t, i)) && (e.exports = o)
		}, function(e, t, n) {
			var i, o;
			i = [n(2), n(144), n(1), n(9), n(29)], void 0 !== (o = function(e, t, n, i, o) {
				var r = function() {};
				return n.extend(r.prototype, {
					buildArray: function() {
						var t = o.split("+"),
							n = t[0],
							i = {
								items: [{
									title: "Powered by JW Player " + n,
									featured: !0,
									showLogo: !0,
									link: "https://jwplayer.com/learn-more"
								}]
							},
							r = n.indexOf("-") > 0,
							a = t[1];
						if (r && a) {
							var s = a.split(".");
							i.items.push({
								title: "build: (" + s[0] + "." + s[1] + ")",
								link: "#"
							})
						}
						var l = this.model.get("provider");
						if (l && l.name.indexOf("flash") >= 0) {
							var u = "Flash Version " + e.flashVersion();
							i.items.push({
								title: u,
								link: "http://www.adobe.com/software/flash/about/"
							})
						}
						return i
					},
					buildMenu: function() {
						var n = this.buildArray();
						return e.createElement(t(n))
					},
					updateHtml: function() {
						this.el.innerHTML = this.buildMenu().innerHTML
					},
					rightClick: function(e) {
						return this.lazySetup(), !this.mouseOverContext && (this.hideMenu(), this.showMenu(e), !1)
					},
					getOffset: function(e) {
						for (var t = e.target, n = e.offsetX || e.layerX, i = e.offsetY || e.layerY; t !== this.playerElement;) n += t.offsetLeft, i += t.offsetTop, t = t.parentNode;
						return {
							x: n,
							y: i
						}
					},
					showMenu: function(t) {
						var n = this.getOffset(t);
						return this.el.style.left = n.x + "px", this.el.style.top = n.y + "px", e.addClass(this.playerElement, "jw-flag-rightclick-open"), e.addClass(this.el, "jw-open"), clearTimeout(this._menuTimeout), this._menuTimeout = setTimeout(this.hideMenu.bind(this), 3e3), !1
					},
					hideMenu: function() {
						return this.elementUI.off("out", this.hideMenu, this), this.mouseOverContext ? void this.elementUI.on("out", this.hideMenu, this) : (e.removeClass(this.playerElement, "jw-flag-rightclick-open"), void e.removeClass(this.el, "jw-open"))
					},
					lazySetup: function() {
						this.el || (this.el = this.buildMenu(), this.layer.appendChild(this.el), this.hideMenuHandler = this.hideMenu.bind(this), this.addOffListener(this.playerElement), this.addOffListener(document), this.model.on("change:provider", this.updateHtml, this), this.elementUI = new i(this.el, {
							useHover: !0
						}).on("over", function() {
							this.mouseOverContext = !0
						}, this).on("out", function() {
							this.mouseOverContext = !1
						}, this))
					},
					setup: function(e, t, n) {
						this.playerElement = t, this.model = e, this.mouseOverContext = !1, this.layer = n, t.oncontextmenu = this.rightClick.bind(this)
					},
					addOffListener: function(e) {
						e.addEventListener("mousedown", this.hideMenuHandler), e.addEventListener("touchstart", this.hideMenuHandler), e.addEventListener("pointerdown", this.hideMenuHandler)
					},
					removeOffListener: function(e) {
						e.removeEventListener("mousedown", this.hideMenuHandler), e.removeEventListener("touchstart", this.hideMenuHandler), e.removeEventListener("pointerdown", this.hideMenuHandler)
					},
					destroy: function() {
						clearTimeout(this._menuTimeout), this.el && (this.hideMenu(), this.elementUI.off(), this.removeOffListener(this.playerElement), this.removeOffListener(document), this.hideMenuHandler = null, this.el = null), this.playerElement && (this.playerElement.oncontextmenu = null, this.playerElement = null), this.model && (this.model.off("change:provider", this.updateHtml), this.model = null)
					}
				}), r
			}.apply(t, i)) && (e.exports = o)
		}, function(e, t, n) {
			var i, o;
			i = [n(1), n(2)], void 0 !== (o = function(e, t) {
				var n = function(e) {
						this.model = e, this.model.on("change:playlistItem", this.playlistItem, this)
					};
				return e.extend(n.prototype, {
					hide: function() {
						this.el.style.display = "none"
					},
					show: function() {
						this.el.style.display = ""
					},
					setup: function(e) {
						this.el = e;
						var t = this.el.getElementsByTagName("div");
						this.title = t[0], this.description = t[1], this.model.get("playlistItem") && this.playlistItem(this.model, this.model.get("playlistItem")), this.model.on("change:logoWidth", this.update, this), this.model.on("change:dock", this.update, this)
					},
					update: function(e) {
						var n = {
							paddingLeft: 0,
							paddingRight: 0
						},
							i = e.get("controls"),
							o = e.get("dock"),
							r = e.get("logo");
						if (r) {
							var a = 1 * ("" + r.margin).replace("px", ""),
								s = e.get("logoWidth") + (isNaN(a) ? 0 : a);
							"top-left" === r.position ? n.paddingLeft = s : "top-right" === r.position && (n.paddingRight = s)
						}
						if (i && o && o.length) {
							var l = 56 * o.length;
							n.paddingRight = Math.max(n.paddingRight, l)
						}
						t.style(this.el, n)
					},
					playlistItem: function(e, t) {
						if (e.get("displaytitle") || e.get("displaydescription")) {
							var n = "",
								i = "";
							t.title && e.get("displaytitle") && (n = t.title), t.description && e.get("displaydescription") && (i = t.description), this.updateText(n, i)
						} else this.hide()
					},
					updateText: function(e, t) {
						this.title.innerHTML = e, this.description.innerHTML = t, this.title.firstChild || this.description.firstChild ? this.show() : this.hide()
					},
					element: function() {
						return this.el
					}
				}), n
			}.apply(t, i)) && (e.exports = o)
		}, function(e, t, n) {
			var i, o;
			i = [n(2), n(4), n(3), n(27), n(6), n(192), n(193), n(201), n(202), n(204), n(200), n(205), n(222), n(207), n(196), n(1), n(143), n(191)], void 0 !== (o = function(e, t, i, o, r, a, s, l, u, c, d, p, h, f, g, m, w, v) {
				var y = e.style,
					j = e.bounds,
					b = e.isMobile(),
					E = ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"];
				return function(k, x) {
					function A(t) {
						var n = 0,
							i = x.get("duration"),
							r = x.get("position");
						"DVR" === x.get("streamType") && (n = i, i = Math.max(r, o.dvrSeekLimit));
						var a = e.between(r + t, n, i);
						k.seek(a)
					}
					function _(t) {
						var n = e.between(x.get("volume") + t, 0, 100);
						k.setVolume(n)
					}
					function L(e) {
						return !e.ctrlKey && !e.metaKey && !! x.get("controls")
					}
					function C(e) {
						if (!L(e)) return !0;
						switch (Ye || ie(), e.keyCode) {
						case 27:
							k.setFullscreen(!1);
							break;
						case 13:
						case 32:
							k.play({
								reason: "interaction"
							});
							break;
						case 37:
							Ye || A(-5);
							break;
						case 39:
							Ye || A(5);
							break;
						case 38:
							_(10);
							break;
						case 40:
							_(-10);
							break;
						case 67:
							var t = k.getCaptionsList(),
								n = t.length;
							if (n) {
								var i = (k.getCurrentCaptions() + 1) % n;
								k.setCurrentCaptions(i)
							}
							break;
						case 77:
							k.setMute();
							break;
						case 70:
							k.setFullscreen();
							break;
						default:
							if (e.keyCode >= 48 && e.keyCode <= 59) {
								var o = e.keyCode - 48,
									r = o / 10 * x.get("duration");
								k.seek(r)
							}
						}
						return /13|32|37|38|39|40/.test(e.keyCode) ? (e.preventDefault(), !1) : void 0
					}
					function P() {
						He = !1, e.removeClass(ge, "jw-no-focus")
					}
					function T(e) {
						e.target && e.target.blur && e.target.blur()
					}
					function R() {
						He = !0, e.addClass(ge, "jw-no-focus")
					}
					function I() {
						He || P(), Ye || ie()
					}
					function M() {
						var e = j(ge),
							n = Math.round(e.width),
							i = Math.round(e.height);
						Ve(Je), n && i && (n !== ve || i !== ye) && (ve = n, ye = i, clearTimeout(Fe), Fe = setTimeout($, 50), x.set("containerWidth", n), x.set("containerHeight", i), v(ge, n, i), Ge.trigger(t.JWPLAYER_RESIZE, {
							width: n,
							height: i
						}))
					}
					function S() {
						document.body.contains(ge) && (Ve(Je), Je = Be(M))
					}
					function O(t, n, i) {
						var o = {
							color: t,
							borderColor: t,
							stroke: t
						},
							r = {
								color: n,
								borderColor: n,
								stroke: n
							};
						e.css("#" + i + " .jw-color-active", o, i), e.css("#" + i + " .jw-color-active-hover:hover", o, i), e.css("#" + i + " .jw-color-inactive", r, i), e.css("#" + i + " .jw-color-inactive-hover:hover", r, i)
					}
					function D(t, n) {
						n = n || !1, e.toggleClass(ge, "jw-flag-casting", n)
					}
					function N(t, n) {
						e.toggleClass(ge, "jw-flag-cast-available", n), e.toggleClass(me, "jw-flag-cast-available", n)
					}
					function Y(t, n) {
						e.replaceClass(ge, /jw-stretch-\S+/, "jw-stretch-" + n)
					}
					function W(e) {
						e && !b && (e.element().addEventListener("mousemove", B, !1), e.element().addEventListener("mouseout", V, !1))
					}
					function F() {
						x.get("state") !== r.IDLE && x.get("state") !== r.COMPLETE && x.get("state") !== r.PAUSED || !x.get("controls") || k.play({
							reason: "interaction"
						}), We ? ne() : ie()
					}
					function J(e) {
						e.link ? (k.pause(!0), k.setFullscreen(!1), window.open(e.link, e.linktarget)) : x.get("controls") && k.play({
							reason: "interaction"
						})
					}
					function B() {
						clearTimeout(Oe)
					}
					function V() {
						ie()
					}
					function z(e) {
						Ge.trigger(e.type, e)
					}
					function U(t, n) {
						n ? (Re && Re.destroy(), e.addClass(ge, "jw-flag-flash-blocked")) : (Re && Re.setup(x, ge, ge), e.removeClass(ge, "jw-flag-flash-blocked"))
					}
					function H() {
						x.get("controls") && k.setFullscreen()
					}
					function G() {
						ge.getElementsByClassName("jw-overlays")[0].addEventListener("mousemove", ie), ke = new s(x, we, {
							useHover: !0
						}), ke.on("click", function() {
							z({
								type: t.JWPLAYER_DISPLAY_CLICK
							}), x.get("controls") && k.play({
								reason: "interaction"
							})
						}), ke.on("tap", function() {
							z({
								type: t.JWPLAYER_DISPLAY_CLICK
							}), F()
						}), ke.on("doubleClick", H), ke.on("move", ie), ke.on("over", ie);
						var n = new l(x);
						n.on("click", function() {
							z({
								type: t.JWPLAYER_DISPLAY_CLICK
							}), k.play({
								reason: "interaction"
							})
						}), n.on("tap", function() {
							z({
								type: t.JWPLAYER_DISPLAY_CLICK
							}), F()
						}), e.isChrome() && !e.isMobile() && n.el.addEventListener("mousedown", function() {
							var e = x.getVideo();
							if (e && 0 === e.getName().name.indexOf("flash")) {
								var t = function e() {
										document.removeEventListener("mouseup", e), n.el.style.pointerEvents = "auto"
									};
								this.style.pointerEvents = "none", document.addEventListener("mouseup", t)
							}
						}), me.appendChild(n.element()), Ae = new u(x), _e = new c(x), _e.on(t.JWPLAYER_LOGO_CLICK, J);
						var i = document.createElement("div");
						i.className = "jw-controls-right jw-reset", _e.setup(i), i.appendChild(Ae.element()), me.appendChild(i), Pe = new a(x), Pe.setup(ge.id, x.get("captions")), me.parentNode.insertBefore(Pe.element(), Le.element());
						var o = x.get("height");
						b && ("string" == typeof o || o >= 1.5 * Ne) ? e.addClass(ge, "jw-flag-touch") : (Re = new h, Re.setup(x, ge, ge)), be = new d(k, x), be.on(t.JWPLAYER_USER_ACTION, ie), x.on("change:scrubbing", he), Ce = new g(x, k, be.elements.next), Ce.setup(), me.appendChild(Ce.element()), me.appendChild(be.element()), ge.addEventListener("focus", I), ge.addEventListener("blur", P), ge.addEventListener("keydown", C), ge.onmousedown = R, ge.onmouseup = T
					}
					function K(t, n, i) {
						var o, r = ge.className;
						i = !! i, i && (r = r.replace(/\s*aspectMode/, ""), ge.className !== r && (ge.className = r), y(ge, {
							display: "block"
						}, i)), e.exists(t) && e.exists(n) && (x.set("width", t), x.set("height", n)), o = {
							width: t
						}, e.hasClass(ge, "jw-flag-aspect-mode") || (o.height = n), x.get("aspectratio") && fe(), y(ge, o, !0), q(n), $(t, n)
					}
					function q(t) {
						if (Te = X(t), be && !Te) {
							var n = Ye ? je : x;
							de(n, n.get("state"))
						}
						e.toggleClass(ge, "jw-flag-audio-player", Te)
					}
					function X(e) {
						return !x.get("aspectratio") && (!(m.isString(e) && e.indexOf("%") > -1) && Q(m.isNumber(e) ? e : x.get("containerHeight")))
					}
					function Q(e) {
						return e && e <= Ne * (b ? 1.75 : 1)
					}
					function $(t, n) {
						if (!t || isNaN(Number(t))) {
							if (!we) return;
							t = we.clientWidth
						}
						if (!n || isNaN(Number(n))) {
							if (!we) return;
							n = we.clientHeight
						}
						Ee && Ee.resize(t, n, x.get("stretching")), e.isMSIE(9) && document.all && !window.atob && (t = n = "100%");
						var i = x.getVideo();
						if (i) {
							i.resize(t, n, x.get("stretching")) && (clearTimeout(Fe), Fe = setTimeout($, 250)), x.get("aspectratio") && fe(), Pe.resize()
						}
					}
					function Z() {
						if (Ue) {
							var e = document.fullscreenElement || document.webkitCurrentFullScreenElement || document.mozFullScreenElement || document.msFullscreenElement;
							return !(!e || e.id !== x.get("id"))
						}
						return Ye ? je.getVideo().getFullScreen() : x.getVideo().getFullScreen()
					}
					function ee(e) {
						var t = x.get("fullscreen"),
							n = void 0 !== e.jwstate ? e.jwstate : Z();
						t !== n && x.set("fullscreen", n), clearTimeout(Fe), Fe = setTimeout($, 200)
					}
					function te(t, n) {
						n ? (e.addClass(t, "jw-flag-fullscreen"), y(document.body, {
							"overflow-y": "hidden"
						}), ie()) : (e.removeClass(t, "jw-flag-fullscreen"), y(document.body, {
							"overflow-y": ""
						})), $()
					}
					function ne() {
						We = !1, clearTimeout(Oe), be.hideComponents(), e.addClass(ge, "jw-flag-user-inactive"), Pe.renderCues(!0)
					}
					function ie() {
						We || (e.removeClass(ge, "jw-flag-user-inactive"), Pe.renderCues(!0)), We = !0, clearTimeout(Oe), Oe = setTimeout(ne, De)
					}
					function oe() {
						k.setFullscreen(!1)
					}
					function re() {
						xe && xe.setState(x.get("state")), ae(x, x.mediaModel.get("mediaType")), x.mediaModel.on("change:mediaType", ae, this)
					}
					function ae(t, n) {
						var i = "audio" === n,
							o = x.getVideo(),
							r = o && 0 === o.getName().name.indexOf("flash");
						e.toggleClass(ge, "jw-flag-media-audio", i), i && !r ? ge.insertBefore(Ee.el, we) : ge.insertBefore(Ee.el, Pe.element())
					}
					function se(t, n) {
						var i = t.get("minDvrWindow"),
							o = e.streamType(n, i),
							r = "LIVE" === o;
						t.set("streamType", o), e.toggleClass(ge, "jw-flag-live", r), Ge.setAltText(r ? t.get("localization").liveBroadcast : "")
					}
					function le(e, t) {
						return t ? void(t.name ? Le.updateText(t.name, t.message) : Le.updateText(t.message, "")) : void Le.playlistItem(e, e.get("playlistItem"))
					}
					function ue() {
						var e = x.getVideo();
						return !!e && e.isCaster
					}
					function ce() {
						e.replaceClass(ge, /jw-state-\S+/, "jw-state-" + Ie)
					}
					function de(e, t) {
						Ie = t, clearTimeout(ze), t === r.PLAYING ? pe(e, t) : ze = setTimeout(function() {
							pe(e, t)
						}, 33)
					}
					function pe(t, n) {
						if (e.toggleClass(ge, "jw-flag-dragging", t.get("scrubbing")), ce(), ue()) return void e.addClass(we, "jw-media-show");
						switch (n) {
						case r.PLAYING:
							$();
							break;
						case r.PAUSED:
							ie()
						}
					}
					function he(e) {
						de(e, e.get("state"))
					}
					function fe() {
						var e = ge.getElementsByClassName("jw-aspect")[0];
						Pe.setContainerHeight(e.offsetHeight)
					}
					var ge, me, we, ve, ye, je, be, Ee, ke, xe, Ae, _e, Le, Ce, Pe, Te, Re, Ie, Me, Se, Oe = -1,
						De = b ? 4e3 : 2e3,
						Ne = 40,
						Ye = !1,
						We = !1,
						Fe = -1,
						Je = -1,
						Be = window.requestAnimationFrame ||
					function(e) {
						return window.setTimeout(e, 17)
					}, Ve = window.cancelAnimationFrame || window.clearTimeout, ze = -1, Ue = !1, He = !1, Ge = m.extend(this, i);
					window.webpackJsonpjwplayer && n(211), this.model = x, this.api = k, ge = e.createElement(w({
						id: x.get("id")
					})), e.isIE() && e.addClass(ge, "jw-ie");
					var Ke = x.get("width"),
						qe = x.get("height");
					y(ge, {
						width: Ke.toString().indexOf("%") > 0 ? Ke : Ke + "px",
						height: qe.toString().indexOf("%") > 0 ? qe : qe + "px"
					}), Me = ge.requestFullscreen || ge.webkitRequestFullscreen || ge.webkitRequestFullScreen || ge.mozRequestFullScreen || ge.msRequestFullscreen, Se = document.exitFullscreen || document.webkitExitFullscreen || document.webkitCancelFullScreen || document.mozCancelFullScreen || document.msExitFullscreen, Ue = Me && Se, this.onChangeSkin = function(t, n) {
						e.replaceClass(ge, /jw-skin-\S+/, n ? "jw-skin-" + n : "")
					}, this.handleColorOverrides = function() {
						function t(t, i, o) {
							if (o) {
								t = e.prefix(t, "#" + n + " ");
								var r = {};
								r[i] = o, e.css(t.join(", "), r, n)
							}
						}
						var n = x.get("id"),
							i = x.get("skinColorActive"),
							o = x.get("skinColorInactive"),
							r = x.get("skinColorBackground");
						t([".jw-toggle", ".jw-button-color:hover"], "color", i), t([".jw-active-option", ".jw-progress"], "background", i), t([".jw-text", ".jw-option", ".jw-button-color", ".jw-toggle.jw-off", ".jw-tooltip-title", ".jw-skip .jw-skip-icon"], "color", o), t([".jw-cue", ".jw-knob"], "background", o), t([".jw-background-color", ".jw-tooltip-title"], "background", r), O(i, o, n)
					}, this.setup = function() {
						this.handleColorOverrides(), !0 === x.get("skin-loading") && (e.addClass(ge, "jw-flag-skin-loading"), x.once("change:skin-loading", function() {
							e.removeClass(ge, "jw-flag-skin-loading")
						})), this.onChangeSkin(x, x.get("skin"), ""), x.on("change:skin", this.onChangeSkin, this), we = ge.getElementsByClassName("jw-media")[0], me = ge.getElementsByClassName("jw-controls")[0];
						var n = ge.getElementsByClassName("jw-preview")[0];
						Ee = new p(x), Ee.setup(n);
						var i = ge.getElementsByClassName("jw-title")[0];
						Le = new f(x), Le.setup(i), G(), ie(), x.set("mediaContainer", we), x.mediaController.on("fullscreenchange", ee);
						for (var o = E.length; o--;) document.addEventListener(E[o], ee, !1);
						window.removeEventListener("resize", S), window.addEventListener("resize", S, !1), b && (window.removeEventListener("orientationchange", S), window.addEventListener("orientationchange", S, !1)), x.on("change:errorEvent", le), x.on("change:controls", Xe), Xe(x, x.get("controls")), x.on("change:state", de), x.on("change:duration", se, this), x.on("change:flashBlocked", U), U(x, x.get("flashBlocked")), k.onPlaylistComplete(oe), k.onPlaylistItem(re), x.on("change:castAvailable", N), N(x, x.get("castAvailable")), x.on("change:castActive", D), D(x, x.get("castActive")), x.on("change:hideAdsControls", function(t, n) {
							e.toggleClass(ge, "jw-flag-ads-hide-controls", n)
						}), x.get("stretching") && Y(x, x.get("stretching")), x.on("change:stretching", Y), de(x, r.IDLE), x.on("change:fullscreen", Qe), W(be), W(_e);
						var a = x.get("aspectratio");
						if (a) {
							e.addClass(ge, "jw-flag-aspect-mode");
							var s = ge.getElementsByClassName("jw-aspect")[0];
							y(s, {
								paddingTop: a
							})
						}
						k.on(t.JWPLAYER_READY, function() {
							M(), K(x.get("width"), x.get("height"))
						})
					};
					var Xe = function(t, n) {
							if (n) {
								de(t, Ye ? je.get("state") : x.get("state"))
							}
							e.toggleClass(ge, "jw-flag-controls-disabled", !n)
						},
						Qe = function(t, n) {
							var i = x.getVideo();
							Ue ? (n ? Me.apply(ge) : Se.apply(document), te(ge, n)) : e.isIE() ? te(ge, n) : (je && je.getVideo() && je.getVideo().setFullscreen(n), i.setFullscreen(n)), i && 0 === i.getName().name.indexOf("flash") && i.setFullscreen(n)
						};
					this.resize = function(e, t) {
						K(e, t, !0), M()
					}, this.resizeMedia = $, this.reset = function() {
						document.contains(ge) && ge.parentNode.replaceChild(void 0, ge), e.emptyElement(ge)
					}, this.setupInstream = function(t) {
						this.instreamModel = je = t, je.on("change:controls", Xe, this), je.on("change:state", de, this), Ye = !0, e.addClass(ge, "jw-flag-ads"), ie()
					}, this.setAltText = function(e) {
						be.setAltText(e)
					}, this.destroyInstream = function() {
						if (Ye = !1, je && (je.off(null, null, this), je = null), this.setAltText(""), e.removeClass(ge, ["jw-flag-ads", "jw-flag-ads-hide-controls"]), x.set("hideAdsControls", !1), x.getVideo) {
							x.getVideo().setContainer(we)
						}
						se(x, x.get("duration")), ke.revertAlternateClickHandlers()
					}, this.addCues = function(e) {
						be && be.addCues(e)
					}, this.clickHandler = function() {
						return ke
					}, this.controlsContainer = function() {
						return me
					}, this.getContainer = this.element = function() {
						return ge
					}, this.getSafeRegion = function(t) {
						var n = {
							x: 0,
							y: 0,
							width: x.get("containerWidth") || 0,
							height: x.get("containerHeight") || 0
						},
							i = x.get("dock");
						return i && i.length && x.get("controls") && (n.y = Ae.element().clientHeight, n.height -= n.y), t = t || !e.exists(t), t && x.get("controls") && (n.height -= be.element().clientHeight), n
					}, this.setCaptions = function(e) {
						Pe.clear(), Pe.setup(x.get("id"), e), Pe.resize()
					}, this.destroy = function() {
						clearTimeout(ze), clearTimeout(Fe), clearTimeout(Oe), window.removeEventListener("resize", S), window.removeEventListener("orientationchange", S);
						for (var t = E.length; t--;) document.removeEventListener(E[t], ee, !1);
						x.mediaController && x.mediaController.off("fullscreenchange", ee), ge.removeEventListener("keydown", C, !1), Re && Re.destroy(), xe && (x.off("change:state", xe.statusDelegate), xe.destroy(), xe = null), Ye && this.destroyInstream(), _e && _e.destroy(), e.clearCss(x.get("id"))
					}
				}
			}.apply(t, i)) && (e.exports = o)
		}, , , function(e, t, n) {
			var i = n(132);
			"string" == typeof i && (i = [
				["all-players", i, ""]
			]), n(86).style(i, "all-players"), i.locals && (e.exports = i.locals)
		}, function(e, t, n) {
			var i, o;
			i = [n(88), n(1), n(29), n(2), n(8), n(9), n(93), n(19), n(94), n(83), n(4), n(6), n(72), n(43), n(33), n(70), n(25)], void 0 !== (o = function(e, t, n, i, o, r, a, s, l, u, c, d, p, h, f, g, m) {
				var w = {};
				return w.api = e, w._ = t, w.version = n, w.utils = t.extend(i, o, {
					canCast: f.available,
					key: a,
					extend: t.extend,
					scriptloader: s,
					rssparser: g,
					tea: l,
					UI: r
				}), w.utils.css.style = w.utils.style, w.vid = u, w.events = t.extend({}, c, {
					state: d
				}), w.playlist = t.extend({}, p, {
					item: h
				}), w.plugins = m, w.cast = f, w
			}.apply(t, i)) && (e.exports = o)
		}, , , , , function(e, t, n) {
			var i, o;
			i = [n(169), n(20), n(220)], void 0 !== (o = function(e, t, i) {
				var o = e.prototype.setup;
				return e.prototype.setup = function(e, r) {
					e.analytics && (e.sdkplatform = e.sdkplatform || e.analytics.sdkplatform), o.apply(this, arguments);
					var a = this._model.get("edition"),
						s = t(a),
						l = this._model.get("cast"),
						u = this;
					s("casting") && l && l.appid && n.e(3, function(e) {
						var t = n(89);
						u._castController = new t(u, u._model), u.castToggle = u._castController.castToggle.bind(u._castController)
					});
					var c = i.setup();
					this.once("ready", c.onReady, this), r.getAdBlock = c.checkAdBlock
				}, e
			}.apply(t, i)) && (e.exports = o)
		}, function(e, t, n) {
			var i, o;
			i = [n(93), n(20), n(1), n(2), n(81), n(174), n(51)], void 0 !== (o = function(e, t, i, o, r, a, s) {
				function l(e, t, n) {
					if (t) {
						var i = t.client;
						delete t.client, /\.(js|swf)$/.test(i || "") || (i = r.repo() + n), e[i] = t
					}
				}
				function u(e, n) {
					var o = i.clone(n.get("plugins")) || {},
						a = n.get("edition"),
						s = t(a),
						u = /^(vast|googima|freewheel)$/,
						c = /\.(js|swf)$/,
						d = r.repo(),
						p = i.clone(n.get("advertising"));
					if (s("ads") && p && (c.test(p.client) ? o[p.client] = p : u.test(p.client) && (o[d + p.client + ".js"] = p), delete p.client), s("jwpsrv")) {
						var h = n.get("analytics");
						i.isObject(h) || (h = {}), l(o, h, "jwpsrv.js")
					}
					l(o, n.get("ga"), "gapro.js"), l(o, n.get("sharing"), "sharing.js");
					var f = n.get("related"),
						g = i.isObject(f),
						m = !1 !== n.get("visualplaylist") || g;
					g || (f = {
						disableRelated: !0
					}), f.showDockButton = m, l(o, f, "related.js"), n.set("plugins", o), e()
				}
				function c(t, i) {
					var s = i.get("key") || window.jwplayer && window.jwplayer.key,
						l = new e(s),
						u = l.edition();
					if (i.set("key", s), i.set("edition", u), "unlimited" === u) {
						var c = o.getScriptPath("jwplayer.js");
						if (!c) return void a.error(t, "Error setting up player", "Could not locate jwplayer.js script tag");
						n.p = c, o.repo = r.repo = r.loadFrom = function() {
							return c
						}
					}
					i.updateProviders(), "invalid" === u ? a.error(t, "Error setting up player", (void 0 === s ? "Missing" : "Invalid") + " license key") : t()
				}
				function d(e, t) {
					s.containsDrm(t) ? s.probe(e, t.get("edition")) : e()
				}
				function p() {
					var e = a.getQueue();
					return e.CHECK_KEY = {
						method: c,
						depends: ["LOADED_POLYFILLS"]
					}, e.PROBE_DRM_SUPPORT = {
						method: d,
						depends: ["CHECK_KEY"]
					}, e.FILTER_PLUGINS = {
						method: u,
						depends: ["CHECK_KEY"]
					}, e.FILTER_PLAYLIST.depends.push("PROBE_DRM_SUPPORT"), e.LOAD_PLUGINS.depends.push("FILTER_PLUGINS"), e.SETUP_VIEW.depends.push("CHECK_KEY"), e
				}
				return {
					getQueue: p
				}
			}.apply(t, i)) && (e.exports = o)
		}, function(e, t, n) {
			var i, o;
			i = [n(176), n(212), n(1)], void 0 !== (o = function(e, t, n) {
				var i = window,
					o = n.extend(e, t);
				return "function" == typeof i.define && i.define.amd && i.define([], function() {
					return o
				}), i.jwplayer ? i.jwplayer : o
			}.apply(t, i)) && (e.exports = o)
		}, function(e, t, n) {
			var i, o;
			i = [], void 0 !== (o = function() {
				function e() {
					var e = document.createElement("div");
					return e.className = n, e.innerHTML = "&nbsp;", e.style.width = "1px", e.style.height = "1px", e.style.position = "absolute", e.style.background = "transparent", e
				}
				function t() {
					function t() {
						var e = this;
						e._view.element().appendChild(a), o = !0, i() && e.trigger("adBlock")
					}
					function i() {
						return !!o && ( !! r || ("" !== a.innerHTML && a.className === n && null !== a.offsetParent && 0 !== a.clientHeight || (r = !0), r))
					}
					var o = !1,
						r = !1,
						a = e();
					return {
						onReady: t,
						checkAdBlock: i
					}
				}
				var n = "afs_ads";
				return {
					setup: t
				}
			}.apply(t, i)) && (e.exports = o)
		}, function(e, t, n) {
			var i, o;
			i = [n(2), n(4), n(9), n(3), n(1), n(136)], void 0 !== (o = function(e, t, n, i, o, r) {
				var a = function(e) {
						this.model = e, this.setup()
					};
				return o.extend(a.prototype, i, {
					setup: function() {
						this.destroy(), this.skipMessage = this.model.get("skipText"), this.skipMessageCountdown = this.model.get("skipMessage"), this.setWaitTime(this.model.get("skipOffset"));
						var t = r();
						this.el = e.createElement(t), this.skiptext = this.el.getElementsByClassName("jw-skiptext")[0], this.skipAdOnce = o.once(this.skipAd.bind(this)), new n(this.el).on("click tap", o.bind(function() {
							this.skippable && this.skipAdOnce()
						}, this)), this.model.on("change:duration", this.onChangeDuration, this), this.model.on("change:position", this.onChangePosition, this), this.onChangeDuration(this.model, this.model.get("duration")), this.onChangePosition(this.model, this.model.get("position"))
					},
					updateMessage: function(e) {
						this.skiptext.innerHTML = e
					},
					updateCountdown: function(e) {
						this.updateMessage(this.skipMessageCountdown.replace(/xx/gi, Math.ceil(this.waitTime - e)))
					},
					onChangeDuration: function(t, n) {
						if (n) {
							if (this.waitPercentage) {
								if (!n) return;
								this.itemDuration = n, this.setWaitTime(this.waitPercentage), delete this.waitPercentage
							}
							e.removeClass(this.el, "jw-hidden")
						}
					},
					onChangePosition: function(t, n) {
						this.waitTime - n > 0 ? this.updateCountdown(n) : (this.updateMessage(this.skipMessage), this.skippable = !0, e.addClass(this.el, "jw-skippable"))
					},
					element: function() {
						return this.el
					},
					setWaitTime: function(t) {
						if (o.isString(t) && "%" === t.slice(-1)) {
							var n = parseFloat(t);
							return void(this.itemDuration && !isNaN(n) ? this.waitTime = this.itemDuration * n / 100 : this.waitPercentage = t)
						}
						o.isNumber(t) ? this.waitTime = t : "string" === e.typeOf(t) ? this.waitTime = e.seconds(t) : isNaN(Number(t)) ? this.waitTime = 0 : this.waitTime = Number(t)
					},
					skipAd: function() {
						this.trigger(t.JWPLAYER_AD_SKIPPED)
					},
					destroy: function() {
						this.el && (this.el.removeEventListener("click", this.skipAdOnce), this.el.parentElement && this.el.parentElement.removeChild(this.el)), delete this.skippable, delete this.itemDuration, delete this.waitPercentage
					}
				}), a
			}.apply(t, i)) && (e.exports = o)
		}, function(e, t, n) {
			var i, o;
			i = [n(206), n(1)], void 0 !== (o = function(e, t) {
				var n = function() {};
				return t.extend(n.prototype, e.prototype, {
					buildArray: function() {
						var t = e.prototype.buildArray.apply(this, arguments);
						if (this.model.get("abouttext")) {
							t.items[0].showLogo = !1, t.items.push(t.items.shift());
							var n = {
								title: this.model.get("abouttext"),
								link: this.model.get("aboutlink") || t.items[0].link
							};
							t.items.unshift(n)
						}
						return t
					}
				}), n
			}.apply(t, i)) && (e.exports = o)
		}])
	},
	6: function(e, t) {}
}, [11]);