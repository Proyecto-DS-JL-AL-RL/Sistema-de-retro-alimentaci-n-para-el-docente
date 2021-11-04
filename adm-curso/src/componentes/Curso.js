import React from 'react';
import Body from './Body'
import Header from './Header'

class VerCurso extends  React.Component {
    
    render() {
        return ( 
            <div>
                <div>
                    <Header/>
                </div>
                <div>
                    <Body/>
                </div>
        </div>
    )}
}

export default  VerCurso;