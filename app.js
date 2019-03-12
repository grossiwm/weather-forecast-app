const geolocation = require('./geolocation')

geolocation("Boston", (error, data) => {
    if (error) {
        console.log('error')
    }else{
        console.log(data)
    }
})