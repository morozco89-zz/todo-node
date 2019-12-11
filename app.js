const args = require('./config/yargs').argv
const colors = require('colors');
const porHacer = require('./por-hacer/por-hacer')
const comando = args._[0]

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(args.descripcion)
        console.log(tarea)
        break;

    case 'listar':
        let listado = porHacer.getListado()

        for (const tarea of listado) {
            console.log("======== Por hacer =======".green);
            console.log(tarea.descripcion);
            console.log(`Estado: ${tarea.completado}`);
            console.log("==========================".green);
        }

        break;

    case 'actualizar':
        let actualizado = porHacer.actualizar(args.descripcion, args.completado)
        console.log(actualizado);
        break;

    case 'borrar':
        let borrado = porHacer.borrar(args.descripcion)
        console.log("Tarea borrada:", borrado);
        break;

    default:
        break;
}