import React, { useState } from 'react'
import { useCrud } from '../context/crudContext'

function ViewRow({sinData}) {

    const min = 18
    const max = 60

    const [name, setName] = useState(sinData.name)
    const [age, setAge] = useState(sinData.age)
    const [city, setCity] = useState(sinData.city)
    const [hobby, setHobby] =useState(sinData.hobby)

    const [dataEditable, setdataEditable] = useState(false)
    const {deleteDetail, updateCrud} = useCrud()

    const editCrud = () => {
        updateCrud(sinData.id, {name: name, age: age, city: city, hobby : hobby})
        setdataEditable(true)
    }

    return (
    <>
        <table className="w-full">
            <tbody>
            <tr>
                <td>
                <input
                type="text"
                value={name} readOnly = {!dataEditable} onChange={(e) => setName(e.target.value)}
                className="w-full border border-black/10 rounded-lg px-3 outline-none duration-150 bg-black placeholder-slate-400 text-yellow-200 py-1.5"
                />
                </td>
                <td>
                <input
                type="number"
                value={age} readOnly = {!dataEditable} onChange={(e) => setAge(e.target.value)}
                className="w-full border border-black/10 rounded-lg px-3 outline-none duration-150 bg-black placeholder-slate-400 text-yellow-200 py-1.5"
                />
                </td>
                <td>
                <input
                type="text"
                value={city} readOnly = {!dataEditable} onChange={(e) => setCity(e.target.value)}
                className="w-full border border-black/10 rounded-lg px-3 outline-none duration-150 bg-black placeholder-slate-400 text-yellow-200 py-1.5"
                />
                </td>
                <td>
                <input
                type="text"
                value={hobby} readOnly = {!dataEditable} onChange={(e) => setHobby(e.target.value)}
                className="w-full border border-black/10 rounded-lg px-3 outline-none duration-150 bg-black placeholder-slate-400 text-yellow-200 py-1.5"
                />
                </td>
                <td>
                <button type="submit"
                onClick={
                    () => {
                        if(dataEditable) {
                            editCrud()
                        }
                        else{
                            setdataEditable((prev) => !prev);
                        }
                    }
                } 
                className="rounded-lg px-3 py-1 bg-blue-500 text-white shrink-0">
                {dataEditable ? "Save" : "Edit"}
                </button>
                <button type="submit" onClick = {() => deleteDetail(sinData.id)} className="rounded-lg px-3 py-1 bg-red-700 text-white shrink-0">
                Delete
                </button>
                </td>
            </tr>
            </tbody>
        </table>
    </>
    )
}

export default ViewRow
