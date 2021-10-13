const Tarea = require('./tarea')

class Tareas{

    _listado = {  };

    get listadoArr() {

        const listado = [];
        //recorre el objeto y devuelve un arreglo con un listado de todas las llaves
        Object.keys(this._listado).forEach(key => {
            const tarea = this._listado[ key ];
            //teniendo la llave pusheamos la tarea correspondiente a esa llave al arreglo
            listado.push( tarea );
        });

        return listado;

    }

    constructor (){
        this._listado = {};
    }


    crearTarea( desc = '' ) {

        const tarea = new Tarea(desc);
        
        this._listado[tarea.id] = tarea;

    }


}

module.exports = Tareas;