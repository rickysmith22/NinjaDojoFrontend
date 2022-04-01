import React, {useState} from 'react'
import { navigate } from 'hookrouter'
import Cookies from 'js-cookie'
import yinyangImg from '../../../../static/assets/images/yinyang.png'

function SignUp() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()

        if(name === '' || email === '' || username === '' || password === '' || confirmPassword === '') {
            setError(true)
            setErrorMessage('Error: all fields must be filled in please')
        } else if (password !== confirmPassword) {
            setError(true)
            setErrorMessage('Error: Passwords must match')
        } else {
            fetch('http://127.0.0.1:5000/add/user', {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    username: username,
                    password: password
                })
            })
            .then(response => response.json())
            .then(response => {
                if(response === error) {
                    setError(true)
                    setErrorMessage(errorMessage,"this username is already in use sorry, please try again.")
                } else {
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
            <form onSubmit={handleSubmit}>
                <div className='name'>
                    <input 
                    type="text" 
                    placeholder="Name" 
                    name="name" 
                    value={name} 
                    onChange={(event) => setName(event.target.value)}/>
                </div>
                <div className='email'>
                <input 
                    type="text" 
                    placeholder="Email" 
                    name="email" 
                    value={email} 
                    onChange={(event) => setEmail(event.target.value)}/>
                </div>
                <div className='username'>
                <input 
                    type="text" 
                    placeholder="Username" 
                    name="username" 
                    value={username} 
                    onChange={(event) => setUsername(event.target.value)}/>
                </div>
                <div className='password'>
                    <input 
                    type="password" 
                    placeholder="Password" 
                    name="password" 
                    value={password} 
                    onChange={(event) => setPassword(event.target.value)}/>
                <div className='confirm'>
                    <input 
                    type="password" 
                    placeholder="Confirm Password Please and Thank You" 
                    name="confirmPassword" 
                    value={confirmPassword} 
                    onChange={(event) => setConfirmPassword(event.target.value)}/>
                </div>
                </div> 
                <div className='btn'>   
                    <button className="button" type='submit'>Signup</button>
                </div>
            </form>
            <div className="yinyang-img">
                <img src={yinyangImg} />
            </div>
            <div>
                {errorMessage}
            </div>
        </div>
    )
}

export default SignUp