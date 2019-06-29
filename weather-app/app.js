const geoLocation = require('./utils/geoLocation');
const forecast = require('./utils/forecast');

const address = 'Boston' + '%20' + 'usa';

// ES6 modification: apply object destructuring on data object
geoLocation(address, (error, { location, longitude, latitude }) => {
    if (error) {
        console.log('Error', error);
    }
    else {
        forecast(latitude, longitude, (error, { temp, rain, weather }) => {
            if (error) {
                console.log('Error', error);
            }
            else {
                console.log('Location: ', location);
                console.log('Temp: ', temp);
                console.log('Chance of Rain: ', rain);
                console.log('Weather Forecast: ', weather);
            }
        })
    }
})
