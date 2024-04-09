const add2 = (a, b) => {
    console.log(this.a, this.b)
    return a + b;
}

console.log(add2(250, 25));

function adds(a, b) {
    console.log(this.a, this.b)
    return a + b;
}
adds(250, 25)

// the below code fragment can be found in: