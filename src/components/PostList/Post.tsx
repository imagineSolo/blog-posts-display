import React from 'react'
import { TPost } from '../../types/sharedTypes'
import '../../styles.css'

const Post: React.FC<TPost> = (post) => (
  <li className="card">
    <h2 className="text-2xl font-bold mb-2 text-indigo-500 capitalize-first-letter">{post.title}</h2>
    <p className="text-base text-gray-700 capitalize-first-letter">{post.body}</p>
  </li>
)

export default Post
