import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/path_finding.png'
import IMG2 from '../../assets/foodOrdering.png'
import IMG3 from '../../assets/NetworkingPython.png'

const data = [
  {
    id: 1,
    img: IMG1,
    title: 'Path finding visualization',
    github: 'https://github.com/pushkal04/Path-Finding-Visualizer',
    demo: 'https://github.com/pushkal04/Path-Finding-Visualizer'
  },
  {
    id: 2,
    img: IMG2,
    title: 'Food ordering app',
    github: 'https://github.com/pushkal04/food-delivery-app',
    demo: 'https://github.com/pushkal04/food-delivery-app'
  },
  {
    id: 3,
    img: IMG3,
    title: 'Python networking',
    github: 'https://github.com/pushkal04/Multiplayer-Snake-game',
    demo: 'https://github.com/pushkal04/Multiplayer-Snake-game'
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, img, title, github, demo}) => {
            return(
        <article key = {id} className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={img} alt ={title}/>
          </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
          <a href={github} className="btn" target='_blank'>Github</a>
          <a href={demo} className="btn btn-primary" target='_blank'>Live Demo</a>
          </div>
        </article>
              
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio
