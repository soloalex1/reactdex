import React, { Component } from 'react';
import PokeList from './PokeList';
import './styles/App.scss';

class App extends Component {

	constructor() {
		super();
		this.state = {};
	}

  render() {
    return (
      <div className="App">
        <PokeList/>
      </div>
    );
  }
}

export default App;