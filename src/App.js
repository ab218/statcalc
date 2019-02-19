import React, { Component } from 'react';
import './App.css';
import Output from './Output'
import Stats from './Stats'
import Target from './Target'

class App extends Component {
  state = {
    vita: '0',
    mana: '0',
    ac: '-76',
    sc: false,
    dh: false,
  }

  addSc = () => {
    if (this.state.sc) {
      return this.setState(prevState => {
        return { ac: (parseInt(prevState.ac) - 50).toString(), sc: false }
      })
    } 
    return this.setState(prevState => {
      return { ac: (parseInt(prevState.ac) + 50).toString(), sc: true }
    })
  }

  addDh = () => {
    if (this.state.dh) {
      return this.setState(prevState => {
        return { ac: (parseInt(prevState.ac) - 12).toString(), dh: false }
      })
    }
    return this.setState(prevState => {
      return { ac: (parseInt(prevState.ac) + 12).toString(), dh: true }
    })
  }

  setAc = (ac) => {
    this.setState({ ac, sc: false, dh: false })
  }

  handleChange = name => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { vita, mana, ac, dh, sc } = this.state;
    return (
      <div className="App">
        <Stats 
        vita={vita}
        mana={mana}
        handleChange={this.handleChange}
        />
        <Target 
        ac={ac} 
        addDh={this.addDh} 
        addSc={this.addSc} 
        dh={dh} 
        handleChange={this.handleChange} 
        sc={sc}
        setAc={this.setAc}
        />
        <Output 
        vita={vita}
        mana={mana}
        ac={ac}
        />
        <div className="caveStats">
            <h3>Reference</h3>
            <h5>Turtle 4: 1.8m - 2.5m</h5>
            <h5>ATG 10: 3.3m - 4.3m</h5>
            <h5>ATG 11: 4.5m - 5.7m</h5>
        </div>
      </div>
    );
  }
}

export default App;

