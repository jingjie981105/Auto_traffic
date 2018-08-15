var ghostColor = "undefined" != typeof colorScheme && null != colorScheme ? colorScheme : "#FF0000",
    selectFullMap = !1,
    selectSafetySystem = !1,
    selectLearningInput = !1;
"undefined" == typeof headless && (headless = !1);//head未定义或者是0
var n = [0, 1, 2, 3, 4];

function p(a) {
    this.g = a % 2147483647;
    0 >= this.g && (this.g += 2147483646)
}
p.prototype = {
    next: function () {
        return this.g = 16807 * this.g % 2147483647
    }
};

function q(a) {
    return (a.next() - 1) / 2147483646
}
var r = 1,
    t = 1,
    u = new p(r),
    v = new p(t);
"undefined" === typeof otherAgents && (otherAgents = 0);
nOtherAgents = Math.min(otherAgents, 9);
var w = !1;

function exchangeBrainForm(tempBrains) {
    var brain;
    var container = Array.isArray(tempBrains) ? [] : {};//d根据tempBrains来定义是数组还是对象
    for (brain in tempBrains) {
        var tempData = tempBrains[brain];
        container[brain] = "object" === typeof tempData ? exchangeBrainForm(tempData) : tempData//是对象就按照对象存，是其他方式就按照其他方式存
    }
    return container;
}
//var brains=y()
function y() {
    var otherAgents = nOtherAgents,
        allcars = allCars;//b在此定义
    console.log("cloning");
    for (var d = [], c = 0; c < otherAgents; c++) d.push(exchangeBrainForm(brain));
    for (c = 0; 20 > c; c++) allcars[c].f = !1;
    for (c = 0; c < otherAgents; c++) allcars[c + 1].f = !0;
    allcars[0].f = !0;
    return d
}

function A(a) {
    var b = "var tmpLearn = " + learn.toString();
    b = b.replace(/brain.backward\(lastReward\);/g, "");
    b = b.replace(/draw_net\(\);/g, "");
    b = b.replace(/draw_stats\(\);/g, "");
    return b.replace(/brain/g, "brains[" + (a - 1) + "]")
}

function Map(width,length,defaultvalue) {//(a,b,d)defaultvalue保存的应该是当前汽车所处的位置的数据
    this.data = [];
    this.defaultValue = defaultvalue;
    for (var c = 0; c < width; c++) {
        for (var f = [], l = 0; l < length; l++)
            f.push(defaultvalue);
        this.data.push(f)//data记录了汽车能观察到按列拆分的全局数据
    }
    this.reset = function () {
        for (var a = 0; a < this.data.length; a++)
            for (var b = 0; b < this.data[a].length; b++)
                this.data[a][b] = this.defaultValue
    };
    this.set = function (a, b, c) {
        a = Math.floor(a);
        b = Math.floor(b);
        0 <= a && a < this.data.length && 0 <= b && b < this.data[a].length && (this.data[a][b] = c)
    };
    this.get = function (a, b, c) {
        a = Math.floor(a);
        b = Math.floor(b);
        return 0 <= a && a < this.data.length && 0 <= b && b < this.data[a].length ? this.data[a][b] : "undefined" == typeof c ? this.defaultValue : c
    };
    this.o = function (a, b) {
        var c = lanesSide,
            d = patchesAhead,
            f = patchesBehind;
        0 == a && (C = allCars[0].b);
        for (var g = -c; g <= c; g++) for (var h = -d; h < f; h++) b.data[g + c][h + d] = this.get(allCars[a].b + g, Math.floor(allCars[a].y) / 10 + h, 0)
    };
    this.s = function () {
        for (var a = Array(this.data.length * this.data[0].length), b = 0; b < this.data.length; b++) for (var c = 0; c < this.data[b].length; c++) a[this.data.length * c + b] = this.data[b][c] / 100;
        return a
    }
}

