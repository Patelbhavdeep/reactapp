import { useState } from 'react'
import './App.css'

const App = () => {

  let [email, setEmail] = useState("")
  let [pass, setPass] = useState("")
  let [show, setShow] = useState("")

  let handleRead = (() => {
    if (email == "" && pass == "") {
      setShow("Enter Email And Password...")
    }
    else if (email == "" || required && pass != "") {
      setShow("Enter Email")
    }
    else if (email != "" && pass == "") {
      setShow("Enter Password")
    }
    else {
      alert("Successfull Login")
      setShow("")
    }
    setEmail("")
    setPass("")
  })
  return (
    <div>

      <div className="card">

        <form>
          <h1>Error Handle Project</h1>
          <input type="email" placeholder='Enter Email....' onChange={(e) => setEmail(e.target.value)} value={email} />
          <input type="password" placeholder='Enter Pass....' onChange={(e) => setPass(e.target.value)} value={pass} />
          <button onClick={handleRead}>User</button>
          <h1>{show}</h1>

        </form>
      </div>
    </div>
  )
}

export default App
