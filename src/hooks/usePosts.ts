import { useState, useEffect } from 'react'
import { getPosts } from '../api/api'
import { TPost } from '../types/sharedTypes'
import { toast } from 'react-toastify'

export const usePosts = (authorId: number | null) => {
  const [posts, setPosts] = useState<TPost[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  const fetchPosts = async () => {
    try {
      const postsData = await getPosts()
      if (authorId) {
        setPosts(postsData.filter((post: TPost) => post.userId === authorId))
      } else {
        setPosts(postsData)
      }
    } catch (error) {
      toast.error('An error occurred while trying to fetch posts.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchPosts()
  }, [authorId])

  return { posts, loading }
}
