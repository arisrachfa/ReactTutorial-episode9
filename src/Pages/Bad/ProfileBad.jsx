import React from 'react'
import ChangeProfileBad from '../../components/ChangeProfileBad'

const ProfileBad = (props) => {
  return (
    <div>
      <h1>This is ProfileBad, and User is: {props.usernameBad}</h1>

      <ChangeProfileBad setUsernameBad={props.setUsernameBad}/>
    </div>
  )
}

export default ProfileBad