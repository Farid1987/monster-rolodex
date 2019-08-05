import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';


class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      filterField: ''
    }
  }

  handleChange = (e) => {
    this.setState({ filterField: e.target.value })
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')

      .then(response => response.json())
      .then(users => this.setState({monsters : users}));
  }

  render() {
    const { monsters, filterField } = this.state;
    const filteredMonsters = monsters.filter((monster) => (
      monster.name.toLowerCase().includes(filterField.toLowerCase())
    ));
    return(
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox  
          placeholder="Search Monster"
          handleChange={this.handleChange} />
        <CardList monsters={ filteredMonsters }/>
      </div>
    )
  }
}

export default App;
