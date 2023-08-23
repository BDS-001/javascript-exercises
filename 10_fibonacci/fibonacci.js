const fibonacci = function(num) {
    if (num < 1) return 'OOPS';
    let a = 0
    let b = 1

    for (i=1;i < num;i++) {
        let tmp = b
        b += a
        a = tmp
    }
    return b
};

// Do not edit below this line
module.exports = fibonacci;
