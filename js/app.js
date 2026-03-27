const d = document;
const pacienteInput = d.querySelector('#paciente');
const propietarioInput = d.querySelector('#propietario')
const emailInput = d.querySelector('#email')
const fechaInput = d.querySelector('#fecha')
const sintomasInput = d.querySelector('#sintomas')

const formulario = d.querySelector('#formulario-cita')

const citaObj = {
    paciente: '',
    propietario : '',
    email: '',
    fecha: '',
    sintomas: ''
}

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

function submitCita(e) {
    e.preventDefault();
    const  {paciente, propietario, email, fecha, sintomas} = citaObj;
    if(Object.values(citaObj).some(valor => valor.trim() === '')){
        return
    }
        

}