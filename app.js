

const argv = require('./config/yargs');
const { crearArchivoTabla } = require('./helpers/multiplicar');


crearArchivoTabla(argv.base,argv.l,argv.h)
    .then((nombreArchivo) => console.log(nombreArchivo))




