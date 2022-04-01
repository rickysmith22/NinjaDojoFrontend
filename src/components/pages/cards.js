import React, { Component } from 'react'
import axios from 'axios'
import Card from '../cards/card'

export default class Cards extends Component {
    constructor() {
        super()

        this.state = {
            ninjacards: [],
            loading: false,
            error: false
        }

        this.renderCards = this.renderCards.bind(this)
    }

    getAllCards() {
        axios.get("http://127.0.0.1:5000/ninjacards")
        .then(response => {
            console.log(response)
            this.setState({
                ninjacards: response.data.ninjacard
            })
        })
        .catch(error => {
            console.log("Error getting cards ", error)
            this.setState({
                error: true,
                loading: false
            })
        })
    }

    renderCards() {
        return this.state.ninjacards.map(card => {
            return <Card card={card}/>
        }
        )

    }

    componentDidMount() {
        this.getAllCards()
    }

    render() {
        if (this.state.loading) {
            return (
                <div className='cards-page-wrapper'>
                    <h2>Loading Cards</h2>
                    <div className='cards-wrapper'>
                        <div className="loading">Loading...</div>
                    </div>
                </div>
            )
        }

        else if (this.state.error) {
            return (
                <div className='cards-page-wrapper'>
                    <h2>Error with Cards</h2>
                    <div className='cards-wrapper'>
                        <div className="error">An error occured... Please try again later.</div>
                    </div>
                </div>
            )
        }

        else {
            return (
                <div className='cards-page-wrapper'>
                    <h2>Cards</h2>
                    <div className="cards-wrapper">
                        {this.renderCards()}
                    </div>
                    <a href='./add-card'>
                        <button className='button'>Add Card</button>
                    </a>
                </div>
                
            )
        }
    }
}

// ghgjhgjhgjhbhj
