import React from 'react'
import './portfolio.css'

import img1 from '../../assets/imgs/my-project-1.jpg';
import img2 from '../../assets/imgs/my-project-2.jpg';
import img3 from '../../assets/imgs/my-project-3.jpg';
import img4 from '../../assets/imgs/my-project-4.jpg';
import img5 from '../../assets/imgs/my-project-5.jpg';
import img6 from '../../assets/imgs/my-project-6.jpg';


const projectsData = [
  {
    title: "Portfolio",
    img: img1
  },
  {
    title: "Real-Time Chat App",
    img: img2
  },
  {
    title: "Music Player",
    img: img3
  },
  {
    title: "To Do List",
    img: img4
  },
  {
    title: "Eccomerce",
    img: img5
  },
  {
    title: "Instagram Clone",
    img: img6
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Let's preview</h5>
      <h2>My Projects</h2>
      <div className="portfolio container">
        {
          projectsData.map((item, index) => (
            <div className="portfolio__item" key={index}>
              <div className="portfolio__item--img">
                <img src={item.img} alt={item.title} />
              </div>
              <div className="portfolio__item--title">
                <p>{item.title}</p>
              </div>
              <div className="portfolio__item--action">
                <div className="portfolio__item--action__item">
                  <a href="https://github.com/" target="_blank">Github</a>
                </div>
                <div className="portfolio__item--action__item">
                  <a href="https://github.com/" target="_blank">Demo</a>
                </div>
              </div>
            </div>
          ))
        }

      </div>
    </section>
  )
}

export default Portfolio