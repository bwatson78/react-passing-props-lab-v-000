import React from 'react';
import {Component} from 'react';

import FruitBasket from './FruitBasket';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      currentFilter: null,
      fruit: [],
      filters: []
    };

    this.updateFilter = this.updateFilter.bind(this);
  }

  componentWillMount() {
    fetch('/api/fruit_types')
      .then(res => res.json())
      .then(filters => this.setState({filters: filters}));
    fetch('/api/fruit')
      .then(res => res.json())
      .then(fruit => this.setState({ fruit: fruit }));
  };
  
  updateFilter(e) {
    this.setState({ currentFilter: e.target.value });
  }

  render() {
    return(
      <FruitBasket
        fruit={this.state.fruit}
        filters={this.state.filters}
        currentFilter={this.state.currentFilter}
        updateFilterCallback={this.updateFilter} />
    );
  }
}
