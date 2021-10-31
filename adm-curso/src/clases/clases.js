class User{
    constructor(id, Nombre, Contraseña, Correo){
        this.id = id;
        this.Nombre = Nombre;
        this.Contraseña = Contraseña;
        this.Corrreo = null;
        this.Edad = null;
        this.Imagen = null;
    }
    getEdad(){
        this.Edad
    }
    getNombre(){
        return this.Nombre
    }

    setNombre(Nombre){
        this.Nombre = Nombre;
    }

    setEdad(Edad){
        this.Edad = Edad;   
    }
}