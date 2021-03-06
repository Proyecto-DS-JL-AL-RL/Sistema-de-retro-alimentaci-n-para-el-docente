import React from 'react';
import "./generales/general.css";
import "./Comentario.css";


class Comentario extends  React.Component {
    constructor(props) {
        super(props);
        this.state = {
            TituloComentario: this.props.comentario.titulo,
            AutorComentario: this.props.comentario.autor,
            hasFile: this.props.comentario.hasFile,
        };        
      };
    
      componentDidMount(){
        //console.log('Comentario',this.props.comentario);
    }

    render() {
        return ( 
        <div className = "comContainer">
            <div className = "elementContainer">
                <div className = 'comTitulo'>{this.state.TituloComentario}</div>
                <div className = 'comAutor'>{this.state.AutorComentario}</div>
                {this.state.hasFile? <div className = 'comHF'>&#128206;</div> :<div></div> }
            </div>
        </div>
    )}   
}

export default  Comentario;