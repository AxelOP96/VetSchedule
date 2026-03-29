import Notificacion from "./classes/Notificacion.js";
import AdminCitas from "./classes/AdminCitas.js";
import { pacienteInput, propietarioInput, emailInput, fechaInput, sintomasInput, formulario, formularioInput, contenedorCitas} from './selectores.js'

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

let editando = false;

const citaObj = {
    id: generarId(),
    paciente: '',
    propietario : '',
    email: '',
    fecha: '',
    sintomas: ''
}





const citas = new AdminCitas();
function submitCita(e) {
    e.preventDefault();
    const  {paciente, propietario, email, fecha, sintomas} = citaObj;
    if(Object.values(citaObj).some(valor => valor.trim() === '')){
        const notification = new Notificacion({
            texto: 'Todos los campos son obligatorios',
            tipo: 'error'
        })
    
        return
    }
        
    if(editando){
        citas.editar({...citaObj})
        new Notificacion({
        texto: 'Guardado correctamente',
        tipo: 'exito'
    })
    }else{
        citas.agregar({...citaObj})
        new Notificacion({
        texto: ' El paciente se ha registrado',
        tipo: 'exito'
    })
    }
    
    formulario.reset();
    resetObjetoCita();
    formularioInput.value = 'Registrar Paciente'
    editando = false;
}

function resetObjetoCita(){

    // citaObj.paciente = '';
    // citaObj.propietario = '';
    // citaObj.email = '';
    // citaObj.fecha= '';
    // citaObj.sintomas = '';
    Object.assign(citaObj,{
        id: generarId(),
        paciente: '',
        propietario: '',
        email: '',
        fecha: '',
        sintomas: ''
    })
    
}

function generarId(){
    return Math.random().toString(36).substring(2) + Date.now();
}

function cargarEdicion(cita) {
    Object.assign(citaObj, cita)

    pacienteInput.value = cita.paciente
    propietarioInput.value = cita.propietario
    emailInput.value = cita.email
    fechaInput.value = cita.fecha
    sintomasInput.value = cita.sintomas

    editando = true;

    formularioInput.value = 'Guardar Cambios'
}

