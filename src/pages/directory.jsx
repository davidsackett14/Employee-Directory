import React, {useEffect, useState} from "react";
import fetchUsers from "../utils/userapi"





function Table( ){
    const [people, setPeople] = useState([])
    const[input, setInput]= useState('')

    useEffect(() => {
        fetchUsers()
        .then(users=>setPeople(users.results))
       }
    , [])
    useEffect(()=>console.log(input), [input])
return(
<div>   
     <input className="form-control" type="text" placeholder="search by title" value={input} 
     onChange={e=>setInput(e.target.value)}/>
    <table className="table">
    <thead>
      <tr>
        <th scope="col">Title</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Email</th>
        <th scope="col">Profile Picture</th>

      </tr>
    </thead>
    <tbody>
    {people.filter(person=> person.name.title.toLowerCase().startsWith(input.toLowerCase())).map(person=> <tr>
    <th scope="row">{person.name.title}</th>
    <td>{person.name.first}</td>
    <td>{person.name.last}</td>
    <td>{person.email}</td>
    <td><img src={person.picture.thumbnail}/></td>
    </tr>)}
         </tbody>
  </table>  
  </div>

)
}
export default Table