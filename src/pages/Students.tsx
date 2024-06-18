import React from 'react'
import { Link } from 'react-router-dom'

const Students: React.FC= () => {
  return (
    <>
      <button title="Create Student">
        <Link to="/student/Create-Student">CreateStudent</Link>
      </button>
      
    </>
  )
}

export default Students
