/* Variables globales */
const creacionDePerfil = document.getElementById('creacion-de-perfil')
const inicioDeSesion = document.getElementById('inicio-de-sesion')
const indexPagina = document.getElementById('index')
const asideSection = document.getElementById('asideSection')
const botonAtras = document.getElementById('botonAtras')

window.addEventListener('load', inicio)
botonAtras.addEventListener('click', irAtras)

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
function irAtras() {
        
}

/* Fin de funsiones globales */

/* Elementos operativos */
botonDeInicio.addEventListener('click', (event) => {
    event.preventDefault(); // Evitar que el formulario se envíe y la página se recargue
    nuevoUsuario();
});

/* funsiones operativas */
function inicio(){
    indexPagina.style.display = 'block'
    creacionDePerfil.style.display = 'none'
    inicioDeSesion.style.display = 'none'

    botonCrearCuenta.addEventListener('click', nuevoUsuario)
    botonIniciarsesion.addEventListener('click', sesionUsuario)
}
function nuevoUsuario(){
    indexPagina.style.display = 'none'
    asideSection.style.display = 'none'
    creacionDePerfil.style.display = 'flex'

    let name = document.getElementById('name').value;
    let emailUser = document.getElementById('email').value;
    let passwordUser = document.getElementById('password').value;
    let tipo = document.getElementById('tipo-perfil').value;

    let nuevo1 = new usuario(name, emailUser, passwordUser, tipo)

    usuarios.push(nuevo1)
    document.getElementById('formulario').reset();
    irAtras()
    
}
//funsiones inisio de sesion
function sesionUsuario(){
    indexPagina.style.display = 'none'
    asideSection.style.display = 'none'
    creacionDePerfil.style.display = 'none'
    inicioDeSesion.style.display = 'block'
}