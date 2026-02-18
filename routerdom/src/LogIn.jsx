import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const Login = () => {
  const username = "admin"
  const password = "admin@123"

  const navigate = useNavigate()

  const [user, setUser] = useState("")
  const [pass, setPass] = useState("")

  const handleLogin = () => {
    if (username === user && password === pass) {
      alert("Successful Login")
      navigate("/Home")
    } else {
      alert("Invalid!")
    }
  }

  return (
    <div className="container">
      <h1>Login</h1>

      <label htmlFor="username">Username:</label>
      <input type="text" placeholder="Enter Username" onChange={(e) => setUser(e.target.value)} />

      <label htmlFor="password">Password:</label>
      <input type="password" placeholder="Enter Password" onChange={(e) => setPass(e.target.value)} />

      <button onClick={handleLogin}>Login</button>
      <Link to="/SignUp">
        <button className="link-btn">Go to SignUp</button>
      </Link>
    </div>
  )
}

export default Login
