import React from 'react'
import { usePosts } from './hooks/usePosts'
import List from './components/PostList/List'
import AuthorFilter from './components/PostList/AuthorFilter'
import Loader from './components/Loader'

const App: React.FC = () => {
  const { posts, authors, filterPostsByAuthor, loading } = usePosts()

  if (loading) {
    return <Loader />
  }

  return (
    <div className="min-h-screen bg-gray-200">
      <header className="w-full bg-white shadow p-5 mb-6">
        <h1 className="font-bold text-5xl text-indigo-500">Blog Posts</h1>
      </header>
      <main className="max-w-full h-full">
        <AuthorFilter authors={authors} onFilterChange={filterPostsByAuthor} />
        <List posts={posts} />
      </main>
    </div>
  )
}

export default App
