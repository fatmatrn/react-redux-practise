import React, { useEffect, useState } from 'react'

//0==0;T
//0=="0";T
//0==="0";F

const UseState = () => {

    const [mode, setmode] = useState("ligth");


  
 

    let classNames = "bg-light text-dark";

    if(mode === "dark"){
        classNames = "bg-dark text-white"
    }

    

  return (
    <div className={classNames}>

        <h1>Dark/Light</h1>
        <button onClick={()=>setmode("dark")}>Dark</button>
        <button  onClick={()=>setmode("light")}>Light</button>

        
    </div>
  )
}

export default UseState