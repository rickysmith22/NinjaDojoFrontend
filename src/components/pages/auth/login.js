import React, {useState} from 'react'
import { navigate } from 'hookrouter'
import Cookies from 'js-cookie'
import yinyangImg from '../../../../static/assets/images/yinyang.png'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()

        if(username === '' || password === '') {
            setError(true)
            setErrorMessage('Error: all fields must be completed')
        } else {
            fetch('http://127.0.0.1:5000/user/verify', {
                method: "POST",
                credentials: "same-origin",
                headers: {
                    'content-type': 'application/json',
                    "Access-Control-Allow-Origin": "*"
                },
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            })
            .then(response => response.json())
            .then(response => {
                if(response === 'User NOT verified') {
                    setError(true)
                    setErrorMessage("Error: the username you have selected has been taken")
                } else if(response === 'User has been verified') {
                    setError(false)
                    setErrorMessage('')
                    Cookies.set('username', username)
                    navigate('/')
                }
            })
        }
    }


    return (
        <div className="signup-container">
            <div className='signup-form'>
                <form onSubmit={handleSubmit}>
                    <div className='username'>
                        <input 
                        type="text" 
                        placeholder="input username" 
                        name="username" 
                        value={username} 
                        onChange={(event) => setUsername(event.target.value)}/>
                    </div>
                    <div className='password'>
                        <input 
                        type="password" 
                        placeholder="input password" 
                        name="password" 
                        value={password} 
                        onChange={(event) => setPassword(event.target.value)}/>
                    </div>
                    <div className='btn'>
                        <button className="button">Login</button>
                    </div>
                </form>
            </div>
            <div className="yinyang-img">
                <img src={yinyangImg} />
            </div>
        </div>
    )
}

export default Login