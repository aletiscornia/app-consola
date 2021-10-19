const fs = require('fs');
const archivo = './db/data.json' 

//guardamos la data (la tarea) que viene como un arreglo
const guardarDB = ( data ) => {
  //antes de guardar la tarea la convertimos en un json string
    fs.writeFileSync( archivo, JSON.stringify(data));

}

const leerDB = () => {

    if(!fs.existsSync(archivo)){
        return null;
    }

    const info = fs.readFileSync( archivo, {encoding: 'utf-8'} );
    //el parse hace lo opuesto json.strungify, es decir lo vuelve un arreglo
    const data = JSON.parse( info );
    console.log( data );

    return data;
}

module.exports = {
    guardarDB,
    leerDB
}

