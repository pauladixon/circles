import React, { Component } from 'react'
import './App.css'
import Circles from './components/Circles/Circles'
import CircleSelector from './components/CircleSelector/CircleSelector'

const circles = [0, 1, 2, 3]

class App extends Component {

  state = {
    selected: 0
  }

  handleSelect = (circleNumber) => (
    this.setState({
      selected: circleNumber
    })
  )

  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
          <CircleSelector 
              circles={circles}
              selected={this.state.selected}
              handleSelect={this.handleSelect}
          />
          <Circles 
              circles={circles}
              selected={this.state.selected}
              handleSelect={this.handleSelect}
          />
        </main>
      </div>
    )
  }
}

export default App