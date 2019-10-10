import React from 'react';
import './App.css';

import axios from 'axios';

class App extends React.Component {
  componentDidMount() {
    axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => {
        console.log(response.data);
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
