
module.exports = exports = function (length, valueOrFiller) {
    if (typeof length != "number") throw new Error("length must be a number!");

    const arr = Array(length).fill(valueOrFiller);

    if (typeof valueOrFiller == "function") return arr.map((_, i) => valueOrFiller(i));
    return arr.fill(valueOrFiller);
}

exports.r = function (lengthOrStart, length, filler) {
    if (typeof length == "undefined") {
        return exports(lengthOrStart, i => i);
    }
    else if (typeof length == "number") {
        const arr = exports(length, i => i + lengthOrStart);
        if (typeof filler == "function") return arr.map((v, i) => filler(v, i));
        return arr;
    }
    else throw new Error("length must be of type number");
}


// for ESM
module.exports.default = module.exports;
