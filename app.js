const geoCode = require('./utils/geoCode.js')
const forecast = require('./utils/forecast')

location = process.argv[2]

if (!location) {
    console.log('No Location provided')
}
else {
    geoCode(location, (error, data) => {

        if (error) {
            return console.log('Error: ', error)
        }

        forecast(data.latitude, data.longitude, (error, forcastData) => {

            if (error) {
                console.log('Error: ', error)
            }
            console.log('Location: ' + data.location)
            console.log(forcastData)
        })

    })


}

