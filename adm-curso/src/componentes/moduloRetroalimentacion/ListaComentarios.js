import React from 'react';
import "./generales/general.css";
import "./ListaComentarios.css";
import Comentario from './Comentario';
import ComentarioForm from './ComentarioForm';
import ComentarioVista from './ComentarioVista';
import axios from 'axios';

class ListaComentario extends  React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comentarios : [],
            showingVista : false,
            idShowVista: 0,
            showingCrear:true,
            showingCrearForm: false
        };        
      };
    
    actualizar(){
        if (this.props.session){
            let pathRequest = '/retAl/getComentaryList/'+this.props.clase;
            if (this.props.session.type == "Profesor"){
                pathRequest = pathRequest +'/general'
            }else{
                this.setState({showingCrear:true})
                pathRequest = pathRequest + '/'+this.props.session.user;
            }
            //console.log(pathRequest);
            axios.get(pathRequest).then((response)=>{
                //console.log(response.data);
                this.setState({comentarios: response.data });
            });
        }
    }

    componentDidMount(){
        this.actualizar();
    }

    mostrarComentario(id){
        this.setState({idShowVista: id});
        this.setState({showingVista:true});
    }

    render() {
        return ( 
        <div className = "LCContainer">
            <div className = "elementContainer">
                {this.state.comentarios.map(function(eComentario){
                    return <div className = 'LCComent' onClick = {()=>{this.mostrarComentario(eComentario._id)}}><Comentario comentario = {eComentario}/></div>
                },this)}
                {this.state.showingCrear?
                <button onClick  = {()=>this.setState({showingCrearForm:true})}>Crear Comentario</button>
                :
                <div/>
                }
            </div>
            {this.state.showingCrearForm?
            <div className = 'crearWindow'><ComentarioForm close = {()=>{this.setState({showingCrearForm:false});this.actualizar();}} clase = {this.props.clase} session = {this.props.session}/>               
            </div>                  
            :<div></div>}
            {this.state.showingVista?
            <div className = 'crearWindow'><ComentarioVista close = {()=>{this.setState({showingVista:false});this.actualizar();}} comentario = {this.state.idShowVista} session = {this.props.session}/>               
            </div>                  
            :<div></div>}
        </div>
    )}   
}

export default  ListaComentario;