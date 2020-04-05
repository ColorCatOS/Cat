/** Cat-v2.4.5 MIT License By https://www.Cat.com */
;Cat.define(["CatTpl", "CatPage", "Layer", "Form", "Util"], function (e) {
    "use strict";
    var t = Cat.$, i = Cat.CatTpl, a = Cat.CatPage, l = Cat.Layer, n = Cat.Form,
        o = (Cat.Util, Cat.hint()), r = Cat.device(), d = {
            config: {checkName: "CAT_CHECKED", indexName: "CAT_TABLE_INDEX"},
            cache: {},
            index: Cat.Table ? Cat.Table.index + 1e4 : 0,
            set: function (e) {
                var i = this;
                return i.config = t.extend({}, i.config, e), i
            },
            on: function (e, t) {
                return Cat.onevent.call(this, u, e, t)
            }
        }, c = function () {
            var e = this, t = e.config, i = t.id || t.index;
            return i && (c.that[i] = e, c.config[i] = t), {
                reload: function (t) {
                    e.reload.call(e, t)
                }, setColsWidth: function () {
                    e.setColsWidth.call(e)
                }, resize: function () {
                    e.resize.call(e)
                }, config: t
            }
        }, s = function (e) {
            var t = c.config[e];
            return t || o.error("The ID option was not found in the table instance"), t || null
        }, u = "Table", h = ".Cat-Table", y = "Cat-hide", f = "Cat-none", p = "Cat-Table-view",
        v = ".Cat-Table-tool", m = ".Cat-Table-box", g = ".Cat-Table-init", b = ".Cat-Table-header",
        x = ".Cat-Table-body", k = ".Cat-Table-main", C = ".Cat-Table-fixed", w = ".Cat-Table-fixed-l",
        T = ".Cat-Table-fixed-r", A = ".Cat-Table-total", L = ".Cat-Table-page", S = ".Cat-Table-sort",
        N = "Cat-Table-edit", W = "Cat-Table-hover", _ = function (e) {
            var t = '{{#if(item2.colspan){}} colspan="{{item2.colspan}}"{{#} if(item2.rowspan){}} rowspan="{{item2.rowspan}}"{{#}}}';
            return e = e || {}, ['<Table cellspacing="0" cellpadding="0" border="0" class="Cat-Table" ', '{{# if(d.data.skin){ }}Cat-skin="{{d.data.skin}}"{{# } }} {{# if(d.data.size){ }}Cat-size="{{d.data.size}}"{{# } }} {{# if(d.data.even){ }}Cat-even{{# } }}>', "<thead>", "{{# Cat.each(d.data.cols, function(i1, item1){ }}", "<tr>", "{{# Cat.each(item1, function(i2, item2){ }}", '{{# if(item2.fixed && item2.fixed !== "right"){ left = true; } }}', '{{# if(item2.fixed === "right"){ right = true; } }}', function () {
                return e.fixed && "right" !== e.fixed ? '{{# if(item2.fixed && item2.fixed !== "right"){ }}' : "right" === e.fixed ? '{{# if(item2.fixed === "right"){ }}' : ""
            }(), "{{# var isSort = !(item2.colGroup) && item2.sort; }}", '<th data-field="{{ item2.field||i2 }}" data-key="{{d.index}}-{{i1}}-{{i2}}" {{# if( item2.parentKey){ }}data-parentkey="{{ item2.parentKey }}"{{# } }} {{# if(item2.minWidth){ }}data-minwidth="{{item2.minWidth}}"{{# } }} ' + t + ' {{# if(item2.unresize || item2.colGroup){ }}data-unresize="true"{{# } }} class="{{# if(item2.hide){ }}Cat-hide{{# } }}{{# if(isSort){ }} Cat-unselect{{# } }}{{# if(!item2.field){ }} Cat-Table-col-special{{# } }}">', '<div class="Cat-Table-cell CatTable-cell-', "{{# if(item2.colGroup){ }}", "group", "{{# } else { }}", "{{d.index}}-{{i1}}-{{i2}}", '{{# if(item2.type !== "normal"){ }}', " CatTable-cell-{{ item2.type }}", "{{# } }}", "{{# } }}", '" {{#if(item2.align){}}align="{{item2.align}}"{{#}}}>', '{{# if(item2.type === "checkbox"){ }}', '<input type="checkbox" name="CatTableCheckbox" Cat-skin="primary" Cat-filter="CatTableAllChoose" {{# if(item2[d.data.checkName]){ }}checked{{# }; }}>', "{{# } else { }}", '<span>{{item2.title||""}}</span>', "{{# if(isSort){ }}", '<span class="Cat-Table-sort Cat-inline"><i class="Cat-edge Cat-Table-sort-asc" title="升序"></i><i class="Cat-edge Cat-Table-sort-desc" title="降序"></i></span>', "{{# } }}", "{{# } }}", "</div>", "</th>", e.fixed ? "{{# }; }}" : "", "{{# }); }}", "</tr>", "{{# }); }}", "</thead>", "</Table>"].join("")
        },
        E = ['<table cellspacing="0" cellpadding="0" border="0" class="Cat-Table" ', '{{# if(d.data.skin){ }}Cat-skin="{{d.data.skin}}"{{# } }} {{# if(d.data.size){ }}Cat-size="{{d.data.size}}"{{# } }} {{# if(d.data.even){ }}Cat-even{{# } }}>', "<tbody></tbody>", "</table>"].join(""),
        z = ['<div class="Cat-Form Cat-border-box {{d.VIEW_CLASS}}" Cat-filter="CAT-Table-{{d.index}}" Cat-id="{{ d.data.id }}" style="{{# if(d.data.width){ }}width:{{d.data.width}}px;{{# } }} {{# if(d.data.height){ }}height:{{d.data.height}}px;{{# } }}">', "{{# if(d.data.toolbar){ }}", '<div class="Cat-Table-tool">', '<div class="Cat-Table-tool-temp"></div>', '<div class="Cat-Table-tool-self"></div>', "</div>", "{{# } }}", '<div class="Cat-Table-box">', "{{# if(d.data.loading){ }}", '<div class="Cat-Table-init" style="background-color: #fff;">', '<i class="Cat-icon Cat-icon-loading Cat-icon"></i>', "</div>", "{{# } }}", "{{# var left, right; }}", '<div class="Cat-Table-header">', _(), "</div>", '<div class="Cat-Table-body Cat-Table-main">', E, "</div>", "{{# if(left){ }}", '<div class="Cat-Table-fixed Cat-Table-fixed-l">', '<div class="Cat-Table-header">', _({fixed: !0}), "</div>", '<div class="Cat-Table-body">', E, "</div>", "</div>", "{{# }; }}", "{{# if(right){ }}", '<div class="Cat-Table-fixed Cat-Table-fixed-r">', '<div class="Cat-Table-header">', _({fixed: "right"}), '<div class="Cat-Table-mend"></div>', "</div>", '<div class="Cat-Table-body">', E, "</div>", "</div>", "{{# }; }}", "</div>", "{{# if(d.data.totalRow){ }}", '<div class="Cat-Table-total">', '<Table cellspacing="0" cellpadding="0" border="0" class="Cat-Table" ', '{{# if(d.data.skin){ }}Cat-skin="{{d.data.skin}}"{{# } }} {{# if(d.data.size){ }}Cat-size="{{d.data.size}}"{{# } }} {{# if(d.data.even){ }}Cat-even{{# } }}>', '<tbody><tr><td><div class="Cat-Table-cell" style="visibility: hidden;">Total</div></td></tr></tbody>', "</Table>", "</div>", "{{# } }}", "{{# if(d.data.page){ }}", '<div class="Cat-Table-page">', '<div id="Cat-Table-page{{d.index}}"></div>', "</div>", "{{# } }}", "<style>", "{{# Cat.each(d.data.cols, function(i1, item1){", "Cat.each(item1, function(i2, item2){ }}", ".CatTable-cell-{{d.index}}-{{i1}}-{{i2}}{ ", "{{# if(item2.width){ }}", "width: {{item2.width}}px;", "{{# } }}", " }", "{{# });", "}); }}", "</style>", "</div>"].join(""),
        H = t(window), R = t(document), F = function (e) {
            var i = this;
            i.index = ++d.index, i.config = t.extend({}, i.config, d.config, e), i.render()
        };
    F.prototype.config = {
        limit: 10,
        loading: !0,
        cellMinWidth: 60,
        defaultToolbar: ["filter", "exports", "print"],
        autoSort: !0,
        text: {none: "无数据"}
    }, F.prototype.render = function () {
        var e = this, a = e.config;
        if (a.elem = t(a.elem), a.where = a.where || {}, a.id = a.id || a.elem.attr("id") || e.index, a.request = t.extend({
            pageName: "page",
            limitName: "limit"
        }, a.request), a.response = t.extend({
            statusName: "code",
            statusCode: 0,
            msgName: "msg",
            dataName: "data",
            countName: "count"
        }, a.response), "object" == typeof a.page && (a.limit = a.page.limit || a.limit, a.limits = a.page.limits || a.limits, e.page = a.page.curr = a.page.curr || 1, delete a.page.elem, delete a.page.jump), !a.elem[0]) return e;
        a.height && /^full-\d+$/.test(a.height) && (e.fullHeightGap = a.height.split("-")[1], a.height = H.height() - e.fullHeightGap), e.setInit();
        var l = a.elem, n = l.next("." + p), o = e.elem = t(i(z).render({VIEW_CLASS: p, data: a, index: e.index}));
        if (a.index = e.index, n[0] && n.remove(), l.after(o), e.CatTool = o.find(v), e.CatBox = o.find(m), e.CatHeader = o.find(b), e.CatMain = o.find(k), e.CatBody = o.find(x), e.CatFixed = o.find(C), e.CatFixLeft = o.find(w), e.CatFixRight = o.find(T), e.CatTotal = o.find(A), e.CatPage = o.find(L), e.renderToolbar(), e.fullSize(), a.cols.length > 1) {
            var r = e.CatFixed.find(b).find("th");
            r.height(e.CatHeader.height() - 1 - parseFloat(r.css("padding-top")) - parseFloat(r.css("padding-bottom")))
        }
        e.pullData(e.page), e.events()
    }, F.prototype.initOpts = function (e) {
        var t = this, i = (t.config, {checkbox: 48, radio: 48, space: 15, numbers: 40});
        e.checkbox && (e.type = "checkbox"), e.space && (e.type = "space"), e.type || (e.type = "normal"), "normal" !== e.type && (e.unresize = !0, e.width = e.width || i[e.type])
    }, F.prototype.setInit = function (e) {
        var t = this, i = t.config;
        return i.clientWidth = i.width || function () {
            var e = function (t) {
                var a, l;
                t = t || i.elem.parent(), a = t.width();
                try {
                    l = "none" === t.css("display")
                } catch (n) {
                }
                return !t[0] || a && !l ? a : e(t.parent())
            };
            return e()
        }(), "width" === e ? i.clientWidth : void Cat.each(i.cols, function (e, a) {
            Cat.each(a, function (l, n) {
                if (!n) return void a.splice(l, 1);
                if (n.key = e + "-" + l, n.hide = n.hide || !1, n.colGroup || n.colspan > 1) {
                    var o = 0;
                    Cat.each(i.cols[e + 1], function (t, i) {
                        i.HAS_PARENT || o > 1 && o == n.colspan || (i.HAS_PARENT = !0, i.parentKey = e + "-" + l, o += parseInt(i.colspan > 1 ? i.colspan : 1))
                    }), n.colGroup = !0
                }
                t.initOpts(n)
            })
        })
    }, F.prototype.renderToolbar = function () {
        var e = this, a = e.config,
            l = ['<div class="Cat-inline" Cat-event="add"><i class="Cat-icon Cat-icon-add-1"></i></div>', '<div class="Cat-inline" Cat-event="update"><i class="Cat-icon Cat-icon-edit"></i></div>', '<div class="Cat-inline" Cat-event="delete"><i class="Cat-icon Cat-icon-delete"></i></div>'].join(""),
            n = e.CatTool.find(".Cat-Table-tool-temp");
        if ("default" === a.toolbar) n.html(l); else if ("string" == typeof a.toolbar) {
            var o = t(a.toolbar).html() || "";
            o && n.html(i(o).render(a))
        }
        var r = {
            filter: {title: "筛选列", CatEvent: "CATTABLE_COLS", icon: "Cat-icon-cols"},
            exports: {title: "导出", CatEvent: "CATTABLE_EXPORT", icon: "Cat-icon-export"},
            print: {title: "打印", CatEvent: "CATTABLE_PRINT", icon: "Cat-icon-print"}
        }, d = [];
        "object" == typeof a.defaultToolbar && Cat.each(a.defaultToolbar, function (e, t) {
            var i = r[t];
            i && d.push('<div class="Cat-inline" title="' + i.title + '" Cat-event="' + i.CatEvent + '"><i class="Cat-icon ' + i.icon + '"></i></div>')
        }), e.CatTool.find(".Cat-Table-tool-self").html(d.join(""))
    }, F.prototype.setParentCol = function (e, t) {
        var i = this, a = i.config, l = i.CatHeader.find('th[data-key="' + a.index + "-" + t + '"]'),
            n = parseInt(l.attr("colspan")) || 0;
        if (l[0]) {
            var o = t.split("-"), r = a.cols[o[0]][o[1]];
            e ? n-- : n++, l.attr("colspan", n), l[n < 1 ? "addClass" : "removeClass"](y), r.colspan = n, r.hide = n < 1;
            var d = l.data("parentkey");
            d && i.setParentCol(e, d)
        }
    }, F.prototype.setColsPatch = function () {
        var e = this, t = e.config;
        Cat.each(t.cols, function (t, i) {
            Cat.each(i, function (t, i) {
                i.hide && e.setParentCol(i.hide, i.parentKey)
            })
        })
    }, F.prototype.setColsWidth = function () {
        var e = this, t = e.config, i = 0, a = 0, l = 0, n = 0, o = e.setInit("width");
        e.eachCols(function (e, t) {
            t.hide || i++
        }), o = o - function () {
            return "line" === t.skin || "nob" === t.skin ? 2 : i + 1
        }() - e.getScrollWidth(e.CatMain[0]) - 1;
        var r = function (e) {
            Cat.each(t.cols, function (i, r) {
                Cat.each(r, function (i, d) {
                    var c = 0, s = d.minWidth || t.cellMinWidth;
                    return d ? void (d.colGroup || d.hide || (e ? l && l < s && (a--, c = s) : (c = d.width || 0, /\d+%$/.test(c) ? (c = Math.floor(parseFloat(c) / 100 * o), c < s && (c = s)) : c || (d.width = c = 0, a++)), d.hide && (c = 0), n += c)) : void r.splice(i, 1)
                })
            }), o > n && a && (l = (o - n) / a)
        };
        r(), r(!0), e.autoColNums = a, e.eachCols(function (i, a) {
            var n = a.minWidth || t.cellMinWidth;
            a.colGroup || a.hide || (0 === a.width ? e.getCssRule(t.index + "-" + a.key, function (e) {
                e.style.width = Math.floor(l >= n ? l : n) + "px"
            }) : /\d+%$/.test(a.width) && e.getCssRule(t.index + "-" + a.key, function (e) {
                e.style.width = Math.floor(parseFloat(a.width) / 100 * o) + "px"
            }))
        });
        var d = e.CatMain.width() - e.getScrollWidth(e.CatMain[0]) - e.CatMain.children("Table").outerWidth();
        if (e.autoColNums && d >= -i && d <= i) {
            var c = function (t) {
                var i;
                return t = t || e.CatHeader.eq(0).find("thead th:last-child"), i = t.data("field"), !i && t.prev()[0] ? c(t.prev()) : t
            }, s = c(), u = s.data("key");
            e.getCssRule(u, function (t) {
                var i = t.style.width || s.outerWidth();
                t.style.width = parseFloat(i) + d + "px", e.CatMain.height() - e.CatMain.prop("clientHeight") > 0 && (t.style.width = parseFloat(t.style.width) - 1 + "px")
            })
        }
        e.loading(!0)
    }, F.prototype.resize = function () {
        var e = this;
        e.fullSize(), e.setColsWidth(), e.scrollPatch()
    }, F.prototype.reload = function (e) {
        var i = this;
        i.config.data && i.config.data.constructor === Array && delete i.config.data, i.config = t.extend({}, i.config, e), i.render()
    }, F.prototype.page = 1, F.prototype.pullData = function (e) {
        var i = this, a = i.config, l = a.request, n = a.response, o = function () {
            "object" == typeof a.initSort && i.sort(a.initSort.field, a.initSort.type)
        };
        if (i.startTime = (new Date).getTime(), a.url) {
            var r = {};
            r[l.pageName] = e, r[l.limitName] = a.limit;
            var d = t.extend(r, a.where);
            a.contentType && 0 == a.contentType.indexOf("application/json") && (d = JSON.stringify(d)), t.ajax({
                type: a.method || "get",
                url: a.url,
                contentType: a.contentType,
                data: d,
                dataType: "json",
                headers: a.headers || {},
                success: function (t) {
                    "function" == typeof a.parseData && (t = a.parseData(t) || t), t[n.statusName] != n.statusCode ? (i.renderForm(), i.CatMain.html('<div class="' + f + '">' + (t[n.msgName] || "返回的数据不符合规范，正确的成功状态码 (" + n.statusName + ") 应为：" + n.statusCode) + "</div>")) : (i.renderData(t, e, t[n.countName]), o(), a.time = (new Date).getTime() - i.startTime + " ms"), i.setColsWidth(), "function" == typeof a.done && a.done(t, e, t[n.countName])
                },
                error: function (e, t) {
                    i.CatMain.html('<div class="' + f + '">数据接口请求异常：' + t + "</div>"), i.renderForm(), i.setColsWidth()
                }
            })
        } else if (a.data && a.data.constructor === Array) {
            var c = {}, s = e * a.limit - a.limit;
            c[n.dataName] = a.data.concat().splice(s, a.limit), c[n.countName] = a.data.length, i.renderData(c, e, a.data.length), o(), i.setColsWidth(), "function" == typeof a.done && a.done(c, e, c[n.countName])
        }
    }, F.prototype.eachCols = function (e) {
        var t = this;
        return d.eachCols(null, e, t.config.cols), t
    }, F.prototype.renderData = function (e, n, o, r) {
        var c = this, s = c.config, u = e[s.response.dataName] || [], h = [], p = [], v = [], m = function () {
            var e;
            return !r && c.sortKey ? c.sort(c.sortKey.field, c.sortKey.sort, !0) : (Cat.each(u, function (a, l) {
                var o = [], u = [], f = [], m = a + s.limit * (n - 1) + 1;
                0 !== l.length && (r || (l[d.config.indexName] = a), c.eachCols(function (n, r) {
                    var c = r.field || n, h = s.index + "-" + r.key, p = l[c];
                    if (void 0 !== p && null !== p || (p = ""), !r.colGroup) {
                        var v = ['<td data-field="' + c + '" data-key="' + h + '" ' + function () {
                            var e = [];
                            return r.edit && e.push('data-edit="' + r.edit + '"'), r.align && e.push('align="' + r.align + '"'), r.templet && e.push('data-content="' + p + '"'), r.toolbar && e.push('data-off="true"'), r.event && e.push('Cat-event="' + r.event + '"'), r.style && e.push('style="' + r.style + '"'), r.minWidth && e.push('data-minwidth="' + r.minWidth + '"'), e.join(" ")
                        }() + ' class="' + function () {
                            var e = [];
                            return r.hide && e.push(y), r.field || e.push("Cat-Table-col-special"), e.join(" ")
                        }() + '">', '<div class="Cat-Table-cell CatTable-cell-' + function () {
                            return "normal" === r.type ? h : h + " CatTable-cell-" + r.type
                        }() + '">' + function () {
                            var n = t.extend(!0, {CAT_INDEX: m}, l), o = d.config.checkName;
                            switch (r.type) {
                                case"checkbox":
                                    return '<input type="checkbox" name="CatTableCheckbox" Cat-skin="primary" ' + function () {
                                        return r[o] ? (l[o] = r[o], r[o] ? "checked" : "") : n[o] ? "checked" : ""
                                    }() + ">";
                                case"radio":
                                    return n[o] && (e = a), '<input type="radio" name="CatTableRadio_' + s.index + '" ' + (n[o] ? "checked" : "") + ' Cat-type="CatTableRadio">';
                                case"numbers":
                                    return m
                            }
                            return r.toolbar ? i(t(r.toolbar).html() || "").render(n) : r.templet ? function () {
                                return "function" == typeof r.templet ? r.templet(n) : i(t(r.templet).html() || String(p)).render(n)
                            }() : p
                        }(), "</div></td>"].join("");
                        o.push(v), r.fixed && "right" !== r.fixed && u.push(v), "right" === r.fixed && f.push(v)
                    }
                }), h.push('<tr data-index="' + a + '">' + o.join("") + "</tr>"), p.push('<tr data-index="' + a + '">' + u.join("") + "</tr>"), v.push('<tr data-index="' + a + '">' + f.join("") + "</tr>"))
            }), c.CatBody.scrollTop(0), c.CatMain.find("." + f).remove(), c.CatMain.find("tbody").html(h.join("")), c.CatFixLeft.find("tbody").html(p.join("")), c.CatFixRight.find("tbody").html(v.join("")), c.renderForm(), "number" == typeof e && c.setThisRowChecked(e), c.syncCheckAll(), c.haveInit ? c.scrollPatch() : setTimeout(function () {
                c.scrollPatch()
            }, 50), c.haveInit = !0, l.close(c.tipsIndex), s.HAS_SET_COLS_PATCH || c.setColsPatch(), void (s.HAS_SET_COLS_PATCH = !0))
        };
        return c.key = s.id || s.index, d.cache[c.key] = u, c.CatPage[0 == o || 0 === u.length && 1 == n ? "addClass" : "removeClass"](y), r ? m() : 0 === u.length ? (c.renderForm(), c.CatFixed.remove(), c.CatMain.find("tbody").html(""), c.CatMain.find("." + f).remove(), c.CatMain.append('<div class="' + f + '">' + s.text.none + "</div>")) : (m(), c.renderTotal(u), void (s.page && (s.page = t.extend({
            elem: "Cat-Table-page" + s.index,
            count: o,
            limit: s.limit,
            limits: s.limits || [10, 20, 30, 40, 50, 60, 70, 80, 90],
            groups: 3,
            catout: ["prev", "page", "next", "skip", "count", "limit"],
            prev: '<i class="Cat-icon">&#xe603;</i>',
            next: '<i class="Cat-icon">&#xe602;</i>',
            jump: function (e, t) {
                t || (c.page = e.curr, s.limit = e.limit, c.loading(), c.pullData(e.curr))
            }
        }, s.page), s.page.count = o, a.render(s.page))))
    }, F.prototype.renderTotal = function (e) {
        var t = this, i = t.config, a = {};
        if (i.totalRow) {
            Cat.each(e, function (e, i) {
                0 !== i.length && t.eachCols(function (e, t) {
                    var l = t.field || e, n = i[l];
                    t.totalRow && (a[l] = (a[l] || 0) + (parseFloat(n) || 0))
                })
            });
            var l = [];
            t.eachCols(function (e, t) {
                var n = t.field || e,
                    o = ['<td data-field="' + n + '" data-key="' + i.index + "-" + t.key + '" ' + function () {
                        var e = [];
                        return t.align && e.push('align="' + t.align + '"'), t.style && e.push('style="' + t.style + '"'), t.minWidth && e.push('data-minwidth="' + t.minWidth + '"'), e.join(" ")
                    }() + ' class="' + function () {
                        var e = [];
                        return t.hide && e.push(y), t.field || e.push("Cat-Table-col-special"), e.join(" ")
                    }() + '">', '<div class="Cat-Table-cell CatTable-cell-' + function () {
                        var e = i.index + "-" + t.key;
                        return "normal" === t.type ? e : e + " CatTable-cell-" + t.type
                    }() + '">' + function () {
                        var e = t.totalRowText || "";
                        return t.totalRow ? parseFloat(a[n]).toFixed(2) || e : e
                    }(), "</div></td>"].join("");
                l.push(o)
            }), t.CatTotal.find("tbody").html("<tr>" + l.join("") + "</tr>")
        }
    }, F.prototype.getColElem = function (e, t) {
        var i = this, a = i.config;
        return e.eq(0).find(".CatTable-cell-" + (a.index + "-" + t) + ":eq(0)")
    }, F.prototype.renderForm = function (e) {
        n.render(e, "CAT-Table-" + this.index)
    }, F.prototype.setThisRowChecked = function (e) {
        var t = this, i = (t.config, "Cat-Table-click"), a = t.CatBody.find('tr[data-index="' + e + '"]');
        a.addClass(i).siblings("tr").removeClass(i)
    }, F.prototype.sort = function (e, i, a, l) {
        var n, r, c = this, s = {}, h = c.config, y = h.elem.attr("Cat-filter"), f = d.cache[c.key];
        "string" == typeof e && c.CatHeader.find("th").each(function (i, a) {
            var l = t(this), o = l.data("field");
            if (o === e) return e = l, n = o, !1
        });
        try {
            var n = n || e.data("field"), p = e.data("key");
            if (c.sortKey && !a && n === c.sortKey.field && i === c.sortKey.sort) return;
            var v = c.CatHeader.find("th .CatTable-cell-" + p).find(S);
            c.CatHeader.find("th").find(S).removeAttr("Cat-sort"), v.attr("Cat-sort", i || null), c.CatFixed.find("th")
        } catch (m) {
            return o.error("Table modules: Did not match to field")
        }
        c.sortKey = {
            field: n,
            sort: i
        }, h.autoSort && ("asc" === i ? r = Cat.sort(f, n) : "desc" === i ? r = Cat.sort(f, n, !0) : (r = Cat.sort(f, d.config.indexName), delete c.sortKey)), s[h.response.dataName] = r || f, c.renderData(s, c.page, c.count, !0), l && Cat.event.call(e, u, "sort(" + y + ")", {
            field: n,
            type: i
        })
    }, F.prototype.loading = function (e) {
        var i = this, a = i.config;
        a.loading && (e ? (i.CatInit && i.CatInit.remove(), delete i.CatInit, i.CatBox.find(g).remove()) : (i.CatInit = t(['<div class="Cat-Table-init">', '<i class="Cat-icon Cat-icon-loading Cat-icon"></i>', "</div>"].join("")), i.CatBox.append(i.CatInit)))
    }, F.prototype.setCheckData = function (e, t) {
        var i = this, a = i.config, l = d.cache[i.key];
        l[e] && l[e].constructor !== Array && (l[e][a.checkName] = t)
    }, F.prototype.syncCheckAll = function () {
        var e = this, t = e.config, i = e.CatHeader.find('input[name="CatTableCheckbox"]'), a = function (i) {
            return e.eachCols(function (e, a) {
                "checkbox" === a.type && (a[t.checkName] = i)
            }), i
        };
        i[0] && (d.checkStatus(e.key).isAll ? (i[0].checked || (i.prop("checked", !0), e.renderForm("checkbox")), a(!0)) : (i[0].checked && (i.prop("checked", !1), e.renderForm("checkbox")), a(!1)))
    }, F.prototype.getCssRule = function (e, t) {
        var i = this, a = i.elem.find("style")[0], l = a.sheet || a.styleSheet || {}, n = l.cssRules || l.rules;
        Cat.each(n, function (i, a) {
            if (a.selectorText === ".CatTable-cell-" + e) return t(a), !0
        })
    }, F.prototype.fullSize = function () {
        var e, t = this, i = t.config, a = i.height;
        t.fullHeightGap && (a = H.height() - t.fullHeightGap, a < 135 && (a = 135), t.elem.css("height", a)), a && (e = parseFloat(a) - (t.CatHeader.outerHeight() || 38), i.toolbar && (e -= t.CatTool.outerHeight() || 50), i.totalRow && (e -= t.CatTotal.outerHeight() || 40), i.page && (e = e - (t.CatPage.outerHeight() || 41) - 2), t.CatMain.css("height", e))
    }, F.prototype.getScrollWidth = function (e) {
        var t = 0;
        return e ? t = e.offsetWidth - e.clientWidth : (e = document.createElement("div"), e.style.width = "100px", e.style.height = "100px", e.style.overflowY = "scroll", document.body.appendChild(e), t = e.offsetWidth - e.clientWidth, document.body.removeChild(e)), t
    }, F.prototype.scrollPatch = function () {
        var e = this, i = e.CatMain.children("Table"), a = e.CatMain.width() - e.CatMain.prop("clientWidth"),
            l = e.CatMain.height() - e.CatMain.prop("clientHeight"),
            n = (e.getScrollWidth(e.CatMain[0]), i.outerWidth() - e.CatMain.width()), o = function (e) {
                if (a && l) {
                    if (e = e.eq(0), !e.find(".Cat-Table-patch")[0]) {
                        var i = t('<th class="Cat-Table-patch"><div class="Cat-Table-cell"></div></th>');
                        i.find("div").css({width: a}), e.find("tr").append(i)
                    }
                } else e.find(".Cat-Table-patch").remove()
            };
        o(e.CatHeader), o(e.CatTotal);
        var r = e.CatMain.height(), d = r - l;
        e.CatFixed.find(x).css("height", i.height() >= d ? d : "auto"), e.CatFixRight[n > 0 ? "removeClass" : "addClass"](y), e.CatFixRight.css("right", a - 1)
    }, F.prototype.events = function () {
        var e, a = this, o = a.config, c = t("body"), s = {}, h = a.CatHeader.find("th"), f = ".Cat-Table-cell",
            p = o.elem.attr("Cat-filter");
        a.CatTool.on("click", "*[Cat-event]", function (e) {
            var i = t(this), c = i.attr("Cat-event"), s = function (e) {
                var l = t(e.list), n = t('<ul class="Cat-Table-tool-panel"></ul>');
                n.html(l), o.height && n.css("max-height", o.height - (a.CatTool.outerHeight() || 50)), i.find(".Cat-Table-tool-panel")[0] || i.append(n), a.renderForm(), n.on("click", function (e) {
                    Cat.stope(e)
                }), e.done && e.done(n, l)
            };
            switch (Cat.stope(e), R.trigger("Table.tool.panel.remove"), l.close(a.tipsIndex), c) {
                case"CATTABLE_COLS":
                    s({
                        list: function () {
                            var e = [];
                            return a.eachCols(function (t, i) {
                                i.field && "normal" == i.type && e.push('<li><input type="checkbox" name="' + i.field + '" data-key="' + i.key + '" data-parentkey="' + (i.parentKey || "") + '" Cat-skin="primary" ' + (i.hide ? "" : "checked") + ' title="' + (i.title || i.field) + '" Cat-filter="CAT_TABLE_TOOL_COLS"></li>')
                            }), e.join("")
                        }(), done: function () {
                            n.on("checkbox(CAT_TABLE_TOOL_COLS)", function (e) {
                                var i = t(e.elem), l = this.checked, n = i.data("key"), r = i.data("parentkey");
                                Cat.each(o.cols, function (e, t) {
                                    Cat.each(t, function (t, i) {
                                        if (e + "-" + t === n) {
                                            var d = i.hide;
                                            i.hide = !l, a.elem.find('*[data-key="' + o.index + "-" + n + '"]')[l ? "removeClass" : "addClass"](y), d != i.hide && a.setParentCol(!l, r), a.resize()
                                        }
                                    })
                                })
                            })
                        }
                    });
                    break;
                case"CATTABLE_EXPORT":
                    r.ie ? l.tips("导出功能不支持 IE，请用 Chrome 等高级浏览器导出", this, {tips: 3}) : s({
                        list: function () {
                            return ['<li data-type="csv">导出到 Csv 文件</li>', '<li data-type="xls">导出到 Excel 文件</li>'].join("")
                        }(), done: function (e, i) {
                            i.on("click", function () {
                                var e = t(this).data("type");
                                d.exportFile(o.id, null, e)
                            })
                        }
                    });
                    break;
                case"CATTABLE_PRINT":
                    var h = window.open("打印窗口", "_blank"),
                        f = ["<style>", "body{font-size: 12px; color: #666;}", "Table{width: 100%; border-collapse: collapse; border-spacing: 0;}", "th,td{line-height: 20px; padding: 9px 15px; border: 1px solid #ccc; text-align: left; font-size: 12px; color: #666;}", "a{color: #666; text-decoration:none;}", "*.Cat-hide{display: none}", "</style>"].join(""),
                        v = t(a.CatHeader.html());
                    v.append(a.CatMain.find("Table").html()), v.find("th.Cat-Table-patch").remove(), v.find(".Cat-Table-col-special").remove(), h.document.write(f + v.prop("outerHTML")), h.document.close(), h.print(), h.close()
            }
            Cat.event.call(this, u, "toolbar(" + p + ")", t.extend({event: c, config: o}, {}))
        }), h.on("mousemove", function (e) {
            var i = t(this), a = i.offset().left, l = e.clientX - a;
            i.data("unresize") || s.resizeStart || (s.allowResize = i.width() - l <= 10, c.css("cursor", s.allowResize ? "col-resize" : ""))
        }).on("mouseleave", function () {
            t(this);
            s.resizeStart || c.css("cursor", "")
        }).on("mousedown", function (e) {
            var i = t(this);
            if (s.allowResize) {
                var l = i.data("key");
                e.preventDefault(), s.resizeStart = !0, s.offset = [e.clientX, e.clientY], a.getCssRule(l, function (e) {
                    var t = e.style.width || i.outerWidth();
                    s.rule = e, s.ruleWidth = parseFloat(t), s.minWidth = i.data("minwidth") || o.cellMinWidth
                })
            }
        }), R.on("mousemove", function (t) {
            if (s.resizeStart) {
                if (t.preventDefault(), s.rule) {
                    var i = s.ruleWidth + t.clientX - s.offset[0];
                    i < s.minWidth && (i = s.minWidth), s.rule.style.width = i + "px", l.close(a.tipsIndex)
                }
                e = 1
            }
        }).on("mouseup", function (t) {
            s.resizeStart && (s = {}, c.css("cursor", ""), a.scrollPatch()), 2 === e && (e = null)
        }), h.on("click", function (i) {
            var l, n = t(this), o = n.find(S), r = o.attr("Cat-sort");
            return o[0] && 1 !== e ? (l = "asc" === r ? "desc" : "desc" === r ? null : "asc", void a.sort(n, l, null, !0)) : e = 2
        }).find(S + " .Cat-edge ").on("click", function (e) {
            var i = t(this), l = i.index(), n = i.parents("th").eq(0).data("field");
            Cat.stope(e), 0 === l ? a.sort(n, "asc", null, !0) : a.sort(n, "desc", null, !0)
        });
        var v = function (e) {
            var l = t(this), n = l.parents("tr").eq(0).data("index"), o = a.CatBody.find('tr[data-index="' + n + '"]'),
                r = d.cache[a.key][n];
            return t.extend({
                tr: o, data: d.clearCacheKey(r), del: function () {
                    d.cache[a.key][n] = [], o.remove(), a.scrollPatch()
                }, update: function (e) {
                    e = e || {}, Cat.each(e, function (e, l) {
                        if (e in r) {
                            var n, d = o.children('td[data-field="' + e + '"]');
                            r[e] = l, a.eachCols(function (t, i) {
                                i.field == e && i.templet && (n = i.templet)
                            }), d.children(f).html(function () {
                                return n ? function () {
                                    return "function" == typeof n ? n(r) : i(t(n).html() || l).render(r)
                                }() : l
                            }()), d.data("content", l)
                        }
                    })
                }
            }, e)
        };
        a.elem.on("click", 'input[name="CatTableCheckbox"]+', function () {
            var e = t(this).prev(), i = a.CatBody.find('input[name="CatTableCheckbox"]'),
                l = e.parents("tr").eq(0).data("index"), n = e[0].checked,
                o = "CatTableAllChoose" === e.attr("Cat-filter");
            o ? (i.each(function (e, t) {
                t.checked = n, a.setCheckData(e, n)
            }), a.syncCheckAll(), a.renderForm("checkbox")) : (a.setCheckData(l, n), a.syncCheckAll()), Cat.event.call(e[0], u, "checkbox(" + p + ")", v.call(e[0], {
                checked: n,
                type: o ? "all" : "one"
            }))
        }), a.elem.on("click", 'input[Cat-type="CatTableRadio"]+', function () {
            var e = t(this).prev(), i = e[0].checked, l = d.cache[a.key], n = e.parents("tr").eq(0).data("index");
            Cat.each(l, function (e, t) {
                n === e ? t.CAT_CHECKED = !0 : delete t.CAT_CHECKED
            }), a.setThisRowChecked(n), Cat.event.call(this, u, "radio(" + p + ")", v.call(this, {checked: i}))
        }), a.CatBody.on("mouseenter", "tr", function () {
            var e = t(this), i = e.index();
            a.CatBody.find("tr:eq(" + i + ")").addClass(W)
        }).on("mouseleave", "tr", function () {
            var e = t(this), i = e.index();
            a.CatBody.find("tr:eq(" + i + ")").removeClass(W)
        }).on("click", "tr", function () {
            m.call(this, "row")
        }).on("dblclick", "tr", function () {
            m.call(this, "rowDouble")
        });
        var m = function (e) {
            var i = t(this);
            Cat.event.call(this, u, e + "(" + p + ")", v.call(i.children("td")[0]))
        };
        a.CatBody.on("change", "." + N, function () {
            var e = t(this), i = this.value, l = e.parent().data("field"), n = e.parents("tr").eq(0).data("index"),
                o = d.cache[a.key][n];
            o[l] = i, Cat.event.call(this, u, "edit(" + p + ")", v.call(this, {value: i, field: l}))
        }).on("blur", "." + N, function () {
            var e, l = t(this), n = l.parent().data("field"), o = l.parents("tr").eq(0).data("index"),
                r = d.cache[a.key][o];
            a.eachCols(function (t, i) {
                i.field == n && i.templet && (e = i.templet)
            }), l.siblings(f).html(function (a) {
                return e ? function () {
                    return "function" == typeof e ? e(r) : i(t(e).html() || this.value).render(r)
                }() : a
            }(this.value)), l.parent().data("content", this.value), l.remove()
        }), a.CatBody.on("click", "td", function (e) {
            var i = t(this), a = (i.data("field"), i.data("edit")), l = i.children(f);
            if (!i.data("off") && a) {
                var n = t('<input class="Cat-input ' + N + '">');
                return n[0].value = i.data("content") || l.text(), i.find("." + N)[0] || i.append(n), n.focus(), void Cat.stope(e)
            }
        }).on("mouseenter", "td", function () {
            b.call(this)
        }).on("mouseleave", "td", function () {
            b.call(this, "hide")
        });
        var g = "Cat-Table-grid-down", b = function (e) {
            var i = t(this), a = i.children(f);
            if (e) i.find(".Cat-Table-grid-down").remove(); else if (a.prop("scrollWidth") > a.outerWidth()) {
                if (a.find("." + g)[0]) return;
                i.append('<div class="' + g + '"><i class="Cat-icon Cat-icon-down"></i></div>')
            }
        };
        a.CatBody.on("click", "." + g, function (e) {
            var i = t(this), n = i.parent(), d = n.children(f);
            a.tipsIndex = l.tips(['<div class="Cat-Table-tips-main" style="margin-top: -' + (d.height() + 16) + "px;" + function () {
                return "sm" === o.size ? "padding: 4px 15px; font-size: 12px;" : "lg" === o.size ? "padding: 14px 15px;" : ""
            }() + '">', d.html(), "</div>", '<i class="Cat-icon Cat-Table-tips-c Cat-icon-close"></i>'].join(""), d[0], {
                tips: [3, ""],
                time: -1,
                anim: -1,
                maxWidth: r.ios || r.android ? 300 : a.elem.width() / 2,
                isOutAnim: !1,
                skin: "Cat-Table-tips",
                success: function (e, t) {
                    e.find(".Cat-Table-tips-c").on("click", function () {
                        l.close(t)
                    })
                }
            }), Cat.stope(e)
        }), a.CatBody.on("click", "*[Cat-event]", function () {
            var e = t(this), i = e.parents("tr").eq(0).data("index");
            Cat.event.call(this, u, "tool(" + p + ")", v.call(this, {event: e.attr("Cat-event")})), a.setThisRowChecked(i)
        }), a.CatMain.on("scroll", function () {
            var e = t(this), i = e.scrollLeft(), n = e.scrollTop();
            a.CatHeader.scrollLeft(i), a.CatTotal.scrollLeft(i), a.CatFixed.find(x).scrollTop(n), l.close(a.tipsIndex)
        }), R.on("click", function () {
            R.trigger("Table.remove.tool.panel")
        }), R.on("Table.remove.tool.panel", function () {
            t(".Cat-Table-tool-panel").remove()
        }), H.on("resize", function () {
            a.resize()
        })
    }, d.init = function (e, i) {
        i = i || {};
        var a = this, l = t(e ? 'Table[Cat-filter="' + e + '"]' : h + "[Cat-data]"),
            n = "Table element property Cat-data configuration item has a syntax error: ";
        return l.each(function () {
            var a = t(this), l = a.attr("Cat-data");
            try {
                l = new Function("return " + l)()
            } catch (r) {
                o.error(n + l)
            }
            var c = [], s = t.extend({
                elem: this,
                cols: [],
                data: [],
                skin: a.attr("Cat-skin"),
                size: a.attr("Cat-size"),
                even: "string" == typeof a.attr("Cat-even")
            }, d.config, i, l);
            e && a.hide(), a.find("thead>tr").each(function (e) {
                s.cols[e] = [], t(this).children().each(function (i) {
                    var a = t(this), l = a.attr("Cat-data");
                    try {
                        l = new Function("return " + l)()
                    } catch (r) {
                        return o.error(n + l)
                    }
                    var d = t.extend({
                        title: a.text(),
                        colspan: a.attr("colspan") || 0,
                        rowspan: a.attr("rowspan") || 0
                    }, l);
                    d.colspan < 2 && c.push(d), s.cols[e].push(d)
                })
            }), a.find("tbody>tr").each(function (e) {
                var i = t(this), a = {};
                i.children("td").each(function (e, i) {
                    var l = t(this), n = l.data("field");
                    if (n) return a[n] = l.html()
                }), Cat.each(c, function (e, t) {
                    var l = i.children("td").eq(e);
                    a[t.field] = l.html()
                }), s.data[e] = a
            }), d.render(s)
        }), a
    }, c.that = {}, c.config = {}, d.eachCols = function (e, i, a) {
        var l = c.config[e] || {}, n = [], o = 0;
        a = t.extend(!0, [], a || l.cols), Cat.each(a, function (e, t) {
            Cat.each(t, function (t, i) {
                if (i.colGroup) {
                    var l = 0;
                    o++, i.CHILD_COLS = [], Cat.each(a[e + 1], function (e, t) {
                        t.PARENT_COL_INDEX || l > 1 && l == i.colspan || (t.PARENT_COL_INDEX = o, i.CHILD_COLS.push(t), l += parseInt(t.colspan > 1 ? t.colspan : 1))
                    })
                }
                i.PARENT_COL_INDEX || n.push(i)
            })
        });
        var r = function (e) {
            Cat.each(e || n, function (e, t) {
                return t.CHILD_COLS ? r(t.CHILD_COLS) : void ("function" == typeof i && i(e, t))
            })
        };
        r()
    }, d.checkStatus = function (e) {
        var t = 0, i = 0, a = [], l = d.cache[e] || [];
        return Cat.each(l, function (e, l) {
            return l.constructor === Array ? void i++ : void (l[d.config.checkName] && (t++, a.push(d.clearCacheKey(l))))
        }), {data: a, isAll: !!l.length && t === l.length - i}
    }, d.exportFile = function (e, t, i) {
        t = t || d.clearCacheKey(d.cache[e]), i = i || "csv";
        var a = c.config[e] || {}, l = {csv: "text/csv", xls: "application/vnd.ms-excel"}[i],
            n = document.createElement("a");
        return r.ie ? o.error("IE_NOT_SUPPORT_EXPORTS") : (n.href = "data:" + l + ";charset=utf-8,\ufeff" + encodeURIComponent(function () {
            var i = [], a = [];
            return Cat.each(t, function (t, l) {
                var n = [];
                "object" == typeof e ? (Cat.each(e, function (e, a) {
                    0 == t && i.push(a || "")
                }), Cat.each(d.clearCacheKey(l), function (e, t) {
                    n.push(t)
                })) : d.eachCols(e, function (e, a) {
                    a.field && "normal" == a.type && !a.hide && (0 == t && i.push(a.title || ""), n.push(l[a.field]))
                }), a.push(n.join(","))
            }), i.join(",") + "\r\n" + a.join("\r\n")
        }()), n.download = (a.title || "Table_" + (a.index || "")) + "." + i, document.body.appendChild(n), n.click(), void document.body.removeChild(n))
    }, d.resize = function (e) {
        if (e) {
            var t = s(e);
            if (!t) return;
            c.that[e].resize()
        } else Cat.each(c.that, function () {
            this.resize()
        })
    }, d.reload = function (e, i) {
        i = i || {};
        var a = s(e);
        if (a) return i.data && i.data.constructor === Array && delete a.data, d.render(t.extend(!0, {}, a, i))
    }, d.render = function (e) {
        var t = new F(e);
        return c.call(t)
    }, d.clearCacheKey = function (e) {
        return e = t.extend({}, e), delete e[d.config.checkName], delete e[d.config.indexName], e
    }, d.init(), e(u, d)
});