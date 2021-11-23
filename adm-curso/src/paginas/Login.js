import React from 'react';
import "./login.css";
import Header from '../componentes/Header';
import "../componentes/moduloRetroalimentacion/generales/general.css";
import axios from 'axios';


export default function Login() {
    const [username,setUsername] = React.useState("");
    const [password,setPassword] = React.useState("");
    const [showMessage,setShowMessage] = React.useState(false);
    const [message,setMessage] = React.useState("")

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
            console.log('cookie',document.cookie);
            console.log('Enviando ',username,password);
            axios.post('/login/checkLogin',{username : username, password:password}).then(function(response){
                const body = response.data;
                if(body.accepted){
                    console.log(body);
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
            </div>         
            <Header/>
        </div>
    );
}
