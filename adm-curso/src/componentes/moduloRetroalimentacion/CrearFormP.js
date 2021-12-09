import React from 'react';
import "./generales/general.css";
import "./CrearFormP.css";

class CrearFormP extends  React.Component {
    constructor(props) {
        super(props);
        this.state = {
            titulo: '',
            descripcion : '',
            alternativas : [{descripcion : '',percent: 0}]
        };     
        this.update = function(){
            this.props.update(this.state);
        };   
        this.replaceOpt = function(index,elem){
            let arr = this.state.alternativas;
            //console.log(elem);
            arr[index].descripcion = elem;
            //console.log(arr);
            this.setState({alternativas:arr},this.update);
        };
        this.addOpt = function(){
            let arr = this.state.alternativas;
            arr.push({descripcion : '',percent: 0});
            this.setState({alternativas: arr},this.update);
            //console.log(this.state.alternativas);
        };
        this.delElem = function(index){
            let arr = this.state.alternativas;
            arr.splice(index,1)
            this.setState({alternativas: arr},this.update);
        };
        this.sendOpt = function(){
            let arr=[];
            for (let i = 0;i<this.state.alternativas.length;i++){
                if (this.state.alternativas[i].descripcion!==''){
                    arr.push(this.state.alternativas[i]);
                    //console.log(arr);
                }
            }
            this.setState({alternativas:arr},this.update);
        };
    };
    

    render() {
        return ( 
        <div id = "CFPContainer">
            <div className = "frameContain">
            <div id = "CFPregTitulo">
                Titulo : <input className = "defInput" value = {this.state.titulo} onChange = {(e)=>{this.setState({titulo:e.target.value},this.update)}}/>
            </div>
            <div id = "CFPreglDesc">
                Descripcion: <textarea className = "defInput" value = {this.state.descripcion} onChange = {(e)=>{this.setState({descripcion:e.target.value},this.update)}}/>
            </div>

            <div id = "CFPopciones">
                <fieldset>
                <legend>Alternativas</legend>
                    {   this.state.alternativas.map(function(opcion,index){
                        return <div key = { index } className = 'CFPInputOpt'>
                                    <div className = 'CFPInput'>
                                        <input className = "defInput" value = {this.state.alternativas[index].descripcion} onChange = {(e)=>{this.replaceOpt(index,e.target.value)}}/>
                                    </div>                                    
                                    <div className = 'CFPDelButton'><button onClick ={()=>{this.delElem(index)}} className = 'closeButton'>X</button></div>
                                </div>
                                
                    },this)}
                </fieldset>
                <div id = 'CFPAddButton'>
                    <button onClick = {()=>{this.addOpt()}} className = 'confirmButton'>+</button>
                </div>
                <div id = 'CFPConfirm'>
                    <button onClick = {()=>{this.sendOpt()}} className = 'confirmButton'>Purgar</button>
                </div>
            </div>

        </div>
        </div>
    )}   
}

export default  CrearFormP;