// var courses = [
//     {
//         id:1,
//         name: 'JVS',
//         coin: 250
//     },
//     {
//         id:2,
//         name: 'PHP',
//         coin: 300
//     },
//     {
//         id:3,
//         name: 'C',
//         coin: 140
//     },  
//     {
//         id:4,
//         name: 'Python',
//         coin: 0
//     },
//     {
//         id:5,
//         name: 'Ruby',
//         coin: 100
//     },
//     {
//         id:6,
//         name: 'Ruby',
//         coin: 12
//     },
// ]
// //duyet qua tung phan tu
// courses.forEach(function (course){
//     console.log(course)
// })

// //Tat ca dieu kien trong mang thoa man gi do dung every
// //kiem tra xem tat ca coin co free hay khong
// var isFree = courses.every(function (course){
//     return course.coin === 0
// })
// console.log(isFree)

// //1 dieu kien trong mang thoa man gi do dung some
// //kiem tra xem tat ca coin co free hay khong
// var isFree = courses.some(function (course){
//     return course.coin === 0
// })
// console.log(isFree)

// //dung find
// //tim trong array co name = ruby khong tra ve 1 phan tu dau tien
// var course = courses.find(function (course){
//     return course.name === 'Ruby'
// })
// console.log(course)

// //dung filter
// //tim trong array co name = ruby khong tra ve tatca phan tu dau tien
// var listCourse = courses.filter(function (course){
//     return course.name === 'Ruby'
// })
// console.log(listCourse)

// const sports = [
//     {
//         name: 'Bóng rổ',
//         like: 6
//     },
//     {
//         name: 'Bơi lội',
//         like: 5
//     },
//     {
//         name: 'Bóng đá',
//         like: 10
//     },
// ]

// function getMostFavoriteSport (array){
//     var most = array.filter(function (sp){
//         return sp.like > 5
//     })
//     return most

// }


// // Kỳ vọng
// console.log(getMostFavoriteSport(sports)) 
// // Output: [{ name: 'Bóng rổ, like: 6 }, { name: 'Bóng đá, like: 10 }]

// // //Cach su dung map
// var courses = [
//     {
//         id:1,
//         name: 'JVS',
//         coin: 250
//     },
//     {
//         id:2,
//         name: 'PHP',
//         coin: 300
//     },
//     {
//         id:3,
//         name: 'C',
//         coin: 140
//     },  
//     {
//         id:4,
//         name: 'Python',
//         coin: 0
//     },
//     {
//         id:5,
//         name: 'Ruby',
//         coin: 100
//     },
//     {
//         id:6,
//         name: 'Ruby',
//         coin: 12
//     },
// ]

// function courseHandler(course) {
//     // console.log(course)
//     return{
//         id: course.id,
//         name: `Khoa hoc: ${course.name}`,
//         coin: course.coin,
//         coinText: `Gia: ${course.coin}`,
//     }
// }
// var newCourse = courses.map(courseHandler)
// console.log(newCourse)

// //Cach su dung reduce
// var courses = [
//     {
//         id:1,
//         name: 'JVS',
//         coin: 250
//     },
//     {
//         id:2,
//         name: 'PHP',
//         coin: 300
//     },
//     {
//         id:3,
//         name: 'C',
//         coin: 140
//     },  
//     {
//         id:4,
//         name: 'Python',
//         coin: 0
//     },
//     {
//         id:5,
//         name: 'Ruby',
//         coin: 100
//     },
//     {
//         id:6,
//         name: 'Ruby',
//         coin: 12
//     },
// ]
// var i = 0
// function coinHandeler(accumulator, currentValue, currentIndex, originArray){
//     i++;
//     var total = accumulator + currentValue.coin
//     console.table({
//         'Luot chay: ':i,
//         'Bien luu tru': accumulator,
//         'Gia khoa hoc': currentValue.coin,
//         'Tich tru duoc': total

//     })
//     return total
// }
// var totalCoin = courses.reduce(coinHandeler, 0);

// console.log(totalCoin)


// var typeSports = [
//     {
//         name: 'Bơi lội',
//         gold: 11
//     },
//     {
//         name: 'Boxing',
//         gold: 3
//     },
//     {
//         name: 'Đạp xe',
//         gold: 4
//     },
//     {
//         name: 'Đấu kiếm',
//         gold: 5
//     },
// ]

// function getTotalGold(typeSports) {
//     var totalGold = typeSports.reduce(function(start, sport) {
//     return start + sport.gold;
//     }, 0);
//     return totalGold;
// }
// console.log(getTotalGold(typeSports)) // Output: 23

// //Co the khong can truyen init value neu da co cung kieu du lieu mong muon
// var numbers = [100, 200, 220, 423, 123];
// var totalNum = numbers.reduce(function(total, number){
//     return total + number
// })
// console.log(totalNum)

