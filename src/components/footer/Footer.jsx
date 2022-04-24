import React from 'react'
import './footer.css'
import {ImFacebook} from 'react-icons/im'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">PUSHKAL</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#interests">Interests</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#certificates">Certificates</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href= "https://www.facebook.com/pushkal.mondal.98/"><ImFacebook/></a>
        <a href= "https://www.instagram.com/pushkal04/?hl=enm"><FiInstagram/></a>
        <a href= "https://twitter.com/MondalPushkal"><IoLogoTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Pushkal Mondal. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
