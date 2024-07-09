import React from 'react'
import { TAuthorFilter } from '../../types/sharedTypes'
import '../../styles.css'

const AuthorFilter: React.FC<TAuthorFilter> = ({ authors, onFilterChange }) => (
  <div className="mx-6 my-2 p-2 border border-gray-300">
    <h3 className="text-lg font-bold text-indigo-500">Filter by Author:</h3>
    <select
      onChange={(e) => onFilterChange(Number(e.target.value))}
      className="custom-select p-2 border border-gray-300 rounded">
      <option value="">All</option>
      {authors.map((author) => (
        <option key={author.id} value={author.id}>
          {author.name}
        </option>
      ))}
    </select>
  </div>
)

export default AuthorFilter
