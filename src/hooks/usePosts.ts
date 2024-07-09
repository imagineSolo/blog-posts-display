import { useState, useEffect, useRef } from 'react'
import { getPosts, getUsers } from '../api/api'
import { TAuthor, TPost } from '../types/sharedTypes'

export const usePosts = () => {
  const [posts, setPosts] = useState<TPost[]>([])
  const [authors, setAuthors] = useState<TAuthor[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const originalPosts = useRef<TPost[]>([])

  const fetchData = async () => {
    try {
      const [postsData, usersData] = await Promise.all([getPosts(), getUsers()])
      originalPosts.current = postsData
      setPosts(postsData)
      setAuthors(usersData)
    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const filterPostsByAuthor = (authorId: number) => {
    if (authorId) {
      setPosts(originalPosts.current.filter((post) => post.userId === authorId))
    } else {
      setPosts(originalPosts.current)
    }
  }

  return { posts, authors, filterPostsByAuthor, loading }
}
