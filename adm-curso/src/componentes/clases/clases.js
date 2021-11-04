import data from './data.json';


class User{
    constructor(id, nombre, apellido, edad, correo,  contrasena){
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.contrasena = contrasena;
        this.edad = edad;
        this.Imagen = null;
    }

    getEdad(){
        return this.edad;
    }

    setEdad(Edad){
        this.edad = Edad;   
    }

    getNombre(){
        return this.nombre
    }

    setNombre(Nombre){
        this.nombre = Nombre;
    }

    getApellido(){
        return this.apellido
    }

    setApellido(Apellido){
        this.apellido = Apellido;
    }

    getCorreo(){
        return this.correo
    }

    setCorreo(Correo){
        this.correo = Correo
    }
    
    setImage(url){
        this.Imagen = url
    }
    getImagen(url){
        return this.Imagen
    }
}

class Nota{
    constructor(id_curso, tipo_practica, puntuacion){
        this.id_curso = id_curso;
        this.tipo_practica = tipo_practica;
        this.puntuacion = puntuacion;
    }
    getPuntuacion(){
        return this.puntuacion;
    }

    setPuntuacion(puntuacion){
        this.puntuacion = puntuacion
    }

    getTipo_practica(){
        return this.tipo_practica;
    }

    setTipo_practica(tipo_practica){
        this.tipo_practica = tipo_practica
    }

    getID_curso(){
        return this.id_curso;
    }

    setID_curso(id_curso){
        this.id_curso = id_curso;
    }
}


class Curso{
    constructor(nombre_curso, fecha_Inicio, fecha_final, id_profesor, codigo){
        this.nombre_curso = nombre_curso
        this.estado_curso = true
        this.fecha_Inicio = new Date(fecha_Inicio[0], fecha_Inicio[1], fecha_Inicio[2])
        this.fecha_Final = new Date(fecha_final[0], fecha_final[1], fecha_final[2])
        this.id_profesor = id_profesor
        this.codigo = codigo
    }

    subirMaterial(){
        return "ok"       
    }

    editarMaterial(){
        return "ok"
    }

    agregarNota(){
        return "ok"
    }

    eliminarMaterial(){
        return "ok"
    }

    setFinalizarCurso(){
        this.estado_curso = false
    }
}

let test_alumno = data['Datos'][0]['Alumnos'][0]; 
let test_curso = data['Datos'][3]['Cursos'][0]
let test_nota = data['Datos'][1]['Nota'][0]

let user1 = new User(test_alumno.id, test_alumno.nombre, test_alumno.apellido, test_alumno.edad, test_alumno.correo, test_alumno.contrasena)
user1.setImage("https://i.pinimg.com/736x/c1/d4/ab/c1d4ab48262c819bc8c865818d1b2cff.jpg")
let curso1 = new Curso(test_curso.nombre_curso, test_curso.fecha_Inicio, test_curso.fecha_Final, test_curso.id_profesor, test_curso.codigo)
let Nota1 = new Nota(test_nota.id_curso, test_nota.tipo_practica, test_nota.puntuacion)

let test = [user1, curso1, Nota1]

export default test