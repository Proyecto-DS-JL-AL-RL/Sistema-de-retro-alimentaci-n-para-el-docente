import React from 'react';
import "./registro.css";
import Header from '../componentes/Header';
import "../componentes/moduloRetroalimentacion/generales/general.css";
import axios from 'axios';
import { useHistory } from 'react-router';

export default function Registro(props) {
    const [username,setUsername] = React.useState("");
    const [nombre,setNombre] = React.useState("");
    const [apellido,setApellido] = React.useState("");
    const [correo,setCorreo] = React.useState("");
    const [password,setPassword] = React.useState("");
    const [password2,setPassword2] = React.useState("");
    const [showMessage,setShowMessage] = React.useState(false);
    const [message,setMessage] = React.useState("")
    const initSession = props.initSession;
    let history = useHistory();


    const checkInput = function(){
        if (username === "" || password === ""||nombre=== ""||apellido === ""||correo ===""||password2 ===""){
            setShowMessage(true);
            setMessage('Llene todos los campos');
            return false;
        }else if(password != password2){
            setMessage('Las contraseñas no coinciden');
            setShowMessage(true); 
            return false;                   
        }else if(!correo.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g)){
            setMessage('Ingrese un correo valido');
            setShowMessage(true); 
            return false;            
        }else{
            return true;
        }
    };
    
    const sendUserPass = function(){
        if(checkInput()){
            axios.post('/login/register',
            {user : {
                codigo: username,
                nombre: nombre,
                apellido:apellido,
                correo:correo,
                condicion: 'Profesor'
            },
            password:password            
            }).then(function(response){
                const body = response.data;
                if(body.accepted){
                    //console.log(body);
                    setShowMessage(true);
                    setMessage(body.message);
                    history.push('/');
                }else{
                    setShowMessage(true);
                    setMessage(body.message);                    
                }
            });
            console.log('Enviando ',username,password,nombre,apellido,correo,password2);
        }        
    };


    return (        
        <div>     
            <div id = 'loginTittle'>
                Registro
            </div>      
            {showMessage?<div id = 'messageReg'>{message}</div> :<div></div>}
            <div id="LoginContainer"> 

                <div className = 'cont'>
                    <div className = 'labelP'> Código: </div>
                    <input type = "text" className = 'RInput' value = {username}
                    onChange = {(e)=>{setUsername(e.target.value)}}/>
                </div>

                <div className = 'cont'>
                    <div className = 'labelP'> Nombre: </div>
                    <input type = "text" className = 'RInput' value = {nombre}
                    onChange = {(e)=>{setNombre(e.target.value)}}/>
                </div>

                <div className = 'cont'>
                    <div className = 'labelP'> Apellido: </div>
                    <input type = "text" className = 'RInput' value = {apellido}
                    onChange = {(e)=>{setApellido(e.target.value)}}/>
                </div>

                <div className = 'cont'>
                    <div className = 'labelP'> Correo: </div>
                    <input type = "text" className = 'RInput' value = {correo}
                    onChange = {(e)=>{setCorreo(e.target.value)}}/>
                </div>

                <div className = 'cont'>
                    <div className = 'labelP'>Contraseña:</div>
                    <input type= "password" className = 'RInput' value = {password}
                    onChange = {(e)=>{setPassword(e.target.value)}}/>
                </div>

                <div className = 'cont'>
                    <div className = 'labelP'> Repita su Contraseña:</div>
                    <input type= "password" className = 'RInput' value = {password2}
                    onChange = {(e)=>{setPassword2(e.target.value)}}/>
                </div>

                <div className = "ButtonsReg">
                <div className = "RegsendButton">
                    <button className = "confirmButton" onClick = {sendUserPass}>Enviar</button>
                </div>
                <div className = "RegsendButton">
                    <button className = "confirmButton" onClick = {()=>{history.push('/');}}>Atras</button>
                </div>
                </div>
            </div>         
            <Header/>
        </div>
    );
}