function Car() {
    this.y = this.x = 0;
    this.a = this.c = 1;
    this.lane = 0;
    this.speedHistory = Array(60);
    this.initial = function () {
        var a = Math.floor(140 * q(v) / 20);
        this.x = 20 * a + 4;
        switch (a) {
            case 5 < a:
                gasPedalModulator = function () {
                    return.5 * q(v)
                };
                break;
            case 3 < a:
                gasPedalModulator = function () {
                    return.5 * q(v) + .3
                };
                break;
            case 5 < a:
                gasPedalModulator = function () {
                    return.5 * q(v) + .4
                };
                break;
            case 6 == a:
                gasPedalModulator = function () {
                    return.6 * q(v) + .4
                };
                break;
            default:
                gasPedalModulator = function () {
                    return.5 * q(v)
                }
        }
        this.f || (this.a = 1 + .7 * gasPedalModulator());
        this.lane = a
    };
    this.initial();
    this.y = 10 * Math.floor(700 * Math.random() / 10);
    this.move = function (a) {
        var b = this.y - (this.c * this.a - E);
        a && 525 > this.y && 525 <= b ? (F++, headless || (document.getElementById("passed").innerText = F)) : a && 525 < this.y && 525 >= b && (F--, headless || (document.getElementById("passed").innerText = F));
        this.y = b;
        this.speedHistory[G % this.speedHistory.length] = this.c * this.a * 20;
        a = 20 * this.lane + 4 - this.x;
        this.x = Math.abs(a) < 20 / 30 ? 20 * this.lane + 4 : 0 < a ? this.x + 20 / 30 : this.x - 20 / 30;
        0 > this.y + 68 && (this.y = 734, this.initial());
        700 < this.y - 68 && (this.y = -34, this.initial())
    };
    this.f = !1;
    this.l = function () {
        for (var a =
            0; 15 > a; a += 10) for (var b = 0; 34 > b; b += 5) MapH.set((this.x + a) / 20, (this.y + b) / 10, 1 * this.c * this.a)
    };
    this.u = function () {
        for (var a = 2, b = 1; 5 > b; b++) {
            var d = MapH.get((this.x + 7.5) / 20, (this.y - 10 * b) / 10, 100);
            100 > d && (a = Math.min(a, .5 * (b - 1)), a = Math.min(a, d / this.a))
        }
        this.c = a
    };
    this.i = function (a) {
        for (var b = (this.x + 7.5) / 20 + a, d = this.y / 10, c = .5 > Math.abs(this.x - (20 * this.lane + 4)), f = 3 * -this.a; 4 > f; f++) c = c && 100 <= MapH.get(b, d + f, 0);
        c && (this.lane += a);
        return c
    };
    this.v = function () {
        for (var a = !0, b = 1; 5 > b; b++) a = a && 100 <= MapH.get((this.x + 7.5) / 20, (this.y - 10 * b) / 10, a ? 0 : 2);
        for (b = 1; 5 > b; b++) MapI.set((this.x + 7.5) / 20, (this.y - 10 * b) / 10, a ? 0 : 2);
        b = (this.x + 7.5) / 20 + -1;
        var d = this.y / 10;
        a = .5 > Math.abs(this.x - (20 * this.lane + 4));
        for (var c = 3 * -this.a; 4 > c; c++) a = a && 100 <= MapH.get(b, d + c, 0);
        for (c = 3 * -this.a; 4 > c; c++) MapI.set(b, d + c, a ? 0 : 2);
        b = (this.x + 7.5) / 20 + 1;
        a = .5 > Math.abs(this.x - (20 * this.lane + 4));
        for (c = 3 * -this.a; 4 > c; c++) a = a && 100 <= MapH.get(b, d + c, 0);
        for (c = 3 * -this.a; 4 > c; c++) MapI.set(b, d + c, a ? 0 : 2)
    };
    this.m = function (a) {
        switch (a) {
            case 1:
                2 > this.a && (this.a += .02);
                break;
            case 2:
                0 < this.a && (this.a -= .02);
                break;
            case 3:
                (a = this.i(-1)) && (J = 0);
                break;
            case 4:
                (a = this.i(1)) && (J = 0)
        }
    };
    this.w = function () {
        for (var a = 0, b = 0; b < this.speedHistory.length; b++) a += this.speedHistory[b];
        return Math.floor(a / this.speedHistory.length)
    }
}
for (var MapH = new Map(7, 70, 100), MapI = new Map(7, 70, 100), MapK = new Map(1 + 2 * lanesSide, patchesAhead + patchesBehind, 0), C = 0, allCars = [], L = 0; 20 > L; L++)
    allCars.push(new Car);

var brains = y(),
    G = 0,
    E = 1.5,
    M = 0,
    N = 0,
    J = 0,
    F = 0,
    runFast = !1;
