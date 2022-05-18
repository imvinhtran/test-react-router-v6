import React from 'react'
import { Outlet } from 'react-router-dom'

const NewTeamForm = () => {
  return (
    <div>
    <h1>NewTeamForm</h1>
    <Outlet></Outlet>
    </div>
  )
}

export default NewTeamForm