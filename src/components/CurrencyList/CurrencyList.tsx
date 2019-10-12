import React from 'react';
import ICurrency from '../../interfaces/ICurrency';
import './CurrencyList.css';

const CurrencyList = ({ list }: { list: ICurrency[] }) => {
  return (
    <ul className="CurrencyList">
      {list.map(item => (
        <li key={item.code}>
          {item.description}{' '}
          <span className="sign" dangerouslySetInnerHTML={{ __html: item.symbol }} />
          {item.rate_float.toFixed(2)}
        </li>
      ))}
    </ul>
  );
};

export default CurrencyList;
