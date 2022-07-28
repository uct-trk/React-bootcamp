import React, { useEffect, useState } from 'react'
import "./tailwind.css";
function LifeCycle() {

    const [postId, setPostId] = useState(1)
    const [post, setPost] = useState(false)

    /*  useEffect(() => {
         console.log('component render oldu')
     }) */

    useEffect(() => {
        console.log('postId değeri değişti ' + postId)
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then((res) => res.json())
            .then((data) => setPost(data))
    }, [postId])

    useEffect(() => {
        console.log('component ilk yüklendiğinde çalışır')
        let interval = setInterval(() => {
            console.log("set interval çalıştı")
        }, 1000)
        return () => {
            console.log('component destroyed')
            clearInterval(interval)
        }
    }, [])

    return (
        <div>
            <h3 className='text-xl text-emerald-800'>{postId}</h3>
            {post && JSON.stringify(post)}
            <button className='bg-green-500 p-2 text-white rounded' onClick={() => setPostId(postId + 1)}>Sonraki Konu</button>
        </div>
    )
}

export default LifeCycle