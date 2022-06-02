import React, {Component} from "react";
import data from '../helpers/data.json'

const ElementoLista=(props)=>{
  return(
    <li>
      <a href={props.web}>{props.name}</a>
    </li>
  )
}
export default class  RenderizadoElementos extends Component{
  constructor(props){
  super(props);
  this.state={
    seasons:['winter','autumn','summer', 'spring']
  }
  }
render(){
  
  return(
    <div>
      <h2>renderizado de elementos</h2>
      {this.state.seasons.map((season,index)=>{
        return <div key={index}> {season}</div>
      })}
      <h2>frameworks Frontend Js</h2>
      <ul>
        {
          data.frameworks.map((el)=> 
          <ElementoLista 
          key={el.id} 
          name={el.name}
          web={el.web}
          />
        
          )
        }
      </ul>
    </div>
  )
}
}