import React, { useEffect } from 'react'
import './Hero.scss'


import AOS from "aos";
import "aos/dist/aos.css"; // Импорт стилей AOS



const Hero = () => {

    useEffect(() => {
        AOS.init({
          duration: 2000, // Длительность анимации в миллисекундах
          once: true,     // Анимация срабатывает только один раз при скролле
        });
      }, []);
    

  return (
    <>
      <section>
        <div className="container">
             
            <div className="hero__wrapper">
                <div data-aos="zoom-out-right" data-aos-delay="50" className="hero__box"></div>
                <div data-aos="zoom-out-up" data-aos-delay="100" className="hero__box"></div>
                <div data-aos="zoom-out-left" data-aos-delay="150" className="hero__box"></div>
            </div> 
            <div className="hero__wrapper">
                <div data-aos="zoom-out-right" data-aos-delay="200" className="hero__box"></div>
                <div data-aos="zoom-out-up" data-aos-delay="250" className="hero__box"></div>
                <div data-aos="zoom-out-left" data-aos-delay="300" className="hero__box"></div>
            </div> 
            <div className="hero__wrapper">
                <div data-aos="zoom-out-right" data-aos-delay="50" className="hero__box"></div>
                <div data-aos="zoom-out-up" data-aos-delay="100" className="hero__box"></div>
                <div data-aos="zoom-out-left" data-aos-delay="150" className="hero__box"></div>
            </div> 
            <div className="hero__wrapper">
                <div data-aos="zoom-out-right" data-aos-delay="200" className="hero__box"></div>
                <div data-aos="zoom-out-up" data-aos-delay="250" className="hero__box"></div>
                <div data-aos="zoom-out-left" data-aos-delay="300" className="hero__box"></div>
            </div> 
            <div className="hero__wrapper">
                <div data-aos="zoom-out-right" data-aos-delay="50" className="hero__box"></div>
                <div data-aos="zoom-out-up" data-aos-delay="100" className="hero__box"></div>
                <div data-aos="zoom-out-left" data-aos-delay="150" className="hero__box"></div>
            </div> 
            <div className="hero__wrapper">
                <div data-aos="zoom-out-right" data-aos-delay="200" className="hero__box"></div>
                <div data-aos="zoom-out-up" data-aos-delay="250" className="hero__box"></div>
                <div data-aos="zoom-out-left" data-aos-delay="300" className="hero__box"></div>
            </div> 
        </div>
      </section>
    </>
  )
}

export default Hero
