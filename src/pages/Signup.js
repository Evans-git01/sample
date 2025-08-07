import React, { useState } from 'react'
import { auth } from '../Config/Firebase'
import { createUserWithEmailAndPassword,sendEmailVerification} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'


    export default function Signup() {
const [email ,SetEmail] = useState('')
const [password ,setPassword] = useState('')
const navigate = useNavigate()

const handlesignup = async(e) => {
    e.preventDefault()
    try {
        const userCredential = await createUserWithEmailAndPassword(auth,email,password)
        await sendEmailVerification(userCredential.user)
        console.log(userCredential)
        navigate('/')
    } catch (error) {
        console.log(error)
    }
}
  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handlesignup}>
        <h2>Create Account</h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => SetEmail(e.target.value)}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Sign Up</button>

      </form>
    </div>
  );
};

