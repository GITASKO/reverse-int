module.exports = function reverse (n) {
    return Math.sign(n) === -1 ? n.toString().slice(1, n.length).split("").reverse().join("") : n.toString().split("").reverse().join("");
}
