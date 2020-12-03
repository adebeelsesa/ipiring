(this.webpackJsonpsrc = this.webpackJsonpsrc || []).push([
    [0],
    {
        26: function (e, t, r) {},
        27: function (e, t, r) {},
        37: function (e, t, r) {
            "use strict";
            r.r(t);
            var n = r(2),
                c = r(1),
                s = r.n(c),
                i = r(11),
                a = r.n(i),
                d = (r(26), r(17)),
                o = r(10),
                l = (r(27), r(7)),
                j = r.n(l),
                b = r(40),
                f = r(41),
                m = r(42),
                h = r(43),
                u = r(44),
                x = r(45),
                O = r(53),
                g = r(46),
                p = r(47),
                y = r(48),
                v = r(49),
                w = r(50),
                H = r(51),
                N = r(9),
                A = r(16),
                S = Object(A.b)({
                    name: "orders",
                    initialState: [],
                    reducers: {
                        addOrder: function (e, t) {
                            e.push(t.payload);
                        },
                        editOrder: function (e, t) {
                            e[t.payload.key] = t.payload.value;
                        },
                    },
                }),
                D = Object(A.a)({ reducer: { orders: S.reducer } }),
                E = S.actions,
                k = E.addOrder,
                C = E.editOrder,
                z = D,
                F = r(52);
            var I = function () {
                    var e = Object(c.useState)(!1),
                        t = Object(o.a)(e, 2),
                        r = t[0],
                        s = t[1],
                        i = Object(N.c)(function (e) {
                            return e.orders;
                        }),
                        a = Object(N.b)(),
                        l = Object(c.useState)(""),
                        A = Object(o.a)(l, 2),
                        S = A[0],
                        D = A[1],
                        E = Object(c.useState)(1),
                        z = Object(o.a)(E, 2),
                        I = z[0],
                        P = z[1],
                        M = Object(c.useState)(1),
                        R = Object(o.a)(M, 2),
                        T = R[0],
                        B = R[1],
                        Y = function (e) {
                            var t,
                                r = Object(d.a)(e);
                            try {
                                for (r.s(); !(t = r.n()).done; ) {
                                    var n = t.value;
                                    a(k(n));
                                }
                            } catch (c) {
                                r.e(c);
                            } finally {
                                r.f();
                            }
                        };
                    return (
                        Object(c.useEffect)(
                            function () {
                                r ||
                                    (fetch("api.json")
                                        .then(function (e) {
                                            return e.json();
                                        })
                                        .then(function (e) {
                                            B(Math.ceil(e.length / 4));
                                            var t = function (e) {
                                                    var t = e.split(":").map(function (e) {
                                                        return parseInt(e);
                                                    });
                                                    return 60 * t[0] + t[1];
                                                },
                                                r = e.sort(function (e, r) {
                                                    return t(e.orderAt) - t(r.orderAt);
                                                });
                                            Y(
                                                r.map(function (e) {
                                                    var t = e;
                                                    return (
                                                        (t.ready = !1),
                                                        j()() < j()(t.orderAt, "HH:mm")
                                                            ? ((t.orderStatus = !0), (t.orderDiff = j()(t.orderAt, "HH:mm").toNow(!0)))
                                                            : ((t.orderStatus = !1), (t.orderDiff = j()(t.orderAt, "HH:mm").fromNow(!0))),
                                                        t
                                                    );
                                                })
                                            );
                                        }),
                                    setInterval(function () {
                                        D(j()().format("HH:mm:ss")),
                                            Y(
                                                i.map(function (e, t, r) {
                                                    var n = e;
                                                    j()() < j()(n.orderAt, "HH:mm") ? ((n.orderStatus = !0), (n.orderDiff = j()(n.orderAt, "HH:mm").toNow(!0))) : ((n.orderStatus = !1), (n.orderDiff = j()(n.orderAt, "HH:mm").fromNow(!0))),
                                                        a(C({ key: t, value: n }));
                                                })
                                            );
                                    }, 1e3),
                                    s(!0));
                            },
                            [r]
                        ),
                        Object(n.jsxs)("div", {
                            className: "App",
                            children: [
                                !i.length &&
                                    Object(n.jsxs)("div", {
                                        className: "position-fixed h-100 w-100 d-flex align-items-center justify-content-center",
                                        style: { top: 0, left: 0 },
                                        children: [Object(n.jsx)(b.a, { type: "grow", color: "danger" }), Object(n.jsx)(b.a, { type: "grow", color: "warning", className: "px-2" }), Object(n.jsx)(b.a, { type: "grow", color: "danger" })],
                                    }),
                                Object(n.jsx)(f.a, {
                                    expand: "md",
                                    color: "dark",
                                    className: "w-100",
                                    children: Object(n.jsxs)(m.a, {
                                        className: "text-white d-flex align-items-center justify-content-between w-100",
                                        children: [
                                            Object(n.jsx)(h.a, { children: Object(n.jsx)(u.a, { children: Object(n.jsx)(F.a, { src: "ipiring.png", width: 100 }) }) }),
                                            Object(n.jsx)(h.a, {
                                                children: Object(n.jsxs)("div", {
                                                    children: [
                                                        Object(n.jsx)("div", { children: S }),
                                                        Object(n.jsxs)(x.a, {
                                                            color: "light",
                                                            style: { fontSize: 14 },
                                                            children: [
                                                                i.filter(function (e) {
                                                                    return e.ready;
                                                                }).length,
                                                                " Order Finished",
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                            }),
                                            Object(n.jsx)(h.a, {
                                                className: "d-flex align-items-center",
                                                children: Object(n.jsxs)("div", {
                                                    children: [
                                                        Object(n.jsxs)("div", { className: "mx-3", children: ["Page ", I, " of ", T] }),
                                                        Object(n.jsxs)(O.a, {
                                                            className: "mx-1",
                                                            onClick: function () {
                                                                I > 1 && P(I - 1);
                                                            },
                                                            disabled: I <= 1,
                                                            children: ["<", " Prev"],
                                                        }),
                                                        Object(n.jsxs)(O.a, {
                                                            onClick: function () {
                                                                I < T && P(I + 1);
                                                            },
                                                            disabled: I >= T,
                                                            children: ["Next ", ">"],
                                                        }),
                                                    ],
                                                }),
                                            }),
                                        ],
                                    }),
                                }),
                                Object(n.jsx)("div", {
                                    className: "container-fluid py-2 bg-light",
                                    children: Object(n.jsx)(g.a, {
                                        children: i
                                            .filter(function (e) {
                                                return !e.ready;
                                            })
                                            .filter(function (e, t, r) {
                                                return t < 4 * I && t >= 4 * (I - 1);
                                            })
                                            .map(function (e) {
                                                return Object(n.jsx)(p.a, {
                                                    sm: 12,
                                                    md: 6,
                                                    lg: 3,
                                                    className: "py-2",
                                                    children: Object(n.jsxs)(y.a, {
                                                        style: { minHeight: 450 },
                                                        color: j()() < j()(e.orderAt, "HH:mm") ? "success" : "danger",
                                                        children: [
                                                            Object(n.jsxs)(v.a, { className: "text-left  text-white font-weight-bold", children: ["Order ID #", e.id] }),
                                                            Object(n.jsx)(w.a, {
                                                                className: "bg-light text-left p-2",
                                                                children: e.items.map(function (t) {
                                                                    return Object(n.jsx)(g.a, {
                                                                        className: "border-bottom pt-3 pb-1",
                                                                        children: Object(n.jsxs)(p.a, {
                                                                            children: [
                                                                                Object(n.jsxs)("div", {
                                                                                    className: "d-flex justify-content-between",
                                                                                    children: [
                                                                                        Object(n.jsxs)("h6", { className: "font-weight-bold", children: [t.name, " ", Object(n.jsx)("small", { children: t.varian })] }),
                                                                                        Object(n.jsx)("div", {
                                                                                            children: Object(n.jsx)(x.a, { color: j()() < j()(e.orderAt, "HH:mm") ? "success" : "danger", style: { fontSize: 18 }, children: t.quantity }),
                                                                                        }),
                                                                                    ],
                                                                                }),
                                                                                t.extra.length
                                                                                    ? Object(n.jsxs)("span", { className: "text-muted", style: { fontSize: 12 }, children: ["Extra:", t.extra.join(",")] })
                                                                                    : Object(n.jsx)(n.Fragment, {}),
                                                                            ],
                                                                        }),
                                                                    });
                                                                }),
                                                            }),
                                                            Object(n.jsxs)(H.a, {
                                                                children: [
                                                                    Object(n.jsxs)("div", {
                                                                        className: "d-flex justify-content-between text-white font-weight-bold",
                                                                        children: [
                                                                            Object(n.jsxs)("div", {
                                                                                className: "text-left",
                                                                                children: [
                                                                                    Object(n.jsx)("small", { style: { fontSize: 10 }, children: "ORDER ACCEPTED AT" }),
                                                                                    Object(n.jsx)("br", {}),
                                                                                    Object(n.jsx)("p", { style: { fontSize: 11 }, children: j()(e.orderAt, "HH:mm").format("HH:mm") }),
                                                                                ],
                                                                            }),
                                                                            Object(n.jsxs)("div", {
                                                                                className: "text-right",
                                                                                children: [
                                                                                    Object(n.jsx)("small", { style: { fontSize: 10 }, children: j()() < j()(e.orderAt, "HH:mm") ? "TO BE READY IN" : "DELAYED BY" }),
                                                                                    Object(n.jsx)("br", {}),
                                                                                    Object(n.jsx)("p", { style: { fontSize: 11 }, children: j()(e.orderAt, "HH:mm").fromNow(!0) }),
                                                                                ],
                                                                            }),
                                                                        ],
                                                                    }),
                                                                    Object(n.jsx)(O.a, {
                                                                        onClick: function () {
                                                                            return (function (e) {
                                                                                for (var t in i)
                                                                                    if (i.hasOwnProperty(t) && i[t].id === e) {
                                                                                        var r = {};
                                                                                        Object.assign(r, i[t]), (r.ready = !0), a(C({ key: t, value: r }));
                                                                                    }
                                                                                var n = i.filter(function (e) {
                                                                                    return !e.ready;
                                                                                }).length;
                                                                                B(Math.round(n / 4)), Math.round(n / 4) < I && P(I - 1);
                                                                            })(e.id);
                                                                        },
                                                                        className: j()() < j()(e.orderAt, "HH:mm") ? "w-100 font-weight-bold text-success" : "w-100 font-weight-bold text-danger",
                                                                        color: "light",
                                                                        children: "MARK AS READY",
                                                                    }),
                                                                ],
                                                            }),
                                                        ],
                                                    }),
                                                });
                                            }),
                                    }),
                                }),
                            ],
                        })
                    );
                },
                P = function (e) {
                    e &&
                        e instanceof Function &&
                        r
                            .e(3)
                            .then(r.bind(null, 54))
                            .then(function (t) {
                                var r = t.getCLS,
                                    n = t.getFID,
                                    c = t.getFCP,
                                    s = t.getLCP,
                                    i = t.getTTFB;
                                r(e), n(e), c(e), s(e), i(e);
                            });
                };
            r(36);
            a.a.render(Object(n.jsx)(s.a.StrictMode, { children: Object(n.jsx)(N.a, { store: z, children: Object(n.jsx)(I, {}) }) }), document.getElementById("root")), P();
        },
    },
    [[37, 1, 2]],
]);
//# sourceMappingURL=main.473f1e47.chunk.js.map
