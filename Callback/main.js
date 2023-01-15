// function myFunction(param) {
//     if(typeof param === 'function')
//     param('Hoc tap them')
// }

// function myCallback(value) {
//     console.log(value)
// }

// myFunction(myCallback)

// //Ex
// function sumCb(a, b) {
//     return a+b
// }

// function subCb(a, b) {
//     return a-b
// }

// function multiCb(a, b) {
//     return a*b
// }

// function divCb(a, b) {
//     return a/b
// }

// function caculate(a, b, cb) {
//     return cb(a, b);
// }

// // Expected results
// // caculate(1, 2, sumCb) // Output: 3
// // caculate(1, 2, subCb) // Output: -1
// // caculate(1, 2, multiCb) // Output: 2
// // caculate(3, 1, divCb) // Output: 3

//Viet lam ham map
// var courses = [
//     'JVS',
//     'PHP',
//     'Ruby'
// ]

// var newCourse = courses.map(function (course) {
//     return `<h2>${course}</h2>`
// })
// console.log(newCourse.join(''))

// Array.prototype.map2 = function(callback) {
//     var output = [];
//     var arrlength = this.length;
//     for( var i = 0; i < arrlength; i++){
//         var res = callback(this[i],i);
//         output.push(res);
//     }
//     return output;
// }

// var map = courses.map2(function(course){
//     return `<h2>${course}</h2>`
// })
// console.log(map.join(''))

// //Viet lai foreach
// courses.forEach(function (course){
//     console.log(course)
// })

// Array.prototype.forEach2 = function(callback){
//     for( var index in this){
//         if(this.hasOwnProperty(index)){
//         callback(this[index],index,this);
//     }
// }
// }

// courses.forEach2(function(course){
//     console.log(course)
// })

//// Viet lai filter
// var courses = [
//     {
//         name: 'JVS',
//         coin: 680
//     },
//     {
//         name: 'PHP',
//         coin: 860
//     },
//     {
//         id: 3,
//         name: 'C',
//         coin: 900
//     }
// ]
// var listCourse = courses.filter(function (course) {
//     return course.coin > 700
// })
// console.log(listCourse)

// Array.prototype.filter2 = function (callback) {
//     var output = [];
//     for (var index in this) {
//         if (this.hasOwnProperty(index)) {
//             var res = callback(this[index], index, this);
//             if (res)
//                 output.push(this[index])
//         }
//     }
//     return output;
// }

// var isFilter = courses.filter2(function (course) {
//     return course.coin > 700
// })
// console.log(isFilter)

// //Viet lai ham some
// var courses = [
//     {
//         name: 'JVS',
//         coin: 680,
//         isFinish: true
//     },
//     {
//         name: 'PHP',
//         coin: 860,
//         isFinish: false
//     },
//     {
//         id: 3,
//         name: 'C',
//         coin: 900,
//         isFinish: false
//     }
// ]
// var res = courses.some(function (course) {
//     return course.isFinish
// })
// console.log(res)

// Array.prototype.some2 = function (callback) {
//     var output = [];
//     for (var index in this) {
//         if (this.hasOwnProperty(index)) {
//             var res = callback(this[index], index, this);
//             if (res)
//                 return true
//         }
//     }
//     return false;
// }

// var isSome = courses.some2(function (course) {
//     return course.isFinish
// })
// console.log(isSome)

//Viet lai ham every
var courses = [
    {
        name: 'JVS',
        coin: 680,
        isFinish: true
    },
    {
        name: 'PHP',
        coin: 860,
        isFinish: true
    },
    {
        id: 3,
        name: 'C',
        coin: 900,
        isFinish: true
    }
]
var res = courses.every(function (course) {
    return course.isFinish
})
console.log(res)

Array.prototype.every2 = function (callback) {
    var output = [];
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            var res = callback(this[index], index, this);
            if (res==false)
                return false
        }
    }
    return true;
}

var isEvery = courses.every2(function (course) {
    return course.isFinish
})
console.log(isEvery)


// //Bai tap
// Array.prototype.myMap = function(cb) {
//     var newArray = []
//     for(var i = 0; i < this.length;i++){
//        var result = cb(this[i],i);
//        newArray.push(result);
//     }
//     return newArray
// }

// // Expected results
// const numbers = [1, 2, 3];

// console.log(numbers.myMap(function (number) {
//     return number * 2;
// })) // Output: [2, 4, 6]

// console.log(numbers.myMap(function (number, index) {
//     return number * index;
// })) // Output: [0, 2, 6]

// Array.prototype.myFilter = function(cb) {
//     var output = [];
//    for (var index in this) {
//        if (this.hasOwnProperty(index)) {
//            var res = cb(this[index], index, this);
//            if (res)
//                output.push(this[index])
//        }
//    }
//    return output;
// }


// /**
// Expected results:

// const numbers = [1, 2, 3, 4];

// console.log(numbers.myFilter(function (number) {
//    return number % 2 === 0;
// })); Output: [2, 4]

// console.log(numbers.myFilter(function (number, index) {
//    return index % 2 === 0;
// })); Output: [1, 3]

// console.log(numbers.myFilter(function (number, index, array) {
//    return array.length % 2 === 0;
// })); Output: [1, 2, 3, 4]
// */















