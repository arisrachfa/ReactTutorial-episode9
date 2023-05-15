import React,{ useContext} from 'react'
import {AppContext} from '../../App'
import ChangeProfileGood from '../../components/ChangeProfileGood'

const ProfileGood = () => {
  // make func untuk memanggil useContext
  const {usernameGood} = useContext(AppContext)

  return (
    <div>
      <h1>This is ProfileGood, and User is: {usernameGood}</h1>

      <ChangeProfileGood/>
  </div>
  )
}

export default ProfileGood