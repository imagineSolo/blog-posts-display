import React from 'react'
import { TPost } from '../../types/sharedTypes'
import '../../styles.css'

const Post: React.FC<TPost> = ({ title, body }) => (
  <li className="card" role="listitem">
    <h2 className="text-2xl font-bold mb-2 text-indigo-500 capitalize-first-letter">{title}</h2>
    <p className="text-base text-gray-700 capitalize-first-letter">{body}</p>
  </li>
)

export default Post
