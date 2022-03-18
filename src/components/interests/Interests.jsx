import React from 'react'
import './interests.css'
import {BiCheck} from 'react-icons/bi'

const Interests = () => {
  return (
    <section id='interests'>
        <h5>What my intersts are</h5>
        <h2>Working On My Interests</h2>

        <div className="container services_container">
            <article className="service">
                <div className="service__head">
                    <h3>UI/UX Design</h3>
                </div>

                <ul className="service__list">
                    <li>
                        <BiCheck className ='service__list-icon'/>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </li>
                    <li>
                        <BiCheck className ='service__list-icon'/>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </li>
                    <li>
                        <BiCheck className ='service__list-icon'/>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </li>
                    <li>
                        <BiCheck className ='service__list-icon'/>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </li>
                </ul>
            </article>
            <article className="service">
                <div className="service__head">
                    <h3>Machine Learning</h3>
                </div>

                <ul className="service__list">
                    <li>
                        <BiCheck className ='service__list-icon'/>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </li>
                    <li>
                        <BiCheck className ='service__list-icon'/>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </li>
                    <li>
                        <BiCheck className ='service__list-icon'/>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </li>
                    <li>
                        <BiCheck className ='service__list-icon'/>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </li>
                </ul>
            </article>
            <article className="service">
                <div className="service__head">
                    <h3>Game Development</h3>
                </div>

                <ul className="service__list">
                    <li>
                        <BiCheck className ='service__list-icon'/>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </li>
                    <li>
                        <BiCheck className ='service__list-icon'/>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </li>
                    <li>
                        <BiCheck className ='service__list-icon'/>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </li>
                    <li>
                        <BiCheck className ='service__list-icon'/>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </li>
                </ul>
            </article>
        </div>
    </section>
  )
}

export default Interests
