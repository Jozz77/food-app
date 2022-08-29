import React from 'react'
import '../loginBody.css'
import Login from "../Assets/login.png"
import Navbar from '../Home-com/navbar'
import Footer from '../Home-com/footer'

export default function loginBody() {
  return (
    <div>
        <Navbar />
        <section className='login'>
            <div className='login-1'>
            <img src={Login} alt=''/>
            </div>
            <div className='login-2'>
                <h1>Welcome Back!</h1>
                <form>
                <input name='email' type="email" placeholder='Your Email address' className='login-email' required/>
                <input name='password' type="password"  className='login-password' required/>
                <input name='submit' type="submit" value='LOGIN'  className='login-submit'/>
                </form>
                <div className='create'>
                    <span><a href='/register'>Create an account</a></span>
                    <span>Forgot Passoword</span>
                </div>
            </div>
        </section>
        <Footer />
    </div>
  )
}
