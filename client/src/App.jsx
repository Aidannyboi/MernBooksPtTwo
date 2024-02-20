import { useState } from 'react'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './views/home'
import ViewBook from './components/bookDetail'

function App() {


  return (
    <> 
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/book/:id/details' element={<ViewBook/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
