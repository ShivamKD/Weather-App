const request = require('postman-request')
const geoCode = require('./utils/geoCode.js')

// const url = 'http://api.weatherstack.com/current?access_key=3a9788581a56a26b5e6307b97d067567&query=37.8267,-122.4233'


// request({url: url, json: true}, (error, response) => {
//     current = response.body.current
//     console.log(current)
//     console.log('It is currently', current.temperature, 'degrees out. It feels line', current.feelslike,' degrees out.')
// })


// const geoCodingURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic2hpdmFta2QiLCJhIjoiY2t1MWlybDYyMGF5ZTJwcWs1ZTF4ZGg0YSJ9.qXQB5DQqFjOxyxkhBaTaqA&limit=1'

// request({url: geoCodingURL, json: true}, (error, response) => {
//     const latitude = response.body.features[0].center[1]
//     const longitude = response.body.features[0].center[0]
//     const place = response.body.features[0].place_name
//     console.log('Place: ', place, "\nLatitude: ",latitude, "\nLongitude: ", longitude)
// })



geoCode('Liluah', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})