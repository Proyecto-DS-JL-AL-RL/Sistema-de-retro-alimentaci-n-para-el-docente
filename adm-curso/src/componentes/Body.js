import './Body.css';
import React from 'react';


class Body extends  React.Component {
    constructor(props) {
        super(props);
        this.state = {
            style:"table",
            text:"texto",
            notas: false
        }
    }
    render() {
        return ( 
        <div id="bCuadro">
        </div>
        )}
}

export default Body