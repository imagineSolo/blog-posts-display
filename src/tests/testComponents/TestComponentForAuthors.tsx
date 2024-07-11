import React from 'react'
import { useAuthors } from '../../hooks/useAuthors'

const TestComponentForAuthors: React.FC = () => {
  const { authors, loading } = useAuthors()

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {authors.map((author) => (
            <li key={author.id}>{author.name}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default TestComponentForAuthors
