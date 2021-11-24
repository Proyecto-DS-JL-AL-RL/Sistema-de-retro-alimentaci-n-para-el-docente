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

class Profesor extends User{
   constructor(id, nombre, apellido, edad, correo,  contrasena){
       super(id, nombre, apellido, edad, correo,  contrasena)
        this.condicion = true
    } 

   elliminarAlumno(){
       return "ok"
   }

   crearCurso(){
       return "ok"
   }

   eliminarCurso(){
        return "ok"
   }


   editarCurso(){
       return "ok"
   }

   getCondicion(){
        return this.condicion
    }
}

class Alumno extends User{
    constructor(id, nombre, apellido, edad, correo,  contrasena){
        super(id, nombre, apellido, edad, correo,  contrasena)
        this.condicion = false
    }

    getCondicion(){
        return this.condicion
    }
}


class Nota{
    constructor(id_alumno, id_curso, tipo_practica, puntuacion){
        this.id_alumno = id_alumno
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
    constructor(nombre_curso, id_profesor, profesor, codigo){
        this.nombre_curso = nombre_curso
        this.estado_curso = true
        this.id_profesor = id_profesor
        this.codigo = codigo
        this.profesor = profesor
        this.descripcion = ""
    }

    setIDprofesor(text){
        this.id_profesor = text
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

    setNombreProfesor(text){
        this.profesor = text;
    }
}   

class Material{
    constructor(titulo, descripcion){
        this.titulo = titulo
        this.descripcion = descripcion
        this.id_material = ''
        this.fecha = new Date()
        this.file = null
    }
    getTitulo(){
        return this.titulo
    }

    getDescripcion(){
        return this.descripcion
    }

    getID_Material(){
        return this.id_material
    }

    setDescripcion(text){
        this.descripcion = text
    }

    setTitulo(text){
        this.titulo = text
    }

    setID_Material(text){
        this.id_material = text
    }

    getFecha(){
        return this.fecha.getDay()+"/"+this.fecha.getMonth()+ "/" + this.fecha.getFullYear()
    }
}

let test_alumno = data['Datos'][0]['Alumnos'][0]; 
let test_alumno1 = data['Datos'][0]['Alumnos'][1];
let test_alumno2 = data['Datos'][0]['Alumnos'][2]; 
let test_profesor = data['Datos'][2]['Profesor'][1]
let test_curso = data['Datos'][3]['Cursos'][0]
let test_curso2 = data['Datos'][3]['Cursos'][1]
let test_curso3 = data['Datos'][3]['Cursos'][2]
let test_nota = data['Datos'][1]['Nota'][0]
let test_nota2 = data['Datos'][1]['Nota'][1]
let test_nota3 = data['Datos'][1]['Nota'][2]

let user1 = new Alumno(test_alumno.id, test_alumno.nombre, test_alumno.apellido, test_alumno.edad, test_alumno.correo, test_alumno.contrasena)
user1.setImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3WqV0AgxJOuia18qwDSN7ZGtFPDkQi3ZD_IXM-c-ZL23qTQ54dXB0R4rdi7woPKVCm-k&usqp=CAU")

let user2 = new Profesor(test_profesor.id, test_profesor.nombre, test_profesor.apellido, test_profesor.edad, test_profesor.correo, test_profesor.contrasena)
user2.setImage("https://cdn.myanimelist.net/s/common/uploaded_files/1458803250-7e3175aeb7633199d1bdab47fa0ee5ba.jpeg")

let user3 = new Alumno(test_alumno1.id, test_alumno1.nombre, test_alumno1.apellido, test_alumno1.edad, test_alumno1.correo, test_alumno1.contrasena)
user3.setImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzDI_NE0XHqK8vsKgy9Ymq1SKZckCNj4O3bnFpQaCwskLtGVkkQDW9-3JX9QDC-lrnvVo&usqp=CAU")

let user4 = new Alumno(test_alumno2.id, test_alumno2.nombre, test_alumno2.apellido, test_alumno2.edad, test_alumno2.correo, test_alumno2.contrasena)
user4.setImage("https://www.pngitem.com/pimgs/m/107-1078350_toad-pepe-frog-transparent-background-hd-png-download.png")


let curso1 = new Curso(test_curso.nombre_curso,  test_curso.id_profesor, test_curso.profesor, test_curso.codigo)
let curso2 = new Curso(test_curso2.nombre_curso,  test_curso2.id_profesor,test_curso2.profesor, test_curso2.codigo)
let curso3 = new Curso(test_curso3.nombre_curso, test_curso3.id_profesor, test_curso3.profesor,test_curso3.codigo)

let Nota1 = new Nota(test_nota.id_alumno, test_nota.id_curso, test_nota.tipo_practica, test_nota.puntuacion)
let Nota2 = new Nota(test_nota.id_alumno2, test_nota2.id_curso, test_nota2.tipo_practica, test_nota2.puntuacion)
let Nota3 = new Nota(test_nota.id_alumno3, test_nota3.id_curso, test_nota3.tipo_practica, test_nota3.puntuacion)
let test = {alumno:[user1, user3, user4], user: user2, cursos: [curso1, curso2, curso3], notas: [Nota1, Nota2, Nota3]}

export default test