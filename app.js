console.clear()

//file system es una variable que tiene un archivo

const { crearArchivo } = require("./helpers/Multiplicar")

//Muestra lo que informacion importante por consola
// console.log(process.argv)

const argv = require('./config/yargs')

console.log(argv)

crearArchivo( argv.b, argv.l, argv.h)
   .then(nombreArchivo => console.log(nombreArchivo), 'creado')
   .catch(err => console.log(err))

// const [ , , arg3 ] = process.argv
// const [, base = 1 ] = arg3.split('=')
 