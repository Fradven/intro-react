import React from 'react'



/**
 * output the value introduced and add to it a checkbox
 * 
 * @returns new div w/ label and checkbox
 */
export default function Tomap({todomap}) {
    return (
        <div>
            <label>
            <input type="checkbox" checked={todomap.complete} />
            {todomap.name}
            </label>
        </div>
    )
}
