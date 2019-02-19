import React, { Component } from 'react';
import './App.css';

class Mage extends Component {
  render() {
    const { vita, mana, ac } = this.props;
    return (
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
    );
  }
}

export default Mage;

