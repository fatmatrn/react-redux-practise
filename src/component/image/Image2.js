import React from 'react'
import bilgisayar from "../../assets/img/pc.jpg"
const Image2 = () => {

     const click = () => { 


        alert("Hellooooooo")
      }
  return (
  

    <div>


        <img src="../assets/img/profile.jpg" alt="" height="100px"/>
        <img src="../assets/img/profile.jpg" alt="" height="100px"/>
        <img src={require("../../assets/img/pc.jpg")} alt="" height="100px"/>
        <img src={bilgisayar} alt="" height="100px"/>
        <button  onClick={click}>Click Me</button>



    </div>
  )
}

export default Image2