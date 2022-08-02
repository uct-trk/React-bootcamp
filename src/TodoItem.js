import React, { memo } from 'react'

function TodoItem({ todo }) {
    console.log("Todo item render edildi ", { todo })
    return (
        <li>{todo}</li>
    )
}

export default memo(TodoItem)