module.exports = function reverse (n) {
    const num = Math.abs(n);
    const str = String(num);
    return str.split('').reverse().join('');
}

