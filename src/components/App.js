import React, { Component } from 'react';
import PokeList from './PokeList';
import BaseAPI from '../data';
import './styles/App.scss';

class App extends Component {

	constructor() {
		super();
    this.state = {};
    console.log(BaseAPI.getPokemon(158))
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