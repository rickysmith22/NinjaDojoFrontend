import React, {useEffect, useState} from 'react'
import Cookies from 'js-cookie'
import dojoImg from '../../../static/assets/images/dojo.png'


function Home(props) {
    return (
        <div className="home-container">
            <h1>Welcome {props.loggedIn ? Cookies.get('username') : ''}</h1>
            <div className="home-img">
                <img src={dojoImg} />
            </div>
            <div home-btns>            
                {props.loggedIn ? null :<a href='./login'>
                    <button className='login-btn'>LOGIN</button>
                </a>}
                <a href='./cards'>
                    <button className='cards-btn'>CARDS</button>
                </a>
            </div>
        </div>
    )
}

export default Home