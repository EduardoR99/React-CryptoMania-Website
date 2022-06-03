import React from 'react'
import './style.css'
import Crypto from '../../assets/hero-img.png'
const Hero = () => {
  return (
    <div className='hero'>
        <div className='container'>
            <div className='let-side'>
                <p>Buy & Sell Crypto 24/7 using your retirement account</p>
                <h1>Invest un Cryptocurrency with your IRA</h1>
                <p>Buy, Sell, and store hundred of Cryptocurrencies</p>
                <div className='input-container'>
                    <input type='email' placeholder='Enter your email'/>
                    <button className='btn'>Learn More</button>
                </div>
            </div>
            <div className='right-side'>
                <div className='img-contaiener'>
                    <img src={Crypto} alt=''/>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Hero