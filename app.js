require('colors');

const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
const { inquirerMenu, pausa, leerImput } = require('./helpers/inquirer');
const Tareas = require('./models/tareas');

console.clear();


const main = async() => {

    let opt = '';
    const tareas = new Tareas();

    const tareasDB = leerDB();

    if( tareasDB ) { //cargar tareas
       
        tareas.cargarTareasFromArray( tareasDB );

    }


    do {
        // Imprimir el menu
        opt = await inquirerMenu();  
        
        switch (opt) {
            case '1':
                //crear opcion
                const desc = await leerImput('Descripcion:');
                tareas.crearTarea(desc);
            break;
        
            case '2':
                tareas.listadCompleto();               
            break;
        }

        guardarDB( tareas.listadoArr );



         await pausa();

    } while ( opt !== '0' );
   
}

main();