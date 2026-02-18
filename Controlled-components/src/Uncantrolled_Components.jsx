import React, { useRef } from 'react'
import { useState } from 'react'

const Uncantrolled_Components = () => {

    let name = useRef()
    let email = useRef()
    let number = useRef()
    let age = useRef()
    let password = useRef()


    return (
        <>
            <form action="">

                <h1>☺ Uncontrolled Components ☺</h1> <hr />
                {/* name */}
                <label htmlFor="name">User Name : </label>
                <input type="text" ref={name} placeholder='user name....' required/>


                {/* email */}
                <label htmlFor="email">User Email : </label>
                <input type="email" ref={email} placeholder='user email....' required/>

                {/* number */}
                <label htmlFor="number">User Number : </label>
                <input type="number" ref={number} placeholder='number...' required/>

                {/* password */}
                <label htmlFor="password">User password : </label>
                <input type="password" ref={password} placeholder='password...' required/>

                {/* gender */}
                <label htmlFor="gender">Gender : </label>
                <input type="radio" name="gender" id="boy" />&nbsp; Male &nbsp;&nbsp;
                <input type="radio" name="gender" id="girl" />&nbsp; Female <br /><br />

                {/* Age */}
                <label htmlFor="number">Age : </label>
                <input type="number" ref={age} />

                {/* birthday date */}
                <label htmlFor="date">Birth-Date : </label>
                <input type="datetime-local" name="" id="" />


                <button type="submit">Submit</button> <br /><br />
                <button type="reset">Reset</button>
                <hr />
            </form>
        </>
    )
}

export default Uncantrolled_Components
