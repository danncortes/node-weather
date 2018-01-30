const yargs = require('yargs');
const geocode = require('./geocode/geocode');


const argv = yargs.options({
    a:{
        demand:true,
        alias: 'address',
        describe: 'Address to fetch wheater for',
        string: true
    }
});

geocode.geocodeAdress(argv.address, (errorMessage, results)=>{
    if(errorMessage){
        console.log(errorMessage);
    }else{
        console.log(JSON.stringify(results, undefined, 2));
    }
});
