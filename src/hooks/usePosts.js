import { useQuery } from 'react-query'
import axios from 'axios'

const usePosts = (filter) => {
  const fetchData = async (filter) => {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/todos?_limit=20`
    )

    const filteredData = await data.filter((item) => {
      return item.title.toLowerCase().includes(filter)
    })
    return filteredData
  }
  return {
    ...useQuery(['todos', filter], () => fetchData(filter)),
  }
}

export default usePosts
