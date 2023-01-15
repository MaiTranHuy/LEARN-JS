//Object trong JVS
var emailKey = 'email1'
var myInfo = {
    name: 'Mai Tran Huy',
    age: 20,
    address: 'Thanh Hoa',
    [emailKey]: 'asd',
    getName: function(){
        return this.name;
    }
}
//Them key moi
myInfo.email = 'huymt@gmail.com'
//hoac myInfo['email'] = 'huymt@gmail.com'
console.log(myInfo.name)
//hoac console.log(myInfo['name'])
var myKey = 'age'
console.log(myInfo[myKey])
console.log(myInfo)
//Xoa key
delete myInfo.address
console.log(myInfo)

console.log(myInfo.getName())

//Object constructor
function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    
    this.getName = function(){
        return `${this.firstName} ${this.lastName}`
    }
}

var author = new User('Huy','Mai','AVT');
var user = new User('Yuh','Iam','AVT');

author.title = 'Chia se'
user.comment = 'Ok khong'

User.prototype.className = 'Hoc lop A'
User.prototype.getClassName = function(){
    return this.className;
}

console.log(author)
console.log(user)

console.log(author.getName())
console.log(user.getName())

console.log(user.className)
console.log(user.getClassName())