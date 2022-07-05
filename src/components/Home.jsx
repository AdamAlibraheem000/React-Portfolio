import React from 'react'
import {Link} from 'react-router-dom'


function Home() {
  return (
    <>
    <div className="home-styling">
      <h1 className='title-styling'>Full Stack Developer</h1>
      <h1 className='name-styling'>Adam Al-ibraheem</h1>
      <p className='about-styling'>Passionate Full Stack Developer. Former Information Systems graduate from Wright State University and Ohio State University Coding Bootcamp alumni. Continuing desire to learn new technologies and solve problems within the field of development.</p>
      <Link to="/Portfolio" className='port-btn'>$cd Portfolio</Link>
    </div>
    </>
  )
}

export default Home