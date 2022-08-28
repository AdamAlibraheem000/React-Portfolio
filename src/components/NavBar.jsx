import React from 'react'

function NavBar() {
  return (
    <div className='nav-styling'>
    <nav className="menu-wrap">
        <input type="checkbox" className="toggler"></input>
        <div className="hamburger"><div></div></div>
        <div className="menu">
            <div>
                <div>
                    <ul id='menu-flex'>
                    <li><a id='linkOne' href="https://github.com/AdamAlibraheem000" target="_blank" rel="noreferrer noopener" >Github</a></li>
                    <li><a id='linkTwo' href="https://www.linkedin.com/in/adam-al-ibraheem/" target="_blank" rel="noreferrer noopener">LinkedIn</a></li>
                    <li><a id='linkThree' href="https://drive.google.com/file/d/1P0hwzn2zYIBbVQAoKzZVAuzBZnCwNYcU/view?usp=sharing" target="_blank" rel="noreferrer noopener" >Resume</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
    </div>
  )
}

export default NavBar