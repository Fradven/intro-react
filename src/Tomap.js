import React from 'react'


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
