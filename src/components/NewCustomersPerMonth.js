// src/components/NewCustomersPerMonth.js
import React from 'react';
import ChartComponent from './ChartComponent';

const NewCustomersPerMonth = () => {
  const url = 'http://127.0.0.1:8000/analytics/new-customers/month/';

  return (
    <ChartComponent
      url={url}
      chartType="line"
    />
  );
};

export default NewCustomersPerMonth;
