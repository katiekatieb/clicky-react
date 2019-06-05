import React, { Component } from "react"
import Header from './components/header.js'
import './App.css'
import Instructions from './components/instructions.js'
import Card from './components/card.js'
import images from './images.json'

class App extends Component {

  state = {
    images,
    score: 0,
    highscore: 0,
    gamesPlayed: 0
  }

  clicker = id => {
    console.log(this)
    console.log(this.state.images)
    this.state.images.find((x, i) => {
      if (x.id === id) {
        console.log(images[i])
        if(!images[i].clicked){
          images[i].clicked = true
          this.setState({score : this.state.score + 1})
          this.state.images.sort(() => Math.random() - 0.5)
          return true 
        } else {
          this.gameOver()
        }
      }
    })
  }

  gameOver() {
    this.state.images.map(card => {
      card.clicked = false
    })
    alert('You lose.')
    this.setState({highscore: this.state.score > this.state.highscore ? this.state.score : this.state.highscore})
    this.setState({score: 0})
    this.setState({gamesPlayed: this.state.gamesPlayed + 1})
  }

  render() {
    return (
      <div className="App">
        <Header 
          score={this.state.score} 
          highscore={this.state.highscore}
          gamesPlayed={this.state.gamesPlayed}
        />
        <div className="container">
          <Instructions />
          <div className='row row-eq-height'>
            {this.state.images.map(card => (
              <Card
                clicker={this.clicker}
                id={card.id}
                key={card.id}
                image={card.image}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }
}


export default App
