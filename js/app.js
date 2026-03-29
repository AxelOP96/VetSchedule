import { pacienteInput, propietarioInput, emailInput, fechaInput, sintomasInput, formulario} from './selectores.js'
import { citaObj } from './variables.js';
import { eventListeners, crearDB } from './funciones.js';
const d = document

window.onload = () =>{
    eventListeners();
    crearDB();
}


