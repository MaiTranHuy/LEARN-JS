// function createLogger(namespace){
//     function logger(message){
//         console.log(`[${namespace}] ${message}`);
//     }
//     return logger
// }


// const infoLogger = createLogger('okok')

// infoLogger('123')
// infoLogger('1234')
// infoLogger('12356')


// const infoLogger2 = createLogger('oko111k')
// infoLogger2('12324')
// infoLogger2('123245')
// infoLogger2('123246')



function createStorage(key) {
    const store = JSON.parse(localStorage.getItem(key)) ?? {}

    const save = () =>{
        localStorage.setItem(key,JSON.stringify(store))
    }

    const storage = {
        get(key){
            return store[key]
        },
        set(key,value){
            store[key] = value
            save()
        },
        remove(key){
            delete store[key]
            save()
        }
    }

    return storage
}

const profileSetting = createStorage('profile-set')

console.log(profileSetting.get('fullname'));
profileSetting.set('fullname', 'Mai Tran Huy')