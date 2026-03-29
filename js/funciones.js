import Notificacion from "./classes/Notificacion.js";
import AdminCitas from "./classes/AdminCitas.js";
import { citaObj, editando } from "./variables.js";
import { formulario , formularioInput, pacienteInput, propietarioInput, emailInput, fechaInput, sintomasInput} from "./selectores.js";
const citas = new AdminCitas();
export function submitCita(e) {
    e.preventDefault();
    const  {paciente, propietario, email, fecha, sintomas} = citaObj;
    if(Object.values(citaObj).some(valor => valor.trim() === '')){
        const notification = new Notificacion({
            texto: 'Todos los campos son obligatorios',
            tipo: 'error'
        })
    
        return
    }
        
    if(editando.value){
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
    editando.value = false;
}

export function resetObjetoCita(){

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

export function generarId(){
    return Math.random().toString(36).substring(2) + Date.now();
}

export function cargarEdicion(cita) {
    Object.assign(citaObj, cita)

    pacienteInput.value = cita.paciente
    propietarioInput.value = cita.propietario
    emailInput.value = cita.email
    fechaInput.value = cita.fecha
    sintomasInput.value = cita.sintomas

    editando.value = true;

    formularioInput.value = 'Guardar Cambios'
}

