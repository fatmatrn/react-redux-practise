import React, { useState } from 'react'
import { Button, ButtonGroup } from 'react-bootstrap';

const Counter = () => {

const [counter, setcounter] = useState(0);

const HandleClick = (val)  =>  {

setcounter(val)

}

  return (
    <div>

<ButtonGroup aria-label="Basic example">
      <Button variant="info" onClick={()=>setcounter(counter=>counter+1)}  >+</Button>
      <Button variant="secondary">{counter}</Button>
      <Button variant="success"  onClick={()=>HandleClick(counter -1 )}>-</Button>  
      <Button variant="danger" onClick={()=>setcounter(0)}>Reset</Button>
    </ButtonGroup>








    </div>
  )
}

export default Counter