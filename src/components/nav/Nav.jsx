import React, { useState, useEffect } from 'react'
import './nav.css'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { AiOutlineSafetyCertificate } from 'react-icons/ai'
import { BiMessageSquareDetail } from 'react-icons/bi'


//Geight of page body 
var body = document.body,
  html = document.documentElement;

var height = Math.max(body.scrollHeight, body.offsetHeight,
  html.clientHeight, html.scrollHeight, html.offsetHeight);

  height *= 7.14;

console.log(height);


const Nav = () => {
  /*-----------------------------*/
  //https://www.webtips.dev/webtips/react-hooks/element-in-viewport
  /*-----------------------------*/
  //============================================ Scrolling update =========================
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  console.log(window.pageYOffset)
  //=======================================================================================
  const [activeNav, setActiveNav] = useState('#')
  useEffect(() => {
    if (window.pageYOffset <= 100) {
      setActiveNav('#');
    } else if (window.pageYOffset >= 600 && window.pageYOffset < 1300) {
      setActiveNav('#about');
    } else if (window.pageYOffset >= 1300 && window.pageYOffset < 3500) {
      setActiveNav('#experience');
    }
    else if (window.pageYOffset >= 3500 && window.pageYOffset < 4200) {
      setActiveNav('#certificates');
    } else if (window.pageYOffset > 5300) {
      setActiveNav('#contact');
    }
  });


  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook /></a>
      <a href="#certificates" onClick={() => setActiveNav('#certificates')} className={activeNav === '#certificates' ? 'active' : ''} ><AiOutlineSafetyCertificate /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>

    </nav>
  )
}

export default Nav
