/*ASYNC AWAIT -
                async function always returns a promise 
                syntax is as follow-
                async function myfunc(){..........}
                await pushes the execution of its surrounding async function untill the promise is settled that is it will pause the excetionaround it 
*/
// async await 
/*
function api() {
   return new Promise((resolve, reject) => {
       setTimeout(() => {
           console.log("this is a promise fromthe api");
           resolve(200);
       }, 2000);
   });
}

async function getdata(data){
   await api();
   await api();
};
*/

function get_data() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("this is promise froim the get_data function");
            resolve(200);
        }, 2000);
    })
}
async function getdata() {
    console.log("getting data 1")
    await get_data();
    console.log("getting data 1")

    await get_data();
    console.log("getting data 1")

}