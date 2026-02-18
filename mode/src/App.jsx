import { useState } from 'react'
import './App.css'

function App() {
  const [dark, setDark] = useState(false)



  return (
    <>
      <div className={dark ? "dark" : "light"}>
      <div className="container">
        <h1>{dark ? "🌙 Dark Mode" : "☀️ Light Mode"}</h1>
        <button onClick={() => setDark(!dark)}>
          {dark ? "Switch to Light" : "Switch to Dark"}
        </button>
      </div>
    </div>
    </>
  )
}

export default App
