import React from 'react';
import test  from './clases/clases.js'
import './Header.css'
import DehazeIcon from '@mui/icons-material/Dehaze';
import SelectedListItem  from './componentesBasicos/MenuCurso';
import Avatar from './componentesBasicos/Avatar'
//import { style } from '@mui/system';


class Header extends  React.Component {
    constructor(props) {
        super(props);
        this.state = {
          menu: false,
          avatar:false,
          avatar_style:"FotoPerfil" 
        };
    }   
    handClick = (e) => {
        e.preventDefault()
        this.setState({ menu: !this.state.menu })}
    
    imageClick = (e) => {
            e.preventDefault()
            this.setState({ avatar: !this.state.avatar})}     
    
    render() {
        return ( 
        <div id="Header">
            <div id="Dehaze">
                    <button id="button" onClick={this.handClick}>
                        <DehazeIcon fontSize={'small'}/>
                    </button>
                    <div>
                        {this.state.menu?<SelectedListItem/>:false}
                    </div>
            </div>
            <div id="List" onClick={this.imageClick}> 
                <div id="Foto">
                    <Avatar style={this.state.avatar_style} avatar={test[0].getImagen()}/> 
                </div>
                <div id="menu-avatar">{this.state.avatar?this.props.componentes:false}</div>
            </div>
            <div id="NombreCurso">
                    <h1 id="Titulo">{this.props.NameCurso}</h1>
            </div>
           </div>
        )}
}

export default Header