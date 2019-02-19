import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    vita: '0',
    mana: '0',
    ac: '0'
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
            <tbody>
              <tr>
                <th style={{padding: '0 5vw'}}>Spell</th>
                <th style={{padding: '0 5vw'}}>Damage</th>
                <th style={{padding: '0 5vw'}}>W/ Sleep</th>
              </tr>
              <tr><td></td><td><h5>Rogue</h5></td></tr>
              <tr style={{color: 'blue'}}>
                <td>LS</td>
                <td>{(Math.floor((1 + (ac / 100)) * ((vita * 0.5) + (mana * 2.5)))).toLocaleString()}</td> 
                <td>{(Math.floor(1.3 * (1 + (ac / 100)) * ((vita * 0.5) + (mana * 2.5)))).toLocaleString()}</td> 
              </tr>
              <tr style={{color: 'green'}}>
                <td>DA</td>
                <td>{(Math.floor((1 + (ac / 100)) * ((vita * 1) + (mana * 1)))).toLocaleString()}</td> 
                <td>{(Math.floor(1.3 * (1 + (ac / 100)) * ((vita * 1) + (mana * 1)))).toLocaleString()}</td> 
              </tr>
              <tr style={{color: 'red'}}>
                <td>Sam</td>
                <td>{(Math.floor((1 + (ac / 100)) * (vita * 2))).toLocaleString()}</td> 
                <td>{(Math.floor(1.3 * (1 + (ac / 100)) * (vita * 2))).toLocaleString()}</td> 
              </tr>
              <tr style={{color: 'purple'}}>
                <td>1st Sa</td>
                <td>{(Math.floor((1 + (ac / 100)) * ((vita * 1.8) + (mana * 0.45)))).toLocaleString()}</td> 
                <td>{(Math.floor(1.3 * (1 + (ac / 100)) * ((vita * 1.8) + (mana * 0.45)))).toLocaleString()}</td> 
              </tr>
              <tr style={{color: 'purple'}}>
                <td>2nd Sa</td>
                <td>{(Math.floor((1 + (ac / 100)) * (((vita * 0.83) * 1.8) + ((mana * 0.98) * 0.45)))).toLocaleString()}</td> 
                <td>{(Math.floor(1.3 * (1 + (ac / 100)) * (((vita * 0.83) * 1.8) + ((mana * 0.98) * 0.45)))).toLocaleString()}</td> 
              </tr>
              <tr style={{color: 'purple'}}>
                <td>3rd Sa</td>
                <td>{(Math.floor((1 + (ac / 100)) * (((vita * Math.pow(0.83, 2)) * 1.8) + ((mana * Math.pow(0.98, 2)) * 0.45)))).toLocaleString()}</td> 
                <td>{(Math.floor(1.3 * (1 + (ac / 100)) * (((vita * Math.pow(0.83, 2)) * 1.8) + ((mana * Math.pow(0.98, 2)) * 0.45)))).toLocaleString()}</td> 
              </tr>
              <tr style={{color: 'purple'}}>
                <td>4th Sa</td>
                <td>{(Math.floor((1 + (ac / 100)) * (((vita * Math.pow(0.83, 3)) * 1.8) + ((mana * Math.pow(0.98, 3)) * 0.45)))).toLocaleString()}</td> 
                <td>{(Math.floor(1.3 * (1 + (ac / 100)) * (((vita * Math.pow(0.83, 3)) * 1.8) + ((mana * Math.pow(0.98, 3)) * 0.45)))).toLocaleString()}</td> 
              </tr>
              <tr style={{color: 'purple'}}>
                <td>5th Sa</td>
                <td>{(Math.floor((1 + (ac / 100)) * (((vita * Math.pow(0.83, 4)) * 1.8) + ((mana * Math.pow(0.98, 4)) * 0.45)))).toLocaleString()}</td> 
                <td>{(Math.floor(1.3 * (1 + (ac / 100)) * (((vita * Math.pow(0.83, 4)) * 1.8) + ((mana * Math.pow(0.98, 4)) * 0.45)))).toLocaleString()}</td> 
              </tr>
              <tr><td></td><td><h5>Warrior</h5></td></tr>
              <tr style={{color: 'blue'}}>
                <td>Berserk</td>
                <td>{(Math.floor((1 + (ac / 100)) * (vita * 0.85))).toLocaleString()}</td> 
                <td>{(Math.floor(1.3 * (1 + (ac / 100)) * (vita * 0.85))).toLocaleString()}</td> 
              </tr>
              <tr style={{color: 'green'}}>
                <td>WW</td>
                <td>{(Math.floor((1 + (ac / 100)) * (vita * 1.575))).toLocaleString()}</td> 
                <td>{(Math.floor(1.3 * (1 + (ac / 100)) * (vita * 1.575))).toLocaleString()}</td> 
              </tr>
              <tr style={{color: 'red'}}>
                <td>Assault</td>
                <td>{(Math.floor((1 + (ac / 100)) * (vita * 0.5))).toLocaleString()}</td> 
                <td>{(Math.floor(1.3 * (1 + (ac / 100)) * (vita * 0.5))).toLocaleString()}</td> 
              </tr>
              <tr style={{color: 'purple'}}>
                <td>Sam</td>
                <td>{(Math.floor((1 + (ac / 100)) * ((vita * 1.875 + mana * 0.5)))).toLocaleString()}</td> 
                <td>{(Math.floor(1.3 * (1 + (ac / 100)) * ((vita * 1.875 + mana * 0.5)))).toLocaleString()}</td> 
              </tr>
              <tr style={{color: 'orange'}}>
                <td>Sa</td>
                <td>{(Math.floor((1 + (ac / 100)) * ((vita * 0.4875 + mana * 0.1)))).toLocaleString()}</td> 
                <td>{(Math.floor(1.3 * (1 + (ac / 100)) * ((vita * 0.4875 + mana * 0.1)))).toLocaleString()}</td> 
              </tr>
              <tr><td></td><td><h5>Mage</h5></td></tr>
              <tr style={{color: 'blue'}}>
                <td>HF</td>
                <td>{(Math.floor((1 + (ac / 100)) * (mana * 1.8))).toLocaleString()}</td> 
                <td>{(Math.floor(1.3 * (1 + (ac / 100)) * (mana * 1.8))).toLocaleString()}</td> 
              </tr>
              <tr style={{color: 'green'}}>
                <td>Inf</td>
                <td>{(Math.floor((1 + (ac / 100)) * (mana * 1.5))).toLocaleString()}</td> 
                <td>{(Math.floor(1.3 * (1 + (ac / 100)) * (mana * 1.5))).toLocaleString()}</td> 
              </tr>
              <tr style={{color: 'red'}}>
                <td>Sam</td>
                <td>{(Math.floor((1 + (ac / 100)) * (mana * 2.5))).toLocaleString()}</td> 
                <td>{(Math.floor(1.3 * (1 + (ac / 100)) * (mana * 2.5))).toLocaleString()}</td> 
              </tr>
              <tr style={{color: 'purple'}}>
                <td>Sa</td>
                <td>{(Math.floor((1 + (ac / 100)) * ((vita * 0.5 + mana * 2)))).toLocaleString()}</td> 
                <td>{(Math.floor(1.3 * (1 + (ac / 100)) * ((vita * 0.5 + mana * 2)))).toLocaleString()}</td> 
              </tr>
              <tr style={{color: 'orange'}}>
                <td>Za</td>
                <td>{(Math.floor((1 + (ac / 100)) * ((vita * 0.3 + mana * 1.8)))).toLocaleString()}</td> 
                <td>{(Math.floor(1.3 * (1 + (ac / 100)) * ((vita * 0.3 + mana * 1.8)))).toLocaleString()}</td> 
              </tr>
            </tbody>
          </table>
          </div>
      </div>
    );
  }
}

export default App;

