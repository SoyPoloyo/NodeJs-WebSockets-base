//Referencias del html
const cone = document.querySelector('#cone');
const descone = document.querySelector('#descone');
const userTxt = document.querySelector('#userTxt');
const btnEnviar = document.querySelector('#btnEnviar');

//nos conectamos al back
const socket = io();

//listener que son observables que escuchan cambios o eventos
// on es para escuchar, hay eventos predeterminados
socket.on('connect', () => {
    console.log('Conectado al servidor');

    descone.style.display = 'none';
    cone.style.display = '';
})

socket.on('disconnect', () => {
    console.log('Desconectado del servidor');

    descone.style.display = '';
    cone.style.display = 'none';
})

socket.on('enviar-mensaje', (recibido) => {
  //  console.log('Desconectado del servidor');
    //recibido desde el server
    console.log(recibido);
})

btnEnviar.addEventListener('click', ()=>{

    const mensaje = userTxt.value;

    const payload = {
        mensaje,
        fecha : new Date()
    }

    //emite emite algo, lo que sea, sera un evento
    socket.emit('enviar-mensaje', payload, (id)=> {
        console.log('se envio correctamente su mensaje, bajo el id:', id);
    })

})
