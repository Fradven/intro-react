import React from 'react'
import Tomap from './Tomap'

export default function TodoList({todoList}) {
    return (
        todoList.map(element =>{
            return <Tomap key={element.id} todomap={element}/>
        })
    )
}
