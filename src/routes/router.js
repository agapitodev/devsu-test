import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from './Home'
import Create from './Create'
import Edit from './Edit'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/create',
    element: <Create />
  },
  {
    path: '/edit',
    element: <Edit />
  }
])

export default router
