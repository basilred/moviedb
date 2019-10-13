import React from 'react';
import ICurrency from '../../interfaces/ICurrency';
import './CurrencyList.css';

const CurrencyItem = ({ item }: { item: ICurrency }) => {
  return (
    <li>
      {item.description}{' '}
      <span className="sign" dangerouslySetInnerHTML={{ __html: item.symbol }} />
      {item.rate_float.toFixed(2)}
    </li>
  );
};

const CurrencyList = ({ list }: { list: ICurrency[] }) => {
  return (
    <ul className="CurrencyList">
      {list.map(item => <CurrencyItem key={item.code} item={item} />)}
    </ul>
  );
};

export default CurrencyList;
