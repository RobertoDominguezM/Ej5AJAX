window.onload = () => {
    document.getElementById("materialDeportivo").addEventListener('submit', añadirClientes, false);
}
/**
 * Función para añadir clientes en la tabla
 */

function añadirClientes(event){
    let nuevoCliente = {
        nombre: document.getElementById("nombreCliente").value,
        apellidos: document.getElementById("apellidos").value,
        DNI: document.getElementById("dni").value,
        fechaNac: document.getElementById("fecha").value,
        Sexo: document.getElementById("sexo").value,
        preferencias: document.getElementById("tipoDeporte").value
    }
    event.preventDefault();
    var request = new XMLHttpRequest();
    request.open('POST', 'http://localhost:3000/clientes');
    request.setRequestHeader('Content-type', 'application/json');
    request.send(JSON.stringify(nuevoCliente));
    console.log("me cago en to");
}
/**
 * Cada vez que se introduzca un nuevo cliente, 
 * se enviarán los datos al servidor mediante una petición asíncrona
 */
function realizarPeticionAjax(){
    let request = new XMLHttpRequest();
    request.open('POST', 'http://localhost:3000/clientes', true);
}
/**
 * Cuando se pulse lo que se haga sea borrar el usuario con el DNI introducido.
 * El resto de campos no hace falta que se introduzcan porque no se van a necesitar.
 */
function borrarUsuario(){

}
/**
 * Actualiza los datos de un cliente ya dado de alta.
 * Con el DNI del cliente, se podrán modificar cualquiera de los datos
 */
function actualizarDatosClientes(){

}