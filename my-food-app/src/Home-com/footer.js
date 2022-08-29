import React, { Component } from 'react'
import'../footer.css'
import Appstore1 from '../Assets/App Store Badge.svg';
import Appstore2 from '../Assets/app-store2.svg';
import Twitter from '../Assets/Path.svg';
import Instagram from '../Assets/Path (1).svg';
import Youtube from '../Assets/Path (2).svg';

export default class footer extends Component {
  render() {
    return (
      <section className='footer'>
        <div className='first-footer'>
        <div className='footer-1'>
            <h4>Company</h4>
            <a href=''>About Us</a>
            <a href=''>Careers</a>
            <a href=''>Contact Us</a>
        </div>
        <div className='footer-1'>
            <h4>Support</h4>
            <a href=''>Help Centers</a>
            <a href=''>Safety Center</a>
            
        </div>
        <div className='footer-1'>
            <h4>Legal   </h4>
            <a href=''>Cookies Policy</a>
            <a href=''>Privacy Policy</a>
            <a href=''>Terms of Service</a>
            <a href=''>Dispute resolution</a>
        </div>
        <div className='footer-2'>
            <h4>Install App</h4>
            <div className='footer-img'>
            <a href=''><img src={Appstore1} alt=''/></a>
            <a href=''> <img src={Appstore2} alt=''/></a>
            </div>
        </div>
        </div>
        <hr></hr>
        <div className='second-footer'>
            <p>© 2021 LILIES, All rights reserved</p>
            <div className='footer-icons'>
            <a href=''> <img src={Instagram} alt=''/></a>
            <a href=''> <img src={Twitter} alt=''/></a>
            <a href=''> <img src={Youtube} alt=''/></a>
            </div>
        </div>
        
       
        </section>
    )
  }
}
