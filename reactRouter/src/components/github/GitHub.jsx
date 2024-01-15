import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function GitHub() {
    const [data,setData] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/prakhar8999')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setData(data)
        })
    },[])
    return (
        <div className=' text-center justify-center bg-slate-600 text-white'>
            <h3 className=' text-3xl font-bold'>Git Hub Followers : {data.followers}</h3>
            <img src={data.avatar_url} className=' w-60 h-60 p-10' alt='Git Pic' />
        </div>
    )
}

export default GitHub
