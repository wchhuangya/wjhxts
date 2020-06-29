/**
 * 彩票基类
 * @constructor
 */
function CP() {
    this.name = '';     // 彩票种类名称，默认为空
    this.reds = [];     // 最终的红球数组
    this.blues = [];    // 最终的蓝球数组
    this.nums = 1;      // 最终要生成的组数
    this.start_num = 1; // 红球和蓝球默认开始的数字
}

/**
 * 大乐透子类
 * @constructor
 */
function DLT() {
    CP.call(this);
    this.name = '大乐透';
    this.red_nums = 5;  // 要生成的红球个数，默认 5 个
    this.blue_nums = 2; // 要生成的蓝球个数，默认 2 个
    this.red_max = 35;  // 红球最大的数
    this.blue_max = 12; // 蓝球最大的数
}
DLT.prototype = Object.create(CP.prototype);

/**
 * 双色球子类
 * @constructor
 */
function SSQ() {
    CP.call(this);
    this.name = '大乐透';
    this.red_nums = 6;  // 要生成的红球个数，默认 6 个
    this.blue_nums = 1; // 要生成的蓝球个数，默认 1 个
    this.red_max = 33;  // 红球最大的数
    this.blue_max = 16; // 蓝球最大的数
}
SSQ.prototype = Object.create(CP.prototype);

CP.prototype.generateReds = function () {
    while (this.reds.length < this.red_nums) {
        var redIndex = new WUtils().random_MinToMaxIntegerAll(this.start_num, this.red_max);
        if (this.reds.indexOf(redIndex) === -1)
            this.reds.push(redIndex);
    }
};

CP.prototype.generateBlues = function () {
    while (this.blues.length < this.blue_nums) {
        var blueIndex = new WUtils().random_MinToMaxIntegerAll(this.start_num, this.blue_max);
        if (this.blues.indexOf(blueIndex) === -1)
            this.blues.push(blueIndex);
    }
};
/**
 * 生成中奖的号码
 * @param r_nums    红球数量
 * @param b_nums    蓝球数量
 * @param n_nums    生成的组数
 * @returns {Object}
 */
CP.prototype.generateRes = function (/* Number */r_nums, /* Number */b_nums, /* Number */n_nums) {
    this.red_nums = r_nums || this.red_nums;
    this.blue_nums = b_nums || this.blue_nums;
    this.nums = n_nums || this.nums;
    var res = {
        reds: [],
        blues: [],
        res: []
    };
    // 随机生成不重复的彩票注数
    var randomNums = new WUtils().random_MinToMaxIntegerAll(1, n_nums);
    while (true) {

        this.generateReds();
        this.generateBlues();

        if (randomNums > 0) { // 不重复的彩票还没有生成完
            if (this.checkRes(res, this.reds, this.blues)) { // 如果生成的彩票不重复
                res.reds.push(this.reds.sort(function (a, b) { return a - b; }));
                res.blues.push(this.blues.sort(function (a, b) { return a - b;}));
                randomNums--;
            }
        } else {
            res.reds.push(this.reds.sort(function (a, b) { return a - b; }));
            res.blues.push(this.blues.sort(function (a, b) { return a - b;}));
        }

        this.reds = [];
        this.blues = [];

        if (res.reds.length === this.nums)
            break;
    }

    // 将生成的红球与蓝球拼接到一起
    for (var i = 0; i < res.reds.length; i++) {
        res.res.push(res.reds[i].concat(res.blues[i]));
    }
    return res;
};

CP.prototype.checkRes = function (res, reds, blues) {
    // TODO 下次修改时，红球与蓝球随机拼接
    if (res.reds.length > 0) {
        for (var i = 0; i < res.reds.length; i++) {
            for (var j = 0; j < reds.length; j++) {
                if (res.reds[i].indexOf(reds[j]) > -1)
                    return false;
            }
        }
    }
    if (res.blues.length > 0) {
        for (var i = 0; i < res.blues.length; i++) {
            for (var j = 0; j < blues.length; j++) {
                if (res.blues[i].indexOf(blues[j]) > -1)
                    return false;
            }
        }
    }
    return true;
};