//Vong lap
//1. for - lap voi dieu kien dung
for (var i = 1; i <= 10; i++)
    console.log(i)

//2. for/in - lap qua key cua doi tuong
var languages = [
    'JVS',
    'PHP',
    'C',
];

var myInfo = {
    name: 'Mai Tran Huy',
    age: 20,
    address: 'Thanh Hoa',   
};

var fullName = 'MaiTranHuy'

for(var key in myInfo){
    console.log(key)//lay ra ten cua key
    console.log(myInfo[key])//lay ra gia tri cua key
}

for(var key in languages){
    console.log(key)//lay ra ten cua key
    console.log(languages[key])//lay ra gia tri cua key
}

for(var key in fullName){
    console.log(key)//lay ra ten cua key
    console.log(fullName[key])//lay ra gia tri cua key
}
function run(object) {
    var arr = [];
    var flag = 0;
    for(var key in object){
    arr[flag]='Thuộc tính ' + key + " có giá trị " + object[key];
    flag++;
}
return arr
}

// Expected results:
console.log(run({ name: 'Nguyen Van A', age: 16 }));
// Output:
// [
//     "Thuộc tính name có giá trị Nguyen Van A",
//     "Thuộc tính age có giá trị 16"
// ]

//3. for/of - lap qua value cua doi tuong
var languages = [
    'JVS',
    'PHP',
    'C',
];

for(var value of languages){
    console.log(value)
}

var fullName = 'MaiTranHuy'
for(var value of fullName){
    console.log(value)
}

var myInfo = {
    name: 'Mai Tran Huy',
    age: 20,
    address: 'Thanh Hoa',   
};
for(var value of Object.values(myInfo)){
    console.log(value)
}

//4. while - lap khi dieu kien dung
var i = 1;
while (i <= 10){
    console.log(i);
    i++;
}

var languages = [
    'JVS',
    'PHP',
    'C',
];
var j=0
while(j < languages.length){
    console.log(languages[j])
    j++
}

//5. do/while - lap it nhat 1 lan, sau do lap khi dieu kien dung
var i = 0;
var isSuccess = false;
do {
    i++
    console.log('Nap the lan'+i)
    if(false)
        isSuccess = true;
    
}while(!isSuccess && i < 3)

//break  và continue in loop
for (var i = 1; i <= 10; i++){
    console.log(i)
    if(i >= 5)
    break;
}

for (var i = 0; i < 10; i++){
    if(i%2!=0){
    continue
}
    console.log(i)
}

//2 vong lap long nhau
var myArray = [
    [1,2],
    [3,4],
    [5,6],
]
for(var i = 0; i < myArray.length; i++){
    for(j = 0 ; j < myArray[i].length; j++)
        console.log(myArray[i][j])
}

//Cac loai loop khac
for(var i = 100; i>0; i--)
console.log(i)

for(var i = 0; i<100; i+=5)
console.log(i)

//De quy
var array = ['a','b','c','a','b','c']
console.log(new Set(array))

function countDown(num){
    if(num > 0 ){
        console.log(num)
        return countDown(num-1)
    }
    return num
}
countDown(5)

