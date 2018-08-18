/*!-----------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.7.3(14ab24ad53d8d969e86bae0096ecc3b954d0faa0)
 * Released under the MIT license
 * https://github.com/Microsoft/vscode/blob/master/LICENSE.txt
 *-----------------------------------------------------------*/
"use strict";
var _amdLoaderGlobal = this,
    define, AMDLoader;
!
    function (e) {
        function t() {
            return !!("undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.indexOf("Windows") >= 0) || "undefined" != typeof process && "win32" === process.platform
        }
        function n() {
            return R ? A.performance.now() : Date.now()
        }
        function o() {
            v = "function" == typeof A.importScripts,
                m = "undefined" != typeof process && "undefined" != typeof process.versions && "undefined" != typeof process.versions.electron && "renderer" === process.type,
                M = "undefined" != typeof process && "undefined" != typeof process.versions && "undefined" != typeof process.versions.electron && "browser" === process.type,
                D = "undefined" != typeof module && !! module.exports,
                E = new C(v ? new k : D ? new w : new S),
                b = new y(E),
                E.setModuleManager(b)
        }
        function r() {
            D || (A.console || (A.console = {}), A.console.log || (A.console.log = function () {}), A.console.warn || (A.console.warn = A.console.log), A.console.error || (A.console.error = A.console.log))
        }
        function i() {
            v || D || (window.onload = function () {
                var e, t, n, o = document.getElementsByTagName("script");
                for (e = 0, t = o.length; e < t && !(n = o[e].getAttribute("data-main")); e++);
                n && b.defineModule(d.generateAnonymousModule(), [n], null, null, null, new c(new a, ""))
            })
        }
        function s() {
            if (o(), r(), i(), D) {
                var e = A.require || require,
                    t = function (t) {
                        b.getRecorder().record(h.NodeBeginNativeRequire, t);
                        var n = e(t);
                        return b.getRecorder().record(h.NodeEndNativeRequire, t),
                            n
                    };
                A.nodeRequire = t,
                    O.nodeRequire = t
            }
            D && !m ? (module.exports = O, define = function () {
                I.apply(null, arguments)
            }, require = O) : ("undefined" != typeof A.require && "function" != typeof A.require && O.config(A.require), m ? define = function () {
                I.apply(null, arguments)
            } : A.define = define = I, A.require = O, A.require.__$__nodeRequire = t)
        }
        var u = t(),
            d = function () {
                function e() {}
                return e.fileUriToFilePath = function (e) {
                    if (e = decodeURI(e), u) {
                        if (/^file:\/\/\//.test(e)) return e.substr(8);
                        if (/^file:\/\//.test(e)) return e.substr(5)
                    } else if (/^file:\/\//.test(e)) return e.substr(7);
                    return e
                },
                    e.startsWith = function (e, t) {
                        return e.length >= t.length && e.substr(0, t.length) === t
                    },
                    e.endsWith = function (e, t) {
                        return e.length >= t.length && e.substr(e.length - t.length) === t
                    },
                    e.containsQueryString = function (e) {
                        return /^[^\#]*\?/gi.test(e)
                    },
                    e.isAbsolutePath = function (t) {
                        return e.startsWith(t, "http://") || e.startsWith(t, "https://") || e.startsWith(t, "file://") || e.startsWith(t, "/")
                    },
                    e.forEachProperty = function (e, t) {
                        if (e) {
                            var n;
                            for (n in e) e.hasOwnProperty(n) && t(n, e[n])
                        }
                    },
                    e.isEmpty = function (t) {
                        var n = !0;
                        return e.forEachProperty(t, function () {
                            n = !1
                        }),
                            n
                    },
                    e.isArray = function (e) {
                        return Array.isArray ? Array.isArray(e) : "[object Array]" === Object.prototype.toString.call(e)
                    },
                    e.recursiveClone = function (t) {
                        if (!t || "object" != typeof t) return t;
                        var n = e.isArray(t) ? [] : {};
                        return e.forEachProperty(t, function (t, o) {
                            o && "object" == typeof o ? n[t] = e.recursiveClone(o) : n[t] = o
                        }),
                            n
                    },
                    e.generateAnonymousModule = function () {
                        return "===anonymous" + e.NEXT_ANONYMOUS_ID+++"==="
                    },
                    e.isAnonymousModule = function (e) {
                        return 0 === e.indexOf("===anonymous")
                    },
                    e.NEXT_ANONYMOUS_ID = 1,
                    e
            }();
        e.Utilities = d;
        var l = function () {
            function e() {}
            return e.validateConfigurationOptions = function (e) {
                function t(e) {
                    return "load" === e.errorCode ? (console.error('Loading "' + e.moduleId + '" failed'), console.error("Detail: ", e.detail), e.detail && e.detail.stack && console.error(e.detail.stack), console.error("Here are the modules that depend on it:"), void console.error(e.neededBy)) : "factory" === e.errorCode ? (console.error('The factory method of "' + e.moduleId + '" has thrown an exception'), console.error(e.detail), void(e.detail && e.detail.stack && console.error(e.detail.stack))) : void 0
                }
                return e = e || {},
                "string" != typeof e.baseUrl && (e.baseUrl = ""),
                "boolean" != typeof e.isBuild && (e.isBuild = !1),
                "object" != typeof e.paths && (e.paths = {}),
                "object" != typeof e.bundles && (e.bundles = []),
                "object" != typeof e.shim && (e.shim = {}),
                "object" != typeof e.config && (e.config = {}),
                "undefined" == typeof e.catchError && (e.catchError = v),
                "string" != typeof e.urlArgs && (e.urlArgs = ""),
                "function" != typeof e.onError && (e.onError = t),
                "object" == typeof e.ignoreDuplicateModules && d.isArray(e.ignoreDuplicateModules) || (e.ignoreDuplicateModules = []),
                e.baseUrl.length > 0 && (d.endsWith(e.baseUrl, "/") || (e.baseUrl += "/")),
                Array.isArray(e.nodeModules) || (e.nodeModules = []),
                    e
            },
                e.mergeConfigurationOptions = function (t, n) {
                    void 0 === t && (t = null),
                    void 0 === n && (n = null);
                    var o = d.recursiveClone(n || {});
                    return d.forEachProperty(t, function (e, t) {
                        "bundles" === e && "undefined" != typeof o.bundles ? d.isArray(t) ? o.bundles = o.bundles.concat(t) : d.forEachProperty(t, function (e, t) {
                            var n = {
                                location: e,
                                modules: t
                            };
                            o.bundles.push(n)
                        }) : "ignoreDuplicateModules" === e && "undefined" != typeof o.ignoreDuplicateModules ? o.ignoreDuplicateModules = o.ignoreDuplicateModules.concat(t) : "paths" === e && "undefined" != typeof o.paths ? d.forEachProperty(t, function (e, t) {
                            return o.paths[e] = t
                        }) : "shim" === e && "undefined" != typeof o.shim ? d.forEachProperty(t, function (e, t) {
                            return o.shim[e] = t
                        }) : "config" === e && "undefined" != typeof o.config ? d.forEachProperty(t, function (e, t) {
                            return o.config[e] = t
                        }) : o[e] = d.recursiveClone(t)
                    }),
                        e.validateConfigurationOptions(o)
                },
                e
        }();
        e.ConfigurationOptionsUtil = l;
        var a = function () {
            function e(e) {
                if (this.options = l.mergeConfigurationOptions(e), this._createIgnoreDuplicateModulesMap(), this._createSortedPathsRules(), this._createShimModules(), this._createOverwriteModuleIdToPath(), "" === this.options.baseUrl) {
                    if (D && this.options.nodeRequire && this.options.nodeRequire.main && this.options.nodeRequire.main.filename) {
                        var t = this.options.nodeRequire.main.filename,
                            n = Math.max(t.lastIndexOf("/"), t.lastIndexOf("\\"));
                        this.options.baseUrl = t.substring(0, n + 1)
                    }
                    if (D && this.options.nodeMain) {
                        var t = this.options.nodeMain,
                            n = Math.max(t.lastIndexOf("/"), t.lastIndexOf("\\"));
                        this.options.baseUrl = t.substring(0, n + 1)
                    }
                }
            }
            return e.prototype._createOverwriteModuleIdToPath = function () {
                this.overwriteModuleIdToPath = {};
                for (var e = 0; e < this.options.bundles.length; e++) {
                    var t = this.options.bundles[e],
                        n = t.location;
                    if (t.modules) for (var o = 0; o < t.modules.length; o++) this.overwriteModuleIdToPath[t.modules[o]] = n
                }
            },
                e.prototype._createIgnoreDuplicateModulesMap = function () {
                    this.ignoreDuplicateModulesMap = {};
                    for (var e = 0; e < this.options.ignoreDuplicateModules.length; e++) this.ignoreDuplicateModulesMap[this.options.ignoreDuplicateModules[e]] = !0
                },
                e.prototype._createSortedPathsRules = function () {
                    var e = this;
                    this.sortedPathsRules = [],
                        d.forEachProperty(this.options.paths, function (t, n) {
                            d.isArray(n) ? e.sortedPathsRules.push({
                                from: t,
                                to: n
                            }) : e.sortedPathsRules.push({
                                from: t,
                                to: [n]
                            })
                        }),
                        this.sortedPathsRules.sort(function (e, t) {
                            return t.from.length - e.from.length
                        })
                },
                e.prototype._ensureShimModule1 = function (e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var o = t[n];
                        this.shimModules.hasOwnProperty(o) || this._ensureShimModule1(o, [])
                    }
                    this.shimModules[e] = {
                        stack: null,
                        dependencies: t,
                        callback: null
                    },
                    this.options.isBuild && (this.shimModulesStr[e] = "null")
                },
                e.prototype._ensureShimModule2 = function (e, t) {
                    this.shimModules[e] = {
                        stack: null,
                        dependencies: t.deps || [],
                        callback: function () {
                            for (var e = [], n = 0; n < arguments.length; n++) e[n - 0] = arguments[n];
                            if ("function" == typeof t.init) {
                                var o = t.init.apply(A, e);
                                if ("undefined" != typeof o) return o
                            }
                            if ("function" == typeof t.exports) return t.exports.apply(A, e);
                            if ("string" == typeof t.exports) {
                                for (var r = t.exports.split("."), i = A, s = 0; s < r.length; s++) i && (i = i[r[s]]);
                                return i
                            }
                            return t.exports || {}
                        }
                    },
                    this.options.isBuild && ("function" == typeof t.init ? this.shimModulesStr[e] = t.init.toString() : "function" == typeof t.exports ? this.shimModulesStr[e] = t.exports.toString() : "string" == typeof t.exports ? this.shimModulesStr[e] = "function() { return this." + t.exports + "; }" : this.shimModulesStr[e] = JSON.stringify(t.exports))
                },
                e.prototype._createShimModules = function () {
                    var e = this;
                    this.shimModules = {},
                        this.shimModulesStr = {},
                        d.forEachProperty(this.options.shim, function (t, n) {
                            if (n) return d.isArray(n) ? void e._ensureShimModule1(t, n) : void e._ensureShimModule2(t, n)
                        })
                },
                e.prototype.cloneAndMerge = function (t) {
                    return new e(l.mergeConfigurationOptions(t, this.options))
                },
                e.prototype.getOptionsLiteral = function () {
                    return this.options
                },
                e.prototype._applyPaths = function (e) {
                    for (var t, n = 0, o = this.sortedPathsRules.length; n < o; n++) if (t = this.sortedPathsRules[n], d.startsWith(e, t.from)) {
                        for (var r = [], i = 0, s = t.to.length; i < s; i++) r.push(t.to[i] + e.substr(t.from.length));
                        return r
                    }
                    return [e]
                },
                e.prototype._addUrlArgsToUrl = function (e) {
                    return d.containsQueryString(e) ? e + "&" + this.options.urlArgs : e + "?" + this.options.urlArgs
                },
                e.prototype._addUrlArgsIfNecessaryToUrl = function (e) {
                    return this.options.urlArgs ? this._addUrlArgsToUrl(e) : e
                },
                e.prototype._addUrlArgsIfNecessaryToUrls = function (e) {
                    if (this.options.urlArgs) for (var t = 0, n = e.length; t < n; t++) e[t] = this._addUrlArgsToUrl(e[t]);
                    return e
                },
                e.prototype.moduleIdToPaths = function (e) {
                    if (this.isBuild() && this.options.nodeModules.indexOf(e) >= 0) return ["empty:"];
                    var t = e;
                    this.overwriteModuleIdToPath.hasOwnProperty(t) && (t = this.overwriteModuleIdToPath[t]);
                    var n;
                    if (d.endsWith(t, ".js") || d.isAbsolutePath(t)) d.endsWith(t, ".js") || d.containsQueryString(t) || (t += ".js"),
                        n = [t];
                    else {
                        n = this._applyPaths(t);
                        for (var o = 0, r = n.length; o < r; o++) this.isBuild() && "empty:" === n[o] || (d.isAbsolutePath(n[o]) || (n[o] = this.options.baseUrl + n[o]), d.endsWith(n[o], ".js") || d.containsQueryString(n[o]) || (n[o] = n[o] + ".js"))
                    }
                    return this._addUrlArgsIfNecessaryToUrls(n)
                },
                e.prototype.requireToUrl = function (e) {
                    var t = e;
                    return d.isAbsolutePath(t) || (t = this._applyPaths(t)[0], d.isAbsolutePath(t) || (t = this.options.baseUrl + t)),
                        this._addUrlArgsIfNecessaryToUrl(t)
                },
                e.prototype.isShimmed = function (e) {
                    return this.shimModules.hasOwnProperty(e)
                },
                e.prototype.isBuild = function () {
                    return this.options.isBuild
                },
                e.prototype.getShimmedModuleDefine = function (e) {
                    return this.shimModules[e]
                },
                e.prototype.getShimmedModulesStr = function (e) {
                    return this.shimModulesStr[e]
                },
                e.prototype.isDuplicateMessageIgnoredFor = function (e) {
                    return this.ignoreDuplicateModulesMap.hasOwnProperty(e)
                },
                e.prototype.getConfigForModule = function (e) {
                    if (this.options.config) return this.options.config[e]
                },
                e.prototype.shouldCatchError = function () {
                    return this.options.catchError
                },
                e.prototype.shouldRecordStats = function () {
                    return this.options.recordStats
                },
                e.prototype.onError = function (e) {
                    this.options.onError(e)
                },
                e
        }();
        e.Configuration = a;
        var c = function () {
            function e(e, t) {
                this._config = e;
                var n = t.lastIndexOf("/");
                n !== -1 ? this.fromModulePath = t.substr(0, n + 1) : this.fromModulePath = ""
            }
            return e.prototype.isBuild = function () {
                return this._config.isBuild()
            },
                e._normalizeModuleId = function (e) {
                    var t, n = e;
                    for (t = /\/\.\//; t.test(n);) n = n.replace(t, "/");
                    for (n = n.replace(/^\.\//g, ""), t = /\/(([^\/])|([^\/][^\/\.])|([^\/\.][^\/])|([^\/][^\/][^\/]+))\/\.\.\//; t.test(n);) n = n.replace(t, "/");
                    return n = n.replace(/^(([^\/])|([^\/][^\/\.])|([^\/\.][^\/])|([^\/][^\/][^\/]+))\/\.\.\//, "")
                },
                e.prototype.resolveModule = function (t) {
                    var n = t;
                    return d.isAbsolutePath(n) || (d.startsWith(n, "./") || d.startsWith(n, "../")) && (n = e._normalizeModuleId(this.fromModulePath + n)),
                        n
                },
                e.prototype.moduleIdToPaths = function (e) {
                    var t = this._config.moduleIdToPaths(e);
                    return D && e.indexOf("/") === -1 && t.push("node|" + this.fromModulePath + "|" + e),
                        t
                },
                e.prototype.requireToUrl = function (e) {
                    return this._config.requireToUrl(e)
                },
                e.prototype.shouldCatchError = function () {
                    return this._config.shouldCatchError()
                },
                e.prototype.onError = function (e) {
                    this._config.onError(e)
                },
                e
        }();
        e.ModuleIdResolver = c;
        var p = function () {
            function e(e, t, n, o, r, i, s, u) {
                void 0 === u && (u = null),
                    this._id = e,
                    this._dependencies = t,
                    this._dependenciesValues = [],
                    this._callback = n,
                    this._errorback = o,
                    this._recorder = r,
                    this._moduleIdResolver = i,
                    this._exports = {},
                    this._exportsPassedIn = !1,
                    this._config = s,
                    this._defineCallStack = u,
                    this._digestDependencies(),
                0 === this._unresolvedDependenciesCount && this._complete()
            }
            return e.prototype._digestDependencies = function () {
                var e = this;
                this._unresolvedDependenciesCount = this._dependencies.length,
                    this._normalizedDependencies = [],
                    this._managerDependencies = [],
                    this._managerDependenciesMap = {};
                var t, n, o;
                for (t = 0, n = this._dependencies.length; t < n; t++) if (o = this._dependencies[t]) if ("exports" === o) this._exportsPassedIn = !0,
                    this._normalizedDependencies[t] = o,
                    this._dependenciesValues[t] = this._exports,
                    this._unresolvedDependenciesCount--;
                else if ("module" === o) this._normalizedDependencies[t] = o,
                    this._dependenciesValues[t] = {
                        id: this._id,
                        config: function () {
                            return e._config
                        }
                    },
                    this._unresolvedDependenciesCount--;
                else if ("require" === o) this._normalizedDependencies[t] = o,
                    this.addManagerDependency(o, t);
                else {
                    var r = o.indexOf("!");
                    if (r >= 0) {
                        var i = o.substring(0, r),
                            s = o.substring(r + 1, o.length);
                        o = this._moduleIdResolver.resolveModule(i) + "!" + s
                    } else o = this._moduleIdResolver.resolveModule(o);
                    this._normalizedDependencies[t] = o,
                        this.addManagerDependency(o, t)
                } else console.warn("Please check module " + this._id + ", the dependency list looks broken"),
                    this._normalizedDependencies[t] = o,
                    this._dependenciesValues[t] = null,
                    this._unresolvedDependenciesCount--
            },
                e.prototype.addManagerDependency = function (e, t) {
                    if (this._managerDependenciesMap.hasOwnProperty(e)) throw new Error("Module " + this._id + " contains multiple times a dependency to " + e);
                    this._managerDependencies.push(e),
                        this._managerDependenciesMap[e] = t
                },
                e.prototype.renameDependency = function (e, t) {
                    if (!this._managerDependenciesMap.hasOwnProperty(e)) throw new Error("Loader: Cannot rename an unknown dependency!");
                    var n = this._managerDependenciesMap[e];
                    delete this._managerDependenciesMap[e],
                        this._managerDependenciesMap[t] = n,
                        this._normalizedDependencies[n] = t
                },
                e.prototype.getId = function () {
                    return this._id
                },
                e.prototype.getModuleIdResolver = function () {
                    return this._moduleIdResolver
                },
                e.prototype.isExportsPassedIn = function () {
                    return this._exportsPassedIn
                },
                e.prototype.getExports = function () {
                    return this._exports
                },
                e.prototype.getDependencies = function () {
                    return this._managerDependencies
                },
                e.prototype.getNormalizedDependencies = function () {
                    return this._normalizedDependencies
                },
                e.prototype.getDefineCallStack = function () {
                    return this._defineCallStack
                },
                e.prototype._invokeFactory = function () {
                    if (this._moduleIdResolver.isBuild() && !d.isAnonymousModule(this._id)) return {
                        returnedValue: null,
                        producedError: null
                    };
                    var e = null,
                        t = null;
                    if (this._moduleIdResolver.shouldCatchError()) try {
                        t = this._callback.apply(A, this._dependenciesValues)
                    } catch (t) {
                        e = t
                    } finally {} else t = this._callback.apply(A, this._dependenciesValues);
                    return {
                        returnedValue: t,
                        producedError: e
                    }
                },
                e.prototype._complete = function () {
                    var e = null;
                    if (this._callback) if ("function" == typeof this._callback) {
                        this._recorder.record(h.BeginInvokeFactory, this._id);
                        var t = this._invokeFactory();
                        e = t.producedError,
                            this._recorder.record(h.EndInvokeFactory, this._id),
                        e || "undefined" == typeof t.returnedValue || this._exportsPassedIn && !d.isEmpty(this._exports) || (this._exports = t.returnedValue)
                    } else this._exports = this._callback;
                    e && this.getModuleIdResolver().onError({
                        errorCode: "factory",
                        moduleId: this._id,
                        detail: e
                    })
                },
                e.prototype.cleanUp = function () {
                    this._moduleIdResolver && !this._moduleIdResolver.isBuild() && (this._normalizedDependencies = null, this._moduleIdResolver = null),
                        this._dependencies = null,
                        this._dependenciesValues = null,
                        this._callback = null,
                        this._managerDependencies = null,
                        this._managerDependenciesMap = null
                },
                e.prototype.onDependencyError = function (e) {
                    return !!this._errorback && (this._errorback(e), !0)
                },
                e.prototype.resolveDependency = function (e, t) {
                    if (!this._managerDependenciesMap.hasOwnProperty(e)) throw new Error("Cannot resolve a dependency I do not have!");
                    this._dependenciesValues[this._managerDependenciesMap[e]] = t,
                        delete this._managerDependenciesMap[e],
                        this._unresolvedDependenciesCount--,
                    0 === this._unresolvedDependenciesCount && this._complete()
                },
                e.prototype.isComplete = function () {
                    return 0 === this._unresolvedDependenciesCount
                },
                e
        }();
        e.Module = p,


            function (e) {
                e[e.LoaderAvailable = 1] = "LoaderAvailable",
                    e[e.BeginLoadingScript = 10] = "BeginLoadingScript",
                    e[e.EndLoadingScriptOK = 11] = "EndLoadingScriptOK",
                    e[e.EndLoadingScriptError = 12] = "EndLoadingScriptError",
                    e[e.BeginInvokeFactory = 21] = "BeginInvokeFactory",
                    e[e.EndInvokeFactory = 22] = "EndInvokeFactory",
                    e[e.NodeBeginEvaluatingScript = 31] = "NodeBeginEvaluatingScript",
                    e[e.NodeEndEvaluatingScript = 32] = "NodeEndEvaluatingScript",
                    e[e.NodeBeginNativeRequire = 33] = "NodeBeginNativeRequire",
                    e[e.NodeEndNativeRequire = 34] = "NodeEndNativeRequire"
            }(e.LoaderEventType || (e.LoaderEventType = {}));
        var h = e.LoaderEventType,
            f = function () {
                function e(e, t, n) {
                    this.type = e,
                        this.detail = t,
                        this.timestamp = n
                }
                return e
            }();
        e.LoaderEvent = f;
        var g = function () {
            function e(e) {
                this._events = [new f(h.LoaderAvailable, "", e)]
            }
            return e.prototype.record = function (e, t) {
                this._events.push(new f(e, t, n()))
            },
                e.prototype.getEvents = function () {
                    return this._events
                },
                e
        }();
        e.LoaderEventRecorder = g;
        var _ = function () {
            function e() {}
            return e.prototype.record = function (e, t) {},
                e.prototype.getEvents = function () {
                    return []
                },
                e.INSTANCE = new e,
                e
        }();
        e.NullLoaderEventRecorder = _;
        var y = function () {
            function e(e) {
                this._recorder = null,
                    this._config = new a,
                    this._scriptLoader = e,
                    this._modules = {},
                    this._knownModules = {},
                    this._inverseDependencies = {},
                    this._dependencies = {},
                    this._inversePluginDependencies = {},
                    this._queuedDefineCalls = [],
                    this._loadingScriptsCount = 0,
                    this._resolvedScriptPaths = {},
                    this._checksums = {}
            }
            return e._findRelevantLocationInStack = function (e, t) {
                for (var n = function (e) {
                    return e.replace(/\\/g, "/")
                }, o = n(e), r = t.split(/\n/), i = 0; i < r.length; i++) {
                    var s = r[i].match(/(.*):(\d+):(\d+)\)?$/);
                    if (s) {
                        var u = s[1],
                            d = s[2],
                            l = s[3],
                            a = Math.max(u.lastIndexOf(" ") + 1, u.lastIndexOf("(") + 1);
                        if (u = u.substr(a), u = n(u), u === o) {
                            var c = {
                                line: parseInt(d, 10),
                                col: parseInt(l, 10)
                            };
                            return 1 === c.line && (c.col -= "(function (require, define, __filename, __dirname) { ".length),
                                c
                        }
                    }
                }
                throw new Error("Could not correlate define call site for needle " + e)
            },
                e.prototype.getBuildInfo = function () {
                    var t = this;
                    return this._config.isBuild() ? Object.keys(this._modules).map(function (n) {
                        var o = t._modules[n],
                            r = t._resolvedScriptPaths[n] || null,
                            i = o.getDefineCallStack();
                        return {
                            id: n,
                            path: r,
                            defineLocation: r && i ? e._findRelevantLocationInStack(r, i) : null,
                            dependencies: o.getNormalizedDependencies(),
                            shim: t._config.isShimmed(n) ? t._config.getShimmedModulesStr(n) : null,
                            exports: o.getExports()
                        }
                    }) : null
                },
                e.prototype.getRecorder = function () {
                    return this._recorder || (this._config.shouldRecordStats() ? this._recorder = new g(P) : this._recorder = _.INSTANCE),
                        this._recorder
                },
                e.prototype.getLoaderEvents = function () {
                    return this.getRecorder().getEvents()
                },
                e.prototype.recordChecksum = function (e, t) {
                    this._checksums[e] = t
                },
                e.prototype.getChecksums = function () {
                    return this._checksums
                },
                e.prototype.enqueueDefineModule = function (e, t, n) {
                    0 === this._loadingScriptsCount ? this.defineModule(e, t, n, null, null) : this._queuedDefineCalls.push({
                        id: e,
                        stack: null,
                        dependencies: t,
                        callback: n
                    })
                },
                e.prototype.enqueueDefineAnonymousModule = function (e, t) {
                    var n = null;
                    this._config.isBuild() && (n = new Error("StackLocation").stack),
                        this._queuedDefineCalls.push({
                            id: null,
                            stack: n,
                            dependencies: e,
                            callback: t
                        })
                },
                e.prototype.defineModule = function (e, t, n, o, r, i) {
                    if (void 0 === i && (i = new c(this._config, e)), this._modules.hasOwnProperty(e)) return void(this._config.isDuplicateMessageIgnoredFor(e) || console.warn("Duplicate definition of module '" + e + "'"));
                    var s = this._config.getConfigForModule(e),
                        u = new p(e, t, n, o, this.getRecorder(), i, s, r);
                    this._modules[e] = u,
                        this._resolve(u)
                },
                e.prototype._relativeRequire = function (e, t, n, o) {
                    return "string" == typeof t ? this.synchronousRequire(t, e) : void this.defineModule(d.generateAnonymousModule(), t, n, o, null, e)
                },
                e.prototype.synchronousRequire = function (e, t) {
                    void 0 === t && (t = new c(this._config, e));
                    var n = t.resolveModule(e),
                        o = n.indexOf("!");
                    if (o >= 0) {
                        var r = n.substring(0, o),
                            i = n.substring(o + 1, n.length),
                            s = {};
                        this._modules.hasOwnProperty(r) && (s = this._modules[r]);
                        var u = function (e) {
                            return t.resolveModule(e)
                        };
                        i = "function" == typeof s.normalize ? s.normalize(i, u) : u(i),
                            n = r + "!" + i
                    }
                    if (!this._modules.hasOwnProperty(n)) throw new Error("Check dependency list! Synchronous require cannot resolve module '" + n + "'. This is the first mention of this module!");
                    var d = this._modules[n];
                    if (!d.isComplete()) throw new Error("Check dependency list! Synchronous require cannot resolve module '" + n + "'. This module has not been resolved completely yet.");
                    return d.getExports()
                },
                e.prototype.configure = function (e, t) {
                    var n = this._config.shouldRecordStats();
                    t ? this._config = new a(e) : this._config = this._config.cloneAndMerge(e),
                    this._config.shouldRecordStats() && !n && (this._recorder = null)
                },
                e.prototype.getConfigurationOptions = function () {
                    return this._config.getOptionsLiteral()
                },
                e.prototype._onLoad = function (e) {
                    var t;
                    if (this._loadingScriptsCount--, this._config.isShimmed(e)) t = this._config.getShimmedModuleDefine(e),
                        this.defineModule(e, t.dependencies, t.callback, null, t.stack);
                    else if (0 === this._queuedDefineCalls.length) this._loadingScriptsCount++,
                        this._onLoadError(e, new Error("No define call received from module " + e + "."));
                    else for (; this._queuedDefineCalls.length > 0;) {
                            if (t = this._queuedDefineCalls.shift(), t.id === e || null === t.id) {
                                t.id = e,
                                    this.defineModule(t.id, t.dependencies, t.callback, null, t.stack);
                                break
                            }
                            this.defineModule(t.id, t.dependencies, t.callback, null, t.stack)
                        }
                    if (0 === this._loadingScriptsCount) for (; this._queuedDefineCalls.length > 0;) t = this._queuedDefineCalls.shift(),
                        null === t.id ? (console.warn("Found an unmatched anonymous define call in the define queue. Ignoring it!"), console.warn(t.callback)) : this.defineModule(t.id, t.dependencies, t.callback, null, t.stack)
                },
                e.prototype._onLoadError = function (e, t) {
                    this._loadingScriptsCount--;
                    var n, o = {
                            errorCode: "load",
                            moduleId: e,
                            neededBy: this._inverseDependencies[e] ? this._inverseDependencies[e].slice(0) : [],
                            detail: t
                        },
                        r = {},
                        i = !1,
                        s = [];
                    for (s.push(e), r[e] = !0; s.length > 0;) if (n = s.shift(), this._modules[n] && (i = this._modules[n].onDependencyError(o) || i), this._inverseDependencies[n]) for (var u = 0, d = this._inverseDependencies[n].length; u < d; u++) r.hasOwnProperty(this._inverseDependencies[n][u]) || (s.push(this._inverseDependencies[n][u]), r[this._inverseDependencies[n][u]] = !0);
                    i || this._config.onError(o)
                },
                e.prototype._onModuleComplete = function (e, t) {
                    var n, o, r, i;
                    if (delete this._dependencies[e], this._inverseDependencies.hasOwnProperty(e)) {
                        var s = this._inverseDependencies[e];
                        for (delete this._inverseDependencies[e], n = 0, o = s.length; n < o; n++) r = s[n],
                            i = this._modules[r],
                            i.resolveDependency(e, t),
                        i.isComplete() && this._onModuleComplete(r, i.getExports())
                    }
                    if (this._inversePluginDependencies.hasOwnProperty(e)) {
                        var u = this._inversePluginDependencies[e];
                        for (delete this._inversePluginDependencies[e], n = 0, o = u.length; n < o; n++) {
                            var l = u[n].moduleId,
                                a = this._modules[l];
                            this._resolvePluginDependencySync(l, u[n].dependencyId, t),
                            a.isComplete() && this._onModuleComplete(l, a.getExports())
                        }
                    }
                    d.isAnonymousModule(e) ? (delete this._modules[e], delete this._dependencies[e]) : this._modules[e].cleanUp()
                },
                e.prototype._hasDependencyPath = function (e, t) {
                    var n, o, r, i, s, u = {},
                        d = [];
                    for (d.push(e), u[e] = !0; d.length > 0;) if (r = d.shift(), this._dependencies.hasOwnProperty(r)) for (i = this._dependencies[r], n = 0, o = i.length; n < o; n++) {
                        if (s = i[n], s === t) return !0;
                        u.hasOwnProperty(s) || (u[s] = !0, d.push(s))
                    }
                    return !1
                },
                e.prototype._findCyclePath = function (e, t, n) {
                    if (e === t || 50 === n) return [e];
                    if (!this._dependencies.hasOwnProperty(e)) return null;
                    for (var o, r = this._dependencies[e], i = 0, s = r.length; i < s; i++) if (o = this._findCyclePath(r[i], t, n + 1), null !== o) return o.push(e),
                        o;
                    return null
                },
                e.prototype._createRequire = function (e) {
                    var t = this,
                        n = function (n, o, r) {
                            return t._relativeRequire(e, n, o, r)
                        };
                    return n.toUrl = function (t) {
                        return e.requireToUrl(e.resolveModule(t))
                    },
                        n.getStats = function () {
                            return t.getLoaderEvents()
                        },
                        n.getChecksums = function () {
                            return t.getChecksums()
                        },
                        n.__$__nodeRequire = A.nodeRequire,
                        n
                },
                e.prototype._resolvePluginDependencySync = function (e, t, n) {
                    var o = this,
                        r = this._modules[e],
                        i = r.getModuleIdResolver(),
                        s = t.indexOf("!"),
                        u = t.substring(0, s),
                        d = t.substring(s + 1, t.length),
                        l = function (e) {
                            return i.resolveModule(e)
                        };
                    if (d = "function" == typeof n.normalize ? n.normalize(d, l) : l(d), n.dynamic) {
                        var a = function (n) {
                            r.resolveDependency(t, n),
                            r.isComplete() && o._onModuleComplete(e, r.getExports())
                        };
                        a.error = function (n) {
                            o._config.onError({
                                errorCode: "load",
                                moduleId: t,
                                neededBy: [e],
                                detail: n
                            })
                        },
                            n.load(d, this._createRequire(i), a, this._config.getOptionsLiteral())
                    } else {
                        var c = t;
                        t = u + "!" + d,
                            r.renameDependency(c, t),
                            this._resolveDependency(e, t, function (e) {
                                var r = function (e) {
                                    o.defineModule(t, [], e, null, null)
                                };
                                r.error = function (e) {
                                    o._config.onError({
                                        errorCode: "load",
                                        moduleId: t,
                                        neededBy: o._inverseDependencies[t] ? o._inverseDependencies[t].slice(0) : [],
                                        detail: e
                                    })
                                },
                                    n.load(d, o._createRequire(i), r, o._config.getOptionsLiteral())
                            })
                    }
                },
                e.prototype._resolvePluginDependencyAsync = function (e, t) {
                    var n = this._modules[e],
                        o = t.indexOf("!"),
                        r = t.substring(0, o);
                    this._inversePluginDependencies[r] = this._inversePluginDependencies[r] || [],
                        this._inversePluginDependencies[r].push({
                            moduleId: e,
                            dependencyId: t
                        }),
                    this._modules.hasOwnProperty(r) || this._knownModules.hasOwnProperty(r) || (this._knownModules[r] = !0, this._loadModule(n.getModuleIdResolver(), r))
                },
                e.prototype._resolvePluginDependency = function (e, t) {
                    var n = t.indexOf("!"),
                        o = t.substring(0, n);
                    this._modules.hasOwnProperty(o) && this._modules[o].isComplete() ? this._resolvePluginDependencySync(e, t, this._modules[o].getExports()) : this._resolvePluginDependencyAsync(e, t)
                },
                e.prototype._resolveShimmedDependency = function (e, t, n) {
                    var o = this._config.getShimmedModuleDefine(t);
                    o.dependencies.length > 0 ? this.defineModule(d.generateAnonymousModule(), o.dependencies, function () {
                        return n(t)
                    }, null, null, new c(this._config, t)) : n(t)
                },
                e.prototype._resolveDependency = function (e, t, n) {
                    var o = this._modules[e];
                    if (this._modules.hasOwnProperty(t) && this._modules[t].isComplete()) o.resolveDependency(t, this._modules[t].getExports());
                    else if (this._dependencies[e].push(t), this._hasDependencyPath(t, e)) {
                        console.warn("There is a dependency cycle between '" + t + "' and '" + e + "'. The cyclic path follows:");
                        var r = this._findCyclePath(t, e, 0);
                        r.reverse(),
                            r.push(t),
                            console.warn(r.join(" => \n"));
                        var i, s = this._modules.hasOwnProperty(t) ? this._modules[t] : null;
                        s && s.isExportsPassedIn() && (i = s.getExports()),
                            o.resolveDependency(t, i)
                    } else this._inverseDependencies[t] = this._inverseDependencies[t] || [],
                        this._inverseDependencies[t].push(e),
                    this._modules.hasOwnProperty(t) || this._knownModules.hasOwnProperty(t) || (this._knownModules[t] = !0, this._config.isShimmed(t) ? this._resolveShimmedDependency(e, t, n) : n(t))
                },
                e.prototype._loadModule = function (e, t) {
                    var n = this;
                    this._loadingScriptsCount++;
                    var o = e.moduleIdToPaths(t),
                        r = -1,
                        i = function (e) {
                            if (r++, r >= o.length) n._onLoadError(t, e);
                            else {
                                var s = o[r],
                                    u = n.getRecorder();
                                if (n._config.isBuild() && "empty:" === s) return n._resolvedScriptPaths[t] = s,
                                    n.enqueueDefineModule(t, [], null),
                                    void n._onLoad(t);
                                u.record(h.BeginLoadingScript, s),
                                    n._scriptLoader.load(s, function () {
                                        n._config.isBuild() && (n._resolvedScriptPaths[t] = s),
                                            u.record(h.EndLoadingScriptOK, s),
                                            n._onLoad(t)
                                    }, function (e) {
                                        u.record(h.EndLoadingScriptError, s),
                                            i(e)
                                    }, u)
                            }
                        };
                    i(null)
                },
                e.prototype._resolve = function (e) {
                    var t, n, o, r, i, s, u = this;
                    o = e.getId(),
                        r = e.getDependencies(),
                        s = e.getModuleIdResolver(),
                        this._dependencies[o] = [];
                    var d = function (e) {
                        return u._loadModule(s, e)
                    };
                    for (t = 0, n = r.length; t < n; t++) i = r[t],
                        "require" !== i ? i.indexOf("!") >= 0 ? this._resolvePluginDependency(o, i) : this._resolveDependency(o, i, d) : e.resolveDependency(i, this._createRequire(s));
                    e.isComplete() && this._onModuleComplete(o, e.getExports())
                },
                e
        }();
        e.ModuleManager = y;
        var v, m, M, D, E, b, P, C = function () {
                function e(e) {
                    this.actualScriptLoader = e,
                        this.callbackMap = {}
                }
                return e.prototype.setModuleManager = function (e) {
                    this.actualScriptLoader.setModuleManager(e)
                },
                    e.prototype.load = function (e, t, n, o) {
                        var r = this,
                            i = {
                                callback: t,
                                errorback: n
                            };
                        return this.callbackMap.hasOwnProperty(e) ? void this.callbackMap[e].push(i) : (this.callbackMap[e] = [i], void this.actualScriptLoader.load(e, function () {
                            return r.triggerCallback(e)
                        }, function (t) {
                            return r.triggerErrorback(e, t)
                        }, o))
                    },
                    e.prototype.triggerCallback = function (e) {
                        var t = this.callbackMap[e];
                        delete this.callbackMap[e];
                        for (var n = 0; n < t.length; n++) t[n].callback()
                    },
                    e.prototype.triggerErrorback = function (e, t) {
                        var n = this.callbackMap[e];
                        delete this.callbackMap[e];
                        for (var o = 0; o < n.length; o++) n[o].errorback(t)
                    },
                    e
            }(),
            S = function () {
                function e() {}
                return e.prototype.attachListenersV1 = function (e, t, n) {
                    var o = function () {
                            e.detachEvent("onreadystatechange", r),
                            e.addEventListener && e.removeEventListener("error", i)
                        },
                        r = function (n) {
                            "loaded" !== e.readyState && "complete" !== e.readyState || (o(), t())
                        },
                        i = function (e) {
                            o(),
                                n(e)
                        };
                    e.attachEvent("onreadystatechange", r),
                    e.addEventListener && e.addEventListener("error", i)
                },
                    e.prototype.attachListenersV2 = function (e, t, n) {
                        var o = function () {
                                e.removeEventListener("load", r),
                                    e.removeEventListener("error", i)
                            },
                            r = function (e) {
                                o(),
                                    t()
                            },
                            i = function (e) {
                                o(),
                                    n(e)
                            };
                        e.addEventListener("load", r),
                            e.addEventListener("error", i)
                    },
                    e.prototype.setModuleManager = function (e) {},
                    e.prototype.load = function (e, t, n) {
                        var o = document.createElement("script");
                        o.setAttribute("async", "async"),
                            o.setAttribute("type", "text/javascript"),
                            A.attachEvent ? this.attachListenersV1(o, t, n) : this.attachListenersV2(o, t, n),
                            o.setAttribute("src", e)
                        //document.getElementsByTagName("head")[0].appendChild(o)

                    },
                    e
            }(),
            k = function () {
                function e() {
                    this.loadCalls = [],
                        this.loadTimeout = -1
                }
                return e.prototype.setModuleManager = function (e) {},
                    e.prototype.load = function (e, t, n) {
                        var o = this;
                        this.loadCalls.push({
                            scriptSrc: e,
                            callback: t,
                            errorback: n
                        }),
                            navigator.userAgent.indexOf("Firefox") >= 0 ? this._load() : this.loadTimeout === -1 && (this.loadTimeout = setTimeout(function () {
                                o.loadTimeout = -1,
                                    o._load()
                            }, 0))
                    },
                    e.prototype._load = function () {
                        var e = this.loadCalls;
                        this.loadCalls = [];
                        var t, n = e.length,
                            o = [];
                        for (t = 0; t < n; t++) o.push(e[t].scriptSrc);
                        var r = !1;
                        try {
                            importScripts.apply(null, o)
                        } catch (o) {
                            for (r = !0, t = 0; t < n; t++) e[t].errorback(o)
                        }
                        if (!r) for (t = 0; t < n; t++) e[t].callback()
                    },
                    e
            }(),
            w = function () {
                function e() {
                    this._initialized = !1
                }
                return e.prototype.setModuleManager = function (e) {
                    this._moduleManager = e
                },
                    e.prototype._init = function (e) {
                        this._initialized || (this._initialized = !0, this._fs = e("fs"), this._vm = e("vm"), this._path = e("path"), this._crypto = e("crypto"))
                    },
                    e.prototype.load = function (t, n, o, r) {
                        var i = this,
                            s = this._moduleManager.getConfigurationOptions(),
                            u = s.checksum || !1,
                            l = s.nodeRequire || A.nodeRequire,
                            a = s.nodeInstrumenter ||
                                function (e) {
                                    return e
                                };
                        if (this._init(l), /^node\|/.test(t)) {
                            var c = t.split("|"),
                                p = null;
                            try {
                                r.record(h.NodeBeginNativeRequire, c[2]),
                                    p = l(c[2])
                            } catch (e) {
                                return r.record(h.NodeEndNativeRequire, c[2]),
                                    void o(e)
                            }
                            r.record(h.NodeEndNativeRequire, c[2]),
                                this._moduleManager.enqueueDefineAnonymousModule([], function () {
                                    return p
                                }),
                                n()
                        } else t = d.fileUriToFilePath(t),
                            this._fs.readFile(t, {
                                encoding: "utf8"
                            }, function (s, d) {
                                if (s) return void o(s);
                                if (u) {
                                    var l = i._crypto.createHash("md5").update(d, "utf8").digest("base64").replace(/=+$/, "");
                                    i._moduleManager.recordChecksum(t, l)
                                }
                                r.record(h.NodeBeginEvaluatingScript, t);
                                var c = i._path.normalize(t);
                                if (m) {
                                    var p = c.match(/^([a-z])\:(.*)/i);
                                    p && (c = p[1].toUpperCase() + ":" + p[2]),
                                        c = "file:///" + c.replace(/\\/g, "/")
                                }
                                var f, g = "(function (require, define, __filename, __dirname) { ",
                                    _ = "\n});";
                                f = d.charCodeAt(0) === e._BOM ? g + d.substring(1) + _ : g + d + _,
                                    f = a(f, c);
                                var y;
                                y = /^v0\.12/.test(process.version) ? i._vm.runInThisContext(f, {
                                    filename: c
                                }) : i._vm.runInThisContext(f, c),
                                    y.call(A, O, I, c, i._path.dirname(t)),
                                    r.record(h.NodeEndEvaluatingScript, t),
                                    n()
                            })
                    },
                    e._BOM = 65279,
                    e
            }(),
            I = function () {
                function e(e, t, n) {
                    "string" != typeof e && (n = t, t = e, e = null),
                    "object" == typeof t && d.isArray(t) || (n = t, t = null),
                    t || (t = ["require", "exports", "module"]),
                        e ? b.enqueueDefineModule(e, t, n) : b.enqueueDefineAnonymousModule(t, n)
                }
                return e.amd = {
                    jQuery: !0
                },
                    e
            }(),
            O = function () {
                function e() {
                    if (1 === arguments.length) {
                        if (arguments[0] instanceof Object && !d.isArray(arguments[0])) return void e.config(arguments[0]);
                        if ("string" == typeof arguments[0]) return b.synchronousRequire(arguments[0])
                    }
                    if ((2 === arguments.length || 3 === arguments.length) && d.isArray(arguments[0])) return void b.defineModule(d.generateAnonymousModule(), arguments[0], arguments[1], arguments[2], null);
                    throw new Error("Unrecognized require call")
                }
                return e.config = function (e, t) {
                    void 0 === t && (t = !1),
                        b.configure(e, t)
                },
                    e.getConfig = function () {
                        return b.getConfigurationOptions()
                    },
                    e.reset = function () {
                        b = new y(E),
                            E.setModuleManager(b)
                    },
                    e.getBuildInfo = function () {
                        return b.getBuildInfo()
                    },
                    e.getStats = function () {
                        return b.getLoaderEvents()
                    },
                    e.getChecksums = function () {
                        return b.getChecksums()
                    },
                    e
            }(),
            A = _amdLoaderGlobal,
            R = A.performance && "function" == typeof A.performance.now;
        "function" == typeof A.define && A.define.amd || (s(), P = n())
    }(AMDLoader || (AMDLoader = {}));
//# sourceMappingURL=../../min-maps/vs/loader.js.map