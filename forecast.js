const request = require('request')
const personal = require('./environments/developer')
const log = console.log
const argv = require('./argv')

const forecast = ({latitude, longitude, place_name}, callback) => {
    const units = argv.units ? argv.units : 'si'
    const lang = argv.lang ? argv.lang : 'en'
    const access_token = personal.dark_sky_key
    const url = `https://api.darksky.net/forecast/${access_token}/${latitude},${longitude}?lang=${lang}&units=${units}`
    request({url, json: true}, (error, response) => {
        if (error) {
            log('Unable to connect to weather forecast service!')
        }else{
            log(place_name)
            callback(response.body)
        }
    })
}

module.exports = forecast