
// //Call                                                     

// const teacher ={
//    firstName: 'Mai Tran',
//    lastName : 'Huy'
// }

//     function getFullName(greeting, message) {       
//         return `${greeting} ${message} ${this.firstName} ${this.lastName}`; 
//     }

//     let res = getFullName.apply(teacher, ['heh', 'hjehehfdsafasdf'])
//     console.log(res);

//     res = getFullName.call(teacher, 'heh', 'hjehehfdsafasdf')
//     console.log(res);




const teacher = {
    firstName: 'Mai Tran',
    lastName: 'Huy',
    isOnline: false,
    goOnline(){
        this.isOnline = true;
        console.log(`${this.firstName} ${this.lastName} is Online` );
    },
    goOffline(){
        this.isOnline = true;
        console.log(`${this.firstName} ${this.lastName} is Offline` );
    }
}

const me = {
    firstName: 'Mai1 Tran1',
    lastName: 'Huy1',
    isOnline: false,
}

console.log('Teacher: ',teacher.isOnline);
teacher.goOnline()
console.log('Teacher: ',teacher.isOnline);

console.log('SEEEE');

console.log('Student: ',me.isOnline);
teacher.goOnline.apply(me)
console.log('Student: ',me.isOnline);

///////////////////////////////////////////
function Animal(name, weight){
    this.name = name;
    this.weight = weight;
}

function Parrot(){
    Animal.apply(this, arguments)
    this.speak = function(){
        console.log('Nha co khach');
    }
}

const huy = new Parrot('huy',60)

huy.speak();


