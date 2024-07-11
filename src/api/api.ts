import axios from 'axios'
import { toast } from 'react-toastify'

const BASE_URL = 'https://jsonplaceholder.typicode.com'

export const getPosts = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/posts`)
    if (!res || !res.data) throw new Error('Invalid response')
    return res.data
  } catch (error) {
    toast.error('An error occurred while trying to fetch posts.')
    throw error
  }
}

export const getUsers = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/users`)
    if (!res || !res.data) throw new Error('Invalid response')
    return res.data
  } catch (error) {
    toast.error('An error occurred while trying to fetch users.')
    throw error
  }
}
