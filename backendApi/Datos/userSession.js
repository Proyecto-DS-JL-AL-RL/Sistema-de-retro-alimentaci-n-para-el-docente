var user = require('../Esquemas/Gestion/gUser');
var security = require('../Esquemas/seguridad');
var crypto = require('crypto');
const { isNull } = require('util');

var hash = async function (salt,password){
    return new Promise((resolve,rej)=> {
        crypto.scrypt(password,salt,64,(err,result) => {
            if (err) {
                console.log(err);
                rej(err);
            }
            else {
                resolve(result.toString('hex'));     
                }
            });
    })
}

var checkUser = async function (username,password,request){

    const saveUserId = await user.findOne({codigo: username}).exec().catch(err=>console.log(err));
    if (saveUserId == null){
        return {user: username,pass:password, accepter: false, message: "Usuario o contraseña Incorrectos2"};
    }

    const securityRegistry = await security.findOne({ idUser: saveUserId._id.toString() });
    const [salt,correctHashedPass] = securityRegistry.hashedPassword.split(':xA:');

    const hashedPassword =  await hash(salt,password);
    
    if(hashedPassword == correctHashedPass){
        //Pack

        //////////////////////////
        ///////////////////////////
        request.session.userInfo = {
            user: username, 
            type: saveUserId.condicion ,
            logged : true,
            tittle: '',
            idCourse: null
        };
        return {user: username,pass : password , accepted: true, message: "Login exitoso"};
    }else{
        return {user: username,pass : password , accepted: false, message: "Usuario o contraseña incorrectos"};
    }     
}



var savePassword = async function (userIdent,password){
    let saveUserId = await user.findOne({codigo: userIdent}).exec();
    const salt = crypto.randomBytes(16).toString('hex');
    const hashedPassword = await hash(salt,password);
    const saltHash = salt+":xA:"+hashedPassword;
    security.create({idUser: saveUserId._id.toString() , hashedPassword :saltHash});
}


var registerUser = async function(userParam,password){
    //console.log(userParam);
    const saveUser = await user.findOne({codigo: userParam.codigo}).exec().catch(err=>console.log(err));
    if(saveUser){
        return {
            accepted: false,
            message: "Este codigo ya esta en uso"
        }
    }

    user.create({
        codigo: userParam.codigo ,
        nombre: userParam.nombre,
        apellido:userParam.apellido,
        correo:userParam.correo,
        condicion: userParam.condicion,
        edad: 20
    }).then(function(){
        savePassword(userParam.codigo,password);
    });
    return {
        accepted: true,
        message: "Registro realizado con exito"
    };
}

var getSession = async function(request){
    if (request.session.userInfo){
        const userInfo = request.session.userInfo;
        userInfo.logged = true;
        return (userInfo);
    }else{
        return ({logged: false})
    };
}

var setCourse = async function(request,idCur){
    if (request.session.userInfo){
        request.session.userInfo.idCourse = idCur;
        return {done:true}
    }else{
        return {done: false}
    }
}


var endSession = async function(request){
    if (request.session.userInfo){
        request.session.userInfo = null;
    }else{
        return ({logged: false})
    };
}

module.exports.checkUser = checkUser;
module.exports.savePassword = savePassword;
module.exports.getSession = getSession;
module.exports.endSession = endSession;
module.exports.registerUser = registerUser;
module.exports.setCourse = setCourse;

