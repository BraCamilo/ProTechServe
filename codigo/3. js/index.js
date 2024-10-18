/* Variables globales */
const creacionDePerfil = document.getElementById('creacion-de-perfil')
const inicioDeSesion = document.getElementById('inicio-de-sesion')
const indexPagina = document.getElementById('index')
let usuarios = []
/* Fin variables globales */

/* Clases */
class usuario{
    constructor(nombre, correo, contrasena, tipo){
        this.nombre = nombre;
        this.correo = correo;
        this.contrasena = contrasena;
        this.tipo = tipo;
    }
}
/* Fin de clases */

/* Funciones globales */
window.addEventListener('load', inicio)
function atrasInicio(){
    atras.addEventListener('click', inicio)
}
/* Fin de funsiones globales */
function inicio(){
    indexPagina.style.display = 'block'
    creacionDePerfil.style.display = 'none'
    inicioDeSesion.style.display = 'none'
    botonesInicio.addEventListener('click', nuevoUsuario)
    botonCrearCuenta.addEventListener('click', sesionUsuario)
}

botonDeInicio.addEventListener('click', (event) => {
    event.preventDefault(); // Evitar que el formulario se envíe y la página se recargue
    nuevoUsuario();
});
function nuevoUsuario(){
    indexPagina.style.display = 'none'
    creacionDePerfil.style.display = 'flex'

    let name = document.getElementById('name').value;
    let emailUser = document.getElementById('email').value;
    let passwordUser = document.getElementById('password').value;
    let tipo = document.getElementById('tipo-perfil').value;

    let nuevo1 = new usuario(name, emailUser, passwordUser, tipo)

    usuarios.push(nuevo1)
    console.log(usuarios)
    document.getElementById('formulario').reset();
    atrasInicio()
}
//funsiones inisio de sesion
function sesionUsuario(){

}