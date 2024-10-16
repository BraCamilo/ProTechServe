let usuarios = []

class usuario{
    constructor(nombre, correo, contrasena){
        this.nombre = nombre;
        this.correo = correo;
        this.contrasena = contrasena;
    }
}

botonDeInicio.addEventListener('click', (event) => {
    event.preventDefault(); // Evitar que el formulario se envíe y la página se recargue

    // Llamar a la función que crea el nuevo usuario
    nuevoUsuario();
});

function nuevoUsuario(){
    let name = document.getElementById('name').value;
    let emailUser = document.getElementById('email').value;
    let passwordUser = document.getElementById('password').value;

    let nuevo1 = new usuario(name, emailUser, passwordUser)

    usuarios.push(nuevo1)
    console.log(usuarios)
    document.getElementById('formulario').reset();
}
