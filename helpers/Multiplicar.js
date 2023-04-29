/*fs.writefile('archivo donde se almacena la informacion, variable de donde se sacara la data, funcion de retorno)*/

const { error } = require('console');
const { promises } = require('dns');
const colors = require('colors')
    
/*fs.writefileSync('archivo donde se almacena la informacion, variable de donde se sacara la data)*/

const crearArchivo = async(base, listar = false, limite = 10) => {

    try{

        let salida = "";
        const fs = require('fs')

        for(let i = 1; i <= limite; i++){
            salida += `${ base } x ${ i } = ${ base*i }\n` 
        }

        colors.setTheme({
            custom: ['blue', 'underline']
        });

        if(listar){
            console.clear()
            console.log("==================")
            console.log( colors.green('Tabla del:'), base )
            console.log("==================")
        
            console.log( salida.custom)
        }
        
        fs.writeFileSync( `./salida/tabla-${ base }.txt`, salida)
        return (`Tabla-${base}.txt creado`)
    } catch (err) {
        throw err;
    }
}

module.exports = {
    crearArchivo
}

