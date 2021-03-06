/** Cat-v2.4.5 MIT License By https://www.Cat.com */
;Cat.define("Layer", function (e) {
    "use strict";
    var t = Cat.$, i = Cat.Layer, a = Cat.hint(), n = Cat.device(), l = "Form", r = ".Cat-Form",
        s = "Cat-this", o = "Cat-hide", c = "Cat-disabled", u = function () {
            this.config = {
                verify: {
                    required: [/[\S]+/, "必填项不能为空"],
                    phone: [/^1\d{10}$/, "请输入正确的手机号"],
                    email: [/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/, "邮箱格式不正确"],
                    url: [/(^#)|(^http(s*):\/\/[^\s]+\.[^\s]+)/, "链接格式不正确"],
                    number: function (e) {
                        if (!e || isNaN(e)) return "只能填写数字"
                    },
                    date: [/^(\d{4})[-\/](\d{1}|0\d{1}|1[0-2])([-\/](\d{1}|0\d{1}|[1-2][0-9]|3[0-1]))*$/, "日期格式不正确"],
                    identity: [/(^\d{15}$)|(^\d{17}(x|X|\d)$)/, "请输入正确的身份证号"]
                }
            }
        };
    u.prototype.set = function (e) {
        var i = this;
        return t.extend(!0, i.config, e), i
    }, u.prototype.verify = function (e) {
        var i = this;
        return t.extend(!0, i.config.verify, e), i
    }, u.prototype.on = function (e, t) {
        return Cat.onevent.call(this, l, e, t)
    }, u.prototype.val = function (e, i) {
        var a = t(r + '[Cat-filter="' + e + '"]');
        a.each(function (e, a) {
            var n = t(this);
            Cat.each(i, function (e, t) {
                var i, a = n.find('[name="' + e + '"]');
                a[0] && (i = a[0].type, "checkbox" === i ? a[0].checked = t : "radio" === i ? a.each(function () {
                    this.value === t && (this.checked = !0)
                }) : a.val(t))
            })
        }), f.render(null, e)
    }, u.prototype.render = function (e, i) {
        var n = this, u = t(r + function () {
            return i ? '[Cat-filter="' + i + '"]' : ""
        }()), d = {
            select: function () {
                var e, i = "请选择", a = "Cat-Form-select", n = "Cat-select-title", r = "Cat-select-none", d = "",
                    f = u.find("select"), v = function (i, l) {
                        t(i.target).parent().hasClass(n) && !l || (t("." + a).removeClass(a + "ed " + a + "up"), e && d && e.val(d)), e = null
                    }, y = function (i, u, f) {
                        var y, p = t(this), m = i.find("." + n), k = m.find("input"), x = i.find("dl"),
                            g = x.children("dd"), b = this.selectedIndex;
                        if (!u) {
                            var C = function () {
                                var e = i.offset().top + i.outerHeight() + 5 - h.scrollTop(), t = x.outerHeight();
                                b = p[0].selectedIndex, i.addClass(a + "ed"), g.removeClass(o), y = null, g.eq(b).addClass(s).siblings().removeClass(s), e + t > h.height() && e >= t && i.addClass(a + "up"), $()
                            }, w = function (e) {
                                i.removeClass(a + "ed " + a + "up"), k.blur(), y = null, e || T(k.val(), function (e) {
                                    var i = p[0].selectedIndex;
                                    e && (d = t(p[0].options[i]).html(), 0 === i && d === k.attr("placeholder") && (d = ""), k.val(d || ""))
                                })
                            }, $ = function () {
                                var e = x.children("dd." + s);
                                if (e[0]) {
                                    var t = e.position().top, i = x.height(), a = e.height();
                                    t > i && x.scrollTop(t + x.scrollTop() - i + a - 5), t < 0 && x.scrollTop(t + x.scrollTop() - 5)
                                }
                            };
                            m.on("click", function (e) {
                                i.hasClass(a + "ed") ? w() : (v(e, !0), C()), x.find("." + r).remove()
                            }), m.find(".Cat-edge").on("click", function () {
                                k.focus()
                            }), k.on("keyup", function (e) {
                                var t = e.keyCode;
                                9 === t && C()
                            }).on("keydown", function (e) {
                                var t = e.keyCode;
                                9 === t && w();
                                var i = function (t, a) {
                                    var n, l;
                                    e.preventDefault();
                                    var r = function () {
                                        var e = x.children("dd." + s);
                                        if (x.children("dd." + o)[0] && "next" === t) {
                                            var i = x.children("dd:not(." + o + ",." + c + ")"), n = i.eq(0).index();
                                            if (n >= 0 && n < e.index() && !i.hasClass(s)) return i.eq(0).prev()[0] ? i.eq(0).prev() : x.children(":last")
                                        }
                                        return a && a[0] ? a : y && y[0] ? y : e
                                    }();
                                    return l = r[t](), n = r[t]("dd:not(." + o + ")"), l[0] ? (y = r[t](), n[0] && !n.hasClass(c) || !y[0] ? (n.addClass(s).siblings().removeClass(s), void $()) : i(t, y)) : y = null
                                };
                                38 === t && i("prev"), 40 === t && i("next"), 13 === t && (e.preventDefault(), x.children("dd." + s).trigger("click"))
                            });
                            var T = function (e, i, a) {
                                var n = 0;
                                Cat.each(g, function () {
                                    var i = t(this), l = i.text(), r = l.indexOf(e) === -1;
                                    ("" === e || "blur" === a ? e !== l : r) && n++, "keyup" === a && i[r ? "addClass" : "removeClass"](o)
                                });
                                var l = n === g.length;
                                return i(l), l
                            }, j = function (e) {
                                var t = this.value, i = e.keyCode;
                                return 9 !== i && 13 !== i && 37 !== i && 38 !== i && 39 !== i && 40 !== i && (T(t, function (e) {
                                    e ? x.find("." + r)[0] || x.append('<p class="' + r + '">无匹配项</p>') : x.find("." + r).remove()
                                }, "keyup"), "" === t && x.find("." + r).remove(), void $())
                            };
                            f && k.on("keyup", j).on("blur", function (i) {
                                var a = p[0].selectedIndex;
                                e = k, d = t(p[0].options[a]).html(), 0 === a && d === k.attr("placeholder") && (d = ""), setTimeout(function () {
                                    T(k.val(), function (e) {
                                        d || k.val("")
                                    }, "blur")
                                }, 200)
                            }), g.on("click", function () {
                                var e = t(this), a = e.attr("Cat-value"), n = p.attr("Cat-filter");
                                return !e.hasClass(c) && (e.hasClass("Cat-select-tips") ? k.val("") : (k.val(e.text()), e.addClass(s)), e.siblings().removeClass(s), p.val(a).removeClass("Cat-Form-danger"), Cat.event.call(this, l, "select(" + n + ")", {
                                    elem: p[0],
                                    value: a,
                                    othis: i
                                }), w(!0), !1)
                            }), i.find("dl>dt").on("click", function (e) {
                                return !1
                            }), t(document).off("click", v).on("click", v)
                        }
                    };
                f.each(function (e, l) {
                    var r = t(this), o = r.next("." + a), u = this.disabled, d = l.value,
                        f = t(l.options[l.selectedIndex]), v = l.options[0];
                    if ("string" == typeof r.attr("Cat-ignore")) return r.show();
                    var h = "string" == typeof r.attr("Cat-search"), p = v ? v.value ? i : v.innerHTML || i : i,
                        m = t(['<div class="' + (h ? "" : "Cat-unselect ") + a, (u ? " Cat-select-disabled" : "") + '">', '<div class="' + n + '">', '<input type="text" placeholder="' + p + '" ' + ('value="' + (d ? f.html() : "") + '"') + (h ? "" : " readonly") + ' class="Cat-input' + (h ? "" : " Cat-unselect") + (u ? " " + c : "") + '">', '<i class="Cat-edge"></i></div>', '<dl class="Cat-anim Cat-anim-upbit' + (r.find("optgroup")[0] ? " Cat-select-group" : "") + '">', function (e) {
                            var t = [];
                            return Cat.each(e, function (e, a) {
                                0 !== e || a.value ? "optgroup" === a.tagName.toLowerCase() ? t.push("<dt>" + a.label + "</dt>") : t.push('<dd Cat-value="' + a.value + '" class="' + (d === a.value ? s : "") + (a.disabled ? " " + c : "") + '">' + a.innerHTML + "</dd>") : t.push('<dd Cat-value="" class="Cat-select-tips">' + (a.innerHTML || i) + "</dd>")
                            }), 0 === t.length && t.push('<dd Cat-value="" class="' + c + '">没有选项</dd>'), t.join("")
                        }(r.find("*")) + "</dl>", "</div>"].join(""));
                    o[0] && o.remove(), r.after(m), y.call(this, m, u, h)
                })
            }, checkbox: function () {
                var e = {
                    checkbox: ["Cat-Form-checkbox", "Cat-Form-checked", "checkbox"],
                    _switch: ["Cat-Form-switch", "Cat-Form-onswitch", "switch"]
                }, i = u.find("input[type=checkbox]"), a = function (e, i) {
                    var a = t(this);
                    e.on("click", function () {
                        var t = a.attr("Cat-filter"), n = (a.attr("Cat-text") || "").split("|");
                        a[0].disabled || (a[0].checked ? (a[0].checked = !1, e.removeClass(i[1]).find("em").text(n[1])) : (a[0].checked = !0, e.addClass(i[1]).find("em").text(n[0])), Cat.event.call(a[0], l, i[2] + "(" + t + ")", {
                            elem: a[0],
                            value: a[0].value,
                            othis: e
                        }))
                    })
                };
                i.each(function (i, n){
                    var l = t(this), r = l.attr("Cat-skin"), s = (l.attr("Cat-text") || "").split("|"),
                        o = this.disabled;
                    "switch" === r && (r = "_" + r);
                    var u = e[r] || e.checkbox;
                    if ("string" == typeof l.attr("Cat-ignore")) return l.show();
                    var d = l.next("." + u[0]),
                        f = t(['<div class="Cat-unselect ' + u[0], n.checked ? " " + u[1] : "", o ? " Cat-checkbox-disbaled " + c : "", '"', r ? ' Cat-skin="' + r + '"' : "", ">", function () {
                            var e = n.title.replace(/\s/g, ""), t = {
                                checkbox: [e ? "<span>" + n.title + "</span>" : "", '<i class="Cat-icon Cat-icon-ok"></i>'].join(""),
                                _switch: "<em>" + ((n.checked ? s[0] : s[1]) || "") + "</em><i></i>"
                            };
                            return t[r] || t.checkbox
                        }(), "</div>"].join(""));
                    d[0] && d.remove(), l.after(f), a.call(this, f, u)
                })
            }, radio: function () {
                var e = "Cat-Form-radio", i = ["&#xe643;", "&#xe63f;"], a = u.find("input[type=radio]"),
                    n = function (a) {
                        var n = t(this), s = "Cat-anim-scaleSpring";
                        a.on("click", function () {
                            var o = n[0].name, c = n.parents(r), u = n.attr("Cat-filter"),
                                d = c.find("input[name=" + o.replace(/(\.|#|\[|\])/g, "\\$1") + "]");
                            n[0].disabled || (Cat.each(d, function () {
                                var a = t(this).next("." + e);
                                this.checked = !1, a.removeClass(e + "ed"), a.find(".Cat-icon").removeClass(s).html(i[1])
                            }), n[0].checked = !0, a.addClass(e + "ed"), a.find(".Cat-icon").addClass(s).html(i[0]), Cat.event.call(n[0], l, "radio(" + u + ")", {
                                elem: n[0],
                                value: n[0].value,
                                othis: a
                            }))
                        })
                    };
                a.each(function (a, l) {
                    var r = t(this), s = r.next("." + e), o = this.disabled;
                    if ("string" == typeof r.attr("Cat-ignore")) return r.show();
                    s[0] && s.remove();
                    var u = t(['<div class="Cat-unselect ' + e, l.checked ? " " + e + "ed" : "", (o ? " Cat-radio-disbaled " + c : "") + '">', '<i class="Cat-anim Cat-icon">' + i[l.checked ? 0 : 1] + "</i>", "<div>" + function () {
                        var e = l.title || "";
                        return "string" == typeof r.next().attr("Cat-radio") && (e = r.next().html(), r.next().remove()), e
                    }() + "</div>", "</div>"].join(""));
                    r.after(u), n.call(this, u)
                })
            }
        };
        return e ? d[e] ? d[e]() : a.error("不支持的" + e + "表单渲染") : Cat.each(d, function (e, t) {
            t()
        }), n
    };
    var d = function () {
        var e = t(this), a = f.config.verify, s = null, o = "Cat-Form-danger", c = {}, u = e.parents(r),
            d = u.find("*[Cat-verify]"), v = e.parents("Form")[0], h = u.find("input,select,textarea"),
            y = e.attr("Cat-filter");
        if (Cat.each(d, function (e, l) {
            var r = t(this), c = r.attr("Cat-verify").split("|"), u = r.attr("Cat-verType"), d = r.val();
            if (r.removeClass(o), Cat.each(c, function (e, t) {
                var c, f = "", v = "function" == typeof a[t];
                if (a[t]) {
                    var c = v ? f = a[t](d, l) : !a[t][0].test(d);
                    if (f = f || a[t][1], c) return "tips" === u ? i.tips(f, function () {
                        return "string" == typeof r.attr("Cat-ignore") || "select" !== l.tagName.toLowerCase() && !/^checkbox|radio$/.test(l.type) ? r : r.next()
                    }(), {tips: 1}) : "alert" === u ? i.alert(f, {title: "提示", shadeClose: !0}) : i.msg(f, {
                        icon: 5,
                        shift: 6
                    }), n.android || n.ios || l.focus(), r.addClass(o), s = !0
                }
            }), s) return s
        }), s) return !1;
        var p = {};
        return Cat.each(h, function (e, t) {
            if (t.name = (t.name || "").replace(/^\s*|\s*&/, ""), t.name) {
                if (/^.*\[\]$/.test(t.name)) {
                    var i = t.name.match(/^(.*)\[\]$/g)[0];
                    p[i] = 0 | p[i], t.name = t.name.replace(/^(.*)\[\]$/, "$1[" + p[i]++ + "]")
                }
                /^checkbox|radio$/.test(t.type) && !t.checked || (c[t.name] = t.value)
            }
        }), Cat.event.call(this, l, "submit(" + y + ")", {elem: this, Form: v, field: c})
    }, f = new u, v = t(document), h = t(window);
    f.render(), v.on("reset", r, function () {
        var e = t(this).attr("Cat-filter");
        setTimeout(function () {
            f.render(null, e)
        }, 50)
    }), v.on("submit", r, d).on("click", "*[Cat-submit]", d), e(l, f)
});