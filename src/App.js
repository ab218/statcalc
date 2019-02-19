import React, { Component } from 'react';
import './App.css';

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
    const { vita, mana, ac } = this.state;
    return (
      <div className="App">
        <div className="stats">
          <div className="vita">
            <h1>Vita</h1>
            <input 
            className="vitaInput"
            value={this.state.vita}
            onChange={this.handleChange('vita')}
            />
          </div>
          <div className="mana">
            <h1>Mana</h1>
            <input 
            className="manaInput"
            value={this.state.mana}
            onChange={this.handleChange('mana')}
            />
          </div>
        </div>
        <div className="target">
          <div className="checkboxes">
            <div className="scBox">
              <h5>Add Sc</h5>
              <input 
                type="checkbox"
                checked={this.state.sc}
                onChange={this.addSc}
              />
            </div>
            <div className="dhBox">
              <h5>Add DH</h5>
              <input 
                type="checkbox"
                checked={this.state.dh}
                onChange={this.addDh}
              />
            </div>
          </div>
          <div className="AC">
            <h4>Target AC</h4>
            <input 
            style={{width: '5vw'}}
            value={this.state.ac}
            onChange={this.handleChange('ac')}
            />
          </div>
          <div className="cavebuttons">
          <h5>My cave...</h5>
            <button
              className="cave"
              onClick={() => this.setAc('-76')}
            >
            Gogoon/ATG
            </button>
          </div>
        </div>
        <div className="output">
          <div className="class">
            <table>
              <tbody>
                <tr><td></td><td><h5>Rogue</h5></td></tr>
                <tr>
                  <th>Spell</th>
                  <th>Damage</th>
                  <th>W/ Sleep</th>
                </tr>
                <tr style={{color: 'blue'}}>
                  <td>DA</td>
                  <td>{(Math.floor((1 + (ac / 100)) * ((vita * 1) + (mana * 1)))).toLocaleString()}</td> 
                  <td>{(Math.floor(1.3 * (1 + (ac / 100)) * ((vita * 1) + (mana * 1)))).toLocaleString()}</td> 
                </tr>
                <tr style={{color: 'green'}}>
                  <td>LS</td>
                  <td>{(Math.floor((1 + (ac / 100)) * ((vita * 0.5) + (mana * 2.5)))).toLocaleString()}</td> 
                  <td>{(Math.floor(1.3 * (1 + (ac / 100)) * ((vita * 0.5) + (mana * 2.5)))).toLocaleString()}</td> 
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
              </tbody>
            </table>
          </div>
          <div className="class">
            <table>
              <tbody>
                <tr><td></td><td><h5>Warrior</h5></td></tr>
                <tr>
                  <th>Spell</th>
                  <th>Damage</th>
                  <th>W/ Sleep</th>
                </tr>
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
                <tr style={{color: 'green'}}>
                  <td>WW (kwi/orb)</td>
                  <td>{(Math.floor((1 + (ac / 100)) * (vita * 1.75))).toLocaleString()}</td> 
                  <td>{(Math.floor(1.3 * (1 + (ac / 100)) * (vita * 1.75))).toLocaleString()}</td> 
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
                <tr style={{color: 'brown'}}>
                  <td>Rend</td>
                  <td>{(Math.floor((1 + (ac / 100)) * ((vita * 2 + mana * 2)))).toLocaleString()}</td> 
                  <td>{(Math.floor(1.3 * (1 + (ac / 100)) * ((vita * 2 + mana * 2)))).toLocaleString()}</td> 
                </tr>
                <tr style={{color: 'brown'}}>
                  <td>Townie</td>
                  <td>{(Math.floor((1 + (ac / 100)) * (vita * 3 ))).toLocaleString()}</td> 
                  <td>{(Math.floor(1.3 * (1 + (ac / 100)) * (vita * 3))).toLocaleString()}</td> 
                </tr>
              </tbody>
            </table>
          </div>
          <div className="class">
            <table>
              <tbody>
                <tr><td></td><td><h5>Mage</h5></td></tr>
                <tr>
                  <th>Spell</th>
                  <th>Damage</th>
                  <th>W/ Sleep</th>
                </tr>
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

