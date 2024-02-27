import React, {useState, useEffect} from 'react'
import { PostCard } from '../components'
import Container from '../components/container/container.jsx'
import serviceObj from "../appwrite/config.js";

function allPost() {
    const [posts, setPosts] = useState([])
    useEffect(() => {}, [])
    serviceObj.getPost([]).then((posts) => {
        if (posts) {
            setPosts(posts.documents)
        }
    })
  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {posts.map((post) => (
                    <div key={post.$id} className='p-2 w-1/4'>
                        <PostCard post={post} />
                    </div>
                ))}
            </div>
            </Container>
    </div>
  )
}

export default allPost