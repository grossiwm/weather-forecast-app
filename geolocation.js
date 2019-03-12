const request = require('request')
const personal = require('./environments/developer')

const geolocation = (address, callback) => {
    const access_token = personal.map_box_key
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=' + access_token

    request({url, json: true}, (error, response) => {
        if (error) {
            callback('Unable to connect to geolocation services!', undefined)
        }else if(response.body.features.length === 0){
            callback('Unable to find address.', undefined)
        }else{
            callback(undefined, {longitude: response.body.features[0].center[0], latitude: response.body.features[0].center[1], place_name: response.body.features[0].place_name})
        }
    })
}

module.exports = geolocation