import React from 'react'
import Me from './Me'

function Profil({nom,age,handleAdd}) {
  return (
    <div>
         <h1>{nom}</h1>
         <h1>{age}</h1>

<button onClick={() => handleAdd(nom)}> 
click here to show name
</button>
<Me nom={nom} />
<img src="a.jpg" alt="tt"></img>

 </div>
  )
}

export default Profil