initializeMap = function (a) {
    function b(b) {
        var c = Math.floor(b.length * q(a));
        return b[c]
    }
    function d(a, b) {
        for (var c = Array(12), d = 0, f, g = -4; 12 > g; g++) 0 <= b + g && (f = 7 * (b + g) + a % 7, c[d] = f),
            d += 1;
        return c
    }
    allCars[0].y = 525;
    allCars[0].x = 64;
    allCars[0].lane = 3;
    legalLocations = Array(490).fill().map(function (a, b) {
        return b
    });
    var c = Math.floor(allCars[0].x / 20),
        f = Math.floor(allCars[0].y / 10 + 4),
        l = d(c, f);
    allCars[0].a = 2;
    for (var h = 0; h < l.length; h++) legalLocations.splice(legalLocations.indexOf(l[h]), 1);
    for (var g = 1; g < allCars.length; g++) {
        c = b(legalLocations);
        f = Math.floor(c / 7);
        c %= 7;
        l = d(c, f);
        for (h = 0; h < l.length; h++) legalLocations.splice(legalLocations.indexOf(l[h]), 1);
        allCars[g].x = Math.floor(20 * c + 4);
        allCars[g].y = Math.floor(f / 70 * 700);
        allCars[g].lane = c;
        allCars[g].f && (allCars[g].a = 1.7)
    }
    allCars[0].a = 2
};
reset = function () {
    nOtherAgents != Math.min(otherAgents, 10) && (nOtherAgents = Math.min(otherAgents, 10), brains = y(), w = !1);
    MapH = new Map(7, 70, 100);
    MapI = new Map(7, 70, 100);
    MapK = new Map(1 + 2 * lanesSide, patchesAhead + patchesBehind, 0);
    allCars = [];
    for (var a = 0; 20 > a; a++) allCars.push(new Car),
    a < nOtherAgents + 1 && (allCars[a].f = !0);
    r += 1;
    t += 1;
    u = new p(r);
    v = new p(r);
    initializeMap(u);
    G = 0;
    E = 1.5;
    F = J = N = M = 0
};
setFast = function (chooseRunFast) {
    runFast = chooseRunFast
};

function R(a, b) {
    var d = 0;
    if (3 == J || 4 == J) d = J;
    switch (a.keyCode) {
        case 39:
            a.preventDefault();
            d = 4;
            break;
        case 37:
            a.preventDefault();
            d = 3;
            break;
        case 38:
            a.preventDefault();
            d = 1;
            break;
        case 40:
            a.preventDefault(),
                d = 2
    }
    b && (J = d)
}
headless || (document.addEventListener("keyup", function (a) {
    R(a, !1)
}), document.addEventListener("keydown", function (a) {
    R(a, !0)
}));
setDrawingStyle = function (select) {

    selectLearningInput=selectLearningInput=selectFullMap=!1;
    switch (select.value) {
        case "cutout":
            selectLearningInput = !0;
            break;
        case "safety":
            selectSafetySystem = !0;
            break;
        case "full":
            selectFullMap = !0
    }
};
var S = Array(100),
    T = null;

function U() {
    var a = document.getElementById("canvas").getContext("2d");
    a.globalCompositeOperation = "destination-over";
    a.clearRect(-30, 0, 1E3, 1E3);
    for (var b = document.getElementById("vehicle"), d = document.getElementById("whiteCarSmall"), c = 1; c < nOtherAgents + 1; c++) a.drawImage(b, allCars[c].x, allCars[c].y, 15, 34);
    for (c = nOtherAgents + 1; c < allCars.length; c++) a.drawImage(d, allCars[c].x, allCars[c].y, 15, 34);
    a.drawImage(b, allCars[0].x, allCars[0].y, 15, 34);
    if (null !== T) {
        for (b = S.length - 1; 0 <= b; b--) {
            d = (b + T) % S.length;
            if (void 0 === S[d]) break;
            S[d].y += allCars[0].c;
            d = S[d];
            a.globalAlpha =
                Math.min(.1, Math.pow(b / S.length, 5));
            0 == b % 1 && (a.beginPath(), a.arc(d.x + 7.5, d.y + 20, 5, 0, 2 * Math.PI, !1), a.fillStyle = ghostColor, a.fill())
        }
        T = (T + 1) % S.length
    } else T = 0;
    S[T] = {
        x: allCars[0].x,
        y: allCars[0].y
    };
    a.globalAlpha = 1;
    a.fillStyle = "rgba(120,120,120,0.4)";
    a.fillRect(140, 0, 2, 1E3);
    a.fillRect(1, 0, 2, 1E3);
    M += E;
    M %= 20;
    for (c = 1; 7 > c; c++) for (b = 0; 36 > b; b++) a.fillRect(20 * c, 20 * b + 2 + M - 10, 2, 8);
    if (selectFullMap) for (c = 0; c < MapH.data.length; c++) for (b = 0; b < MapH.data[c].length; b++) d = MapH.get(c, b, 0),
        a.fillStyle = 0 < d ? "rgba(250,120,0," + d / 100 + ")" : "rgba(0,120,250," + -d / 100 + ")",
        a.fillRect(20 * c + 2, 10 * b + 2, 18, 8);
    if (selectSafetySystem) for (c = 0; c < MapH.data.length; c++) for (b = 0; b < MapH.data[c].length; b++) d = MapI.get(c, b, 100),
        0 == d ? (a.fillStyle = "rgba(250,120,0,0.5)", a.fillRect(20 * c + 2, 10 * b + 2, 18, 8)) : 2 == d && (a.fillStyle = "rgba(250,0,0,0.5)", a.fillRect(20 * c + 2, 10 * b + 2, 18, 8));
    if (selectLearningInput) for (c = -lanesSide; c <= lanesSide; c++) for (b = -patchesAhead; b < patchesBehind; b++) d = MapK.get(c + lanesSide, b + patchesAhead, 0),
        a.fillStyle = 100 < d ? "rgba(120,250,120," + (d / 10 / 103 + .1) + ")" : 0 < d ? "rgba(250,120,0," + (d / 101 + .1) + ")" : "rgba(0,120,250," + (-d / 101 + .1) + ")",
        a.fillRect(20 * Math.floor(C + c) + 2, 10 * Math.floor(52.5 + b) + 2, 18, 8);
    a.save();
    a.restore()
}

