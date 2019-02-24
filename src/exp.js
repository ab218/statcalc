import React, { Component } from 'react';
import './App.css';

class EXP extends Component {


  render() {
      const { vitaExp, manaExp, desiredVitaExp, desiredManaExp } = this.props
      return (
        <div className="exp">
            <div>
                {(desiredVitaExp > vitaExp) && `EXP to desired vita: ${(desiredVitaExp - vitaExp) / 1000}bil`}
            </div>
            <div>
                {(desiredManaExp > manaExp) && `EXP to desired mana: ${(desiredManaExp - manaExp) / 1000}bil`}
            </div>
        </div>
      );
  }
}

export default EXP;
