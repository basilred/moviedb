import React from 'react';
import './App.css';

import axios from 'axios';

interface ICurrency {
  code: string;
  description: string;
  rate: string;
  rate_float: number;
  symbol: string;
};

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
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
