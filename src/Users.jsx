import { useEffect, useState } from "react"

export default function Users(){
    const [users,setUsers] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    },[])
    return (
        <div>
            <h3>Users: {Users.length}</h3>


        </div>
    )
}

// 1.declare a State to hold the data
// 2.UseEffect with the call back and dependency array a
// Use fetch to load data