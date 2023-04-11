import {createUserWithEmailAndPassword} from "firebase/auth"
import { useState } from "react"
import {auth} from "../config/firebase"

export default function Authetication() {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const signin = async () => {
      await createUserWithEmailAndPassword(auth,email,password)
  }
  
  return (
    <div>
      <div>
          <h4>Firebase Auth with Email</h4>
          <input type="text" onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
          <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
          <button onClick={signin()}>SIGN IN</button>
      </div>
      <div>
      <h4>Firebase Auth with Google</h4>
      </div>
    </div>
  )
}
