import React from 'react';
import './App.css';
import Mage from './Mage.js'
import Rogue from './Rogue.js'
import Warrior from './Warrior.js'

export default function Output({ vita, mana, desiredVita, desiredMana, ac, withSleep }) {
  const withAc = 1 + (ac / 100);
  return (
    <div className="output">
        <Rogue
          vita={vita}
          mana={mana}
          desiredVita={desiredVita}
          desiredMana={desiredMana}
          withAc={withAc}
          withSleep={withSleep}
        />
        <Warrior
          vita={vita}
          mana={mana}
          desiredVita={desiredVita}
          desiredMana={desiredMana}
          withAc={withAc}
          withSleep={withSleep}
        />
        <Mage
          vita={vita}
          mana={mana}
          desiredVita={desiredVita}
          desiredMana={desiredMana}
          withAc={withAc}
          withSleep={withSleep}
        />
    </div>
  );
}