import React, { useState } from 'react'

const ChangeProfileBad = (props) => {
  // state
  const [newUsername, setNewUsername] = useState("");

  return (
    <div>
      <input onChange={(e) => setNewUsername(e.target.value)}/>
      <button onClick={() => {props.setUsernameBad(newUsername)}}>Change Username</button>
    </div>
  )
}

export default ChangeProfileBad