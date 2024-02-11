import React from 'react'



const Map2 = () => {
 const sayilar =[1,3,45,6789];

  return (
    <div>

       {sayilar.map(item=>   <span>{item}**</span>)}

    </div>
  )
}

export default Map2