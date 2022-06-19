import React from 'react'
import {Link} from 'react-router-dom'


function Home() {


  return (
    <>
    <div className='nav-styling'>
    <nav className="menu-wrap">
        <input type="checkbox" className="toggler"></input>
        <div className="hamburger"><div></div></div>
        <div className="menu">
            <div>
                <div>
                    <ul>
                    <li><a href="https://github.com/AdamAlibraheem000" target="_blank" rel="noreferrer noopener" >Github</a></li>
                    <li><a href="https://www.linkedin.com/in/adam-al-ibraheem/" target="_blank" rel="noreferrer noopener">LinkedIn</a></li>
                    <li><a href="https://drive.google.com/file/d/10m1LROaTsC4cUsUg8q-hBZxRT9yeA8ej/view?usp=sharing" target="_blank" rel="noreferrer noopener" >Resume</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
    </div>
    <div className="home-styling">
      <h1 className='title-styling'>Full Stack Developer</h1>
      <h1 className='name-styling'>Adam Al-ibraheem</h1>
      <p className='about-styling'>Passionate Full Stack Developer. Former Information Systems graduate from Wright State University and Ohio State University Coding Bootcamp alumni. Continuing desire to learn new technologies and solve problems within the field of development.</p>
      <Link to="/Portfolio" className='port-btn'>Portfolio</Link>

      
    </div>
    </>
  )
}

export default Home