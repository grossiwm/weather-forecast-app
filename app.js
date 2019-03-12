const geolocation = require('./geolocation')
const forecast = require('./forecast')
const log = console.log
const argv = require('./argv')

geolocation(argv.place, (error, data) => {
    if (error) {
        log(error)
    }else{
        forecast(data, (response) => {
            log(response.daily.summary)
        })
    }
})