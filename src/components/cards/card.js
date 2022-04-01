import React from 'react'

export default function Card(props) {
    console.log(props)
    const {id, name, ability1, ability2} = props.card

    console.log(props)
    return (
        <div className='ninjaCard' key={name}>
            <div className='card-img'>
                <img
                    alt= {`card ${name}`} 
                    src={`https://robohash.org/${name}?set=set2&size=190x180`}
                />
            </div>
            <div className='abilities'>
                <p>{ability1}</p>
                <p>{ability2}</p>
            </div>
            <div className='name'>
                <h1>{name}</h1>
            </div>
        </div>
    )
}

