import React from 'react';
import {Link} from 'react-router-dom'

function PageNotFound() {
  return (
    <div className='home-styling'>
        <h1 className='title-styling'>Page Not Found</h1>
        <Link to="/" className='port-btn'>$cd Home</Link>
    </div>
  )
}

export default PageNotFound