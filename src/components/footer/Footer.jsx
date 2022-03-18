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
        <li><a href="#">About</a></li>
        <li><a href="#">Experience</a></li>
        <li><a href="#">Interests</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Certificates</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href= "https://facebook.com"><ImFacebook/></a>
        <a href= "https://instagram.com"><FiInstagram/></a>
        <a href= "https://twitter.com"><IoLogoTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Pushkal Mondal. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
