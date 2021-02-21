import axios from "axios"
const baseUrl = "http://localhost:3001/projects"

const getId = (id) => {
  return(
    axios.get(`${baseUrl}/${id}`)
  )
}

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

export default { getAll, getId }