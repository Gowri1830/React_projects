import React from 'react'
import { Menubar } from './menubar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './Home' ;
import { About } from './About' ;
import { Dashboard } from './Dashboard' ;
import { navbar } from './navbar' ;
export const App = () => {
  return (
    <div>

      <BrowserRouter>
      <navbar />
      <Routes>
        <Route path='/' element = { <Home /> } />
        <Route path='/about' element = { <About /> } />
        <Route path='/dashboard' element = { <Dashboard /> } />
      </Routes>
      </BrowserRouter>
    </div>
  )
}
  
export default App;
