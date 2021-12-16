var curso = require('../../Esquemas/Gestion/gCurso');
var stats = require('../../Esquemas/Retroalimentacion/scStats');
var users = require('../../Esquemas/Gestion/gUser');
const { verEstadisticas } = require('../../Controllers/estadisticas');

var storeStats = async function (salaToken){
    console.log('from axaxaxa',salaToken);    
    const {respuestasPorPregunta,estadoAlumno,tablaAlumno} = verEstadisticas(salaToken);
    console.log('###############################################\n',tablaAlumno);
    return("xd");
}

var getStatsView = async function(idCurso){
    
    let cursoReq = await curso.findOne({codigo: idCurso}).exec().catch(err=>console.log(err));
    if(cursoReq){
        let statsReq = await stats.findOne({idCur : cursoReq._id}).populate({ path: "alumnosStats" ,populate:{ path: "alumno"}}).catch(err=>console.log(err));
        if (statsReq){
            return statsReq;
        }
    }

    return("xd");
}

var getStudStatView = async function(idCurso,idAlumno){
    let cursoReq = await curso.findOne({codigo: idCurso}).exec().catch(err=>console.log(err));
    if(cursoReq){
        let statsReq = await stats.findOne({idCur : cursoReq._id}).populate({ path: "alumnosStats" ,populate:{ path: "alumno"}}).catch(err=>console.log(err));
       
        if (statsReq){

            for (let i=0 ;i<statsReq.alumnosStats.length;i++){
                console.log(statsReq.alumnosStats[i].alumno.codigo ,'\t',idAlumno);
                if (statsReq.alumnosStats[i].alumno.codigo == idAlumno){
                    return statsReq.alumnosStats[i]
                }
            }
            return {
                alumno: null,
                participacion : 0,
                aciertos : 0,
                aumento: 0,
                resPromedio: 0
            }
        }
    }
    return("xd");
}



module.exports.storeStats = storeStats;
module.exports.getStatsView = getStatsView
module.exports.getStudStatView = getStudStatView;
