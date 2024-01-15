import React from 'react'

function DivDown({input1,placeHolderValue,onSubjectValueChange}) {

    return (
        <div className='flex flex-wrap gap-10 justify-center py-6 px-12'>
                <input className=' w-36 text-white bg-slate-600' type='number' min={0} max={100} value={input1} placeholder={placeHolderValue}
                    onChange={(e) => onSubjectValueChange(Number(e.target.value))}></input>
        </div>
        
    );
}

export default DivDown
