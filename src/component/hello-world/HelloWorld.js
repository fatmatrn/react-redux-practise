import React from 'react'
import "./hello-world.css"

const HelloWorld = () => {
    const style2 ={
        backgroundColor:"pink",
        color:"blue"
    }
  return (
    <div className='hello'>HelloWorld!!!!!!!!!!!!!!!!!
    
    <p style={{background:"purple"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quis quasi maiores consectetur illo praesentium, voluptatum veritatis ad facilis sunt nobis ea obcaecati dolorum nulla ex illum error minus. Perferendis?
    </p>
    <p style={style2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quis quasi maiores consectetur illo praesentium, voluptatum veritatis ad facilis sunt nobis ea obcaecati dolorum nulla ex illum error minus. Perferendis?
    </p>
    </div>
  )
}

export default HelloWorld