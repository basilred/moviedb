import React from 'react';
import './App.css';

import axios from 'axios';
import ICurrency from './interfaces/ICurrency';
import CurrencyList from './components/CurrencyList';

class App extends React.Component {
  state: { data: ICurrency[] };

  constructor(props: Readonly<{}>) {
    super(props);
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => {
        const { bpi } = response.data;
        const result = [];

        for (const item in bpi) {
          if (bpi.hasOwnProperty(item)) {
            const element = bpi[item];
            result.push(element);
          }
        }

        this.setState({ data: result });
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Bitcoin</h1>
          <CurrencyList list={this.state.data} />
        </header>
      </div>
    );
  }
}

export default App;
