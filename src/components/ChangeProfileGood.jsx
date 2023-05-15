import React,{useState, useContext} from 'react'
import {AppContext} from '../App'

const ChangeProfileGood = () => {
  // make func untuk memanggil useContext
  const {setUsernameGood} = useContext(AppContext)

    // state
    const [newUsername, setNewUsername] = useState("");

  return (
    <div>
      <input onChange={(e) => setNewUsername(e.target.value)}/>
      <button onClick={() => {setUsernameGood(newUsername)}}>Change Username</button>
    </div>
  )
}

export default ChangeProfileGood