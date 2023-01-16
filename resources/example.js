function add(a, b) {
    for (let index = 0; index < b.length; ++index) {
        b[index] += a;
    };
    return b
};



let c = add(5, [1, 2, 3, 4, 5])

console.log(c, 22222)