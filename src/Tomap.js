import React from 'react'
import TodoList from './TodoList'

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
