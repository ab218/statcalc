import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    vita: 0,
    mana: 0,
    ac: 0
  }

  handleChange = name => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { vita, mana, ac } = this.state;
    return (
      <div className="App">
        <div className="stats">
          <div className="vita">
            <h1>Vita</h1>
            <input 
            value={this.state.vita}
            onChange={this.handleChange('vita')}
            />
          </div>
          <div className="mana">
            <h1>Mana</h1>
            <input 
            value={this.state.mana}
            onChange={this.handleChange('mana')}
            />
          </div>
        </div>
        <div className="target">
          <h3>Target AC</h3>
          <input 
          value={this.state.ac}
          onChange={this.handleChange('ac')}
          />
        </div>
        <div className="output">
          <table>
            <tr>
              <th style={{padding: '0 5vw'}}>Spell</th>
              <th>Damage</th>
            </tr>
            <tr>
              <td>LS</td>
              <td>{Math.floor((1 + (ac) / 100) * (vita * 0.5) + (mana * 2.5))}</td> 
            </tr>
            <tr>
              <td>DA</td>
              <td>{Math.floor((1 + (ac) / 100) * (vita * 1) + (mana * 1))}</td> 
            </tr>
            <tr>
              <td>Sam</td>
              <td>{Math.floor((1 + (ac) / 100) * (vita * 2))}</td> 
            </tr>
            <tr>
              <td>1st Sa</td>
              <td>{Math.floor((1 + (ac) / 100) * (vita * 1.8) + (mana * 0.45))}</td> 
            </tr>
            <tr>
              <td>2nd Sa</td>
              <td>{Math.floor((1 + (ac) / 100) * ((vita * 0.83) * 1.8) + ((mana * 0.98) * 0.45))}</td> 
            </tr>
            <tr>
              <td>3rd Sa</td>
              <td>{Math.floor((1 + (ac) / 100) * ((vita * Math.pow(0.83, 2)) * 1.8) + ((mana * Math.pow(0.98, 2)) * 0.45))}</td> 
            </tr>
            <tr>
              <td>4th Sa</td>
              <td>{Math.floor((1 + (ac) / 100) * ((vita * Math.pow(0.83, 3)) * 1.8) + ((mana * Math.pow(0.98, 3)) * 0.45))}</td> 
            </tr>
            <tr>
              <td>5th Sa</td>
              <td>{Math.floor((1 + (ac) / 100) * ((vita * Math.pow(0.83, 4)) * 1.8) + ((mana * Math.pow(0.98, 4)) * 0.45))}</td> 
            </tr>
          </table>
          </div>
      </div>
    );
  }
}

export default App;

