import React,{Component} from 'react';

export default class Padre extends Component{
  state={
    contador:0,
  };
  incrementarContador=(e)=>{
    this.setState({
      contador:this.state.contador+1
    })
  }
  render(){
    return(
      <>
        <h2>comunicacion entre componentes</h2>
        <Hijo mensaje='mesaje al componente hijo1'/>
        <Hijo 
        mensaje='mesaje al componente hijo2'
        incrementarContador={this.incrementarContador}
        contador={this.state.contador}
        />
      </>
    )
  }
}
function Hijo(props){
  return(
    <>
      <h3>{props.mensaje}</h3>
      <span>{props.contador}</span>
      <button onClick={props.incrementarContador}>+</button>
    </>
  ) 
}