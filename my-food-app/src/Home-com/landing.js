import React from 'react';
import '../landing.css';
import Navbar from './navbar';
import LandingBody from './landingbody'   
import Footer from './footer'

export default function landing() {
  return (
    <section>
      <Navbar />
      <LandingBody />
      <Footer />

    </section>  
  )
}
