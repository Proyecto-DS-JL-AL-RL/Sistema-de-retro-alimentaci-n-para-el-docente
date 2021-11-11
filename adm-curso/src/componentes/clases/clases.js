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
let test_curso2 = data['Datos'][3]['Cursos'][1]
let test_curso3 = data['Datos'][3]['Cursos'][2]
let test_nota = data['Datos'][1]['Nota'][0]
let test_nota2 = data['Datos'][1]['Nota'][1]
let test_nota3 = data['Datos'][1]['Nota'][2]

let user1 = new User(test_alumno.id, test_alumno.nombre, test_alumno.apellido, test_alumno.edad, test_alumno.correo, test_alumno.contrasena)
user1.setImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAPFBMVEXk5ueutLepsLPo6uursbXJzc/p6+zj5ea2u76orrKvtbi0ubzZ3N3O0dPAxcfg4uPMz9HU19i8wcPDx8qKXtGiAAAFTElEQVR4nO2d3XqzIAyAhUD916L3f6+f1m7tVvtNINFg8x5tZ32fQAIoMcsEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQTghAJD1jWtnXJPP/54IgNzZQulSmxvTH6oYXX4WS+ivhTbqBa1r26cvCdCu6i0YXbdZ0o4A1rzV+5IcE3YE+z58T45lqo7g1Aa/JY5tgoqQF3qb382x7lNzBLcxft+O17QUYfQI4IIeklKsPSN4i6LKj/7Zm8n99RbHJpEw9gEBXNBpKIYLJqKYRwjOikf//r+J8ZsVuacbqCMNleI9TqGLGqMzhnVdBOdd6F/RlrFijiCoVMk320CBIahUxTWI0KKEcJqKbMdpdJb5QvdHq6wCI5qhKlgGMS/RBHkubWDAE+QZxB4xhCyDiDkLZxgGEVdQldzSKbTIhmZkFkSEPcVvmBn2SMuZB9od7fQDsMiDdKJjFUSCQarM5WirZ3C2TT/htYnyPcPfgrFHWz0BI74gr6J/IZiGUxAZGQLqmvQLTrtE/Go4YxhVRIpEw+sww1IIcqr5NKmUUzLF3d4/qPkYIp2T/obPuemlojFUR4t9Q2Vojhb7BmgElWHzLPH8hucfpefPNFTVgs9h1AdU/Pin96vwWbWdf+X9Absn3OdO34aMdsDnP8WgKYisTqI6CkNGqZQo1XA6Ef6AU32SJzOcBukHPF07/xNSgmHKa5BOhtezv6mA/rYJpwXNAnbRZ1XuF3BzDcO3vpA3+ny2909gbqE4hhD3LIPhLLyBNhPZvbZ3B+3tPYa18A7auSlXQayKwTPNLKDcuOB0xPYKDPFTkWsevQPRZ1J8Hji9I1KQ34r7hZhrwNwOZ97QxNx0drwn4QI0wQk1DcEsfKCWKdxVvxPSNUIp/knmAXT+nT+Ko3+0H96rcNb3m1fx7MBTJdeBJ7uFcWsc0wvgAsC4pROW0l2inbAmIBv/7GZmuhQH6API2rr8T0e6yuZJ+80A9LZeG62T3tik31XwxtwZcizKuTHkMjB1WdZde4Kmic/A5ZI3rr1ae21d08PlVHYfAaxw9G9CYRbJ+8ZdbTcMRV1XM3VdF0M32vtoTdZ0+u29s0OttJ5bz64UwinjaFMVY9vkqc3KKSxN21Xl+0L4Q3Vuv1tYl0pqnX6ms4XetFz7gdZVAgUEoJntfOUe4ZwsHd9FzqQ3Vv6xe41l0XJcqcKl6TZvlv7ClAW3BsqQW4X7ypApB8dmTgK4IX5wvqIVj33HtD2qSG4BqznxdIefL27Y4sahi0MdIdvUsDva8agGGbCtITmCY31MHD2O0uIdh/0rJDQ1VX5Zdxz3rR2QDbv6qXl9vudzqQtGm1Jv9LDXOsfvvB7VcZ8PDKD0mQ1VHPYQ9O+Yj4hR1IUD8rBnn3ho2m8oQMxbCFiKlL2ioSW5heeJqegED52CzxCtcGD3Kv8Wms9EYLyUhwaFIhSMBClevWEmiK/Iaogu4H7sg6ppQhQG8RUqivuTGOAJOg6FfgW0q0M0PQMRMEgXaeNf3SYDZ8PIMI0+wHgr/MgN7wYwpiLjCCqM6ydUDZLQiB6nDdNC8SDyig3jPPpFXGcC9O8BUBDVmgBY59E7Md/35Loe/UVEECEJwYggJjELZ4J71SaQSBeC02n4Da29CayJNA28SAhd2CQyC1Xw6pSmGSINQVuMhAZp4DClan9MgmkDDNmezqwS8sgtlXK/EPBhoaSmYVC/F7IO1jQEdHOlabpKh3+jzLQSTUiq4X2I+Ip/zU8rlaqAvkS21ElR+gqu3zbjjL+hIAiCIAiCIAiCIAiCsCf/AKrfVhSbvA+DAAAAAElFTkSuQmCC")
let curso1 = new Curso(test_curso.nombre_curso, test_curso.fecha_Inicio, test_curso.fecha_Final, test_curso.id_profesor, test_curso.codigo)
let curso2 = new Curso(test_curso2.nombre_curso, test_curso2.fecha_Inicio, test_curso2.fecha_Final, test_curso2.id_profesor, test_curso2.codigo)
let curso3 = new Curso(test_curso3.nombre_curso, test_curso3.fecha_Inicio, test_curso3.fecha_Final, test_curso3.id_profesor, test_curso3.codigo)

let Nota1 = new Nota(test_nota.id_curso, test_nota.tipo_practica, test_nota.puntuacion)
let Nota2 = new Nota(test_nota2.id_curso, test_nota2.tipo_practica, test_nota2.puntuacion)
let Nota3 = new Nota(test_nota3.id_curso, test_nota3.tipo_practica, test_nota3.puntuacion)
let test = {user: user1, cursos: [curso1, curso2, curso3], notas: [Nota1, Nota2, Nota3]}

export default test