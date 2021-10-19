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

    cargarTareasFromArray( tareas = [] ){

        tareas.forEach( tarea => {
            this._listado[ tarea.id ] = tarea;
        } );

    }

    crearTarea( desc = '' ) {

        const tarea = new Tarea(desc);
        
        this._listado[tarea.id] = tarea;

    }

    listadCompleto() {

        this.listadoArr.forEach( (tarea, indice) => {
           
            console.log();
            //para que el incice no arranque en 0 le sumamos 1
            const idx = `${indice + 1}`.green;
            //imprimimos el nombre de la tarea desestructurando el arreglo
            const { desc, completadoEn } = tarea;
            
            const estado = ( completadoEn ) //ternario(abrebiacion del if)
                                ?'Completada'.green
                                :'Pendiente'.red;
            console.log(`${idx} ${desc} :: ${estado}`);                    

        })

    }


}

module.exports = Tareas;