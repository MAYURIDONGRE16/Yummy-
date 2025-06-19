import React from 'react'
import { Link as ScrollLink } from 'react-scroll';
import { Dropdown } from 'bootstrap/dist/js/bootstrap.min'
import './App.css'

const Navbar = () => {
  return (
    <>
           
     <section>
           <div className="container-fluid">
                <div className="row">
    
                 {/*  navbar section  */}
                    <div className=" col-md-12 bg-light  position-fixed sticky-top"  >
   
                      <div className="row p-3">
                               <div className="col-md-2">
                                  <h2 className="mt-2 fw-bold">Yummy <sub className="text-danger">.</sub></h2>
                               </div>
  
                               <div className="col-md-8">
                                   <nav className="navbar navbar-expand-lg navbar-light fw-bold">
 
                                       <button className="navbar-toggler" data-bs-target="#nav" data-bs-toggle="collapse"><span
                                          className="navbar-toggler-icon"></span></button>
  
                                       <div className="collapse navbar-collapse" id="nav">
                                          <ul className="navbar-nav m-auto text-light">
                                              <li className="nav-item mx-3"><ScrollLink to='home' smooth={true} duration={500} className="nav-link home">Home</ScrollLink></li>
                                              <li className="nav-item mx-3"><ScrollLink to='about'smooth={true} duration={500} className="nav-link about" >About</ScrollLink></li>
                                              <li className="nav-item mx-3"><ScrollLink to='menu'smooth={true} duration={500} className="nav-link menu" >Menu</ScrollLink></li>
                                              <li className="nav-item mx-3"><ScrollLink to='event' smooth={true} duration={500} className="nav-link event" >Events</ScrollLink></li>
                                              <li className="nav-item mx-3"><ScrollLink to='chefs' smooth={true} duration={500} className="nav-link chef" >Chefs</ScrollLink></li>
                                              <li className="nav-item mx-3"><ScrollLink to='gallary' smooth={true} duration={500} className="nav-link gallary">Gallary</ScrollLink></li>
 
                                              <li className="nav-item mx-2 dropdown" data-bs-toggle="dropdown">
                                                   <ScrollLink to='*' className="nav-link dropdown-toggle dropdown">Dropdown</ScrollLink>
 
                                                   <ul className="dropdown-menu">
                                                        <li className="dropdown-item"><ScrollLink to="#" className=" nav-link">Dropdown 1</ScrollLink></li>

                                                     <li className="dropdown-item dropdown" data-bs-toggle="dropdown">
                                                         <ScrollLink to="#" className=" nav-link dropdown-toggle">Deep Dropdown 1</ScrollLink>

                                                          <ul className="dropdown-menu  d-menu" >
                                                             <li className="dropdown-item"><ScrollLink to="#" className="nav-link"> Deep Dropdown
                                                                 1</ScrollLink></li>
                                                             <li className="dropdown-item"><ScrollLink to="#" className="nav-link"> Deep Dropdown
                                                                 2</ScrollLink></li>
                                                             <li className="dropdown-item"><ScrollLink to="#" className="nav-link">Deep Dropdown
                                                                  3</ScrollLink></li>
                                                             <li className="dropdown-item"><ScrollLink to="#" className="nav-link">Deep Dropdown
                                                                  4</ScrollLink></li>
                                                             <li className="dropdown-item"><ScrollLink to="#" className="nav-link">Deep Dropdown
                                                                5</ScrollLink></li>
                                                         </ul>
                                                     </li>

                                                   <li className="dropdown-item"><ScrollLink to="#" className=" nav-link" >Dropdown 3</ScrollLink></li>
                                                   <li className="dropdown-item"><ScrollLink to="#" className=" nav-link">Dropdown 4</ScrollLink></li>
                                                   <li className="dropdown-item"><ScrollLink to="#" className=" nav-link">Dropdown 5</ScrollLink></li>

                                                  </ul>
                                               </li>
                                                <li className="nav-item mx-3"><ScrollLink to="contact" smooth={true} duration={500} className="nav-link contact" >Contact</ScrollLink></li>
                                           </ul>
                                       </div>
                                   </nav>
                                </div>
                            <div className="col-md-2 text-danger-lg text-left-sm">
                               <ScrollLink to='bookatable' smooth={true} duration={500} className='nav-link'>
                                   <button className="btn btn-danger px-4 mt-2 fw-bold book-table">Book A Table</button>
                                </ScrollLink>
                            </div>
                        </div>
                    </div> 
            
                </div>
            </div>
      </section>
   </>
  )
}

export default Navbar
