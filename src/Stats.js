import React, { Component } from 'react';
import './App.css';

class Stats extends Component {
  render() {
    const { vita, mana, handleChange } = this.props;
    return (
        <div className="stats">
            <div className="vita">
                <h1>Vita</h1>
                <input 
                className="vitaInput"
                value={vita}
                onChange={handleChange('vita')}
                />
            </div>
            <div className="mana">
                <h1>Mana</h1>
                <input 
                className="manaInput"
                value={mana}
                onChange={handleChange('mana')}
                />
            </div>
        </div>
    );
  }
}

export default Stats;

