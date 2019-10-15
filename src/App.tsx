import React from 'react';
import './App.css';

import axios from 'axios';
import ICurrency from './interfaces/ICurrency';
import CurrencyList from './components/CurrencyList';

interface IState {
  data: ICurrency[],
  loading: boolean;
  errored: boolean;
}

class App extends React.Component {
  state: IState;

  constructor(props: Readonly<{}>) {
    super(props);
    this.state = {
      data: [],
      loading: true,
      errored: false,
    }
  }

  componentDidMount() {
    axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => {
        this.setState({ data: Object.values(response.data.bpi) });
      })
      .catch(err => {
        console.log(err);
        this.setState({ errored: true });
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  }

  render() {
    const {loading, errored, data} = this.state;
    const bitcoinBlock = loading ? <p>Loading…</p> : <CurrencyList list={data} />;
    const errorMsg = <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>;

    return (
      <div className="App">
        <header className="App-header">
          <h1>Bitcoin Price Index</h1>
          { errored ? errorMsg : bitcoinBlock }
        </header>
      </div>
    );
  }
}

export default App;
