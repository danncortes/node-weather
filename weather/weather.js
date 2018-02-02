const request = require('request');

const getWeather = (lat, lng, callback)=>{
    request({
        url: `https://api.darksky.net/forecast/f3ea433a932a41e7c61344cb25c9afaa/${lat},${lng}`,
        json: true
    }, (err, resp, body)=>{
        if(err){
            callback('Unable to connect to the server');
        }else if(resp.statusCode === 400){
            callback('Unable to fetch weather');
        }else if(resp.statusCode === 200){
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature:body.currently.apparentTemperature
            });
        }
    });
};

module.exports.getWeather = getWeather;