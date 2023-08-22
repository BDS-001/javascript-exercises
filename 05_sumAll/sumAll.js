const sumAll = function(start, end) {
    if (!Number.isInteger(start) || !Number.isInteger(end) || start < 0 || end < 0) return 'ERROR';

    let total = 0;
    if (start < end) {
        for (i=start;i<=end;i++) {
            total += i
        }
    } else {
        for (i=end;i<=start;i++) {
            total += i
        }
    }
    return total
};

// Do not edit below this line
module.exports = sumAll;
