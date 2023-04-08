
//Call                                                     

const teacher = {
    firstName: 'Mai Tran',
    lastName : 'Huy',
}

const student = {
    firstName: 'Mai Tran',
    lastName : 'Huy3',
    getFullName() {       
        console.log(`${this.firstName} ${this.lastName}`); 
    }
}

    student.getFullName.call(teacher)


    function Animal(name, weight){
        this.name = name;
        this.weight = weight;
    }

    function Horse(name,weight,leg){
        Animal.call(this, name, weight)
        this.leg = leg
    }

    const huy = new Horse('huy',60,4)

    console.log(huy);





