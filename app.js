require('colors');

const { inquirerMenu, pausa, leerImput } = require('./helpers/inquirer');
const Tareas = require('./models/tareas');

console.clear();


const main = async() => {

    let opt = '';
    const tareas = new Tareas();

    do {
        opt = await inquirerMenu();  
        // console.log(opt);

        switch (opt) {
            case '1':
                //crear opcion
                const desc = await leerImput('Descripcion:');
                tareas.crearTarea(desc);
            break;
        
            case '2':
                console.log(tareas.listadoArr);
            break;
        }

         await pausa();

    } while ( opt !== '0' );
   
}

main();