//V是汽车每次移动的处理函数
function V() {
    !w && void 0 !== brain.forward_passes && brain.forward_passes > brain.temporal_window && (brains = y(), w = !0);
    MapH.reset();


    //Z是容量为20的数组，存的是D(),D具体是什么还不清楚
    for (var a = 0; a < allCars.length; a++)
        allCars[a].move(0 != a, a),
        allCars[a].l();


    E = 1.5 - (allCars[0].y - 525);
    for (a = 0; a < allCars.length; a++) if (allCars[a].u(), a > nOtherAgents && q(v) > .99 + .004 * allCars[a].c) {
        var b = .5 < q(v) ? -1 : 1;
        allCars[a].i(b)
    }

    for (a = 1; a <= nOtherAgents; a++) {
        if (G % 30 == 3 * a) {
            var d = new Map(1 + 2 * lanesSide, patchesAhead + patchesBehind, 0);
            MapH.o(a, d);
            eval(A(a));
            d = tmpLearn(d.s());
            d = 0 <= d && d < n.length ? d : J
        }
        allCars[a].m(d)
    }

    allCars[0].l();
    selectSafetySystem && (MapI.reset(), allCars[0].v());
    N += allCars[0].c * allCars[0].a;
    0 == G % 30 && (MapH.o(0, MapK), d = learn(MapK.s(), (N - 60) / 20), d = 0 <= d && d < n.length ? d : J, N = 0);
    allCars[0].m(d);
    G++;
    0 == G % 1E4 && console.log(G);
    headless || (G % 30 && (a = allCars[0].w(), isNaN(a) || (document.getElementById("mph").innerText = Math.max(0, a)/*将当前车速显示到页面上*/)), U())

}
evalRun = !1;
doEvalRun = function (a, b, d, c, f) {
    if (!0 === d) for (t = r = 0, "undefined" != typeof brain && brain.reset_seed(0), d = 0; d < brains.length; d++) brains[d].reset_seed(0);
    else {
        "undefined" != typeof brain && brain.reset_seed(Math.floor(1E7 * Math.random()));
        for (d = 0; d < brains.length; d++) brains[d].reset_seed(Math.floor(1E7 * Math.random()));
        r = Math.floor(1E7 * Math.random());
        t = Math.floor(1E7 * Math.random())
    }
    d = NaN;
    "undefined" != typeof c && (d = f);
    headless = !0;
    var l = runFast;
    evalRun = runFast = !0;
    f = [];
    for (var h = 0, g = 0; g < a; g++) {
        console.log("run: " + (g + 1) + "/" + a);
        reset();
        for (var O = 0, P = 0; P < b; P++) {
            0 == h % d && c();
            V();
            for (var B = 0; B < nOtherAgents + 1; B++) O += Math.max(0, allCars[B].c * allCars[B].a) / (nOtherAgents + 1);
            h++
        }
        f.push(Math.floor(O / b * 2E3) / 100)
    }
    reset();
    runFast = l;
    evalRun = headless = !1;
    f.sort();
    console.log(f);
    for (c = b = 0; c < f.length; c++) b += f[c];
    console.log("avg: " + b / a + " median: " + f[a / 2]);
    return f[a / 2]
};
initializeMap(u);

function carMoveFun() {
    V();
    runFast ? setTimeout(carMoveFun, 0) : window.requestAnimationFrame(carMoveFun)
}
headless || (document.getElementById("canvas").getContext("2d").scale(2, 2), document.getElementById("canvas").getContext("2d").translate(30, 0), carMoveFun());