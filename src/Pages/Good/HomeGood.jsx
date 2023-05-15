import React,{ useContext} from 'react'
import {AppContext} from '../../App'

const HomeGood = () => {
  // make func untuk memanggil useContext
  const {usernameGood} = useContext(AppContext)

  return (
    <h1>This is HomeGood page and user is: {usernameGood} </h1>
  )
}

export default HomeGood