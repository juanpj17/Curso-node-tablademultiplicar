const { describe } = require('yargs');

const argv = require('yargs')
                       .option('b', {
                            alias: 'base',
                            type: 'number',
                            demandOption: true,
                            describe: 'Es la base de la tabla de multiplicar'
                       })
                       .option('l',{
                            alias: 'listar',
                            type: 'boolean',
                            default: false,
                            describe: 'Muestra la tabla si asi se desea '
                        })
                        .option('h', {
                            alias: 'Hasta',
                            type: 'number',
                            default: 10,
                            describe: 'El valor hasta donde se llegara'
                        })
                       .check((argv, options) => {
                           if(isNaN( argv.b ) ){
                               throw 'La base tiene que ser un numero';
                           }
                           return true;
                       })
                       .argv;  

module.exports = argv;