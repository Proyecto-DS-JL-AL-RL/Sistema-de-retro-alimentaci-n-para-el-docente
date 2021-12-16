import React from 'react';
import test from './clases/clases'
import './EditarCurso.css'
import BasicButtons from './componentesBasicos/CommonButton'
import {Link} from 'react-router-dom';
import { withRouter } from "react-router";
import axios from 'axios';

//const curs =

//let course = test['cursos']

class EditarCurso extends React.Component{
    constructor(props){
    super(props)
    
    this.state = {
        disable:true,
        nombrecurso:'',
        codigo:'',
        idprofesor:'',
        descripcion:'',
        idCurso:this.props.match.params.idCurso
        }
}

componentDidMount() {
    console.log(this.props)
    axios.post('/curso/search', {codigo: this.state.idCurso}).then((response) => {
        let body = response.data;
        this.setState({nombrecurso:body[0].nombre})
        this.setState({codigo:body[0].codigo})
        this.setState({idprofesor:body[0].IDProfe})
        this.setState({descripcion:body[0].descripcion})
    }, (error) => {
        console.log(error);
    })
}

    render() {    
    return (
        <div className="containerGen">
        <div className="eText">
            <h1>Editar Curso</h1>
                <div id="Edit">
                        <p id="datos">Curso:</p>
                        <input id="einput" value={this.state.nombrecurso} onChange={(e)=>{
                            this.setState({nombrecurso:e.target.value})
                            //course[idCurso-1].setNombreCurso(e.target.value)
                        }} disabled = {(this.state.disable)? "disabled" : ""}/>
                        <p id="datos">Código:</p>
                        <input id="einput" value={this.state.codigo} onChange={(e)=>{
                             this.setState({codigo:e.target.value})
                            //course[idCurso-1].setCodigo(e.target.value)
                        }} disabled = {(this.state.disable)? "disabled" : ""}/>
                        <p id="datos">ID profesor</p>
                        <input id="einput" value={this.state.idprofesor} onChange={(e)=>{
                            this.setState({idprofesor:e.target.value})
                            //course[idCurso-1].setIDprofesor(e.target.value)
                        }} disabled = {(this.state.disable)? "disabled" : ""}/>
                        <p id="datos">Descripcion</p>
                        <textarea id="einput" value={this.state.descripcion} onChange={(e)=>{
                            this.setState({descripcion:e.target.value})
                            //course[idCurso-1].setDescripcion(e.target.value)
                        }} disabled = {(this.state.disable)? "disabled" : ""}/>
                        <button className="ebton" onClick={()=>{this.setState({disable:false})}}>Editar</button>
                        <button className="ebton" onClick={()=>{
                            this.setState({disable:true})
                            axios.post('/curso/'+this.state.idCurso+'/update', [{codigo:this.state.idCurso},
                                {
                                    nombre:this.state.nombrecurso,
                                    codigo:this.state.codigo,
                                    IDProfe: this.state.idprofesor,
                                    descripcion:this.state.descripcion
                                }])
                    }}
                        >Guardar</button>
                </div>
            <BasicButtons  variant={"contained"} text={<Link id="link" to="/"> Volver Inicio </Link>}/>
        </div>
        </div>
    )

    }   
}
export default withRouter(EditarCurso);