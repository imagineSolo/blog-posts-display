import React from 'react'
import { usePosts } from '../../hooks/usePosts'

interface TestComponentForPostsProps {
  authorId: number | null
}

const TestComponentForPosts: React.FC<TestComponentForPostsProps> = ({ authorId }) => {
  const { posts, loading } = usePosts(authorId)
  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default TestComponentForPosts
