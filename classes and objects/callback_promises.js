
function hello() {
    console.log("from callback ")
}


setTimeout(() => {
    console.log("from callback 1")
    console.log("from callback 2")
}, 2000);
