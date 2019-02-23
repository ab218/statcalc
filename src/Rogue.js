import React, { Component } from 'react';
import './App.css';

class Rogue extends Component {
  render() {
    const { vita, mana, desiredVita, desiredMana, ac, withSleep } = this.props;
    return (
    <div className="class">
        <table>
            <tbody>
                <tr><td></td><td><h5>Rogue</h5></td></tr>
                <tr>
                    <th>Spell</th>
                    <th>Current</th>
                    <th>Desired</th>
                </tr>
                <tr style={{color: 'blue'}}>
                    <td>DA</td>
                    <td>{(Math.floor(withSleep() * ((1 + (ac / 100)) * ((vita * 1) + (mana * 1))))).toLocaleString()}</td> 
                    <td>{(Math.floor(withSleep() * ((1 + (ac / 100)) * ((desiredVita * 1) + (desiredMana * 1))))).toLocaleString()}</td> 
                </tr>
                <tr style={{color: 'green'}}>
                    <td>LS</td>
                    <td>{(Math.floor(withSleep() * ((1 + (ac / 100)) * ((vita * 0.5) + (mana * 2.5))))).toLocaleString()}</td> 
                    <td>{(Math.floor(withSleep() * ((1 + (ac / 100)) * ((desiredVita * 0.5) + (desiredMana * 2.5))))).toLocaleString()}</td> 
                </tr>
                <tr style={{color: 'red'}}>
                    <td>Sam</td>
                    <td>{(Math.floor(withSleep() * ((1 + (ac / 100)) * (vita * 2)))).toLocaleString()}</td> 
                    <td>{(Math.floor(withSleep() * ((1 + (ac / 100)) * (desiredVita * 2)))).toLocaleString()}</td> 
                </tr>
                <tr style={{color: 'purple'}}>
                    <td>1st Sa</td>
                    <td>{(Math.floor(withSleep() * (((1 + (ac / 100)) * ((vita * 1.8) + (mana * 0.45)))))).toLocaleString()}</td> 
                    <td>{(Math.floor(withSleep() * (((1 + (ac / 100)) * ((desiredVita * 1.8) + (desiredMana * 0.45)))))).toLocaleString()}</td> 
                </tr>
                <tr style={{color: 'purple'}}>
                    <td>2nd Sa</td>
                    <td>{(Math.floor(withSleep() * (((1 + (ac / 100)) * (((vita * 0.83) * 1.8) + ((mana * 0.98) * 0.45)))))).toLocaleString()}</td> 
                    <td>{(Math.floor(withSleep() * (((1 + (ac / 100)) * (((desiredVita * 0.83) * 1.8) + ((desiredMana * 0.98) * 0.45)))))).toLocaleString()}</td> 
                </tr>
                <tr style={{color: 'purple'}}>
                    <td>3rd Sa</td>
                    <td>{(Math.floor(withSleep() * (((1 + (ac / 100)) * (((vita * Math.pow(0.83, 2)) * 1.8) + ((mana * Math.pow(0.98, 2)) * 0.45)))))).toLocaleString()}</td> 
                    <td>{(Math.floor(withSleep() * (((1 + (ac / 100)) * (((desiredVita * Math.pow(0.83, 2)) * 1.8) + ((desiredMana * Math.pow(0.98, 2)) * 0.45)))))).toLocaleString()}</td> 
                </tr>
                <tr style={{color: 'purple'}}>
                    <td>4th Sa</td>
                    <td>{(Math.floor(withSleep() * (((1 + (ac / 100)) * (((vita * Math.pow(0.83, 3)) * 1.8) + ((mana * Math.pow(0.98, 3)) * 0.45)))))).toLocaleString()}</td> 
                    <td>{(Math.floor(withSleep() * (((1 + (ac / 100)) * (((desiredVita * Math.pow(0.83, 3)) * 1.8) + ((desiredMana * Math.pow(0.98, 3)) * 0.45)))))).toLocaleString()}</td> 
                </tr>
                <tr style={{color: 'purple'}}>
                    <td>5th Sa</td>
                    <td>{(Math.floor(withSleep() * (((1 + (ac / 100)) * (((vita * Math.pow(0.83, 4)) * 1.8) + ((mana * Math.pow(0.98, 4)) * 0.45)))))).toLocaleString()}</td> 
                    <td>{(Math.floor(withSleep() * (((1 + (ac / 100)) * (((desiredVita * Math.pow(0.83, 4)) * 1.8) + ((desiredMana * Math.pow(0.98, 4)) * 0.45)))))).toLocaleString()}</td> 
                </tr>
            </tbody>
        </table>
    </div>
    );
  }
}

export default Rogue;

