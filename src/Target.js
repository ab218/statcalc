import React, { Component } from 'react';
import './App.css';

class Target extends Component {

  render() {
    const {
      ac,
      addDh,
      addSc,
      addSleep,
      dh,
      handleChange,
      sc,
      sleep,
      setAc
    } = this.props;
    return (
        <div className="target">
          <div className="checkboxes">
            <div className="sleepBox">
                <h5>Add Sleep</h5>
                <input
                  type="checkbox"
                  checked={sleep}
                  onChange={addSleep}
                />
              </div>
            <div className="scBox">
              <h5>Add Sc</h5>
              <input
                type="checkbox"
                checked={sc}
                onChange={addSc}
              />
            </div>
            <div className="dhBox">
              <h5>Add DH</h5>
              <input
                type="checkbox"
                checked={dh}
                onChange={addDh}
              />
            </div>
          </div>
          <div className="AC">
            <h4>Target AC</h4>
            <input
            style={{width: '5vw'}}
            value={ac}
            onChange={handleChange('ac')}
            />
          </div>
          <div className="cavebuttons">
          <h5>My cave...</h5>
            <button
              className="cave"
              onClick={() => setAc('-76')}
            >
            Gogoon/ATG
            </button>
          </div>
        </div>
    );
  }
}

export default Target;

