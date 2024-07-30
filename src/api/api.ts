import axios from 'axios'

const BASE_URL = 'https://jsonplaceholder.typicode.com'

export const getPosts = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/posts`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const getUsers = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/users`)
    return res.data
  } catch (error) {
    throw error
  }
}
