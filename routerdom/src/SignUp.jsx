import { useNavigate } from "react-router-dom"
import { useState } from "react"

const SignUp = () => {
  const emailadd = "admin@gmail.com"
  const password = "admin@123"

  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")

  const handleSignup = () => {
    if (email === emailadd && pass === password) {
      alert("Successful SignUp....")
      navigate("/")
    } else {
      alert("Invalid!")
    }
  }

  return (
    <div className="container">
      <h1>Sign Up</h1>

      <label htmlFor="email">User Email:</label>
      <input type="email" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} />

      <label htmlFor="password">Password:</label>
      <input type="password" placeholder="Enter Password" onChange={(e) => setPass(e.target.value)} />

      <button onClick={handleSignup}>SignUp</button>
    </div>
  )
}

export default SignUp
