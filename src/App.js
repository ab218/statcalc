import React, { Component } from 'react';
import './App.css';
import Output from './Output'
import Stats from './Stats'
import Target from './Target'

class App extends Component {
  state = {
    ac: '-76',
    vita: '0',
    mana: '0',
    desiredVita: '0',
    desiredMana: '0',
    dh: false,
    sc: false,
    sleep: false,
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

  addSleep = () => {
    if (this.state.sleep) {
      return this.setState({ sleep: false })
    }
    return this.setState({ sleep: true });
  }

  setAc = (ac) => {
    this.setState({ ac, sc: false, dh: false })
  }

  handleChange = name => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  withSleep = () => {
    if (this.state.sleep) {
      return 1.3
    }
    return 1;
  }

  render() {
    const { vita, mana, desiredVita, desiredMana, ac, dh, sc } = this.state;
    return (
      <div className="App">
        <Stats 
        vita={vita}
        mana={mana}
        desiredVita={desiredVita}
        desiredMana={desiredMana}
        handleChange={this.handleChange}
        />
        <Target 
        ac={ac} 
        addDh={this.addDh} 
        addSc={this.addSc}
        addSleep={this.addSleep}
        dh={dh} 
        handleChange={this.handleChange} 
        sc={sc}
        setAc={this.setAc}
        />
        <Output 
        vita={vita}
        mana={mana}
        desiredVita={desiredVita}
        desiredMana={desiredMana}
        ac={ac}
        withSleep={this.withSleep}
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

