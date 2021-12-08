const {PreguntasSesion,newQuestion} = require('../Controllers/sockets');
class Sockets{
    constructor(io){
        this.io = io;
        this.socketEvents();
        this.sesion = '619ae72aa73611107ec3afa6'
    }
    socketEvents(){
        this.io.on('connection', (socket) => {
            console.log("New conection",socket.id);  
            //socket.emit("question-default",await PreguntasSesion(this.sesion));
            socket.on('newQuestion',  async (data)=>{
                const question = await  newQuestion(data,this.sesion);
                socket.emit('allQuestion', question);
                socket.broadcast.emit('allQuestion', question);
            })
        })
    }
}
module.exports = Sockets;
