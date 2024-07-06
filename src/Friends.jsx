import { useEffect, useState } from 'react'
import './Friends.css'
export default function Friends(){
    const [friends,setFriends] = useState([])
    useEffect
    return (
        <div className='box'>
            <h3>Friends: {friends.length}</h3>
        </div>
    )
}

// 1.State to hold data
// 2.Use Effect with dependencies array