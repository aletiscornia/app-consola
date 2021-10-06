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
}