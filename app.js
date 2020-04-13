const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

const getInfo = async(direccion) => {

    //salida
    //el clima de xxxx es de xxx temperatura
    // no se pudo determinar el clima de xxxx

    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return `La temperatura de ${coords.direccion} es de ${temp}°.`;
    } catch (e) {
        return `no se pudo determinar el clima de ${direccion}`;
    }

};

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);