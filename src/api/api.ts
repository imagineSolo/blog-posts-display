import axios from 'axios'

const URL = 'https://jsonplaceholder.typicode.com'

export const getPosts = async () => {
  const res = await axios.get(`${URL}/posts`)
  return res.data
}

export const getUsers = async () => {
  const res = await axios.get(`${URL}/users`)
  return res.data
}
