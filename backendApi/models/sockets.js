const {PreguntasSesion,newQuestion,newAnswer} = require('../Controllers/sockets');
const {actualizarSala,terminarSala} = require('../Controllers/Sala');
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
            socket.on('unirse-sala',async (salaToken)=>{
                
                if(!socket.rooms.has(salaToken)){
                    socket.rooms.clear();
                    socket.join(salaToken);
                }
                //console.log(this.io.sockets.adapter.rooms.get(salaToken));
            });
            
            socket.on('actualizar-sala', async (title,salaToken)=>{
                await actualizarSala(title,salaToken);
            });
            socket.on('terminar-sala', (salaToken)=>{
                if(socket.rooms.has(salaToken)){
                    terminarSala(salaToken);
                    socket.leave(salaToken);
                }
            })
            socket.on('newQuestion',  async (data,user,salaToken)=>{
                console.log(this.io.rooms);
                const question = await  newQuestion(data,user,salaToken);
                //socket.emit('allQuestion', question);
                //socket.broadcast.emit('allQuestion', question);
                if(!socket.rooms.has(salaToken)){
                    socket.rooms.clear();
                    socket.join(salaToken);
                }
                this.io.to(salaToken).emit('allQuestion', question);
                this.io.to(salaToken).emit('newQuestion', question);
            })
            socket.on('newAnswer',async (data,idQuestion,salaToken)=>{
                //console.log(io.sockets.adapter.rooms);
                //console.log(this.io,"Hola");
                if(!socket.rooms.has(salaToken)){
                    socket.rooms.clear();
                    socket.join(salaToken);
                }
                const answer = await newAnswer(data,idQuestion);
                this.io.to(salaToken).emit('newAnswer',answer);
                //socket.broadcast.emit('newAnswer',answer);
            });
            
            
        })
    }
}
module.exports = Sockets;
