import React from 'react'
import './certificates.css'
import {SiUdemy} from 'react-icons/si'
import {AiOutlineGoogle} from 'react-icons/ai'
import IMG1 from '../../assets/HashCode Certificate1024_1.jpg'
import IMG2 from '../../assets/C ++ certificate1024_1.jpg'

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [{
  id: 1,
  title: 'Google Hash Code',
  sub: <AiOutlineGoogle/>,
  image: IMG1
},
{
  id: 2,
  title: 'C + +',
  sub: <SiUdemy/>,
  image: IMG2

}]

const Certificates = () => {
  return (
    <section id="certificates">
      <h5>My achievements</h5>
      <h2>Certificates</h2>

      <Swiper className="container testimonials__container"
       // install Swiper modules
       modules={[Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}>
        {
          data.map(({id, title, sub, image}) => {
            return(
        <SwiperSlide className="testimonial" key={id}>
          <h3>{title}</h3>
          <small className="text-light">{sub}</small>
          <div className="certificate__image">
            <img className = "certificate__image" src = {image} alt="C++"/>
          </div>
        </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Certificates