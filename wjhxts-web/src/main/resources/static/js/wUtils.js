/**
 * 工具类基类
 * @constructor
 */
function WUtils() {
}

/**
 * 工具类的名称
 * @type {string}
 */
WUtils.name = 'wUtils';

/**============================== 随机数方法开始 ==============================*/

/**
 * 生成 [0,1) 之间的随机数
 * @returns {number}
 */
WUtils.prototype.random_0To1 = function () {
    return Math.random();
};
/**
 * 生成 [min,max) 之间的随机数
 * @param min 范围的下界
 * @param max 范围的上界
 * @returns {number}
 */
WUtils.prototype.random_MinToMaxFloat = function (/* Number */min, /* Number */max) {
    return Math.random() * (max - min) + min;
};
/**
 * 生成 [min, max) 之间的随机整数
 * @param min 范围的下界
 * @param max 范围的上界
 * @returns {number} 返回了一个在指定值之间的随机整数。这个值不小于 min （如果 min 不是整数，则不小于 min 的向上取整数），且小于（不等于）max
 */
WUtils.prototype.random_MinToMaxInteger = function (/* Number */min, /* Number */max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //不含最大值，含最小值
};
/**
 * 生成 [min, max] 之间随机整数
 * @param min   范围的上界
 * @param max   范围的下界
 * @returns {number}
 */
WUtils.prototype.random_MinToMaxIntegerAll = function (/* Number */min, /* Number */max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值
};

/**============================== 随机数方法结束 ==============================*/

/**
 * 生成 [0,1) 之间的随机数
 * @returns {number}
 */
function random0To1() {
    return Math.random();
}

/**
 * 生成 [min,max) 之间的随机数
 * @param min 范围的下界
 * @param max 范围的上届
 */
function randomMinToMaxFloat(min, max) {
    return Math.random() * (max - min) + min;
}

/**
 * 生成 [min, max) 之间的随机整数
 * @param min 范围的下界
 * @param max 范围的上界
 * @returns {number} 返回了一个在指定值之间的随机整数。这个值不小于 min （如果 min 不是整数，则不小于 min 的向上取整数），且小于（不等于）max
 */
function randomMinToMaxInteger(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //不含最大值，含最小值
}

/**
 * 生成 [min, max] 之间随机整数
 * @param min
 * @param max
 * @returns {number}
 */
function randomMinToMaxIntegerAll(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值
}

/**
 * 比较两个数组是否相等
 * @param arr1 要比较的第一个数组
 * @param arr2 要比较的第二个数组
 * @returns {boolean} 如果两个数组 长度相等、并且相同位置上的元素也相等 ，返回 true，否则返回 false
 */
function equalArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;

    for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i])
            return false;
    }

    return true;
}

/**
 * 通过原型继承创建一个新对象
 * @param p 要继承的原型
 * @returns {*} 新的对象
 */
function inherit(p) {
    if (p == null) throw TypeError('被继承的对象不能为 null');
    if (Object.create) // 如果 Object.create 存在，直接使用它
        return Object.create(p);
    var t = typeof p;
    if (t !== "object" && t !== 'function') throw TypeError('被继承的对象不是对象或函数');
    function f() {}
    f.prototype = p;
    return new f();
}

function copyObj(o, p) {
    if (o === null || p === null) throw new TypeError("参数不是对象");
    // for (prop in p) {
    //     if (o.hasOwnProperty(prop)) continue;
    //     o[prop] = p[prop];
    // }
    for (x in Object.keys(p))
        console.log(x);
}

/**
 * 获取指定对象的字符串类型描述
 * @param o 要获取类型描述的对象
 * @returns {string} 类型描述字符串
 */
function classof(o) {
    if (o === null) return 'Null';
    if (o === undefined) return 'Undefined';
    return Object.prototype.toString.call(o).slice(8, -1);
}

/**
 * 判定 o 是否是一个类数组对象
 * 字符串和函数有 length 属性，但是它们可是使用 typeof 检测将其排除
 * 在客户端 js 中，DOM 文本节点也有 length 属性，需要使用额外判断 o.nodeType != 3 将其排除
 * @param o 要判断的对象
 * @returns {boolean} 判断结果
 */
function isArrayLike(o) {
    if (o &&                                    // o 非 null、undefined等
        typeof o === 'object' &&                // o 是对象
        isFinite(o.length) &&                   // o.length 是有限数值
        o.length > 0 &&                         // o.length 是非负数
        o.length === Math.floor(o.length) &&    // o.length 是整数
        o.length < 4294967296                   // o.length < 2^32
    )
        return true;                            // o 是类数组对象
    else
        return false;                           // o 不是类数组对象
}

/**
 * 遍历 o 对象的属性，并将其加入 a 数组中
 * @param o 待遍历的对象
 * @param a 接受对象属性名的数组，如果不传，就创建一个新数组
 * @returns {Array}  保存 o 中属性名称的数组
 */
function getPropertyNames(o, /* optional */ a) {
    a = a || [];
    for (var property in o)
        a.push(property);
    return a;
}
