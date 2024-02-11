import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Fetch = () => {

    const [users, setusers] = useState([])

    const [refresh, setrefresh] = useState(true)

 
   // const getMyUserData = async () => {
    //     const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
    //     const data = await response.json();
    //     setUsers(data);
    // };

  // useEffect(() => {


//     fetch  backend den data yi cekmemeize yarar
//     fetch("https://jsonplaceholder.typicode.com/users",{
//         method:'GET'
//     }).then(response=>response.json())
//       .then(data => {setusers(data)})
//       .catch(error => console.log('Error:', error))
//   burasi her render ve re-renderda calisir
//      }
//    )

// useEffect(() => {
//     console.log("Calisti")
//      axios.get("https://jsonplaceholder.typicode.com/users")
//      .then(response=>{
//         setusers(response.data);
//      }).catch((err)=>{console.log(err)});
// sadece ilk render da calisir.

// }, [])
useEffect(() => {
    console.log("Calisti")
     axios.get("https://jsonplaceholder.typicode.com/users")
     .then(response=>{
        setusers(response.data);
     }).catch((err)=>{console.log(err)});
//ilk render ve refresh state nin her guncellenmesinde de bu kisim calisacak.

}, [refresh])


// useEffect(() => {
//   first

//   return () => {
  //Buraya unmount durumunda calismasi gereken kodlar yazilir.
//   }
// }, [third])




  return (
    <div>
<button onClick={()=>setrefresh(prev=>!prev)}>REFRESH</button>
  
<ul>
{
    Object.keys(users).length>0 &&  users.map((user,index)=> {
        return(
            <li key={index}> {user.name}   <span style={{color:"Red"}}>  Email : {user.email}</span>  </li>

        )
    } )
}
 
</ul>



    </div>
  )
}

export default Fetch