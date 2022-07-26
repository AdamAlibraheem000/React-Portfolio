import React from 'react'
import {Link} from 'react-router-dom'
import sweeneys from '../imgs/sweeneys.JPG'
import jobHunter from '../imgs/jobHunter.JPG'
import pinItPic from '../imgs/pinItPic.JPG'
import weatherDashBoard from '../imgs/weatherDashBoard.JPG'

function Portfolio() {
  return (
    <>
    <section className='portfolio-flex'>
    
        <div id='port-title'>
            <h1 className="port-h1">Portfolio</h1>
        </div>
        <div className='img-grid'>
            <div><a href="https://www.sweeneyseafood.com/" target="_blank" rel='noreferrer noopener'>
                <img src={sweeneys} alt="sweeney's" />
                <h3 >Sweeney's Seafood Bar & Grill</h3>
                <p className='p-modify p-font'>Updated local restaurant's website using the MERN stack.</p>
                <p className="p-font">React Express.js Node.js MongoDB</p>
                </a>
            </div>
            <div>
                <a href="https://damp-atoll-38354.herokuapp.com/" target="_blank" rel='noreferrer noopener'>
            <img src={pinItPic} alt="pinIt" />
                <h3>Pin-It!</h3>
                <p className="p-font">An idea board where users can look at ideas to get inspiration for their next big project or trip.</p>
                <p className="p-font">Node.js Express.js Sequelize MySQL Handlebars.js</p>
                </a>
            </div>
            <div>
                <a href="https://ileachy.github.io/Job-hunter/" target="_blank" rel='noreferrer noopener'>
                <img src={jobHunter} alt="jobHunter" />
                <h3>The Job Hunter</h3>
                <p className="p-font">Job search engine that allows a client to search for both civilian and government/military jobs in one place by using job title and location information.</p>
                <p className="p-font">HTML CSS Javascript Third-Party APIs</p>
                </a>
            </div>
            <div><a href="https://adamalibraheem000.github.io/weather-dashboard/" target="_blank" rel='noreferrer noopener'>
                <img src={weatherDashBoard} alt="weatherDashBoard" />
                <h3 >Weather DashBoard</h3>
                <p className='p-modify p-font'>Weather App that pulls forecast data from Open Weather API</p>
                <p className="p-font">HTML CSS Javascript Third-Party API</p>
                </a>
            </div>
            </div>
            
            <Link to="/" id="port-link" className='port-btn-2'>$cd Home</Link>
    </section>
    </>
  )
}

export default Portfolio