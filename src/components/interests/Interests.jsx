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
                        <p>The best interfaces are almost invisible to the user.</p>
                    </li>
                    <li>
                        <BiCheck className ='service__list-icon'/>
                        <p>Creating consistent and common UI elements.</p>
                    </li>
                    <li>
                        <BiCheck className ='service__list-icon'/>
                        <p>Understanding page layout, with strategic placement of colors and textures.</p>
                    </li>
                    <li>
                        <BiCheck className ='service__list-icon'/>
                        <p>Using Figma to create clean and free flowing desgin.</p>
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
                        <p>Producing project outcomes and isolate issues that need resolving.</p>
                    </li>
                    <li>
                        <BiCheck className ='service__list-icon'/>
                        <p>Analyse large, complex datasets to extract insights and decide on the appropriate technique</p>
                    </li>
                    <li>
                        <BiCheck className ='service__list-icon'/>
                        <p>Collaborate with data engineers to build data and model pipelines.</p>
                    </li>
                    <li>
                        <BiCheck className ='service__list-icon'/>
                        <p>Manage the infrastructure and data pipelines needed to bring code to production</p>
                    </li>
                </ul>
            </article>
            <article className="service">
                <div className="service__head">
                    <h3>Block Chain</h3>
                </div>

                <ul className="service__list">
                    <li>
                        <BiCheck className ='service__list-icon'/>
                        <p>Blockchain deployment and development with web3, solidity, cakeshop and truffle.</p>
                    </li>
                    <li>
                        <BiCheck className ='service__list-icon'/>
                        <p>Smart contracts and custom dapp frameworks like OpenZeppelin.</p>
                    </li>
                    <li>
                        <BiCheck className ='service__list-icon'/>
                        <p>Application and data science engineering using Python..</p>
                    </li>
                    <li>
                        <BiCheck className ='service__list-icon'/>
                        <p>Web platforms using Phoneix / Elixir and serverless architecture.</p>
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
                        <p>Understanding different stages of game design.</p>
                    </li>
                    <li>
                        <BiCheck className ='service__list-icon'/>
                        <p>Research trends and competition to keep mechanics up to date.</p>
                    </li>
                    <li>
                        <BiCheck className ='service__list-icon'/>
                        <p>Implementing multiplayer using networking to imrove social networks.</p>
                    </li>
                    <li>
                        <BiCheck className ='service__list-icon'/>
                        <p>Understanding and implementing lag conpensation to ensure smooth gameplay.</p>
                    </li>
                </ul>
            </article>
        </div>
    </section>
  )
}

export default Interests
