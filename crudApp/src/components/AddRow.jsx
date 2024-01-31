import React, { useState } from 'react'
import { useCrud } from '../context/crudContext'

function AddRow() {

    const min = 18
    const max = 60

    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [city, setCity] = useState('')
    const [hobby, setHobby] =useState('')

    const {addDetail} = useCrud()

    const addData = (e) => {
        console.log(`Name : ${name} Age : ${age} City : ${city} Hobby : ${hobby}`);
        e.preventDefault()
        if(!name && !age && !city && !hobby) return
        
        addDetail({name : name, age : age, city : city, hobby : hobby})
        setName('')
        setAge('')
        setCity('')
        setHobby('')
    }



    return (
    <>
        <table className="w-full">
            <tbody>
            <tr>
                <th>
                    <h3 className='w-full border border-black/10 rounded-lg px-3 outline-none duration-150 bg-black placeholder-slate-400 text-yellow-200 py-1.5'>Name</h3></th>
                <th>
                    <h3 className='w-full border border-black/10 rounded-lg px-9 outline-none duration-150 bg-black placeholder-slate-400 text-yellow-200 py-1.5'>Age</h3></th>
                <th>
                    <h3 className='w-full border border-black/10 rounded-lg px-3 outline-none duration-150 bg-black placeholder-slate-400 text-yellow-200 py-1.5'>Current City</h3></th>
                <th>
                    <h3 className='w-full border border-black/10 rounded-lg px-3 outline-none duration-150 bg-black placeholder-slate-400 text-yellow-200 py-1.5'>Fav Hobby</h3></th>
                <th>
                    <h3 className='w-full border border-black/10 rounded-lg px-3 outline-none duration-150 bg-black placeholder-slate-400 text-yellow-200 py-1.5'>Actions</h3></th>
            </tr>
            <tr>
                <td>
                <input
                type="text"
                placeholder="Enter Your Name" value={name} onChange={(e) => setName(e.target.value)}
                className="w-full border border-black/10 rounded-lg px-3 outline-none duration-150 bg-black placeholder-slate-400 text-yellow-200 py-1.5"
                />
                </td>
                <td>
                <input
                type="number"
                placeholder="Enter Your Age" value={age} onChange={(e) => setAge(e.target.value)}
                min={min} max={max}
                className="w-full border border-black/10 rounded-lg px-3 outline-none duration-150 bg-black placeholder-slate-400 text-yellow-200 py-1.5"
                />
                </td>
                <td>
                <input
                type="text"
                placeholder="Enter Your Current City" value={city} onChange={(e) => setCity(e.target.value)}
                className="w-full border border-black/10 rounded-lg px-3 outline-none duration-150 bg-black placeholder-slate-400 text-yellow-200 py-1.5"
                />
                </td>
                <td>
                <input
                type="text"
                placeholder="Enter Your Favrouite Hobby" value={hobby} onChange={(e) => setHobby(e.target.value)}
                className="w-full border border-black/10 rounded-lg px-3 outline-none duration-150 bg-black placeholder-slate-400 text-yellow-200 py-1.5"
                />
                </td>
                <td>
                <button type="submit" onClick={addData} className="rounded-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
                </button>
                </td>
            </tr>
            </tbody>
        </table>
    </>
    )
}

export default AddRow
