import React, { useRef } from 'react'
import { Container } from 'react-bootstrap'

const Useref = () => {

const inputRef = useRef(null)

const setFocus = () => { 

    inputRef.current.style.backgroundColor="yellow"

 }

  return (
    <div>


  <Container className='mt-5'>
<input type="text" placeholder='Enter your email'  ref={inputRef} />
<button  onClick={setFocus}>Set Focus</button>
   </Container>



    </div>
  )
}

export default Useref