import React from 'react'
import {Link as ScrollLink } from 'react-scroll'

const Home = () => {
  return (
    <>   
      <div className="col-md-12 p-5" style={{backgroundColor:'#F2F2F2 ',marginTop:'90px',zindex: '-1 '}} id='home'>
        <div className="row" id="home">
          <div className="col-md-6  p-5">
            <h1 className="display-4 fw-600 aos-init aos-animated" data-aos="fade-up" style={{fontvariant: 'small-caps'}}>
               Enjoy Your Healthy <br/>
                Delicious Food
   
            </h1>
            <p className="blockquote my-3 aos-init aos-animated" data-aos="fade-up" data-aos-delay="100">We are team of talented designers making websites with Bootstrap</p>
     
            <div className="mt-4 aos-animated aos-init" data-aos="fade-up" data-aos-delay="200">
                <ScrollLink to='bookatable' smooth={true} duration={500}><button className="btn btn-danger px-4 fw-bold " 
                    style={{borderRadius: '20px',backgroundcolor: '#CE1212 !important'}}>Book A Table</button></ScrollLink>
                <button className="btn btn-light px-4 fw-bold watch"  style={{borderRadius: '20px'}}>
                  <a href="https://www.youtube.com/watch?v=V7f98aduVJ8" className="pulsating-play-btn m-auto">
                     <i className="bi bi-youtube  me-2 " style={{color: '#CE1212 !important'}}></i>Watch
                    Video</a></button>
            </div>
          </div>
          <div className="col-md-6  text-center aos-init aos-animated" data-aos="zoom-out">
              <img src="images/hero-img.png" className="img-fluid foodImage " alt="" style={{height: '490px'}}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
