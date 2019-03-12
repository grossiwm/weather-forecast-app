const request = require('request')
const personal = require('./environments/developer')

const forecast = ({latitude, longitude, place_name}, callback) => {
    const access_token = personal.dark_sky_key
    const url = 'https://api.darksky.net/forecast/'+ access_token + '/' + latitude + ', ' + longitude
    request({url, json: true}, (error, response) => {
        console.log(place_name)
        callback(response.body)
    })
}

// forecast(data, (response) => {
//     console.log(response)
// })

module.exports = forecast