// //Flat - "làm phẳng" mảng
// var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];
// var flatArray = depthArray.reduce(function(flatOutput, item){
//     return flatOutput.concat(item)
// }, []);
// console.log(flatArray)

// //Lay ra cac khoa hoc dua vao 1 mang moi
// var topics = [
//     {
//         topic: 'Front-end',
//         course: [
//             {
//                 id: 1,
//                 title: 'Html,Css'
//             },
//             {
//                 id: 2,
//                 title: 'JVS'
//             },
//         ]
//     },
//     {
//         topic: 'Back-end',
//         course: [
//             {
//                 id: 1,
//                 title: 'Php'
//             },
//             {
//                 id: 2,
//                 title: 'NodeJS'
//             },
//         ]
//     }
// ]

// var newCourse = topics.reduce(function(course,topic){
//     return course.concat(topic.course)
// },[])
// console.log(newCourse)

// var watchList = [
//     {
//         "Title": "Inception",
//         "Year": "2010",
//         "Rated": "PG-13",
//         "Released": "16 Jul 2010",
//         "Runtime": "148 min",
//         "Genre": "Action, Adventure, Crime",
//         "Director": "Christopher Nolan",
//         "Writer": "Christopher Nolan",
//         "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
//         "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
//         "Language": "English, Japanese, French",
//         "Country": "USA, UK",
//         "imdbRating": "8.8",
//         "imdbVotes": "1,446,708",
//         "imdbID": "tt1375666",
//         "Type": "movie",
//     },
//     {
//         "Title": "Interstellar",
//         "Year": "2014",
//         "Rated": "PG-13",
//         "Released": "07 Nov 2014",
//         "Runtime": "169 min",
//         "Genre": "Adventure, Drama, Sci-Fi",
//         "Director": "Christopher Nolan",
//         "Writer": "Jonathan Nolan, Christopher Nolan",
//         "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
//         "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//         "Language": "English",
//         "Country": "USA, UK",
//         "imdbRating": "8.6",
//         "imdbVotes": "910,366",
//         "imdbID": "tt0816692",
//         "Type": "movie",
//     },
//     {
//         "Title": "The Dark Knight",
//         "Year": "2008",
//         "Rated": "PG-13",
//         "Released": "18 Jul 2008",
//         "Runtime": "152 min",
//         "Genre": "Action, Adventure, Crime",
//         "Director": "Christopher Nolan",
//         "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
//         "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
//         "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
//         "Language": "English, Mandarin",
//         "Country": "USA, UK",
//         "imdbRating": "9.0",
//         "imdbVotes": "1,652,832",
//         "imdbID": "tt0468569",
//         "Type": "movie",
//     },
//     {
//         "Title": "Batman Begins",
//         "Year": "2005",
//         "Rated": "PG-13",
//         "Released": "15 Jun 2005",
//         "Runtime": "140 min",
//         "Genre": "Action, Adventure",
//         "Director": "Christopher Nolan",
//         "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
//         "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
//         "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
//         "Language": "English, Urdu, Mandarin",
//         "Country": "USA, UK",
//         "imdbRating": "8.3",
//         "imdbVotes": "972,584",
//         "imdbID": "tt0372784",
//         "Type": "movie",
//     },
//     {
//         "Title": "Avatar",
//         "Year": "2009",
//         "Rated": "PG-13",
//         "Released": "18 Dec 2009",
//         "Runtime": "162 min",
//         "Genre": "Action, Adventure, Fantasy",
//         "Director": "James Cameron",
//         "Writer": "James Cameron",
//         "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
//         "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
//         "Language": "English, Spanish",
//         "Country": "USA, UK",
//         "imdbRating": "7.9",
//         "imdbVotes": "876,575",
//         "imdbID": "tt0499549",
//         "Type": "movie",
//     }
// ];

// function calculateRating(array) {
//     var listFilm = watchList.filter(function (list) {
//         return list.Director === "Christopher Nolan"
//     });

//     var totalRating = listFilm.reduce(function (start, rate) {
//         return start + Number(rate.imdbRating);
//     }, 0);
//     return totalRating / (listFilm.length);
// }
// console.log(calculateRating(watchList)); // Output: 8.675

// Expected results:
// var arr = [
//     ['name', 'Sơn Đặng'],
//     ['age', 18],
// ];

// function arrToObj (arr){
//     var info = arr.reduce(function(inf,to){
//         return inf.concat(to)
//     },[])
//     var ob1 = info[0]
//     var ob3 = info[2]
//     var ob = {
//         [ob1]: info[1] ,
//         [ob3]: info[3]
//     }
//     return ob
    
// }

// console.log(arrToObj(arr)); // { name: 'Sơn Đặng', age: 18 }

//includes method
//kiem tra xem chuoi co tu nao hay khong
var title = 'Mai Tran Huy';
console.log(title.includes('a'))

var course = ['JVS', 'PHP', 'C']
console.log(course.includes('JVS'))



















