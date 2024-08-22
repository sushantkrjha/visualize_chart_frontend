// src/components/CustomerLifetimeValue.js
import React from 'react';
import ChartComponent from './ChartComponent';

const CustomerLifetimeValue = () => {
  const url = 'http://127.0.0.1:8000/analytics/customer-lifetime-value/';

  return (
    <ChartComponent
      url={url}
      chartType="line"
    />
  );
};

export default CustomerLifetimeValue;