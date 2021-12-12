import React from 'react';
//import test from './clases/clases'
import './EditarCurso.css'
import BasicButtons from './componentesBasicos/CommonButton'
import {Link} from 'react-router-dom';
import { withRouter } from "react-router";
import axios from 'axios';

//const curs =

//let course = test['cursos']

class EditarMaterial extends React.Component{
    constructor(props){
    super(props)
    
    this.state = {
        disable:true,
        titulo:'',
        descripcion:'',
        idFile:this.props.match.params.idFile
        }
}

componentDidMount() {
    console.log(this.props)
    axios.post('/material/search', {file: this.state.idFile}).then((response) => {
        let body = response.data;
        this.setState({titulo:body[0].titulo})
        this.setState({descripcion:body[0].description})
    }, (error) => {
        console.log(error);
    })
}

    render() {    
    return (
        <div className="eText">
            <h1>Editar Material</h1>
                <div id="Edit">
                        <p id="datos">Titulo:</p>
                        <input id="einput" value={this.state.titulo} onChange={(e)=>{
                            this.setState({titulo:e.target.value})
                            //course[idCurso-1].setNombreCurso(e.target.value)
                        }} disabled = {(this.state.disable)? "disabled" : ""}/>
                        <p id="datos">Descripción:</p>
                        <textarea id="einput" value={this.state.descripcion} onChange={(e)=>{
                            this.setState({descripcion:e.target.value})
                            //course[idCurso-1].setDescripcion(e.target.value)
                        }} disabled = {(this.state.disable)? "disabled" : ""}/>
                        <button className="ebton" onClick={()=>{this.setState({disable:false})}}>Editar</button>
                        <button className="ebton" onClick={()=>{
                            this.setState({disable:true})
                            axios.post('/material/update', [{file:this.state.idFile},
                                {
                                    titulo:this.state.titulo,
                                    description:this.state.descripcion
                            }])
                            /*axios.post('/material/'+this.state.idCurso+'/update', [{codigo:this.state.idCurso},
                                {
                                    nombre:this.state.nombrecurso,
                                    codigo:this.state.codigo,
                                    IDProfe: this.state.idprofesor,
                                    descripcion:this.state.descripcion
                                }])*/
                    }}
                        >Guardar</button>
                </div>
            <BasicButtons  variant={"contained"} text={<Link id="link" to="/"> Volver Inicio </Link>}/>
        </div>
    )

    }   
}
export default withRouter(EditarMaterial);