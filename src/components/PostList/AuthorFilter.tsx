import React from 'react'
import { TAuthorFilter } from '../../types/sharedTypes'
import '../../styles.css'

const AuthorFilter: React.FC<TAuthorFilter> = ({ authors, onFilterChange }) => (
  <div className="mx-6 my-2 p-2 border border-gray-300" id="filter">
    <label htmlFor="filter" className="text-lg font-bold text-indigo-500 block">
      Filter by Author:
    </label>
    <select
      onChange={(e) => onFilterChange(e.target.value ? Number(e.target.value) : null)}
      className="text-black bg-white text-lg px-2 py-2 border border-gray-300 rounded">
      <option value="">All</option>
      {authors.map(({ id, name }) => (
        <option key={id} value={id}>
          {name}
        </option>
      ))}
    </select>
  </div>
)

export default AuthorFilter
