import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {GoMarkGithub} from 'react-icons/go'
import {FiDribbble} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/pushkal-mondal-669810211/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/pushkal04" target="_blank"><GoMarkGithub/></a>
        <a href="https://dribbble.com/pushkal04" target="_blank"><FiDribbble/></a>
      
    </div>
  )
}

export default HeaderSocials
