const request = require('postman-request')
const geoCode = require('./utils/geoCode.js')
const forecast = require('./utils/forecast')

// const url = 'http://api.weatherstack.com/current?access_key=a28e9da31e46355832d190007a71df48&query=37.8267,-122.4233'


// request({url: url, json: true}, (error, response) => {
//     current = response.body.current
//     console.log(current)
//     console.log('It is currently', current.temperature, 'degrees out. It feels line', current.feelslike,' degrees out.')
// })

//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

forecast(-75.7088, 44.1545, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
  })



// geoCode('Liluah', (error, data) => {
//     console.log('Error', error)
//     console.log('Data', data)
// })