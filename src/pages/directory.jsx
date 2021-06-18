import React, {useEffect, useState} from "react";
import fetchUsers from "../utils/userapi"





function Table( ){
    const [people, setPeople] = useState([])
    const[input, setInput]= useState('')
    const [order, setOrder]= useState(false)

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
        <th scope="col">First <span className="text-muted" onClick={()=>setOrder(!order)}>{order?'z-a':'a-z'}</span></th>
        <th scope="col">Last</th>
        <th scope="col">Email</th>
        <th scope="col">Profile Picture</th>

      </tr>
    </thead>
    <tbody>
    {people.filter(person=> person.name.title.toLowerCase().startsWith(input.toLowerCase())).sort((a, b)=>{
    var nameA = a.name.first.toUpperCase(); // ignore upper and lowercase
    var nameB = b.name.first.toUpperCase(); // ignore upper and lowercase
    if(!order){
        if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }   
    }
  else{
    if (nameA > nameB) {
        return -1;
      }
      if (nameA < nameB) {
        return 1;
      }
  }
    
      // names must be equal
      return 0;
    }).map(person=> <tr>
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