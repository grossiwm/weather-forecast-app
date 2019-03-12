const geolocation = require('./geolocation')
const forecast = require('./forecast')
const log = console.log

geolocation("Volta Redonda", (error, data) => {
    if (error) {
        log(error)
    }else{
        forecast(data, (response) => {
            log(response.daily.summary)
        })
    }
})