import React, {Fragment,useState, useEffect}from 'react';

const  RelojFuncional=()=>{
  const [hour,setHour]=useState(new Date().toLocaleTimeString())
  const [visible,setVisible]=useState(false)

  useEffect(()=>{
    let temporizador;
    if(visible){
      temporizador=setInterval(()=>{
        setHour(new Date().toLocaleTimeString())
      },1000)
    }
      return ()=>{
        console.log('fase de descontaje')
        clearInterval(temporizador)
    }
  },[visible])

  return(
    <Fragment>
      <h2>Reloj</h2>
      {visible&&<h3>{hour}</h3>}
      <button onClick={()=>setVisible(true)}>Iniciar</button>
      <button onClick={()=>setVisible(false)}>detener</button>
    </Fragment>
)
}

export default  RelojFuncional