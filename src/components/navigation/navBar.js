import React from 'react'
import { A } from 'hookrouter'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function NavBar(props) {
    return (
        <div className="nav-container">
            <div className="nav-link-container">
                <div className='left-side'>
                    <div className='nav-link-icon'>
                        <A className="nav-link-tag" href="/">
                            <FontAwesomeIcon icon='fa-yin-yang' />
                        </A>
                    </div>
                </div>
                <div className='right-side'>
                <div className="nav-link">
                        <A className="nav-link-tag" href="/about">About</A>
                    </div>
                    <div className="nav-link">
                        <A className="nav-link-tag" href="/cards">Cards</A>
                    </div>
                    <div className="nav-link">
                        {props.loggedIn ? null : < A href = '/login' > 
                            LOGIN
                        </A>}
                        {props.loggedIn === true ? < A onClick = {() => props.logout()} href = '/' >
                            LOGOUT
                        </A> : null }
                    </div>
                    <div className="nav-link">
                        <A className="nav-link-tag" href="/signup">Sign Up</A>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar