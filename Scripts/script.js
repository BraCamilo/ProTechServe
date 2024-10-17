const creacionDePerfil = document.getElementById('creacion-de-perfil')
const inicioDeSesion = document.getElementById('inicio-de-sesion')
let usuarios = []

class usuario{
    constructor(nombre, correo, contrasena, tipo){
        this.nombre = nombre;
        this.correo = correo;
        this.contrasena = contrasena;
        this.tipo = tipo;
    }
}
//funsiones creacion de usuario
botonDeInicio.addEventListener('click', (event) => {
    event.preventDefault(); // Evitar que el formulario se envíe y la página se recargue
    nuevoUsuario();
});
function nuevoUsuario(){
    let name = document.getElementById('name').value;
    let emailUser = document.getElementById('email').value;
    let passwordUser = document.getElementById('password').value;
    let tipo = document.getElementById('tipo-perfil').value;

    let nuevo1 = new usuario(name, emailUser, passwordUser, tipo)

    usuarios.push(nuevo1)
    console.log(usuarios)
    document.getElementById('formulario').reset();
}
//funsiones inisio de sesion