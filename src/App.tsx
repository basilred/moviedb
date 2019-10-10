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
          <h1>Bitcoin</h1>
          <ul>
            {this.state.data.map(item => (
              <li key={item.code}>
                {item.description}{' '}
                <span className="sign" dangerouslySetInnerHTML={{__html: item.symbol}} />
                {item.rate_float.toFixed(2)}
              </li>
            ))}
          </ul>
        </header>
      </div>
    );
  }
}

export default App;
