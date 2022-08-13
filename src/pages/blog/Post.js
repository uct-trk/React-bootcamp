import React from 'react'
import { useParams } from 'react-router-dom'
function Post() {
    const { url } = useParams()
    console.log(url)
    return (
        <div>Post page = {url}</div>
    )
}

export default Post