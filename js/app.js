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
        const notification = new Notificacion({
            texto: 'Todos los campos son obligatorios',
            tipo: 'error'
        })
    
        return
    }
        

}

class Notificacion {

    constructor({texto, tipo}) {
        this.texto= texto
        this.tipo= tipo

        this.mostrar();
    }
    mostrar(){
        const alerta = d.createElement('div');
        alerta.classList.add('text-center', 'w-full', 'p-3', 'text-white', 'my-5', 'alert', 'uppercase', 'font-bold', 'text-sm');

        const alertaPrevia = d.querySelector('.alert')
        alertaPrevia?.remove();

        this.tipo === 'error' ? alerta.classList.add('bg-red-500') : alerta.classList.add('bg-green-500');

        alerta.textContent = this.texto;

        formulario.parentElement.insertBefore(alerta, formulario)

        setTimeout(() => {
            alerta.remove()
        }, 3000)
    }
}