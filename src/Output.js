import React, { Component } from 'react';
import './App.css';
import Mage from './Mage.js'
import Rogue from './Rogue.js'
import Warrior from './Warrior.js'

class Output extends Component {
  render() {
      const { vita, mana, desiredVita, desiredMana, ac, withSleep } = this.props;
      return (
        <div className="output">
            <Rogue 
            vita={vita}
            mana={mana}
            desiredVita={desiredVita}
            desiredMana={desiredMana}
            ac={ac}
            withSleep={withSleep}
            />
            <Warrior 
            vita={vita}
            mana={mana}
            desiredVita={desiredVita}
            desiredMana={desiredMana}
            ac={ac}
            withSleep={withSleep}
            />
            <Mage 
            vita={vita}
            mana={mana}
            desiredVita={desiredVita}
            desiredMana={desiredMana}
            ac={ac}
            withSleep={withSleep}
            />
        </div>
      );
  }
}

export default Output;

