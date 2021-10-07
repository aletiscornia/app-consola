<<<<<<< HEAD
const inquire = require('inquirer');
require('colors');


const menuOpt = [
    {
       type: 'list',
       name: 'opcion',
       message: 'Que desea hacer?',
       choices: [''] 
    }
]


const inquirerMenu = async () => {

    console.clear();
    console.log('======================'.green);
    console.log('Seleccione una opcion:'.green);
    console.log('======================\n'.green);

    await inquire.prompt([])

}


module.exports = {
    inquirerMenu
=======
const inquirer = require('inquirer');
require ('colors');

const preguntas = [
    {
        type: 'list',
        name: 'opt',
        message: 'Que decea hacer?',
        choices: [
            {
                value: '1',
                name: '1. Crear tarea'
            },
            {
                value: '2',
                name: '2. Listar tareas'
            },
            {
                value: '3',
                name: '3. CListar tareas completadas'
            },
            {
                value: '4',
                name: '4. Listar tareas pendientes'
            },
            {
                value: '5',
                name: '5. Completar tarea(s)'
            },
            {
                value: '6',
                name: '6. Borrar tarea'
            },
            {
                value: '0',
                name: '0. Salir'
            },
        ]
    }
]


const inquirerMenu = async() => {
    
    console.clear();
    console.log('======================'.green);
    console.log('Seleccione una opcion:'.green);
    console.log('======================\n'.green);
    
    const { opt } = await inquirer.prompt(preguntas);
    
    return opt;
    
}


const pausa = async() => {
    
    const question = [{
        type: 'input',
        name: 'enter',
        message: `Precione ${'ENTER'.green} para continuar`,
    }]

    console.log('\n')
    await inquirer.prompt(question);
}

module.exports = {
    inquirerMenu,
    pausa
>>>>>>> 5e5aaddc324029f2fbe1dde917dd329f315ba5b3
}