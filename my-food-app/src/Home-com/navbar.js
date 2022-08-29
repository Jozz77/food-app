import React, { Component } from 'react';
import '../navbar.css'
import navPic from '../Assets/Nav-pic.svg';

export default class navbar extends Component {
  render() {
    return (
      <nav>
        <div className='nav-1'>
            <img src={navPic} alt=''/>
            <p>Lilies</p>
            
        </div>

        <div className='nav-2'>
           <a href='/'>Home</a>
            <a href='/login'>Login</a>
            <a href='/register' className='nav-button'>Sign Up</a>
        </div>

      </nav>
    )
  }
}
