import React, { useState } from 'react'
import { ToastContainer } from 'react-toastify'
import { useAuthors } from './hooks/useAuthors'
import { usePosts } from './hooks/usePosts'
import List from './components/PostList/List'
import AuthorFilter from './components/PostList/AuthorFilter'
import Loader from './components/Loader'

const App: React.FC = () => {
  const [selectedAuthorId, setSelectedAuthorId] = useState<number | null>(null)
  const { authors, loading: authorsLoading } = useAuthors()
  const { posts, loading: postsLoading } = usePosts(selectedAuthorId)

  if (authorsLoading || postsLoading) {
    return <Loader />
  }

  return (
    <div className="min-h-screen bg-gray-200">
      <ToastContainer />
      <header className="w-full bg-white shadow p-5 mb-6">
        <h1 className="font-bold text-5xl text-indigo-500">Blog Posts</h1>
      </header>
      <main className="max-w-full h-full">
        <section>
          <AuthorFilter authors={authors} onFilterChange={setSelectedAuthorId} />
        </section>
        <section>
          <article>
            <List posts={posts} />
          </article>
        </section>
      </main>
    </div>
  )
}

export default App
