const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/60a53dcbd37ae5c980e589d32b6aeeab/' + latitude + ',' + longitude + '?units=si'

    // Response is destructured into { body }.
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather services!', undefined)
        }
        else if (body.error) {
            callback('Unable to find location', undefined)
        }
        else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + '°C out. There is a ' + body.currently.precipProbability + ' % chance of rain.')
        }
    })
}

module.exports = forecast