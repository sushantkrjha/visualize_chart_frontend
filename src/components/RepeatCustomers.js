// src/components/RepeatCustomers.js
import React from 'react';
import ChartComponent from './ChartComponent';

const RepeatCustomers = () => {
  const url = 'http://127.0.0.1:8000/analytics/repeat-customers/';

  return (
    <ChartComponent
      url={url}
      chartType="bar" // Adjust based on data suitability
    />
  );
};

export default RepeatCustomers;
