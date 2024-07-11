import { useState, useEffect } from 'react'
import { getUsers } from '../api/api'
import { TAuthor } from '../types/sharedTypes'

export const useAuthors = () => {
  const [authors, setAuthors] = useState<TAuthor[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersData = await getUsers()
        setAuthors(usersData)
      } catch (error) {
        console.error('Error fetching authors:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return { authors, loading }
}
