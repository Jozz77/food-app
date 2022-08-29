import React from 'react'
import NavPic from '../Assets/Nav-pic.svg';
import Chopstick from '../Assets/chopstick.png';
import Meatball from '../Assets/meat-ball.png';
import Burger from '../Assets/burger.png';
import Pasta from '../Assets/pasta.png';

export default function dashboardBody() {
  return (
    <section className='dashboard'>
        <div className='dashboard-nav'>
            <div className='dash-nav-1'>
                <img src={NavPic} alt=''/>
                <h1>Lilies</h1>
            </div>
            <div className=''>
                <p></p>
                <p>Dashboard</p>
            </div>
            <div className=''>
                <p></p>
                <p>Your Profile</p>
            </div>
            <div className=''>
                <p></p>
                <p>Orders</p>
            </div>
            <div className=''>
                <p></p>
                <p>Your Cart</p>
            </div>
        </div>

        <div className='dashboard-body'>
            <div className='dashboard-1'>
                <div className='dashboard-1-first'>
                    <h1>Good morning, Derrick!</h1>
                    <p>What delicious meal are you craving today?</p>
                </div>

                <div className='dashboard-1-second'>
                    <img src={Pasta} alt=''/>
                </div>
            </div>
            <div className='dashboard-2'>
            <div className='dash-food'>
                    <img src={Burger} alt=''/>
                    <h3>Stir Fry Pasta</h3>
                    <h6>The in-house pasta and chicken by chef Moose</h6>
                    <div className='dash-price'>
                        <p>N1,000.00</p>
                        <p className='span'>Add to cart</p>
                    </div>
                </div>
                <div className='dash-food'>
                    <img src={Chopstick} alt=''/>
                    <h3>Stir Fry Pasta</h3>
                    <h6>The in-house pasta and chicken by chef Moose</h6>
                    <div className='dash-price'>
                        <p>N1,000.00</p>
                        <p className='span'>Add to cart</p>
                    </div>
                </div>
                <div className='dash-food'>
                    <img src={Meatball} alt=''/>
                    <h3>Stir Fry Pasta</h3>
                    <h6>The in-house pasta and chicken by chef Moose</h6>
                    <div className='dash-price'>
                        <p>N1,000.00</p>
                        <p className='span'>Add to cart</p>
                    </div>
                </div>
                <div className='dash-food'>
                    <img src={Burger} alt=''/>
                    <h3>Stir Fry Pasta</h3>
                    <h6>The in-house pasta and chicken by chef Moose</h6>
                    <div className='dash-price'>
                        <p>N1,000.00</p>
                        <p className='span'>Add to cart</p>
                    </div>
                </div>
                <div className='dash-food'>
                    <img src={Burger} alt=''/>
                    <h3>Stir Fry Pasta</h3>
                    <h6>The in-house pasta and chicken by chef Moose</h6>
                    <div className='dash-price'>
                        <p>N1,000.00</p>
                        <p className='span'>Add to cart</p>
                    </div>
                </div>
                <div className='dash-food'>
                    <img src={Burger} alt=''/>
                    <h3>Stir Fry Pasta</h3>
                    <h6>The in-house pasta and chicken by chef Moose</h6>
                    <div className='dash-price'>
                        <p>N1,000.00</p>
                        <p className='span'>Add to cart</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
