import axios from 'axios'
export const fetchAll = (user) => {
  return axios.get(`https://api.github.com/users/${user}/repos`)
    .then(response => {
      const data = response.data
      return data.map(repo => {
        return {
          name: repo.name,
          description: repo.description
        }
      })
    })
}