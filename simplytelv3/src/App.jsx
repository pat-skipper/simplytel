import { useState } from 'react'
import Home from './Home.jsx'
import Login from './Login.jsx'
import './App.css'

function App() {
  const [loggedIn, setLoggedIn] = useState(false)

  return loggedIn ? (
    <Home />
  ) : (
    <Login onLogin={() => setLoggedIn(true)} />
  )
}

export default App
