import React, {Fragment,useState, useEffect}from 'react';

const  ScroolHooks=()=>{
  useEffect(()=>{
    console.log('fase de montaje')
  })
  return(
    <Fragment>
      <h2>Hooks UseEffect y el ciclo de vida</h2>
    </Fragment>
)
}

export default  ScroolHooks