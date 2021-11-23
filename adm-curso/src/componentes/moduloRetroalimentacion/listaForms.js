import React from 'react';
import "./generales/general.css";
import "./listaForms.css";
import FormVista from './formularioVista';
import CrearFormulario from './CrearFormulario';

class ListaForms extends  React.Component {
    constructor(props) {
        super(props);
        this.state = {
            TituloClase: 'Metodos de optimizacion',
            Descripcion: 'XD',
            vista: this.props.vista,
            Formularios : [  
                { Nombre: 'Form1', respondidos: 80, id: 1},
                { Nombre: 'Form2', respondidos: 90, id: 2},
                { Nombre: 'Form3', respondidos: 70, id: 3},
                { Nombre: 'Form4', respondidos: 10, id: 4}
            ],
            showingVista : false,
            idShowVista: 0,
            showingCrear:false,
        };  
        this.mostrarForm = function(id){
            this.setState({showingVista : true, idShowVista: id});
        }   
        this.crearForm = function(id){
            this.setState({showingCrear : true});
        }  
    };
    
    
    
    render() {
        return ( 
        <div className = 'FLContainer' >
            <div className = 'frameContain'>  
                <div className = 'FLContent'>
                    <div><h1>Formularios de la Clase</h1></div>
                    <div className = 'listaForms'>
                        {this.state.Formularios.map(function(eForm){
                            return <div onClick = {()=>{this.mostrarForm(eForm.id)}}  key = {eForm.id} className = 'FormElement'>{eForm.Nombre} {eForm.respondidos}%</div>
                        },this)}
                        <div className = 'FormElement' onClick = {()=>{this.crearForm()}} > Crear </div>
                    </div>
                </div>
            </div>
            {this.state.showingVista?
            <div className = 'vistaWindow'><FormVista vista = {this.state.vista} id = {this.state.idShowVista}/>
            <div className = 'ClosPopUp'><button className = 'closeButton' onClick = {()=>{this.setState({showingVista:false})}}>X</button></div>
            </div>                  
            :<div></div>}
            {this.state.showingCrear?
            <div className = 'crearWindow'><CrearFormulario />
                <div className = 'ClosPopUp'><button className = 'closeButton' onClick = {()=>{this.setState({showingCrear:false})}}>X</button></div>
            </div>                  
            :<div></div>}
        </div>
    )}   
}

export default  ListaForms;