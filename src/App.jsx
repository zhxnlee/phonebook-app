import React, { useState } from 'react'
import './App.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ContactListings from './pages/ContactListings'
import CreateContacts from './pages/CreateContacts'
import Root from './pages/Root'
import Navigation from './components/Navigation'

function App() {

  const router = createBrowserRouter([
    {path: '/', element: <Root/>, children:[
      {path: '/phonebook-app/contact-listings', element: <ContactListings/>},
      {path: '/phonebook-app', element: <CreateContacts/>}
    ]}
  ])

  return (
    
    <RouterProvider router = {router}/>
  )
}

export default App
