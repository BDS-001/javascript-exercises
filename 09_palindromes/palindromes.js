const palindromes = function (text) {
    text = text.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    reverse = ''
    for (i=text.length - 1; i >= 0; i--) {
        reverse += text[i]
    }
    return text === reverse
};

// Do not edit below this line
module.exports = palindromes;
