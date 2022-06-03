import React, { useState, useEffect } from 'react';
import { FiArrowUpRight, FiArrowDownRight } from 'react-icons/fi'
import './style.css';
import axios from 'axios';

const Featured = () => {
    const [data, setData] = useState()

    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=brl&order=market_cap_desc&per_page=9&page=1&sparkline=false'

    useEffect(() => {
        axios.get(url).then((response) => {
            setData(response.data);
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    

    if (!data) return null;
    return (
        <div className='featured'>
            <div className='container'>
                <div className='left-side'>
                    <h2>Explore top Crypto's like Bitcoin, Ethereum, BNB and others</h2>
                    <p>See all avaible assets: Cryptocurrencies and NFT's</p>
                    <button className='btn'>See More Coins</button>
                </div>
                <div className='right-side'>
                    <div className='card'>
                        <div className='top'>
                            {/*<img src={Bitcoin} alt='btc figure'/>*/}
                            <img src={data[0].image} alt='Coins figures' />
                        </div>
                        <div className=''>
                            <h5>{data[0].name}</h5>
                            <p>R${data[0].current_price.toLocaleString()}</p>
                        </div>

                        {data[0].price_change_percentage_24h < 0 ? (
                            <span className='red'><FiArrowDownRight className='icon'/>
                                {data[0].price_change_percentage_24h.toFixed(2)}%</span>
                        ) : (<span className='green'><FiArrowUpRight className='icon'/>
                            {data[0].price_change_percentage_24h.toFixed(2)}%</span>)}
                    </div>
                    <div className='card'>
                        <div className='top'>
                            {/*<img src={Bitcoin} alt='btc figure'/>*/}
                            <img src={data[1].image} alt='Coins figures' />
                        </div>
                        <div className=''>
                            <h5>{data[1].name}</h5>
                            <p>R${data[1].current_price.toLocaleString()}</p>
                        </div>

                        {data[1].price_change_percentage_24h < 0 ? (
                            <span className='red'><FiArrowDownRight className='icon'/>
                                {data[1].price_change_percentage_24h.toFixed(2)}%</span>
                        ) : (<span className='green'><FiArrowUpRight className='icon'/>
                            {data[1].price_change_percentage_24h.toFixed(2)}%</span>)}
                    </div>
                    <div className='card'>
                        <div className='top'>
                            {/*<img src={Bitcoin} alt='btc figure'/>*/}
                            <img src={data[2].image} alt='Coins figures' />
                        </div>
                        <div className=''>
                            <h5>{data[2].name}</h5>
                            <p>R${data[2].current_price.toLocaleString()}</p>
                        </div>

                        {data[2].price_change_percentage_24h < 0 ? (
                            <span className='red'><FiArrowDownRight className='icon'/>
                                {data[2].price_change_percentage_24h.toFixed(2)}%</span>
                        ) : (<span className='green'><FiArrowUpRight className='icon'/>
                            {data[2].price_change_percentage_24h.toFixed(2)}%</span>)}
                    </div>
                    <div className='card'>
                        <div className='top'>
                            {/*<img src={Bitcoin} alt='btc figure'/>*/}
                            <img src={data[3].image} alt='Coins figures' />
                        </div>
                        <div className=''>
                            <h5>{data[3].name}</h5>
                            <p>R${data[3].current_price.toLocaleString()}</p>
                        </div>

                        {data[3].price_change_percentage_24h < 0 ? (
                            <span className='red'><FiArrowDownRight className='icon'/>
                                {data[3].price_change_percentage_24h.toFixed(2)}%</span>
                        ) : (<span className='green'><FiArrowUpRight className='icon'/>
                            {data[3].price_change_percentage_24h.toFixed(2)}%</span>)}
                    </div>
                    <div className='card'>
                        <div className='top'>
                            {/*<img src={Bitcoin} alt='btc figure'/>*/}
                            <img src={data[4].image} alt='Coins figures' />
                        </div>
                        <div className=''>
                            <h5>{data[4].name}</h5>
                            <p>R${data[4].current_price.toLocaleString()}</p>
                        </div>

                        {data[4].price_change_percentage_24h < 0 ? (
                            <span className='red'><FiArrowDownRight className='icon'/>
                                {data[4].price_change_percentage_24h.toFixed(2)}%</span>
                        ) : (<span className='green'><FiArrowUpRight className='icon'/>
                            {data[4].price_change_percentage_24h.toFixed(2)}%</span>)}
                    </div>
                    <div className='card'>
                        <div className='top'>
                            {/*<img src={Bitcoin} alt='btc figure'/>*/}
                            <img src={data[5].image} alt='Coins figures' />
                        </div>
                        <div className=''>
                            <h5>{data[5].name}</h5>
                            <p>R${data[5].current_price.toLocaleString()}</p>
                        </div>

                        {data[5].price_change_percentage_24h < 0 ? (
                            <span className='red'><FiArrowDownRight className='icon'/>
                                {data[5].price_change_percentage_24h.toFixed(2)}%</span>
                        ) : (<span className='green'><FiArrowUpRight className='icon'/>
                            {data[5].price_change_percentage_24h.toFixed(2)}%</span>)}
                    </div>
                    <div className='card'>
                        <div className='top'>
                            {/*<img src={Bitcoin} alt='btc figure'/>*/}
                            <img src={data[6].image} alt='Coins figures' />
                        </div>
                        <div className=''>
                            <h5>{data[6].name}</h5>
                            <p>R${data[6].current_price.toLocaleString()}</p>
                        </div>

                        {data[6].price_change_percentage_24h < 0 ? (
                            <span className='red'><FiArrowDownRight className='icon'/>
                                {data[6].price_change_percentage_24h.toFixed(2)}%</span>
                        ) : (<span className='green'><FiArrowUpRight className='icon'/>
                            {data[6].price_change_percentage_24h.toFixed(2)}%</span>)}
                    </div>
                    <div className='card'>
                        <div className='top'>
                            {/*<img src={Bitcoin} alt='btc figure'/>*/}
                            <img src={data[7].image} alt='Coins figures' />
                        </div>
                        <div className=''>
                            <h5>{data[7].name}</h5>
                            <p>R${data[7].current_price.toLocaleString()}</p>
                        </div>

                        {data[7].price_change_percentage_24h < 0 ? (
                            <span className='red'><FiArrowDownRight className='icon'/>
                                {data[7].price_change_percentage_24h.toFixed(2)}%</span>
                        ) : (<span className='green'><FiArrowUpRight className='icon'/>
                            {data[7].price_change_percentage_24h.toFixed(2)}%</span>)}
                    </div>
                    <div className='card'>
                        <div className='top'>
                            {/*<img src={Bitcoin} alt='btc figure'/>*/}
                            <img src={data[8].image} alt='Coins figures' />
                        </div>
                        <div className=''>
                            <h5>{data[8].name}</h5>
                            <p>R${data[8].current_price.toLocaleString()}</p>
                        </div>

                        {data[8].price_change_percentage_24h < 0 ? (
                            <span className='red'><FiArrowDownRight className='icon'/>
                                {data[8].price_change_percentage_24h.toFixed(2)}%</span>
                        ) : (<span className='green'><FiArrowUpRight className='icon'/>
                            {data[8].price_change_percentage_24h.toFixed(2)}%</span>)}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Featured