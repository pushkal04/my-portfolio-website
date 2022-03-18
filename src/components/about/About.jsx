import React from 'react'
import './about.css'
import ME from '../../assets/me_about.jpeg'
import {FaAward} from 'react-icons/fa'
import {AiOutlineSafetyCertificate} from 'react-icons/ai'
import {MdOutlineLibraryBooks} from 'react-icons/md'


const About = () => {
  var currentTime = new Date()
  var year = currentTime.getFullYear()
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image"/>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon"/>
              <h5>Experience</h5>
              <small>{year - 2019}+ Years Of Coding</small>
            </article>
            <article className="about__card">
              <AiOutlineSafetyCertificate className="about__icon"/>
              <h5>Courses</h5>
              <small>Complete certification</small>
            </article>
            <article className="about__card">
              <MdOutlineLibraryBooks className="about__icon"/>
              <h5>Projects</h5>
              <small>Vibrant tech stack</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dolorem neque aliquam omnis voluptatem, 
            ipsum libero repellat nisi inventore autem eius veritatis dolore voluptatum architecto, 
            eum quas quidem, nulla optio.
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div> 
    </section>
  )
}

export default About
