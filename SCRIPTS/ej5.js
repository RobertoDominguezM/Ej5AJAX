window.onload = () => {

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