// 禁用 TS2304 检查器，因为我们将使用 require 语句
// @ts-nocheck
var kt = (u, t, e) => {
  if (!t.has(u))
    throw TypeError("Cannot " + e);
};
var q = (u, t, e) => {
  if (t.has(u))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(u) : t.set(u, e);
};
var P = (u, t, e) => (kt(u, t, "access private method"), e);
const jt = [1, 0];
function st(u, t) {
  return Math.pow(u - t, 2);
}
function D(u, t) {
  return Math.abs(u - t);
}
function Dt(u, t) {
  return Math.sqrt(u * u + t * t);
}
function H(u) {
  return Math.random() * u;
}
function Tt(u) {
  return u * (Math.PI / 180);
}
function nt(u) {
  return Math.floor(Math.random() * u);
}
function Lt(u, t) {
  let e = 0;
  for (let i = 0; i < u.length; i++)
    e += u[i] * t[i];
  return e;
}
function ht(u, t) {
  if (qt(u, t))
    return -1;
  let e = xt(u, t), r = Lt(e, jt) / (Nt(u, t) * 1), l = Math.acos(r) * 180 / Math.PI;
  return e[1] < 0 && (l = -l), (l + 360) % 360;
}
function xt(u, t) {
  let e = [];
  for (let i = 0; i < u.length; i++)
    e.push(t[i] - u[i]);
  return e;
}
function Nt(u, t) {
  let e = xt(u, t);
  return Dt(e[0], e[1]);
}
function qt(u, t) {
  if (u.length != t.length)
    return !1;
  {
    let e = !0;
    for (let i = 0; i < u.length; i++)
      if (u[i] !== t[i]) {
        e = !1;
        break;
      }
    return e;
  }
}
function vt(u, t, e, i) {
  let r = ht(u, t), l = ht(e, i);
  return D(r, l);
}
function gt(u, t) {
  return u[0] * t[1] - u[1] * t[0];
}
function K(u, t) {
  let e = u.length, i = u[0].length, r = 0;
  for (let l = 0; l < e; l++)
    for (let s = 0; s < i; s++)
      r = r + u[l][s] * t[l][s];
  return r;
}
function At(u) {
  return K([
    [0, 1, 0],
    [1, -4, 1],
    [0, 1, 0]
  ], u);
}
function Et(u) {
  let t = [
    [0, 0, 0],
    [0.16666666666666666, 0, -0.16666666666666666],
    [0, 0, 0]
  ], e = [
    [0, -1 / 6, 0],
    [0, 0, 0],
    [0, 1 / 6, 0]
  ], i = K(t, u), r = K(e, u);
  return Math.sqrt(r * r + i * i);
}
function Gt(u) {
  let t = [
    [0, 0, 0],
    [0.16666666666666666, 0, -0.16666666666666666],
    [0, 0, 0]
  ], e = [
    [0, -1 / 6, 0],
    [0, 0, 0],
    [0, 1 / 6, 0]
  ], i = -K(t, u), r = -K(e, u), l = 57.29578 * Math.atan2(r, -i), s = 0;
  return l < 0 ? s = 90 - l : l > 90 ? s = 360 - l + 90 : s = 90 - l, s;
}
var z = 1 / 1048576;
function Ot(u) {
  var t = Number.POSITIVE_INFINITY, e = Number.POSITIVE_INFINITY, i = Number.NEGATIVE_INFINITY, r = Number.NEGATIVE_INFINITY, l, s, n, h, o, d;
  for (l = u.length; l--; )
    u[l][0] < t && (t = u[l][0]), u[l][0] > i && (i = u[l][0]), u[l][1] < e && (e = u[l][1]), u[l][1] > r && (r = u[l][1]);
  return s = i - t, n = r - e, h = Math.max(s, n), o = t + s * 0.5, d = e + n * 0.5, [
    [o - 20 * h, d - h],
    [o, d + 20 * h],
    [o + 20 * h, d - h]
  ];
}
function dt(u, t, e, i) {
  var r = u[t][0], l = u[t][1], s = u[e][0], n = u[e][1], h = u[i][0], o = u[i][1], d = Math.abs(l - n), a = Math.abs(n - o), c, f, g, x, p, m, _, y, w, b;
  if (d < z && a < z)
    throw new Error("Eek! Coincident points!");
  return d < z ? (x = -((h - s) / (o - n)), m = (s + h) / 2, y = (n + o) / 2, c = (s + r) / 2, f = x * (c - m) + y) : a < z ? (g = -((s - r) / (n - l)), p = (r + s) / 2, _ = (l + n) / 2, c = (h + s) / 2, f = g * (c - p) + _) : (g = -((s - r) / (n - l)), x = -((h - s) / (o - n)), p = (r + s) / 2, m = (s + h) / 2, _ = (l + n) / 2, y = (n + o) / 2, c = (g * p - x * m + y - _) / (g - x), f = d > a ? g * (c - p) + _ : x * (c - m) + y), w = s - c, b = n - f, { i: t, j: e, k: i, x: c, y: f, r: w * w + b * b };
}
function Xt(u) {
  var t, e, i, r, l, s;
  for (e = u.length; e; )
    for (r = u[--e], i = u[--e], t = e; t; )
      if (s = u[--t], l = u[--t], i === l && r === s || i === s && r === l) {
        u.splice(e, 2), u.splice(t, 2);
        break;
      }
}
function pt(u, t) {
  var e = u.length, i, r, l, s, n, h, o, d, a, c, f, g;
  if (e < 3)
    return [];
  if (u = u.slice(0), t)
    for (i = e; i--; )
      u[i] = u[i][t];
  for (l = new Array(e), i = e; i--; )
    l[i] = i;
  for (l.sort(function(x, p) {
    var m = u[p][0] - u[x][0];
    return m !== 0 ? m : x - p;
  }), s = Ot(u), u.push(s[0], s[1], s[2]), n = [dt(u, e + 0, e + 1, e + 2)], h = [], o = [], i = l.length; i--; o.length = 0) {
    for (g = l[i], r = n.length; r--; ) {
      if (d = u[g][0] - n[r].x, d > 0 && d * d > n[r].r) {
        h.push(n[r]), n.splice(r, 1);
        continue;
      }
      a = u[g][1] - n[r].y, !(d * d + a * a - n[r].r > z) && (o.push(
        n[r].i,
        n[r].j,
        n[r].j,
        n[r].k,
        n[r].k,
        n[r].i
      ), n.splice(r, 1));
    }
    for (Xt(o), r = o.length; r; )
      f = o[--r], c = o[--r], n.push(dt(u, c, f, g));
  }
  for (i = n.length; i--; )
    h.push(n[i]);
  for (n.length = 0, i = h.length; i--; )
    h[i].i < e && h[i].j < e && h[i].k < e && n.push(h[i].i, h[i].j, h[i].k);
  return n;
}
function _t(u, t) {
  let e = t.y - u.y, i = u.x - t.x, r = t.x * u.y - u.x * t.y;
  return [e, i, r];
}
function Vt(u, t, e, i) {
  return u * i.x + t * i.y + e === 0;
}
function yt(u, t, e) {
  let i = _t(u, t), r = e.x, l = e.y, s = i[0], n = i[1], h = i[2], o = Math.abs(s * r + n * l + h), d = Math.sqrt(s * s + n * n);
  return o / d;
}
function U(u, t, e) {
  let i = (t.x - u.x) * (e.y - t.y) - (t.y - u.y) * (e.x - t.x);
  return i > 0 ? 1 : i < 0 ? 2 : i === 0 ? 3 : -1;
}
function zt(u) {
  let t = u.slice(), e = [];
  for (; t.length != 0; ) {
    let i = t.pop();
    if (t.findIndex((r) => r.x == i.x && r.y == i.y) === -1)
      e.push(i);
    else
      continue;
  }
  return e;
}
class B {
  /**
   * Create a point.
   * @param {number} x - The x value.
   * @param {number} y - The y value.
   */
  constructor(t, e) {
    this.x = t, this.y = e;
  }
  /**
   * 获取点的缓冲区（圆）
   * @param {number} distance - 缓冲区半径
   * @return {Circle} - 返回缓冲区对象（圆）
  */
  getBuffer(t) {
    return new $(this, t);
  }
  /**
   *  获取到 p 点的向量
   * @param {*} p 
   */
  getVector_(t) {
    return new Bt(this, t);
  }
  /**
   * Get the x value.
   * @return {number} The x value.
   */
  getX() {
    return this.x;
  }
  /**
   * Get the y value.
   * @return {number} The y value.
   */
  getY() {
    return this.y;
  }
  /**
   * Get the x,y value.
   * @return {Array} [x,y]
   */
  getXY() {
    return [this.x, this.y];
  }
  /**
   * 计算欧氏距离(Euclidean Distance)
   * functionname_()表示对某对象的运算
   * @param {Point} InPoint - 输入点对象
   * @return {number} - 返回两点间的欧氏距离
   */
  getEuclideanDistance_(t) {
    return Math.sqrt(st(this.x, t.x) + st(this.y, t.y));
  }
  /**
   * 曼哈顿距离(Manhattan Distance) Chebyshev distance
   * @param {Point} InPoint - 输入点对象
   * @return {number} - 返回两点间的曼哈顿距离
   */
  getManhattanDistance_(t) {
    return D(this.x, t.x) + D(this.y, t.y);
  }
  /**
   * 切比雪夫距离(Chebyshev distance) : max(|a-b|...)
   * @param {Point} InPoint - 输入点对象
   * @return {number} - 返回两点间的切比雪夫距离
   */
  getChebyshevDistance_(t) {
    return Math.max(D(this.x, t.x), D(this.y, t.y));
  }
  /**
   * 简化闵氏距离(Minkowski Distance) : (｜a-b｜^p+...)^(1/p)
   * @param {Point} InPoint - 输入点对象
   * @param {number} p - 闵氏距离的维度
   * @return {number} - 返回两点间的闵氏距离
   */
  getMinkowskiDistance_(t, e) {
    return Math.pow(
      Math.pow(D(this.x, t.x), e) + Math.pow(D(this.y, t.y), e),
      Math.pow(e, -1)
    );
  }
  /**
   * 计算以该点为开始点与输入点构成向量关于x正半轴构成的夹角 范围0~360
   * functionname_()表示对某对象的运算
   * @param {Point} InPoint - 输入点对象
   * @return {number} - 返回角度
   */
  getAngle_(t) {
    let e = this.getXY(), i = t.getXY();
    return ht(e, i);
  }
  /**
   * 计算该点到某直线（始点，终点）距离
   * @param {Point} sp - 始点
   * @param {Point} ep - 终点
   * @return {number} 本点到这条直线的距离
   */
  getDistance2Line_(t, e) {
    return yt(t, e, this);
  }
  /**
   * 判断两点是否为同一点
   * @param {Point} op - 输入点
   * @return {boolean} 是则为true 否则为false
   */
  IsSamePoint_(t) {
    return t.x === this.x && t.y === this.y;
  }
  /**
   * 获取直线外一点到该点的垂足（不考虑线段端点）
   * @param {SimpleLine} simpleline - 目标线
   * @return {Point} 返回一个点类型的对象
   */
  getFootPoint_(t) {
    let e = t.getMathFrom(), i = e[0], r = e[1], l = e[2], s = this.x, n = this.y, h = (r * r * s - i * r * n - i * l) / (i * i + r * r), o = (-i * r * s + i * i * n - r * l) / (i * i + r * r);
    return new B(h, o);
  }
  /**
   * Convert a string containing two comma-separated numbers into a point.
   * 将由逗号隔开的一对数字解析为点对象。
   * 类（class）通过 static 关键字定义静态方法。不能在类的实例上调用静态方法，而应该通过类本身调用。
   * 这些通常是实用程序方法，例如创建或克隆对象的功能。
   * @param {string} str - The string containing two comma-separated numbers.
   * @return {Point} A Point object.
   */
  static fromString(t) {
    let e = t.split(",");
    return new B(e[0], e[1]);
  }
}
class N {
  /**
   * Create a simpleline（vector）
   * @param {Point} sp - the start point
   * @param {Point} ep - the end point 
   */
  constructor(t, e) {
    this.sp = t, this.ep = e, this.pointlist = [t, e], this.revertimes = 0, this.extent = [t.x, t.y, e.x, e.y];
  }
  /**
   * Get the pointlist.
   * @return {array} The point list.
   */
  getSimpleLine() {
    return this.pointlist;
  }
  /**
   * Get the startpoint.
   * @return {Point} The start point.
   */
  getStartPoint() {
    return this.sp;
  }
  /**
   * Get the endpoint.
   * @return {Point} The end point.
   */
  getEndPoint() {
    return this.ep;
  }
  /**
   * 在不考虑地理意义的情况下求解线到点的距离。
   * - get the (math)distance from the line to point.
   *  -    __math__ means DO NOT CONSIDER THE REAL CONDITION
   * @param {Point} op - 直线外一点
   * @return {number} distance
   */
  getMathDistance2Point_(t) {
    return yt(this.sp, this.ep, t);
  }
  /**
   * 获取该线一般式的系数.
   * - get a,b,c of __ax+by+c=0__ .
   * @return {array} 返回一个参数数组
   * |/|a|b|c|
   * |--|--|--|--|
   * |index|0|1|2|
   */
  getMathFrom() {
    return _t(this.sp, this.ep);
  }
  /**
   * 数学意义 ：判断某点是否在线上。（即不考虑线的端点）
   * * (math) : is the in_point on the simple line .
   * * __math__ means __DO NOT CONSIDER THE REAL CONDITION__
   * @param {Point} op - the point .
   * @return {boolean} the result .
   */
  IsPointOnLine_(t) {
    let e = this.getMathFrom(), i = e[0], r = e[1], l = e[2];
    return Vt(i, r, l, t);
  }
  /**
   * 调转向量方向 
   * - 注意：并不会影响其本身 
   * - 作用仅体现在 __与其他向量__ 交互上 （如与其他向量求角度）
   */
  Reverse() {
    this.pointlist.reverse();
    let t = this.sp;
    this.sp = this.ep, this.ep = t, this.revertimes++;
  }
  /**
   * 返回一个调转了方向的向量 （不会影响本身）
   * @return {SimpleLine} 返回SimpleLine类型值
   */
  getReversedLine() {
    return new N(this.ep, this.sp);
  }
  /**
   * 计算到另一向量的夹角 
   * - 实现思路 ： 将两向量的开始点移动到原点 
   * - 分别计算两向量关于x轴正半轴的夹角 
   *  - 然后取相减结果的绝对值
   * @param {SimpleLine} osl  另一个向量 
   * @return {number} 返回角度值 :
   * - 范围： [0,360)
   */
  getAngle2Line_(t) {
    return vt(
      this.sp.getXY(),
      this.ep.getXY(),
      t.sp.getXY(),
      t.ep.getXY()
    );
  }
  /**
   * get the length of the line ｜ 获取线段长度
   * @returns {number} the length of the line
   */
  getLength() {
    return this.sp.getEuclideanDistance_(this.ep);
  }
  /**
   * (用于线集去重)非严格判断（即不考虑方向方向相反）只要端点相同即为真
   * @param {SimpleLine} ol - 需要判断的线
   * @return {boolean} 若是则真
   */
  IsSameLine_(t) {
    return !!(this.sp.IsSamePoint_(t.sp) && this.ep.IsSamePoint_(t.ep) || this.sp.IsSamePoint_(t.ep) && this.ep.IsSamePoint_(t.sp));
  }
}
class rt {
  /**
   * Create a line
   * @param {array} pointlist - The point list.
   */
  constructor(t) {
    this.pointlist = t, this.sp = t[0], this.ep = t[t.length - 1], this.getExtent();
  }
  /**
   * 延长该线 即向点列末尾追加点 注意 最好不要与原有的点重复
   * @param {Point} point - the new end point
   */
  extendLine(t) {
    this.pointlist.push(t), this.ep = t, this.getExtent();
  }
  /**
   * Get the pointlist.
   * @return {array} The point list.
   */
  getLine() {
    return this.pointlist;
  }
  /**
   * Get the startpoint.
   * @return {Point} The start point.
   */
  getStartPoint() {
    return this.sp;
  }
  /**
   * Get the endpoint.
   * @return {Point} The end point.
   */
  getEndPoint() {
    return this.ep;
  }
  /**
  * 获取道格拉斯扑克法抽稀后的子集 不改变自身
  * @param {number} thresh - 道格拉斯扑克法的阈值 用于调节抽稀程度 
  * @return {array} 道格拉斯扑克法抽稀后的子集
  */
  getSubSetByDP(t) {
    return Yt(this.pointlist, t);
  }
  /**
  * * 线一分为二 [sp,mp1,mp2,mp3,op] 
  * @param {number} index - 切分位置的索引 注意切分处的点会被重复两次 也就是说最小单元是两点构成的直线
  * @return {object} 例如从索引为1开始切分{ firstline ;[[sp,mp1],secondline: [mp1,mp2,mp3,op]}
  */
  getTwoSubLineFromInx(t) {
    return wt(this.pointlist, t);
  }
  /**
    * 获取该折线的外包络矩形
    */
  getExtent() {
    this.extent = mt(this.pointlist);
  }
  /**
   * 获得该折线的缓冲区
   * - 缓冲区为一个多边形
   * @param {*} distance - 缓冲区距离
   * @return {Polygon} 返回缓冲区
   */
  getBuffer(t) {
    const e = (o, d, a) => {
      let c = d.x - o.x, f = d.y - o.y, g = Math.sqrt(c * c + f * f), x = c / g, p = f / g, m = d.x + x * a, _ = d.y + p * a;
      return new B(m, _);
    }, i = (o, d, a, c, f) => {
      d.x - o.x, d.y - o.y, c.x - a.x, c.y - a.y;
      let g = r(o, d), x = r(a, c), p = { x: g.x + x.x, y: g.y + x.y }, m = Math.sqrt(p.x * p.x + p.y * p.y), _ = p.x / m, y = p.y / m, w = d.x + _ * f, b = d.y + y * f;
      return new B(w, b);
    }, r = (o, d) => {
      let a = d.x - o.x, c = d.y - o.y, f = Math.sqrt(a * a + c * c), g = -c / f, x = a / f;
      return { x: g, y: x };
    };
    let l = [], s = this.pointlist, n = s.length;
    for (let o = 0; o < n - 2; o++) {
      let d = s[o], a = s[o + 1], c = s[o + 2];
      if (o == 0) {
        let g = e(a, d, t * 2);
        l.push(g);
        let x = r(d, a), p = new B(d.x + x.x * t, d.y + x.y * t);
        l.push(p);
      }
      let f = i(d, a, a, c, t);
      if (l.push(f), o == n - 3) {
        let g = r(a, c), x = new B(c.x + g.x * t, c.y + g.y * t);
        l.push(x);
      }
    }
    for (let o = n - 1; o > 1; o--) {
      let d = s[o], a = s[o - 1], c = s[o - 2];
      if (o == n - 1) {
        let g = e(a, d, t * 2);
        l.push(g);
        let x = r(d, a), p = new B(d.x + x.x * t, d.y + x.y * t);
        l.push(p);
      }
      let f = i(d, a, a, c, t);
      if (l.push(f), o == 2) {
        let g = r(a, c), x = new B(c.x + g.x * t, c.y + g.y * t);
        l.push(x);
      }
    }
    return new Z(l);
  }
}
class at {
  /**
  * Create a pointset
  * @param {array} pointlist - The point list.
  */
  constructor(t) {
    this.pointset = t, this.dedup(), this.getExtent();
  }
  /**
   * Get the pointset
   * @return {array} The pointlist
   */
  getPointSet() {
    return this.pointset.slice();
  }
  /**
  * Get the convexhull of the pointset
  * @return {array} The convexhull
  */
  getConvexHull() {
    return Ft(this.pointset);
  }
  /**
   * 点集去重 ： 去掉点集中重复的点
   */
  dedup() {
    this.pointset = zt(this.pointset);
  }
  /**
   * 获取该点集的外包络矩形
   * @return {array} - return array: [x1,y1,x2,y2]
   * - 注意 ：左上角点(x1,y1)
   * - 右下角点(x2,y2)
   * * (x1,y1)-------|
   * *    |----M--------|
   * *    |-----B-------|
   * *    |------R(x2,y2)
   */
  getExtent() {
    return this.extent = mt(this.pointset), this.extent;
  }
  /**
   * 由 二维 Array 生成点集类 
   * * arr:[
   * * [column0,column1,column2,column3,...],
   * * ...
   * ]
   * axis_x = 0,1,2,3,4...(define axis_x by index of the array)
   * * **由于是二维画布 需要选定可视化的维度**
   * @param {array} arr - 传入的二维数组
   * @param {number} axis_x - 该数组数据可视化的属性1
   * @param {number} axis_y - 该数组数据可视化的属性2
   * @returns 
   */
  static fromaArray_2D(t, e, i) {
    let r = [];
    for (let s = 0; s < t.length; s++) {
      let n = new B(t[s][e], t[s][i]);
      r.push(n);
    }
    return new at(r);
  }
}
function mt(u) {
  let t = u.slice();
  t.sort((i, r) => i.x - r.x);
  let e = u.slice();
  return e.sort((i, r) => i.y - r.y), [t[0].x, e[0].y, t[t.length - 1].x, e[e.length - 1].y];
}
function Ft(u) {
  let t = u.slice();
  t.sort((l, s) => l.x - s.x);
  let e = [];
  e.push(t[0]), e.push(t[1]);
  for (let l = 2; l < t.length; l++)
    for (e.push(t[l]); e.length >= 3 && U(e[e.length - 3], e[e.length - 2], e[e.length - 1]) == 2; )
      e.splice(e.length - 2, 1);
  let i = [];
  i.push(t[t.length - 1]), i.push(t[t.length - 2]);
  for (let l = t.length - 3; l >= 0; l--)
    for (e.push(t[l]); e.length >= 3 && U(e[e.length - 3], e[e.length - 2], e[e.length - 1]) == 2; )
      e.splice(e.length - 2, 1);
  return i.pop(), i.shift(), e.concat(i);
}
function wt(u, t) {
  return {
    firstline: u.slice(0, t + 1),
    secondline: u.slice(t, u.length + 1)
  };
}
function ot(u, t, e) {
  let i = u.slice(), r = i.shift(), l = i.pop();
  if (i.length === 0)
    e.push(u);
  else {
    i.sort((h, o) => h.getDistance2Line_(r, l) - o.getDistance2Line_(r, l));
    let s = i[i.length - 1], n = u.indexOf(s);
    if (s.getDistance2Line_(r, l) < t)
      e.push([r, l]);
    else {
      let h = wt(u, n);
      ot(h.firstline, t, e), ot(h.secondline, t, e);
    }
  }
}
function Yt(u, t) {
  let e = [];
  ot(u, t, e);
  let i = [];
  for (let r of e)
    i.push(r[0]);
  return i.push(e[e.length - 1][1]), i;
}
var J, bt, Q, Mt;
const ut = class extends rt {
  /**
   * 构建多边形类 需要输入边界点集
   * @param {array} pointlist - 构成边界的顺序点集 
   * @param {boolean} Isanticlockwise - 该多边形是否以逆时针标点 （决定了多边形内外区域的判定）
   * @extends Line
   * - 注意：若不是逆时针会首先进行转换
   */
  constructor(e) {
    super(e);
    /**
     * (private) 向量化 将多边形的边按照逆时针顺序转换为向量（存放在向量列表内）
     * @return {array} 返回依照逆时针生成的边向量列表
     * - 在封闭多边形中边的数目与点相同
     */
    q(this, J);
    /**
     * 判断输入多边形是否为逆时针多边形
     * @return {boolean}  
     * | 是逆时针|不是逆时针 |
     * |--|--|
     * | true| false|
     */
    q(this, Q);
    this.Isanticlockwise = P(this, Q, Mt).call(this), this.vectorlist = P(this, J, bt).call(this);
  }
  /**
   * 获取多边形的边的点列表（逆时针）
   */
  get_VectorList() {
    return this.vectorlist;
  }
  /**
   * 获取多边形的边的点列表（逆时针）
   * @returns {Array} 返回多边形的边的点列表（逆时针）
   */
  get_OrderedPointList() {
    let e = this.get_VectorList(), i = [];
    for (let r = 0; r < e.length; r++) {
      let l = e[r].sp;
      i.push(l);
    }
    return i;
  }
  getBuffer(e) {
    const i = (f, g, x, p, m, _ = !1) => {
      if (_) {
        let T = f;
        f = p, p = T;
      }
      g.x - f.x, g.y - f.y, p.x - x.x, p.y - x.y;
      let y = r(f, g), w = r(x, p), b = { x: y.x + w.x, y: y.y + w.y }, R = Math.sqrt(b.x * b.x + b.y * b.y), M = b.x / R, S = b.y / R, k = g.x + M * m, lt = g.y + S * m;
      return new B(k, lt);
    }, r = (f, g) => {
      let x = g.x - f.x, p = g.y - f.y, m = Math.sqrt(x * x + p * p), _ = -p / m, y = x / m;
      return { x: _, y };
    };
    let l = [], s = this.pointlist, n = s.length;
    for (let f = 0; f < n - 2; f++) {
      let g = s[f], x = s[f + 1], p = s[f + 2], m = i(g, x, x, p, e, !0);
      l.push(m);
    }
    let h = s[n - 2], o = s[n - 1], d = s[0];
    s[1];
    let a = i(h, o, o, d, e, !0);
    return l.push(a), h = s[n - 1], o = s[0], d = s[1], s[2], a = i(h, o, o, d, e, !0), l.push(a), new ut(l);
  }
};
let Z = ut;
J = new WeakSet(), bt = function() {
  let e = [];
  for (let r = 0; r < this.pointlist.length - 1; r++) {
    let l = new N(this.pointlist[r], this.pointlist[r + 1]);
    e.push(l);
  }
  let i = new N(this.ep, this.sp);
  return e.push(i), e;
}, Q = new WeakSet(), Mt = function() {
  let e = 0;
  for (let i = 0; i < this.pointlist.length - 1; i++)
    return e += gt(
      this.pointlist[i].getXY(),
      this.pointlist[i + 1].getXY()
    ), e += gt(this.ep.getXY(), this.sp.getXY()), e > 0;
};
var tt, Ct;
class X {
  /**
   * 构造三角形类 逆时针输入点列
   * @param {Point} po1 - 三角形第一个点
   * @param {Point} po2 - 三角形第二个点
   * @param {Point} po3 - 三角形第三个点
   */
  constructor(t, e, i) {
    q(this, tt);
    this.pa = t, this.pb = e, this.pc = i, this.a = new N(e, i), this.b = new N(i, t), this.c = new N(t, e), this.area = P(this, tt, Ct).call(this);
  }
  /**
   * 获取该三角形外接圆的半径
   * @return {number} return the radius of the circle 
   */
  getEXCRadius() {
    let t = this.c.getAngle2Line_(this.b.getReversedLine()), e = Math.sin(Tt(t));
    return Math.abs(this.a.getLength() / (2 * e));
  }
  /**
   * 返回包含三角形所有顶点的列表
   * @returns 返回包含三角形所有顶点的列表
   */
  getTriangle() {
    return [this.pa, this.pb, this.pc];
  }
  /**
   * 获取该三角形的外接圆圆心（点对象）
   * @return {Point} 返回圆心 点对象 
   */
  getEXCCenter() {
    let t = this.pa.x, e = this.pb.x, i = this.pc.x, r = this.pa.y, l = this.pb.y, s = this.pc.y, n = 2 * (e - t), h = 2 * (l - r), o = e * e + l * l - t * t - r * r, d = 2 * (i - e), a = 2 * (s - l), c = i * i + s * s - e * e - l * l, f = (o * a - c * h) / (n * a - d * h), g = (n * c - d * o) / (n * a - d * h);
    return new B(f, g);
  }
  /**
   * 获取该三角形的外接圆对象
   * @return {Circle} 返回一个圆形对象
   */
  getEXCircle() {
    return new $(this.getEXCCenter(), this.getEXCRadius());
  }
  /**
   * 获取内切圆圆心（点对象）
   * @returns {Point} 内切圆圆心（点对象）
   */
  getINCcenter() {
    let t = this.pa.x, e = this.pa.y, i = this.pb.x, r = this.pb.y, l = this.pc.x, s = this.pc.y, n = this.a.getLength(), h = this.b.getLength(), o = this.c.getLength(), d = (n * t + h * i + o * l) / (n + h + o), a = (n * e + h * r + o * s) / (n + h + o);
    return new B(d, a);
  }
  getINCRadius() {
    let t = this.a.getLength(), e = this.b.getLength(), i = this.c.getLength();
    return 2 * this.area / (t + e + i);
  }
  getINCcircle() {
    return new $(this.getINCcenter, this.getINCRadius);
  }
}
tt = new WeakSet(), Ct = function() {
  let t = this.a.getLength(), e = this.b.getLength(), i = this.c.getLength(), r = (t + e + i) / 2;
  return Math.sqrt(r * (r - t) * (r - e) * (r - i));
};
class $ {
  /**
   * 构造圆对象 包括中心点以及半径
   * @param {Point} center - 中心点
   * @param {number} radius - 半径
   */
  constructor(t, e) {
    this.center = t, this.radius = e;
  }
  // 重载构造函数 
  /**
   * 判断某点是否在圆上 考虑到误差这里会设置一个阈值
   * @param {Point} op - 需要判断相对关系的带你
   * @param {number} thresh - 判断阈值 只有小于该阈值才会判在点上
   * @return {boolean} 返回值为布尔类型变量
   */
  IsPointOnCircle_(t, e) {
    let i = this.center.getEuclideanDistance_(t);
    return Math.abs(i - this.radius) <= e;
  }
  /**
   * get the center point 
   * @return {Point} return the center point 
   */
  getCenter() {
    return this.center;
  }
  /**
   * get the radius
   * @return {number} return thd radius
   */
  getRadius() {
    return this.radius;
  }
  // 静态方法创建圆(Three Points)
  static createCircle_from_Trangle(t, e, i) {
    return new X(t, e, i).getEXCircle();
  }
}
function Wt(u, t, e) {
  let i = u.extent, r = i[0], l = i[1], s = i[2], n = i[3], h = s - r, o = l - n, d = 0, a = 0, c = 0, f = 0, g = 0, x = 0;
  if (h / o > 1)
    d = (r + s) / 2, a = n + 2 * o, c = r + h / 2, f = s - h / 2, g = n, x = n;
  else {
    let w = o - h;
    h = h + 2 * w, d = (r + s) / 2, a = n + 2 * o, c = r + h / 2, f = s - h / 2, g = n, x = n;
  }
  let p = new B(d, a), m = new B(c - t, g + e), _ = new B(f + t, x + e);
  return new X(p, m, _);
}
function Ht(u) {
  var t = pt(u);
  let e = [];
  for (let i = t.length; i; ) {
    --i;
    let r = new B(u[t[i]][0], u[t[i]][1]);
    --i;
    let l = new B(u[t[i]][0], u[t[i]][1]);
    --i;
    let s = new B(u[t[i]][0], u[t[i]][1]), n = new X(r, l, s);
    e.push(n);
  }
  return e;
}
function Kt(u) {
  var t = pt(u);
  let e = [];
  for (let r = t.length; r; ) {
    let l = [];
    --r;
    let s = t[r], n = new B(u[t[r]][0], u[t[r]][1]);
    --r;
    let h = t[r], o = new B(u[t[r]][0], u[t[r]][1]);
    --r;
    let d = t[r], a = new B(u[t[r]][0], u[t[r]][1]);
    l = [s, h, d];
    let c = new X(n, o, a), f = c.getINCcenter();
    l.push(f.x), l.push(f.y), e.push(l), c = null;
  }
  let i = [];
  for (let r = 0; r < e.length; r++) {
    let l = [];
    l.length = e.length, l.fill(0), i.push(l);
  }
  for (let r = 0; r < e.length; r++) {
    let l = e[r][0], s = e[r][1], n = e[r][2], h = [l, s], o = [s, n], d = [l, n];
    for (let a = 0; a < e.length; a++)
      if (r !== a) {
        let c = [e[a][0], e[a][1]], f = [e[a][1], e[a][2]], g = [e[a][0], e[a][2]];
        h[0] === c[0] && h[1] === c[1] || h[0] === f[0] && h[1] === f[1] || h[0] === g[0] && h[1] === g[1] || h[0] === c[1] && h[1] === c[0] || h[0] === f[1] && h[1] === f[0] || h[0] === g[1] && h[1] === g[0] ? i[r][a] = 1 : o[0] === c[0] && o[1] === c[1] || o[0] === f[0] && o[1] === f[1] || o[0] === g[0] && o[1] === g[1] || o[0] === c[1] && o[1] === c[0] || o[0] === f[1] && o[1] === f[0] || o[0] === g[1] && o[1] === g[0] ? i[r][a] = 2 : (d[0] === c[0] && d[1] === c[1] || d[0] === f[0] && d[1] === f[1] || d[0] === g[0] && d[1] === g[1] || d[0] === c[1] && d[1] === c[0] || d[0] === f[1] && d[1] === f[0] || d[0] === g[1] && d[1] === g[0]) && (i[r][a] = 3);
      }
  }
  return i;
}
class W {
  /**
   * 构造函数 
   * @param {number} x 左上角x坐标
   * @param {number} y 左上角y坐标
   * @param {number} w 宽度
   * @param {number} h 高度
   * 
   */
  constructor(t, e, i, r) {
    this.x1 = t, this.y1 = e, this.x2 = t + i, this.y2 = e + r;
  }
  // 判断点是否在矩形内
  isPointInRect(t, e) {
    return t >= this.x1 && t <= this.x2 && e >= this.y1 && e <= this.y2;
  }
  // 判断矩形是否在矩形内
  isRectInRect(t, e, i, r) {
    return !!(this.isPointInRect(t, e) && this.isPointInRect(i, r));
  }
  // 判断矩形是否与矩形相交
  isRectCrossRect(t, e, i, r) {
    return !!(this.isPointInRect(t, e) || this.isPointInRect(i, r));
  }
  /**
   * 获取与输入两矩形相交的矩形，如果不相交则返回null
   * @param {MBRect} MBR 输入矩形 
   * @returns {MBRect} 相交的矩形
   */
  getCrossRect(t) {
    if (this.isRectCrossRect(t.x1, t.y1, t.x2, t.y2)) {
      let e = Math.max(this.x1, t.x1), i = Math.max(this.y1, t.y1), r = Math.min(this.x2, t.x2), l = Math.min(this.y2, t.y2);
      return new W(e, i, r - e, l - i);
    } else
      return null;
  }
  // 获取矩形左上角和右下角的坐标二维数组
  get_2DMBR() {
    return [[this.x1, this.y1], [this.x2, this.y2]];
  }
  get_1DMBR() {
    return [this.x1, this.y1, this.x2, this.y2];
  }
  // 获取矩形的中心点坐标
  getCenter() {
    return [(this.x1 + this.x2) / 2, (this.y1 + this.y2) / 2];
  }
  // 静态方法
  // 从二维坐标数组创建MBR
  /**
   * 从二维坐标数组创建MBR
   * @param {number[][]} array 二维坐标数组 [[x1,y1],[x2,y2]]
   * @returns {MBRect} MBR
   */
  static createMBRFrom2DArray(t) {
    let e = t[0][0], i = t[0][1], r = t[1][0], l = t[1][1];
    return new W(e, i, r - e, l - i);
  }
  /**
   * 从一维坐标数组创建MBR 
   * @param {number[]} array 一维坐标数组 [x1,y1,x2,y2]
   * @returns {MBRect} MBR 
   */
  static createMBRFrom1DArray(t) {
    let e = t[0], i = t[1], r = t[2], l = t[3];
    return new W(e, i, r - e, l - i);
  }
}
class Bt {
  constructor(t, e) {
    this.x = e[0] - t[0], this.y = e[1] - t[1], this.orip = t, this.endp = e;
  }
  // 获取向量的模
  getModule() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  // 获取向量的单位向量
  getUnitVector() {
    let t = this.getModule();
    return [this.x / t, this.y / t];
  }
  // 获取向量的法向量
  getNormalVector() {
    return [-this.y, this.x];
  }
  // 获取向量的点积
  getDotProduct(t) {
    return this.x * t.x + this.y * t.y;
  }
  // 获取向量的叉积
  getCrossProduct(t) {
    return this.x * t.y - this.y * t.x;
  }
  // 获取向量的夹角（弧度制）
  getAngleInRadian(t) {
    let e = this.getDotProduct(t), i = this.getModule(), r = t.getModule();
    return Math.acos(e / (i * r));
  }
  // 获取向量的夹角（角度制）
  getAngleInDegree(t) {
    let e = this.getDotProduct(t), i = this.getModule(), r = t.getModule();
    return Math.acos(e / (i * r)) * 180 / Math.PI;
  }
  // 获取向量的方向
  getDirection() {
    return Math.atan2(this.y, this.x);
  }
  // 获取向量的方向（角度制）
  getDirectionInDegree() {
    return Math.atan2(this.y, this.x) * 180 / Math.PI;
  }
  // 获取向量的方向（弧度制）
  getDirectionInRadian() {
    return Math.atan2(this.y, this.x);
  }
  get_1DVector() {
    return [this.x, this.y];
  }
  get_2DVector() {
    return [[0, 0], [this.x, this.y]];
  }
  get_1DPointVector() {
    return [this.orip, this.endp];
  }
  get_2DPointVector() {
    return [[this.orip.x, this.orip.y], [this.endp.x, this.endp.y]];
  }
}
const pe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Circle: $,
  Delaunay_triangulation: Ht,
  Line: rt,
  MBRect: W,
  Point: B,
  PointSet: at,
  Polygon: Z,
  SimpleLine: N,
  Tesson_polygon_adj_Matrix: Kt,
  Triangle: X,
  Vector: Bt,
  del_getSuperTriangle: Wt,
  getClockwiseFea: U
}, Symbol.toStringTag, { value: "Module" }));
var j, L, E, F;
const ft = class {
  /**
   * 栅格类 默认生成的栅格是 0 填充栅格
   * @param {number} row 栅格行数
   * @param {number} column 栅格列数
   * @param {number} filler 填充值（默认为 0 ）
   */
  constructor(t, e, i = 0) {
    /**
     * 创建空白二维栅格(默认填充值为 0)
     * @param {Number} filler 
     * @returns 
     */
    q(this, j);
    // === 性能调优 ===
    // 对内含栅格进行四叉树 分割
    // 该算法为递归算法
    // 该算法为私有方法
    /**
     * 对内含栅格进行四叉树分割
     * #### `internal function` 该算法处于内部测试阶段，不建议使用。
     * > - 栅格部分的代码，下一个版本将会进行重构。
     * > - 计算及渲染将引入webworker，以提高性能。同时内部数据将基于四叉树进行管理。
     * - 该算法为递归算法
     * - 该算法为私有方法
     * @param {Array} gridset - 栅格集合
     * @param {number} threshold - 分割阈值
     * @returns {Array} 返回一个二维数组，包含若干个栅格集合
     * @example
     * // 返回一个二维数组，包含若干个栅格集合
     * let res = quadTreeSplit(gridset,threshold);
     * // res = [gridset1,gridset2,gridset3,gridset4];
     */
    q(this, E);
    this.row = t, this.column = e, this.gridset = P(this, j, L).call(this, i);
  }
  /**
   * 将内部二维数组一维化
   * @returns {array} 返回一维数组 包含所有的栅格值
   */
  get1DArray() {
    let t = this.gridset, e = [];
    for (let i = 0; i < this.row; i++)
      for (let r = 0; r < this.column; r++)
        e.push(t[i][r]);
    return e;
  }
  get2DArray() {
    return this.gridset;
  }
  /**
   * **注意：该操作会改变栅格本身 请谨慎操作！**
   * 在原栅格四周缓冲出一个size大小的区域 并填充上 num 值
   * * 示意：
   * * [num  ... num] --- num*(column+2*size)
   * * [num .... sizeth num] + [ori_row_i] + [num .... sizeth num]
   * * .....
   * * [num  ... num] --- num*(column+2*size)
   * @param {number} size - padding区域大小
   * @param {number} num - 填入此区域的值
   */
  padding_(t, e) {
    this.paddingsize = t;
    let i = this.row + 2 * t, r = this.column + 2 * t;
    for (let l of this.gridset)
      for (let s = 0; s < t; s++)
        l.push(e), l.unshift(e);
    for (let l = 0; l < t; l++) {
      let s = [];
      s.length = r, s.fill(e), this.gridset.push(s), this.gridset.unshift(s);
    }
    this.row = i, this.column = r;
  }
  /** 
      * ### 反padding操作 
      * 抵消padding操作的效果
      * 在padding之后调用以抵消padding的效果 只可使用一次！
      */
  depadding_() {
    let t = this.row - 2 * this.paddingsize, e = this.column - 2 * this.paddingsize;
    for (let i of this.gridset)
      for (let r = 0; r < this.paddingsize; r++)
        i.pop(), i.shift();
    for (let i = 0; i < this.paddingsize; i++)
      this.gridset.pop(), this.gridset.shift();
    this.row = t, this.column = e;
  }
  /**
   * **需要先根据算子的大小进行padding操作 否则会有NaN错误**
   * 基于拉普拉斯算子的二维边缘提取 
   * @returns {array} 返回卷积结果（二维矩阵）
   */
  default_convolve() {
    let t = this.gridset, e = this.row, i = this.column, r = this.paddingsize, l = [];
    for (let s = r; s < e - r; s++) {
      let n = [];
      for (let h = r; h < i - r; h++) {
        let o = [
          [t[s - 1][h - 1], t[s - 1][h], t[s - 1][h + 1]],
          [t[s][h - 1], t[s][h], t[s][h + 1]],
          [t[s + 1][h - 1], t[s + 1][h], t[s + 1][h + 1]]
        ];
        n.push(At(o));
      }
      l.push(n);
    }
    return l;
  }
  /**
   * ** 需要先根据算子的大小进行padding操作 否则会有NaN错误 **
   * 计算栅格坡度
   * @returns {array} 返回卷积结果（二维矩阵）
   */
  get_Slope() {
    let t = this.gridset, e = this.row, i = this.column, r = this.paddingsize, l = [];
    for (let s = r; s < e - r; s++) {
      let n = [];
      for (let h = r; h < i - r; h++) {
        let o = [
          [t[s - 1][h - 1], t[s - 1][h], t[s - 1][h + 1]],
          [t[s][h - 1], t[s][h], t[s][h + 1]],
          [t[s + 1][h - 1], t[s + 1][h], t[s + 1][h + 1]]
        ];
        n.push(Et(o));
      }
      l.push(n);
    }
    return l;
  }
  // 根据阈值进行二值化（也叫重分类）
  // 二值化后的栅格值只有0和1
  // 0表示不属于该类 1表示属于该类
  // 该方法会改变原栅格
  /**
   * 根据阈值进行二值化（也叫重分类）
   * - **该方法不反回新的栅格，而是直接在原栅格上进行修改**
   * @param {number} threshold 阈值
   * @returns - 无返回值(直接在原栅格上进行修改)
   * - 重分类后的栅格值只有0和1，而不是返回一个新的栅格
   */
  reClassify_Binary_(t) {
    for (let e = 0; e < this.row; e++)
      for (let i = 0; i < this.column; i++)
        this.gridset[e][i] >= t ? this.gridset[e][i] = 1 : this.gridset[e][i] = 0;
    console.log(this.gridset);
  }
  /**
  * **需要先根据算子的大小进行padding操作 否则会有NaN错误**
  * 计算栅格坡度
  * @returns {array} 返回卷积结果（二维矩阵）
  */
  get_Aspect() {
    let t = this.gridset, e = this.row, i = this.column, r = this.paddingsize, l = [];
    for (let s = r; s < e - r; s++) {
      let n = [];
      for (let h = r; h < i - r; h++) {
        let o = [
          [t[s - 1][h - 1], t[s - 1][h], t[s - 1][h + 1]],
          [t[s][h - 1], t[s][h], t[s][h + 1]],
          [t[s + 1][h - 1], t[s + 1][h], t[s + 1][h + 1]]
        ];
        n.push(Gt(o));
      }
      l.push(n);
    }
    return l;
  }
  /**
   * 获取栅格采样直线，自动获取对应直线上的栅格采样值
   * @param {number} x1 - 采样直线起始像元行号
   * @param {number} y1 - 采样直线起始像元列号
   * @param {number} x2 - 采样直线终止像元行号
   * @param {number} y2 - 采样直线终止像元列号
   */
  get_SampleLine(t, e, i, r) {
    let l = i - t, s = r - e, n = [];
    if (Math.abs(l) < Math.abs(s)) {
      let h = Math.abs(s), o = l / h, d = s / h;
      for (let a = 0; a < h; a++) {
        let c = Math.round(t + a * o), f = e + a * d;
        n.push([c, f]);
      }
    } else {
      let h = Math.abs(l), o = s / h, d = l / h;
      for (let a = 0; a < h; a++) {
        let c = Math.round(e + a * o), f = t + a * d;
        n.push([f, c]);
      }
    }
    return n;
  }
  /**
   * 获取对应行列号的栅格值
   * @param {number} row - 所选栅格的行号
   * @param {number} column - 所选栅格的列号
   * @param {number} scale - **（可选）** 栅格值等比率缩放
   * @returns {number} 返回（放缩）后的栅格值
   */
  get_CellValue(t, e, i) {
    return i == null && (i = 1), this.gridset[t][e] * i;
  }
  /**
   * 按照栅格行列号取栅格集合的值
   * * 输入格式：
   * * [ [row1,column1],
   * *   [row2,column2],...]
   * @param {array} list  - 栅格列表
   * @param {number} scale - 栅格值修正比率（可将栅格值整体乘此数值）
   * @returns {array} 返回栅格值
   */
  get_CellValueList(t, e) {
    let i = [];
    for (let r of t) {
      let l = this.get_CellValue(r[0], r[1], e);
      i.push(l);
    }
    return i;
  }
  // 以下代码为 空间分析实习（一周）的功能更新。2023.6.20 
  /**
   * （单起点）累积表面生成算法
   * - 该算法默认自身包含的栅格为障碍物栅格（目前未实现）
   * @param {*} row 起点行号
   * @param {*} col 起点列号
   * @param {*} value 起点值（一般为0，代表该表面的最低值）
   * @returns {Array} 返回一个二维矩阵
   */
  splash_AccmulationSerface(t, e, i = 0) {
    const r = P(this, j, L).call(this, -1);
    let l = [];
    if (i === -1)
      return console.log("splash_AccmulationSerface: 起点值为-1,返回空白累积表面"), r;
    if (t < 0 || t >= this.row || e < 0 || e >= this.column)
      return console.log("splash_AccmulationSerface: 起点不在栅格范围内"), null;
    if (this.row < 3 || this.column < 3)
      return console.log("splash_AccmulationSerface: 栅格太小，无法生成累积表面"), null;
    const s = [0, 0, 1, -1, 1, 1, -1, -1, 2, -2, 2, -2, 1, -1, 0, 0, 1, -1, 1, -1], n = [1, -1, 0, 0, 1, -1, 1, -1, 0, 0, 1, -1, 2, -2, 1, -1, 1, -1, 0, 0], h = this.row, o = this.column;
    for (l.push([t, e]), r[t][e] = i; l.length > 0; ) {
      let [d, a] = l.shift();
      for (let c = 0; c < s.length; c++) {
        let f = d + s[c], g = a + n[c];
        f >= 0 && f < h && g >= 0 && g < o && r[f][g] === -1 && (r[f][g] = r[d][a] + 1, l.push([f, g]));
      }
    }
    return r;
  }
  /**
   * 将内部栅格转化为整数栅格
   * @returns {Array} 返回一个二维矩阵,该矩阵为整数栅格
   */
  toIntGrid() {
    let t = P(this, j, L).call(this, 0);
    for (let e = 0; e < this.row; e++)
      for (let i = 0; i < this.column; i++)
        t[e][i] = Math.round(this.gridset[e][i]);
    return console.log("转化为整数栅格成功"), console.log(t), t;
  }
  /**
   * 根据栅格值生成等值线(V_ 代表与矢量图形有关的函数)
   * - 这是一个与矢量图形相耦合的函数，需要传入一个矩形框用于标定等值线的范围
   * - 该函数返回一个二维数组，数组中的每个元素都是一个等值线的点集
   * - #### 这部分代码存在问题，无法完美绘制等值线，在较为复杂的地形上会失效。并且，该部分代码需要和线抽稀算法配合，阈值调试也极为重要。 
   * @param {Array} MBR - 矩形框，格式为 [x1,y1,x2,y2]
   * @param {number} level - 等值线数量
   * @param {Stastic} stastic - 统计类，用于统计栅格值的最大最小值
   * @returns {Array} 返回一个二维数组，数组中的每个元素都是一个等值线的点集
   */
  V_get_Contour(t, e, i) {
    let r = i.max, l = i.min, s = (r - l) / e, n = [];
    for (let _ = 0; _ < e; _++)
      n.push(Math.round(l + _ * s));
    console.log("等值线值数组"), console.log(n);
    const h = this.toIntGrid(), o = h.length, d = h[0].length, a = [0, 0, 1, -1, 1, 1, -1, -1], c = [1, -1, 0, 0, 1, -1, 1, -1], f = P(this, j, L).call(this, 0), g = [], x = [];
    for (let _ = 0; _ < o; _++)
      for (let y = 0; y < d; y++) {
        if (f[_][y] === 1)
          continue;
        let w = h[_][y], b = !1, R = [...n, 1 / 0];
        for (let k = 0; k < n.length; k++)
          if (w <= R[k + 1] && w > R[k]) {
            b = !0;
            break;
          }
        if (!b)
          continue;
        let M = [], S = [];
        for (M.push([_, y]), f[_][y] = 1, S.push([_, y]); M.length > 0; ) {
          let [k, lt] = M.shift();
          for (let V = 0; V < a.length; V++) {
            let T = k + a[V], A = lt + c[V];
            T >= 0 && T < o && A >= 0 && A < d && f[T][A] === 0 && h[T][A] === w && (f[T][A] = 1, M.push([T, A]), S.push([T, A]));
          }
        }
        g.push(S), x.push(w);
      }
    for (let _ = 0; _ < g.length; _++) {
      let y = g[_], w = [0, 0];
      for (let b = 0; b < y.length; b++)
        w[0] += y[b][0], w[1] += y[b][1];
      w[0] /= y.length, w[1] /= y.length, y.sort((b, R) => {
        let M = Math.atan2(b[0] - w[0], b[1] - w[1]), S = Math.atan2(R[0] - w[0], R[1] - w[1]);
        return M - S;
      });
    }
    let p = 0;
    for (let _ = 0; _ < g.length; _++) {
      let y = g[_], [w, b] = y[0], [R, M] = y[y.length - 1], S = Math.sqrt((w - R) * (w - R) + (b - M) * (b - M));
      p += S;
    }
    p /= g.length, p *= 0.09;
    for (let _ = 0; _ < g.length; _++) {
      let y = g[_], [w, b] = y[0], [R, M] = y[y.length - 1];
      Math.sqrt((w - R) * (w - R) + (b - M) * (b - M)) <= p && y.push(y[0]);
    }
    let m = [];
    for (let _ = 0; _ < g.length; _++) {
      let y = [];
      for (let w = 0; w < g[_].length; w++) {
        let b = this.get_CellPoint_in_MBR(t, g[_][w][0], g[_][w][1]);
        y.push(b);
      }
      m.push(y);
    }
    return {
      value: x,
      contour: m
    };
  }
  /**
   * 
   * @param {Array} reaterlist 三维数组，[ [ [x1,y1],[x2,y2],... ],[ [x1,y1],[x2,y2],... ],...
   * @param {*} MBR 
   */
  V_RasLine2VecLine(t, e) {
    let i = [];
    for (let r = 0; r < t.length; r++) {
      let l = [];
      for (let s = 0; s < t[r].length; s++) {
        let n = this.get_CellPoint_in_MBR(e, t[r][s][0], t[r][s][1]);
        l.push(n);
      }
      i.push(l);
    }
    return i;
  }
  // 根据输入的分级数，及指定的层次数，获取 DEM 切面栅格 
  /**
   *  根据输入的分级数，及指定的层次数，获取 DEM 切面栅格 
   * @param {Number} levels - 分级数
   * @param {Number} index - 指定获取的层次数（0~levels）
   * @param {Stastic} stastic - 统计信息
   * @returns {Array} - 返回一个二维数组，表示 DEM 切面栅格
   */
  get_DEM_Slice(t, e, i) {
    let r = i.max, l = i.min, s = (r - l) / t, n = [];
    for (let a = 0; a <= t; a++)
      n.push(l + a * s);
    let h = n[e], o = P(this, j, L).call(this, 0);
    for (let a = 0; a < this.row; a++)
      for (let c = 0; c < this.column; c++)
        this.gridset[a][c] <= h && (o[a][c] = 1);
    return {
      data: o,
      level: h
    };
  }
  V_get_Contour_from_Slice(t, e, i) {
    let r = [], l = [];
    for (let o = 0; o < e; o++) {
      let d = this.get_DEM_Slice(e, o, i), a = d.data, c = d.level, f = this.get_BinaryGrid_Boundary(a, !1);
      if (f.length !== 0)
        for (let g = 0; g < f.length; g++)
          l.push(Math.round(c)), f[g] !== null && r.push(f[g]);
    }
    return h(r, l), {
      contour: this.V_RasLine2VecLine(r, t),
      value: l
    };
    function h(o, d) {
      for (let a = 0; a < o.length; a++) {
        if (o[a].length == 0)
          continue;
        let c = o[a], f = [0, 0];
        for (let x = 0; x < c.length; x++)
          f[0] += c[x][0], f[1] += c[x][1];
        f[0] /= c.length, f[1] /= c.length;
        let g = [];
        for (let x = 0; x < c.length; x++) {
          let p = c[x][0] - f[0], m = c[x][1] - f[1], _ = Math.atan2(m, p);
          g.push(_);
        }
        for (let x = 0; x < g.length; x++)
          for (let p = x + 1; p < g.length; p++)
            if (g[x] > g[p]) {
              let m = g[x];
              g[x] = g[p], g[p] = m;
              let _ = c[x];
              c[x] = c[p], c[p] = _;
            }
        o[a] = c;
      }
      for (let a = 0; a < o.length; a++) {
        let c = o[a];
        if (!(c.length <= 1)) {
          {
            let f = c[0][0], g = c[0][1], x = c[c.length - 1][0], p = c[c.length - 1][1];
            Math.abs(f - x) <= 1 && Math.abs(g - p) <= 1 && c.push(c[0]);
          }
          for (let f = 0; f < c.length - 1; f++) {
            let g = c[f][0], x = c[f][1], p = c[f + 1][0], m = c[f + 1][1];
            if (Math.abs(g - p) > 20 || Math.abs(x - m) > 20) {
              let _ = [];
              for (let w = 0; w <= f; w++)
                _.push(c[w]);
              let y = [];
              for (let w = f + 1; w < c.length; w++)
                y.push(c[w]);
              o.push(_), o.push(y), d.push(d[a]), d.push(d[a]), o.splice(a, 1), d.splice(a, 1), a--, f--;
              break;
            }
          }
        }
      }
      for (let a = 0; a < o.length; a++)
        o[a].length < 3 && (o.splice(a, 1), d.splice(a, 1), a--);
    }
  }
  /**
   * 获取二值矩阵中所有的分界线
   * @param {Array} data - 二值矩阵
   * @param {Boolean} IsAnimation - 是否开启动画
   */
  get_BinaryGrid_Boundary(t, e = !1) {
    let i = [], r = [], l = P(this, j, L).call(this, 0);
    for (let n = 0; n < this.row; n++)
      for (let h = 0; h < this.column; h++)
        if (l[n][h] == 0 && t[n][h] == 1) {
          let o = this.get_BinaryGrid_MaxConnected(t, n, h, 4, 1);
          i.push(o), l[n][h] = 1;
          for (let d = 0; d < o.length; d++) {
            let [a, c] = o[d];
            l[a][c] = 1;
          }
        }
    for (let n = 0; n < i.length; n++) {
      let h = i[n], o = this.get_BinaryGrid_MaxConnected_Boundary(t, h, 1);
      r.push(o);
    }
    return e && s(t, r), r;
    function s(n, h) {
      for (let o = 0; o < h.length; o++) {
        let d = h[o];
        for (let a = 0; a < d.length; a++) {
          let [c, f] = d[a];
          n[c][f] = 100;
        }
      }
    }
  }
  /**
   * 获取指定行列号的最大连通域，若连通域小于指定阈值，则返回空集合
   * @param {Array} data - 二值矩阵,若未指定，则默认为当前栅格集合
   * @param {Number} x - 指定的行号
   * @param {Number} y - 指定的列号
   * @param {Number} threshold - 指定的阈值,若连通域小于指定阈值，则返回空集合
   * @param {Number} value - 指定要寻找连通域的值 若不是该值，则返回空集合
   * @returns {Array} - 返回二维数组 [[x1,y1],[x2,y2],...] 表示包含该点的最大连通域 若连通域小于指定阈值，则返回 null
   */
  get_BinaryGrid_MaxConnected(t, e, i, r, l) {
    if (t === null && (t = this.gridset), t[e][i] != l)
      return [];
    let s = P(this, j, L).call(this, 0), n = [], h = [0, 0, 1, -1, 1, -1, 1, -1], o = [1, -1, 0, 0, 1, -1, -1, 1], d = [];
    for (d.push([e, i]), s[e][i] = 1; d.length > 0; ) {
      let [a, c] = d.shift();
      n.push([a, c]);
      for (let f = 0; f < h.length; f++) {
        let g = a + h[f], x = c + o[f];
        g >= 0 && g < this.row && x >= 0 && x < this.column && s[g][x] === 0 && t[g][x] === l && (d.push([g, x]), s[g][x] = 1);
      }
    }
    return n.length < r ? [] : n;
  }
  /**
   * 获取指定行列号的最大连通域的边界点，若连通域小于指定阈值，则返回 null
   * @param {Array} data - 二值矩阵,若未指定，则默认为当前栅格集合
   * @param {Array} max_connected - 二值矩阵
   * @param {Number} value - 指定要寻找连通域的值 若不是该值，则返回 []
   * @returns {Array} - 返回二维数组 [[x1,y1],[x2,y2],...] 表示包含该点的最大连通域 若连通域小于指定阈值，则返回 null
   */
  get_BinaryGrid_MaxConnected_Boundary(t, e, i) {
    if (e.length < 1)
      return [];
    let r = [], l = [0, 0, 1, -1], s = [1, -1, 0, 0];
    for (let n = 0; n < e.length; n++) {
      let [h, o] = e[n], d = !1;
      for (let a = 0; a < 4; a++) {
        let c = h + l[a], f = o + s[a];
        if (c >= 0 && c < this.row && f >= 0 && f < this.column && t[c][f] != i) {
          d = !0;
          break;
        }
      }
      d && r.push([h, o]);
    }
    return r;
  }
  /**
   * 根据给定的MBR及给定栅格的行列号，计算该栅格的中心点在MBR中的位置（坐标）
   * - 该方法是栅格数据与矢量数据结合的关键，相当于在栅格上再加一层矢量数据
   * - 将栅格数据绘制矢量画布上需要指定外包络矩形，并且计算每一个栅格位置都会产生一定的误差，所以需要根据栅格分辨率进行误差控制
   * @param {Array} MBR - 矩形框，格式为 [x1,y1,x2,y2]
   * @param {number} row - 栅格行号
   * @param {number} col - 栅格列号
   * @param {number} resolution - 栅格分辨率（用于控制计算栅格中心点的误差）
   * @returns {Point} 返回一个点（Base.js 中的 Point 类）
   */
  get_CellPoint_in_MBR(t, e, i, r = 0.1) {
    let [l, s, n, h] = t, o = this.column, d = this.row, a = Math.abs(l - n), c = Math.abs(s - h), f = Math.round(a / o / r) * r, g = Math.round(c / d / r) * r, x = l + f / 2 + i * f, p = s - g / 2 - e * g;
    return new B(x, p);
  }
  /**
   * 计算内部二维矩阵所代表的栅格的表面积
   * - 该方法将对应栅格位置的值取整，视为一个小立方体，计算所有小立方体的表面积之和
   * - 这是一种简化的方法，相较于计算三角形的表面积，该方法的结果会有一定的误差，但是速度会快很多。
   */
  getSerfaceArea() {
    const t = [0, 1, 0, -1], e = [1, 0, -1, 0];
    let i = 0, r = this.toIntGrid();
    for (let l = 0; l < r.length; l++)
      for (let s = 0; s < r[l].length; s++) {
        let n = r[l][s];
        if (n > 0) {
          i += 2;
          for (let h = 0; h < 4; h++) {
            let o = l + t[h], d = s + e[h], a = 0;
            o >= 0 && o < r.length && d >= 0 && d < r[l].length && (a = r[o][d]), i += Math.max(n - a, 0);
          }
        }
      }
    return i -= this.row * this.column, i;
  }
  // 计算栅格体积
  /**
   * 计算内部二维矩阵所代表的栅格的体积
   * - 仅仅简单的将栅格视为小立方体，值累加
   * @returns {number} 返回栅格体积
   */
  getVolume() {
    let t = 0;
    for (let e = 0; e < this.row; e++)
      for (let i = 0; i < this.column; i++)
        t += this.gridset[e][i];
    return t;
  }
  /**
   * 计算当前地形的模拟水流流向栅格
   * - 该方法不需要 padding 操作，返回值与原始栅格大小相同
   * @param {*} RealDistance - 当前栅格代表的真实距离（默认为1）
   * @returns {Array} 返回一个二维数组，代表每一个栅格的流向
   */
  getFlowDirection(t = 1) {
    let e = [1, 2, 4, 8, 16, 32, 64, 128], i = [[1, 0], [1, -1], [0, -1], [-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1]], r = [];
    for (let l = 0; l < this.row; l++) {
      let s = [];
      for (let n = 0; n < this.column; n++) {
        let h = this.gridset[l][n], o = 0, d = 0;
        for (let a = 0; a < 8; a++) {
          let c = l + i[a][0], f = n + i[a][1], g = 0;
          c >= 0 && c < this.row && f >= 0 && f < this.column && (a == 0 || a == 2 || a == 4 || a == 6 ? g = (this.gridset[c][f] - h) / t : g = (this.gridset[c][f] - h) / t * Math.sqrt(2)), g < o && (o = g, d = a);
        }
        if (o >= 0)
          s.push(0);
        else {
          let a = e[d];
          s.push(a);
        }
      }
      r.push(s);
    }
    return r;
  }
  /**
   * 计算当前地形的模拟水流累积量栅格
   * @param {number} RealDistance - 当前栅格代表的真实距离（默认为1）
   * - 该方法不需要 padding 操作，返回值与原始栅格大小相同
   * @returns {Array} 返回一个二维数组，代表每一个栅格的累积量
   */
  getAccumulationFlow(t) {
    let e = this.getFlowDirection(t), i = P(this, j, L).call(this, this.row, this.column, 0);
    for (let l = 0; l < this.row; l++)
      for (let s = 0; s < this.column; s++) {
        let n = {}, h = r(l, s, e, this.row, this.column, n);
        i[l][s] = h;
      }
    return i;
    function r(l, s, n, h, o, d = {}) {
      let a = [[1, 0], [1, -1], [0, -1], [-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1]], c = [128, 64, 32, 16, 8, 4, 2, 1], f = 0;
      for (let g = 0; g < 8; g++) {
        let x = l + a[g][0], p = s + a[g][1];
        x >= 0 && x < h && p >= 0 && p < o && n[x][p] == c[g] && (f += 1);
      }
      for (let g = 0; g < 8; g++) {
        let x = l + a[g][0], p = s + a[g][1];
        x >= 0 && x < h && p >= 0 && p < o && n[x][p] == c[g] && d[x + "-" + p] == null && (d[x + "-" + p] = !0, f += r(x, p, n, h, o, d));
      }
      return f;
    }
  }
  //静态方法区域
  /**
   * 读取 JS 的二维数组，由该二维 Array 生成栅格类
   * @param {array} matrix 
   */
  static fromMatrix(t) {
    let e = t[0], i = new ft(t.length, e.length);
    return i.gridset = t, i;
  }
  /**
   * 生成0-1之间的渐变栅格(用于绘制颜色条带预览)
   * @param {number} level 
   * @returns 
   */
  static getramp(t) {
    let e = [], i = 1 / t;
    for (let r = 0; r < 5; r++) {
      let l = [];
      for (let s = 0; s < t; s++)
        l.push(i * s);
      e.push(l);
    }
    return e;
  }
  /**
  * 生成0-360之间的渐变栅格(用于绘制颜色条带预览，坡向颜色渲染)
  * @param {number} level 
  * @returns 
  */
  static get_aspect_ramp(t) {
    let e = [], i = 360 / t;
    for (let r = 0; r < 5; r++) {
      let l = [];
      for (let s = 0; s < t; s++)
        l.push(i * s);
      e.push(l);
    }
    return e;
  }
  /**
   * 生成离散值条带[0,1,2,3,4,...level]
   * @param {number} level 
   * @returns 
   */
  static get_dispersed_ramp(t) {
    let e = [], i = 1;
    for (let r = 0; r < 5; r++) {
      let l = [];
      for (let s = 0; s < t; s++)
        l.push(i * s);
      e.push(l);
    }
    return e;
  }
  /**
   * 生成自定义离散值条带
   * @param {array} ValueList - 值列表
   * @returns 
   */
  static get_Custom_ramp(t) {
    let e = [];
    for (let i = 0; i < 5; i++) {
      let r = [];
      for (let l = 0; l < t.length; l++)
        r.push(t[l]);
      e.push(r);
    }
    return e;
  }
  /**
  * 解析连续字符串为而为数组 数据按行存储
  * @param {number} row - 行数
  * @param {number} column - 列数
  * @param {String} str - 连续字符串（往往由服务器获得）
  * @returns {array} 返回 [row * column] 形状的二维数组
  */
  static parser1(t, e, i) {
    let r = i.split(","), l = [];
    for (let s = 0; s < t; s++) {
      let n = [];
      for (let h = 0; h < e; h++)
        n.push(parseFloat(r[s * 255 + h]) * 1e3);
      l.push(n);
    }
    return l;
  }
};
let v = ft;
j = new WeakSet(), L = function(t) {
  return Array(this.row).fill().map(() => Array(this.column).fill(t));
}, E = new WeakSet(), F = function(t, e) {
  let i = [], r = t.length, l = t[0].length, s = !0;
  for (let a = 0; a < r; a++) {
    for (let c = 0; c < l; c++)
      if (t[a][c] > e) {
        s = !1;
        break;
      }
    if (!s)
      break;
  }
  if (s)
    return i.push(t), i;
  let n = [], h = [], o = [], d = [];
  for (let a = 0; a < r / 2; a++)
    n.push(t[a].slice(0, l / 2)), h.push(t[a].slice(l / 2, l));
  for (let a = r / 2; a < r; a++)
    o.push(t[a].slice(0, l / 2)), d.push(t[a].slice(l / 2, l));
  return i = i.concat(P(this, E, F).call(this, n, e)), i = i.concat(P(this, E, F).call(this, h, e)), i = i.concat(P(this, E, F).call(this, o, e)), i = i.concat(P(this, E, F).call(this, d, e)), i;
};
var et, Rt, it, St;
class _e {
  /**
   * 该模块代码将重新设计 ： --v 1.0.23 later (版本更新完毕后将删除！此段说明)
   * `说明` : 起初写该部分代码只是为了服务于栅格的显示功能。故而某些功能过于耦合，无法灵活地与其他已有框架协同工作。
   * 作者前段时间想要使用`chart.js`来绘制某些统计图。在该过程中，就发现一部分通用绘图数据并没有良好地暴露出来，而是埋在了某些函数的处理细节中。
   * 为了使得这部分功能更加灵活好用，作者决定将这部分代码重新整理。
   * 设计方向：
   * - 提取绘制某些统计图所必须的数据，并抽象出与之对应的数据结构。例如：柱状图、折线图可以使用两个数组来分别存储数据和标注。
   * - 将统计图所必须的数据与统计图的生成拆分。
   * - 一个统计图可以拆分成这样几个部分：数据获取、数据统计、统计结果输出、结果可视化
   * - 最后的一个结果可视化将完全放到~view类中，这样能最大限度的保证在调用其他绘图库与调用自带的绘图库体验上的一致性。
   * > !注意:本轮修改后会有一些接口（*方法*）变更，第二位版本号也会增加一位！请留意变更说明。
   * * 实例化该类 可以从一维数组构造(flatten array)
   * @param {array} data - 一维数组 包含所有需要统计的数字
   */
  constructor(t) {
    //数据统计部分方法
    /**
     * 求均值
     * @returns 返回均值
     */
    q(this, et);
    /**
     * 求标准差
     * @returns 返回标准差
     */
    q(this, it);
    this.data = t, this.ori = t.slice(), this.data = this.data.sort((e, i) => e - i), this.n = this.data.length, this.max = this.data[this.data.length - 1], this.min = this.data[0], this.mean = P(this, et, Rt).call(this), this.q1i = Math.round((this.n + 1) / 4), this.q3i = Math.round(3 * (this.n + 1) / 4), this.q1 = this.data[this.q1i], this.q3 = this.data[this.q3i], this.Standard_Deviation = P(this, it, St).call(this);
  }
  /**
   * 归一化公式 ：(x – μ) / σ 
   * * σ 是标准差  μ 是均值
   * @param {number} value 
   * @returns {number} 返回值 [0,1]
   */
  Z_Score_Normalization(t) {
    return (t - this.mean) / this.Standard_Deviation;
  }
  /**
   * 线性归一化 
   * * 公式：(x - min) / (max - min)
   * @param {number} value 
   * @returns {number} 返回值 [0,1]
   */
  Linear_Normalization(t) {
    return (t - this.min) / (this.max - this.min);
  }
  /**
  * 线性归一化 (仅针对 **主要区域** 的归一化 **这里指盒须图中的盒中区域** )
  * * 公式：(x - min) / (max - min)
  * @param {number} value 
  * @returns {number} 返回值 [0,1]
  */
  Linear_Normalization_main(t) {
    let e = (t - this.q1) / (this.q3 - this.q1);
    return e > 1 ? 1 : e < 0 ? 0 : e;
  }
  /**
   * **创建盒须图对象：**
   * 首先定义MBR 外包络矩形 左上角和右下角
   * 考虑到与其他绘图js库的**兼容性** 在其他函数中我们会
   * - 将求出的、绘制某些统计图所必备的数据单独输出以供那些想要使用其他绘图库的用户使用
   * - 对于那些只想使用自带绘图模块的用户，我们会另写解析函数来根据这些数据创建本库自带的统计图。
   * @param {number} x1 - 用以定位盒须图绘制区域的外包络矩形坐标
   * @param {number} y1 
   * @param {number} x2 
   * @param {number} y2 
   * @param {number} yleve - y轴尺度
   * @param {number} xleve - x轴尺度
   * @returns {JSON} 返回一个描述统计图的json对象
   */
  create_box_whisker_plot(t, e, i, r, l, s) {
    let n = Math.abs(i - t), h = Math.abs(r - e) - 40, o = 20, d = (t + i) / 2, a = Math.abs(this.max - this.min), c = h / a, f = n / s;
    l === 0 && (l = 10);
    let g = h / l, x = Math.round(a / l), p = [], m = [];
    for (let M = 1; M < l; M++) {
      let S = [t, o + r + g * M, t - f, o + r + g * M], k = [Math.round(this.min + x * M), t - 5 * f, o + r + g * M];
      p.push(S), m.push(k);
    }
    let _ = [d - 2 * f, (this.max - this.min) * c + r + o, d + 2 * f, (this.max - this.min) * c + r + o], y = [d - 2 * f, (this.min - this.min) * c + r + o, d + 2 * f, (this.min - this.min) * c + r + o], w = [];
    w.push([d, (this.max - this.min) * c + r + o, d, (this.min - this.min) * c + r + o]), w.push(_), w.push(y), m.push([this.max, d + 2 * f, (this.max - this.min) * c + r + o]), m.push([this.min, d + 2 * f, (this.min - this.min) * c + r + o]);
    let b = [d - 4 * f, (this.q1 - this.min) * c + r + o, d + 4 * f, (this.q3 - this.min) * c + r + o];
    return m.push([this.q1, d + 4 * f, (this.q1 - this.min) * c + r + o]), m.push([this.q3, d + 4 * f, (this.q3 - this.min) * c + r + o]), {
      //边框
      MBR: [t, e, i, r],
      YAXI: p,
      BOX: b,
      WHISKER: w,
      //文字部分
      YANO: m
    };
  }
  /**
   * 绘制步长曲线（折线）
   * @param {number} x1 * MBR_X1
   * @param {number} y1 * MBR_Y1
   * @param {number} x2 * MBR_X2
   * @param {number} y2 * MBR_Y1
   * @param {number} yleve * y轴切分尺度
   * @param {number} xleve * x轴采样尺度 
   * * **注意：xleve控制着步长曲线绘制的详尽程度**
   * * 例如：共计100值的序列，若 xleve **小于100** 则会略化线的细节
   * * 但是当 xleve **大于100** 时，会将曲线挤向图的左边。
   * @returns {array} 得到步长点的列表
   */
  create_step_plot(t, e, i, r, l, s) {
    let n = 20, h = Math.abs(i - t) - 2 * n, o = Math.abs(r - e) - 2 * n, d = this.max - this.min, a = this.n, c = o / d, f = Math.round(a / s), g = h / s, x = [];
    for (let p = 0; p < s; p++) {
      let m = n + g * p + t, _ = f * p, y = r + n + this.ori[_] * c;
      x.push([m, y]);
    }
    return x;
  }
  /**
  * 绘制默认数据坐标框
  * @param {number} x1 * MBR_X1
  * @param {number} y1 * MBR_Y1
  * @param {number} x2 * MBR_X2
  * @param {number} y2 * MBR_Y1
  * @param {number} yleve * y轴切分尺度
  * @param {number} xleve * x轴采样尺度 
  * @returns {JSON} 返回一个表示坐标框的json对象
  * */
  create_coordinate_box(t, e, i, r, l, s) {
    let n = 20, h = Math.abs(i - t) - 2 * n, o = Math.abs(r - e) - 2 * n, d = this.max - this.min, a = this.n, c = Math.round(d / l), f = Math.round(a / s), g = h / s, x = o / l, p = [], m = [];
    for (let M = 1; M < l; M++) {
      let S = [t, n + r + x * M, t - 5, n + r + x * M], k = [Math.round(this.min + c * M), t - 50, n + r + x * M];
      p.push(S), m.push(k);
    }
    let _ = [], y = [], w = 0, b = [0, n + t, r - 25];
    y.push(b);
    for (let M = 0; M < s; M++) {
      if (w === 5) {
        let S = [n + t + g * M, r, n + t + g * M, r - 10];
        _.push(S);
      } else if (w === 10) {
        let S = [n + t + g * M, r, n + t + g * M, r - 15], k = [Math.round(0 + f * M), n + t + g * M, r - 25];
        _.push(S), y.push(k), w = 0;
      } else {
        let S = [n + t + g * M, r, n + t + g * M, r - 5];
        _.push(S);
      }
      w = 1 + w;
    }
    return {
      MBR: [t, e, i, r],
      //外包络矩形
      y_scale: p,
      y_mark: m,
      x_scale: _,
      x_mark: y
    };
  }
  // 获取统计数据
  /**
   * 获取统计数据
   * "max" : "最大值", "min" : "最小值", "avg" : "平均值", "std" : "标准差", "volum" : "样本数量
   * @returns {JSON} 返回一个json对象
   */
  get_statistics_info() {
    let t = this.max, e = this.min, i = this.mean, r = this.Standard_Deviation, l = this.n;
    return {
      max: t,
      min: e,
      avg: i,
      std: r,
      volum: l
    };
  }
}
et = new WeakSet(), Rt = function() {
  let t = this.data, e = 0;
  for (let i = 0; i < t.length; i++)
    e = t[i] + e;
  return e / t.length;
}, it = new WeakSet(), St = function() {
  let t = this.data, e = this.mean, i = 0;
  for (let r = 0; r < t.length; r++)
    i = Math.pow(t[r] - e, 2) + i;
  return Math.sqrt(i / this.n);
};
class C {
  /**
   * 构造画笔 
   * @param {CanvasRenderingContext2D} ctx - 获取二维canvas上下文
   * @param {string} color - 画笔颜色
   */
  constructor(t, e) {
    this.ctx = t, this.color = e;
  }
  /**
   * 绘点
   * @param {number} x - 横坐标
   * @param {number} y - 纵坐标
   * @param {string} Mycolor - 自定义颜色
   * @param {number} pointSize - 点大小
   * 直接在上下文中绘制
   */
  draw_point(t, e, i = null, r = 2) {
    const l = this.ctx.fillStyle;
    i ? this.ctx.fillStyle = i : this.ctx.fillStyle = this.color, this.ctx.beginPath(), this.ctx.arc(t, e, r, 0, Math.PI * 2, !0), this.ctx.fill(), this.ctx.fillStyle = l;
  }
  /**
   * 绘制点集
   * @param {array} pointlist 
   */
  draw_pointset(t) {
    for (let e of t)
      this.draw_point(e.x, e.y);
  }
  /**
   * 绘制单一直线
   * @param {Point} sp - start point
   * @param {Point} ep - end point
   * @param {number} lineWidth - 线宽
   */
  draw_line(t, e, i = 3) {
    let r = this.ctx.strokeStyle;
    this.ctx.strokeStyle = this.color, this.ctx.lineWidth = i, this.ctx.beginPath(), this.ctx.moveTo(t.x, t.y), this.ctx.lineTo(e.x, e.y), this.ctx.closePath(), this.ctx.stroke(), this.ctx.strokeStyle = r;
  }
  // this.ctx.lineWidth = lineWidth;
  // this.ctx.beginPath();
  // this.ctx.moveTo(sp.x,sp.y);
  // this.ctx.lineTo(ep.x,ep.y);
  // this.ctx.strokeStyle = this.color;
  // this.ctx.lineWidth = 3 ;
  // this.ctx.closePath();
  // this.ctx.stroke();
  /**
   * 绘制填充多边形
   * @param {array} pointlist 
   * @param {boolean} IsFill - 是否填充(会自动计算出较浅的填充颜色)
   */
  draw_polygon(t, e = !1) {
    let i = this.ctx.fillStyle;
    this.ctx.strokeStyle = this.color, this.ctx.lineWidth = 3, this.ctx.beginPath(), this.ctx.moveTo(t[0].x, t[0].y);
    for (let r = 1; r < t.length; r++)
      this.ctx.lineTo(t[r].x, t[r].y);
    if (e) {
      let r = O.parseColor(this.color);
      r.transparent(0.8), this.ctx.fillStyle = r.toString(), this.ctx.fill();
    }
    this.ctx.closePath(), this.ctx.stroke(), this.ctx.fillStyle = i;
  }
  /**
   * 绘制填充多边形
   * @param {Polygon} polygon
   * @param {boolean} IsFill - 是否填充(会自动计算出较浅的填充颜色)
   * @param {boolean} IsSmooth - 是否平滑绘制(Bezier曲线)
   */
  draw_polygon2(t, e = !1, i = !1) {
    let r = t.get_VectorList(), l = [];
    for (let n = 0; n < r.length; n++) {
      let h = r[n].sp;
      l.push(h);
    }
    let s = this.ctx.fillStyle;
    if (this.ctx.strokeStyle = this.color, this.ctx.lineWidth = 3, this.ctx.beginPath(), i) {
      l.push(l[0]), l.unshift(l[l.length - 2]);
      let n = l.length;
      for (let h = 0; h < n; h++)
        if (h == n / 2)
          this.ctx.quadraticCurveTo(l[h].x, l[h].y, l[h + 1].x, l[h + 1].y);
        else if (h == 0)
          this.ctx.moveTo(l[0].x, l[0].y), this.ctx.quadraticCurveTo(l[h + 1].x, l[h + 1].y, l[h + 2].x, l[h + 2].y), h++;
        else {
          if (h == n - 1)
            continue;
          this.ctx.lineTo(l[h].x, l[h].y);
        }
    } else {
      this.ctx.moveTo(l[0].x, l[0].y);
      for (let n = 1; n < l.length; n++)
        this.ctx.lineTo(l[n].x, l[n].y);
    }
    if (e) {
      console.log("IsFill");
      let n = O.parseColor(this.color);
      n.transparent(0.8), this.ctx.fillStyle = n.toString(), this.ctx.fill();
    }
    this.ctx.closePath(), this.ctx.stroke(), this.ctx.fillStyle = s;
  }
  /**
   * 绘制折线
   * @param {array} pointlist 
   * @param {boolean} smooth - 是否平滑
   * @param {boolean} EveryPoint - 是否绘制每个点
   * @param {boolean} IsDrawLine - 是否绘制线
   */
  draw_complexline(t, e = !1, i = !1, r = !0) {
    if (r)
      if (e) {
        this.ctx.strokeStyle = this.color, this.ctx.lineWidth = 3, this.ctx.beginPath(), this.ctx.moveTo(t[0].x, t[0].y);
        for (let s = 1; s < t.length - 1; s++) {
          let n = (t[s].x + t[s + 1].x) / 2, h = (t[s].y + t[s + 1].y) / 2;
          this.ctx.quadraticCurveTo(t[s].x, t[s].y, n, h);
        }
        let l = t.length - 1;
        this.ctx.quadraticCurveTo(t[l].x, t[l].y, t[l].x, t[l].y), this.ctx.stroke();
      } else {
        this.ctx.strokeStyle = this.color, this.ctx.lineWidth = 3, this.ctx.beginPath(), this.ctx.moveTo(t[0].x, t[0].y);
        for (let l = 1; l < t.length; l++)
          this.ctx.lineTo(t[l].x, t[l].y);
        this.ctx.stroke();
      }
    if (i)
      for (let l = 0; l < t.length; l++)
        if (l == 0 || l == t.length - 1) {
          this.draw_point(t[l].x, t[l].y, "yellow");
          continue;
        } else
          this.draw_point(t[l].x, t[l].y, "white");
  }
  /**
   * 绘制矩形框 [x1,y1,x2,y2]
   * @param {array} list1
   * @param {boolean} IsFill - 是否填充(会自动计算出较浅的填充颜色)
   */
  draw_rect(t, e = !1) {
    let i = this.ctx.fillStyle;
    if (this.ctx.strokeStyle = this.color, this.ctx.lineWidth = 3, this.ctx.beginPath(), this.ctx.moveTo(t[0], t[1]), this.ctx.lineTo(t[2], t[1]), this.ctx.lineTo(t[2], t[3]), this.ctx.lineTo(t[0], t[3]), this.ctx.closePath(), e) {
      let r = O.parseColor(this.color);
      r.transparent(0.8), this.ctx.fillStyle = r.toString(), this.ctx.fill();
    }
    this.ctx.closePath(), this.ctx.stroke(), this.ctx.fillStyle = i;
  }
  /**
   * 绘制三角形
   * @param {array} list - 三角形的点表
   * @param {boolean} IsFill - 是否填充(会自动计算出较浅的填充颜色)
   */
  draw_triangle(t, e = !1) {
    let i = this.ctx.fillStyle;
    if (e) {
      let r = O.parseColor(this.color);
      r.transparent(0.8), this.ctx.fillStyle = r.toString(), this.ctx.beginPath(), this.ctx.moveTo(t[0].x, t[0].y), this.ctx.lineTo(t[1].x, t[1].y), this.ctx.lineTo(t[2].x, t[2].y), this.ctx.closePath(), this.ctx.fill();
    }
    this.ctx.strokeStyle = this.color, this.ctx.lineWidth = 3, this.ctx.beginPath(), this.ctx.moveTo(t[0].x, t[0].y), this.ctx.lineTo(t[1].x, t[1].y), this.ctx.lineTo(t[2].x, t[2].y), this.ctx.closePath(), this.ctx.stroke(), this.ctx.fillStyle = i;
  }
  /**
   * 绘制圆
   * @param {number} x - 圆心x坐标
   * @param {number} y - 圆心y坐标
   * @param {number} r - 外接圆半径
   * @param {boolean} IsFill - 是否填充(会自动计算出较浅的填充颜色)
   */
  draw_circle(t, e, i, r = !1) {
    let l = this.ctx.fillStyle;
    if (this.ctx.strokeStyle = this.color, this.ctx.lineWidth = 3, this.ctx.beginPath(), this.ctx.arc(t, e, i, 0, Math.PI * 2, !1), this.ctx.closePath(), this.ctx.stroke(), r) {
      let s = O.parseColor(this.color);
      s.transparent(0.8), this.ctx.fillStyle = s.toString(), this.ctx.fill();
    }
    this.ctx.fillStyle = l;
  }
  /**
   * 绘制直线（array表示）
   * @param {array} list - [x1,y1,x2,y2]
   */
  draw_line_arr(t) {
    let e = t[0], i = t[1], r = t[2], l = t[3];
    this.ctx.lineWidth = 2, this.ctx.beginPath(), this.ctx.moveTo(e, i), this.ctx.lineTo(r, l), this.ctx.strokeStyle = this.color, this.ctx.closePath(), this.ctx.stroke();
  }
  /**
   * 绘制栅格单元
   * @param {number} x - 横坐标
   * @param {number} y - 纵坐标
   * @param {number} dx - 栅格单元大小 需要计算得出
   * @param {number} dy - 栅格单元大小 需要计算得出
   * @param {string} color - 栅格单元颜色 需要计算得出
   * */
  draw_GridCell(t, e, i, r, l) {
    this.ctx.fillStyle = l, this.ctx.fillRect(t, e, i, r);
  }
  /**
   * 绘制文字
   * @param {string} color
   * @param {string} text 
   * @param {number} x 
   * @param {number} y 
   */
  draw_text(t = "black", e, i, r) {
    let l = this.ctx.fillStyle;
    this.ctx.fillStyle = t, this.ctx.font = "oblique 20px Arial", this.ctx.fillText(e, i, r), this.ctx.fillStyle = l;
  }
}
class Zt {
  /**
   * **取值限制[0,255]**
   * 该方法将对应的栅格值（value）映射为灰度图
   * @param {number} value - 输入的栅格值
   * @param {number} alpha - 渲染该层的透明度
   * @returns {string} 返回描述颜色的字符串 包括rgb和rgba两种格式
   */
  static Gray(t, e, i) {
    e && (t = 1 - t);
    let r = 255 * t, l = r, s = r;
    return i == null ? "rgb(" + r + "," + l + "," + s + ")" : "rgba(" + r + "," + l + "," + s + "," + i + ")";
  }
  /**
  * **取值限制[0,3]**
  * 该方法将对应的栅格值（value）映射为灰度图
  * @param {number} value - 输入的栅格值
  * @param {number} alpha - 渲染该层的透明度
  * @returns {string} 返回描述颜色的字符串 包括rgb和rgba两种格式
  */
  static ColorBand_1(t, e) {
    let i, r, l;
    return t == 0 && (i = 0, r = 0, l = 0), t == 1 && (i = 255, r = 0, l = 0), t == 2 && (i = 0, r = 255, l = 0), t == 3 && (i = 0, r = 0, l = 255), e == null ? "rgb(" + i + "," + r + "," + l + ")" : "rgba(" + i + "," + r + "," + l + "," + e + ")";
  }
  static ColorBand_2(t, e) {
    let i, r, l;
    return t == 0 && (i = 160, r = 32, l = 240), t == 1 && (i = 255, r = 105, l = 180), t == 2 && (i = 255, r = 165, l = 0), t == 3 && (i = 0, r = 255, l = 255), e == null ? "rgb(" + i + "," + r + "," + l + ")" : "rgba(" + i + "," + r + "," + l + "," + e + ")";
  }
  /**
   * **取值限制[0,255]**
   * @param {number} value 
   * @param {number} alpha 
   * @returns 
   */
  static Red(t, e, i) {
    e && (t = 1 - t);
    let r = 255 * t, l = 0, s = 0;
    return i == null ? "rgb(" + r + "," + l + "," + s + ")" : "rgba(" + r + "," + l + "," + s + "," + i + ")";
  }
  /**
   * **取值限制[0,255]**
   * @param {*} value 
   * @param {*} alpha 
   * @returns 
   */
  static Green(t, e, i) {
    e && (t = 1 - t);
    let r = 0, l = 255 * t, s = 0;
    return i == null ? "rgb(" + r + "," + l + "," + s + ")" : "rgba(" + r + "," + l + "," + s + "," + i + ")";
  }
  /**
   * **取值限制[0,255]**
   * @param {*} value 
   * @param {*} alpha 
   * @returns 
   */
  static Blue(t, e, i) {
    e && (t = 1 - t);
    let r = 0, l = 0, s = 255 * t;
    return i == null ? "rgb(" + r + "," + l + "," + s + ")" : "rgba(" + r + "," + l + "," + s + "," + i + ")";
  }
  /**
   * **取值限制[0,255]**
   * @param {*} value 
   * @param {*} alpha 
   * @returns 
   */
  static Yellow(t, e, i) {
    e && (t = 1 - t);
    let r = 255 * t, l = 255 * t, s = 0;
    return i == null ? "rgb(" + r + "," + l + "," + s + ")" : "rgba(" + r + "," + l + "," + s + "," + i + ")";
  }
  /**
   * **渲染坡向（0-360）**
   * @param {number} value 
   * @returns 
   */
  static Aspact(t) {
    let e, i, r;
    return t < 22.5 ? [e, i, r] = [255, 0, 0] : t < 67.5 ? [e, i, r] = [255, 165, 0] : t < 112.5 ? [e, i, r] = [255, 255, 0] : t < 157.5 ? [e, i, r] = [0, 255, 0] : t < 202.5 ? [e, i, r] = [0, 255, 255] : t < 247.5 ? [e, i, r] = [135, 206, 250] : t < 292.5 ? [e, i, r] = [0, 0, 255] : t < 337.5 ? [e, i, r] = [139, 0, 255] : [e, i, r] = [255, 0, 0], "rgb(" + e + "," + i + "," + r + ")";
  }
  /**
   * 与 ArcGis 统一 采用 1 2 8 16 32 64 128 表示八个方向
   * @param {*} value 
   * @param {*} alpha 
   * @returns
   * - |-32-|-64-|128-|
   * - |-16-|-0--|--1-|
   * - |-8--|-4--|--2-| 
   */
  static Stadard_Aspact(t, e) {
    let i, r, l;
    return t == 1 && (i = 255, r = 0, l = 0), t == 2 && (i = 255, r = 165, l = 0), t == 4 && (i = 255, r = 255, l = 0), t == 8 && (i = 0, r = 255, l = 0), t == 16 && (i = 0, r = 255, l = 255), t == 32 && (i = 135, r = 206, l = 250), t == 64 && (i = 0, r = 0, l = 255), t == 128 && (i = 139, r = 0, l = 255), t == 0 && (i = 0, r = 0, l = 0), e == null ? "rgb(" + i + "," + r + "," + l + ")" : "rgba(" + i + "," + r + "," + l + "," + e + ")";
  }
  static Pure(t, e, i) {
    e && (t = 1 - t);
    let r = 255 * t, l = 150 * r, s = 20 * r;
    return i == null ? "rgb(" + r + "," + l + "," + s + ")" : "rgba(" + r + "," + l + "," + s + "," + i + ")";
  }
}
class O {
  // 颜色解析类 用于解析颜色字符串
  // 1. rgb(255,255,255) 2. rgba(255,255,255,0.5) 3. #ffffff 4. #ffffffff 5. red 6. #fff 7. #ffff
  // 8. #fff5 9. #fff5f5 10. #fff5f5f5 11. #fff5f5f5f5 12. #fff5f5f5f5f5
  /**
   * **解析颜色字符串**
   * @param {*} color - 颜色字符串
   * @returns 
   */
  static parseColor(t) {
    return t == null || t == null ? null : typeof t == "string" ? t.startsWith("rgb") ? this.parseColorByRGB(t) : t.startsWith("#") ? this.parseColorByHex(t) : this.parseColorByName(t) : null;
  }
  static parseColorByRGB(t) {
    let i = t.substring(t.indexOf("(") + 1, t.indexOf(")")).split(",");
    return i.length == 3 ? new I(parseInt(i[0]), parseInt(i[1]), parseInt(i[2])) : i.length == 4 ? new I(parseInt(i[0]), parseInt(i[1]), parseInt(i[2]), parseFloat(i[3])) : null;
  }
  static parseColorByHex(t) {
    let e = t.substring(1), i = [];
    return e.length == 3 ? (i = [e.substring(0, 1), e.substring(1, 2), e.substring(2, 3)], new I(parseInt(i[0] + i[0], 16), parseInt(i[1] + i[1], 16), parseInt(i[2] + i[2], 16))) : e.length == 4 ? (i = [e.substring(0, 1), e.substring(1, 2), e.substring(2, 3), e.substring(3, 4)], new I(parseInt(i[0] + i[0], 16), parseInt(i[1] + i[1], 16), parseInt(i[2] + i[2], 16), parseInt(i[3] + i[3], 16) / 255)) : e.length == 6 ? (i = [e.substring(0, 2), e.substring(2, 4), e.substring(4, 6)], new I(parseInt(i[0], 16), parseInt(i[1], 16), parseInt(i[2], 16))) : e.length == 8 ? (i = [e.substring(0, 2), e.substring(2, 4), e.substring(4, 6), e.substring(6, 8)], new I(parseInt(i[0], 16), parseInt(i[1], 16), parseInt(i[2], 16), parseInt(i[3], 16) / 255)) : null;
  }
  static parseColorByName(t) {
    return t == "red" ? new I(255, 0, 0) : t == "green" ? new I(0, 255, 0) : t == "blue" ? new I(0, 0, 255) : t == "yellow" ? new I(255, 255, 0) : t == "black" ? new I(0, 0, 0) : t == "white" ? new I(255, 255, 255) : t == "gray" ? new I(128, 128, 128) : t == "orange" ? new I(255, 165, 0) : t == "purple" ? new I(128, 0, 128) : t == "pink" ? new I(255, 192, 203) : t == "brown" ? new I(165, 42, 42) : t == "cyan" ? new I(0, 255, 255) : null;
  }
}
class I {
  // 颜色类
  constructor(t, e, i, r) {
    this.r = t, this.g = e, this.b = i, r != null && (this.a = r);
  }
  lighter(t) {
    this.r = this.r + t, this.g = this.g + t, this.b = this.b + t;
  }
  transparent(t) {
    this.a == null && (this.a = 1), this.a = this.a - t, this.a < 0 && (this.a = Math.abs(this.a));
  }
  toString() {
    return this.a == null ? "rgb(" + this.r + "," + this.g + "," + this.b + ")" : "rgba(" + this.r + "," + this.g + "," + this.b + "," + this.a + ")";
  }
}
const ye = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CellValueRenderer: Zt,
  Color: I,
  ColorParser: O,
  pan: C
}, Symbol.toStringTag, { value: "Module" }));
class Ut {
  /**
   * 包装一个 Polygon
   * @param {CanvasRenderingContext2D} ctx 
   * @param {string} color 
   * @param {Polygon} polygon 
   */
  constructor(t, e, i) {
    this.ctx = t, this.color = e, this.polygon = i;
  }
  /**
   * 绘制有圆滑两端的多边形（主要是为折线缓冲区绘制服务的）
   * @param {number} canvas_height - canvas的高度
   * @param {boolean} IsReaterMode - 是否为反转模式（与栅格绘制模式统一，以屏幕左下角为原点，符合直觉）
   * @param {boolean} IsFill - 是否填充
   */
  draw_Smooth_EndPgn(t, e = !1, i = !1) {
    e ? (this.ctx.save(), this.ctx.scale(1, -1), this.ctx.translate(0, -t), new C(this.ctx, this.color).draw_polygon2(this.polygon, i, !0), this.ctx.restore()) : new C(this.ctx, this.color).draw_polygon2(this.polygon, i, !0);
  }
  draw(t, e = !1, i = !1) {
    e ? (this.ctx.save(), this.ctx.scale(1, -1), this.ctx.translate(0, -t), new C(this.ctx, this.color).draw_polygon(this.polygon.get_OrderedPointList(), i), this.ctx.restore()) : new C(this.ctx, this.color).draw_polygon(this.polygon.get_OrderedPointList(), i);
  }
}
class $t {
  /**
   * 包装一个 Point
   * @param {CanvasRenderingContext2D} ctx 
   * @param {string} color 
   * @param {Point} point 
   */
  constructor(t, e, i) {
    this.ctx = t, this.color = e, this.point = i;
  }
  /**
   * 绘制自身(点)
   * @param {number} canvas_height - canvas的高度
   * @param {boolean} IsReaterMode - 是否为反转模式（与栅格绘制模式统一，以屏幕左下角为原点，符合直觉）
   */
  draw(t, e = !1) {
    e ? (this.ctx.save(), this.ctx.scale(1, -1), this.ctx.translate(0, -t), new C(this.ctx, this.color).draw_point(this.point.x, this.point.y)) : new C(this.ctx, this.color).draw_point(this.point.x, this.point.y), this.ctx.restore();
  }
  /**
   * 绘制点的缓冲区
   * - 需要事先调用 getBuffer 方法获取缓冲区
   * @param {Circle} buffer - 缓冲区
   * @param {number} canvas_height - canvas的高度
   * @param {boolean} IsReaterMode - 是否为反转模式（与栅格绘制模式统一，以屏幕左下角为原点，符合直觉）
   */
  draw_Buffer(t, e, i = !1) {
    i ? (this.ctx.save(), this.ctx.scale(1, -1), this.ctx.translate(0, -e), new C(this.ctx, this.color).draw_circle(t.center.x, t.center.y, t.radius, !0)) : (console.log("draw_Buffer"), new C(this.ctx, this.color).draw_circle(t.center.x, t.center.y, t.radius, !0)), this.ctx.restore();
  }
}
class Jt {
  constructor(t, e, i, r, l) {
    this.ctx = t, this.canvas_height = e, this.color = i, this.contour_curve_list = r, this.contour_curve_value_list = l;
  }
  /**
   * 绘制自身(等值线)
   * @param {boolean} IsReaterMode - 是否为反转模式（与栅格绘制模式统一，以屏幕左下角为原点，符合直觉）
   * @param {boolean} smooth - 是否平滑绘制(B样条曲线)
   * @param {boolean} EveryPoint - 是否绘制每个点
   * @param {boolean} IsDrawLine - 是否绘制线
   * @param {boolean} IsText - 是否绘制文字(等值线值)
   * @param {number} threashold - 绘制等值线的阈值
   */
  draw(t = !1, e = !1, i = !1, r = !0, l = !0, s = 0) {
    let n = new C(this.ctx, this.color);
    if (!t)
      n.draw_complexline(this.contour_curve_list, e, i, r);
    else {
      this.ctx.save(), this.ctx.scale(1, -1), this.ctx.translate(0, -this.canvas_height);
      for (let h = 0; h < this.contour_curve_list.length; h++) {
        if (this.contour_curve_list[h] === null || this.contour_curve_list[h].length === 0)
          continue;
        let o = this.contour_curve_list[h], a = new rt(o).getSubSetByDP(s);
        if (n.draw_complexline(a, e, i, r), this.ctx.restore(), l) {
          let c = Math.floor(this.contour_curve_list[h].length / 2);
          n.draw_text("white", this.contour_curve_value_list[h], this.contour_curve_list[h][c].x, this.canvas_height - this.contour_curve_list[h][c].y), this.ctx.save(), this.ctx.scale(1, -1), this.ctx.translate(0, -this.canvas_height);
        } else
          this.ctx.save(), this.ctx.scale(1, -1), this.ctx.translate(0, -this.canvas_height);
      }
    }
    this.ctx.restore();
  }
}
class Qt {
  /**
   * 包装一个 PointSet 
   * @param {CanvasRenderingContext2D} ctx - 2d canvas上下文
   * @param {string} color - 绘制点的颜色
   * @param {PointSet} pointset - 接受点列表
   */
  constructor(t, e, i) {
    this.ctx = t, this.color = e, this.pointset = i;
  }
  /**
   * 绘制自身
   */
  draw() {
    new C(this.ctx, this.color).draw_pointset(this.pointset.getPointSet());
  }
  /**
   * 绘制凸包
   * @param {boolean} IsFill - 是否填充凸包
   */
  draw_convex_hull(t = !1) {
    new C(this.ctx, this.color).draw_polygon(this.pointset.getConvexHull(), t);
  }
  draw_extent(t = !1) {
    new C(this.ctx, "#00ffff5a").draw_rect(this.pointset.extent, t);
  }
  //计划将该对象的一些属性信息写入页面的元素
}
class te {
  /**
     * 包装一个 Line
     * @param {CanvasRenderingContext2D} ctx 
     * @param {number} number 
     * @param {string} color 
     * @param {Array} pointlist - 点列表(该类会自动包装成Line类)
     */
  constructor(t, e, i) {
    this.ctx = t, this.color = e, this.line = new rt(i);
  }
  /**
   * 绘制自身
   * @param {string} color - 线的颜色
   * @param {number} linewidth - 线的宽度
   * @param {boolean} smooth - 是否平滑
   * 
   */
  draw(t = this.color, e = 1, i = !1) {
    new C(this.ctx, t).draw_complexline(this.line.getLine(), i);
  }
  /**
   * 调用道格拉斯扑克算法抽稀线
   * @param {number} threashold - 算法阈值
   * @param {boolean} smooth - 是否平滑
   */
  draw_DPsmmoth(t = 290, e = !1) {
    new C(this.ctx, "rgb(0, 136, 255)").draw_complexline(this.line.getSubSetByDP(t), e);
  }
  draw_extent() {
    new C(this.ctx, "#00ffff5a").draw_rect(this.line.extent);
  }
}
class ee {
  /**
     * 
     * @param {CanvasRenderingContext2D} ctx 
     * @param {number} number 
     * @param {string} color 
     * @param {Triangle} tri - 直接输入三角形类型的变量
     */
  constructor(t, e, i) {
    this.ctx = t, this.color = e, this.triangle = i, this.pan = new C(this.ctx, this.color);
  }
  draw(t = !1) {
    this.pan.draw_triangle(this.triangle.getTriangle(), t);
  }
  /**
   * 绘制外接圆
   * @param {boolean} IsFill - 是否填充(默认不填充)
   */
  draw_EXCircle(t = !1) {
    let e = new C(this.ctx, "red"), i = this.triangle.getEXCCenter();
    e.draw_circle(i.x, i.y, this.triangle.getEXCRadius(), t), e.draw_point(i.x, i.y);
  }
  /**
   * 绘制三角形内切圆
   */
  draw_INCircle(t) {
    let e = this.pan, i = this.triangle.getINCcenter();
    e.draw_circle(i.x, i.y, this.triangle.getINCRadius(), t), e.draw_point(i.x, i.y);
  }
  draw_info(t) {
    let e = this.pan, i = this.triangle.getEXCCenter(), r = "(x:" + i.x.toFixed(2) + ",y:" + i.y.toFixed(2) + ")";
    t += r, e.draw_text("black", t, i.x, i.y);
  }
  /**
   * 绘制三角形的三条垂线
   * @param {string} color - 线的颜色
   * @param {boolean} Isannotate - 是否标注垂足
   */
  draw_vertices(t, e) {
    let i = new C(this.ctx, t), r = this.triangle.getINCcenter(), l = r.getFootPoint_(this.triangle.a), s = r.getFootPoint_(this.triangle.b), n = r.getFootPoint_(this.triangle.c);
    i.draw_line(r, l, 1), i.draw_line(r, s, 1), i.draw_line(r, n, 1), e && (i.draw_point(l.x, l.y, "white", 3), i.draw_point(s.x, s.y, "white", 3), i.draw_point(n.x, n.y, "white", 3));
  }
}
class ie {
  /**
     * 统计数据视图
     * - 注意：
     * - 本部分将重写，重写思路：主要实现几种经典统计图的绘制
     * - 柱状图（bar chart）
     * - 折线图（line plot）
     * - 待续
     * 注意：这样将导致绘图思路上有大的变化，但是提升了整体功能的灵活性。
     * 
     * @param {CanvasRenderingContext2D} ctx - 二维绘图上下文
     * @param {Stastic} stastic - 直接输入需要可视化的stastic变量
     */
  constructor(t, e) {
    this.ctx = t, this.stastic = e;
  }
  /**
    * **绘制盒须图 需要指定该图的外包络矩形及xy轴的分辨率**
    * @param {number} x1 - 左上
    * @param {number} y1 
    * @param {number} x2 - 右下
    * @param {number} y2 
    * @param {number} yleve - y轴尺度
    * @param {number} xleve - x轴尺度
    * */
  draw_box_whisker_plot(t, e, i, r, l, s, n, h, o) {
    let d = this.stastic.create_box_whisker_plot(t, e, i, r, l, s), a = d.MBR, c = d.YAXI, f = d.WHISKER, g = d.BOX, x = d.YANO, p = new C(this.ctx, "gray"), m = new C(this.ctx, "blue"), _ = new C(this.ctx, "green");
    this.ctx.save(), this.ctx.scale(1, -1), this.ctx.translate(0, -n), p.draw_rect(a);
    for (let w of c)
      m.draw_line_arr(w);
    for (let w of f)
      m.draw_line_arr(w);
    _.draw_rect(g), this.ctx.restore(), this.ctx.font = "oblique bold 20px Arial";
    for (let w of x)
      this.ctx.fillText(w[0], w[1], n - w[2]);
    (o == "" || o == null) && (o = "box whisker plot");
    let y = (t + i) / 2;
    this.ctx.fillText(o, y - 60, n - e - 5);
  }
  /**
   * 
   * @param {number} x1 
   * @param {number} y1 
   * @param {number} x2 
   * @param {number} y2 
   * @param {number} yleve 
   * @param {number} xleve 
   * @param {number} canvas_height 
   * @param {number} canvas_width 
   * @param {string} name 
   */
  draw_coordinate_box(t, e, i, r, l, s, n, h, o) {
    let d = this.stastic.create_coordinate_box(t, e, i, r, l, s), a = d.MBR, c = (t + i) / 2, f = d.y_scale, g = d.y_mark, x = d.x_scale, p = d.x_mark, m = new C(this.ctx, "gray"), _ = new C(this.ctx, "blue");
    this.ctx.save(), this.ctx.scale(1, -1), this.ctx.translate(0, -n), m.draw_rect(a);
    for (let y of f)
      _.draw_line_arr(y);
    for (let y of x)
      _.draw_line_arr(y);
    this.ctx.restore(), this.ctx.font = "oblique bold 20px Arial";
    for (let y of g)
      this.ctx.fillText(y[0], y[1], n - y[2]);
    for (let y of p)
      this.ctx.fillText(y[0], y[1], n - y[2]);
    (o == "" || o == null) && (o = "blank box"), this.ctx.fillText(o, c, n - e - 5);
  }
  draw_step_plot(t, e, i, r, l, s, n, h, o, d) {
    let a = this.stastic.create_step_plot(t, e, i, r, l, s);
    this.ctx.save(), this.ctx.scale(1, -1), this.ctx.translate(0, -n);
    let c = new C(this.ctx, o);
    for (let f = 0; f < a.length - 1; f++) {
      let g = a[f].concat(a[f + 1]);
      c.draw_line_arr(g);
    }
    this.ctx.restore(), this.draw_coordinate_box(t, e, i, r, l, s, n, h, d);
  }
  draw_step_plot_single(t, e, i, r, l, s, n, h, o) {
    let d = this.stastic.create_step_plot(t, e, i, r, l, s);
    this.ctx.save(), this.ctx.scale(1, -1), this.ctx.translate(0, -n);
    let a = new C(this.ctx, o);
    for (let c = 0; c < d.length - 1; c++) {
      let f = d[c].concat(d[c + 1]);
      a.draw_line_arr(f);
    }
    this.ctx.restore();
  }
}
class re {
  /**
   * 实例化栅格显示对象
   * @param {CanvasRenderingContext2D} ctx - 二维上下文对象
   * @param {grid} grid - 栅格对象
   * @param {number} x1 - 外包络矩形左上角
   * @param {number} y1 
   * @param {number} x2 - 外包络矩形右下角
   * @param {number} y2 
   */
  constructor(t, e, i, r, l, s) {
    this.ctx = t, this.grid = e, this.MBR = [i, r, l, s], this.xn = this.grid.column, this.yn = this.grid.row, this.width = Math.abs(this.MBR[0] - this.MBR[2]), this.height = Math.abs(this.MBR[1] - this.MBR[3]), this.dx = this.width / this.xn, this.dy = this.height / this.yn;
  }
  /**
   * 根据不同的颜色条带（ColorRamp)绘制栅格数据
   * @param {ColorRamp} colorramp - 颜色坡道渲染函数
   * @param {string} name - 标题
   * @param {number} canvas_height - canvas画板的高
   * @param {number} canvas_width - canvas画板的宽
   * @param {boolean} ISDrawRamp - 是否绘制色带
   * @param {number} resolution - 栅格渲染精度控 (0,1] 0.1为默认值
   */
  draw(t, e, i, r, l, s = 0.1) {
    let n = new C(this.ctx, "#00ffff5a"), h = this.grid.column, o = this.grid.row, d = Math.abs(this.MBR[0] - this.MBR[2]), a = Math.abs(this.MBR[1] - this.MBR[3]), c = Math.round(d / h / s) * s, f = Math.round(a / o / s) * s;
    this.ctx.save(), this.ctx.scale(1, -1), this.ctx.translate(0, -e), n.draw_rect(this.MBR);
    for (let g = 0; g < this.grid.row; g++)
      for (let x = 0; x < this.grid.column; x++)
        n.draw_GridCell(
          this.MBR[0] + x * c,
          this.MBR[1] - g * f - f,
          c,
          f,
          t.Colorband_1(this.grid.gridset[g][x])
        );
    if (r) {
      let g = v.getramp(25), x = [this.MBR[2] - 100, this.MBR[1] + 20, this.MBR[2], this.MBR[1]], p = 100 / g[0].length, m = 20 / g.length;
      for (let _ = 0; _ < g.length; _++)
        for (let y = 0; y < g[0].length; y++)
          n.draw_GridCell(
            x[0] + y * p,
            x[1] - _ * m - m,
            p,
            m,
            t.Colorband_1_p(g[_][y])
          );
    }
    this.ctx.restore(), this.ctx.font = "oblique bold 20px Arial", this.ctx.fillText(l, this.MBR[0], e - (this.MBR[1] + 10));
  }
  draw_main(t, e, i, r, l) {
    let s = new C(this.ctx, "#00ffff5a"), n = this.grid.column, h = this.grid.row, o = Math.abs(this.MBR[0] - this.MBR[2]), d = Math.abs(this.MBR[1] - this.MBR[3]), a = Math.round(o / n), c = Math.round(d / h);
    this.ctx.save(), this.ctx.scale(1, -1), this.ctx.translate(0, -e), s.draw_rect(this.MBR);
    for (let f = 0; f < this.grid.row; f++)
      for (let g = 0; g < this.grid.column; g++)
        s.draw_GridCell(
          this.MBR[0] + g * a,
          this.MBR[1] - f * c - c,
          a,
          c,
          t.abGray_main(this.grid.gridset[f][g])
        );
    if (r) {
      let f = v.getramp(25), g = [this.MBR[2] - 100, this.MBR[1] + 20, this.MBR[2], this.MBR[1]], x = 100 / f[0].length, p = 20 / f.length;
      for (let m = 0; m < f.length; m++)
        for (let _ = 0; _ < f[0].length; _++)
          s.draw_GridCell(
            g[0] + _ * x,
            g[1] - m * p - p,
            x,
            p,
            t.abGray_main_p(f[m][_])
          );
    }
    this.ctx.restore(), this.ctx.font = "oblique bold 20px Arial", this.ctx.fillText(l, this.MBR[0], e - (this.MBR[1] + 10));
  }
  /**
   * 绘制坡度图
   * @param {*} colorramp - 颜色带
   * @param {*} canvas_height - 画布高度
   * @param {*} canvas_width - 画布宽度
   * @param {*} ISDrawRamp - 是否绘制预览色带
   * @param {*} name - 栅格名
   * @memberof grid
   * @returns {void}
   */
  draw_aspect(t, e, i, r, l, s = 0.1) {
    let n = new C(this.ctx, "#00ffff5a"), h = this.grid.column, o = this.grid.row, d = Math.abs(this.MBR[0] - this.MBR[2]), a = Math.abs(this.MBR[1] - this.MBR[3]), c = Math.round(d / h / s) * s, f = Math.round(a / o / s) * s;
    this.ctx.save(), this.ctx.scale(1, -1), this.ctx.translate(0, -e);
    for (let g = 0; g < this.grid.row; g++)
      for (let x = 0; x < this.grid.column; x++)
        n.draw_GridCell(
          this.MBR[0] + x * c,
          this.MBR[1] - g * f - f,
          c,
          f,
          t.Colorband_2(this.grid.gridset[g][x])
        );
    if (r) {
      let g = v.get_aspect_ramp(8), x = [this.MBR[2] - 100, this.MBR[1] + 20, this.MBR[2], this.MBR[1]], p = 100 / g[0].length, m = 20 / g.length;
      for (let _ = 0; _ < g.length; _++)
        for (let y = 0; y < g[0].length; y++)
          n.draw_GridCell(
            x[0] + y * p,
            x[1] - _ * m - m,
            p,
            m,
            t.Colorband_2(g[_][y])
          );
    }
    this.ctx.restore(), this.ctx.font = "oblique bold 20px Arial", (l == "" || l == null) && (l = "aspect render model"), this.ctx.fillText(l, this.MBR[0], e - (this.MBR[1] + 10));
  }
  /**
   * 绘制选中的某一个栅格
   * @param {number} row - 该栅格的行号
   * @param {number} column - 该栅格的列号
   * @param {string} color - 标记颜色（建议用rgba定义）
   * * **注意：若想要看到绘制的栅格，请在底图栅格绘制好后调用该方法！**
   */
  draw_selected_cell(t, e, i, r) {
    let l = new C(this.ctx, "gray");
    this.ctx.save(), this.ctx.scale(1, -1), this.ctx.translate(0, -r), l.draw_GridCell(
      this.MBR[0] + t * this.dx,
      this.MBR[1] - e * this.dy - this.dy,
      this.dx,
      this.dy,
      i
    ), this.ctx.restore();
  }
  /**
   * 绘制一列栅格
   * * 输入格式：
   * * [ [row1,column1],
   * *   [row2,column2],...]
   * @param {array} celllist - 栅格列表
   * @param {string} color - 标识颜色建议使用rgba
   * * **注意：若想要看到绘制的栅格，请在底图栅格绘制好后调用该方法！**
   */
  draw_cell_set(t, e, i) {
    for (let r of t)
      this.draw_selected_cell(r[0], r[1], e, i);
  }
  /**
   * ### 绘制连续值 (用户自定义的栅格渲染方式)
   * - 需要统计数据
   * @param {*} canvas_height - 二维canvas上下文的高度
   * @param {*} ISDrawRamp - 是否要绘制示意颜色条带（位于栅格的右上角）
   * @param {*} ISDrawmain - 是否只绘制主体区域（即只绘制箱线图“箱”中的数据）
   * @param {boolean} ISReversed - 是否需要反转颜色条带
   * @param {Stastic} stastic - 需要输入一个包装了本栅格值的统计对象
   * @param {Function} render_function - 颜色渲染函数
   * @param {string} name - 栅格名
   * @param {number} alpha - 栅格渲染的不透明度
   */
  draw_custom(t, e, i, r, l, s, n, h) {
    let o = new C(this.ctx, "#00ffff5a");
    this.ctx.save(), this.ctx.scale(1, -1), this.ctx.translate(0, -t);
    let d = this.dx, a = this.dy;
    if (i)
      for (let c = 0; c < this.grid.row; c++)
        for (let f = 0; f < this.grid.column; f++)
          o.draw_GridCell(
            this.MBR[0] + f * d,
            this.MBR[1] - c * a - a,
            d,
            a,
            s(
              l.Linear_Normalization_main(this.grid.gridset[c][f]),
              r,
              h
            )
          );
    for (let c = 0; c < this.grid.row; c++)
      for (let f = 0; f < this.grid.column; f++)
        o.draw_GridCell(
          this.MBR[0] + f * d,
          this.MBR[1] - c * a - a,
          // BUG 10.11 all fixed: 绘制栅格往上偏一格。原因：canvas上下对称操作后，绘制fillrect会变成从左下角向右上角绘制。
          d,
          a,
          s(
            l.Linear_Normalization(this.grid.gridset[c][f]),
            r,
            h
          )
        );
    if (e) {
      let c = v.getramp(25), f = [this.MBR[2] - 100, this.MBR[1] + 20, this.MBR[2], this.MBR[1]], g = 100 / c[0].length, x = 20 / c.length;
      for (let p = 0; p < c.length; p++)
        for (let m = 0; m < c[0].length; m++)
          o.draw_GridCell(
            f[0] + m * g,
            f[1] - p * x - x,
            g,
            x,
            s(
              c[p][m],
              r,
              h
            )
          );
    }
    o.draw_rect(this.MBR), this.ctx.restore(), n !== void 0 && (this.ctx.font = "oblique bold 20px Arial", this.ctx.fillText(n, this.MBR[0], t - (this.MBR[1] + 10)));
  }
  /**
   * ### 绘制离散值 (用户自定义的栅格渲染方式)
   * @param {*} canvas_height - 二维canvas上下文的高度
   * @param {*} ISDrawRamp  - 是否要绘制示意颜色条带（位于栅格的右上角）
   * @param {*} render_function  - 颜色渲染函数
   * @param {*} name - 栅格名
   * @param {*} level - 离散值的等级
   * @param {*} alpha  - 栅格渲染的不透明度
   * @param {*} resolution - 栅格渲染精度控制在0.1
   * @param {*} ValueList - 预先计算好的离散值列表
   */
  draw_dispersed_custom(t, e, i, r, l, s, n = 0.1, h) {
    let o = new C(this.ctx, "#00ffff5a");
    this.ctx.save(), this.ctx.scale(1, -1), this.ctx.translate(0, -t);
    let d = this.grid.column, a = this.grid.row, c = Math.abs(this.MBR[0] - this.MBR[2]), f = Math.abs(this.MBR[1] - this.MBR[3]), g = Math.round(c / d / n) * n, x = Math.round(f / a / n) * n;
    for (let p = 0; p < this.grid.row; p++)
      for (let m = 0; m < this.grid.column; m++)
        o.draw_GridCell(
          this.MBR[0] + m * g,
          this.MBR[1] - p * x - x,
          // BUG 10.11 all fixed: 绘制栅格往上偏一格。原因：canvas上下对称操作后，绘制fillrect会变成从左下角向右上角绘制。
          g,
          x,
          i(
            this.grid.gridset[p][m],
            s
          )
        );
    if (e) {
      let p = v.get_dispersed_ramp(l), m = [this.MBR[2] - 100, this.MBR[1] + 20, this.MBR[2], this.MBR[1]], _ = 100 / p[0].length, y = 20 / p.length;
      if (h == null)
        for (let w = 0; w < p.length; w++)
          for (let b = 0; b < p[0].length; b++)
            o.draw_GridCell(
              m[0] + b * _,
              m[1] - w * y - y,
              _,
              y,
              i(p[w][b], s)
            );
      else {
        let w = v.get_Custom_ramp(h);
        for (let b = 0; b < w.length; b++)
          for (let R = 0; R < w[0].length; R++)
            o.draw_GridCell(
              m[0] + R * _,
              m[1] - b * y - y,
              _,
              y,
              i(w[b][R], s)
            );
      }
    }
    o.draw_rect(this.MBR), this.ctx.restore(), r !== void 0 && (this.ctx.font = "oblique bold 20px Arial", this.ctx.fillText(r, this.MBR[0], t - (this.MBR[1] + 10)));
  }
  // 获取外包络矩形 MBR
  /**
   * 直接获取外包络矩形，一维数组，[x_min,y_min,x_max,y_max]
   * - 若想要更丰富的外包络矩形方法，可使用 MBRect 类包装
   * @returns {Array} [x_min,y_min,x_max,y_max]
   */
  getMBR() {
    return this.MBR;
  }
}
class le {
  //使用不便 需要改善结构
  /**
   * 实例化颜色条带类 需要获取原栅格的统计分布
   * @param {Stastic} stastic - 输入栅格值的统计对象
   */
  constructor(t) {
    this.stastic = t;
  }
  /**
   * 将rgb值渲染为canvas能识别的字符串
   * @param {number} r 
   * @param {number} g 
   * @param {number} b 
   * @returns 字符串：rgb(r,g,b)
   */
  rgb_renderer(t, e, i) {
    return "rgb(" + t + "," + e + "," + i + ")";
  }
  /**
  * 将rgb值渲染为canvas能识别的字符串
  * @param {number} r 
  * @param {number} g 
  * @param {number} b 
  * @param {number} a
  * @returns 字符串：rgb(r,g,b,a)
  */
  rgba_renderer(t, e, i, r) {
    return "rgba(" + t + "," + e + "," + i + "," + r + ")";
  }
  /**
   * 归一化公式 ：(x – μ) / σ 
   * * σ 是标准差  μ 是均值
   * @param {number} value 
   * @returns {number} 返回值 [0,1]
   */
  Z_Score_Normalization(t) {
    return (t - this.stastic.mean) / this.stastic.Standard_Deviation;
  }
  /**
   * 线性归一化 
   * * 公式：(x - min) / (max - min)
   * @param {number} value 
   * @returns {number} 返回值 [0,1]
   */
  Linear_Normalization(t) {
    return (t - this.stastic.min) / (this.stastic.max - this.stastic.min);
  }
  /**
  * 线性归一化 (仅针对 **主要区域** 的归一化 **这里指盒须图中的盒中区域** )
  * * 公式：(x - min) / (max - min)
  * @param {number} value 
  * @returns {number} 返回值 [0,1]
  */
  Linear_Normalization_main(t) {
    let e = (t - this.stastic.q1) / (this.stastic.q3 - this.stastic.q1);
    return e > 1 ? 1 : e < 0 ? 0 : e;
  }
  /**
   * 该方法将对应的栅格值（value）映射为灰度图
   * * 默认颜色条带 灰度图 
   * * 数学基础 ： 先对数值归一化 后乘255 数值越大则颜色越深
   * @param {number} value - 输入的栅格值
   * @returns {string} 返回 "rgb（r,g,b）"  描述颜色的字符串
   */
  Gray(t) {
    let i = 255 * this.Linear_Normalization(t), r = i, l = i;
    return "rgb(" + i + "," + r + "," + l + ")";
  }
  abGray(t) {
    let i = 255 * (1 - this.Linear_Normalization(t)), r = i, l = i;
    return "rgb(" + i + "," + r + "," + l + ")";
  }
  Red(t) {
    let i = 255 * this.Linear_Normalization(t), r = 0, l = 0;
    return "rgb(" + i + "," + r + "," + l + ")";
  }
  Green(t) {
    let e = this.Linear_Normalization(t), i = 0, r = 255 * e, l = 0;
    return "rgb(" + i + "," + r + "," + l + ")";
  }
  Blue(t) {
    let e = this.Linear_Normalization(t), i = 0, r = 0, l = 255 * e;
    return "rgb(" + i + "," + r + "," + l + ")";
  }
  Colorband_1(t) {
    let e = this.Linear_Normalization(t);
    return e < 0.333 ? this.rgb_renderer(0, 100 * e, 255 * e) : e < 0.444 ? this.rgb_renderer(155 * e, 155 * e, 55 * e) : e < 0.555 ? this.rgb_renderer(55 * e, 155 * e, 55 * e) : e < 0.777 ? this.rgb_renderer(255 * e, 255 * e, 155 * e) : this.rgb_renderer(255 * e, 255 * e, 255 * e);
  }
  Colorband_1_p(t) {
    let e = t;
    return e < 0.333 ? this.rgb_renderer(0, 100 * e, 255 * e) : e < 0.444 ? this.rgb_renderer(155 * e, 155 * e, 55 * e) : e < 0.555 ? this.rgb_renderer(55 * e, 155 * e, 55 * e) : e < 0.777 ? this.rgb_renderer(255 * e, 255 * e, 155 * e) : this.rgb_renderer(255 * e, 255 * e, 255 * e);
  }
  /**
   * 渲染坡向（0-360）
   * @param {number} value 
   * @returns 
   */
  Colorband_2(t) {
    return t < 22.5 ? this.rgb_renderer(255, 0, 0) : t < 67.5 ? this.rgb_renderer(255, 165, 0) : t < 112.5 ? this.rgb_renderer(255, 255, 0) : t < 157.5 ? this.rgb_renderer(0, 255, 0) : t < 202.5 ? this.rgb_renderer(0, 255, 255) : t < 247.5 ? this.rgb_renderer(135, 206, 250) : t < 292.5 ? this.rgb_renderer(0, 0, 255) : t < 337.5 ? this.rgb_renderer(139, 0, 255) : this.rgb_renderer(255, 0, 0);
  }
  /**
   * 线性归一化 但是将绘制区域限制在盒子内
   * * 默认颜色条带 灰度图 
   * * 数学基础 ： 先对数值归一化 后乘255 数值越大则颜色越深
   * @param {number} value - 输入的栅格值
   * @returns {string} 返回 "rgb（r,g,b）"  描述颜色的字符串
   */
  Gray_main(t) {
    let i = 255 * this.Linear_Normalization_main(t), r = i, l = i;
    return "rgb(" + i + "," + r + "," + l + ")";
  }
  Gray_main_p(t) {
    let i = 255 * t, r = i, l = i;
    return "rgb(" + i + "," + r + "," + l + ")";
  }
  /**
   * 线性归一化 但是将绘制区域限制在盒子内
   * * 默认颜色条带 反灰度图 
   * * 数学基础 ： 先对数值归一化 后乘255 数值越大则颜色越深
   * @param {number} value - 输入的栅格值
   * @returns {string} 返回 "rgb（r,g,b）"  描述颜色的字符串
   */
  abGray_main(t) {
    let i = 255 * (1 - this.Linear_Normalization_main(t)), r = i, l = i;
    return "rgb(" + i + "," + r + "," + l + ")";
  }
  abGray_main_p(t) {
    let i = 255 * (1 - t), r = i, l = i;
    return "rgb(" + i + "," + r + "," + l + ")";
  }
  /**
   * Z_Score_Normalization归一化策略
   * * 默认颜色条带 灰度图 
   * * 数学基础 ： 先对数值归一化 后乘255 数值越大则颜色越深
   * @param {number} value - 输入的栅格值
   * @returns {string} 返回 "rgb（r,g,b）"  描述颜色的字符串
   */
  Gray_Z_score_Nor(t) {
    let i = 255 * this.Z_Score_Normalization(t), r = i, l = i;
    return "rgb(" + i + "," + r + "," + l + ")";
  }
}
const me = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ColorRamp: le,
  Contour_CurveView: Jt,
  GridView: re,
  LineView: te,
  PointSetView: Qt,
  PointView: $t,
  PolygonView: Ut,
  StasticView: ie,
  TriangleView: ee
}, Symbol.toStringTag, { value: "Module" }));
class se {
  constructor(t, e, i, r) {
    this.id = t, this.listId = null, this.parent = e, this.width = i, this.height = r, this.ctx = null;
  }
  // new class stuff above here
  create() {
    if (this.ctx !== null) {
      console.log("Canvas already created!");
      return;
    } else {
      let t = document.createElement("div"), e = document.createElement("canvas");
      this.parent.appendChild(t), t.appendChild(e), t.id = this.id, e.width = this.width, e.height = this.height, t.style.display = "flex", t.style.justifyContent = "center", t.style.alignItems = "center", t.style.backgroundColor = "#f5f5f5", this.ctx = e.getContext("2d");
    }
  }
  createReportList() {
    if (this.listId !== null) {
      console.log("Report list already created!");
      return;
    } else {
      let t = document.createElement("ul");
      t.id = this.id + "-reporter", document.getElementById(this.id).appendChild(t), this.listId = t.id;
    }
  }
}
const we = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Canvas: se
}, Symbol.toStringTag, { value: "Module" }));
function G(u, t = 0, e = 0) {
  let i = H(u) + t, r = H(u) + e;
  return new B(i, r);
}
function ne(u, t, e = 0, i = 0) {
  let r = [];
  for (let l = 0; l < u; l++)
    r.push(G(t, e, i));
  return r;
}
function he(u) {
  let t = G(u), e = G(u);
  return new N(t, e);
}
function oe(u, t, e, i = 0, r = 0) {
  let l = [];
  for (let s = 0; s < u; s += e)
    l.push(new B(s + i, H(t) + r));
  return l;
}
function ae(u) {
  let t = G(u), e = G(u), i = G(u);
  return U(t, e, i) === 3 ? (console.log("three point are on the same line"), null) : new X(t, e, i);
}
function ce(u, t) {
  let e = new Array(u);
  var i, r, l;
  for (l = e.length; l--; ) {
    do
      i = Math.random() - 0.5, r = Math.random() - 0.5;
    while (i * i + r * r > 0.25);
    i = (i * 0.96875 + 0.5) * t, r = (r * 0.96875 + 0.5) * t, e[l] = [i, r];
  }
  return e;
}
function ue(u, t, e) {
  let i = [];
  for (let r = 0; r < u; r++) {
    let l = [];
    for (let s = 0; s < t; s++) {
      let n = H(e);
      l.push(n);
    }
    i.push(l);
  }
  return i;
}
function It(u, t) {
  if (t > u.length)
    return [];
  if (t === u.length) {
    let e = u.length - 1, i = u.slice(), r = [];
    for (let l = 0; l < t - 1; l++) {
      let s = nt(e), n = i[s];
      r.push(n), i.splice(s, 1), e = e - 1;
    }
    return r.push(i[0]), r;
  } else {
    let e = u.length - 1, i = u.slice(), r = [];
    for (let l = 0; l < t; l++) {
      let s = nt(e), n = i[s];
      r.push(n), i.splice(s, 1), e = e - 1;
    }
    return r;
  }
}
function Pt(u, t) {
  if (u <= 0)
    return [];
  let e = [];
  for (let r = 0; r < u; r++)
    e.push(r);
  return It(e, t);
}
function fe(u, t, e) {
  let i = [];
  i.length = u;
  for (let r = 0; r < u; r++) {
    let l = [];
    l.length = t;
    for (let s = 0; s < t; s++)
      l[s] = H(e);
    i[r] = l;
  }
  return i;
}
function ge(u, t, e, i) {
  let r = [], l = 2 * Math.PI / i;
  for (let n = 0; n < i; n++) {
    let h = new B(u + e * Math.cos(n * l), t + e * Math.sin(n * l));
    r.push(h);
  }
  return new Z(r);
}
function de(u, t) {
  let e = [0, 1, 2, 4, 8, 16, 32, 64, 128], i = [];
  for (let r = 0; r < u; r++) {
    let l = [];
    for (let s = 0; s < t; s++) {
      let n = nt(9);
      l.push(e[n]);
    }
    i.push(l);
  }
  return i;
}
const be = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Random_Regular_Polygon: ge,
  Random_staAspect_Matrix: de,
  test_1: G,
  test_10: fe,
  test_2: ne,
  test_3: he,
  test_4: oe,
  test_5: ae,
  test_6: ce,
  test_7: ue,
  test_8: It,
  test_9: Pt
}, Symbol.toStringTag, { value: "Module" }));
class Y {
  /**
   * 实例化一个n维向量 需要传入一个n维数组
   * @param {array} ndarr - 传入的数组
   * @param {boolean} ISonedim - 输入的是否为一维数组？若不是请跳过 即[1,2,3,4,5...] 
   */
  constructor(t, e = !1) {
    this.data = t, this.Dimension = t.length, e && (this.Dimension = 1);
  }
  /**
   * 计算 **n维** 欧氏距离(Euclidean Distance)
   * @param {Vector_nD} Invec - 输入的另一个n维向量
   * @return {number} - 返回欧氏距离
   */
  getEDistance_(t) {
    let e = t.data, i = this.Dimension;
    this.Dimension > e.length && (i = e.length);
    let r = 0;
    for (let l = 0; l < i; l++)
      r = r + st(this.data[l], e[l]);
    return Math.sqrt(r);
  }
  /**
   * 曼哈顿距离(Manhattan Distance) Chebyshev distance
   * @param {Vector_nD} Invec - 输入
   * @return {number} - 返回曼哈顿距离
   */
  getMDistance_(t) {
    let e = t.data, i = this.Dimension;
    this.Dimension > e.length && (i = e.length);
    let r = 0;
    for (let l = 0; l < i; l++)
      r = r + D(this.data[l], e[l]);
    return r;
  }
  /**
  * 切比雪夫距离(Chebyshev distance) : max(|a-b|...)
  * @param {Vector_nD} Invec - 输入
  * @return {number} - 返回两点间的切比雪夫距离
  */
  getCDistance_(t) {
    let e = t.data, i = this.Dimension;
    this.Dimension > e.length && (i = e.length);
    let r = [];
    for (let l = 0; l < i; l++)
      r.push(D(this.data[l], e[l]));
    return r.sort((l, s) => l - s), r[r.length - 1];
  }
  /**
   * 闵氏距离(Minkowski Distance) : (｜a-b｜^p+...)^(1/p)
   * @param {Vector_nD} Invec - 输入
   * @param {number} p - 闵氏距离的维度
   * @return {number} - 返回两点间的闵氏距离
   */
  getMKDistance_(t, e) {
    let i = t.data, r = this.Dimension;
    this.Dimension > i.length && (r = i.length);
    let l = 0;
    for (let s = 0; s < r; s++)
      l = l + Math.pow(D(this.data[s], i[s]), e);
    return Math.pow(l, Math.pow(e, -1));
  }
}
class ct {
  /**
   * 创建二维Tensor 可以从二维array构造
   * @param {array} arr2D - 二维array
   */
  constructor(t) {
    this.data = t, this.row = t.length, this.column = t[0].length, this.shape = [this.row, this.column];
  }
  /**
   * 获取 centroid 质心
   * @returns {array} - 返回一个一维向量
   */
  get_centroid() {
    let t = [];
    for (let e = 0; e < this.column; e++) {
      let i = 0;
      for (let r = 0; r < this.row; r++)
        i = i + this.data[r][e];
      t.push(i / this.row);
    }
    return t;
  }
  /**
   * k均值聚类
   * @param {number} k - 分类个数
   * @param {number} thresh - 质心间变化距离
   * @param {number} maxtime - 最大迭代次数
   * @returns 
   * * `groups.length = k` :[
   * [group1],
   * [group2],...
   * ]
   */
  K_means(t, e, i) {
    if (t > this.row)
      return [];
    let r = this.data.slice(), l = Pt(this.row, t), s = [];
    for (let d of l)
      s.push(this.data[d]);
    let n = 1 / 0, h = 0, o = [];
    for (; n > e || h < i; ) {
      o.length = t;
      for (let a = 0; a < t; a++)
        o[a] = [];
      for (let a = 0; a < r.length; a++) {
        let c = new Y(r[a]), f = 99999, g;
        for (let x = 0; x < t; x++) {
          let m = new Y(s[x]).getEDistance_(c);
          if (m < f)
            g = x, f = m;
          else
            continue;
        }
        o[g].push(r[a]);
      }
      let d = 0;
      for (let a = 0; a < t; a++) {
        let c = new ct(o[a]), f = new Y(s[a]), g = new Y(c.get_centroid());
        d = d + f.getEDistance_(g), s[a] = c.get_centroid();
      }
      n = d / t, h = h + 1;
    }
    return o;
  }
}
const Me = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Tensor_2D: ct,
  Vector_nD: Y
}, Symbol.toStringTag, { value: "Module" }));
export {
  we as Creator,
  Me as Learn,
  v as Raster,
  me as Renderer,
  _e as Stastic,
  be as Test,
  pe as Vector,
  ye as pan
};
