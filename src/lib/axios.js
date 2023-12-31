import Axios from 'axios'

const axios = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  withCredentials: true
})
export const fetcher = async ({ url, params } = {}) => {
  return await axios.get(url, params ? { params: params } : "")
    .then(res => res.data)
}

export const postFetcher = async ({ url, postData } = {}) => {
  return await axios.post(url, postData, {
    headers: {
      "Content-Type": 'application/x-www-form-urlencoded'
    }
  })
    .then(res => res?.data)
    .catch(error => {
      throw error
    })
}

export const post = async ({ postendpoint, postData, config } = {}) => {
  try {
    // Post data to the API
    return await axios.post(postendpoint, postData, { ...config })
  } catch (error) {
    console.error('Error posting data:', error)
    throw error // Rethrow the error
  }
}
export const put = async ({ putendpoint, updatedData, config } = {}) => {
  try {
    // Update data in the API
    return await axios.put(putendpoint, updatedData, { ...config })
  } catch (error) {
    console.error('Error updating data:', error)
    throw error // Rethrow the error
  }
}
export const del = async ({ delendpoint, config } = {}) => {
  try {
    // Delete data from the API
    return await axios.delete(delendpoint, { ...config })
  } catch (error) {
    console.error('Error deleting data:', error)
    throw error // Rethrow the error
  }
}
export const logout = async (mutate) => {
  try {
    return await post({
      postendpoint: '/logout', postData: { logout: true }, config: {
        headers: {
          "Content-Type": 'application/x-www-form-urlencoded'
        }
      }
    }).then(() => {
      mutate()
    })
  } catch (error) {
    console.log("error logging out")
    // throw error
  }

  window.location.pathname = '/'
}
export default axios