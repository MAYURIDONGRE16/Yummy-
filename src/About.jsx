import React from 'react'

const About = () => {
  return (
    <>
      <section id="about" className="about section aos-init aos-animated" data-aos="fade-up" style={{ marginBottom: '50px'}}>
            <div className="col-md-12 text-center aos-init aos-animated" data-aos="fade-up">
                <h6 className=" font-weight-lighter" style={{color: '#9e9c9c',   paddingTop: '70px'}}>ABOUT US</h6>
                <p className="display-4" style={{paddingBottom: '60px'}}>
                    <span className='font'>LEARN MORE</span>
                    <span className="description-title">ABOUT US</span>
                </p>
             </div>

            <div className="container" style={{padding: '0px 12px',margin:'0px 60px'}}>
                <div className="row">
                    <div className="col-lg-7 aos-init aos-animated" data-aos="fade-up" data-aos-delay="100">
                        <img src="images/about.jpg" alt=""  title="about " className="img-fluid  "/>
                        <div className="book-a-table">
                            <h3 >Book A Table</h3>
                            <p> + 1 5589 55488 55</p>
                        </div>
                        
                    </div>
                    <div className="col-lg-5 pl-3 aos-init aos-animated" data-aos="fade-up" data-aos-delay="250">
                       <div className="content ">
                            <p style={{fontStyle: 'italic', color: '#9e9c9c'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsam blanditiis unde at, molestias alias.</p>

                            <ul type="none" >
                                <li style={{ paddingBottom:'10px'}} className="circle-fill"><i className="bi bi-check-circle-fill"></i>
                                <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam, eos?</span>
                               </li>
                                <li style={{ paddingBottom:'10px'}} className="circle-fill"><i className="bi bi-check-circle-fill"></i>
                                    <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam, eos?</span>
                                </li>
                                <li style={{ paddingBottom:'10px'}} className="circle-fill"><i className="bi bi-check-circle-fill"></i>
                                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex repellat atque, ipsum illo sit neque explicabo laboriosam doloremque et beatae doloribus incidunt ipsa alias possimus, impedit vitae cum soluta in?</span>
                                </li>
                            </ul>

                            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quas, magnam consequuntur, laudantium impedit odit cupiditate optio nam voluptatem amet molestiae mollitia quos deleniti laborum esse error</p>
                            
                            <div className=' position-relative mt-4' >
                                <img src="images/about-2.jpg" className="img-fluid "/>
                                <div className=" youtube ">
                                  <a href="https://www.youtube.com/watch?v=V7f98aduVJ8" className="pulsating-play-btn play-btn"><i className="bi bi-youtube "></i></a>
                                </div>
                            </div>
                       </div>
                     </div>
                </div>
             </div>
            
      </section>   

      
    </>
  )
}

export default About
