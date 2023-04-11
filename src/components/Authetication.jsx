import {createUserWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth"
import { useState } from "react"
import {auth, googleProvider} from "../config/firebase"

export default function Authetication() {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const signin = async () => {
    try{
      await createUserWithEmailAndPassword(auth,email,password)
      alert('SIGN IN SUCCESSFULL')
    }catch(err){
      console.error(err)
    }
  }

  const signinwithGoogle = async () => {
    try{
      await signInWithPopup(auth,googleProvider)
      alert('SIGN IN WITH GOOGLE SUCCESSFULL')
    }catch(err){
      console.error(err)
    }
  }

  const signOut = async () => {
    try{
      await signOut(auth)
      alert('SIGN OUT SUCCESSFULL')
    }catch(err){
      console.error(err)
    }
  }
  
  return (
    <div>
      <div>
          <h4>Firebase Auth with Email</h4>
          <input type="text" onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
          <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
          <button onClick={signin}>SIGN IN</button>
      </div>
      <div>
      <h4>Firebase Auth with Google</h4>
      <button className="g-signin" onClick={signinwithGoogle}>SIGN IN WITH GOOGLE</button>
      </div>
      <div>
      <button onClick={signOut}>SIGN OUT</button>
      </div>
    </div>
  )
}
