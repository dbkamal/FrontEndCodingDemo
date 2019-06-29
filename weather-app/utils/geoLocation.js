const request = require('request');

const geoLocation = (address, callback) => {
    
    const urlLocation = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + 
    '.json?access_token=pk.eyJ1IjoiZGJrYW1hbCIsImEiOiJjanhiaWJldjEwNjRxNDNzM3hwMm1nY2hzIn0.XfeHIj6oKrQwGFxYhNzWng';

    request({url: urlLocation, json: true}, (error, response) => {
        
        if (error) {
            callback('No data found', undefined);
        }
        else if (response.body.features.length == 0) {
            callback('Unable to find location', undefined);
        }
        else {
            callback(undefined, {
                longitude: response.body.features[0].center[0],
                latitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            });
        }
    })
}

module.exports = geoLocation