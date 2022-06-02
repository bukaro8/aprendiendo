
import React,{Component} from 'react';

export default class CicloVida extends Component{
  constructor(props){
    super(props);
    console.log(0,'el componente se inicializa. aun no esta en el dom')
  this.state={
    hora:new Date().toLocaleTimeString()
    }
  this.temporizador=null
  }
  tictac=()=>{
    setInterval(() => {
      this.setState({
        hora:new Date().toLocaleTimeString()

      })
    }, 1000);
  }
  iniciar=()=>{
    this.tictac()
  }

  detener = () => {clearInterval(this.temporizador)}
    
  
  render(){
    console.log(4, 'el componente se dibuja en el dom')
    return(
      <>
      <h1>ciclo de vida de los componentes de clase</h1>
      <h3>{this.state.hora}</h3>
      <button onClick={()=>this.iniciar()}>Iniciar</button>
      <button onClick={()=>this.detener()}>Detener</button>
      </>
    )
  }
}