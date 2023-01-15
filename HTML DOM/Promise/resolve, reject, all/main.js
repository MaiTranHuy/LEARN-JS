// var promise = new Promise(
//     function(resolve,reject){
//         resolve('Success');
//     }
// );

// var promise = Promise.resolve('Success')
var promise = Promise.reject('Error')

promise
    .then(function(result){
        console.log('result ',result);
    })
    .catch(function(err){
        console.log('error', err)
    })


var promise1 = new Promise(function(resolve){
    setTimeout(function(){
        resolve([1])
    },2000)
})

// var promise2= new Promise(function(resolve){
//     setTimeout(function(){
//         resolve([2,3])
//     },5000)
// })
var promise2 = Promise.reject('Error')

Promise.all([promise1,promise2])
    .then(function(result){
        var p1 = result[0]
        var p2 = result[1]
        console.log(p1.concat(p2))
    })
    .catch(function(err){
        console.log(err)
    })