import React from 'react'
import assets from "../../assets/assets";

function Default() {
  return (
    <div className='text-white mt-4 bg-cyan-800 p-4 w-fit mx-auto rounded-lg text-xl'>
      <img src={assets.marinDefault} alt="" className='w-96 mx-auto'/>
      <p>Flaco te saliste de la pagina,clickea la casita dale.</p>
    </div>
  )
}

export default Default