import { useState, useEffect } from 'react'
import { getUsers } from '../api/api'
import { TAuthor } from '../types/sharedTypes'

export const useAuthors = (showError: () => void) => {
  const [authors, setAuthors] = useState<TAuthor[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const usersData = await getUsers()
        setAuthors(usersData)
      } catch (error) {
        console.error('Error fetching authors:', error)
        showError()
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [showError])

  return { authors, loading }
}
