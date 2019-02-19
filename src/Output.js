import React, { Component } from 'react';
import './App.css';
import Mage from './Warrior.js'
import Rogue from './Rogue.js'
import Warrior from './Mage.js'

class Output extends Component {
  render() {
      const { vita, mana, ac } = this.props;
      return (
        <div className="output">
            <Rogue 
            vita={vita}
            mana={mana}
            ac={ac}
            />
            <Warrior 
            vita={vita}
            mana={mana}
            ac={ac}
            />
            <Mage 
            vita={vita}
            mana={mana}
            ac={ac}
            />
        </div>
      );
  }
}

export default Output;

