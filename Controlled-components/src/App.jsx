import React, { useState } from 'react'
import './App.css'
import Uncantrolled_Components from './Uncantrolled_Components'

const App = () => {

  let [input, setInput] = useState("")
  let [email, setEmail] = useState("")
  let [number, setNumber] = useState("")
  let [age, setAge] = useState("")
  let [password, setPass] = useState("")

  let hendleClick = (() => {
    console.log(input);
  })

  let hendleReset = (()=>{
    alert("Reset Form SuccessFull")
    setInput("")
    setEmail("")
    setPass("")
    setNumber("")
    setAge("")
  })

  return (
    <>
      <h1>-------------------------------------------- COMPONENTS --------------------------------------------</h1>
      <div className="main">


        <div className="main-left">
          <form action="">

            <h1>♥ Controlled Components ♥</h1> <hr />
            {/* name */}
            <label htmlFor="name">User Name : </label>
            <input type="text" onChange={(e) => setInput(e.target.value)} value={input} placeholder='user name....' required/>

            {/* email */}
            <label htmlFor="email">User Email : </label>
            <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder='user email....' required/>

            {/* password */}
            <label htmlFor="password">User Password : </label>
            <input type="password" onChange={(e) => setPass(e.target.value)} value={password} placeholder='number...' required/>


            {/* number */}
            <label htmlFor="number">User Number : </label>
            <input type="number" onChange={(e) => setNumber(e.target.value)} value={number} placeholder='number...' required/>

            {/* gender */}
            <label htmlFor="gender">Gender : </label>
            <input type="radio" name="gender" id="boy" />&nbsp; Male &nbsp;&nbsp;
            <input type="radio" name="gender" id="girl" />&nbsp; Female <br /><br />

            {/* Age */}
            <label htmlFor="number">Age : </label>
            <input type="number" onChange={(e) => setAge(e.target.value)} value={age} />

            {/* birthday date */}
            <label htmlFor="date">Birth-Date : </label>
            <input type="datetime-local" name="" id="" />

            <button type="submit">Submit</button> <br /><br />
            <button type="reset" onClick={hendleReset}>Reset</button>
            <hr />
          </form>
        </div>
        {/* ------------------------------------------------------------------------------------------- */}

        <div className="main-right">
          <Uncantrolled_Components />
        </div>


      </div>
    </>
  )
}

export default App
