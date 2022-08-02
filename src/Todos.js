import React, { memo } from 'react'
import TodoItem from './TodoItem'

function Todos({ todos }) {
    console.log("Todos render edildi")
    return (
        <ul className='text-center'>
            {todos.map((todo, index) => (
                <TodoItem key={index} todo={todo} />
            ))}
        </ul>

    )
}

export default memo(Todos)