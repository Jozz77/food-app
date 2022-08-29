import React from 'react'
import '../registerBody.css'
import Navbar from '../Home-com/navbar'
import Footer from '../Home-com/footer'
import Register from '../Assets/register.png'

export default function registerBody() {
  return (
    <div>
        <Navbar />
         <section className='registers'>
            <div className='register-1'>
            <img src={Register} alt=''/>
            </div>
            <div className='register-2'>
                <h1>Welcome to Lilies!</h1>
                <form>
                <input name='name' type="text" placeholder='Your First Name' className='register-name' required/>
                <input name='email' type="email" placeholder='Your Email address' className='register-email' required/>
                <input name='password' type="password"  className='register-password' required/>
                <input name='submit' type="submit" value='SIGN UP'  className='register-submit'/>
                </form>
                <div className='register-create'>
                    <span>Already have an account.</span>
                    <span><b><a href='/login'>LOGIN</a></b> </span>
                    
                </div>
            </div>
        </section>
        <Footer />
    </div>
  )
}
