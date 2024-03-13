/* in javascript the resolve and reject is provided , which tells the state in whuch the promise is in currently 


let promise = new Promise((resolve, reject) => {
    console.log("i am a promise");
    resolve("promise is fulfiiled by the resolve "); // this show that promise is fullfilled
    reject("there is some error has been occured and thats why we are getting this errorr  "); // this show that the promise has been rejected 
    
}) 

const getpromise = () => {
    return new Promise((resolve, reject) => {
        console.log("i am a get promise function ");
        // resolve("sucess");
        reject("error")
    })
}
let promise = getpromise();
promise.then(() => {
    console.log("fulfiiled ");
});
promise.catch(() => {
    console.log("error in the primuse ")
})

const get_function = () => {
    console.log("this is new get function");
    return new Promise((resolve, reject) => {
        resolve("success");
    })
};

let promise_made_by_me = get_function();
promise_made_by_me.then(() => {
    console.log("fu;llfi;;ed by mw nothing left there is no love between you and me ")
})


*/


/* promise chaining */
/* this is nirmal functuion

function asynch1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("im waiting for the output for the asysnch functioj")
            resolve("success");
        }, 5000);
    })
};
function asynch2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("im waiting for the output for the asysnch functioj")
            resolve("success");
        }, 6000);
    })
};
let p1 = asynch1();
let p2 = asynch2();
p1.then((res) => {
    console.log(res)
});
p2.then((res) => {
    console.log(res)
    console.log("this is promise 2 ");
    console.log(res)
})
*/
/*  promise chaining

function asynch1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("im waiting for the output for the asysnch functioj")
            resolve("success");
        }, 5000);
    })
};
function asynch2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("im waiting for the output for the asysnch functioj")
            resolve("success");
        }, 6000);
    })
};
asynch1().then((res) => {
    console.log(res)
    asynch2().then((res) => {
        console.log(res)
        console.log("this is promise 2 ");
        console.log(res)
    })
});

*/

