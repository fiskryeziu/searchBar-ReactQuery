import React from 'react'
import { useState } from 'react'
import { ReactQueryDevtools } from 'react-query/devtools'
import usePosts from './hooks/usePosts'

const App = () => {
  const [inputValue, setInputValue] = useState('')
  const { isLoading, data, error } = usePosts(inputValue)

  return (
    <div className="container">
      <input
        type="text"
        value={inputValue}
        placeholder="Search todos..."
        onChange={(e) => setInputValue(e.target.value)}
      />
      {isLoading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h1>{error}</h1>
      ) : (
        <>
          {data.map((item) => (
            <div key={item.id} className="box">
              <h2>Title</h2>
              <p>{item.title}</p>
            </div>
          ))}
        </>
      )}
      <ReactQueryDevtools />
    </div>
  )
}

export default App
