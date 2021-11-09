import React from 'react';
import "./generales/general.css";
import "./ComentarioForm.css";


class ComentarioForm extends  React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cursos: ['xd1','xd2','xd3'],
            cursoActual : 'CursoFixed', //Fixeado
            titulo: '',                 //Fecha
            descripcion: '',
            fecha: new Date()
        };        
      };
    
    crearClase = function(){
        console.log('Xd');
    };

    render() {
        return ( 
        <div id = "cFormContainer">
        <div className = "popUpContainer">
            <div id = "lbl1">
                <div className = "lblBase1"> Envia comentarios</div>
            </div>
            <div id = "cFormTitulo">
                <input className = "defInput"/>
            </div>
            <div id = "cFormMensaje">
                <textarea className = "defInput"/>
            </div>
            <div id = "CFaddBtn">
                <label className = "adjButton" for = 'ComentadjFile'>+</label>
            </div>
                <input type = 'file' id = 'ComentadjFile' className = 'adjFileHid'/>
            

            <div id = "CFcloseBtn">
                <button className = "closeButton"> X</button>
            </div>
            <div id = "CFsendBtn">
                <button className = "confirmButton"> OK</button>
            </div>
            

        </div>
        </div>
    )}   
}

export default  ComentarioForm;