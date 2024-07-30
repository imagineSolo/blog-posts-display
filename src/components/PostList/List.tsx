import React from 'react'
import { TPost } from '../../types/sharedTypes'
import Post from './Post'

type PostListProps = {
  posts: TPost[]
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 m-6 p-0">
      {posts?.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </ul>
  )
}

export default PostList
