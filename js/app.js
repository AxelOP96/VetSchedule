const d = document;
const pacienteInput = d.querySelector('#paciente');
const propietarioInput = d.querySelector('#propietario')
const emailInput = d.querySelector('#email')
const fechaInput = d.querySelector('#fecha')
const sintomasInput = d.querySelector('#sintomas')

const formulario = d.querySelector('#formulario-cita')

const contenedorCitas = d.querySelector('#citas');

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
class AdminCitas {
    constructor(){
        this.citas = []
    }
    agregar(cita) {
        this.citas = [...this.citas, cita]
        this.mostrar()
    }

    mostrar(){
        while(contenedorCitas.firstChild) {
            contenedorCitas.removeChild(contenedorCitas.firstChild)
        }

        // this.citas.forEach( cita => {
        //     const divCita = d.createElement('div')
        //     divCita.classList.add('mx-5', 'my-10', 'bg-white', 'shadow-md', 'px-5', 'py-10', 'rounded-xl')

        //     const paciente = d.createElement('p')
        //     paciente.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
        //     paciente.innerHTML = `<span class="font-bold uppercase">Paciente: </span> ${cita.paciente}`

        //     divCita.appendChild(paciente)
        //     contenedorCitas.appendChild(divCita)
        // })
        this.citas.forEach(cita => {
    const divCita = document.createElement('div');
    divCita.classList.add('mx-5', 'my-10', 'bg-white', 'shadow-md', 'px-5', 'py-10' ,'rounded-xl', 'p-3');

    const paciente = document.createElement('p');
    paciente.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
    paciente.innerHTML = `<span class="font-bold uppercase">Paciente: </span> ${cita.paciente}`;

    const propietario = document.createElement('p');
    propietario.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
    propietario.innerHTML = `<span class="font-bold uppercase">Propietario: </span> ${cita.propietario}`;

    const email = document.createElement('p');
    email.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
    email.innerHTML = `<span class="font-bold uppercase">E-mail: </span> ${cita.email}`;

    const fecha = document.createElement('p');
    fecha.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
    fecha.innerHTML = `<span class="font-bold uppercase">Fecha: </span> ${cita.fecha}`;

    const sintomas = document.createElement('p');
    sintomas.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
    sintomas.innerHTML = `<span class="font-bold uppercase">Síntomas: </span> ${cita.sintomas}`;

    // Agregar al HTML
    divCita.appendChild(paciente);
    divCita.appendChild(propietario);
    divCita.appendChild(email);
    divCita.appendChild(fecha);
    divCita.appendChild(sintomas);
    contenedorCitas.appendChild(divCita);
});    
    }
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
        
    citas.agregar(citaObj)
    formulario.reset();
    resetObjetoCita();

}

function resetObjetoCita(){

    citaObj.paciente = '';
    citaObj.propietario = '';
    citaObj.email = '';
    citaObj.fecha= '';
    citaObj.sintomas = '';
    
}



