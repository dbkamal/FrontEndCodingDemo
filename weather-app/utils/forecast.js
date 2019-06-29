const request = require('request');

const forecast = (latitude, longitude, callback) => {
    
    const urlWeather = 'https://api.darksky.net/forecast/f77884dfae9f2d3fe90037235942c9b6/' + latitude + ',' + longitude;
    
    request({url: urlWeather, json: true}, (error, response) => {

        if (error) {
            callback('No data found', undefined);
        }
        else if (response.body.error) {
            callback('Unable to find weather', undefined);
        }
        else {
            callback(undefined, {
                temp: response.body.currently['temperature'],
                rain: response.body.currently['precipProbability'],
                weather: response.body.daily.data[0].summary
            });
        }
    })
}

module.exports = forecast