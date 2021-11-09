function randomInt(max,min=0){
    return Math.floor(Math.random()*(max-min) -min);
}
const respuesta = [
    "Es una pregunta interesante pero creo que se equivoca",
    "He de caminar por los lugaresmas eoscuros, pero he de salir de este lugar",
    "No importa si te pierdo, existe millones de personas encontrare alguien como tu o mejor, pero nadie me devolvera el tiempo que perdi contigo",
    "He de pasar los recuerdos al estado de sueño pasajero, fue algo bueno pero ya termino",
    "Recuerda regreses o no, estare aqui aunque no me entere que tu regresaste",
    "Ha pasado tanto tiempo que no recuerdo tu nombre",
    "La vida esta tan resentida conmigo que me hace recordar tu nombre",
    "Aqui no he planeado nada, pero si obtuve lo que queria",
    "Es una pregunta interesante pero creo que se equivoca",
    "He de caminar por los lugaresmas eoscuros, pero he de salir de este lugar",
    "No importa si te pierdo, existe millones de personas encontrare alguien como tu o mejor, pero nadie me devolvera el tiempo que perdi contigo",
    "He de pasar los recuerdos al estado de sueño pasajero, fue algo bueno pero ya termino",
    "Recuerda regreses o no, estare aqui aunque no me entere que tu regresaste",
    "Ha pasado tanto tiempo que no recuerdo tu nombre",
    "La vida esta tan resentida conmigo que me hace recordar tu nombre"
]
const nombres = [
    "Juan","Jesus","Jorge","Anibal","Luis","Alex","Elmer","Eris","Erika","Elena","Kevin","Jose","Manuel","Romeo"
]
const apellido= [
    "Lopez","Lirio","Sanchez","Rivera","Zarate","Savedra","Flores","Santos","Romero","Ramirez","Luz"
]
const respuestaAlumno = respuesta.map((e,i)=>{
    return {
        id: i,
        nombre : nombres[randomInt(nombres.length-1)]+" "+ apellido[randomInt(apellido.length-1)],
        rpta : e
    }
})
export {respuestaAlumno};