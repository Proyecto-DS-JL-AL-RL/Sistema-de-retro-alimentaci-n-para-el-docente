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
    constructor(nombre_curso, fecha_Inicio, fecha_final, id_profesor, profesor, codigo){
        this.nombre_curso = nombre_curso
        this.estado_curso = true
        this.fecha_Inicio = new Date(fecha_Inicio[0], fecha_Inicio[1], fecha_Inicio[2])
        this.fecha_Final = new Date(fecha_final[0], fecha_final[1], fecha_final[2])
        this.id_profesor = id_profesor
        this.codigo = codigo
        this.profesor = profesor
        this.descripcion = ""
    }
    setNombreCurso(text){
        this.nombre_curso = text
    }

    setCodigo(text){
        this.codigo = text
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

    getDescripcion(){
        return this.descripcion
    }

    setDescripcion(text){
        this.descripcion = text;
    }
}   

let test_alumno = data['Datos'][0]['Alumnos'][0]; 
let test_curso = data['Datos'][3]['Cursos'][0]
let test_curso2 = data['Datos'][3]['Cursos'][1]
let test_curso3 = data['Datos'][3]['Cursos'][2]
let test_nota = data['Datos'][1]['Nota'][0]
let test_nota2 = data['Datos'][1]['Nota'][1]
let test_nota3 = data['Datos'][1]['Nota'][2]

let user1 = new User(test_alumno.id, test_alumno.nombre, test_alumno.apellido, test_alumno.edad, test_alumno.correo, test_alumno.contrasena)
user1.setImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3WqV0AgxJOuia18qwDSN7ZGtFPDkQi3ZD_IXM-c-ZL23qTQ54dXB0R4rdi7woPKVCm-k&usqp=CAU")
let curso1 = new Curso(test_curso.nombre_curso, test_curso.fecha_Inicio, test_curso.fecha_Final, test_curso.id_profesor, test_curso.profesor, test_curso.codigo)
let curso2 = new Curso(test_curso2.nombre_curso, test_curso2.fecha_Inicio, test_curso2.fecha_Final, test_curso2.id_profesor,test_curso2.profesor, test_curso2.codigo)
let curso3 = new Curso(test_curso3.nombre_curso, test_curso3.fecha_Inicio, test_curso3.fecha_Final, test_curso3.id_profesor, test_curso3.profesor,test_curso3.codigo)

let Nota1 = new Nota(test_nota.id_curso, test_nota.tipo_practica, test_nota.puntuacion)
let Nota2 = new Nota(test_nota2.id_curso, test_nota2.tipo_practica, test_nota2.puntuacion)
let Nota3 = new Nota(test_nota3.id_curso, test_nota3.tipo_practica, test_nota3.puntuacion)
let test = {user: user1, cursos: [curso1, curso2, curso3], notas: [Nota1, Nota2, Nota3]}

export default test