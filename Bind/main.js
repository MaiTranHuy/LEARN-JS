
// //BIND                                                     
// this.firstName = 'Mai Tran'
// this.lastName = 'Huy1'

// const teacher = {
//     firstName: 'Mai Tran',
//     lastName : 'Huy2',
//     getFullName() {
//         return `${this.firstName} ${this.lastName}`
//     }
// }

// const student = {
//     firstName: 'Mai Tran',
//     lastName : 'Huy3'
// }

// const employee = {
//     firstName: 'Mai Tran',
//     lastName : 'Huy4',
//     getFullName(first, last) {
//         console.log(first, last);
//         return `${this.firstName} ${this.lastName}`
//     }
// }

// console.log(teacher.getFullName());

// const getName = teacher.getFullName
// console.log(getName());

// const getName1 = teacher.getFullName.bind(student)
// console.log(getName1());

// const getName2 = employee.getFullName.bind(employee, 'ok', 'ok1')
// console.log(getName2());





const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const app = (() => {
    const cars = ['BMW']

    const root = $('#root')
    const input = $('#input')
    const submit = $('#submit')

    return {
        add(car) {
            cars.push(car)
        },
        delete(index){
            cars.splice(index,1)
        },
        render() {
            const html = cars.map((car, index) => `
            <li>
            ${car}
            <span class="delete" data-index="${index}">&times</span>
            </li>
            `).join('')

            root.innerHTML = html


        },
        handleDelete(event){
            const deleteBtn = event.target.closest('.delete')
            if(deleteBtn) {
                const index = deleteBtn.dataset.index
                this.delete(index)
                this.render()
            }
            
        },

        init() {
            //Handle DOM events
            submit.onclick = () => {
                this.add(input.value)  
                this.render()
                input.value = null
                input.focus()
            }
            root.onclick = this.handleDelete.bind(this)

            this.render()
        }
    }
})()


app.init()