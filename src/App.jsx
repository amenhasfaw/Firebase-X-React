import Authetication from './components/Authetication'
import {db, auth} from "./config/firebase"
import { useEffect, useState } from 'react'
import { getDocs, collection, addDoc } from 'firebase/firestore'
import './App.css'


function App() {

  const [studentList,setStudentList] = useState([])

  // New Student States
  const [studentName,setStudentName] = useState("")
  const [studentBranch,setStudentBranch] = useState("")
  const [studentUSN,setStudentUSN] = useState("")
  const [studentPromoted,setPromoted] = useState("")
  

  const studentCollection = collection(db,"Students")


  const getStudents = async () => {
    try {
      const data = await getDocs(studentCollection)
      const studentList = data.docs.map((doc) => ({...doc.data(), id:doc.id}))
      console.log(studentList)
      setStudentList(studentList)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() =>{
    getStudents();
  },[])

  const addStudent = async () => {
    try {
      await addDoc(studentCollection,
        {name:studentName,
         USN:studentUSN,
         branch:studentBranch,
         isPromoted:studentPromoted});
      getStudents()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
      <h1>FIREBASE X REACT</h1>

      <Authetication/>

      <div className='CRUD'>
        <h2>--  FIREBASE CRUD DEMO  --</h2>
        <div className='add-student'>
          <h3>ADD STUDENT: </h3>
          <input onChange={(e) => setStudentName(e.target.value)} placeholder='Name'/>
          <input onChange={(e) => setStudentUSN(e.target.value)} placeholder='USN'/>
          <input onChange={(e) => setStudentBranch(e.target.value)} placeholder='Branch'/>
          <label><input onChange={(e) => setPromoted(e.target.checked)} type='checkbox'/>PROMOTED</label>
          <button 
            style={{display:"block",margin:"2rem auto"}} 
            className='signout'
            onClick={addStudent}>ADD</button>
        </div>
        <div className='student-list'>
        <h3>STUDENT LIST:</h3>
        {studentList.map(student => {
          return(
              <h3  key={student.id} style={{color: student.isPromoted ? "green" : "red"}}>
                {student.name} | {student.USN} | {student.branch}
              </h3>
          )
        })}
        </div>
      </div>
    </div>
  )
}

export default App
