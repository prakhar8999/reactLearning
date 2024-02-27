import React, { useState } from 'react'
import serviceObj from '../appwrite/config.js'

function SinglePage() {
const [name, setName] = useState('')
const [pinCode,setPin] = useState(6)
const [error,setError] = useState('')

const subData = async(data) => {
    setError('')
    try {
        console.log("before posting in Datbase")
        await serviceObj.createPost(data)
        console.log("after posting in Datbase")
    } catch (error) {
        throw error
    }

}

    return (
        <>
            {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
            <input type="text" placeholder='Enter your Name'  onChange = {(e) => setName(e.target.value)} value={name}/>
            <br />
            <input type="number" min={5} max={15} placeholder='Enter your Pin Code' onChange={(e) => setPin(Number(e.target.value))}  value={pinCode}/>
            <br />
            <button onClick={() => subData({name, pinCode})}>Create</button>
        </>
    )
}

export default SinglePage
