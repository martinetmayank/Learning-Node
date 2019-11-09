const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/60a53dcbd37ae5c980e589d32b6aeeab/'+ latitude + ',' + longitude +'?units=si'

    request({url: url, json:true}, (error, response) => {
        if (error) {
            callback('Unable to connect to weather services!', undefined)
        }
        else if (response.body.error) {
            callback('Unable to find location', undefined)
        }
        else {
            callback(undefined, response.body.daily.data[0].summary + ' Temperature: ' + response.body.currently.temperature + '°C')
        }
    })
}

module.exports = forecast