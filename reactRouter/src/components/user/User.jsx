import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userId} = useParams()
    return (
        <div className=' text-center bg-slate-400 text-white p-4 text-3xl font-bold'>User : {userId}</div>
    )
}

export default User
