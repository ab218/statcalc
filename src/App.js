import React, { Component } from 'react';
import './App.css';
import Output from './Output'
import Stats from './Stats'
import Target from './Target'
import EXP from './exp'
import References from './References'

class App extends Component {
  state = {
    ac: '-76',
    vita: '0',
    mana: '0',
    desiredVita: '0',
    desiredMana: '0',
    vitaExp: '0',
    manaExp: '0',
    desiredVitaExp: '0',
    desiredManaExp: '0',
    exp: '0',
    dh: false,
    sc: false,
    sleep: false,
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

  addSleep = () => {
    if (this.state.sleep) {
      return this.setState({ sleep: false })
    }
    return this.setState({ sleep: true });
  }

  setAc = (ac) => {
    this.setState({ ac, sc: false, dh: false })
  }

  handleChange = name => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleVita = () => (event) => {
    const { value } = event.target;
    const vCost  = Math.floor(((((Math.floor(value/20000))*4)-((Math.floor(value/20000)-6)*2))));
    const vSells = Math.floor(value/100);
    const vSegments = Math.floor((vSells-1000)/(200));
    let exp;
    if (value < 100000) {
      exp = (value / 100) * 20
    } else if (value >= 100000) {
      exp = (vSells * 20) + (((((2*vSegments)+20+22)/2)-20) * (vSegments*200)) + ((vSells-1000-(vSegments * 200)) * (vCost-20))
    } else {
      exp = null
    }
    this.setState({
      vita: value,
      vitaExp: exp
    });
  };

  handleMana = () => (event) => {
    const { value } = event.target;
    const mCost  = Math.floor(((((Math.floor(value/10000))*4)-((Math.floor(value/10000)-6)*2))))
    const mSells = Math.floor(value/50)
    const mSegments = Math.floor((mSells-1000)/(200));
    let exp;
    if (value < 50000) {
      exp = (value / 50) * 20
    } else if (value >= 50000) {
      exp = (mSells * 20) + (((((2 * mSegments) + 20 + 22) / 2) - 20) * (mSegments*200)) + ((mSells - 1000 - (mSegments * 200)) * (mCost-20))
    } else {
      exp = null
    }
    this.setState({
      mana: value,
      manaExp: exp
    });
  };

  handleDesiredVita = () => (event) => {
    const { value } = event.target;
    const vCost = Math.floor(((((Math.floor(value/20000))*4)-((Math.floor(value/20000)-6)*2))))
    const vSells = Math.floor(value/100)
    const vSegments = Math.floor((vSells-1000)/(200));
    let exp;
    if (value < 100000) {
      exp = (value / 100) * 20
    } else if (value >= 100000) {
      exp = (vSells * 20) + (((((2*vSegments)+20+22)/2)-20) * (vSegments*200)) + ((vSells-1000-(vSegments*200)) * (vCost-20))
    } else {
      exp = null
    }
    this.setState({
      desiredVita: value,
      desiredVitaExp: exp
    });
  };

  handleDesiredMana = () => (event) => {
    const { value } = event.target;
    const mCost  = Math.floor(((((Math.floor(value/10000))*4)-((Math.floor(value/10000)-6)*2))))
    const mSells = Math.floor(value/50)
    const mSegments = Math.floor((mSells-1000)/(200));
    let exp;
    if (value < 50000) {
      exp = (value / 50) * 20
    } else if (value >= 50000) {
      exp = (mSells * 20) + (((((2*mSegments)+20+22)/2)-20) * (mSegments*200)) + ((mSells-1000-(mSegments*200)) * (mCost-20))
    } else {
      exp = null
    }
    this.setState({
      desiredMana: value,
      desiredManaExp: exp
    });
  };

  withSleep = () => {
    if (this.state.sleep) {
      return 1.3
    }
    return 1;
  }
  
  render() {
    const { 
      vita, 
      mana, 
      desiredVita, 
      desiredMana, 
      ac, 
      dh, 
      sc,
      vitaExp,
      manaExp,
      desiredVitaExp,
      desiredManaExp
    } = this.state;
    return (
      <div className="App">
        <Stats 
        vita={vita}
        mana={mana}
        desiredVita={desiredVita}
        desiredMana={desiredMana}
        handleVita={this.handleVita}
        handleMana={this.handleMana}
        handleDesiredVita={this.handleDesiredVita}
        handleDesiredMana={this.handleDesiredMana}
        />
        <Target 
        ac={ac} 
        addDh={this.addDh} 
        addSc={this.addSc}
        addSleep={this.addSleep}
        dh={dh} 
        handleChange={this.handleChange} 
        sc={sc}
        setAc={this.setAc}
        />
        <EXP 
        vitaExp={vitaExp}
        manaExp={manaExp}
        desiredVitaExp={desiredVitaExp}
        desiredManaExp={desiredManaExp}
        />
        <Output 
        vita={vita}
        mana={mana}
        desiredVita={desiredVita}
        desiredMana={desiredMana}
        ac={ac}
        withSleep={this.withSleep}
        />
        <h3>Reference</h3>
        <References />
      </div>
    );
  }
}

export default App;

