import React, {useState} from 'react'
import { navigate } from 'hookrouter'
import Cookies from 'js-cookie'

function AddCard() {
    const [name, setName] = useState('')
    const [ability1, setAbility1] = useState('')
    const [ability2, setAbility2] = useState('')
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()

        if(name === '' || ability1 === '' || ability2 === '') {
            setError(true)
            setErrorMessage('Error: all fields must be filled in please')
        } else {
            fetch('http://127.0.0.1:5000/add/ninjacard', {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    name: name,
                    ability1: ability1,
                    ability2: ability2,
                })
            })
            .then(response => response.json())
            .then(response => {
                if(response === error) {
                    setError(true)
                    setErrorMessage(errorMessage: "This Ninja name is already in use sorry, please try again.")
                } else {
                    setError(false)
                    setErrorMessage('')
                    Cookies.set('name', name)
                    navigate('/cards')
                }
            })
        }
    }


    return (
        <div className="add-card-container">
            <form onSubmit={handleSubmit}>
                <div className='name'>
                    <input 
                    type="text" 
                    placeholder="Name" 
                    name="name" 
                    value={name} 
                    onChange={(event) => setName(event.target.value)}/>
                </div>
                <div className='ability1'>
                <input 
                    type="text" 
                    placeholder="Ability 1" 
                    name="ability1" 
                    value={ability1} 
                    onChange={(event) => setAbility1(event.target.value)}/>
                </div>
                <div className='ability2'>
                <input 
                    type="text" 
                    placeholder="Ability 2" 
                    name="ability2" 
                    value={ability2} 
                    onChange={(event) => setAbility2(event.target.value)}/>
                </div>
                <div className='btn'>   
                    <button className="button" type='submit'>Add Card</button>
                </div>
            </form>
            <div>
                {errorMessage}
            </div>
        </div>
    )
}

export default AddCard