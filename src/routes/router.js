import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Create from './Create'
import Edit from './Edit'

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/create' element={<Create />} />
      <Route path='/edit/:id' element={<Edit />} />
    </Routes>
  )
}

export default AppRouter
