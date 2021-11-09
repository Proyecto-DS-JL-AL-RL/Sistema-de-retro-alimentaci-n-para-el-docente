import React from 'react';
import "./generales/general.css";
import "./CrearFormulario.css";
import CrearFormP from './CrearFormP';

class CrearFormulario extends  React.Component {
    constructor(props) {
        super(props);
        this.state = {
            preguntas : []
        };   
    this.addPreg = function(){
        let arr = this.state.preguntas;
        arr.push(arr.length+1);
        this.setState({perguntas:arr});
        console.log(this.state.preguntas);
    }     
    };
    


    render() {
        return ( 
        <div id = "CFContainer">            
            <div className = "formularioBackground">
                <div id = "CFTittle">  TITULO GENERAL </div>
                    {this.state.preguntas.map(function(ind){
                            return <div key = {ind} className = 'CFPregunta' ><CrearFormP/></div>
                        },this)}
                <div id = 'CVPAddButton'><button className = 'confirmButton' onClick = {()=>{this.addPreg()}}>+</button></div>
                <div id = "CFPconfirmSection">
                    <div id = "CFPconfirmButton">
                        <button className = "confirmButton">  </button>
                    </div>
                </div>
            </div>
           
        </div>
    )}   
}

export default  CrearFormulario;