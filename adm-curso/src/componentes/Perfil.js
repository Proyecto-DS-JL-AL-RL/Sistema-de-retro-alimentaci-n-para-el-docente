import React from 'react';
import Avatar from './componentesBasicos/Avatar.js'
import test  from './clases/clases.js'
import './Perfil.css'
import BasicButtons from './componentesBasicos/CommonButton'
import {Link} from 'react-router-dom';
import axios from 'axios';
//import {useState} from 'react'

//axios.post('/user/:id/update', {codigo:this.state.codigo})
class VerPerfil extends  React.Component {
    constructor(props) {
        super(props);
        this.state = {
            avatar_style:"pimg" ,
            variant_button:"contained",
            id_style:"pbutton",
            disabled: true,
            nombre:'',
            apellido:'',
            edad:'',
            correo:'',
            user:'',
            codigo: ''
          };
        axios.post('/user/search', {codigo:this.props.idprofesor}).then((response) => {
            let body = response.data;
            this.setState({nombre:body[0].nombre})
            this.setState({apellido:body[0].apellido})
            this.setState({edad:body[0].edad})
            this.setState({correo:body[0].correo})
            this.setState({codigo:body[0].codigo})
        }, (error) => {
            console.log(error);
          })
    }   

    render() {
        return ( 
        <div>

            <div id="pCuadro">
                    <Avatar style={this.state.avatar_style} avatar={test['user'].getImagen()}/>
                    <div id="Perfil">
            <h1 id="Titulo">Mi Perfil</h1>
                        <h2>Nombre:</h2>
                        <input id="input" value={this.state.nombre} onChange={(e)=>{
                            this.setState({nombre:e.target.value})
                            test['user'].setNombre(e.target.value)
                        }}  disabled = {(this.state.disabled)? "disabled" : ""}/>
                        <h2>Apellido:</h2>
                        <input id="input" value={this.state.apellido} onChange={(e)=>{
                            this.setState({apellido: e.target.value})
                            test['user'].setApellido(e.target.value)
                    }} disabled = {(this.state.disabled)? "disabled" : ""}/>
                        <h2>Edad:</h2>
                        <input id="input" value={this.state.edad} onChange={(e)=>{
                            this.setState({edad:e.target.value})
                            test['user'].setEdad(e.target.value)
                    }} disabled = {(this.state.disabled)? "disabled" : ""}/>
                        <h2>Correo:</h2>
                        <input id="input" value={this.state.correo} onChange={(e)=>{this.setState({correo:e.target.va})}} disabled = {(this.state.disabled)? "disabled" : ""}/>
                        <button className="pbton" onClick={()=>{this.setState( {disabled: false} )}}>Editar</button>
                        <button className="pbton" onClick={()=>{
                            this.setState({disabled: true})    
                            axios.post('/user/'+this.state.codigo+'/update', [{codigo:this.state.codigo},{
                                nombre:this.state.nombre, 
                                apellido:this.state.apellido , 
                                correo:this.state.correo,
                                edad:this.state.edad }])
                        }}>Guardar</button>    
                </div>
            </div>         
                <BasicButtons style={this.state.id_style} variant={this.state.variant_button} text={<Link id="link" to="/"> Volver Inicio </Link>}/>
        </div>
    )}
}

export default  VerPerfil;