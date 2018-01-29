const request = require('request');

request({
    url:'http://maps.googleapis.com/maps/api/geocode/json?address=av%20francisco%20de%20miranda',
    json:true
}, (error, response, body) => {
    console.log(body);
});