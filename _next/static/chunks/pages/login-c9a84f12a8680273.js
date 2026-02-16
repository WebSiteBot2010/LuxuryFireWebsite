(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[459], {
    5170: function(e, i, s) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/login", function() {
            return s(204)
        }
        ])
    },
    204: function(e, i, s) {
        "use strict";
        s.r(i),
        s.d(i, {
            default: function() {
                return LoginPage
            }
        });
        var a = s(7458)
          , n = s(2983)
          , t = s(5090)
          , o = s.n(t);
        let c = {
            en: {
                heroTitle: "Access your dashboard in seconds",
                heroSubtitle: "Secure authentication via Discord. Manage your servers with a modern, intuitive interface.",
                loginTitle: "Sign in to Rippy",
                loginBadge: "v1.0",
                cta: "Continue with Discord",
                ctaLogged: "Open Dashboard",
                note: "We only request the permissions needed to show your manageable servers.",
                noteLogged: e => "Welcome back, ".concat(e, "! Ready to manage your servers."),
                ctaHint: "Secure OAuth2 authentication",
                ctaItems: ["Read-only access", "No password stored", "EU hosted"],
                footerRights: "\xa9 2026 Rippy — All rights reserved",
                footerLinks: [{
                    label: "Support",
                    href: "https://discord.rippylabs.it/"
                }, {
                    label: "Docs",
                    href: "https://docs.rippylabs.it/"
                }],
                features: [{
                    icon: "\uD83D\uDD12",
                    title: "Secure",
                    desc: "OAuth2 Discord authentication"
                }, {
                    icon: "⚡",
                    title: "Fast",
                    desc: "Instant access to your servers"
                }, {
                    icon: "\uD83C\uDF0D",
                    title: "EU Hosted",
                    desc: "GDPR compliant infrastructure"
                }],
                secureBadge: "Secure Login"
            },
            it: {
                heroTitle: "Accedi alla dashboard in pochi secondi",
                heroSubtitle: "Autenticazione sicura tramite Discord. Gestisci i tuoi server con un'interfaccia moderna e intuitiva.",
                loginTitle: "Accedi a Rippy",
                loginBadge: "v1.0",
                cta: "Continua con Discord",
                ctaLogged: "Apri Dashboard",
                note: "Richiediamo solo i permessi necessari per mostrare i server gestibili.",
                noteLogged: e => "Bentornato, ".concat(e, "! Pronto a gestire i tuoi server."),
                ctaHint: "Autenticazione OAuth2 sicura",
                ctaItems: ["Accesso in sola lettura", "Nessuna password salvata", "Server in EU"],
                footerRights: "\xa9 2026 Rippy — Tutti i diritti riservati",
                footerLinks: [{
                    label: "Supporto",
                    href: "https://discord.rippylabs.it/"
                }, {
                    label: "Documentazione",
                    href: "https://docs.rippylabs.it/"
                }, {
                    label: "Privacy Policy",
                    href: "/privacy"
                }],
                features: [{
                    icon: "\uD83D\uDD12",
                    title: "Sicuro",
                    desc: "Autenticazione OAuth2 Discord"
                }, {
                    icon: "⚡",
                    title: "Veloce",
                    desc: "Accesso istantaneo ai tuoi server"
                }, {
                    icon: "\uD83C\uDF0D",
                    title: "Server EU",
                    desc: "Infrastruttura conforme GDPR"
                }],
                secureBadge: "Login Sicuro"
            }
        };
        function LoginPage() {
            var e;
            let[i,s] = (0,
            n.useState)(null)
              , [t,l] = (0,
            n.useState)("muted")
              , [r,d] = (0,
            n.useState)("it")
              , [u,g] = (0,
            n.useState)(null)
              , [h,m] = (0,
            n.useState)(!0);
            async function handleLogout() {
                await fetch("/api/auth/logout", {
                    method: "POST"
                }),
                g(null),
                s(null)
            }
            (0,
            n.useEffect)( () => {
                let e = "undefined" != typeof navigator && navigator.language || "it";
                e.startsWith("en") && d("en")
            }
            , []),
            (0,
            n.useEffect)( () => {
                (async function() {
                    try {
                        let e = await fetch("/api/auth/me");
                        if (e.ok) {
                            let i = await e.json();
                            g(i.user)
                        } else
                            g(null)
                    } catch (e) {
                        g(null)
                    } finally {
                        m(!1)
                    }
                }
                )()
            }
            , []);
            let p = u ? u.avatar ? "https://cdn.discordapp.com/avatars/".concat(u.id, "/").concat(u.avatar, ".png?size=128") : "https://cdn.discordapp.com/embed/avatars/".concat(Number(u.discriminator || "0") % 5, ".png") : null
              , _ = c[r];
            return (0,
            a.jsxs)("div", {
                className: "login-page",
                children: [(0,
                a.jsx)("div", {
                    className: "landing-glow landing-glow--1"
                }), (0,
                a.jsx)("div", {
                    className: "landing-glow landing-glow--2"
                }), (0,
                a.jsx)("header", {
                    className: "login-header",
                    children: (0,
                    a.jsxs)("div", {
                        className: "login-header__inner",
                        children: [(0,
                        a.jsxs)(o(), {
                            href: "/",
                            className: "login-header__brand",
                            children: [(0,
                            a.jsx)("img", {
                                src: "/rippy-logo.jpg",
                                alt: "Rippy",
                                className: "login-header__logo"
                            }), (0,
                            a.jsxs)("div", {
                                className: "login-header__brand-text",
                                children: [(0,
                                a.jsx)("span", {
                                    className: "login-header__name",
                                    children: "Rippy"
                                }), (0,
                                a.jsx)("span", {
                                    className: "login-header__tagline",
                                    children: "Your Next Smart Move"
                                })]
                            })]
                        }), (0,
                        a.jsx)("div", {
                            className: "login-header__actions",
                            children: (0,
                            a.jsxs)("div", {
                                className: "landing-lang-switch",
                                children: [(0,
                                a.jsx)("button", {
                                    type: "button",
                                    className: "it" === r ? "landing-lang-btn active" : "landing-lang-btn",
                                    onClick: () => d("it"),
                                    children: "IT"
                                }), (0,
                                a.jsx)("button", {
                                    type: "button",
                                    className: "en" === r ? "landing-lang-btn active" : "landing-lang-btn",
                                    onClick: () => d("en"),
                                    children: "EN"
                                })]
                            })
                        })]
                    })
                }), (0,
                a.jsx)("main", {
                    className: "login-main",
                    children: (0,
                    a.jsxs)("div", {
                        className: "login-content",
                        children: [(0,
                        a.jsxs)("div", {
                            className: "login-info",
                            children: [(0,
                            a.jsxs)("span", {
                                className: "login-secure-badge",
                                children: [(0,
                                a.jsx)("span", {
                                    className: "login-secure-badge__dot"
                                }), _.secureBadge]
                            }), (0,
                            a.jsx)("h1", {
                                className: "login-info__title",
                                children: _.heroTitle
                            }), (0,
                            a.jsx)("p", {
                                className: "login-info__subtitle",
                                children: _.heroSubtitle
                            }), (0,
                            a.jsx)("div", {
                                className: "login-features",
                                children: _.features.map(e => (0,
                                a.jsxs)("div", {
                                    className: "login-feature",
                                    children: [(0,
                                    a.jsx)("span", {
                                        className: "login-feature__icon",
                                        children: e.icon
                                    }), (0,
                                    a.jsxs)("div", {
                                        children: [(0,
                                        a.jsx)("div", {
                                            className: "login-feature__title",
                                            children: e.title
                                        }), (0,
                                        a.jsx)("div", {
                                            className: "login-feature__desc",
                                            children: e.desc
                                        })]
                                    })]
                                }, e.title))
                            })]
                        }), (0,
                        a.jsxs)("div", {
                            className: "login-card",
                            children: [(0,
                            a.jsxs)("div", {
                                className: "login-card__header",
                                children: [(0,
                                a.jsx)("h2", {
                                    className: "login-card__title",
                                    children: _.loginTitle
                                }), (0,
                                a.jsx)("span", {
                                    className: "login-card__badge",
                                    children: _.loginBadge
                                })]
                            }), (0,
                            a.jsxs)("button", {
                                type: "button",
                                className: "login-discord-btn",
                                onClick: function() {
                                    if (u) {
                                        window.location.href = "/dashboard";
                                        return
                                    }
                                    s("it" === r ? "Reindirizzamento a Discord..." : "Redirecting to Discord..."),
                                    l("muted"),
                                    window.location.href = "/api/auth/discord"
                                },
                                disabled: h,
                                children: [(0,
                                a.jsx)("svg", {
                                    className: "login-discord-btn__icon",
                                    viewBox: "0 0 24 24",
                                    fill: "currentColor",
                                    children: (0,
                                    a.jsx)("path", {
                                        d: "M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"
                                    })
                                }), u ? _.ctaLogged : _.cta]
                            }), (0,
                            a.jsxs)("div", {
                                className: "login-card__hint",
                                children: [(0,
                                a.jsx)("span", {
                                    className: "login-card__hint-dot"
                                }), _.ctaHint]
                            }), (0,
                            a.jsx)("div", {
                                className: "login-card__chips",
                                children: _.ctaItems.map(e => (0,
                                a.jsx)("span", {
                                    className: "login-card__chip",
                                    children: e
                                }, e))
                            }), (0,
                            a.jsx)("p", {
                                className: "login-card__note",
                                children: u ? _.noteLogged(u.username) : _.note
                            }), u && (0,
                            a.jsxs)("div", {
                                className: "login-session",
                                children: [(0,
                                a.jsxs)("div", {
                                    className: "login-session__user",
                                    children: [(0,
                                    a.jsx)("div", {
                                        className: "login-session__avatar",
                                        children: p ? (0,
                                        a.jsx)("img", {
                                            src: p,
                                            alt: u.username
                                        }) : null === (e = u.username[0]) || void 0 === e ? void 0 : e.toUpperCase()
                                    }), (0,
                                    a.jsxs)("div", {
                                        className: "login-session__info",
                                        children: [(0,
                                        a.jsx)("div", {
                                            className: "login-session__name",
                                            children: u.username
                                        }), (0,
                                        a.jsx)("div", {
                                            className: "login-session__provider",
                                            children: "Discord"
                                        })]
                                    })]
                                }), (0,
                                a.jsx)("button", {
                                    type: "button",
                                    className: "login-session__logout",
                                    onClick: handleLogout,
                                    children: "it" === r ? "Esci" : "Log out"
                                })]
                            }), i && (0,
                            a.jsx)("p", {
                                className: "login-card__message login-card__message--".concat(t),
                                children: i
                            })]
                        })]
                    })
                }), (0,
                a.jsx)("footer", {
                    className: "login-footer",
                    children: (0,
                    a.jsxs)("div", {
                        className: "login-footer__inner",
                        children: [(0,
                        a.jsx)("div", {
                            className: "login-footer__copy",
                            children: _.footerRights
                        }), (0,
                        a.jsx)("div", {
                            className: "login-footer__links",
                            children: _.footerLinks.map(e => (0,
                            a.jsx)("a", {
                                href: e.href,
                                target: "_blank",
                                rel: "noreferrer",
                                children: e.label
                            }, e.label))
                        })]
                    })
                })]
            })
        }
    }
}, function(e) {
    e.O(0, [90, 774, 888, 179], function() {
        return e(e.s = 5170)
    }),
    _N_E = e.O()
}
]);
