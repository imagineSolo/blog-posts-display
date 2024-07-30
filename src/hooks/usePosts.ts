import { useState, useEffect } from 'react'
import { getPosts } from '../api/api'
import { TPost } from '../types/sharedTypes'

export const usePosts = (authorId: number | null, showError: () => void) => {
  const [posts, setPosts] = useState<TPost[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  const fetchPosts = async () => {
    setLoading(true)
    try {
      const postsData = await getPosts()
      if (authorId) {
        console.log('authorId:', authorId)
        const filteredPosts = postsData.filter((post: TPost) => post.userId === authorId)
        setPosts(filteredPosts)
      } else {
        setPosts(postsData)
      }
    } catch (error) {
      console.error('Error fetching posts:', error)
      showError()
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchPosts()
  }, [authorId, showError])

  return { posts, loading }
}
