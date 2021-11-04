import React from 'react';
import test  from './clases/clases.js'
import './Header.css'
import DehazeIcon from '@mui/icons-material/Dehaze';
import SelectedListItem  from './componentesBasicos/MenuCurso';
import Avatar from './componentesBasicos/Avatar'
import SelectedListAvatar from './componentesBasicos/MenuAvatar.js';


class Header extends  React.Component {
    constructor(props) {
        super(props);
        this.state = {
          menu: false,
          avatar:false
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
                <Avatar avatar={test[0].getImagen()}/> 
                <div id="menu-avatar">{this.state.avatar?<SelectedListAvatar/>:false}</div>
            </div>
            <div id="NombreCurso">
                    <h1 id="Titulo">{test[1].nombre_curso}</h1>
            </div>
           </div>
        )}
}

export default Header