const argv = require('yargs')
                .option('b',{
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'base para multiplicar'
                })
                .check((argv,options)=>{
                    if(isNaN(argv.b)){
                        throw "La base tiene que ser un numero"
                    }
                    return true
                })
                .option('l',{
                    alias:'listar',
                    type: 'boolean',
                    default: false,
                    describe: 'muestra o no la tabla'
                })
                .option('h',{
                    alias: 'hasta',
                    type: 'number',
                    describe: 'hasta que numero la tabla',
                    demandOption: true
                })
                .argv;

module.exports = argv