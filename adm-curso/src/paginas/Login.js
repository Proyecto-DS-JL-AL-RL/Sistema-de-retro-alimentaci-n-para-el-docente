import React from 'react';
import "./login.css";
import Header from '../componentes/Header';
import "../componentes/moduloRetroalimentacion/generales/general.css";
import axios from 'axios';
import { useHistory } from 'react-router';

export default function Login(props) {
    const [username,setUsername] = React.useState("");
    const [password,setPassword] = React.useState("");
    const [showMessage,setShowMessage] = React.useState(false);
    const [message,setMessage] = React.useState("")
    const initSession = props.initSession;
    const history = useHistory();

    const checkInput = function(){
        if (username === "" || password === ""){
            setShowMessage(true);
            setMessage('Llene los campos de usuario y contrasena');
            return false;
        }else{
            return true;
        }
    };
    
    const sendUserPass = function(){
        if(checkInput()){
            axios.post('/login/checkLogin',{username : username, password:password}).then(function(response){
                const body = response.data;
                if(body.accepted){
                    console.log(body);
                    setShowMessage(true);
                    setMessage(body.message);
                    initSession();
                }else{
                    setShowMessage(true);
                    setMessage(body.message);                    
                }
            });
        }        
    };


    return (        
        <div>     
            <div id = 'loginTittle'>
                Inicio de Sesion
            </div>      
            {showMessage?<div id = 'messageLogin'>{message}</div> :<div></div>}
            <div id="LoginContainer"> 
                <div className = 'cont1'>
                    <div> Usuario: </div>
                    <input type = "text" className = 'loginInput' value = {username}
                    onChange = {(e)=>{setUsername(e.target.value)}}/>
                </div>
                <div className = 'cont2'>
                    <div>Contraseña:</div>
                    <input type= "password" className = 'loginInput' value = {password}
                    onChange = {(e)=>{setPassword(e.target.value)}}/>
                </div>
                <div id = "FormsendButton">
                    <button className = "confirmButton" onClick = {sendUserPass}>Login</button>
                </div>
                <div id = "FormRegisterButton">
                    <button className = "confirmButton" onClick = {()=>{history.push('/register');}}>Registrar</button>
                </div>
            </div>         
            <Header/>
        </div>
    );
}
