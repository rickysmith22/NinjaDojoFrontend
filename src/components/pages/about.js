import React from 'react'

function About() {
  return (
      <div className="about-container">
        <div className='about-header'>
          <h1>
            Welcome to Ninja Dojo < br/> 
            Here is a quick glimps of some rules and whats to come!
          </h1>
        </div>
        <div className='about-content'>
            <ul>Ninja Dojo Duels is a 1v1 trading card game (for now). Here is a quick simple break down of the game and some of the rules:
            <li>Each player starts with a deck consisting of a  MINIMUM of 60 cards.</li>   
            <li>The objective is to defeat your opponent in this turn based 3v3 ninja card duel.</li>
            <li>To start off the game each player will draw 10 cards, and position their cards on the player mat. Ninjas and weapons will go face up, traps and scrolls can be played face down, but do not have to be. </li>
            <li>Youngest player will ALWAYS have the option to attack first. </li>
            <li>During each players turn, each ninja is allowed one attack on whatever ninja from the opponents team the player desires. If one of your ninja is holding a weapon card the player may also play that card as well. </li>
            <li>All W/T/S cards will count as apart of the player turn when first being played. </li>
            <li>After a W/T/S card is used it must then be placed in the discard pile unless the card states otherwise. </li>
            <li>The duel is finished when one player defeats all of their opponents ninja.</li>
            </ul>
        </div>
      </div>
    )
}

export default About

