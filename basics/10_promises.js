// const promiseone = new Promise(function (resolve, reject) {
//     // doa an async call
//     setTimeout(function () {
//         console.log('done task')
//         resolve('sucess')
//     }, 2000);
// }).then(() => {
//     console.log('promise consumed')
// })
//     .catch((error) => {
//         console.log(error)
//     })
// const promise2 = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log('done task')
//         resolve({ love: "rits rai", crush: true })
//     }, 2000)
// })

// promise2.then((data) => {
//     console.log(data)
// })
//     .catch((error) => {
//         console.log(error)
//     })

// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = true;
//         if (!error) {
//             resolve({ message: 'i love you rits' });
//         }
//         reject({ message: "there is an error setting the data" })
//     }, 2000)
// })

// promise3.then((data) => {
//     console.log(data)
// }).catch((error) => {
//     console.log(error)
// })

// const promise4 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = false;
//         if (!error) {
//             resolve({ message: 'i love you rits' });
//         }
//         reject({ message: "there is an error setting the data" })
//     }, 2000)
// }).then((data) => {
//     console.log(data)
//     return data;

// }).then((data) => {
//     console.log(data)
// }).catch((error) => {
//     console.log(error)
// }).finally(() => {
//     console.log('finally dne')
// })

const promise5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({ message: 'i love you rits', user: { name: "ritika rai", age: 25 } });
        }
        reject({ message: "there is an error setting the data" })
    }, 2000)
}).then((data) => {
    console.log(data);
    return data;
}).then((data) => {
    console.log('this is passed data')
    console.log(data)
    return data;
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log('promise 5 endede')
})

async (req, res) => {
    try {
        const response = await promise5;
        console.log(response)
        return res.status(200).json({ message: "async await ", response: response })
    } catch (error) {
        console.log(error)
    }
}
console.log('done')