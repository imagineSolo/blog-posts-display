import React, { useState, useCallback } from 'react'
import { useAuthors } from './hooks/useAuthors'
import { usePosts } from './hooks/usePosts'
import List from './components/PostList/List'
import AuthorFilter from './components/PostList/AuthorFilter'
import Loader from './components/Loader'
import { toast } from 'react-toastify'

const App: React.FC = () => {
  const [selectedAuthorId, setSelectedAuthorId] = useState<number | null>(null)
  const [hasError, setHasError] = useState<boolean>(false)

  const showError = useCallback(() => {
    if (!hasError) {
      setHasError(true)
      toast.error('An error occurred while trying to fetch data.')
    }
  }, [hasError])

  const { authors, loading: authorsLoading } = useAuthors(showError)
  const { posts, loading: postsLoading } = usePosts(selectedAuthorId, showError)

  const isLoading = authorsLoading || postsLoading

  return (
    <div className={`min-h-screen bg-gray-200 relative`}>
      {isLoading && <Loader />}
      <div className={isLoading ? 'blur-sm' : ''}>
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
    </div>
  )
}

export default App
