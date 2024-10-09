import React from 'react'
import { useState } from 'react'
import { Home2 } from './Home2'
export const App = () => {
    const [username] = useState("Gowri")
  return (
    <div>
        <h1> I am parent Component and username is {username} </h1>
        <Home2 uname = {username} />
        
        </div>

  )
}
export default App;