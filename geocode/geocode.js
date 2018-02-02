const request = require('request');

module.exports.geocodeAdress = (address, callback) =>{

    const encodedAddress = encodeURIComponent(address);

    request({
        url:`http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
        json:true
    }, (error, response, body) => {
        if(error){
            callback('Unable to connecto to google server');
        }else if(body.status === 'ZERO_RESULTS'){
            callback('Unable to fin that address')
        }else if(body.status === 'OK'){
            callback(undefined, {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            });
        }
    });
};