import React from 'react';
import "./generales/general.css";
import "./CrearFormP.css";

class CrearFormP extends  React.Component {
    constructor(props) {
        super(props);
        this.state = {
            titulo: '',
            descripcion : '',
            opciones : ['']
        };        
        this.replaceOpt = function(index,elem){
            let arr = this.state.opciones;
            console.log(elem);
            arr[index] = elem;
            console.log(arr);
            this.setState({opciones:arr});
        };
        this.addOpt = function(){
            let arr = this.state.opciones;
            arr.push('');
            this.setState({opciones: arr});
            console.log(this.state.opciones);
        };
        this.delElem = function(index){
            let arr = this.state.opciones;
            arr.splice(index,1)
            this.setState({opciones: arr});
        };
        this.sendOpt = function(){
            let arr=[];
            for (let i = 0;i<this.state.opciones.length;i++){
                if (this.state.opciones[i]!==''){
                    arr.push(this.state.opciones[i]);
                    console.log(arr);
                }
            }
            this.setState({opciones:arr});
        };
    };
    

    render() {
        return ( 
        <div id = "CFPContainer">
            <div className = "frameContain">
            <div id = "CFPregTitulo">
                Titulo : <input className = "defInput" value = {this.state.titulo} onChange = {(e)=>{this.setState({titulo:e.target.value})}}/>
            </div>
            <div id = "CFPreglDesc">
                Descripcion: <textarea className = "defInput" value = {this.state.descripcion} onChange = {(e)=>{this.setState({descripcion:e.target.value})}}/>
            </div>

            <div id = "CFPopciones">
                <fieldset>
                <legend>Alternativas</legend>
                    {   this.state.opciones.map(function(opcion,index){
                        return <div key = { index } className = 'CFPInputOpt'>
                                    <div className = 'CFPInput'>
                                        <input className = "defInput" value = {this.state.opciones[index]} onChange = {(e)=>{this.replaceOpt(index,e.target.value)}}/>
                                    </div>                                    
                                    <div className = 'CFPDelButton'><button onClick ={()=>{this.delElem(index)}} className = 'closeButton'>X</button></div>
                                </div>
                                
                    },this)}
                </fieldset>
                <div id = 'CFPAddButton'>
                    <button onClick = {()=>{this.addOpt()}} className = 'confirmButton'>+</button>
                </div>
                <div id = 'CFPConfirm'>
                    <button onClick = {()=>{this.sendOpt()}} className = 'confirmButton'>Confirmar</button>
                </div>
            </div>

        </div>
        </div>
    )}   
}

export default  CrearFormP;