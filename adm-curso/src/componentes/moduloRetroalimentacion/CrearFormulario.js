import React from 'react';
import "./generales/general.css";
import "./CrearFormulario.css";
import CrearFormP from './CrearFormP';
import axios from 'axios';

class CrearFormulario extends  React.Component {
    constructor(props) {
        super(props);
        this.state = {
            titulo: '',
            preguntas : []
        };   
    this.addPreg = function(){
        let arr = this.state.preguntas;
        arr.push(arr.length+1);
        this.setState({preguntas:arr});
        //console.log(this.state.preguntas);
    }   
    this.handleChangePreg = function(index,currPreg){
        let arr = this.state.preguntas;
        arr[index] = currPreg;
        //console.log(currPreg);
        this.setState({preguntas:arr});
    };
    this.sendForm = function(){
        if (this.state.preguntas.length <= 0 || this.state.titulo == ""){
            console.log('Ingrese almenos una pregunta o Titulo');
        }else{
            const data = this.state;
            const close = this.props.close;
            axios.post('/retAl/createForm/'+this.props.claseId,data).then(function(response){
                //console.log(response);
                close();
            });
        }
    }

    };
    
    
    render() {
        return ( 
        <div id = "CFContainer">            
            <div className = "formularioBackground">
                <input id = "CFTittle" value = {this.state.titulo} onChange = {(e)=>{this.setState({titulo:e.target.value})}}/>
                    {this.state.preguntas.map(function(preg,index){
                            return <div key = {index} className = 'CFPregunta' ><CrearFormP update = {(newPreg)=>{this.handleChangePreg(index,newPreg);}}/></div>
                        },this)}
                <div id = 'CVPAddButton'><button className = 'confirmButton' onClick = {()=>{this.addPreg()}}>+</button></div>
                <div id = "CFPconfirmSection">
                    
                    <div id = "CFPconfirmButton">
                        <button className = "confirmButton" onClick = {()=>{this.sendForm()}}> Crear </button>
                    </div>
                </div>
            </div>
           
        </div>
    )}   
}

export default  CrearFormulario;