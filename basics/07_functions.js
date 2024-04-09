const myfunction = () => {
    console.log(1)
    console.log(12)
    console.log(123)
    console.log(1234)
    console.log(12345)
}
myfunction()

function myfunction2() {
    console.log(1)
    console.log(12)
    console.log(123)
    console.log(1234)
    console.log(12345)
}
myfunction2()

// rest operator ... can be used to store the previous value avaialbale in the given function 

function restOperator(...num1) {
    return num1;
}
console.log(restOperator(200, 300, 400, 500, 600));

function arrowfunction() {
    let username = "sumit yadav";
    console.log(this.username)
}

arrowfunction()

