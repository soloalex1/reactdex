import React, { Component } from 'react';
import PokeList from './PokeList';
import BaseAPI from '../data';
import './styles/App.scss';

class App extends Component {

	constructor() {
		super();
    this.state = {};
    this.baseAPI = new BaseAPI()
    console.log(this.baseAPI.getPokeInfo(158))
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