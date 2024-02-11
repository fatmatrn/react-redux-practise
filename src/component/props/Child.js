import React from 'react'
import { Card } from 'react-bootstrap'

const Child = (props) => {

    //const {firstName,lastName,age,profession}=props;
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title>{props.firstName} {props.lastName}</Card.Title>
      <Card.Img variant="top" src={`../assets/img/${props.img}`} />
      <Card.Text>
       {props.age}
      </Card.Text>
    </Card.Body>
  </Card>
  )
}

export default Child