import { pacienteInput, propietarioInput, emailInput, fechaInput, sintomasInput, formulario} from './selectores.js'
import { submitCita } from './funciones.js';
import { citaObj } from './variables.js';
const d = document
pacienteInput.addEventListener('change', (e) =>{
    citaObj[e.target.name] = e.target.value;
})
propietarioInput.addEventListener('change', (e) =>{
    citaObj[e.target.name] = e.target.value;
})
emailInput.addEventListener('change', (e) =>{
    citaObj[e.target.name] = e.target.value;
})
fechaInput.addEventListener('change', (e) =>{
    citaObj[e.target.name] = e.target.value;
})
sintomasInput.addEventListener('change', (e) =>{
    citaObj[e.target.name] = e.target.value;
})
formulario.addEventListener('submit', submitCita);

