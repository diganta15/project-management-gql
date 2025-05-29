import React from 'react'
import { FaExclamationTriangle } from 'react-icons/fa'

export default function NotFound() {
  return (
   <div className="d-flex flex-column justify-content-center align-items-center mt-5">
    <FaExclamationTriangle className='text-danger' size="5em" />
    <h1>404</h1>
    <p className="lead">Sorry, this page does not exist</p>
   </div>
  )
}
