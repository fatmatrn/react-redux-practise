import React from 'react'
import Child from './Child';

const people = [
    { firstName: "John", lastName: "Doe", age: 30, profession: "Software Developer" ,img:"profile.jpg"},
    { firstName: "Jane", lastName: "Smith", age: 25, profession: "Graphic Designer" ,img:"profile.jpg" },
    { firstName: "Alice", lastName: "Johnson", age: 35, profession: "Doctor" ,img:"profile.jpg"},
    { firstName: "Bob", lastName: "Williams", age: 40, profession: "Teacher"  ,img:"profile.jpg"},
    { firstName: "Emily", lastName: "Brown", age: 28, profession: "Marketing Manager" ,img:"profile.jpg" }
];

const Parent = () => {
  return (
    <div>

   {people.map((item,index)=><Child key={index} {...item} />)}

    </div>
  )
}

export default Parent