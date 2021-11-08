import React from 'react';


class inputForm extends  React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
      }

    render() {
        return ( 
            <input type = "text" value = {this.state.titulo} onChange = {(e) => {this.setState({ titulo: e.target.value})}}/>
    )}
}

export default  inputForm;