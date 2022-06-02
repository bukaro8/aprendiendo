import React, {Fragment,useState}from 'react';

const UseSate=({titulo} )=>{
  const [contador,setContador]=useState(0)
  // console.log(titulo)
  const plus=(e)=>{
    e.preventDefault();
    setContador(contador+1)
  }
  const take=(e)=>{
    e.preventDefault();
    setContador(contador-1)
  }
  return(
    <Fragment>
      <div>
        <h2>Contador con UseState</h2>
        <span>{contador}</span>
        <br/>
        <button onClick={(e)=>plus(e)}>+</button>
        <button onClick={(e)=>take(e)}>-</button>
      </div>
    </Fragment>
)
}

export default UseSate