require('colors');

const { inquirerMenu, pausa } = require('./helpers/inquirer');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');

console.clear();


const main = async() => {
    console.log('Hola Mundo');

    let opt = '';
    const tareas = new Tarea();

    do {
        opt = await inquirerMenu();  
        console.log({opt});

         await pausa();

    } while ( opt !== '0' );

<<<<<<< HEAD
     
=======
    
>>>>>>> 5e5aaddc324029f2fbe1dde917dd329f315ba5b3
}

main();