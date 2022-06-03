import React from 'react'
import './style.css'
import Crypto from '../../assets/trade.png'

const Signup = () => {
  return (
    <div className='signup'>
        <div className='container'>
            <div className='left-side'>
                <img src={Crypto} alt='Phone figure'/>
            </div>
            <div className='right-side'>
                <h2>Earn passive income with Crypto</h2>
                <p>Earn up to 12% annual rewards on 30+ digital assets.
                Simply hold your assets in the app to automatically earn 
                rewards at the end of each month with no lockups and no limits.
                </p>
                <div className='input-container'>
                    <input type='email' placeholder='Enter your Email...'/>
                    <button className='btn'>Learn More</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signup