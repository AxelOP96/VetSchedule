import Notificacion from "./classes/Notificacion.js";
import AdminCitas from "./classes/AdminCitas.js";
import { citaObj, editando } from "./variables.js";
import { formulario , formularioInput, pacienteInput, propietarioInput, emailInput, fechaInput, sintomasInput} from "./selectores.js";
const citas = new AdminCitas();
let DB;
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
export function eventListeners(){
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
}

export function crearDB(){
    const crearDB = window.indexedDB.open('citas', 1);
    crearDB.onerror = function(){
        console.log('Hubo un error');
    }

    crearDB.onsuccess = function() {
        console.log('BD creada')
        DB = crearDB.result;
    }

    crearDB.onupgradeneeded = function(e) {
        const db = e.target.result;

        const objectStore = db.createObjectStore('citas', {
            keyPath: 'id',
            autoIncrement: true
        });

        objectStore.createIndex('paciente', 'paciente', {unique: false});
        objectStore.createIndex('propietario', 'propietario', {unique: false});
        objectStore.createIndex('telefono', 'telefono', {unique: false});
        objectStore.createIndex('fecha', 'fecha', {unique: false});
        objectStore.createIndex('sintomas', 'sintomas', {unique: false});
        objectStore.createIndex('id', 'id', {unique: true});

        console.log('DB creada y lista...')
    }
}