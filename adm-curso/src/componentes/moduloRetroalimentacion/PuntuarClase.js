import React from 'react';
import "./generales/general.css";
import "./puntuarClase.css";

class PuntuarClase extends  React.Component {
    constructor(props) {
        super(props);
        this.state = {
            puntuacion : -1,
            puntuacionFija: -1
        };  
        this.elementos = [];
        this.funOnclick= function(num){
            return ()=>{this.setState({puntuacion:num,puntuacionFija:num})}
        }
        this.funOnMousOver= function(num){
            return ()=>{this.setState({puntuacion:num})}
        }
        this.funOnMouseOut= function(){
            return ()=>{this.setState({puntuacion:this.state.puntuacionFija})}
        }
      };
    
    
    render() {
        return ( 
        <div id = "PCContainer">  
            <div className = "popUpContainer">
                <div id = "PCTitle">Califica la Clase</div>
                <div id = 'starContainer'>         
                    {[1,2,3,4,5].map(function(num){
                        return <div className = "estrella" id = {"est"+String(num)} 
                        className = {num<=this.state.puntuacion?'sActivado':'sDesactivado'} 
                        onClick = {this.funOnclick(num)}
                        onMouseOver = {this.funOnMousOver(num)}
                        onMouseOut = {this.funOnMouseOut()}>
                            &#9733;
                        </div>
                    },this)}
                </div>
                <div id = "PCAddComentary"><button>Agregar Comentario</button></div>
                <div id = "PCsendButton"><button className = "confirmButton">XD</button></div>
            </div>       
        </div>
    )}   
}

export default  PuntuarClase;