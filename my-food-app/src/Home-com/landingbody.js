import React from 'react'
import '../landing-body.css';
import Appstore1 from '../Assets/App Store Badge.svg';
import Appstore2 from '../Assets/app-store2.svg';
import Chopstick from '../Assets/chopstick.png';
import Meatball from '../Assets/meat-ball.png';
import Burger from '../Assets/burger.png';
import Pasta from '../Assets/pasta.png';

export default function landingBody() {
  return (
    <section className='landing-body'>
      <div className='landing-body-1'>
        <div className='landing-body-1-first'>
        <h1>Order <span>food </span> anytime, anywhere</h1>
        <p>Browse from our list of specials to place your order
           and have food delivered to you in no time. Affordable, tasty and fast!</p>
           <div className='landing-body-1-assets'>
           <img src={Appstore1} alt=''/>
           <img src={Appstore2} alt=''/>
           </div>
        </div>

           <div className='landing-body-1-second'>
              <img src={Chopstick} alt=''/>
          </div>
      </div>

      {/* second-div */}
      <div className='landing-body-2'>
        <h1>Special Meals of the day!</h1>
        <p>Check our specials of the day and get discounts on all our meals
           and swift delivery to what ever location within Ilorin.</p>
      </div>

      {/* third-div */}
      <div className='landing-body-3'>
        <div className='landing-food'>
        <img src={Pasta} alt=''/>
        <a href='/dashboard'><h6>Stir fry Pasta</h6></a>
        <p>Stir fry pasta yada yada yada because of Sesan</p>
        </div>
        <div className='landing-food'>
        <img src={Meatball} alt=''/>
        <a href=''><h6>Meat Balls</h6></a>
        <p>Stir fry pasta yada yada yada because of Sesan</p>
        </div>
        <div className='landing-food'>
        <img src={Burger} alt=''/>
        <a href=''><h6>Burger</h6></a>
        <p>Stir fry pasta yada yada yada because of Sesan</p>
        </div>
      </div>

      {/* fourth-div */}
      <div className='landing-body-4'>
       <div className='landing-body-con'>
         <h5>Get notified when we update!</h5>
          <p>Get notified when we add new items to our specials menu, update our 
            price list of have promos!</p>
       </div>
       <div className='landing-body-form'>
         <form>
          <input name='email' type="email" placeholder='gregphillips@gmail.com' className='landing-email' required/>
          <input name='submit' type="submit" value="Get Notified" className='landing-submit'/>
         </form>
       </div>
      </div>
      

    </section>
  )
}

