// //callback hell - phải xong việc 1 rồi mới đến việc 2 ...
// setTimeout(function(){
//     console.log(1)
//     setTimeout(function(){
//         console.log(2)
//         setTimeout(function(){
//             console.log(3)
//             setTimeout(function(){
//                 console.log(4)
//             },1000)
//         },1000)
//     },1000)
// },1000)

// //promise
// var promise = new Promise(
//         //Executor
//     function(resolve, reject) {
//         //khi thành công gọi đến resolve()
//         //khi thất bại gọi đến reject()
//         resolve()
//     }
// );

// promise
//     .then(function() {
//         // return 1;
//         return new Promise(function(resolve){
//             setTimeout(function(){
//                 resolve([1,2,3])
//             },3000)
//         })
//     })
//     .then(function(data) {
//         console.log(data)
//         return 2
//     })
//     .catch(function() {
//         console.log('Fail')
//     })
//     .finally(function() {
//         console.log('Finish')
//     })

function sleep(ms){
    return new Promise(function(resolve){
        setTimeout(resolve,ms)
    })
}

// sleep(500)
//     .then(function() {
//         console.log(1)
//         return sleep(1000)
//     })
//     .then(function() {
//         console.log(2)
//         return sleep(1000)
//     })
//     .then(function() {
//         console.log(3)
//         return sleep(1000)
//     })


    sleep(1000)
    .then(function() {
        console.log(1)
        return sleep(1000)
    })
    .then(function() {
        console.log(2)
        return new Promise(function(resolve,reject) {
            reject('Co loi');
        });
    })
    .then(function() {
        console.log(3)
        return sleep(1000)
    })
    .then(function() {
        console.log(4)
        return sleep(1000)
    })
    .catch(function(err){
        console.log(err)
    })