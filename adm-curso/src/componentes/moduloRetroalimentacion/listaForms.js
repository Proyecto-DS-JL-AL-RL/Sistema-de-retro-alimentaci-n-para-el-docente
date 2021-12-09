import React from 'react';
import "./generales/general.css";
import "./listaForms.css";
import FormVista from './formularioVista';
import CrearFormulario from './CrearFormulario';
import ComentarioForm from './ComentarioForm';
import axios from 'axios';

class ListaForms extends  React.Component {
    constructor(props) {
        super(props);
        this.state = {
            TituloClase: 'Metodos de optimizacion',
            Descripcion: 'XD',
            showCrearButton: false,
            Formularios : [],
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

    
    actualizar(){
        //console.log(this.props.session);
        if (this.props.session){
            let pathRequest = '/retAl/getFormList/'+this.props.clase;
            if (this.props.session.type == "Profesor"){
                this.setState({showCrearButton:true});
            }else{
                this.setState({showCrearButton:false})
            }
            //console.log(pathRequest);
            axios.get(pathRequest).then((response)=>{
                //console.log('res',response.data);
                this.setState({Formularios: response.data });
            });
        }
    }

    close(){
        this.setState({showingCrear:false},()=>this.actualizar());        
    }


    componentDidMount(){
        this.actualizar();
    }
    
    render() {
        return ( 
        <div className = 'FLContainer' >
            <div className = 'frameContain'>  
                <div className = 'FLContent'>
                    <div><h1>Formularios de la Clase</h1></div>
                    <div className = 'listaForms'>
                        {this.state.Formularios.map(function(eForm){
                            return <div onClick = {()=>{this.mostrarForm(eForm.formId)}}  key = {eForm.id} className = 'FormElement'>{eForm.titulo} {eForm.respondidos}%</div>
                        },this)}
                        {this.state.showCrearButton?
                            <div className = 'FormElement' onClick = {()=>{this.crearForm()}} > Crear </div>
                            :
                            <div/>
                        }
                        
                    </div>
                </div>
            </div>
            {this.state.showingVista?
            <div className = 'vistaWindow'><FormVista vista = {this.state.showCrearButton} id = {this.state.idShowVista}/>
            <div className = 'ClosPopUp'><button className = 'closeButton' onClick = {()=>{this.setState({showingVista:false})}}>X</button></div>
            </div>                  
            :<div></div>}
            {this.state.showingCrear?
            <div className = 'crearWindow'><CrearFormulario claseId = {this.props.clase} close = {()=>{this.close()}} />
                <div className = 'ClosPopUp'><button className = 'closeButton' onClick = {()=>{this.setState({showingCrear:false})}}>X</button></div>
            </div>                  
            :<div></div>}
        </div>
    )}   
}

export default  ListaForms;