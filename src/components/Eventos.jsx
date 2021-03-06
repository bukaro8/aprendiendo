import React, {Component} from "react";


export class EventosEs7 extends Component{
  state={
    contador:0
  }
  sumar=(e)=>{
    this.setState({contador:this.state.contador+1})
    console.log(this)
  }
  render(){
    return(
      <div>
      
        <h2>eventos en componentes de clase ES7</h2>
        <nav>
          <button onClick={()=>this.sumar()} >+</button>
          <button >-</button>
        </nav>
        <h3>{this.state.contador}</h3>
      
    
      </div>
    )

  }

}
export  class EventosEs6 extends Component{
  constructor(props){
    super(props);
    this.state={
      contador:0
    }
    this.sumar=this.sumar.bind(this);
    this.restar=this.restar.bind(this);
  }
  sumar(){
    this.setState({
      contador:this.state.contador+1
    })
  }
  restar(){
    this.setState({
      contador:this.state.contador-1
    })
  }
  render(){
    return(
      <div>
        <h2>eventos en componentes de clase ES6</h2>
        <nav>
          <button onClick={()=>this.sumar()}>+</button>
          <button onClick={()=>this.restar()}>-</button>
        </nav>
        <h3>{this.state.contador}</h3>
      </div>
    )
  }
}